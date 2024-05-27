import Image from "next/image";
import React from "react";

const StoryboardSaas = () => {
  return (
    <div className={"w-screen h-screen"}>
      <div
        className={
          "w-[1516px] h-[1569px] px-28 py-6 bg-white flex-col justify-start items-center gap-[242px] inline-flex"
        }
      >
        <div className={"flex-col justify-start items-center gap-[146px] flex"}>
          <div
            className={
              "self-stretch p-3 bg-stone-300/opacity-10 rounded-3xl shadow-inner border border-neutral-300 backdrop-blur-sm justify-between items-center inline-flex"
            }
          >
            <div
              className={
                "w-[228px] h-14 p-2.5 rounded-[20px] justify-center items-center gap-1 flex"
              }
            >
              <div className={"w-8 h-8 relative"}>
                <div className={"w-8 h-8 left-0 top-0 absolute"} />
              </div>
              <div
                className={
                  "text-slate-900 text-base font-medium font-['Helvetica Neue'] leading-normal"
                }
              >
                React Components
              </div>
            </div>
            <div className="h-6 justify-between items-center flex gap-x-3">
              <div
                className={
                  "text-center text-amber-800 text-base font-normal font-['Helvetica Neue'] leading-normal"
                }
              >
                Home
              </div>
              <div
                className={
                  "text-center text-gray-600 text-base font-normal font-['Helvetica Neue'] leading-normal"
                }
              >
                About Us
              </div>
              <div
                className={
                  "text-center text-gray-600 text-base font-normal font-['Helvetica Neue'] leading-normal"
                }
              >
                Features
              </div>
              <div
                className={
                  "text-center text-gray-600 text-base font-normal font-['Helvetica Neue'] leading-normal"
                }
              >
                Testimonials
              </div>
              <div
                className={
                  "text-center text-gray-600 text-base font-normal font-['Helvetica Neue'] leading-normal"
                }
              >
                Pricing
              </div>
            </div>
            <div className={"justify-start items-center gap-3 flex"}>
              <div
                className={
                  "w-[73px] px-4 py-2.5 rounded-[20px] justify-center items-center gap-1 flex"
                }
              >
                <div
                  className={
                    "text-center text-gray-600 text-base font-medium font-['Helvetica Neue'] leading-normal"
                  }
                >
                  Login
                </div>
              </div>
              <div className="px-[18px] py-2.5 bg-white border border-neutral-300 justify-center items-center gap-1 flex w-fit rounded-2xl">
                <div
                  className={
                    "text-center text-gray-950 text-base font-medium font-['Helvetica Neue'] leading-normal"
                  }
                >
                  Get Started
                </div>
                <div className={"w-5 h-5 relative"}>
                  <Image
                    alt={"Pasted Image"}
                    fetchpriority={undefined}
                    loading={"lazy"}
                    width={40}
                    height={40}
                    decoding={"async"}
                    data-nimg={"1"}
                    className={"w-full h-full"}
                    style={{
                      color: "transparent",
                    }}
                    sizes={undefined}
                    srcSet={undefined}
                    src={"/images/tempo-image-20240522T151725505Z.png"}
                    onLoad={() => console.log("onLoad")}
                    onError={() => console.log("onError")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={"flex-col justify-start items-center gap-6 flex"}>
            <div
              className={
                "w-[925px] text-center text-gray-950 text-[82px] font-medium font-['Helvetica Neue'] leading-[82px]"
              }
            >
              Efficiency & Productivity with our SaaS Solution
            </div>
            <div className="text-center text-gray-600 text-base font-normal font-['Helvetica Neue'] leading-normal w-1/2">
              We believe in the transformative power of branding for SaaS
              entrepreneurs. Join us as we embark on a journey to elevate your
              brand and unlock its full potential in the world of SaaS.
            </div>
            <div className="w-[191px] h-[55px] p-2.5 bg-amber-800 shadow shadow-inner border border-amber-900 justify-center items-center gap-1 inline-flex rounded-2xl">
              <div className={"px-1 justify-center items-center gap-2 flex"}>
                <div
                  className={
                    "text-center text-white text-lg font-medium font-['Helvetica Neue'] leading-normal"
                  }
                >
                  Get Started
                </div>
              </div>
              <div className={"w-5 h-5 relative"}>
                <Image
                  alt={"Pasted Image"}
                  fetchpriority={undefined}
                  loading={"lazy"}
                  width={41}
                  height={41}
                  decoding={"async"}
                  data-nimg={"1"}
                  className={"w-full h-full"}
                  style={{
                    color: "transparent",
                  }}
                  sizes={undefined}
                  srcSet={undefined}
                  src={"/images/tempo-image-20240522T151655406Z.png"}
                  onLoad={() => console.log("onLoad")}
                  onError={() => console.log("onError")}
                />
              </div>
            </div>
          </div>
          <div
            className={
              "w-[1292px] h-[810px] p-[22px] bg-stone-300/opacity-10 rounded-3xl shadow-inner border border-neutral-300 backdrop-blur-sm justify-between items-center inline-flex"
            }
          >
            <img
              className={
                "grow shrink basis-0 self-stretch rounded-[18px] shadow-inner border border-neutral-300 backdrop-blur-[91.10px]"
              }
              src={"https://via.placeholder.com/1248x766"}
            />
          </div>
        </div>
      </div>
      <div className="w-[1512px] h-[2671px] bg-white flex-col justify-start items-center gap-[242px] inline-flex px-28 py-32">
        <div className="flex-col justify-start items-start gap-6 flex h-fit container">
          <div className="bg-stone-300/opacity-10 rounded-3xl shadow-inner border border-neutral-300 backdrop-blur-sm flex-col justify-center items-center gap-2.5 flex w-fit px-7 py-1.5">
            <div className="text-gray-600 text-2xl font-normal font-['Helvetica Neue'] leading-8">
              About Us
            </div>
          </div>
          <div className="w-[883px] text-gray-950 text-[82px] font-medium font-['Helvetica Neue'] leading-[82px]">
            Introducing a quicker way to Saas engineering
          </div>
          <div className="w-[883px] text-gray-600 text-2xl font-normal font-['Helvetica Neue'] leading-8">
            Simple email marketing is clean and user-friendly dashboard software
            that helps you achieve business goals together. Using software makes
            it easier to create. Trying to see
          </div>
          <div className="w-[191px] h-[55px] p-2.5 rounded-[20px] shadow shadow-inner border border-amber-900 justify-center items-center gap-1 inline-flex bg-amber-800">
            <div className="px-1 justify-center items-center gap-2 flex">
              <div className="text-center text-white text-lg font-medium font-['Helvetica Neue'] leading-normal">
                Learn More
              </div>
            </div>
            <div className="w-5 h-5 relative">
              <Image
                alt={"Pasted Image"}
                fetchpriority={undefined}
                loading={"lazy"}
                width={41}
                height={41}
                decoding={"async"}
                data-nimg={"1"}
                className={"w-full h-full"}
                style={{
                  color: "transparent",
                }}
                sizes={undefined}
                srcSet={undefined}
                src={"/images/tempo-image-20240522T151655406Z.png"}
                onLoad={() => console.log("onLoad")}
                onError={() => console.log("onError")}
              />
            </div>
          </div>
        </div>
        <div className="h-[1687px] flex-col justify-start items-start gap-[42px] flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="bg-stone-300/opacity-10 rounded-3xl shadow-inner border border-neutral-300 backdrop-blur-sm flex-col justify-center items-center gap-2.5 flex w-fit h-fit px-7 py-1.5">
              <div className="text-gray-600 text-2xl font-normal font-['Helvetica Neue'] leading-7">
                Features
              </div>
            </div>
            <div className="w-[925px] text-gray-950 text-[82px] font-medium font-['Helvetica Neue'] leading-[82px]">
              Streamlined Process, Exceptional Results
            </div>
          </div>
          <div className="w-[1292px] h-[1405px] relative bg-stone-300/opacity-10 rounded-3xl shadow-inner border border-neutral-300 backdrop-blur-sm">
            <div className="w-[613px] p-[50px] left-[22px] top-[22px] absolute bg-white rounded-3xl shadow-inner border border-neutral-300 backdrop-blur-sm justify-between items-start inline-flex">
              <div className="flex-col justify-start items-start gap-[74px] inline-flex">
                <div className="h-[226px] flex-col justify-start items-start gap-[18px] flex">
                  <div className="self-stretch text-gray-950 text-5xl font-medium font-['Helvetica Neue'] leading-[56px]">
                    Start with 200 Free Prompts
                  </div>
                  <div className="self-stretch opacity-70 text-gray-950 text-2xl font-normal font-['Helvetica Neue'] leading-loose">
                    Simple email marketing is clean and user-friendly dashboard
                    software that helps you achieve business goals together.{" "}
                  </div>
                </div>
                <div className="w-[513px] h-[241px] bg-gradient-to-b from-zinc-200 to-white rounded-tl-2xl rounded-tr-2xl" />
              </div>
            </div>
            <div className="w-[613px] p-[50px] left-[657px] top-[22px] absolute bg-white rounded-3xl shadow-inner border border-neutral-300 backdrop-blur-sm justify-between items-start inline-flex">
              <div className="flex-col justify-start items-start gap-[74px] inline-flex">
                <div className="h-[226px] flex-col justify-start items-start gap-[18px] flex">
                  <div className="self-stretch text-gray-950 text-5xl font-medium font-['Helvetica Neue'] leading-[56px]">
                    Access to unlimited creativity
                  </div>
                  <div className="self-stretch opacity-70 text-gray-950 text-2xl font-normal font-['Helvetica Neue'] leading-loose">
                    Simple email marketing is clean and user-friendly dashboard
                    software that helps you achieve business goals together.{" "}
                  </div>
                </div>
                <div className="w-[513px] h-[241px] bg-gradient-to-b from-zinc-200 to-white rounded-tl-2xl rounded-tr-2xl" />
              </div>
            </div>
            <div className="px-[50px] pt-[50px] left-[22px] top-[685px] absolute bg-white rounded-3xl shadow-inner border border-neutral-300 backdrop-blur-sm justify-center items-center inline-flex">
              <div className="self-stretch flex-col justify-start items-start gap-[41px] inline-flex">
                <div className="flex-col justify-start items-start gap-[18px] flex">
                  <div className="w-[670px] text-gray-950 text-5xl font-medium font-['Helvetica Neue'] leading-[56px]">
                    Enabling SaaS entrepreneurs to build impactful brands.
                  </div>
                  <div className="self-stretch opacity-70 text-gray-950 text-2xl font-normal font-['Helvetica Neue'] leading-loose">
                    Simple email marketing is clean and user-friendly dashboard
                    software that helps you achieve business goals together.
                    Using software makes it easier to create.
                  </div>
                </div>
                <div className="w-[670px] h-[369px] opacity-70 bg-gradient-to-b from-zinc-200 to-white rounded-tl-2xl rounded-tr-2xl border-l-2 border-r-2 border-t-2 border-neutral-300" />
              </div>
            </div>
            <div className="px-[50px] pt-[50px] pb-0.5 left-[814px] top-[685px] absolute bg-white rounded-3xl shadow-inner border border-neutral-300 backdrop-blur-sm flex-col justify-end items-center inline-flex">
              <div className="self-stretch flex-col justify-start items-start gap-[39px] inline-flex">
                <div className="h-[226px] flex-col justify-start items-start gap-[18px] flex">
                  <div className="self-stretch text-gray-950 text-5xl font-medium font-['Helvetica Neue'] leading-[56px]">
                    Decode in Binary Creations
                  </div>
                  <div className="self-stretch opacity-70 text-gray-950 text-2xl font-normal font-['Helvetica Neue'] leading-loose">
                    Simple email marketing is clean and user-friendly dashboard
                    software.
                  </div>
                </div>
                <div className="w-[356px] h-[369px] opacity-70 bg-gradient-to-b from-zinc-200 to-white rounded-tl-2xl rounded-tr-2xl border-l-2 border-r-2 border-t-2 border-neutral-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryboardSaas;
