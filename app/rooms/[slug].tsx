// @/app/rooms/[slug].tsx
import { useRouter } from 'next/router';
import Image from 'next/image';
import welcome1 from '@/app/home/sections/welcome/welcome1.jpg'; // Sample image for now

const roomData = {
  tara: {
    name: 'บ้านธาราภิรมย์',
    price: '4,500฿ /คืน',
    total: '6',
    image: welcome1,
  },
  chomdao: {
    name: 'บ้านชมเดือน',
    price: '2,000฿ /คืน',
    total: '2',
    image: welcome1,
  },
};

const RoomDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const room = roomData[slug as keyof typeof roomData];

  if (!room) {
    return <p>Room not found!</p>;
  }

  return (
    <section className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{room.name}</h1>
        <Image src={room.image} alt={room.name} width={500} height={300} />
        <p className="mt-4">Price: {room.price}</p>
        <p>Total people: {room.total}</p>
      </div>
    </section>
  );
};

export default RoomDetails;
