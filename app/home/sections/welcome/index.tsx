import Image from "next/image";
import Link from "next/link";
import montara from "@/app/home/sections/welcome/montara.jpg";

export const Welcome = () => {
  return (
    <>
      <section id="welcome" className="min-h-[850px] pt-40 bg-gradient-to-b from-white to-gray-50 py-12 ">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          ม่อนธารารีสอร์ท ยินดีต้อนรับ
        </h1>
        <p className="text-gray-500 mb-8">
          Accompanying us, you have a trip full of experiences. With Chisfis, booking accommodation, resort villas, hotels.
        </p>
        <Link href="#room">
          <button className="bg-indigo-600 text-white py-3 px-8 rounded-full hover:bg-indigo-700">
            ดูบ้านพัก
          </button>
        </Link>
      </div>

      <div className="container mx-auto px-4 mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="col-span-1">
          <Image src={montara} alt="Travel" className="rounded-xl" />
        </div>
        <div className="col-span-1">
          <Image src={montara} alt="Travel" className="rounded-xl" />
        </div>
        <div className="col-span-1">
          <Image src={montara} alt="Travel" className="rounded-xl" />
        </div>
      </div>

    </section>
    </>
  );
};
