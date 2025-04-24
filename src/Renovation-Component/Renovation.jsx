import React from 'react';
import Button from "@mui/material/Button";


const renovations = [
    {
        id: 1,
        title: "Assistance with Daily Living",
        description: "Support with everyday tasks, personal care, and home management.",
        features: ["MODERN DESIGN", "Flooring / Countertops", "Backsplashes, fixtures & more"],
        imageSrc: "https://www.chip.ca/wp-content/uploads/personal-support-worker-helping-elderly-woman.png" 
    },
    {
        id: 2,
        title: "Community Access",
        description: "Helping participants engage in their local community and access essential services.",
        features: ["Remodeling", "Demolition", "Plumbing / Electrical & more"],
        imageSrc:"https://www.chip.ca/wp-content/uploads/personal-support-worker-helping-elderly-woman.png" 
    },
    {
        id: 3,
        title: "Socialisation and Group Activities",
        description: "Organising events and activities to promote social interaction and build connections.",
        features: ["Finishing", "Waterproofing", "Soundproofing & more"],
        imageSrc: "https://www.chip.ca/wp-content/uploads/personal-support-worker-helping-elderly-woman.png" 
    },
    {
        id: 4,
        title: "Complex Nursing Care",
        description: "Providing specialised nursing care for participants with more advanced medical needs.",
        features: ["Finishing", "Waterproofing", "Soundproofing & more"],
        imageSrc: "https://www.chip.ca/wp-content/uploads/personal-support-worker-helping-elderly-woman.png" 
    }
];

function Renovation() {
    return ( 
        <div className=" bg-stone-800  pt-16  pb-16 grid ">
            <div className="grid justify-self-center  w-10/12 text-stone-800 gap-5 pt-16  pb-16 md:w-8/12 lg:grid-cols-3 lg:w-11/12 xl:w-10/12 2xl:w-8/12"  >
                {renovations.map((item) => (
                    <div key={item.id} className='grid   hover:-translate-y-3.5  duration-200 ease-in-out bg-white h-full '>
                        
                        <img src={item.imageSrc}  className='h-40 w-full object-cover  overflow-hidden' />
                        
                        <div className='grid gap-4 px-5 py-10 md:gap-3'>
                            <h4 className='text-wrap font-bold text-xl uppercase'>{item.title}</h4>
                            <p className="text-gray-500 text-sm leading-loose md:text-base xl:text-lg" >{item.description}</p>

                            <div className="text-gray-500 text-md">
                                {item.features.map((feature, index) => (
                                    <React.Fragment key={index}>
                                    </React.Fragment>
                                ))}
                                <hr className=''/>
                            </div>
                            <a href="#Contact">
                            <Button
                                variant="contained"
                                sx={{
                                    height: { xs: '45px', sm: '60px', md: '45px'},
                                    width: '100%',
                                    borderRadius: '0px',
                                    backgroundColor:'#A8A29E',
                                    color: 'white',
                                    fontSize: '12px',
                                    fontWeight: 700,
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.4s ease',
                                    justifySelf:"center",
                                    '&:hover': {
                                    backgroundColor: 'rgba(221, 44, 0, 0.6)'
                                    
                                    },
                                }}
                                >
                                CONTACT US
                                </Button>

                            </a>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Renovation;
