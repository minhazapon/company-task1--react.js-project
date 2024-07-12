

const Nav = () => {

    const icon = <>
     
      <div>
        
        <div className=" flex items-center gap-2">
           
           <div className="   transition duration-300 ease-in-out hover:scale-110">
           <img className=" h-[30px]" src="https://i.ibb.co/C60Bbmc/search-3.png" alt="" />
           </div>
           <div className="   transition duration-300 ease-in-out hover:scale-110">
           <img className=" h-[30px]" src="https://i.ibb.co/1Xn547S/pencil-2.png" alt="" />
           </div>
           <div className="   transition duration-300 ease-in-out hover:scale-110">
           <img className=" h-[30px]" src="https://i.ibb.co/LvpXxhZ/invitatiion.png" alt="" />
           </div>
           <div className="   transition duration-300 ease-in-out hover:scale-110">
           <img className=" h-[30px]" src="https://i.ibb.co/HPs7jFc/bell.png" alt="" />
           </div>
           <div className="   transition duration-300 ease-in-out hover:scale-110">
           <img className=" h-[30px]" src="https://i.ibb.co/1Zw8hkY/more.png" alt="" />
           </div>
           

        </div>


      </div>

    
    
    </>



    return (
        <div className=" ">

<div className="navbar bg-black shadow-xl fixed p-3 ">
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
    <a className=" text-3xl font-bold"><span className=" text-5xl text-[#3e4aec]">Galaxy</span> <span className=" text-[#e54ed0]">Think</span></a>
    </div>
    


  </div>
  <div className="  navbar-end   -mr-96 hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {icon}
    </ul>
  </div>
  <div className="navbar-end">
  <div className=" rounded-full">
          <img className=" h-[45px] w-[45px]  rounded-full"
            alt="Tailwind CSS Navbar component"
            src="https://img.freepik.com/premium-photo/portrait-documentary-photographer-wallpaper_987764-132140.jpg?w=740" />
        </div>

  </div>
</div>
            
        </div>
    );
};

export default Nav;