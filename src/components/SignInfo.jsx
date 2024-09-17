import { Link } from "react-router-dom";
import { useState } from "react";


function SignInfo() {
    const [radioButton, setRadioButton] = useState();

    const radioHandle = (e) => {
        setRadioButton(e.target.value)
    }

  return (
    <section className="flex  justify-center  w-full items-center mb-[20px] mt-[35px]">
      <main className="text-center">
        <div className="mt-[-10px] grid mb-[20px] ">
                <div className=" text-[36px] ml-[-19rem] font-bold mt-[-10px]">
                    <span className="text-[#00BCD4]">Tell us more </span>
                    <span>about you</span>
                </div>
                <div className="text-left ml-[6.5rem] w-[400px] text-[#8C8CA1] mt-[5px]">
                    Fill in your detail to create your account. 
                </div>
        </div>

        <div className="grid grid-cols-2 gap-1 px-4">
            <form className="grid grid-row-5 gap-y-[20px] px-[20px] mt-[1rem]  ml-[4rem] text-center">
                <div className="flex gap-3">
                      <div className="grid">
                          <label className="block place-self-start text-slate-500 mb-[10px]">First Name:</label>
                          <input
                            type="text"
                            name="firstName"
                            className="w-[150px] h-[35px] pl-[10px] rounded-[5px] bg-slate-100"/>
                      </div>
                      <div className="flex flex-col">
                          <label className="block place-self-start text-slate-500 mb-[10px]">Last Name:</label>
                          <input
                            type="text"
                            name="lastName"
                            className="w-[150px] h-[35px] pl-[10px] rounded-[5px] bg-slate-100"
                          />
                      </div>
                </div>

                <div className="grid">
                      <label className="block place-self-start text-slate-500 mb-[10px]">Date Of Birth:</label>
                      <div className="flex gap-3">
                          <div className="grid">
                              <select id="options" name="options" className="w-[95px] h-[35px] px-[10px] rounded-[5px] text-slate-400 bg-slate-100">
                                    <option value="option1">Day</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                    <option value="option4">Option 4</option>
                              </select>
                          </div>
                          <div className="">
                              <select id="options" name="options" className="w-[95px] h-[35px] px-[10px] text-slate-400 rounded-[5px] bg-slate-100">
                                        <option value="option1">Month</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                        <option value="option4">Option 4</option>
                              </select>
                          </div>
                          <div className="">
                              <select id="options" name="options" className="w-[95px] h-[35px] text-slate-400 rounded-[5px] px-[10px] bg-slate-100">
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
                            className="w-[315x] h-[35px] pl-[10px] rounded-[5px] bg-slate-100"
                        />
                </div>

                <div className="grid">
                        <label className="block place-self-start text-slate-500 mb-[10px]">Phone Number (Optional):</label>
                        <input
                            type="text"
                            name="lastName"
                            className="w-[315px] h-[35px] pl-[10px] rounded-[5px] bg-slate-100"
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
                                checked={radioButton === "Male"}
                                onChange={radioHandle}
                                className={`bg-slate-100  h-[16px] w-[16px] rounded-[50px] appearance-none relative ${radioButton === "Male" ? "radio_check border-2 bg-white border-[#00BCD4]" :"bg-slate-300 "}`}
                                />
                              <label className="ml-[10px] mr-[20px]">Male</label>
                          </div>
                          <div className="">
                              <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={radioButton === "Female"}
                                onChange={radioHandle}
                                className={`bg-slate-100  h-[16px] w-[16px] rounded-[50px] relative appearance-none ${radioButton === "Female" ? "border-2 border-[#00BCD4] bg-white radio_check" :" "}`}
                              />
                              <label className="ml-[10px] mr-[20px]">Female</label>
                          </div>
                          <div className="">
                              <input
                                type="radio"
                                name="gender"
                                value="Other"
                                checked={radioButton === "Other"}
                                onChange={radioHandle}
                                className={`bg-slate-100  h-[16px] w-[16px] rounded-[50px] appearance-none relative ${radioButton === "Other" ? "border-2 border-[#00BCD4] bg-white radio_check " :"bg-slate-300 "}`}
                              />
                              <label className="ml-[10px] mr-[20px]">Other</label>
                          </div>
                      </div>
                </div>

            </form>


            <form className="grid grid-row-5 gap-y-[20px] px-[20px] mt-[1rem]">
                
                <div className="grid">
                     <label className="block place-self-start text-slate-500 mb-[10px]">Country:</label>
                     <select id="options" name="options" className="w-[315px] h-[35px] text-slate-400 rounded-[5px] px-[10px] pl-[10px] bg-slate-100">
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
                          className="w-[315px] h-[35px] pl-[10px] rounded-[5px] bg-slate-100"
                      />
                </div>
                <div className="grid">
                     <label className="block place-self-start text-slate-500 mt-[5px] mb-[10px]">Username:</label>
                     <input
                          type="text"
                          name="lastName"
                          className="w-[315px] h-[35px] pl-[10px] rounded-[5px] bg-slate-100"
                      />
                </div>
                <div className="grid">
                     <label className="block place-self-start text-slate-500 mt-[5px] mb-[11px]">Password:</label>
                     <input
                          type="text"
                          name="lastName"
                          className="w-[315px] h-[35px]  pl-[10px] rounded-[5px] bg-slate-100"
                      />
                </div>
                <div className="grid">
                     <label className="block place-self-start text-slate-500 mb-[10px]">Confirm Password:</label>
                     <input
                          type="text"
                          name="lastName"
                          className="w-[315px] h-[35px] pl-[10px] rounded-[5px] bg-slate-100"
                      />
                </div>
            </form>

        </div>
        <div className="flex flex-col justify-start mt-8 ml-[6rem] w-[645px]">
            <div className="text-left">
                <input type="checkbox" id="agree" name="agree" className="mr-2 " />
                <label htmlFor="agree" className="mr-6 text-[#8C8CA1] text-left">By singing up,you accept our terms,privacy policy and cookie policy. </label>
            </div>
              <button className="w-[315px]  px-14 py-1 mt-[20px] text-lg  font-semibold  bg-[#0097A7] text-white rounded-md">
              <Link to="/signup/signinfo/requestIdentity">Sign Up</Link>
              </button>
            
        </div>
      </main>
    </section>
  );
}

export default SignInfo;
