import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const user = await currentUser();
    if (!user)
      return NextResponse.json(
        {
          error: "where is the user?",
        },
        { status: 401 }
      );
      
    return NextResponse.json("working");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
