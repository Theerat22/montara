// import Image from "next/image";
// import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import {Welcome} from "./sections/welcome/index";

const Home: React.FC = () => {

    return (
        <>
        <Navbar />
        <main>
            <Welcome />
        </main>
        </>
    );
};

export default Home;
