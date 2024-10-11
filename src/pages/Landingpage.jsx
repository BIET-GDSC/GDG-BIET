import Circle from "../components/Circle";
import Header from "../components/Header";
import Herosection from "../components/HeroSection";
import Square from "../components/Square";

function Landingpage(){
    const color='#4285F4';
    return<div className="relative">
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
       </div>
       
    </div>
}

export default Landingpage;