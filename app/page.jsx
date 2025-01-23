function Landing() {
  return (
    <>
      <div className="flex gap-4 m-7  ">
        <div className="flex align-middle  gap-6 flex-col">
          <h1 className="text-8xl font-light text-cyan-700 mt-3">Welcome </h1>{" "}
          <br />
          <h1 className="text-8xl font-bold ">
            Healing <span className="text-cyan-700"> Hands</span> , Caring{" "}
            <span className="text-cyan-700">Hearts</span>{" "}
          </h1>
          <p className="m-6 text-3xl font-medium text-center ">
            Your journey to better health starts here . Schedule a consultation
            with Dr.Aknouche , a trusted expert dedicated to providing
            compassionate and personalized care .
          </p>{" "}
          <div className="text-center">
            <button className="m-5 font-light rounded-full text-xl p-4 border-2 border-gray-500 text-white bg-cyan-700  ">
              Book an Appointment
            </button>
            <button className="rounded-full font-light text-xl ml-9 p-4 border-2 border-cyan-950 ">
              Contact Us
            </button>
          </div>
        </div>
        <img
          src="HeroSection.jpg"
          alt="img"
          className="rounded-2xl h-[800px]  "
        />{" "}
      </div>
      <hr />
      <div className="m-7 flex gap-5 ">
        <img src="steto.jpg" alt="image" className="rounded-xl h-[400px]" />
        <div className="flex flex-col mx-auto p-16 ">
          <h1 className="text-4xl font-bold m-4 text-left text-cyan-700 ">
            {" "}
            Why Book With Us ?{" "}
          </h1>
          <ul className="flex flex-col gap-10 ">
            <li>
              <span className="text-xl font-semibold">Easy Scheduling:</span> a
              seamless process to book appointments im minutes{" "}
            </li>
            <li>
              <span className="text-xl font-semibold">
                Trusted Professional:
              </span>{" "}
              qualified and experienced specialist
            </li>
            <li>
              <span className="text-xl font-semibold">
                {" "}
                No Long Wait Times:
              </span>{" "}
              get care when you need it most
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Landing;
