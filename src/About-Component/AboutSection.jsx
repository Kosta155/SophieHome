import Button from "@mui/material/Button";
//test 
//test 2
function AboutSection(){
    return(<div>

    <section  id='AboutUs' className= "mt-20 mb-36 grid justify-center scroll-mt-24" >

        <div  className=" w-11/12  justify-self-center grid gap-2 md:w-9/12 md:justify-self-center md:gap-3 lg:grid-cols-2 lg:w-11/12 lg:gap-0 xl:w-10/12 2xl:w-8/12">
            <div  className="grid   text-sm text-gray-500 leading-loose gap-2 md:text-lg md:gap-3 lg:gap-3 xl:gap-0  xl:text-lg" >
                <h1 className="text-stone-50 font-bold text-3xl">ABOUT US</h1>
                    <p className="text-white">
                        At<strong> Sophari Care</strong>, we are a team of dedicated NDIS providers committed to delivering high-quality, person-centred care. With backgrounds in nursing and disability support, we bring a wealth of experience and compassion to the services we offer.    </p>
                    <p className=" text-white">
                    Our team has extensive experience in disability support work, building strong relationships with participants and focusing on their well-being and independence. With a background in registered nursing, we offer expert care, particularly in complex care settings, always prioritising respect and professionalism.              </p>
                    <p className="text-white"> 
                    Guided by values of respect, integrity, the highest quality care, and improving participants' social life through meaningful activities, we aim to empower individuals to live independently and achieve their personal goals with dignity and support.
                    </p>
            </div>

            <div className="grid gap-2 justify-self-center md:gap-3 xl:w-10/12 xl:justify-self-end ">
                <img src="https://www.chip.ca/wp-content/uploads/personal-support-worker-helping-elderly-woman.png" className="cover"></img>
                    
                  
            </div>
        </div>
    </section>

    
    
    </div>)
}
export default AboutSection;