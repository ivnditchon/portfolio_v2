import React from "react";

const Topbar = () => {
    // Menu toggle
    const handleMenu = (e) => {
        e.preventDefault();

        console.log(e.target);
    }

    return ( 
        <div role="banner" className="w-full h-14 flex justify-between fixed top-0 z-50 px-5 py-3">
            <h1 className="text-gray-200">IVN</h1>
            <div className="flex item-center">
                {/** Use dynamic variable for onClick attribute */}
                <button onClick={(e) => handleMenu(e)}> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            <ul role='navigation' className="hidden">
                <li>home</li>
                <li>about</li>
                <li>project</li>
                <li>contact</li>
            </ul>
        </div>
    );
}

export default Topbar;