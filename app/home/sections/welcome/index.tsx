"use client";
import Image from "next/image";
import Link from "next/link";
// import montara from "@/app/home/sections/welcome/montara.jpg";
import welcome1 from "@/app/home/sections/welcome/welcome1.jpg";
import welcome2 from "@/app/home/sections/welcome/welcome2.jpg";
import welcome3 from "@/app/home/sections/welcome/welcome3.jpg";
import {easeOut, motion} from "framer-motion";

export const Welcome = () => {
  return (
    <>
      <section id="welcome" className="min-h-[850px] pt-44 bg-gradient-to-b from-white to-gray-50 py-12 ">
      <div className="container mx-auto px-4 text-center">
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay : 0, ease: easeOut}}
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            ม่อนธารารีสอร์ท ยินดีต้อนรับ
          </h1>
        </motion.div>
        
          <motion.p 
          className="text-gray-500 mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay : 0.5, ease: easeOut}}
          >
          บ้านไม้ในป่าสักท่ามกลางธรรมชาติ สเต็ก อาหาร เครื่องดื่ม เเละ กาเเฟสด Free Wifi รถ ATV
          </motion.p>
        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay : 0.75, ease: easeOut}}
        >
          <Link href="#rooms">
            <button className="bg-indigo-600 text-white py-3 px-8 rounded-full hover:bg-indigo-700">
              ดูบ้านพัก
            </button>
          </Link>
        </motion.div>
        
      </div>

      <div className="container mx-auto px-4 mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <motion.div 
          className="col-span-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay : 1, ease: easeOut}}
          >
            <Image src={welcome1} alt="Travel" className="rounded-xl" />
          </motion.div>
        
          <motion.div 
          className="col-span-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay : 1.2, ease: easeOut }}
          >
            <Image src={welcome2} alt="Travel" className="rounded-xl" />
          </motion.div>

        <motion.div 
          className="col-span-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay : 1.5, ease: easeOut }}
          >
            <Image src={welcome3} alt="Travel" className="rounded-xl" />
        </motion.div>

      </div>

    </section>
    </>
  );
};
