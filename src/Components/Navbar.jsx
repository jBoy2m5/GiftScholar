function Navbar() {
    return(
    <div className="flex justify-between flex-row items-center bg-[#1E2B46] lg:px-18 lg:py-8 md:px-15 md:py-6 px-15 sm:py-4">
        <span className="font-bold text-4xl text-white font-logo">RiftScholar</span>
        <ul className="flex flex-row lg:gap-20 md:gap-12 sm:gap-8 ">
            <li><a href="#">Game Knowledge</a></li>
            <li><a href="#">Champion</a></li>
            <li><a href="#">Items</a></li>
        </ul>
        <input className="w-5/12 md:w-3/12 sm:w-2/12 bg-[#121A2A] rounded-xl px-5 py-1" placeholder="🔍︎ Search"></input>
    </div>
    )
}

export default Navbar;