import { NextRequest, NextResponse } from "next/server";

interface LeadData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message?: string;
}

// In-memory store (use a real database in production)
const leads: LeadData[] = [];

export async function POST(request: NextRequest) {
  try {
    const body: LeadData = await request.json();

    // Basic validation
    if (!body.name || !body.email || !body.company) {
      return NextResponse.json(
        { error: "Name, email, and company are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Store lead
    const lead: LeadData = {
      name: body.name,
      email: body.email,
      company: body.company,
      phone: body.phone || "",
      message: body.message || "",
    };

    leads.push(lead);

    console.log("New lead captured:", lead);
    console.log("Total leads:", leads.length);

    return NextResponse.json(
      {
        success: true,
        message: "Lead captured successfully",
        data: lead,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    count: leads.length,
    data: leads,
  });
}
