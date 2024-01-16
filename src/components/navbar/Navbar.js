import Links from "./Links";
const Navbar = () => {
  return (
    <div className="flex">
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <Links/>
      </div>
    </div>
  )
};

export default Navbar;