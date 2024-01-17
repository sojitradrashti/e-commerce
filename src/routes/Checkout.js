import React from "react";
import Select from "react-select";
import { useState, useEffect} from "react";

const options = [
  { value: "Andhra Pradesh", label: "Andhra Pradesh" },
  { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
  { value: "Assam", label: "Assam" },
  { value: "Bihar", label: "Bihar" },
  { value: "Chhatisgarh", label: "Chhatisgarh" },
  { value: "Goa", label: "Goa" },
  { value: "Gujarat", label: "Gujarat" },
  { value: "Haryana", label: "Haryana" },
  { value: "Himachal Pradesh", label: "Himachal Pradesh" },
  { value: "Jammu and Kashmir", label: "Jammu and Kashmir" },
  { value: "Karnataka", label: "Karnataka" },
  { value: "Kerala", label: "Kerala" },
  { value: "Ladakh", label: "Ladakh" },
  { value: "Madhya Pradesh", label: "Madhya Pradesh" },
  { value: "Maharastra", label: "Maharastra" },
  { value: "Manipur", label: "Manipur" },
  { value: "Meghalaya", label: "Meghalaya" },
  { value: "Mizoram", label: "Mizoram" },
  { value: "Nagaland", label: "Nagaland" },
  { value: "Odhisa", label: "Odhisa" },
  { value: "Punjab", label: "Punjab" },
  { value: "Rajasthan", label: "Rajasthan" },
  { value: "Sikkim", label: "Sikkim" },
  { value: "Tamil Nadu", label: "Tamil Nadu" },
  { value: "Telangana", label: "Telangana" },
  { value: "Tripura", label: "Tripura" },
  { value: "Uttarakhand", label: "Uttarakhand" },
  { value: "Uttar Pradesh", label: "Uttar Pradesh" },
  { value: "West Bangal", label: "West Bangal" },
  {value: "Andaman and Nikobar Islands",label: "Andaman and Nikobar Islands",},
  { value: "Chandigarh", label: "Chandigarh" },
  { value: "Dadra And Nagar Haveli", label: "Dadra And Nagar Haveli" },
  { value: "Daman and Diu", label: "Daman and Diu" },
  { value: "Delhi", label: "Delhi" },
  { value: "Lakshadeep", label: "Lakshadeep" },
  { value: "Pondicherry", label: "Pondicherry" },
];

const Checkout = (cart,setCart) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  });
  return (
    <div className="mt-[160px] px-20 w-[100%]">
      <div className=" border border-black items-center ">
        <div>
          <h1 className="ml-5 p-4 font-bold text-5xl">Checkout</h1>
          <hr className="border border-black border-b-2 m-2" />
          <div>
            <h2 className="px-3 py-6 text-2xl text-slate-800 font-bold">
              Billing Details
            </h2>
            <hr className="border border-slate-400 border-b-2 m-2" />
          </div>
        </div>

        <div className="flex">
          <form>
            <div className=" m-6">
              <div className="text-xl flex gap-20 ">
                <div>
                  <label for="first name"> First Name </label>
                  <br />
                  <input
                    type="text"
                    name="First Name"
                    id="fname"
                    className="p-2  border-slate-900 border border-dotted"
                  />
                  <br />
                </div>

                <div className="text-xl">
                  <label for="last name"> Last Name </label>
                  <br />
                  <input
                    type="text"
                    name="last Name"
                    className="p-2 border-slate-900 border border-dotted"
                  />
                </div>
              </div>

              <div className="text-xl mt-5 ">
                <label for="Country / Region ">Country / Region</label>

                <div>
                  <input
                    type="text"
                    name="Country / Region "
                    value="India"
                    className="p-2 border-slate-900 border border-dotted w-full"
                  />
                </div>
              </div>

              <div className="text-xl mt-5 ">
                <label for="Street address">Street address</label>

                <div>
                  <input
                    type="text"
                    name="Street address"
                    className="p-2 border-slate-900 border border-dotted w-full"
                  />
                </div>
              </div>

              <div className="text-xl mt-5 ">
                <label for="State">State</label>

                <div>
                  <Select
                    options={options}
                    className="border-slate-900 border border-dotted"
                  />
                </div>
              </div>

              <div className="text-xl mt-5 ">
                <label for="pin code">PIN Code</label>

                <div>
                  <input
                    type="text"
                    name="pin code"
                    className="p-2 border-slate-900 border border-dotted w-full"
                  />
                </div>
              </div>

              <div className="text-xl mt-5 ">
                <label for="phone number">Phone</label>

                <div>
                  <input
                    type="text"
                    name="phone number"
                    className="p-2 border-slate-900 border border-dotted w-full"
                  />
                </div>
              </div>

              <div className="text-xl mt-5 ">
                <label for="Email Address">Email Address</label>

                <div>
                  <input
                    type="text"
                    name="email address"
                    className="p-2 border-slate-900 border border-dotted w-full"
                  />
                </div>
              </div>

              <div className="mt-4">
                <h1 className="text-2xl font-bold">Additional Information</h1>
                <hr />
                <div>
                  <label
                    for="Order notes (optional)"
                    className="text-xl font-bold"
                  >
                    Order notes (optional)
                  </label>
                  <div>
                    <textarea
                      type="text"
                      rows="3"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                      className="p-2 border-slate-900 border border-dotted w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <>
            {/* <div className="border border-black ">
            <div>
                 <h1 className="m-6 p-6 text-3xl font-bold">Your order</h1>
              </div>
              {cart.map((item,index)=>(
             <div key={index} className="flex justify-between">
           
               <h1>Product</h1>
               <p>{item.name}</p>
               <p>{price}</p>
             
              ))}
             
               
              
                {/* <hr className="bg-slate-800"/> */}
                <div>
                  <h1>Subtotal</h1>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Checkout;
