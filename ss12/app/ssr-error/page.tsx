import React from "react";


async function fetchData() {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/nonexistent-url"
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
}

export default async function ErrorHandlingPage() {
  let posts;
  try {
    posts = await fetchData(); 
  } catch (error) {
    return (
      <div>
        <h1>Xử lý Lỗi với SSR</h1>
        <p>Đã xảy ra lỗi khi lấy dữ liệu. Vui lòng thử lại sau.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Xử lý Lỗi với SSR</h1>
      <ul>
        {posts.map((post: { id: number; title: string; body: string }) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
