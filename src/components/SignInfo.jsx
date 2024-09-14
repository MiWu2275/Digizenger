import { Link } from "react-router-dom";


function SignInfo() {

  return (
    <section className="mb-[20px]">
      <main className="ml-[-60px]">
        <div className="mt-[-10px] grid mb-[20px] ml-[-50px]">
                <div className="ml-[-7rem] text-[36px] font-bold mt-[-10px]">
                    <span className="text-[#00BCD4]">Tell us more </span>
                    <span>about you</span>
                </div>
                <div className="text-left justify-self-center w-[400px] ml-[-3rem] text-slate-400 mt-[5px]">
                    Fill in your detail to create your account. 
                </div>
        </div>

        <div className="grid grid-cols-2 mr-[23rem] ml-[23.5rem]">
            <form className="grid grid-row-5 gap-y-[20px] px-[20px] mt-[1rem]  ml-[4rem] text-center">
                <div className="flex gap-3">
                      <div className="grid">
                          <label className="block place-self-start text-slate-500 mb-[10px]">First Name:</label>
                          <input
                            type="text"
                            name="firstName"
                            className="w-[140px] h-[35px] rounded-[5px] bg-slate-100"/>
                      </div>
                      <div className="flex flex-col">
                          <label className="block place-self-start text-slate-500 mb-[10px]">Last Name:</label>
                          <input
                            type="text"
                            name="lastName"
                            className="w-[140px] h-[35px] rounded-[5px] bg-slate-100"
                          />
                      </div>
                </div>

                <div className="grid">
                      <label className="block place-self-start text-slate-500 mb-[10px]">Date Of Birth:</label>
                      <div className="flex gap-3">
                          <div className="grid">
                              <select id="options" name="options" className="w-[90px] h-[35px] px-[10px] rounded-[5px] text-slate-400 bg-slate-100">
                                    <option value="option1">Day</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                    <option value="option4">Option 4</option>
                              </select>
                          </div>
                          <div className="">
                              <select id="options" name="options" className="w-[90px] h-[35px] px-[10px] text-slate-400 rounded-[5px] bg-slate-100">
                                        <option value="option1">Month</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                        <option value="option4">Option 4</option>
                              </select>
                          </div>
                          <div className="">
                              <select id="options" name="options" className="w-[90px] h-[35px] text-slate-400 rounded-[5px] px-[10px] bg-slate-100">
                                        <option value="option1">Year</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                        <option value="option4">Option 4</option>
                                </select>
                          </div>
                      </div>
                </div>

                <div className="grid">
                        <label className="block place-self-start text-slate-500 mb-[10px]">Email:</label>
                        <input
                            type="text"
                            name="lastName"
                            className="w-[293px] h-[35px] rounded-[5px] bg-slate-100"
                        />
                </div>

                <div className="grid">
                        <label className="block place-self-start text-slate-500 mb-[10px]">Phone Number (Optional):</label>
                        <input
                            type="text"
                            name="lastName"
                            className="w-[293px] h-[35px] rounded-[5px] bg-slate-100"
                        />
                </div>

                <div className="grid">
                      <label className="block place-self-start text-slate-500 mb-[10px]">Gender:</label>
                      <div className="flex gap-3">
                          <div className="">
                              <input
                                type="radio"
                                name="gender"
                                value="Male"
                                className="bg-slate-100"/>
                              <label className="ml-[10px] mr-[20px]">Male</label>
                          </div>
                          <div className="">
                              <input
                                type="radio"
                                name="gender"
                                value="Female"
                                className="bg-slate-100"
                              />
                              <label className="ml-[10px] mr-[20px]">Female</label>
                          </div>
                          <div className="">
                              <input
                                type="radio"
                                name="gender"
                                value="Other"
                                className="bg-slate-100"
                              />
                              <label className="ml-[10px] mr-[20px]">Other</label>
                          </div>
                      </div>
                </div>

            </form>


            <form className="grid grid-row-5 gap-y-[20px] px-[20px] mt-[1rem]  ml-[4rem] text-center">
                
                <div className="grid">
                     <label className="block place-self-start text-slate-500 mb-[10px]">Country:</label>
                     <select id="options" name="options" className="w-[293px] h-[35px] text-slate-400 rounded-[5px] px-[10px] bg-slate-100">
                                        <option value="option1">Thailand</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                        <option value="option4">Option 4</option>
                      </select>
                </div>
                <div className="grid">
                     <label className="block place-self-start text-slate-500 mb-[10px]">City:</label>
                     <input
                          type="text"
                          name="lastName"
                          className="w-[293px] h-[35px] rounded-[5px] bg-slate-100"
                      />
                </div>
                <div className="grid">
                     <label className="block place-self-start text-slate-500 mb-[10px]">Username:</label>
                     <input
                          type="text"
                          name="lastName"
                          className="w-[293px] h-[35px] rounded-[5px] bg-slate-100"
                      />
                </div>
                <div className="grid">
                     <label className="block place-self-start text-slate-500 mb-[10px]">Password:</label>
                     <input
                          type="text"
                          name="lastName"
                          className="w-[293px] h-[35px] rounded-[5px] bg-slate-100"
                      />
                </div>
                <div className="grid">
                     <label className="block place-self-start text-slate-500 mb-[10px]">Confirm Password:</label>
                     <input
                          type="text"
                          name="lastName"
                          className="w-[293px] h-[35px] rounded-[5px] bg-slate-100"
                      />
                </div>
            </form>

        </div>
        <div className="grid mt-8 ml-[-13rem]">
            <div>
                <input type="checkbox" id="agree" name="agree" className="mr-2" />
                <label htmlFor="agree" className="mr-6">I agree to the Terms and Conditions</label>
            </div>
            <Link to="/signup/signinfo/requestIdentity">
              <button className="w-[293px] place-self-center px-4 py-2 mt-[20px] text-lg  font-semibold ml-[12px] bg-blue-500 text-white rounded-md">
              Sign Up
              </button>
            </Link>
        </div>
      </main>
    </section>
  );
}

export default SignInfo;
