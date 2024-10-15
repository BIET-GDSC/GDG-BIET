import Circle from "../components/Circle";
import Header from "../components/Header";
import Herosection from "../components/Herosection";
import Square from "../components/Square";
import Cards from "../components/Cards";

import gdg_logo from "../assets/gdg_logo.svg";

function Landingpage(){
    const color='#4285F4';
    return<div className="relative ">
       <Header></Header>
       
       <Square block={true} color={color} top={'18rem'} left={'-8rem'} rotate={'15deg'} small={false}>
       </Square>
       <Square block={false} color={color} top={'34rem'} left={'10rem'} rotate={'20deg'} small={true}>
       </Square>
       <Circle block={false} color={"#34A853"} top={'24rem'} right={'10rem'} rotate={'15deg'} small={true}></Circle>
       <Circle block={true} color={"#34A853"} top={'24rem'} right={'-10rem'} rotate={'15deg'} small={false}></Circle>

       <div className="w-3/6 m-auto mt-32">
       <Herosection></Herosection>
       <div className="w-full flex  justify-center mt-5">
        <h3 className="font-Lato text-[#656C73] font-normal text-center mt-5 text-base">On Campus<br/><strong className="text-[#FBBC04] mt-10 text-2xl leading-10">BIET</strong>, Lucknow</h3>
       
       </div>
       <div className="w-full mt-60 text-2xl px-10 text-center text-[#656C73] font-Lato leading-10">
        <Description></Description>
       </div>
       </div>

       <div className="m-auto w-4/6 mt-32 flex justify-center flex-col text-[#656C73]">
        <p className="pl-20 text-xl font-semibold">We</p>
        <p className="text-6xl text-center"><strong className="text-[#34A853] bg-green-200 rounded-2xl px-3 mx-1">Learn</strong>,<strong className="text-[#EA4335] bg-red-200 rounded-2xl px-3 mx-1">Innovate</strong> & <strong className="text-[#4285F4] bg-blue-200 rounded-2xl px-3 mx-1">Create</strong></p>
        <p className="text-center m-5 text-[#FBBC04] text-2xl font-base">while having fun.</p>
       </div>
       <div className="h-40">

       </div>

       {/* <div>
        <Cards></Cards>
       </div> */}
       
    </div>
}

export default Landingpage;

function Description(){
    return <p>At BIET, Lucknow's on campus GDG we are creating a dynamic, ever-growing community of tech enthusiasts who are passionate about <strong className="text-[#34A853]">technology</strong>, <strong className="text-[#4285F4]">development</strong>, and the <strong className="text-[#EA4335]">joy</strong> of continuous learning. </p>

}