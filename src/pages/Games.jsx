import Marquee from "react-fast-marquee";
import AnimatedText from "../components/AnimatedText";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Games = () => {
  return (
    <section className=" bg-yellow-300">
      <Navbar />
      <div className=" p-3 ">
        <p className=" mb-[15px] flex justify-center items-center text-center font-general text-sm">
          02. Gaming is interactive than ever.
        </p>
        <AnimatedText
          title={"AR - Gaming & Entertainment"}
          containerClass={"!text-black special-font !text-10xl"}
        />
        <Marquee speed={20} className=" mt-3 font-general">
          <h2 className=" text-3xl  p-1  bg-violet-300 text-white font-bold">
            AR gaming brings digital elements into the real world for an
            immersive experience.
          </h2>
          <h2 className=" text-3xl  p-1  bg-violet-300 text-white font-bold">
            AR gaming brings digital elements into the real world for an
            immersive experience.
          </h2>
          <h2 className=" text-3xl  p-1  bg-violet-300 text-white font-bold">
            AR gaming brings digital elements into the real world for an
            immersive experience.
          </h2>
        </Marquee>
        <div className=" flex justify-center mt-[50px] rotate-3">
          <video
            src="/videos/hero-3.mp4"
            autoPlay
            loop
            muted
            className=" object-contain w-[1080px] rounded-3xl p-2 bg-gray-400 border border-gray-700"
          />
        </div>
        <div className=" flex flex-col md:flex-row  justify-center md:flex md:justify-between ml-[40px] mr-[40px] items-center mt-[50px]">
          <p className="  w-[500px]   font-general">
            <span className=" text-lg font-semibold"> Do You Know ? </span>{" "}
            <br />
            Augmented Reality (AR) based gaming enhances the real-world
            environment by overlaying digital information and virtual objects
            onto the player view. This technology allows for immersive and
            interactive experiences, where players can interact with both
            physical and virtual elements seamlessly. AR games often use devices
            like smartphones, tablets, or AR glasses to blend the real and
            virtual worlds, creating unique gameplay experiences that are
            engaging and innovative. By integrating real-world surroundings with
            game elements, AR gaming offers a dynamic and captivating way to
            play, making it a rapidly growing trend in the gaming industry.
          </p>
          <p className="  w-[500px]   font-general">
            <span className=" text-lg font-semibold">
              {" "}
              Why They are so poweful ?{" "}
            </span>{" "}
            <br />
            AR gaming provides a highly immersive experience by blending digital
            elements with the real world. and players have access to interact
            with both physical and virtual elements seamlessly. AR games often
            enable a dynamic and captivating gameplay
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <div className=" mt-[80px]">
            <Marquee direction="right">
              <h1 className=" bg-violet-300 font-zentry text-6xl text-white">
                Get a rough Idea about it__
              </h1>
              <h1 className=" bg-violet-300 font-zentry text-6xl text-white">
                Get a rough Idea about it__
              </h1>
              <h1 className=" bg-violet-300 font-zentry text-6xl text-white">
                Get a rough Idea about it__
              </h1>
            </Marquee>
          </div>
          <div>
            <img
              src="/img/gaming.jpg"
              className=" rounded-xl w-[400px] mt-[40px] shadow-xl "
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Games;
