import React from "react";
//tạo function lấy data
async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}

export default async function page() {
  const user = await getUser();
  return (
    <div>
      {user.map((item: any) => {
        <li>{item.name}</li>;
      })}
    </div>
  );
}
