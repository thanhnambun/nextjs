import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

type ParamTypes = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params }: ParamTypes) {
  try {
    const filePath = path.join(process.cwd(), "dataBase/users.json");
    const data = await fs.readFile(filePath, "utf8");
    const users = JSON.parse(data);
    const result = users.find((item) => item.id === +params.id);
    return NextResponse.json({ data: result });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch user data" },
      { status: 500 }
    );
  }
}

export async function PATCH(res: any, { params }: ParamTypes) {
  try {
    const data = await res.json();
    const filePath = path.join(process.cwd(), "dataBase/users.json");
    const usersData = await fs.readFile(filePath, "utf8");
    const users = JSON.parse(usersData);

    const userIndex = users.findIndex((user) => user.id === +params.id);
    if (userIndex === -1) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    users[userIndex] = { ...users[userIndex], ...data };
    await fs.writeFile(filePath, JSON.stringify(users, null, 2));

    return NextResponse.json({
      message: "User updated successfully",
      data: users[userIndex],
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

export async function DELETE(res: any, { params }: ParamTypes) {
  try {
    const filePath = path.join(process.cwd(), "dataBase/users.json");
    const data = await fs.readFile(filePath, "utf8");
    let users = JSON.parse(data);

    const userIndex = users.findIndex((user) => user.id === +params.id);
    if (userIndex === -1) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    users = users.filter((user) => user.id !== +params.id);
    await fs.writeFile(filePath, JSON.stringify(users, null, 2));

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const filePath = path.join(process.cwd(), "dataBase/users.json");
    const usersData = await fs.readFile(filePath, "utf8");
    const users = JSON.parse(usersData);

    const newId = users.length
      ? Math.max(...users.map((user: any) => user.id)) + 1
      : 1;
    const newUser = { id: newId, ...data };

    users.push(newUser);
    await fs.writeFile(filePath, JSON.stringify(users, null, 2));

    return NextResponse.json({
      message: "User added successfully",
      data: newUser,
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add user" }, { status: 500 });
  }
}

export async function searchByName(request: Request) {
  try {
    const filePath = path.join(process.cwd(), "dataBase/users.json");
    const data = await fs.readFile(filePath, "utf8");
    const users = JSON.parse(data);

    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");

    if (!name) {
      return NextResponse.json(
        { message: "Vui lòng cung cấp tên để tìm kiếm" },
        { status: 400 }
      );
    }

    const filteredUsers = users.filter((user: any) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
    return NextResponse.json({ data: filteredUsers });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to search users" },
      { status: 500 }
    );
  }
}
