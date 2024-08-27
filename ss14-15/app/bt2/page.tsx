import React from "react";
//tạo function lấy data
async function getUser() {
  const res = await fetch(" https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
}

export default async function page() {
  const user = await getUser();
  return (
    <div>
      {user.map((item: any) => {
        <li>{item.title}</li>;
        <li>{item.price}</li>;
        <li>{item.image}</li>;
      })}
    </div>
  );
}
