import Circle from "../components/Circle";
import Header from "../components/Header";
import Herosection from "../components/Herosection";
import Square from "../components/Square";
import Cards from "../components/Cards";

import topLine from "../assets/top-line.svg";
import middleLine from "../assets/middle-line.svg";
import circleYellow from "../assets/circle-yellow.svg";
import circleGreen from "../assets/circle-green.svg";
import square from "../assets/square.svg";
import triangle from "../assets/triangle.svg";
import octagon from "../assets/octagon.svg";
import googleIcon from "../assets/googleIcon.png";

function Landingpage() {
    const color = '#4285F4';
    
    return (
        <div className="relative">
            <Header />

            {/* Top Line Graphic */}
            <div className="absolute right-0 -top-4 -z-10">
                <img src={topLine} alt="Top Line Decoration" loading="lazy" />
            </div>

            {/* Shapes and Graphics */}
            <Square block={true} color={color} top="18rem" left="-8rem" rotate="15deg" small={false} />
            <Square block={false} color={color} top="34rem" left="10rem" rotate="20deg" small={true} />
            <Circle block={false} color="#34A853" top="24rem" right="10rem" rotate="15deg" small={true} />
            <Circle block={true} color="#34A853" top="24rem" right="-10rem" rotate="15deg" small={false} />

            {/* Hero Section */}
            <div className="w-3/6 m-auto mt-32">
                <Herosection />
                <div className="w-full flex justify-center mt-5">
                    <h3 className="font-Lato text-[#656C73] font-normal text-center mt-5 text-xl">
                        On Campus<br />
                        <strong className="text-[#FBBC04] mt-10 text-2xl leading-10">BIET</strong>, Lucknow
                    </h3>
                </div>
                <div className="w-full mt-60 text-2xl px-10 text-center text-[#656C73] font-Lato leading-10">
                    <Description />
                </div>
            </div>

            {/* Motto Section */}
            <div className="m-auto w-4/6 mt-60 flex flex-col items-center text-[#656C73]">
                <p className="pl-[20%] text-xl font-semibold">We</p>
                <p className="text-6xl text-center">
                    <strong className="text-[#34A853] bg-green-200 rounded-2xl px-3 mx-2">Learn</strong>, <strong className="text-[#EA4335] bg-red-200 rounded-2xl px-3">Innovate</strong> & <strong className="text-[#4285F4] bg-blue-200 rounded-2xl px-3 mx-1">Create</strong>
                </p>
                <p className="text-center m-5 text-[#FBBC04] text-2xl font-base">while having fun.</p>
            </div>

            {/* Additional Shapes for Styling */}
            <div className="h-40 -z-50">
                <div className="w-1/12 absolute left-40 top-[70vh] -z-50">
                    <img src={circleYellow} alt="Yellow Circle Decoration" loading="lazy" />
                </div>
                <div className="absolute left-44 top-[80vh] -z-50">
                    <img src={middleLine} alt="Middle Line Decoration" loading="lazy" />
                </div>
                <div className="w-1/12 rotate-12 absolute right-10 top-2/3 -z-50">
                    <img src={square} alt="Square Decoration" loading="lazy" />
                </div>
                <div className="w-1/12 rotate-12 absolute right-20 top-[200vh] -z-50">
                    <img src={triangle} alt="Triangle Decoration" loading="lazy" />
                </div>
                <div className="w-2/12 rotate-6 absolute left-20 top-[140vh] -z-50">
                    <img src={octagon} alt="Octagon Decoration" loading="lazy" />
                </div>
                <div className="w-1/12 absolute left-40 top-[200vh] -z-50">
                    <img src={circleGreen} alt="Green Circle Decoration" loading="lazy" />
                </div>
            </div>

            {/* About Us Section */}
            <div className="w-2/12 m-auto flex justify-center my-20 font-bold text-3xl border-slate-600 font-Lato relative underline-offset-8 mt-[20vh]">
                <p className="underline underline-offset-8 -z-50">About Us</p>
                <p className="absolute text-5xl opacity-15 -top-10 text-blue-600 -z-50" id="about">About Us</p>
            </div>
            <div className="w-3/5 m-auto font-Lato leading-10 text-2xl text-[#656C73] text-justify -z-50 mb-[40vh]">
                <AboutUs />
            </div>
        </div>
    );
}

export default Landingpage;

// Description Component
function Description() {
    return (
        <p>
            At BIET, Lucknow's on-campus GDG, we are creating a dynamic, ever-growing community of tech enthusiasts who are passionate about <strong className="text-[#34A853]"> Technology</strong>, <strong className="text-[#4285F4]"> Development</strong>, and the <strong className="text-[#EA4335]"> Joy</strong> of continuous learning.
        </p>
    );
}

// About Us Component
function AboutUs() {
    return (
        <p>
            Google Developer Groups on campus BIET, Lucknow (GDG) is a student-led community backed by Google Developers aimed at empowering 
            undergraduate students from all disciplines to grow their knowledge in technology, build solutions for their local communities, and 
            connect with other members from the Google community.
            <br /><br />
            <strong>Creating impact and empowering students through technology.</strong>
            <br /><br />
            Whether you are new to software development or you’ve been developing for quite a while, GDG is a place where you can learn new 
            technologies, make your ideas a reality, and collaborate to solve real-world problems. In addition to solving problems, GDG allows 
            you to connect with other technology enthusiasts from other GDG chapters and the Google Developer Community. We will be hosting events 
            and activities for all students throughout the academic year. We hope to see you there!
        </p>
    );
}
