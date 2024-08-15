import React from 'react'
import Company from './bt4/Company'
import Bt5 from './bt5/Bt5'
import Bt10 from './bt10/Bt10'
import Image from "next/image";

export default function page() {
  return (
    <div>
      <Company></Company>
      <Bt5></Bt5>
      <Bt10></Bt10>
      <Image
        src="https://file3.qdnd.vn/data/images/0/2023/05/03/vuhuyen/khanhphan.jpg?dpi=150&quality=100&w=870"
        alt=""
        width={100}
        height={100}
      />
    </div>
  );
}
