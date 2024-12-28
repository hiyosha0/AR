/* eslint-disable no-unused-vars */
import { useRef } from "react";
import AnimatedTitle from "./AnimatedText";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";

const Story = () => {
  const frameRef = useRef("null");
  const handleMouseLeave = () => {
    const element = frameRef.current;
    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };
  return (
    <section id="story" className=" min-h-dvh w-screen bg-black text-blue-50">
      <div className=" flex size-full flex-col items-center py-10 pb-24">
        <p className=" font-general text-sm uppercase md:text-[10px]">
          The story of Augmented Reality
        </p>
        <div className=" relative size-full ">
          <AnimatedTitle
            title={"The story of <b>A</b>ugmented <b>R</b>eality"}
            sectionId="#story"
            containerClass=" mt-5 mb-7 pointer-events-none mix-blend-difference relative z-10 "
          />
          <div className=" mt-1">
            <div className="">
              <div className=" mt-6 ">
                <img
                  src="/img/1.png"
                  alt="entrance"
                  className=" ml-2 mr-2 object-contain "
                />
                <img
                  src="/img/2.png"
                  alt="entrance"
                  className="ml-2 mr-2 object-contain "
                />
              </div>
            </div>

            <RoundedCorners />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
