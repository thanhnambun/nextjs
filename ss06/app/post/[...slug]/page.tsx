import React from "react";
interface Product {
  slug: "string";
}
interface Props {
  params: Product;
}

export default function Blog(props: Props) {
  console.log("giá trị props", props);
  const { params } = props;
  return <div>Bạn đang xem blog với đường dẫn:{params.slug}</div>;
}
