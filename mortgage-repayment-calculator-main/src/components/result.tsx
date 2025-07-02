const Result = ({ amount, term, rate, type }: { amount: string; term: string; rate: string; type: string }) => {
  const principal = parseFloat(amount);
  const annualRate = parseFloat(rate) / 100;
  const months = parseInt(term) * 12;

  let monthlyPayment = 0;
  let totalPayment = 0;

  if (type === "repayment") {
    const monthlyRate = annualRate / 12;
    monthlyPayment =
      (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    totalPayment = monthlyPayment * months;
  } else {
    monthlyPayment = (principal * annualRate) / 12;
    totalPayment = monthlyPayment * months;
  }
  return (
    <div className="flex flex-col   rounded-r-2xl rounded-bl-[60px] text-white gap-6 ">
      <h1 className="text-White text-lg font-[700]">Your results</h1>
      <p className="text-Slate-500 text-sm font-[500]">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <div className="relative  ">
        <div className="absolute  top-1 left-0 w-full h-[50px] bg-Lime rounded-[9px] z-0" />
        <div className="relative z-10 p-5  bg-slate-900 shadow-Lime mt-2 mb-18 rounded-[5px] w-full">
          <p className="text-Slate-500 font-[700] text-sm mb-3">
            Your monthly repayments
          </p>
          <span className="text-Lime text-5xl">£{monthlyPayment.toFixed(2)}</span>
          <div className="border-1 border-Slate-100/10 mt-5 mb-5" />
          <p className="text-Slate-500 font-[700] text-sm mb-3">
            Total you'll repay over the term
          </p>
          <span className="text-White text-2xl">£{totalPayment.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Result;
