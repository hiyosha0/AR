/* eslint-disable react/prop-types */
import { TiLocationArrow } from "react-icons/ti";
import BentoCard from "./BentoCard";
import { useRef, useState } from "react";

{
  /**Bento card titl effect component here */
}

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();
  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg)
     rotateY(${tiltY}deg) scale3d(0.98,0.98,0.98)`;
    setTransformStyle(newTransform);
  };
  const handleMouseLeave = () => {
    setTransformStyle("");
  };
  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const Features = () => {
  return (
    <section className=" bg-black pb-52 ">
      <div className=" container mx-auto px-3 md:px-10">
        <div className=" px-5 py-32">
          <p className=" font-circular-web text-lg text-blue-50 ">
            What are the most significant recent innovations of Augmented
            Reality
          </p>

          <p className=" max-w-md font-circular-web text-lg text-blue-50 opacity-50 ">
            AR based wearables, AR Gameing and AR navigation are key innovations
            which gained popularity recently.
          </p>
        </div>

        <BentoTilt className=" border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                wea<b>r</b>ables
              </>
            }
            description="AR based wearables are developed with tons of sensors and they accurately analyse human body signals nad react on those"
          />
        </BentoTilt>
        <div className=" grid h-[135vh] grid-cols-2 grid-rows-3  gap-7">
          <BentoTilt className=" bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title="AR Gameing"
              description="AR games are developed with tons of sensors and they accurately analyse human body signals nad react on those"
            />
          </BentoTilt>
          <BentoTilt className=" bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title="AR Maps"
              description="when maps are using ar it can actually simulate your way to destination. All you need to do is point out the camera"
            />
          </BentoTilt>
          <BentoTilt className=" bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title="AR Maps"
              description="As an improvement of Ar based maps and navigation we can point out Google maps and its AR features. Ar maps are also capable of providing geometry information to the user"
            />
          </BentoTilt>
          <BentoTilt className=" bento-tilt_2 ">
            <div className="  flex size-full flex-col justify-between bg-violet-300 p-5  ">
              <h1 className=" bento-title max-w-64">More coming soon!</h1>
              <TiLocationArrow className=" m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>
          <BentoTilt className=" bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className=" size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
