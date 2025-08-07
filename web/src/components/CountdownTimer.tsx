// import { Button, Dropdown, DropdownItem, Label, TextInput } from 'flowbite-react';
// import { CountdownCircleTimer } from 'react-countdown-circle-timer'
// import { useState } from 'react';

export const CountdownTimer = () => {
  return <div></div>
}

// export const CountdownTimer = () => {

//   const [timeUnit, setTimeUnit] = useState("")

//   const n = 10;

//   const handleStart = () => {

//   }

//   const renderTime = ({ remainingTime }) => {
//     if (remainingTime === 0) {
//       return <div> Time is over</div>
//     }
//     return (
//       <div>
//         <div> You can do it </div>
//         <div>{remainingTime}</div>
//       </div>
//     )

//   }

//   return (
//     <div className='m-6'>
//       <div className='mt-6 text-xl font-semibold'> Countdown Timer </div>
//       <div className='flex flex-row gap-4 my-8'>
//         <TextInput id="inputTime" type="number" sizing="md" placeholder='Enter time' className="w-1/6" />
//         <Dropdown label={timeUnit === "" ? 'Time Unit' : timeUnit}>
//           <DropdownItem onClick={() => setTimeUnit("seconds")}> seconds </DropdownItem>
//           <DropdownItem onClick={() => setTimeUnit("minutes")}> minutes </DropdownItem>
//           <DropdownItem onClick={() => setTimeUnit("hours")}> hours</DropdownItem>
//         </Dropdown>
//         <button className='bg-accent rounded-lg px-4 py-2' > Start </button>
//       </div>
//       <div>
//         <CountdownCircleTimer
//           isPlaying={true}
//           duration={n}
//           colors={['#059669', '#10b981', '#34d399', '#6ee7b7']}
//           colorsTime={[n, n - n / 4, n - ((2 * n) / 3), n - ((3 * n) / 2)]}
//           onComplete={() => ({ shouldRepeat: true, delay: 2 })}
//         >
//           {renderTime}
//         </CountdownCircleTimer>
//       </div>
//     </div >
//   )
// }

// {/* <div className="mt-8 font-md"> Task and Break time settings</div>
//       <div className="mt-10 flex flex-col">

//         <Label htmlFor="inputTime" value="Enter Time" className="text-white" />
//         <TextInput id="inputTime" type="number" sizing="sm" className="w-1/4" />
//       </div> */}