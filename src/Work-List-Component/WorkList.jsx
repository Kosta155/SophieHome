import React from 'react';


const workList =[
    {
        id:1,
        list:['Home Renovation','Home Restoration','Kitchen Renovation','Bathroom Renovation','Basement Renovation']
    },
    {
        id:2,
        list:['Hardwood Flooring','Stair Installation','Flooring Services','Kitchen Remodeling']
    },
    {
        id:3,
        list:['Plastering','Remodeling','Drywall Services','Painting Services','Painting Services']
    }
]

function WorkList(){
    return(
        <>
            <div className="bg-stone-800 text-white grid">
                <div className="-translate-y-20 w-11/12 md:w-10/12 lg:w-11/12 justify-self-center lg:grid grid-cols-3 xl:w-10/12 2xl:w-8/12">
                    {workList.map((item)=>(
                         <div key={item.id} className='bg-tailoredOrange text-2xl text-center font-bold grid place-content-center h-80 lg:border-r-[0.1px] border-orange-600'>
                                {item.list.map((eachList,index)=>(
                                    <React.Fragment key={index}>
                                        <h4>{eachList}</h4>
                                    </React.Fragment>

                                ))}
                        </div>

                    ))}
                       

                </div>
                

                

                    
             </div>
    

        </>
    );
}
export default WorkList;