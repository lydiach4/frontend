function booking() {
  return (
    <>
      <h1 className="text-8xl font-semibold text-center max-w-7xl mx-auto mb-6">
        Take an appointement <br />
        <span className="text-4xl font-light text-center max-w-7xl mx-auto">
          (Fill all the informations below)
        </span>
      </h1>{" "}
      <form className="flex flex-col p-16 max-w-5xl mx-auto   gap-4 border-2 rounded-xl  ">
        <div className="flex gap-5">
          <div className="flex flex-col">
            <label className="text-xl font-semibold" htmlFor="firstname">
              First Name
            </label>
            <input
              className="border border-gray-600 p-3 text-xl rounded-lg "
              type="text"
              name="firstname"
              placeholder="First Name"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xl font-semibold" htmlFor="lastname">
              Last Name
            </label>
            <input
              className="border border-gray-600 p-3 text-xl rounded-lg "
              type="text"
              name="lastname"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col ">
            <label
              className="text-xl font-semibold p-3"
              htmlFor="Date of Birth"
            >
              Date of Birth
            </label>
            <input
              className="border border-gray-600 p-3 text-xl rounded-lg "
              type="date"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xl font-semibold p-3" htmlFor="gender">
              Gender
            </label>
            <select
              className="border border-gray-600 p-3 text-xl rounded-lg "
              name="gender"
              placeholder="gender"
            >
              <option value="select"> please select an option</option>
              <option value="men">men</option>
              <option value="women"> women</option>
            </select>
          </div>
        </div>
        <label className="text-xl font-semibold" htmlFor="phonenumber">
          Phone Number
        </label>
        <input
          className="border border-gray-600 p-3 text-xl rounded-lg "
          type="tel"
          name="phonenumber"
        />
        <label className="text-xl font-semibold" htmlFor="adress">
          Adress
        </label>
        <input
          className="border border-gray-600 p-3 text-xl rounded-lg "
          type="text"
          name="adress"
        />
        <label className="text-xl font-semibold" htmlFor="email">
          Email
        </label>
        <input
          className="border border-gray-600 p-3 text-xl rounded-lg "
          type="email"
          name="email"
        />
        <div className="flex gap-10">
          <label className="text-xl font-semibold">
            Have you ever applied to our facility before{" "}
          </label>
          <div className="flex ">
            <input type="checkbox" name="yes" />
            <p htmlFor="yes" className="text-xl ">
              Yes
            </p>
          </div>
          <div className="flex">
            {" "}
            <input type="checkbox" name="no" />
            <p htmlFor="no" className="text-xl">
              No
            </p>
          </div>
        </div>
        <button className="rounded-full text-xl font-light py-3 m-6 border ">
          Book Now
        </button>
      </form>
    </>
  );
}
export default booking;
