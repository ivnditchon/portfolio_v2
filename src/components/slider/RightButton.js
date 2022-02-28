const RightButton = ({ onClick }) => {
    return (  
        <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-50 xl:right-44">
            <button className="cursor-pointer" onClick={onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-500 pointer-events-none md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}
 
export default RightButton;