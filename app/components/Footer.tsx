import React from "react";
import { FaFacebook,} from "react-icons/fa";

function Footer() {
	return (
		<>
        <div id="contact">
			<div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-6">
							ม่อนธารารีสอร์ท
						</p>

					</ul>
				</div>
				<div className="p-5 justify-center">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Facebook</p>
                        <div className="flex flex-row items-center">
                            <FaFacebook className="text-2xl cursor-pointer text-blue-600 text-center" size={50}/>
                            <li className="text-gray-500 text-lg pl-1 font-semibold hover:text-blue-600 cursor-pointer">: ม่อนธารารีสอร์ท</li>
                        </div>
						
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">เบอร์โทรศัพท์</p>
						<li className="text-gray-500 text-lg pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							081-494-4008 (ุคุณอ้อย)
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<h1 className=" text-gray-800 font-semibold">
					© 2021-2022 All rights reserved | Build with ❤ by{" "}
					<span className="hover:text-blue-600 font-semibold cursor-pointer">
						streamline{" "}
					</span>
				</h1>
			</div>
        </div>
		</>
	);
}

export default Footer;