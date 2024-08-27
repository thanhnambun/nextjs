import React from "react";
//tạo function lấy data
async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

export default async function page() {
  const user = await getUser();
  return (
    <div>
      {user.map((item: any) => {
        <li>{item.body}</li>;
      })}
    </div>
  );
}
