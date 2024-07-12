

const Nav = () => {

    const icon = <>
       

    
    
    </>



    return (
        <div className=" mt-3 ml-3 mr-3">

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {icon}
      </ul>
    </div>
    
    <div className=" flex items-center gap-1">
    <img className=" h-[50px]" src="https://i.ibb.co/wz5588P/saturn.png" alt="" />
    <a className=" text-3xl font-bold"><span className=" text-5xl text-[#00076f]">Galaxy</span> <span className=" text-[#e54ed0]">Think</span></a>
    </div>
    


  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {icon}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="w-10 rounded-full">
          <img className=" rounded-full"
            alt="Tailwind CSS Navbar component"
            src="https://i.ibb.co/2SQLxtc/galaxy-1.png" />
        </div>

  </div>
</div>
            
        </div>
    );
};

export default Nav;