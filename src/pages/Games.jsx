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
            Augmented reality based wearables now capable of providing 100%
            hands free human interaction with computers and simmilar electronic
            devices. Insted of scrolling through a screen, AR can let you
            discover
          </p>
          <p className="  w-[500px]   font-general">
            <span className=" text-lg font-semibold">
              {" "}
              Why They are so poweful ?{" "}
            </span>{" "}
            <br />
            They are using a technology called XR objects. it can actually make
            every real-world object interactive.this technology can upgrade user
            experience of AR wearables to a whole different level.further with
            the help of advanced Ai models such as Google Gemini,AR wearables
            are capable of anything
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
