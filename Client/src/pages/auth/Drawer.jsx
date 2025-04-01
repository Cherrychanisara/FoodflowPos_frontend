import React , {useState} from 'react'
import { toast } from 'react-toastify';


function Drawer () {
  const [open, setOpen] = useState(true);
  const [amount, setAmount] = useState("");

  const handleConfirm = () => {
    toast.success(`Cash entered: ${amount}`);
    setOpen(true);
  };

  return (
    <div className="min-h-screen pt-5 pb-28 bg-[#f2f4f7] font-poppins overflow-y-auto">

      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-gray-800">Please Start Drawer</h2>
          <p className="mt-4 text-gray-600">Enter cash amount</p>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-3 p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-center mt-6">
            <button onClick={handleConfirm} className="bg-red-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-400 transition">
              Confirm
            </button>
          </div>
        </div>
      </div>
      </div>

    )
  
}

export default Drawer