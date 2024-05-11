function Numbers() {
  return (
    <div className="w-full p-10 h-[300px] text-center bg-[#262e5c] dark:bg-[#252424] text-white">
      <h1 className="font-light text-3xl mb-5">By the numbers</h1>
      <div className="flex justify-evenly items-center gap-5 w-[60%] m-auto">
        <div>
          <h1 className="font-semibold text-4xl">
            15 <span className="text-gray-700 font-normal">+</span>
          </h1>
          <p className="text-xl font-normal">Solutions for <br /> Global crises</p>
        </div>
        <div className="w-0 h-[150px] border border-white"></div>
        <div>
          <h1 className="font-semibold text-4xl">
            10 <span className="text-gray-700 font-normal">+</span>
          </h1>
          <p className="text-xl font-normal">University <br /> Collaborations</p>
        </div>
        <div className="w-0 h-[150px] border border-white"></div>
        <div>
            <h1 className="font-semibold text-4xl">25 <span className="text-gray-700 font-normal">+</span></h1>
            <p className="text-xl font-normal">Employees <br /> Worldwide</p>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
