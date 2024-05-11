import { IoCheckmarkSharp } from "react-icons/io5";

function Why() {
  const qualities = [
    "State-of-the-art solutions",
    "Lifetime support & upgrades",
    "Fast & Efficient",
    "Plug-and-Play",
    "No extra computation fee",
    "24x7 Progress Monitoring",
    "No licensing fee",
    "Incremental Updates",
  ];
  return (
    <div className="text-center w-3/4 text-black m-auto dark:text-white mb-10">
      <h1 className="text-2xl font-medium">Why Choose Us</h1>
      <div className="w-20 h-1 bg-gradient-to-r from-[#0594ff] to-[#93f3f6] rounded mx-auto mt-1 mb-10"></div>
      <h1 className="mb-10 text-6xl font-nomral tracking-wide">
        AI-driven solutions backed by science
      </h1>
      <p className="w-3/5 m-auto text-[21px] tracking-normal mb-5">
        Every piece of AI technology shipped from LENS is thoroughly benchmarked
        via rigorous evaluations. With a global network of experts and
        academicians, we guarantee the most accurate and robust solutions in the
        market.
      </p>
      <div className="w-2/5 grid grid-cols-2 m-auto gap-x-10 gap-y-5 mb-10">
        {qualities.map((el, i) => 
            <div key={i}  className="flex justify-start items-center text-lg text-black dark:text-white">
                <IoCheckmarkSharp className="mr-2 text-black dark:text-white" />
                {el}
            </div>
        )}
      </div>

      <div className="w-full flex justify-center items-center gap-5">
          <div className="w-1/4 flex flex-col h-[400px] text-left bg-white dark:bg-[#1b1c1f] hover:border-2 hover:border-[#17bfa4] p-5 rounded-2xl dark:hover:bg-gradient-to-b dark:from-[#4b978a56] dark:via-[#31d6bb2c] dark:to-black hover:bg-gradient-to-b from-[#4b978a56] via-[#31d6bb2c] to-white">
            <h1 className="text-2xl mb-12 font-semibold">Exclusive Rights</h1>
            <img className="w-auto h-auto m-auto" src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreen.e71c8735.png&w=256&q=75" alt="" />
            <p className="text-lg">Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you.</p>
          </div>
          <div className="w-1/4 flex flex-col h-[400px] text-left bg-white dark:bg-[#1b1c1f] hover:border-2 hover:border-[#41bdef] p-5 rounded-2xl dark:hover:bg-gradient-to-b dark:from-[#55899e80] dark:via-[#24718f49] dark:to-black hover:bg-gradient-to-b from-[#55899e80] via-[#24718f49] to-white">
            <h1 className="text-2xl mb-12 font-semibold">Research Driven</h1>
            <img className="w-[150px] h-[150px] m-auto" src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblue.f22859fe.png&w=256&q=75" alt="" />
            <p className="text-lg">We regularly benchmark our solutions via comparing industry-vide evaluations so our partners only get the best that AI can offer.</p>
          </div>
          <div className="w-1/4 flex flex-col h-[400px] text-left bg-white dark:bg-[#1b1c1f] hover:border-2 hover:border-[#e56b6a] p-5 rounded-2xl dark:hover:bg-gradient-to-b dark:from-black dark:via-[#7e43433f] dark:to-[#a3535363] hover:bg-gradient-to-b from-white via-[#7e43433f] to-[#a3535363]">
            <h1 className="text-2xl mb-12 font-semibold">Plug-and-Play</h1>
            <img className="w-[100px] h-auto m-auto" src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fred.a7efdb29.png&w=128&q=75" alt="" />
            <p className="text-lg">We provide AI-driven solutions into businesses where they can bring tangible value. Each solution is customized as per your needs and deployed on any computing device of your choice.</p>
          </div>
          <div className="w-1/4 flex flex-col h-[400px] text-left bg-white dark:bg-[#1b1c1f] hover:border-2 hover:border-[#f1a14d] p-5 rounded-2xl dark:hover:bg-gradient-to-b dark:from-black dark:via-[#9c6d3a28] dark:to-[#966b3e73] hover:bg-gradient-to-b from-white via-[#9c6d3a28] to-[#966b3e73]">
            <h1 className="text-2xl mb-12 font-semibold">Lifetime Support</h1>
            <img className="w-[150px] h-[150px] m-auto" src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyellow.d937d179.png&w=256&q=75" alt="" />
            <p className="text-lg">Should you face any issues, we are always at your service. We provide lifetime technical support & upgrade options.</p>
          </div>
      </div>
    </div>
  );
}

export default Why;
