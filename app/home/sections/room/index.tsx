import welcome1 from "@/app/home/sections/welcome/welcome1.jpg";
import ProfileCard from '@/app/components/Cards';



export const Rooms = () => {
  const roomName = [
    { name: 'บ้านธาราภิรมย์', total: "6", price: '4,500฿ /คืน', image: welcome1,slug: 'room1' },
    { name: 'บ้านชมเดือน', total: "2", price: '2,000฿ /คืน', image: welcome1,slug: 'room2' },
    { name: 'บ้านชมสวน', total: "2", price: '1,500฿ /คืน', image: welcome1,slug: 'room3' },
    { name: 'บ้านชมดาว', total: "4", price: '2,500฿ /คืน', image: welcome1,slug: 'room4' },
    { name: 'บ้านชมจันทร์', total: "4", price: '3,000฿ /คืน', image: welcome1,slug: 'room5' },
    { name: 'บ้านต้นไม้ ชั้นบน', total: "2", price: '1,500฿ /คืน', image: welcome1,slug: 'room6' },
    { name: 'บ้านต้นไม้ ชั้นล่าง', total: "2", price: '1,500฿ /คืน', image: welcome1,slug: 'room7' },
    { name: 'บ้านชมธาร', total: "2", price: '2,000฿ /คืน', image: welcome1,slug: 'room8' },
    ];

  return (
    <section id="rooms" className="min-h-screen pt-36 bg-gradient-to-b from-white to-gray-50 py-12 ">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                รายการห้องพัก
            </h1>
            <div className=" grid grid-cols-1 gap-4 pt-10 lg:grid-cols-4">
                {roomName.map((item, index) => (
                  <div key={index}>
                        <ProfileCard 
                            name={item.name}
                            total={item.total}
                            price={item.price}
                            imageUrl={item.image}
                            slug={item.slug}
                          />
                    </div>
                ))}      
            </div>
        </div>
    </section>
  );
};

export default Rooms;
