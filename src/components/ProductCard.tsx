import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="flex flex-wrap justify-center p-4 bg-slate-400">

      {/* Card 1 */}
      <div className="lg:w-1/3 md:w-1/2">

        {/* Img div */}
        <div className="flex flex-col items-center justify-center border rounded-lg p-2 m-2 shadow-xl">
          {/* <Image src="/product-4.jpg" alt="Product_One" width={300} height={300} /> */}
          <Image src="/product-4.jpg" alt="Product_One" width={300} height={300} />
        </div>

        {/* <p className="text-center pt-10">PKR 5,000</p> */}
        <p className="text-center pt-4 font-semibold text-lg">PKR 1,000</p>
        <div className="flex justify-center items-center my-3">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Buy Now
          </button>
        </div>
      </div>
      {/* ------------------------------------ */}

      {/* Card 2 */}
      <div className="lg:w-1/3 md:w-1/2 ">

        {/* Img div */}
        <div className="flex flex-col items-center border rounded-lg p-2 m-2 shadow-xl">
          <Image src="/product-5.webp" alt="Product_Two" width={300} height={300} />
        </div>
        <p className="text-center pt-4 font-semibold text-lg">PKR 1,000</p>
        <div className="flex justify-center items-center my-3">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Buy Now
          </button>
        </div>
      </div>
      {/* ----------------------------------------- */}

      {/* Card 3 */}
      <div className="lg:w-1/3 md:w-1/2 ">

        {/* Img div */}
        <div className="flex flex-col items-center border rounded-lg p-2 m-2 shadow-xl">
          <Image src="/product7.webp" alt="Product_Three" width={300} height={300} />
        </div>
        <p className="text-center pt-4 font-semibold text-lg">PKR 1,000</p>
        <div className="flex justify-center items-center my-3">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
