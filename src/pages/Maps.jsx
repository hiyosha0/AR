import Marquee from "react-fast-marquee";
import AnimatedText from "../components/AnimatedText";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Maps = () => {
  return (
    <section className=" bg-yellow-300">
      <Navbar />
      <div className=" p-3 ">
        <p className=" mb-[15px] flex justify-center items-center text-center font-general text-sm">
          01. seamless navigation with AR-Maps
        </p>
        <AnimatedText
          title={"AR - Maps"}
          containerClass={"!text-black special-font !text-10xl"}
        />
        <Marquee speed={20} className=" mt-3 font-general">
          <h2 className=" text-3xl  p-1  bg-violet-300 text-white font-bold">
            With AR maps, every street becomes an interactive story.
          </h2>
          <h2 className=" text-3xl  p-1  bg-violet-300 text-white font-bold">
            With AR maps, every street becomes an interactive story.
          </h2>
          <h2 className=" text-3xl  p-1  bg-violet-300 text-white font-bold">
            With AR maps, every street becomes an interactive story.
          </h2>
        </Marquee>
        <div className=" flex justify-center mt-[50px] rotate-3">
          <video
            src="/videos/feature-3.mp4"
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
            AR maps revolutionize navigation by overlaying digital information
            onto the real world through a device camera. Imagine walking down a
            street and seeing virtual arrows guiding you to your destination, or
            having points of interest like restaurants and shops pop up as 3D
            models in your field of view. This immersive experience enhances
            wayfinding, making it easier and more engaging to explore unfamiliar
            places.
          </p>
          <p className="  w-[500px]   font-general">
            <span className=" text-lg font-semibold">
              {" "}
              Why They are so poweful ?{" "}
            </span>{" "}
            <br />
            AR maps are powerful because they bridge the gap between the digital
            and physical worlds, offering a more immersive and interactive way
            to navigate and explore.
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
              src="/img/Maps.png"
              className=" rounded-xl w-[400px] mt-[40px] shadow-xl "
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Maps;
