// app/api/notes/route.ts
import { NextResponse } from "next/server";
import { getNotes } from "@/app/lib/prisma";


export async function GET() {
  try {
    const notes = await getNotes();
    return NextResponse.json(notes);
  
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch notes" },
      { status: 500 }
    );
  }
}
