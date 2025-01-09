import Marquee from "react-fast-marquee";
import AnimatedText from "../components/AnimatedText";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <section className=" bg-yellow-300">
      <Navbar />
      <div className=" p-3 ">
        <p className=" mb-[15px] flex justify-center items-center text-center font-general text-sm">
          01. Augmented Reality the technical revolution
        </p>
        <AnimatedText
          title={"Summery of AR"}
          containerClass={"!text-black special-font !text-10xl"}
        />
        <Marquee speed={20} className=" mt-3 font-general">
          <h2 className=" text-3xl  p-1  bg-violet-300 text-white font-bold">
            AR blends digital and physical worlds, creating immersive
            experiences.
          </h2>
          <h2 className=" text-3xl  p-1  bg-violet-300 text-white font-bold">
            AR blends digital and physical worlds, creating immersive
            experiences.
          </h2>
          <h2 className=" text-3xl  p-1  bg-violet-300 text-white font-bold">
            AR blends digital and physical worlds, creating immersive
            experiences.
          </h2>
        </Marquee>
        <div className=" flex justify-center mt-[50px] rotate-3">
          <img
            src="/img/AR-summery.jpg"
            className=" object-contain w-[720px]  rounded-3xl p-2 bg-gray-400 border border-gray-700"
          />
        </div>
        <div className=" flex flex-col md:flex-row  justify-center md:flex md:justify-center ml-[40px] mr-[40px] items-center mt-[50px]">
          <p className="  w-[500px]   font-general">
            <span className=" text-lg font-semibold"> Do You Know ? </span>{" "}
            <br />
            Augmented reality (AR) enhances our perception of reality by
            overlaying computer-generated content onto real-world environments.
            Recent advancements, driven by AI, improved hardware, and 5G
            connectivity, are expanding AR reach beyond entertainment.
            Industries like manufacturing and healthcare are leveraging AR for
            improved efficiency and safety, while consumers experience immersive
            brand interactions and personalized shopping. As AR technology
            evolves, we can expect a future where the lines between the digital
            and physical worlds continue to blur, transforming how we work,
            learn, and interact with the world around us.
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <div className=" mt-[80px]">
            <Marquee direction="right">
              <h1 className=" bg-violet-300 font-zentry text-6xl text-white">
                Next Generation of digital interaction
              </h1>
              <h1 className=" bg-violet-300 font-zentry text-6xl text-white">
                Next Generation of digital interaction
              </h1>
              <h1 className=" bg-violet-300 font-zentry text-6xl text-white">
                Next Generation of digital interaction
              </h1>
            </Marquee>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default AboutPage;
