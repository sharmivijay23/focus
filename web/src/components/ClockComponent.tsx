const ClockTimeComponent = () => {

  return (
    <div className="flex flex-col ml-6">
      <div className="text-4xl mb-4 font-semibold"> Clock </div>
      <div className="text-gray-400"> Clock helps you track time across different time zones and easily switch between 12-hour and 24-hour formats for
        user-friendly timekeeping.</div>
      <div className="flex flex-row">
        <div className="flex flex-col justify-center m-6">
          <div className="flex h-28 w-48 rounded-lg justify-center items-center text-4xl font-bold text-white p-10 bg-gradient-to-r from-green-500 via-yellow-700 to-green-800 ">
            1:45
          </div>
          <div className="flex justify-center items-center mt-2">12-hour clock</div>
        </div>
        <div className="flex flex-col justify-center m-6">
          <div className="flex h-28 w-48 rounded-lg justify-center items-center text-4xl font-bold text-white p-10 bg-gradient-to-r from-green-500 via-yellow-700 to-green-800">
            13:45
          </div>
          <div className="flex justify-center items-center mt-2">24-hour clock</div>
        </div>
      </div>
    </div>
  )
}

export default ClockTimeComponent;