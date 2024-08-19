"use client";
import { usePathname } from "next/navigation";

export default function Blogs() {
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
  const pathname = usePathname();
  console.log("Current Pathname:", pathname);

  const parts = pathname.split("/").filter(Boolean);
  const slug = parts.length > 1 ? parts[1] : "";
  return (
    <div>
      <h1>Blog Page</h1>
      {post.map((post) => {
        if (slug === post.slug) {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>Chi tiết nội dung bài viết về {post.title}.</p>
            </div>
          );
        }
      })}
    </div>
  );
}
