import { NextRequest, NextResponse } from "next/server";
import fs from"fs"
import path from "path"


export async function GET() {
    try {
        const filePath = path.join(process.cwd(), "dataBase/users.json");
        const data = fs.readFileSync(filePath, "utf8");
        const users = JSON.parse(data);
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.json(error)
    }
}
export async function POST(request:NextRequest,response:NextResponse) {
    
    
    //bước 1 lấy dữ liệu từ phía client
        const userRepuest = await request.json();
    //bước 2 lấy ra đường dẫn của file cần ghi 
    const filePath = path.join(process.cwd(), "dataBase/users.json");
    // đọc file cần ghi vào 
    const users = JSON.parse(fs.readFileSync(filePath, "utf8"));
    //push dữu liệu vào trong mảng
    users.push(userRepuest)

    //bước 3 ghi file 
    fs.writeFileSync(filePath, users, "utf8");

    return NextResponse.json("Post")
}



