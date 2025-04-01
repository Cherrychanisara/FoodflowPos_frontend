import React from 'react';
import { motion } from 'framer-motion';
import { Billsicon, CreateMenu, Createordericon, Dashboardicon, Drawericon, Homeicon } from '../icon/icon';

function Mainnav() {

  const box = {
    backgroundColor: 'red',
    padding: '10px',
    borderRadius: '10px'
  };
  

  return (
    <div className="bg-black text-white rounded-2xl w-[50px] mt-[20px] mb-[20px] ml-[10px]">
     
      <div className="flex flex-col gap-10 p-1 mt-20 justify-center">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          style={box}>
          <Drawericon className="w-6 h-6" />
        </motion.button>
      </div>

      <div className='flex flex-col gap-10 p-3 mt-2 justify-center'>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}>
          <Createordericon className="w-6 h-6" />
        </motion.button>
      </div>


      <div className='flex justify-center mt-5'>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}>
          <Billsicon className="w-6 h-6" />
        </motion.button>
      </div>

      <div className='flex justify-center mt-5'>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}>
          <CreateMenu className="w-6 h-6" />
        </motion.button>
      </div>

      <div className='flex justify-center mt-5'>
      <motion.button
         whileHover={{ scale: 1.2 }}
         whileTap={{ scale: 0.8 }}>
        <Dashboardicon className="w-6 h-6" />
      </motion.button>
      </div>

    </div>
  );
}

export default Mainnav;
