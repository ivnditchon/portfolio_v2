import TopbarItems from "./TopbarItems";
import { HomeIcon, ExclamationIcon, FolderIcon, PhoneIcon } from "@heroicons/react/outline"

const Topbar = () => {
    // Menu toggle
    const handleMenu = (e) => {
        e.preventDefault();

        console.log(e.target);
    }

    return ( 
        <div role="banner" className="w-full h-14 flex justify-between items-start fixed top-0 z-50 px-5 py-5">
            <h1 className="text-gray-200">IVN</h1>
            <div className="flex item-center lg:hidden">
                {/** Use dynamic variable for onClick attribute */}
                <button onClick={(e) => handleMenu(e)}> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200 xs:h-7 xs:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            <div className="hidden lg:flex lg:flex-grow lg:justify-between lg:max-w-xs">
                <TopbarItems Icon={HomeIcon} title="home" />
                <TopbarItems Icon={ExclamationIcon} title="about" />
                <TopbarItems Icon={FolderIcon} title="project" />
                <TopbarItems Icon={PhoneIcon} title="phone" />
            </div>
        </div>
    );
}

export default Topbar;