const Footer = () => {
  return (
    <footer className=" w-screen bg-violet-300 py-4 text-black">
      <div className=" container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className=" text-center text-sm md:text-left">
          ©Hiyosha Vinupama 2024 AR and recent innovations{" "}
        </p>
        <div className=" font-circular-web flex justify-center gap-4 md:justify-start">
          <p>student Id:74004786</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
