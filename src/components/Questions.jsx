import { IoIosArrowDown } from "react-icons/io";

const questions = [
  "Do I need to sign a contract?",
  "What sevices do we offer?",
  "How do we ensure quality of deliverables?",
  "How do you ensure user privacy?",
  "How do I begin collaboration?",
  "How can I pay for the services?",
];
export const Question = () => {
  return (
    <div className="border-b border-1 text-black dark:text-white border-gray-500">
      <div className="w-full pt-20 px-32">
        <div className="w-full text-center">
          <h1 className="text-2xl font-medium">GET TO KNOW US</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0594ff] to-[#93f3f6] rounded mx-auto mt-1"></div>
          <h1 className="text-6xl font-medium text-center my-6">
            Frequently Asked Questions
          </h1>
        </div>
      </div>
      <div className="w-full px-20 py-10 grid grid-cols-2 gap-6">
        {questions.map((el, i) => {
          return (
            <div
              key={i}
              className="p-3 rounded flex w-full justify-between items-center border border-1 border-black dark:border-white"
            >
              <span>{el}</span>
              <IoIosArrowDown className="text-black dark:text-white" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
