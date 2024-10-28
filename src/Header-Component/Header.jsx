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
        <div className="flex  bg-white justify-around gap-20 md:gap-x-96 lg: lg:fixed lg:bg-white top-0 left-0 w-full   h-24  z-10">
            <img src={Logo} className="w-36  sm:w-45 md:w-45 lg:w-65 lg:absolute  top-3 left-5 " alt="Logo" />
            <span className="menu self-center text-tailoredOrange material-icons lg:hidden" onClick={openAndClose}>
                menu
            </span>
            <div className="hidden lg:flex lg:absolute right-5 translate-y-1/2 justify-end items-center gap-2">
                <a href="#AboutUs">
                    <Button variant="text" style={{ color: 'rgba(41, 37, 36, 0.9)', fontWeight: 700, fontSize: 20 }}>About</Button>
                </a>
                <a href="#Service_Section">
                    <Button variant="text" style={{ color: 'rgba(41, 37, 36, 0.9)', fontWeight: 700, fontSize: 20 }}>Services</Button>
                </a>
                <a href="#Gallery">
                    <Button variant="text" style={{ color: 'rgba(41, 37, 36, 0.9)', fontWeight: 700, fontSize: 20}}>GALLERY</Button>
                </a>
                <a href="#Contact">
                    <Button variant="contained" style={{ backgroundColor: 'rgba(221, 44, 0, 0.8)', fontWeight: 700, fontSize: 20 }}>Contact</Button>
                </a>
            </div>
        </div>
    );
}

export default Header;