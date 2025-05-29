import { useState } from "react";
import Createcategory from "./Createcategory";
import axios from "axios";
import useUserStore from '../store/userStore';
import { CartIcon } from "../icon/icon";

export default function CreateMenu() {
  const [cart, setCart] = useState([]);
  const [menus, setMenus] = useState([
    { id: 1, name: "Pad Thai", price: 60 },
    { id: 2, name: "Tom Yum", price: 80 },
    { id: 3, name: "Green Curry", price: 70 },
  ]);
  const [newMenu, setNewMenu] = useState({ name: "", price: "" });
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (menu) => {
    setCart((prevCart) => [...prevCart, menu]);
    console.log("Cart:", [...cart, menu]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMenu((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddMenu = () => {
    if (!newMenu.name || !newMenu.price) return;

    const newItem = {
      id: Date.now(),
      name: newMenu.name,
      price: parseFloat(newMenu.price),
    };

    setMenus((prev) => [...prev, newItem]);
    setNewMenu({ name: "", price: "" });
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = async () => {
    if (cart.length === 0) return;
  
    try {
      const response = await axios.post("http://localhost:6778/api/", {
        items: cart,
        total: total,
      });
  
      console.log("Payment Successfull", response.data);
  
      setCart([]);
      setIsCartOpen(false);
  
      alert("Payment Successfull");
    } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error);
      alert("ไม่สามารถชำระเงินได้ กรุณาลองใหม่");
    }
  };
  


  return (
    <div className="max-w-lg mx-auto p-6 space-y-6 bg-[#f2f4f7] min-h-screen relative">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Create Your Order
      </h2>

      <div className="flex justify-end items-center gap-4">
  {/* ปุ่มตะกร้า */}
  <button
    onClick={() => setIsCartOpen(true)}
    className="relative p-2 text-gray-700 hover:text-gray-900"
  >
    <CartIcon className="w-6 h-6" />
    {cart.length > 0 && (
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 rounded-full">
        {cart.length}
      </span>
    )}
  </button>
</div>



      {/* ฟอร์มเพิ่มเมนู */}
      <div className="bg-white p-4 rounded-xl shadow space-y-4">
        <h3 className="text-xl font-semibold text-gray-700">Add New Menu</h3>
        <input
          type="text"
          name="name"
          value={newMenu.name}
          onChange={handleInputChange}
          placeholder="Menu name"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="price"
          value={newMenu.price}
          onChange={handleInputChange}
          placeholder="Price"
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleAddMenu}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Add Menu
        </button>
      </div>

      {/* รายการเมนู */}
      <div className="grid grid-cols-1 gap-4">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className="bg-white p-4 rounded-xl shadow-md flex items-center justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold">{menu.name}</h3>
              <p className="text-gray-600">{menu.price} ฿</p>
            </div>
            <button
              onClick={() => addToCart(menu)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Modal แสดง Cart */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] max-w-md p-6 rounded-lg shadow-lg space-y-4 relative">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Your Cart</h3>

            {cart.length === 0 ? (
              <p className="text-gray-500">No items in cart.</p>
            ) : (
              <ul className="space-y-2">
                {cart.map((item, index) => (
                  <li key={index} className="flex justify-between text-gray-700">
                    <span>{item.name}</span>
                    <span>{item.price} ฿</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="text-right font-bold text-lg text-gray-800 pt-2 border-t">
              Total: {total} ฿
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl"
            >
              &times;
            </button>
            <button
            
    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
  >
    ชำระเงิน
  </button>
          </div>
        </div>
      )}
    </div>
  );
}
