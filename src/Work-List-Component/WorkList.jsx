import React from 'react';


const workList =[
    {
        id:1,
        list:['Our approach / How can we help?', 'We prioritise a person-centred approach, ensuring our care is tailored to each participant’s individual needs. We focus on building trust and fostering independence through meaningful support and genuine relationships.']    },
    {
        id:2,
        list:['Our goal','Provide services that not only meet daily care needs but also promote social engagement and overall well-being, helping participants feel empowered and connected.']
    },
    {
        id:3,
        list:['Our mission','At Sophari Care, our mission is to provide personalised, high-quality care that empowers individuals to live independently, confidently, and with dignity. We are dedicated to fostering meaningful relationships, promoting social inclusion, and enhancing the lives of our participants through flexibility, respect, and a deep understanding of their unique needs']
    }
]

function WorkList(){
    return(
        <>
            <div className="bg-stone-800 text-white grid">
                <div className="-translate-y-20 w-11/12 md:w-10/12 lg:w-11/12 justify-self-center lg:grid grid-cols-3 xl:w-10/12 2xl:w-8/12">
                    {workList.map((item)=>(
                         <div key={item.id} className='bg-stone-800 text xl text-center font-bold grid place-content-center h-80 lg:border-r-[0.1px] border-stone-400'>
                                {item.list.map((eachList,index)=>(
                                    <React.Fragment key={index}>
                                        <p>{eachList}</p>
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