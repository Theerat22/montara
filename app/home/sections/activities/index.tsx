"use client";
import Image from "next/image";
import atv1 from "@/app/home/sections/activities/atv1.jpg";
import atv2 from "@/app/home/sections/activities/atv2.jpg";
import {easeOut, motion} from "framer-motion";

export const Activities = () => {
  return (
    <>
      <section id="activities" className="min-h-[1200px] pt-44 bg-gradient-to-b from-white to-gray-50 py-12 ">
        <div className="container mx-auto px-4 text-center">
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay : 0, ease: easeOut}}
            >
            <h1 className="text-4xl font-bold text-gray-800 mb-4 lg:text-5xl ">
                กิจกรรมภายในรีสอร์ท
            </h1>
            </motion.div>     
        </div>

      <div className="container mx-auto px-4 mt-8 flex flex-col gap-4 ">

        <div className="grid grid-cols-1 gap-4 pt-32 justify-center items-center lg:grid-cols-3">
            <motion.p 
            className="text-black mb-8 text-center font-bold text-4xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay : 0.5, ease: easeOut}}
            >
            กิจกรรมรถ AV
            </motion.p>

            <motion.div 
          className="col-span-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay : 1, ease: easeOut}}
          >
            <Image src={atv1} alt="Travel" className="rounded-xl" />
          </motion.div>
          <motion.div 
          className="col-span-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay : 1.25, ease: easeOut}}
          >
            <Image src={atv2} alt="Travel" className="rounded-xl" />
          </motion.div>

        </div>

      </div>

    </section>
    </>
  );
};
