import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import Joinus from "./components/Joinus";
import Studentworks from "./components/Studentworks.js";
import Courses from "./components/Courses";
import Image from "next/image";
import VideoPlayer from "./videoplayer";
import Head from "next/head";

export default function Home() {
  return (
    
    <div>
      <Head>
  <title>JGVFX Online – Learn VFX, Animation, Game Design & AI</title>

  <meta
    name="description"
    content="JGVFX Online is a cutting-edge digital learning platform dedicated to empowering the next generation of creators in Visual Effects (VFX), Animation, Game Design, and Artificial Intelligence (AI)."
  />

  <meta
    name="keywords"
    content="JGVFX, VFX course, Animation course, Game design course, AI course, Online VFX institute, Best VFX academy, VFX training India, VFX school online, Learn animation online"
  />

  <meta name="author" content="JGVFX Online" />

  {/* OpenGraph */}
  <meta
    property="og:title"
    content="JGVFX Online – Master VFX, Animation, Game Design & AI"
  />
  <meta
    property="og:description"
    content="Learn industry-level VFX, Animation, Game Design, and AI with JGVFX Online – a next-gen digital learning platform."
  />
  <meta property="og:image" content="/logo.jpg" />
  <meta property="og:url" content="" />
  <meta property="og:type" content="website" />


</Head>


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
