import Button from "@mui/material/Button";



function SectionOne(){
    return(
        <>
        <section className="bg-sectionone-bg default-section-one-container lg:bg-center lg:mt-24">
            <div className="section-Content grid place-content-center gap-3">
                <h1 style={{textShadow: '3px 3px #d84315'}} className="text-7xl default-display-text md:text-8xl lg:text-9xl ">Alex</h1>
                <h2 style={{textShadow: '2px 2px #d84315'}} className="text-xl default-display-text  md:text-2xl lg:text-3xl" >Home RENOVATIONS</h2>
                <h3 style={{textShadow: '2px 2px #d84315'}} className="text-l default-display-text md:text-lg lg:text-xl" >20+ Years Serving: all-across-the-gta</h3>
                <Button
                    variant="contained"
                    sx={{
                        height: { xs: '60px', sm: '75px', md: '90px'},
                        width: { xs: '150px', sm: '180px', md: '220px' },
                        borderRadius: '5px',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        color: '#333',
                        fontSize: { xs: '16px', sm: '18px', md: '20px', lg: '22px' },
                        fontWeight: 700,
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.4s ease',
                        justifySelf:"center",
                        '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)'
                        
                        },
                    }}
                    >
                    CONTACT US
                    </Button>
            </div>


            <div className="hidden dropdownOption absolute  bg-white translate-x-1/2 w-1/2 h-1/3 px-3 py-5 border-t-[5px] border-tailoredOrange lg:hidden">
                <a href="#AboutUs">
                     <button  className="uppercase font-bold text-sm md:text-base">About</button> 
                </a>
                <a >
                <button className="uppercase font-bold text-sm md:text-base">Services</button> 
                </a>
                <a>
                <button className="uppercase font-bold text-sm md:text-base">GALLERY</button> 
                </a>
                <a>
                <button  className="uppercase font-bold text-sm md:text-base">Contact</button> 
                </a>
              
             </div>
        </section>

        </>
    );
}
export default SectionOne;