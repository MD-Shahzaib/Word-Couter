import React from 'react'

const Navbar = ({ darkMode, setDarkMode }) => {
    const handleToggleDarkMode = () => setDarkMode(!darkMode);
    return (
        <header className={`${darkMode ? 'text-gray-400 bg-gray-900 shadow-slate-800' : 'bg-white text-gray-600 shadow-slate-200'} body-font shadow-md  sticky top-0`}>
            <div className="container mx-auto flex flex-wrap p-5 items-center justify-between max-[370px]:justify-center max-[370px]:flex-col">
                <div className={`flex title-font font-medium items-center cursor-pointer ${darkMode ? 'text-white' : 'text-gray-900'} my-2 sm:my-0`}>
                    <img src={require("./Logo.png")} alt="App Logo" className='h-10 w-10 rounded-full object-cover object-center' />
                    <span className="ml-3 text-xl">Word Counter</span>
                </div>
                <button className={`inline-flex items-center ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} border-0 py-1 px-3 focus:outline-none rounded text-base`} onClick={handleToggleDarkMode}>{darkMode ? "Light Mode" : "Dark Mode"} <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></button>
            </div>
        </header>
    )
}

export default Navbar;