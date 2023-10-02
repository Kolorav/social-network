import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request: NextRequest) {
  try {
    const jwt_token = request.cookies.get("auth-token")!.value;
    try {
      const verification = jwt.verify(jwt_token, process.env.JWT_SECRET!);
      if (verification) {
        return NextResponse.json(
          {
            success: true,
            valid: true,
          },
          { status: 200 }
        );
      }
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
          valid: false,
        },
        { status: 403 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}
