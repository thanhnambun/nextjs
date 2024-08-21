import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET(request: Request) {
  try {
    const filePath = path.join(process.cwd(), "dataBase/users.json");
    const data = await fs.readFile(filePath, "utf8");
    const users = JSON.parse(data);

    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");

    if (name) {
      const filteredUsers = users.filter((user: any) =>
        user.name.toLowerCase().includes(name.toLowerCase())
      );

      return NextResponse.json({ data: filteredUsers });
    }

    return NextResponse.json({ data: users });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch user data" },
      { status: 500 }
    );
  }
}
