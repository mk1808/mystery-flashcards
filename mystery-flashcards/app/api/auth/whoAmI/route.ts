import { getUser } from "@/utils/authUtils";
import connectToDB from "@/utils/server/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    await connectToDB();
    return NextResponse.json(await getUser(request));
}
