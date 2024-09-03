

function Navbar() {
    return(
        <header className="flex py-4 px-7 w-full gap-4 items-center justify-between fixed top-0 left-0 right-0 h-16 bg-dark">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 flex items-center justify-center p-2 bg-primer rounded-lg">
                        <i className="uil uil-backpack text-xl text-secondary" />
                    </div>
                    <div className="">
                        <h2 className="text-lg font-semibold capitalize font-poppins text-gray-100">Back<span className="text-primer italic font-semibold">pack</span></h2>
                    </div>
                </div>
                <form action="/search" method="get" className="flex gap-2">
                    <input 
                    type="text" 
                    name="query" 
                    placeholder="Search..." 
                    required  
                    className="px-4 py-1 h-8 border-[1.5px] border-primer rounded-md focus:outline-none focus:ring-0  "/>
                    <button 
                    type="submit" className="w-8 h-8 flex items-center justify-center p-2 bg-primer rounded-lg">
                        <i className="uil uil-search-alt text-xl text-secondary"></i>
                    </button>
                </form>

                <div className="w-8 h-8 flex items-center justify-center p-2 bg-primer rounded-lg">
                    <i className="uil uil-github-alt text-xl text-secondary"></i>
                </div>
            </header>
    )
}

export default Navbar;