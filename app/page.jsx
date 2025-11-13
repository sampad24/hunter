import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import Joinus from "./components/Joinus";
import Studentworks from "./components/Studentworks.js";
import Courses from "./components/Courses";
import Image from "next/image";
import VideoPlayer from "./videoplayer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div id="home" className="bg-white"> <div className="max-sm:pt-10 sm:pt-10 md:pt-40 lg:pt-40  mb-0 pt-2 pb-10 rounded-2xl h-[70%] w-[90%] m-auto"> <VideoPlayer /></div></div>
        <div className="bg-white h-0.5 opacity-15 left-0"></div>
        <Courses />
        <Studentworks />
        <Aboutus />
        <Joinus />
        <Footer />
    </div>
  );
}
