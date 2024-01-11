import { AdvDetails } from "../DataFetching/List";
import PageDetails from "./PageDetails";

const Results = () => {
  return (
    <div className="bg-white mt-1 ">
      <div className="hidden md:block">
        <div className="flex gap-2 md:flex-row p-3 justify-between flex-col border-b-2 border-b-black/[.1]">
          <p className="w-1/6">Advocate Name</p>
          <p className="w-1/6">Enrollment</p>
          <p className="w-1/6">Plan Choosed</p>
          <p className="w-1/6">Amount</p>
          <p className="w-1/6">Paid on</p>
          <p className="w-1/6">Membershp status</p>
        </div>
      </div>
      {AdvDetails.map((item) => (
        <div
          key={item.id}
          className="flex justify-between  "
          style={{ background: "#fafafa" }}
        >
          <div className="flex w-full md:mt-2  flex-col md:flex-row  flex-1 px-5 md:px-0 text-2xl md: py-3 md:border-b-2 md:border-b-black/[.1] md:text-base ">
            <p className="md:w-1/6 ml-2 w-full  md:px-0 p-2 md:p-0  flex justify-between font-extralight md:font-normal">
              <span className="block md:hidden text-lg font-medium">
                Advocate Name
              </span>
              {item.advName}
            </p>
            <p className="md:w-1/6 ml-2 w-full p-2  md:px-0 md:p-0  flex justify-between font-extralight md:font-normal">
              <span className="block md:hidden text-lg font-medium">
                Enrollment
              </span>{" "}
              {item.enrollment}
            </p>
            <p className="md:w-1/6 ml-2 w-full p-2  md:px-0 md:p-0  flex justify-between font-extralight md:font-normal">
              <span className="block md:hidden text-lg font-medium">
                Plan choosed
              </span>{" "}
              {item.choosenPlan}
            </p>
            <p className="md:w-1/6 ml-2 w-full p-2  md:px-0 md:p-0  flex justify-between font-extralight md:font-normal">
              <span className="block md:hidden text-lg font-medium">
                Amount
              </span>
              {item.amount}
            </p>
            <p className="md:w-1/6  w-full p-2  md:px-0 md:p-0  flex justify-between font-extralight md:font-normal">
              <span className="block md:hidden ml-2 text-lg font-medium">
                Paid on
              </span>{" "}
              {item.paidDate}
            </p>
            <p className="md:w-1/6 ml-2 w-full  md:px-0 p-2 md:p-0  flex justify-between font-extralight md:font-normal">
              <span className="block md:hidden text-lg font-medium">
                Membership status
              </span>
              {item.status}
            </p>
          </div>
        </div>
      ))}

      <footer className="py-1">
        <PageDetails />
      </footer>
    </div>
  );
};

export default Results;
