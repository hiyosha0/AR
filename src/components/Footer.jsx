import Button from "./Button";

const Footer = () => {
  return (
    <footer className=" w-screen bg-violet-300 py-4 text-black">
      <div className=" container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <div className=" flex justify-center flex-col items-start">
          <p className=" font-semibold text-center text-sm md:text-left mb-2">
            ©Hiyosha Vinupama 2024 AR and recent innovations{" "}
          </p>
          <img
            src="/img/uni.png "
            alt="logo_uni"
            className=" w-[80px] shadow-xl rounded-md"
          />
        </div>
        <div className=" font-circular-web flex flex-col justify-center gap-4 md:justify-start">
          <p>student Id:74004786</p>
          <a href="/references">
            <Button title={"References"}>References</Button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
