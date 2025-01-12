import Marquee from "react-fast-marquee";
import Footer from "./Footer";
import AnimatedText from "../components/AnimatedText";
import Navbar from "./Navbar";

const Refrences = () => {
  return (
    <section className=" bg-yellow-300">
      <Navbar />
      <div className=" p-3 ">
        <p className=" mb-[15px] flex justify-center items-center text-center font-general text-sm">
          01. References Used and the sources
        </p>
        <AnimatedText
          title={"REFERENCES"}
          containerClass={"!text-black special-font !text-10xl"}
        />
        <Marquee speed={20} className=" mt-3 font-general">
          <h2 className=" text-3xl  p-1  bg-violet-300 text-white font-bold">
            REFERENCES REFERENCES REFERENCES REFERENCES REFERENCES REFERENCES
            REFERENCES REFERENCES REFERENCES REFERENCES REFERENCES REFERENCES
            REFERENCES REFERENCES REFERENCES REFERENCES REFERENCES REFERENCES
            REFERENCES REFERENCES
          </h2>
        </Marquee>
        <div className=" flex justify-center mt-[50px] ">
          <div>
            <p className=" font-general text-center w-[750px] text-lg">
              <p className=" font-bold text-xl">References</p>
              <br />
              Alexandru Predescu, & Mariana Mocanu. (2024). Gamification in
              Real-World Applications: Interactive Maps and Augmented Reality.
              <br />
              Bauyrzhan Doskarayev, Nurlan Omrav, Zhuldyz Ismagulova, Zhadra
              Kozhamkulova, Elmira Nurlybaeva, & Galia kasimova. (2023).
              Development of Computer Vision-enabled Augmented Reality Games to
              Increase Motivation for Sports. International Journal of Advanced
              Computer Science and Applications, 14, 8.
              doi:10.14569/ijacsa.2023.0140428
              <br />
              BrownLee, M. (Producer), & BrownLee, M. (Director). (2024). I
              Trired Real Augmented Reality Glasses [Motion Picture]. USA.
              Retrieved from{" "}
              <a
                className=" text-violet-300 font-semibold"
                href="https://youtu.be/G0eKzU_fV00?si=oZScbqmxKkxwFac0"
              >
                https://youtu.be/G0eKzU_fV00?si=oZScbqmxKkxwFac0
              </a>
              <br />
              Gauri Jha, Pawan singh, & Lavanya Sharma. (2019). Recent
              Advancements of Augmented Reality in Real TimeApplications.
              Research Gate. doi:10.35940/ijrte.B10100.0782S719
              <br />
              Insights, S. (2024). Top 10 Augmented reality trends in 2024.
              Retrieved from startus insights:
              <a
                className=" text-violet-300 font-semibold"
                href="https://www.startus-insights.com/innovators-guide/augmented-reality-trends/"
              >
                https://www.startus-insights.com/innovators-guide/augmented-reality-trends/
              </a>
              <br />
              Kisoo kim, Hyosill Yang, Jihun Lee, & Won Gu Lee. (2023).
              Metaverse Wearables for Immersive Digital Healthcare: A.
              <br />
              Munesh Kumar Sharma, Stya Chachaundiya, & Vishal. (2020).
              Augmented Reality Navigation. International Journal of Engineering
              Research, 6. doi:10.17577/IJERTV9IS060441
              <br />
              Mustafa Doga, Eric J. Gonzalez, Karen Ahuja, Ruofei Du, Andrea
              Colaco, Johnny Lee, . . . David Kim. (2024, October 1). Augmented
              Object Intelligence with XR-Objects. Google Research, 15.
              Retrieved from
              <a
                className=" text-violet-300 font-semibold"
                href="https://research.google/blog/augmented-object-intelligence-with-xr-objects/"
              >
                https://research.google/blog/augmented-object-intelligence-with-xr-objects/
              </a>
              <br />
              PlugXR. (2024, May 2024). Augmented reality navigation - A
              complete guide. Retrieved from PlugXR:
              <a
                className=" text-violet-300 font-semibold"
                href="https://www.plugxr.com/augmented-reality/augmented-reality-navigation/"
              >
                https://www.plugxr.com/augmented-reality/augmented-reality-navigation/
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Refrences;
