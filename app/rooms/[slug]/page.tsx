// import React, { useEffect, useRef } from 'react';
import Navbar from "@/app/components/Navbar";
import { notFound } from 'next/navigation';
import Image from 'next/image';
import welcome1 from '@/app/home/sections/welcome/welcome1.jpg';
import { LuAirVent } from "react-icons/lu";
// import {Motion} from "framer-motion";
// import { MdOutlineWaterDamage } from "react-icons/md";
const roomData = {
  room1: {
    name: 'บ้านธาราภิรมย์',
    price: '4,500฿ /คืน',
    total: '6',
    image: welcome1,
  },
  room2: {
    name: 'บ้านชมเดือน',
    price: '2,000฿ /คืน',
    total: '2',
    image: welcome1,
  },
  room3: {
    name: 'บ้านชมดาว',
    price: '2,000฿ /คืน',
    total: '2',
    image: welcome1,
  },
  room4: {
    name: 'บ้านชมจันทร์',
    price: '2,000฿ /คืน',
    total: '2',
    image: welcome1,
  },
};

export default function RoomDetails({ params }: { params: { slug: string } }) {
  const room = roomData[params.slug as keyof typeof roomData];

  if (!room) {
    notFound(); 
  }
  return (
    <>
    <Navbar 
            home="/home#welcome"
            rooms="/home#rooms"
            activity="/home#activity"
            services="/home#services"
            contact="/home#contact"
        />
    <main>
    <section className="min-h-screen pt-36 bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4 lg:text-left">{room.name}</h1>
      </div>

        <div  className="snap-x snap-mandatory flex overflow-x-auto justify-center space-x-8 py-8">
            <div className="snap-center flex-shrink-0 p-4 bg-white shadow-xl rounded-xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
                <Image src={welcome1} alt="Travel" className="rounded-xl w-[400px] h-auto object-cover" />
            </div>
            <div className="snap-center flex-shrink-0 p-4 bg-white shadow-xl rounded-xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
                <Image src={welcome1} alt="Travel" className="rounded-xl w-[400px] h-auto object-cover" />
            </div>
            <div className="snap-center flex-shrink-0 p-4 bg-white shadow-xl rounded-xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
                <Image src={welcome1} alt="Travel" className="rounded-xl w-[400px] h-auto object-cover" />
            </div>
            <div className="snap-center flex-shrink-0 p-4 bg-white shadow-xl rounded-xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
                <Image src={welcome1} alt="Travel" className="rounded-xl w-[400px] h-auto object-cover" />
            </div>
            <div className="snap-center flex-shrink-0 p-4 bg-white shadow-xl rounded-xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
                <Image src={welcome1} alt="Travel" className="rounded-xl w-[400px] h-auto object-cover" />
            </div>
        </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 pt-10 lg:grid-cols-2">
          <div id="information">
            <p className="text-blue-600 text-left text-2xl pb-4 font-bold">ข้อมูล</p>
            <p className="text-gray-800 text-left text-xl pb-2 font-thin">จำนวนผู้เข้าพัก: {room.total}</p>
          </div>

          <div id="facilities">
            <p className="text-blue-600 text-left text-2xl pb-4 font-bold">สิ่งอำนวยความสะดวก</p>

            <div className="flex flex-row">
              <LuAirVent size={32} color="black" />
              <p className="text-gray-800 text-left text-xl pb-2 font-thin ml-4">เครื่องปรับอากาศ</p>
            </div>

            <div className="flex flex-row mt-3">
              <LuAirVent size={32} color="black" />
              <p className="text-gray-800 text-left text-xl pb-2 font-thin ml-4">เครื่องทำน้ำอุ่น</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    </main>
    </>
    
  );
}
