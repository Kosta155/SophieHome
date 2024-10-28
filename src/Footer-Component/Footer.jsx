
import Logo from '/Eagleslogo.png'
function Footer(){
    return(
       <>
       <div className="bg-slate-100 grid justify-center gap-2 py-2">
            <h5 className="text-xs text-center">&copy; 2024 Alex Home Renovations</h5>
            <span className="separator hidden ">•</span>
            <div className="flex text-xs place-content-center gap-x-2">
                <h5>Designed by: Eagles Development Team</h5>
                <img src={Logo} width="20px" />
            </div>
            
        </div>

       
       
       </>
           
       
    );

    
}
export default Footer;