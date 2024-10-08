// import Image from "next/image";
// import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import {Welcome} from "./sections/welcome/index";
import { Rooms } from "./sections/room/index";
const Home: React.FC = () => {

    return (
        <>
        <Navbar />
        <main>
            <Welcome />
            <Rooms />
        </main>
        </>
    );
};

export default Home;
