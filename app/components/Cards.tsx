import Image, { StaticImageData } from "next/image";
import Link from "next/link";
interface ProfileCardProps {
    name: string;
    price: string;
    total: string;
    imageUrl: StaticImageData;
    path: string;
  }
const ProfileCard: React.FC<ProfileCardProps> = ({ name, price, total, imageUrl,path}) => {
    return (
      <div className="min-w-sm bg-white rounded-lg shadow-xl p-6 text-center">
        {/* Profile Image */}
        <Image
          className="w-52 h-60 mx-auto rounded-lg"
          src={imageUrl}
          alt={name}
          width={500}
          height={500}
        />

        <h2 className="mt-4 text-xl font-semibold text-gray-800">{name}</h2>
  
        {/* Position */}
        <p className="text-gray-500">เข้าพักได้ {total} คน</p>
        <p className="text-gray-500">ราคา {price}</p>
        

        <Link  href={`/home/rooms/${path}`}>
          <button className="bg-blue-600 text-white py-1 px-5 mt-3 font-bold rounded-full hover:bg-indigo-700">
            ดู
          </button>
        </Link>
      </div>
    );
  };
  
  export default ProfileCard;
  