"use client"
import { usePathname } from "next/navigation";

export default function Bt4() {
  const pathname = usePathname();
  const companyName = pathname.split("/").pop(); 

  return (
    <div>
      <h1>Welcome to {companyName}!</h1>
    </div>
  );
}
