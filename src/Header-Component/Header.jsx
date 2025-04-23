import Button from "@mui/material/Button";
import Logo from '/logo.png';


function openAndClose() {
   const drop = document.querySelector('.dropdownOption');
   if (drop) {
      drop.classList.toggle('hidden');
      drop.classList.toggle('grid');
   }
}

function Header() {
    return (
        <div className="flex justify-around gap-20 md:gap-x-96 lg: lg:fixed lg:bg-white top-0 left-0 w-full   lg:h-24  z-10"  style={{ backgroundColor: '#332c23' }}>
            <img src={Logo} className="w-24 sm:w-24 md:w-24 lg:w-65 lg:absolute top-3 left-8 " alt="Logo" />
            <span className="menu self-center text-white material-icons lg:hidden" onClick={openAndClose}>
                menu
            </span>
            <div className="hidden lg:flex lg:absolute right-5 translate-y-1/2 justify-end items-center gap-2">
                
                <a href="#Home">
                    <Button variant
                    
                    ="text" style={{ color: 'white', fontWeight: 700, fontSize: 20}}>Home</Button>
                </a>
                <a href="#AboutUs">
                    <Button variant="text" style={{ color: 'white', fontWeight: 700, fontSize: 20,cursor:"pointer",animationDuration:'200' }}>About</Button>
                </a>
                <a href="#Service_Section">
                    <Button variant="text" style={{ color: 'white', fontWeight: 700, fontSize: 20 }}>Services</Button>
                </a>
                <a href="#Contact">
                    <Button variant="contained" style={{ backgroundColor: 'black', fontWeight: 700, fontSize: 20 }}>Contact</Button>
                </a>
            </div>
        </div>
    );
}

export default Header;