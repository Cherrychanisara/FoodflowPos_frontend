import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function Drawer() {
  const [open, setOpen] = useState(true);
  const [startAmount, setStartAmount] = useState('');
  const [endAmount, setEndAmount] = useState('');
  const [total, setTotal] = useState(null);

  const [finalStartAmount, setFinalStartAmount] = useState(null);
  const [finalEndAmount, setFinalEndAmount] = useState(null);

  // โหลดค่าเริ่มต้นจาก localStorage (ถ้ามี)
  useEffect(() => {
    const storedStartAmount = localStorage.getItem('startAmount');
    if (storedStartAmount) {
      setStartAmount(storedStartAmount);
    }
  }, []);

  const handleStartDrawer = () => {
    if (!startAmount) {
      toast.error('Input Amount');
      return;
    }

    localStorage.setItem('startAmount', startAmount);
    toast.success(`Start Amount ${startAmount} Baht`);
    setOpen(false);
  };

  const handleEndDrawer = () => {
    if (!endAmount) {
      toast.error('Please Input Amount');
      return;
    }

    const start = parseFloat(startAmount);
    const end = parseFloat(endAmount);
    const totalAmount = end + start;

    setFinalStartAmount(start);
    setFinalEndAmount(end);
    setTotal(totalAmount);

    // เคลียร์ค่าที่ไม่ใช้แล้ว
    setStartAmount('');
    setEndAmount('');
    localStorage.removeItem('startAmount');
    setOpen(false);
  };

  return (
    <div className="min-h-screen pt-5 pb-28 bg-[#f2f4f7] font-poppins overflow-y-auto">
      {/* Modal เปิดลิ้นชัก */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Open Drawer</h2>
            <p className="text-gray-600 mb-4">Input StartAmount</p>
            <input
              type="number"
              placeholder="Amount"
              value={startAmount}
              onChange={(e) => setStartAmount(e.target.value)}
              className="mb-4 p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleStartDrawer}
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      {/* หน้าหลักแสดงผล */}
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md mt-6 space-y-4">
        <h2 className="text-2xl font-bold text-center text-gray-800">Summary</h2>

        <div className="text-gray-700 text-lg mb-2">
          Open Drawer : <span className="font-semibold">{finalStartAmount || 0} Baht</span>
        </div>

        <div className="text-gray-700 text-lg mb-2">
          Close Drawer: <span className="font-semibold">{finalEndAmount || 0} Baht</span>
        </div>

        <div className="text-gray-900 text-xl mt-4">
         <p>Total:</p>{' '}
          <p className="text-green-600 font-bold">{total !== null ? `${total} Baht` : ''}</p>
        </div>

        {/* ช่องใส่เงินปิดลิ้นชัก */}
        <div className="mt-6">
          <label className="block text-gray-700 mb-1">Input End Amount</label>
          <input
            type="number"
            placeholder="End Amount"
            value={endAmount}
            onChange={(e) => setEndAmount(e.target.value)}
            className="mb-4 p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleEndDrawer}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
          >
          Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
