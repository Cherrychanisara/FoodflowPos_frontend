import { useState } from "react";
import Createcategory from "../../components/Createcategory";


export default function CreateMenu() {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", price: "", category: "" });
  const [file, setFile] = useState(null)

  

  const addMenuItem = async (e) => {
    if (newItem.name && newItem.price && newItem.category) {
    setMenuItems([...menuItems, newItem]);
    setNewItem({ name: "", price: "", category: "" }); }

    e.preventDefault()

    try {

      const formData = new FormData()

      formData.append()

        
    } catch (error) {
      console.log(error);
      
    }

  };

  const handleRemoveItem = (indexToRemove) => {
    setMenuItems(menuItems.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="max-w-lg mx-auto p-6 space-y-6 bg-[#f2f4f7] min-h-screen">
      <h2 className="text-2xl font-semibold text-center text-gray-800">Create Menu</h2>

      <div className="flex justify-center gap-5 ">
      <button className="btn bg-[#e9e6e6] hover:bg-[#f1f0f0] shadow-lg text-red-600 font-medium py-2 px-4 rounded-md"
        onClick={() => document.getElementById('my_modal_5').showModal()}>+ menu</button>

      <button className="btn bg-[#e9e6e6] hover:bg-[#f1f0f0] shadow-lg text-red-600 font-medium py-2 px-4 rounded-md"
      onClick={()=> document.getElementById('my_modal_6').showModal()}>+ Category</button>
      </div>

      {/* category */}
      <dialog id="my_modal_6" className="bg-white shadow-lg rounded-2xl h-[400px] w-3/5   ">
      <Createcategory setNewItem={setNewItem} newItem={newItem} />
        
      </dialog>

      {/* menu */}
      <dialog id="my_modal_5" className="bg-white shadow-lg rounded-2xl h-[500px] w-3/5   ">

        <div className="modal-box">

          <div className="modal-action">
            <form onSubmit={addMenuItem} method="dialog">
              <div className="text-center mt-[20px] ">
                <h1>Add Menu</h1>
              </div>
              {/* if there is a button in form, it will close the modal */}
              <div className='text-center flex justify-center mt-5'>

                <input type="file" id='input-file' onChange={(e) => setFile(e.target.files[0])} className='hidden ' />
                {
                  file ?
                    <div onClick={() => document.getElementById('input-file').click()} >
                      <img src={URL.createObjectURL(file)} alt="Profile"
                        className="w-[120px] h-[120px] object-cover rounded-full mb-10" />
                    </div>

                    : <img src="icon.svg" alt='photo' className='w-[300px] h-[300px] mt-[-70px] mb-[-70px]'
                      onClick={() => document.getElementById('input-file').click()} />
                }

              </div>

              <div className=" flex gap-4 justify-center">
                <input
                  className="border p-5 w-200 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Menu Name"
                  value={newItem.name}
                  onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                />
                <input
                  className="border p-5 w-100 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Price"
                  type="number"
                  value={newItem.price}
                  onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                />

                <div className="flex">
                  <input
                    className="border p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500 "
                    placeholder="Category"
                    value={newItem.category}
                    onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                  />
                </div>
                
              </div>

              <div className="flex justify-center pt-3">
                <button
                  className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-400 transition duration-300 ease-in-out"
                >
                  Add
                </button>
              </div>

              <div className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full ">
              <button className="btn"
              onClick={() => document.getElementById('my_modal_5').close()}
              >x</button>
            </div>

            </form>
          </div>
        </div>
      </dialog>
      
      <div className="w-full flex justify-center">
        <div className="flex space-x-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-red-500 text-white rounded-3xl border p-4 flex items-center justify-between space-x-4 min-w-[200px]"
            >
              <span className="text-lg">{item.name}</span>
              <span className="text-lg ml-auto">{item.price} ฿</span>
              
              <button
                onClick={() => handleRemoveItem(index)}
                className="ml-2 text-white px-2 py-1 rounded"
              >
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}