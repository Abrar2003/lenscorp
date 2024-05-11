import Image from "next/image";
import people from "../../public/people.svg";
import radar from "../../public/radar.svg";
import weight from "../../public/weight.svg";

function Timeline() {
  return (
    <div className="w-3/5 m-auto text-center text-black dark:text-white my-12">
      <h1 className="text-2xl font-medium">OUR VISION</h1>
      <div className="w-20 h-1 bg-gradient-to-r from-[#0594ff] to-[#93f3f6] rounded mx-auto mt-1 mb-10"></div>
      <h1 className="mb-10 text-5xl font-nomral tracking-wide">
        AI for Social Good
      </h1>
      <p className="w-3/5 m-auto text-[21px] tracking-normal mb-5">
        Explainable AI (XAI) is an emerging subject of machine learning research
        that refers to strategies that try to provide transparency to typically
        opaque AI models and their predictions.
      </p>
      <div className="text-left p-10">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 mx-auto">
          <div className="p-10">
            <h1 className="font-semibold text-3xl mb-10 ">
              Diversity & Fairness
            </h1>
            <p className="text-gray-500 text-lg">
              When training our AI models, we consider ethical and social
              implications of algorithm-based decision making. Our solutions use
              high-quality and fairly-represented data sets to eliminate human
              cognitive biases
            </p>
          </div>
          <div>
            <div className="w-12 h-12 rounded-full border-2 flex justify-center items-center bg-white dark:bg-black border-gray-800">
              <Image src={people} alt="" />
            </div>
            <div className="border-2 border-dashed border-gray-800 h-full w-1 m-auto"></div>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 mx-auto border-1 border-white">
          <div></div>
          <div>
            <div className="w-12 h-12 rounded-full border-2 flex justify-center items-center bg-white dark:bg-black border-gray-800">
              <Image src={radar} alt="" />
            </div>
            <div className="border-2 border-dashed border-gray-800 h-full w-1 m-auto"></div>
          </div>
          <div className="p-10">
            <h1 className="font-semibold text-3xl mb-10 ">
              Regulatory Compliance
            </h1>
            <p className="text-gray-500 text-lg">
              Working with clients globally, LENS acknowledges applicable data
              privacy regulations, such as the GDPR, HIPAA and others, in all
              our solutions handling sensitive data. We also ensure our
              algorithms allow for the required level of decision-making
              transparency and explainability.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 mx-auto border-1 border-white">
          <div className="p-10">
            <h1 className="font-semibold text-3xl mb-10 ">Code of Ethics</h1>
            <p className="text-gray-500 text-lg">
              LENS believes in a just, non-violent world of equality and
              fairness. We prize democratic values, civil liberties and open and
              informed debate. When used to further these values,
              algorithm-based decision-making models can continue to make the
              world a safer, better place for everyone.
            </p>
          </div>
          <div>
            <div className="w-12 h-12 rounded-full border-2 flex justify-center items-center bg-white dark:bg-black border-gray-800">
              <Image src={weight} alt="" />
            </div>
            <div className="border-2 border-dashed border-gray-800 h-full w-1 m-auto"></div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
