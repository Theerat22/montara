import welcome1 from "@/app/home/sections/welcome/welcome1.jpg";
import Image from "next/image";
import doi from "@/app/home/sections/nearby/doi.jpg";
import khun from "@/app/home/sections/nearby/khun.jpg";
import Link from "next/link";
export const Nearby = () => {
  const nearby = [
    { name: 'ดอยเสมอดาว', image: doi,link:'https://thailandtourismdirectory.go.th/en/attraction/1852' },
    { name: 'ดอยขุนสถาน', image: khun,link:'https://www.facebook.com/KhunSathanNationalParkThailand/?locale=th_TH'},
    { name: 'บ้านชมสวน',image: welcome1,link:'https://thailandtourismdirectory.go.th/en/attraction/1852'},
    ];

  return (
    <section id="rooms" className="min-h-screen pt-32 py-12 ">
        <div className="bg-cream p-10 ">
      <h2 className="text-3xl font-semibold text-center mb-6 text-black">สถานที่ท่องเที่ยวใกล้เคียง</h2>
      <p className="text-center text-gray-500 mb-8">สถานที่ท่องเที่ยวใกล้เคียงกับรีสอร์ท ในอำเภอนาน้อย น่านใต้</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {nearby.map((nearby, index) => (

        <div key={index} className="relative shadow-md group">
            <Image
            src={nearby.image}
            alt={nearby.name}
            className="w-full h-[450px] object-cover rounded-lg transition-all duration-300 ease-in-out transform group-hover:shadow-lg"
            />

            {/* Text on top of the image */}
            <Link href={nearby.link}>
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-60 flex items-center justify-center rounded-lg transition-all duration-300">
                <h5 className="text-white text-3xl font-bold">{nearby.name}</h5>
            </div>
            </Link>
        </div>

          

        ))}
      </div>
    </div>
    </section>
  );
};

export default Nearby;
