import { useState } from "react";
import Result from "./result";

const Main = () => {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [type, setType] = useState("repayment");
  const [show, setShow] = useState(false);
  type FormErrors = {
    amount?: string;
    term?: string;
    rate?: string;
    type?: string;
  };
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    const errors: Record<string, string> = {};

    if (!amount) errors.amount = "This field is required";
    if (!term) errors.term = "This field is required";
    if (!rate) errors.rate = "This field is required";
    if (!type) errors.type = "This field is required";

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;

    setShow(true);
  };
  const handleClear = () => {
    setAmount("");
    setTerm("");
    setRate("");
    setType("");
    setShow(false);
  };
  return (
    <div className="flex min-h-screen md:justify-center md:items-center bg-blue-50 md:px-4">
      <div className="flex md:flex-row flex-col flex-1 w-full md:max-w-4xl md:rounded-2xl md:mx-auto shadow-xl overflow-hidden bg-White">
        <div className="flex-1 p-8 bg-white ">
          <div className="flex md:flex-row flex-col  justify-between md:items-center mb-6">
            <h1 className="font-bold text-lg text-Slate-900 mb-2">
              Mortgage Calculator
            </h1>
            <button
              className="text-Slate-500 text-sm underline text-left font-[500] cursor-pointer"
              onClick={handleClear}
            >
              Clear All
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 ">
            <div>
              <label className="text-sm font-medium text-Slate-500 mb-1 block">
                Mortgage Amount
              </label>
              <div
                className={`group flex items-center border rounded w-full overflow-hidden cursor-pointer ${
                  formErrors.amount ? "border-Red" : "hover:border-Lime"
                }`}
              >
                <span
                  className={`px-3 py-2 font-bold ${
                    formErrors.amount
                      ? "bg-Red text-White"
                      : "bg-Slate-100 text-Slate-700 group-hover:bg-Lime"
                  }`}
                >
                  £
                </span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className={`flex-1 py-2 px-2 outline-none border-none cursor-pointer 
        [&::-webkit-inner-spin-button]:appearance-none 
        [-moz-appearance:textfield] 
        ${formErrors.amount ? "bg-red-50" : ""}`}
                />
              </div>
              {submitted && formErrors.amount && (
                <p className="text-Red text-sm mt-1">{formErrors.amount}</p>
              )}
            </div>

            <div className="flex md:flex-row flex-col  gap-4 ">
              <div className="flex-1">
                <label className="text-sm font-[500] text-Slate-500 mb-1 block">
                  Mortgage Term
                </label>
                <div className={`flex items-center border rounded overflow-hidden h-11 md:w-[190px] w-full justify-between
                  ${formErrors.term ? "border-Red": " " }`}>
                  <input
                    type="number"
                    className="flex py-2 px-2 outline-none min-w-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                  />
                  <span className={`${formErrors.term ? "bg-Red text-White" : "bg-Slate-100 text-Slate-700"} px-2 font-[500] h-full flex items-center `}>
                    years
                  </span>
                </div>
                { submitted && formErrors.term && <p className="text-Red text-sm mt-1">{formErrors.term}</p>}
              </div>

              <div className="flex-1">
                <label className="text-sm font-[500] text-Slate-500 mb-1 block">
                  Interest Rate
                </label>
                <div className={`flex items-center border rounded overflow-hidden h-11 md:w-[180px] w-full justify-between
                ${formErrors.rate ? "border-Red": " " }`}>
                  <input
                    type="number"
                    step="0.01"
                    className="flex py-2 px-2 outline-none min-w-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                  />
                  <span className={`${formErrors.rate ? "bg-Red text-White" : "bg-Slate-100 text-Slate-700 "} px-2 font-[500] h-full flex items-center`}>
                    %
                  </span>
                </div>
                { submitted && formErrors.rate && <p className="text-Red text-sm mt-1">{formErrors.rate}</p>}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-Slate-500 mb-2">
                Mortgage Type
              </p>
              <div className="flex flex-col gap-3">
                <label className=" flex items-center gap-3 p-3 border rounded cursor-pointer transition peer-checked:bg-Lime/40 hover:border-Lime/40 ">
                  <div className="relative flex">
                    <input
                      type="radio"
                      name="mortgageType"
                      value="repayment"
                      className="peer appearance-none w-5 h-5 rounded-full border-2 border-Lime cursor-pointer"
                      checked={type === "repayment"}
                      onChange={() => setType("repayment")}
                    />
                    <div className="group pointer-events-none absolute top-1 left-1 w-3 h-3 bg-Lime rounded-full scale-0 peer-checked:scale-100 transition-transform" />
                  </div>
                  <span className="text-Slate-900 font-medium">Repayment</span>
                </label>

                <label className="flex items-center gap-3 p-3 border rounded cursor-pointer transition peer-checked:bg-Lime/40 hover:border-Lime/40 focus:bg-Lime/40">
                  <div className="relative flex">
                    <input
                      type="radio"
                      name="mortgageType"
                      value="interest"
                      className="peer appearance-none w-5 h-5 rounded-full border-2 border-Lime cursor-pointer"
                      checked={type === "interest"}
                      onChange={() => setType("interest")}
                    />
                    <div className="pointer-events-none absolute top-1 left-1  w-3 h-3 bg-Lime rounded-full scale-0 peer-checked:scale-100 transition-transform" />
                  </div>
                  <span className="text-Slate-900 font-medium">
                    Interest Only
                  </span>
                </label>
                { submitted && formErrors.type && <p className="text-Red text-sm mt-1">{formErrors.type}</p>}
              </div>
            </div>
            <button
              type="submit"
              className="md:self-start bg-Lime cursor-pointer  p-10 py-3 rounded-full mt-2 flex items-center justify-center gap-2 font-[700] hover:bg-Lime/40"
            >
              <img
                src="/images/icon-calculator.svg"
                alt="icon-calculator"
                className="h-5 w-5"
              />
              Calculate Repayments
            </button>
          </form>
        </div>

        <div className="flex-1 bg-Slate-900  p-8 md:rounded-r-2xl flex flex-col justify-center items-center gap-3 md:rounded-bl-[60px] ">
          {!show ? (
            <>
              <img
                src="/images/illustration-empty.svg"
                alt="illustration-empy"
              />
              <h1 className="text-White font-[700]">Results shown here</h1>

              <p className="text-Slate-500 font-[500] text-center text-sm">
                Complete the form and click “calculate repayments” to see what
                your monthly repayments would be.
              </p>
            </>
          ) : (
            <Result amount={amount} term={term} rate={rate} type={type} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
