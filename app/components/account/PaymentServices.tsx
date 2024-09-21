
export default function PaymentServices() {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold text-cyan-700 text-center mb-6">
        Payment Services
      </h2>
      <div className="space-y-4">
        {/* Plan Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Change Plan
          </label>
          <select className="block w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
            <option>Standard</option>
            <option>Premium</option>
          </select>
        </div>

        {/* Renew Payment Button */}
        <button className="w-full px-4 py-2 mt-4 bg-cyan-600 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-75 transition ease-in-out duration-150">
          Renew Payment
        </button>
      </div>
    </div>
  );
}



/*export default function PaymentServices() {
    return (
      <div className="p-6 bg-white rounded shadow-md mt-6">
        <h2 className="text-xl font-semibold text-cyan-700">Payment Services</h2>
        <div className="mt-4">
          <label className="block mb-2">Change Plan</label>
          <select className="border p-2 w-full">
            <option>Standard</option>
            <option>Premium</option>
          </select>
          <button className="mt-4 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">
            Renew Payment
          </button>
        </div>
      </div>
    );
  }
  */