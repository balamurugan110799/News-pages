import React, { useEffect, useState } from "react";
import Logo from "../Components/assets/images/logo.svg"
import laptop from "../Components/assets/images/image-web-3-desktop.jpg"
import repto from "../Components/assets/images/image-retro-pcs.jpg"

import laptops from "../Components/assets/images/image-top-laptops.jpg"
import laptopsmobile from "../Components/assets/images/image-web-3-mobile.jpg"
import menuIcon from "../Components/assets/images/icon-menu.svg"
import closeIcon from "../Components/assets/images/icon-menu-close.svg"
import gaming from "../Components/assets/images/image-gaming-growth.jpg"

function Home() {
    const [menuState, setMenuState] = useState(false)

    const Menu = () => {
        const state = !menuState
        if (state === true) {
            document.getElementById("mySidenav").style.width = "100%";
        } else {
            document.getElementById("mySidenav").style.width = "0px";
        }
        setMenuState(state)
    }

    console.log(menuState)
    return (
        <div className="">

            <div role="navbar" className="container mx-auto ">
                <header >
                    <nav className="px-4">

                        <div className=" grid grid-cols-2  sm:grid-cols-1 py-10 ">
                            <div className="grid grid-cols-7 sm:grid-cols-2">
                                <div className="sm:grid-cols-1">
                                    <img src={Logo} alt="Logo lg:block" />
                                </div>
                                <div className="sm:grid-cols-2 lg:hidden md:hidden my-auto">
                                    <div className="grid justify-items-end ">
                                        <button onClick={() => Menu()}>

                                            <img src={menuIcon} alt="menuIcon" />
                                        </button>
                                    </div>
                                </div>



                                <div className="w-[100%] flex ">

                                    <div className="w-[70%]">

                                        <div id="mySidenav" class="sidenav">
                                            <div className="w-[100%] flex h-[100%]">
                                                <div className="w-[30%] bg-[#ffffff57]">

                                                </div>
                                                <div className="w-[70%] bg-off-white py-10">
                                                    <div className="grid bg-white justify-items-end px-4">
                                                        <button onClick={() => Menu()}>
                                                            <img src={closeIcon} alt="closeIcon" />
                                                        </button>
                                                    </div>


                                                    <div className="py-16 px-4">
                                                        <div className="grid content-start ">
                                                            <p className="text-h3 pb-3 hover:text-secondary duration-300 text-left cursor-pointer">Home</p>
                                                        </div>
                                                        <div className="grid content-start">
                                                            <p className="text-h3 pb-3 hover:text-secondary duration-300  text-left cursor-pointer">New</p>
                                                        </div>
                                                        <div className="grid content-end">
                                                            <p className="text-h3 pb-3 hover:text-secondary duration-300 text-left cursor-pointer">Popular</p>
                                                        </div>
                                                        <div className="grid content-end">
                                                            <p className="text-h3 pb-3 hover:text-secondary duration-300 text-left cursor-pointer">Trending</p>
                                                        </div>
                                                        <div className="grid content-end">
                                                            <p className="text-h3 pb-3 hover:text-secondary duration-300 text-left cursor-pointer">Categories</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>



                            </div>
                            <div className="grid grid-cols-5 sm:hidden sm:grid-cols-1">
                                <div className="grid content-end ">
                                    <p className="text-base text-grayish-blue hover:text-secondary duration-300 cursor-pointer">Home</p>
                                </div>
                                <div className="grid content-end">
                                    <p className="text-base text-grayish-blue hover:text-secondary duration-300 cursor-pointer">New</p>
                                </div>
                                <div className="grid content-end">
                                    <p className="text-base text-grayish-blue hover:text-secondary duration-300 cursor-pointer">Popular</p>
                                </div>
                                <div className="grid content-end">
                                    <p className="text-base text-grayish-blue hover:text-secondary duration-300 cursor-pointer">Trending</p>
                                </div>
                                <div className="grid content-end">
                                    <p className="text-base text-grayish-blue hover:text-secondary duration-300 cursor-pointer">Categories</p>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                <main>
                    <div role="main" className="px-4">
                        <div className="grid lg:grid-cols-3 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1  gap-4 sm:gap-0 ">
                            <div className="lg:col-span-2 sm:col-span-2 md:grid-cols-1 mdsm:grid-cols-1">
                                <img src={laptop} alt="laptop" className="sm:hidden " />
                                <img src={laptopsmobile} alt="laptop" className="w-[100%] lg:hidden md:hidden mdsm:hidden" />
                                <div className="">
                                </div>
                                <div className="py-6">
                                    <div className="w-[100%] flex sm:block">
                                        <div className="w-[50%] sm:w-[100%]">
                                            <div className="text-[44px] title text-left leading-[46px] sm:pb-4">
                                                W. The Bright<br />
                                                Future of<br />
                                                Web 3.0?<br />
                                            </div>
                                        </div>
                                        <div className="w-[50%] sm:w-[100%] relative sm:pb-4 sm:pt-2">
                                            <p className="text-base text-left text-grayish-blue" >We dive into the next evolution of the web that

                                                claims to put the power of the platforms back

                                                into the hands of the people. But is it really

                                                fulfilling its promise?</p>
                                            <div className="absolute bottom-0 sm:relative sm:pt-6">
                                                <div className="flex">
                                                    <button className="bg-secondary hover:bg-dark-blue  duration-300 py-2 px-8 text-off-white tracking-widest		">
                                                        READ MORE
                                                    </button>
                                                </div>
                                            </div>


                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="col-span-1 sm:col-span-1">
                                <div className="bg-dark-blue py-6 px-4">
                                    <h1 className="text-left text-primary text-h1 title">New</h1>

                                    <div className="pt-8 pb-8  border-bottom-blue">
                                        <p className="text-left duration-300 text-off-white text-h5 hover:text-primary">Hydrogen Vs Electric Cars</p>
                                        <p className="text-grayish-blue text-left pt-2 text-base">Will hydrogen-fueled cars ever catch upto EVs?</p>
                                    </div>

                                    <div className="pt-8 pb-8  border-bottom-blue">
                                        <p className="text-left duration-300 text-off-white text-h5 hover:text-primary">The Downsides of Al Artistry</p>
                                        <p className="text-grayish-blue text-left pt-2 text-base">What are the possible adverse effects of on-demand Al image generation?</p>
                                    </div>


                                    <div className="pt-8 pb-8">
                                        <p className="text-left duration-300 text-off-white text-h5 hover:text-primary">Is VC Funding Drying Up?</p>
                                        <p className="text-grayish-blue text-left pt-2 text-base">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 mdsm:grid-cols-1 gap-4 py-12 sm:px-4">
                            <div className="grid grid-cols-3 md:grid-cols-3 mdsm:grid-cols-3  sm:grid-cols-3  gap-4">
                                <div className="col-span-1 sm:grid-cols-1 md:grid-cols-1 mdsm:grid-cols-1 ">
                                    <img src={repto} alt="repto" className="w-[100%]" />
                                </div>
                                <div className="col-span-2 sm:col-span-2 md:grid-cols-2 mdsm:grid-cols-2">
                                    <div className="text-left">
                                        <div className="text-grey text-h1">01</div>
                                        <p className="text-dark-blue title pt-2 hover:text-secondary duration-300 cursor-pointer">Reviving Retro PCs</p>
                                        <p className="text-grayish-blue pt-3">What happens when old PCsare given modern upgrades?</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 sm:grid-cols-3  gap-4">
                                <div className="col-span-1 sm:col-span-1">
                                    <img src={laptops} alt="laptops" className="w-[100%]"  />
                                </div>
                                <div className="col-span-2 sm:col-span-2">
                                    <div className="text-left">
                                        <div className="text-grey text-h1">02</div>
                                        <p className="text-dark-blue title pt-2 hover:text-secondary duration-300 cursor-pointer">Top 10 Laptops of 2022</p>
                                        <p className="text-grayish-blue pt-3">Our best picks for various needs and budgets.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 sm:grid-cols-3  gap-4">
                                <div className="col-span-1 sm:grid-cols-1">
                                    <img src={gaming} alt="gaming" className="w-[100%]" />
                                </div>
                                <div className="col-span-2 sm:col-span-2">
                                    <div className="text-left">
                                        <div className="text-grey text-h1 ">03</div>
                                        <p className="text-dark-blue title pt-2 hover:text-secondary duration-300 cursor-pointer">Reviving Retro PCs</p>
                                        <p className="text-grayish-blue pt-3">How the pandemic has sparked fresh opportunities.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>

            </div>

        </div>
    )
}

export default Home