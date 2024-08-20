import { NextResponse } from "next/server";


const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com" },
];

type ParamTypes = {
  params: {
    id: number;
  };
};
export async function GET(
  request: Request,
  { params }: ParamTypes 
) {
  const result = users.find((item) => item.id === +params.id);
    return NextResponse.json({ data: result });
}

export async function PATCH(res: any, { params }: ParamTypes) {
  const data = await res.json();
  const { id } = params;
  return NextResponse.json({
    message: "cập nhập thành công",
    id: id,
    data: data,
  });
}
export async function DELETE(res: any, { params }: ParamTypes) {
  const { id } = params;
  return NextResponse.json({ message: "Xóa thông tin thành công", id: id });
}
export async function searchByName(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  if (!name) {
    return NextResponse.json(
      { message: "Vui lòng cung cấp tên để tìm kiếm" },
      { status: 400 }
    );
  }

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(name.toLowerCase())
  );
  return NextResponse.json({ data: filteredUsers });
}
