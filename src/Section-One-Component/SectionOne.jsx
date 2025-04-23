import Button from "@mui/material/Button";



function SectionOne(){
    return(
        <>
        <section id ='Home' className="bg-sectionone-bg default-section-one-container lg:bg-center  ">
        <div className="absolute inset-0 bg-[#332c23] opacity-15 z-0"></div>

            <div className="section-Content grid place-content-center gap-3">
            <h1
  style={{
    textShadow: '3px 3px #332c23',
    fontFamily: '"Playfair Display", serif',
    textTransform: 'none',
  }}
  className="text-7xl default-display-text normal-case md:text-8xl lg:text-9xl"
>
  SophAri
</h1>

<h2
  style={{
    textShadow: '2px 2px #332c23',
    fontFamily: '"Playfair Display", serif',
    textTransform: 'none',
  }}
  className="text-xl default-display-text normal-case md:text-2xl lg:text-3xl"
>
  Care
</h2>

<h3
  style={{
    textShadow: '2px 2px #332c23',
    fontFamily: '"Playfair Display", serif',
    textTransform: 'none',
  }}
  className="text-l default-display-text normal-case md:text-lg lg:text-xl"
>
  Professional Care, Personal Touch
</h3>
                <div className="flex justify-center mt-6">
                    <a href="#Contact">
                        <Button
                         variant="contained"
                         sx={{
        height: { xs: '60px', sm: '75px', md: '90px' },
        width: { xs: '150px', sm: '180px', md: '220px' },
        borderRadius: '5px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        color: '#333',
        fontSize: { xs: '16px', sm: '18px', md: '20px', lg: '22px' },
        fontWeight: 700,
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.4s ease',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
        },
      }}
    >
      CONTACT US
    </Button>
  </a>
            </div>
            </div>


            <div className="hidden gap-1 dropdownOption absolute  bg-white mx-14 w-3/4 h-56 px-3 py-5 border-t-[5px] border-stone-700 md:mx-28 lg:hidden">
                <a href="#AboutUs">
                     <button  className="uppercase font-bold text-sm md:text-lg">About</button> 
                </a>
                <a href='#Service_Section'>
                <button className="uppercase font-bold text-sm md:text-lg">Services</button> 
                </a>
                <a href='#Gallery'>
                <button className="uppercase font-bold text-sm md:text-lg">GALLERY</button> 
                </a>
                <a  href='#Contact'>
                <button  className="uppercase font-bold text-sm md:text-lg">Contact</button> 
                </a>
              
             </div>
        </section>

        </>
    );
}
export default SectionOne;