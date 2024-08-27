import axios from "axios";
import React from "react";
//tạo function lấy data với axios
async function getUser() {
  const res:any = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data
}

export default async function page() {
  const user = await getUser();
  return (
    <div>
      {user.map((item: any) => {
        return <li key={item.id}>{item.username}</li>;
      })}
    </div>
  );
}
