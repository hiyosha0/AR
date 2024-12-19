import Marquee from "react-fast-marquee";
import BentoCard from "./BentoCard";
import AnimatedText from "./AnimatedText";

const Wearbles = () => {
  return (
    <section className=" bg-black text-white relative h-dvh w-screen overflow-x-hidden">
      <div className=" p-4">
        <div className=" mt-3 mb-3">
          <Marquee speed={20}>
            <div className=" flex">
              <h1 className=" font-bold p-1 font-general text-1xl bg-yellow-300 text-black">
                AR Wearbles will replace typical touch-screens and other
                culturel ways of human interation with computers
              </h1>
              <h1 className=" p-1  font-bold font-general text-1xl bg-yellow-300 text-black">
                AR Wearbles will replace typical touch-screens and other
                culturel ways of human interation with computers
              </h1>
            </div>
          </Marquee>
        </div>
        <div className=" flex justify-start p-0 mb-4 mt-4 ">
          <AnimatedText
            title={"AR Wearbles"}
            containerClass={" flex justify-start p-0 mb-4 mt-4"}
          />
        </div>
        <p className=" p-4 font-general leading-8">
          Ar werables will replace our current interaction with computers and
          other elctronic devices. they have ability to capture human signals
          directly and give feedbacks acurately. it only takes our haptics to
          perform{" "}
          <span className=" p-2 bg-violet-300 ">
            complex human interactions
          </span>{" "}
          with machines.
        </p>
      </div>

      <div className=" p-10 ">
        <BentoCard
          description={
            "ar wearables can upgrade  our interaction with computers to a whole new level. because of the benifits that AR wearables can provide for society, leading companies like Apple, Google, and Microsoft are investing in AR technology based wearables."
          }
          title={"Only haptics"}
          src={"/videos/feature-3.mp4"}
        />
      </div>
    </section>
  );
};

export default Wearbles;
