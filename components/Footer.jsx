function Footer() {
  return (
    <>
      <footer className="border-t border-black mt-20">
        <div className="flex p-3 justify-between ">
          <div className="flex flex-col">
            <img src="logo.png" alt="logo" className="w-[200px] " />
            <ul className="text-lg items-center">
              <li>
                <span className="font-semibold text-cyan-950">
                  Phone Number:
                </span>
                +213000500201
              </li>
              <li>
                <span className=" font-semibold text-cyan-950">Email: </span>
                healwellclinic@gmail.com
              </li>
              <li>
                <span className=" font-semibold text-cyan-950">Adress: </span>
                cite 822 log LPP Amirouche Reghaia Alger
              </li>
            </ul>
          </div>
          <div className="text-center m-10">
            <h1 className="text-lg m-3 underline"> Social Media: </h1>
            <ul className="flex gap-4 ">
              <li>
                {" "}
                <a href="facebook.com">
                  <img src="facebook.png" alt="facebook" className="h-[50px]" />
                </a>
              </li>
              <li>
                <a href="ig.com">
                  {" "}
                  <img
                    src="instagram.png"
                    alt="instagram"
                    className="h-[50px]"
                  />
                </a>
              </li>
              <li>
                <a href="linkedin">
                  <img src="linkedin.png" alt="linkedin" className="h-[50px]" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-center font-light p-3"> Copyright © 2025 HealWell</p>
      </footer>
    </>
  );
}
export default Footer;
