import React from 'react'

const Navbar = ({ mode, setMode }) => {
    const handleToggleDarkMode = () => setMode(!mode);
    return (
        <header className={`${mode ? 'text-gray-400 bg-gray-900' : 'bg-white text-gray-600'} body-font shadow-md shadow-slate-200 sticky top-0`}>
            <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
                <a href='/' className={`flex title-font font-medium items-center ${mode ? 'text-white' : 'text-gray-900'} my-2 sm:my-0`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                    <span className="ml-3 text-xl">Word Counter</span>
                </a>
                <button
                    className={`inline-flex items-center ${mode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} border-0 py-1 px-3 focus:outline-none rounded text-base`}
                    onClick={handleToggleDarkMode}
                >
                    {mode ? "Light Mode" : "Dark Mode"}
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                </button>
            </div>
        </header>
    )
}

export default Navbar;