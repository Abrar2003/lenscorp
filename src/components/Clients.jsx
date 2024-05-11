"use client";
import { useEffect } from "react";
function Clients() {
    let darkMode = false;
    const imagesDark = [
        "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGlobal_white.7630bd08.png&w=256&q=75",
        "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FZkt_white.cacd6ecf.png&w=256&q=75",
        "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCore_white.8ba066be.png&w=256&q=75",
        "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGrove.f0ee63ad.png&w=128&q=75"
    ]
    const imagesLight = [
        "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_1.ad2ee302.png&w=256&q=75",
        "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_3.37f82c98.png&w=256&q=75",
        "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_2.7e06895b.png&w=256&q=75",
        "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrov.97a72987.png&w=128&q=75"
    ]
    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if(theme === "dark") {
            darkMode = true;
        }
        else {
            darkMode = false;
        }
    }, [])
  return (
    <div className="w-full h-[300px] text-center">
        <div className="w-3/5 h-full m-auto">
            <h1 className="text-black dark:text-white font-medium text-3xl">We Work With Amazing Clients</h1>
            <div className="m-auto flex justify-center items-center gap-[15px]">
                {darkMode ? imagesDark.map((el, i) => 
                    <div key={i}>
                        <img className="bg-blue-300" src={el} alt={`client ${i}`} />
                    </div>
                ): imagesLight.map((el, i) => 
                <div key={i}>
                    <img src={el} alt={`client ${i}`} />
                </div>
            )}
            </div>
        </div>
    </div>
  )
}

export default Clients