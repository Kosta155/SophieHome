import Button from "@mui/material/Button";

function AboutSection(){
    return(<>
    
    <section id='AboutUs' className="mt-20 mb-36 grid justify-center" >

        <div  className=" w-11/12  justify-self-center grid gap-2 md:w-9/12 md:justify-self-center md:gap-3 lg:grid-cols-2 lg:w-11/12 lg:gap-0 xl:w-10/12 2xl:w-8/12">
            <div  className="grid   text-sm text-gray-500 leading-loose gap-2 md:text-lg md:gap-3 lg:gap-3 xl:gap-0  xl:text-lg" >
                <h1 className="text-stone-800 font-bold text-3xl">ABOUT US</h1>
                    <p className=" ">
                        At<strong> Alex Home Renovations</strong>, we take pride in offering top-tier contracting services.
                        Our mission is to enhance the value of your home while infusing passion into every project we undertake, providing tailored solutions for all your renovation needs.
                    </p>
                    <p className="">
                        You can count on our team for clear communication, unwavering commitment, and consistent quality throughout your project.
                        We strive to fully understand your vision and expectations, ensuring that everything is completed on time and within budget.
                    </p>
                    <p className=""> 
                        Reach out to us today, and let us deliver cost-effective, professional contracting services—no matter the size or nature of your construction project. 
                        We’re here to help you transform your space into something extraordinary! 
                    </p>
            </div>

            <div className="grid gap-2 justify-self-center md:gap-3 xl:w-10/12 xl:justify-self-end ">
                <img src="https://sensodesign.ca/wp-content/uploads/2024/06/Modern-kitchen-renovation-in-Toronto.jpg" className="cover"></img>
                <Button
                    variant="contained"
                    sx={{
                        height: { xs: '45px', sm: '45px', md: '45px'},
                        width: { xs: '180px', sm: '180px', md: '180px' },
                        borderRadius: '0px',
                        backgroundColor: 'rgba(41, 37, 36, 0.9)',
                        color: 'white',
                        fontSize: '15px',
                        fontWeight: 700,
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.4s ease',
                        justifySelf:"start",
                        '&:hover': {
                        backgroundColor: 'rgba(221, 44, 0, 0.6)'
                        
                        },
                    }}
                    >
                    VIEW GALLERY
                    <span className="material-icons">trending_flat</span>
                    </Button>
                  
            </div>
        </div>
    </section>

    
    
    </>)
}
export default AboutSection;