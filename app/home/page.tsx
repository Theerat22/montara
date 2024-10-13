// import Image from "next/image";
// import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import {Welcome} from "./sections/welcome/index";
import { Rooms } from "./sections/room/index";
import { Activities } from "./sections/activities/index";
const Home: React.FC = () => {

    return (
        <>
        <Navbar 
            home="#welcome"
            rooms="#rooms"
            activity="#activities"
            services="#services"
            contact="#contact"
        />
        <main>
            <Welcome />
            <Activities />
            <Rooms />
        </main>
        </>
    );
};

export default Home;
