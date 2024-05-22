import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="w-[1516px] h-[1569px] px-28 py-6 bg-white flex-col justify-start items-center gap-[242px] inline-flex">
        <div className="flex-col justify-start items-center gap-[146px] flex">
          <div className="self-stretch p-3 bg-stone-300/opacity-10 rounded-3xl shadow-inner border border-neutral-300 backdrop-blur-sm justify-between items-center inline-flex">
            <div className="w-[228px] h-14 p-2.5 rounded-[20px] justify-center items-center gap-1 flex">
              <div className="w-8 h-8 relative">
                <div className="w-8 h-8 left-0 top-0 absolute"></div>
              </div>
              <div className="text-slate-900 text-base font-medium font-['Helvetica Neue'] leading-normal">
                React Components
              </div>
            </div>
            <div className="h-6 justify-between items-center flex">
              <div className="text-center text-amber-800 text-base font-normal font-['Helvetica Neue'] leading-normal">
                Home
              </div>
              <div className="text-center text-gray-600 text-base font-normal font-['Helvetica Neue'] leading-normal">
                About Us
              </div>
              <div className="text-center text-gray-600 text-base font-normal font-['Helvetica Neue'] leading-normal">
                Features
              </div>
              <div className="text-center text-gray-600 text-base font-normal font-['Helvetica Neue'] leading-normal">
                Testimonials
              </div>
              <div className="text-center text-gray-600 text-base font-normal font-['Helvetica Neue'] leading-normal">
                Pricing
              </div>
            </div>
            <div className="justify-start items-center gap-3 flex">
              <div className="w-[73px] px-4 py-2.5 rounded-[20px] justify-center items-center gap-1 flex">
                <div className="text-center text-gray-600 text-base font-medium font-['Helvetica Neue'] leading-normal">
                  Login
                </div>
              </div>
              <div className="w-36 px-[18px] py-2.5 bg-white rounded-[20px] border border-neutral-300 justify-center items-center gap-1 flex">
                <div className="text-center text-gray-950 text-base font-medium font-['Helvetica Neue'] leading-normal">
                  Get Started
                </div>
                <div className="w-5 h-5 relative" />
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-6 flex">
            <div className="w-[925px] text-center text-gray-950 text-[82px] font-medium font-['Helvetica Neue'] leading-[82px]">
              Efficiency & Productivity with our SaaS Solution
            </div>
            <div className="w-[501px] text-center text-gray-600 text-base font-normal font-['Helvetica Neue'] leading-normal">
              We believe in the transformative power of branding for SaaS
              entrepreneurs. Join us as we embark on a journey to elevate your
              brand and unlock its full potential in the world of SaaS.
            </div>
            <div className="w-[191px] h-[55px] p-2.5 bg-amber-800 rounded-[20px] shadow shadow-inner border border-amber-900 justify-center items-center gap-1 inline-flex">
              <div className="px-1 justify-center items-center gap-2 flex">
                <div className="text-center text-white text-lg font-medium font-['Helvetica Neue'] leading-normal">
                  Get Started
                </div>
              </div>
              <div className="w-5 h-5 relative" />
            </div>
          </div>
          <div className="w-[1292px] h-[810px] p-[22px] bg-stone-300/opacity-10 rounded-3xl shadow-inner border border-neutral-300 backdrop-blur-sm justify-between items-center inline-flex">
            <img
              className="grow shrink basis-0 self-stretch rounded-[18px] shadow-inner border border-neutral-300 backdrop-blur-[91.10px]"
              src="https://via.placeholder.com/1248x766"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
