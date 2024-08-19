"use client"
import React from 'react'
import { compileString } from 'sass'

export default function ProductDetail(props:any) {
    console.log("giá trị props",props);
     const {params} =props
  return (
    <div>sản phẩm có id là :{params.idproduct}</div>
  )
}
/*
    client component
    sever component
*/