/* eslint-disable react/prop-types */
{
  /** reusable image component */
}
const ImageClipBox = ({ src, clipClass }) => {
  return (
    <div className={clipClass}>
      <img src={src} />
    </div>
  );
};

const Contact = () => {
  return (
    <div id="contact" className=" my-20 min-h-96 w-screen px-10 ">
      <div className=" relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className=" absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block  lg:left-20 lg:w-90">
          <ImageClipBox clipClass=" contact-clip-path-1 " src="" />
          <ImageClipBox
            clipClass=" contact-clip-path-2 lg:translate-y-40 translate-y-60 "
            src="img/contactImg.png"
          />
        </div>
        <div className=" absolute -top-40 left-20  w-60  sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src={"img/Contact-1.png"}
            clipClass={" absolute md:scale-125"}
          />
          <ImageClipBox
            clipClass=" sword-man-clip-path md:scale-125 "
            src="img/Contact-1.png"
          />
        </div>
        <div>
          <div className=" flex flex-col items-center text-center ">
            <p className=" font-general text-[10px] uppercase">Learn More</p>
            <p className=" special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
              It is the new era of the inter<b>a</b>ction with devices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
