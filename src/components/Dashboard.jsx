import { useState } from "react";
import "./Dashboard.css";
import Results from "./Results";
import { VscListSelection } from "react-icons/vsc";

const Dashboard = ({ member, pending }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full md:w-1/3">
      <div>
        <div className=" w-full bg-white  md:cursor-pointer  p-3 flex md:justify-center justify-between hover:bg-slate-300/[.3] font-semibold relative">
          <p>{member}</p>
          {pending > 1 && (
            <span className="ml-2 text-blue-400 hidden md:block">
              {pending}
            </span>
          )}
          <VscListSelection
            className="block md:hidden font-semibold cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        {open && (
          <div className="md:hidden block">
            <Results />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
