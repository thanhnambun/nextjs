import React from "react";
interface Post {
  id: number;
  title: string;
  body: string;
}

async function fetchPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch post data");
  }
  const post = await res.json();
  return post;
}

export default async function PostDetail({
  params,
}: {
  params: { id: string };
}) {
  const post = await fetchPost(params.id);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
