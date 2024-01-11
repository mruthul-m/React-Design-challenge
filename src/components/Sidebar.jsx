import { AiOutlineHome } from "react-icons/ai";
import { TbDeviceIpadMinus } from "react-icons/tb";
import { PiCube } from "react-icons/pi";
import { MdPersonOutline } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import "./Navbar.css";

const Navbar = () => {
  const sidebarContent = [
    { id: 1, name: "Home", icon: AiOutlineHome },
    { id: 2, name: "Admin", icon: TbDeviceIpadMinus },
    { id: 3, name: "Membership", icon: PiCube },
    { id: 4, name: "Advocate", icon: MdPersonOutline },
  ];

  return (
    <div className="  flex flex-row justify-between gap-3 md:gap-9 md:flex-col md:justify-between md:w-full md:text-xl md:h-full ">
      <main className="flex flex-row justify-between md:mt-12 gap-2 md:flex-col md:justify-between md:w-full      md:text-xl ">
        {sidebarContent.map((item) => (
          <section
            key={item.id}
            className="font-medium flex py-5  gap-3 items-center  px-0 md:px-10  duration-150 cursor-pointer flex-1 hover-content rounded-none md:rounded-r-xl"
          >
            <item.icon className="text-3xl  w-full md:w-fit" />
            <p className="hidden md:block">{item.name}</p>
          </section>
        ))}
      </main>
      <footer>
        <section className="font-medium flex py-5 gap-3 items-center px-3 md:px-10  duration-150 cursor-pointer hover-content rounded-none md:rounded-r-xl">
          <BiLogOut className="text-3xl w-full md:w-fit" />
          <p className="hidden md:block ">Log out</p>
        </section>
      </footer>
    </div>
  );
};

export default Navbar;
