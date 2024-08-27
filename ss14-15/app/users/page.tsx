import React, { useEffect, useState } from "react";

export default function User() {
  const [user, setUser] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.log("lỗi", err));
  });
  return <div>danh sách user
    (user.map)
  </div>;
}
