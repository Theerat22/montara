"use client";
import Image from "next/image";
import doi from "@/app/home/sections/nearby/doi.jpg";
import khun from "@/app/home/sections/nearby/khun.jpg";
import wat from "@/app/home/sections/nearby/wat.jpg";
import Link from "next/link";
import {easeOut, motion} from "framer-motion";

export const Nearby = () => {
  const nearby = [
    { name: 'ดอยเสมอดาว', image: doi,link:'https://thailandtourismdirectory.go.th/en/attraction/1852',delay:1 },
    { name: 'ดอยขุนสถาน', image: khun,link:'https://www.facebook.com/KhunSathanNationalParkThailand/?locale=th_TH',delay:1.25},
    { name: 'พุทธสถานถ้ำเชตวัน',image: wat,link:'https://g.co/kgs/C8BV6wf',delay:1.5},
    ];

  return (
    <section id="rooms" className="min-h-screen pt-32 py-12 ">
        <div className="bg-cream p-10 ">
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay : 0, ease: easeOut}}>
            <h2 className="text-3xl font-semibold text-center mb-6 text-black">สถานที่ท่องเที่ยวใกล้เคียง</h2>
            <p className="text-center text-gray-500 mb-8">สถานที่ท่องเที่ยวใกล้เคียงกับรีสอร์ท ในอำเภอนาน้อย น่านใต้</p>
        </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {nearby.map((nearby, index) => (

        <div key={index} className="relative group ">
            <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay : nearby.delay, ease: easeOut}}>
            <Image
            src={nearby.image}
            alt={nearby.name}
            className="w-full h-[450px] shadow-md  object-cover rounded-lg transition-all duration-300 ease-in-out transform group-hover:shadow-lg"
            />

            {/* Text on top of the image */}
            <Link href={nearby.link}>
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-60 flex items-center justify-center rounded-lg transition-all duration-300">
                <h5 className="text-white text-3xl font-bold">{nearby.name}</h5>
            </div>
            </Link>
            </motion.div>
        </div>
          
        ))}
      </div>
    </div>
    </section>
  );
};

export default Nearby;
