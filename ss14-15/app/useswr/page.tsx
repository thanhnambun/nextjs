"use client"
import axios from 'axios'
import React from 'react'
import useSWR from 'swr'

const fecthData=async (url:string)=>{
   const res= await axios.get(url);
   return res.data
}
export default function UseSWR() {
    const { data, error } = useSWR("https://jsonplaceholder.typicode.com/users",fecthData)
    if (error) return<div>lấy dữ liệu thất bại</div>
    if (!data) return<div>đang lấy dữ liệu</div>
  return (
    <div>sử dụng user SWR
        {data.map((item:any) => {
            return <li key={item.id}>{item.name}</li>
        })}
    </div>
  )
}
