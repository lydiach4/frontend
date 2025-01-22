function Landing() {
  return (
    <>
      <nav className="m-2 p-2 flex justify-between mt-3">
        <img src="./logo.png" alt="" className="w-[200px] h-[60px]" />
        <ul className="flex gap-10 ">
          <li className="text-xl font-light  text-cyan-950 ">Home</li>
          <li className="text-xl font-light text-cyan-950 ">About</li>
          <li className="text-xl font-light text-cyan-950 ">Offers</li>
        </ul>
        <button className=" border-2 border-cyan-950 bg-cyan-700 text-white  rounded-full p-4 hover:opacity-10">
          Take an Appointment
        </button>
      </nav>
      <div className="flex gap-4 m-7">
        <div className="">
          <h1 className="text-8xl font-bold ">
            Healing <span className="text-cyan-700"> Hands</span> , Caring{" "}
            <span className="text-cyan-700">Hearts</span>{" "}
          </h1>
          <p>
            Your journey to better health starts here . Schedule a consultation
            with Dr.Aknouche , a trusted expert dedicated to providing
            compassionate and personalized care .
          </p>{" "}
        </div>
        <img src="HeroSection.jpg" alt="img" className="rounded-2xl w-[50%]" />{" "}
      </div>
      <div>
        <h1> How Does It Work ? </h1>
        <ul>
          <li>
            {" "}
            <h1></h1>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Landing;
