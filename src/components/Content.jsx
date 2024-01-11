import Dashboard from "./Dashboard";
import Results from "./Results";

const Content = () => {
  return (
    <div className="mt-5 md:mt-5">
      <h1 className="text-3xl font-semibold mb-5">Advocates</h1>
      <div className="">
        <div className="flex flex-col md:flex-row gap-3 relative">
          <Dashboard member={"Active members"} pending={0} />
          <Dashboard member={"Pending Request"} pending={3} />
          <Dashboard member={"Membership expired"} pending={2} />
        </div>
        <div className="hidden md:block">
          <Results />
        </div>
      </div>
    </div>
  );
};

export default Content;
