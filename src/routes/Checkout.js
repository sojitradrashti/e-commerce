import React, { useState, useEffect } from "react";
import Select from "react-select";
import Swal from 'sweetalert2'
import swal from "sweetalert2"
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
  {
    value: "Andaman and Nikobar Islands",
    label: "Andaman and Nikobar Islands",
  },
  { value: "Chandigarh", label: "Chandigarh" },
  { value: "Dadra And Nagar Haveli", label: "Dadra And Nagar Haveli" },
  { value: "Daman and Diu", label: "Daman and Diu" },
  { value: "Delhi", label: "Delhi" },
  { value: "Lakshadeep", label: "Lakshadeep" },
  { value: "Pondicherry", label: "Pondicherry" },
];

const Checkout = ({ cart, setCart}) => {
  const [price, setPrice] = useState(0);


  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  });
  const handleClick = () => {
    swal.fire({
      title: 'Your Payment was Successfull',
      text: 'Thank you for your payment be in contact with more details shortly',
      icon: 'succes',
      confirmButtonText: 'Done'
    })
  }
const [formData, setFormData] = useState({
  fName: "",
  lName: "",
  country: "",
  state:"",
  address: "",
 pincode : "",
  number:"",
  email:"",
  info: "",
 
});
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};
const handleOrderClick = (e) => {
  e.preventDefault();
  if (validateForm()) {
    Swal.fire({
      title: "Thank you!",
      text: "Your order has been placed",
      icon: "success",
      confirmButtonText: `<a href="/">Done</a>`,
    });
  } else {
    swal.fire({
      title: "Oops...",
      text: "Please fill out all required fields correctly.",
      icon: "error",
    });
  }
};
const validateForm = () => {
  const { fName, lName,country, state, address, pincode, number, email, info } = formData;
  return (
    fName.trim() !== "" &&
    lName.trim() !== "" &&
    country.trim() !== "" &&
    state .trim() !=="" &&
    address.trim() !== "" &&
    pincode.trim() !== "" &&
    number.trim().length === 10 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    info.trim() !== ""
  );
};
  return (
    <div className="mt-[160px] lg:px-10">
      <div className=" w-[100%] items-center  ">
        <div>
          <h1 className="ml-5 p-4 font-bold text-5xl ">Checkout</h1>
          <hr className="border border-black border-b-2 m-2" />
        </div>
        <div className="lg:flex gap-4 col w-[100%] ">
          <div>
            <h2 className="px-3 py-6 text-2xl text-slate-800 font-bold ">
              Billing Details
            </h2>
            <hr className="border border-slate-400 border-b-2 m-2 w-auto" />

            <form className="col">
              <div className=" m-6">
                <div className="text-xl col sm:flex gap-5 ">
                  <div>
                    <label for="first name"> First Name 
                    
                    </label>
                    <br />
                    <input
                      type="text"
                      name="First Name"
                      id="fname"
                      value={formData.fname}
                      onChange={handleInputChange}
                      className="p-2 w-full border-slate-900 border border-dotted"
                 required/>
                    <br />
                  </div>

                  <div className="text-xl">
                    <label for="last name"> Last Name </label>
                    <br />
                    <input
                      type="text"
                      name="last Name"
                      value={formData.lname}
                      onChange={handleInputChange}
                      className="p-2 w-full border-slate-900 border border-dotted ]"
                      required/>
                  </div>
                </div>

                <div className="text-xl mt-5 ">
                  <label for="Country / Region ">Country / Region</label>

                  <div>
                    <input
                      type="text"
                      name="Country / Region "
                      value={formData.country}
                      onChange={handleInputChange}
                      className="p-2 border-slate-900 border border-dotted w-full"
                      required/>
                  </div>
                </div>

                <div className="text-xl mt-5 ">
                  <label for="Street address">Street address</label>

                  <div>
                    <input
                      type="text"
                      name="Street address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="p-2 border-slate-900 border border-dotted w-full"
                      required/>
                  </div>
                </div>

                <div className="text-xl mt-5 ">
                  <label for="State">State</label>

                  <div>
                    <Select
                      options={options}
                      value={formData.state}
                      onChange={handleInputChange}
                      className="border-slate-900 border border-dotted"
                      required/>
                  </div>
                </div>

                <div className="text-xl mt-5 ">
                  <label for="pin code">PIN Code</label>

                  <div>
                    <input
                      type="text"
                      name="pin code"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      className="p-2 border-slate-900 border border-dotted w-full"
                      required/>
                  </div>
                </div>

                <div className="text-xl mt-5 ">
                  <label for="phone number">Phone</label>

                  <div>
                    <input
                      type="text"
                      name="phone number"
                      value={formData.number}
                      onChange={handleInputChange}
                      className="p-2 border-slate-900 border border-dotted w-full"
                      required/>
                  </div>
                </div>

                <div className="text-xl mt-5 ">
                  <label for="Email Address">Email Address</label>

                  <div>
                    <input
                      type="text"
                      name="email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="p-2 border-slate-900 border border-dotted w-full"
                      required/>
                  </div>
                </div>

                <div className="mt-4">
                  <h1 className="text-2xl font-bold">Additional Information</h1>
                  <hr />
                  <div>
                    <label
                      for="Order notes (optional)"
                      value={formData.info}
                      onChange={handleInputChange}
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
          </div>

          <div className="border border-black lg:w-[50%] w-auto mb-3 mx-2">
            <div>
              <h1 className="mx-auto p-3 text-3xl font-bold ">Your order</h1>
              <hr className="w-auto border border-black" />
            </div>
            <div className="flex sm:col justify-between m-4 px-8">
              <h1 className="text-2xl">Product</h1>
              <h1 className="text-2xl">Subtotal</h1>
            </div>
            <hr className="w-auto border border-black" />
            <div className="px-8">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mt-[20px] pb-[5px] "
                >
                  <div className="lg:flex w-[400px] items-center gap-3">
                    <img className="w-[100px] h-[90px] p-2" src={item.img} />
                    <p className="font-bold">{item.name}</p>
                    
                  </div>
                  <div className="px-10">
                  <p>{item.price}</p>
                  </div>
                </div>
              ))}
             
            </div>

            <div className="p-5 m-4 text-2xl">
              <div className="py-7">
                <input
                  type="radio"
                  id="Cash on Delivery"
                  name="payment"
                  value="Cash on Delivery"
                />
                <label for="Cash on Delivery"> Cash on Delivery </label>
              </div>
              <div className="py-7 flex gap-3">
                <input type="radio" id="paypal" name="payment" value="PayPal" />
                <label for="paypal"> PayPal </label>
                <img
                  src="/assets/p.png"
                  alt="image"
                  className="w-[20%] h-[20%] shadow-xl border border-slate-400"
                />
              </div>
              <div className="py-7 px-3 text-center">
                <button onClick={handleOrderClick} className="text-white p-3 w-full rounded-full bg-red-500 hover:bg-lime-500 ">PLACE ORDER</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
