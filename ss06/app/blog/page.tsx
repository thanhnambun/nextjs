"use client"
import React from 'react'
import { useRouter } from "next/navigation";

export default function TrangChu() {
     const post = [
       {
         id: 1,
         title: "Lập trình cơ bản C",
         slug: "lap-trinh-co-ban-c",
       },
       {
         id: 2,
         title: "Lập trình Java core",
         slug: "lap-trinh-java-core",
       },
       {
         id: 3,
         title: "Lập trình PHP",
         slug: "lap-trinh-php",
       },
       {
         id: 4,
         title: "Lập trình ReactJS",
         slug: "lap-trinh-reactjs",
       },
     ];
      const router = useRouter();
     const handleSlug = (slug:string) => {
       router.push(`/blog/${slug}`);
       console.log(slug);
     };
  return (
    <div>
      <div className="post-list">
        {post.map((post) => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <button onClick={() => handleSlug(post.slug)}>Xem chi tiết</button>
          </div>
        ))}
      </div>
    </div>
  );
}
