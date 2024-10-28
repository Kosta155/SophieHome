import React from 'react';
import Button from "@mui/material/Button";


const renovations = [
    {
        id: 1,
        title: "Kitchen renovations",
        description: "Our team works with you to create plans for your new kitchen and dining area. Together we’ll choose the layout that brings your vision to life.",
        features: ["MODERN DESIGN", "Flooring / Countertops", "Backsplashes, fixtures & more"],
        imageSrc: "https://www.kitchensbyauthentic.ca/wp-content/uploads/2023/11/newly-renovated-kitchen.jpg" 
    },
    {
        id: 2,
        title: "Bathroom renovations",
        description: "The bathroom certainly adds additional value in the home. We are here to help design with your layout and choose the right materials all while staying within your budget.",
        features: ["Remodeling", "Demolition", "Plumbing / Electrical & more"],
        imageSrc:"https://kitchenandbath.ca/wp-content/uploads/2023/02/Bathroom_1.jpg" 
    },
    {
        id: 3,
        title: "Basement renovations",
        description: "From start to finish our team can help you throughout the whole basement renovation process. We will gain an understanding of your true needs, before developing an intuitive, efficient design tailored to your budget.",
        features: ["Finishing", "Waterproofing", "Soundproofing & more"],
        imageSrc: "https://www.totalrenotech.ca/wp-content/uploads/2023/10/basement-renovation.jpg" 
    }
];

function Renovation() {
    return (
        <div className=" bg-stone-800  pt-16  pb-16 grid ">
            <div className="grid justify-self-center  w-10/12 text-stone-800 gap-5 pt-16  pb-16 md:w-8/12 lg:grid-cols-3 lg:w-11/12 xl:w-10/12 2xl:w-8/12"  >
                {renovations.map((item) => (
                    <div key={item.id} className='grid   bg-white h-full '>
                        
                        <img src={item.imageSrc}  className='h-40 w-full object-cover  overflow-hidden' />
                        
                        <div className='grid gap-3 px-5 py-10 md:gap-3'>
                            <h4 className='text-wrap font-bold text-xl uppercase'>{item.title}</h4>
                            <p className="text-gray-500 text-sm leading-loose md:text-base xl:text-lg" >{item.description}</p>

                            <div className="text-gray-500 text-md">
                                {item.features.map((feature, index) => (
                                    <React.Fragment key={index}>
                                        <hr className='py-3'/>
                                        <span className='uppercase font-bold text-sm md:text-base'>{feature}</span>
                                    </React.Fragment>
                                ))}
                                <hr className=''/>
                            </div>
                            <Button
                                variant="contained"
                                sx={{
                                    height: { xs: '45px', sm: '60px', md: '45px'},
                                    width: '100%',
                                    borderRadius: '0px',
                                    backgroundColor:'rgba(221, 44, 0, 0.8)',
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Renovation;
