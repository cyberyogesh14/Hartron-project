import React from 'react'

export default function Shop() {
  return (
    <div className="bg-[#0f0f0f] py-14 px-6 md:px-12">
      
      <h1 className="text-white text-4xl font-semibold text-center mb-12">
        Shop
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-[#151515] border border-[#2c2c2c] overflow-hidden">
          
          <div>
            <img
              src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/home/new/shop/webp/apparel.webp"
              alt=""
              className="w-full h-[520px] object-cover"
            />
          </div>

          <div className="px-8 py-10 text-center">
            <h2 className="text-white text-3xl font-medium mb-5">
              Apparel
            </h2>

            <p className="text-gray-400 text-[17px] leading-7 mb-10">
              Ride out. Stand out. Apparel inspired by your ride.
            </p>

            <button className="border border-gray-500 text-white w-full py-4 font-semibold">
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="bg-[#151515] border border-[#2c2c2c] overflow-hidden">
          
          <div>
            <img
              src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/home/new/shop/webp/gma-accessories.webp"
              alt=""
              className="w-full h-[520px] object-cover"
            />
          </div>

          <div className="px-8 py-10 text-center">
            <h2 className="text-white text-3xl font-medium mb-5">
              Accessories
            </h2>

            <p className="text-gray-400 text-[17px] leading-7 mb-10">
              Calibrate your motorcycle as per your riding needs.
            </p>

            <button className="border border-gray-500 text-white w-full py-4 font-semibold">
              ACCESSORISE NOW
            </button>
          </div>
        </div>

        <div className="bg-[#151515] border border-[#2c2c2c] overflow-hidden">
          
          <div>
            <img
              src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/home/new/shop/webp/ride-sure-shop-home.webp"
              alt=""
              className="w-full h-[520px] object-cover"
            />
          </div>

          <div className="px-8 py-10 text-center">
            <h2 className="text-white text-3xl font-medium mb-5">
              Ride Sure
            </h2>

            <p className="text-gray-400 text-[17px] leading-7 mb-10">
              Ride more. Worry less. Explore customisable plans.
            </p>

            <button className="border border-gray-500 text-white w-full py-4 font-semibold">
              EXPLORE
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}