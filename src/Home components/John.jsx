
// https://www.figma.com/design/yUdKIL0fOH3GlRP8kR1aiH/User-Profile---%23DailyUI-006-(Community)?node-id=4-147&m=dev

const John = () => {
    return (
        <div className=" ml-10 mr-10  mb-10">

            <div className=" flex-col md:flex-row lg:flex-row flex justify-center gap-10">


 {/* JOHN DOE SECTION -------------------------------- */}



            <div>
              
               <div className=" flex-col md:flex-row lg:flex-row  -mt-32 ">
                <div className=" flex-col md:flex-row lg:flex-row  flex gap-10">
                   <img className=" border-[5px] border-blue-950 rounded-full h-[220px] w-[220px]" src="https://img.freepik.com/premium-photo/portrait-documentary-photographer-wallpaper_987764-132140.jpg?w=740" alt="" />
                   <div className="   -mb-28 flex items-center  gap-10"> 
                    <h1 className=" text-4xl font-bold">John Doe  . <span className=" text-xs text-blue-400">@johndoe</span>  <br></br>
                       <span className=" font-serif text-xl">Astrophotographer 🌌
                       </span><br></br>
                       <span className=" font-serif  text-xl" >Gamer 👾</span>
                    </h1>
                    <button className=" btn  bg-blue-600 text-white -mt-12  text-xl">follow</button>
                   </div>
                </div>
                </div>


                <div className="  mt-28">

                <div className="max-w-lg p-4 shadow-md bg-gray-200 text-gray-100">
	            <div className="flex justify-between pb-4 border-bottom">
             	</div>
             	<div className="space-y-4">
		        <div className="space-y-2">
			    <a rel="noopener noreferrer" href="#" className="block">
			    <h3 className="text-2xl font-bold text-black">How Astrophotography changed my life</h3>
			    </a>
			    <p className="leading-snug text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quos rem nemo autem consequatur quis laudantium ipsa expedita obcaecati? Modi ratione minima cumque cupiditate soluta saepe, nostrum possimus magni a?</p>
                 <div className=" flex items-center gap-3">
                  <p className=" text-blue-500">#photo</p>
                  <p className=" text-blue-500">#astronomy</p>
                  <p className=" text-blue-500">#astrography</p>
                  <p className=" text-blue-500"> more</p>
                 </div>
		        </div>
	            </div>
                </div>
                </div>


                <div className=" mt-10">

                <div className="max-w-lg p-4 shadow-md bg-gray-200 text-gray-100">
	            <div className="flex justify-between pb-4 border-bottom">
             	</div>
             	<div className="space-y-4">
		        <div className="space-y-2">
			    <a rel="noopener noreferrer" href="#" className="block">
			    <h3 className="text-2xl font-bold text-black">Which Telescope and DSLR I use</h3>
			    </a>
			    <p className="leading-snug text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quos rem nemo autem consequatur quis laudantium ipsa expedita obcaecati? Modi ratione minima cumque cupiditate soluta saepe, nostrum possimus magni a?</p>
                 <div className=" flex items-center gap-3">
                  <p className=" text-blue-500">#photo</p>
                  <p className=" text-blue-500">#astronomy</p>
                  <p className=" text-blue-500">#astrography</p>
                  <p className=" text-blue-500"> more</p>
                 </div>
		        </div>
	            </div>
                </div>
                </div>







            </div>

    

{/* PHOTO AND VIDEO SECTION ----------------------------------------------------------------------------------------- */}

             
            <div>
            

            <div>
            <h1 className=" text-4xl font-semibold">Photos</h1>
             <div className=" flex items-center rounded-xl">
             <div className=" mt-3 grid grid-cols-2  rounded-xl ">
                <img className="  h-[150px] w-[200px]" src="https://img.freepik.com/premium-photo/spiral-galaxy-with-stars-galaxy-background_198067-844917.jpg?w=740" alt="" />
                <img className="  h-[150px] w-[200px]" src="https://img.freepik.com/free-photo/photorealistic-galaxy-background_23-2151064325.jpg?t=st=1720783477~exp=1720787077~hmac=0e03e6eb65e982608f5a390cf0a2bb87e99aebab13b58f2d497f9d4e895fdf49&w=740" alt="" />
                <img className="  h-[150px] w-[200px]" src="https://img.freepik.com/free-photo/photorealistic-galaxy-background_23-2151064326.jpg?t=st=1720784126~exp=1720787726~hmac=71f4df426627d0edb2f07ec18d89cecb504e4922269eb52a91a55f1f18b868bb&w=740" alt="" />
                <img className="  h-[150px] w-[200px]" src="https://img.freepik.com/premium-photo/incredibly-beautiful-galaxy-nebula-starry-sky-outer-space-background-3d-rendering_476612-21606.jpg?w=740" alt="" />
             </div>
             </div>
            </div>


            <div className=" mt-10">
             <h1 className=" text-4xl font-semibold">Videos</h1>
             <div className=' '>
             <video className=" h-[300px] w-[400px]  " controls>
             <source src=" https://assets.mixkit.co/videos/18791/18791-720.mp4  " 
             type="video/mp4" />
            </video>
            </div>   
            </div>

            <div className="">
            
            <div className=" flex items-center gap-12 mt-3">
            <div className=' '>
             <video className=" h-[100px] w-[100px] " controls>
             <source src=" https://assets.mixkit.co/videos/14151/14151-720.mp4  " 
             type="video/mp4" />
            </video>
            </div>

            <div className=' '>
             <video className=" h-[100px] w-[100px] " controls>
             <source src=" https://assets.mixkit.co/videos/30889/30889-720.mp4  " 
             type="video/mp4" />
            </video>
            </div> 

            <div className=' '>
             <video className=" h-[100px] w-[100px] " controls>
             <source src=" https://assets.mixkit.co/videos/32910/32910-720.mp4  " 
             type="video/mp4" />
            </video>
            </div>  
            </div>

            </div>

            </div>








            </div>
            
        </div>
    );
};

export default John;