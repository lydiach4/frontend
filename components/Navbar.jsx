function Navbar() {
  return (
    <>
      <header>
        <nav className="m-2 p-2 flex justify-between mt-3">
          <img src="./logo.png" alt="" className="w-[200px] h-[60px]" />
          <ul className="flex gap-10 ">
            <li className="text-xl font-light  text-cyan-950 ">Home</li>
            <li className="text-xl font-light text-cyan-950 ">About</li>
            <li className="text-xl font-light text-cyan-950 ">Offers</li>
          </ul>
          <button className="text-xl font-light border-2 border-gray-500 bg-cyan-700 text-white  rounded-full p-4 hover:opacity-10">
            Book an Appointment
          </button>
        </nav>
      </header>
    </>
  );
}
export default Navbar;
