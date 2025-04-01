import axios from 'axios';
import { useState } from 'react'
import { toast } from 'react-toastify';
import useUserStore from '../store/userStore';

function Createcategory() {

  const [inputCategory, setInputCategory] = useState("");
  const objFromStore = useUserStore();
  const [showCategory, setShowCategory] = useState([])

  function hdlInput(event) {
    setInputCategory(event.target.value)
  }

  async function handleAddCategory() {
    // [ X ] Check user input if it's a blank or blankspace or not met requirement.
    // Check the input
    // if not met reqquirement
    // show warning message.

    if (!inputCategory.trim()) {
      toast.error('Please Input message')
      return
    }

    // send category name to server 
    // to record in database
    const reqBody = { name: inputCategory }
    const resp = await axios.post("http://localhost:6778/api/category", reqBody, {
      headers: {
        authorization: `token ${objFromStore.token}`
      }
    })

    console.log("Send")

    // show newly created category name
    // in the last section
    // of this component

    setShowCategory([...showCategory, inputCategory]);
    setInputCategory("");

  }


  return (
    <div className="modal-box">
      <div className="modal-action">
        <form method="dialog">
          <div className="text-center mt-[20px] ">
            <h1>Add Category</h1>
          </div>

          <div className="flex gap-4 justify-center mt-10">
            <input
              className="border p-5 w-3/5 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Category name"
              value={inputCategory}
              onChange={hdlInput}
            />

            <div className="flex justify-center pt-3">
              <button
                onClick={handleAddCategory}
                className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-400 transition duration-300 ease-in-out"
              >Add</button>
            </div>

            <div className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full ">
              <button className="btn">x</button>
            </div>
          </div>
        </form>
      </div>

      <div className=" bg-gray-300 mt-5 w-full max-w-[400px] mx-auto list bg-base-100 size-10 rounded-md shadow-md">
        <h2 className="text-lg font-semibold text-center mb-4">Category List</h2>

        <ul className="space-y-2 text-left gap-4 text-xs uppercase font-semibold opacity-60 ">
          {showCategory.map((category, index) => (
            <li key={index} className="text-center">{category}</li>
          ))}
        </ul>
  </div> 
  
    </div>
    

  )
}

export default Createcategory
