export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-red-950 mb-8">
          I am Fatima Farooq Khuwaja
        </h1>
        <p className="text-xl text-black text-center mb-6">
          Class Home Work Sunday 2 to 5 pm.
        </p>

        {/* Flexbox container for product cards */}
        <div className="flex flex-wrap justify-center gap-8">

          {/* Product 1 */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3">
            <img 
              src="/shirt1.webp" 
              alt="Product 1" 
              className="w-full h-48 object-cover rounded-md mb-4" 
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Black T-shirt</h2>
            <p className="text-lg font-bold text-gray-800">$68.00</p>
            <button className="w-full mt-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 transition">
              Buy Now
            </button>
          </div>

          {/* Product 2 */}

          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3">
            <img 
              src="/shirt2.webp" 
              alt="Product 2" 
              className="w-full h-48 object-cover rounded-md mb-4" 
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Yellow T-shirt</h2>
            <p className="text-lg font-bold text-gray-800">$60.00</p>
            <button className="w-full mt-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 transition">
              Buy Now
            </button>
          </div>

          {/* Product 3 */}

          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3">
            <img 
              src="/shirt3.webp" 
              alt="Product 3" 
              className="w-full h-48 object-cover rounded-md mb-4" 
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">White T-shirt</h2>
            <p className="text-lg font-bold text-gray-800">$52.00</p>
            <button className="w-full mt-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}