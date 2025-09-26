// import LineChart from "./components/LineChart";
// import BarChart from "./components/BarChart";
// import DoughnutChart from "./components/DoughnutChart";
// import PieChart from "./components/PieChart";
// import ScatterChart from "./components/ScatterChart";
// import StackBarChart from "./components/StackBarChart";
// import Datepicker from "react-tailwindcss-datepicker";
// import { useState } from "react";

// function Charts() {
//   const [dateValue, setDateValue] = useState({
//     startDate: new Date(),
//     endDate: new Date(),
//   });

//   const handleDatePickerValueChange = (newValue) => {
//     console.log("newValue:", newValue);
//     setDateValue(newValue);
//   };

//   return (
//     <>
//       <div className='mb-6'>
//         <Datepicker
//           containerClassName='w-72'
//           value={dateValue}
//           onChange={handleDatePickerValueChange}
//           theme='light'
//           inputClassName='input input-bordered w-72'
//           popoverDirection='down'
//           showShortcuts={true}
//           primaryColor='blue' // ✅ "white" এর জায়গায় একটা valid color
//         />
//       </div>

//       {/* ---------------------- Different charts ------------------------- */}
//       <div className='grid lg:grid-cols-2 mt-0 grid-cols-1 gap-6'>
//         <StackBarChart />
//         <BarChart />
//       </div>

//       <div className='grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6'>
//         <DoughnutChart />
//         <PieChart />
//       </div>

//       <div className='grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6'>
//         <ScatterChart />
//         <LineChart />
//       </div>
//     </>
//   );
// }

// export default Charts;

import React from "react";

const Charts = () => {
  return <div>Charts</div>;
};

export default Charts;
