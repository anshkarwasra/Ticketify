// app/api/route.js
import Ticket from "@/app/models/Ticket";
import connectDB from "@/app/models/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const tickets = await Ticket.find();
    
    if (tickets.length === 0) {
      return NextResponse.json({ message: "No tickets found" }, { status: 404 });
    }
    
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (err) {
    console.error("Error in GET tickets:", err);

    // Handle authentication errors
    if (err.name === "MongoServerError" && err.code === 8000) {
      return NextResponse.json(
        { message: "Database authentication failed" },
        { status: 401 }
      );
    }

    // Handle connection timeout errors
    if (err.name === "MongooseError" && err.message.includes("buffering timed out")) {
      return NextResponse.json(
        { message: "Database connection timed out" },
        { status: 408 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error", error: err.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const ticketData = body.formData;
    
    await Ticket.create(ticketData);
    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (err) {
    console.error("Error in POST ticket:", err);

    // Handle validation errors
    if (err.name === "ValidationError") {
      return NextResponse.json(
        { message: "Invalid ticket data", errors: err.errors },
        { status: 400 }
      );
    }

    // Handle authentication errors
    if (err.name === "MongoServerError" && err.code === 8000) {
      return NextResponse.json(
        { message: "Database authentication failed" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error", error: err.message },
      { status: 500 }
    );
  }
}