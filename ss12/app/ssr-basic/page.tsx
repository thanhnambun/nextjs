import React from "react";

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export default async function TrangChu() {
  const data = await fetchData();
  return (
    <div>
      <h1>Danh sách Bài viết</h1>
      <ul>
        {data.map((post: { id: number; title: string; body: string }) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
