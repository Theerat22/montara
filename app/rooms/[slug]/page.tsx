// app/rooms/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import welcome1 from '@/app/home/sections/welcome/welcome1.jpg'; // Sample image for now

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
};

export default function RoomDetails({ params }: { params: { slug: string } }) {
  const room = roomData[params.slug as keyof typeof roomData];

  if (!room) {
    notFound(); // Use Next.js 13's notFound function if room is not found
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
}
