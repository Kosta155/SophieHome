import React from 'react';
const arrayListImage=
[
    'https://image1.rugs-direct.com/rug_gallery/cms2/modern-living-room-decor-Design-by-Kelly-Taylor.jpg',
    'https://st.hzcdn.com/simgs/pictures/living-rooms/modern-living-room-debra-ackerbloom-interiors-llc-img~c971036c0bdc4f53_14-9822-1-a92e8d5.jpg',
    'https://st.hzcdn.com/simgs/pictures/living-rooms/rim-rock-drive-cullum-homes-img~8be1dd420ebb213f_14-6578-1-5d4ee80.jpg',
    'https://www.baeumlerapproved.ca/wp-content/uploads/2022/09/master-bedroom-in-new-luxury-home-with-chandelier-and-view-of-picture-id1222623857.jpg'
    ,'https://www.hotelcolorado.com/wp-content/uploads/2024/04/hotel-colorado-67_standard.jpg',
    'https://cdn.nfhotels.ca/i/2021/04/15/sfv-room.jpg',
    'https://facesmag.ca/wp-content/uploads/2024/08/Brookstreet1535-scaled.jpg',
    'https://www.thespruce.com/thmb/P83wEJZF8WvV-ovFqfgvf4bx66I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2021-07-29at3.52.47PM-05dfb615535741f4b42f96fbed5de1ec-b88761e4404f4f619ef37508b482a0b4.png',
    'https://www.bathrooms2go.ca/blog-uploads/5-Finishing-Touches-for-Your-Newly-Renovated-Bathroom.jpg',
    'https://cdn.shopify.com/s/files/1/1805/8667/files/Newly-Renovated-Toilet-Room_1024x1024.png?v=1686734972',
    'https://cdn.vox-cdn.com/thumbor/3RLmXlUekl-qbZaeroxKbzHpy6A=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/66350874/Curbed_Stephanie_Krikorian_Kitchen_Wells_035.0.jpg',
    'https://elitekitchencentre.com/wp-content/uploads/2022/03/The-Best-Lighting-for-Your-Newly-Renovated-Kitchen.jpg',
    'https://kitchenandbathreno.ca/wp-content/uploads/2024/02/kitchen-renovations-mississauga-budget.jpg',
    'https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/featured-image-basement-remodel.jpeg-1.jpg',
    'https://www.youlikerenovations.com/admin/files/pages/c52fe486f08393482d531362ca51314d.jpeg',
    'https://harmonybasements.ca/wp-content/uploads/2021/04/Basement-Renovations-Services-WoodBridge-1024x683.jpg'
 ]
function Gallery() {
    return (
        <>
        <div id='Gallery' className="grid my-10">
            <div className="justify-self-center grid w-10/12 md:9/12 2xl:w-8/12 gap-y-7 lg:gap-y-8 xl:gap-y-10">
                <h2 className="text-center font-bold text-3xl md:text-4xl 2xl:6xl">Gallery</h2>
                <div className='grid grid-cols-2  gap-2 mb-15 md:grid-cols-4 lg:mb-24 xl:grid-cols-6 '>
                    
                    {arrayListImage.map((images,index)=>(
                    <React.Fragment key={index}>
                        <div>
                        <img src={images}  className=' w-full h-full object-cover  overflow-hidden' />
                        </div>
                       
                    </React.Fragment>

                    ))}
                </div>
            </div>
           
        </div>
        </>
    );
}

export default Gallery;