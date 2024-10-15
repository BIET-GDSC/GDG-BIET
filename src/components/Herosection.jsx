import leftlogo from "../assets/leftlogo.svg"
import rightlogo from "../assets/rightlogo.png"
import gdg_logo from "../assets/gdg_logo.svg"
function Herosection(){

    return <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center h-full">
        {/* logo for smaller screen */}
        <div className="lg:hidden"><img src={gdg_logo}></img></div> 
        
       <div className="object-cover h-48 justify-center w-auto hidden lg:flex"><img src={leftlogo}></img></div> 
        <div className="text-center text-6xl font-Lato text-[#656C73]"><strong className="text-[#EA4335]">G</strong>oogle<br/><strong className="text-[#4285F4]">D</strong>eveloper<br/><strong className="text-[#34A853]">G</strong>roups</div>
        <div className="object-cover h-48 justify-center w-auto hidden lg:flex"><img src={rightlogo}></img></div>
    </div>
}

export default Herosection;