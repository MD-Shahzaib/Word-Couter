import React from 'react'

const Footer = ({ darkMode }) => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className={`${darkMode ? "text-gray-400 bg-gray-900 body-font" : "text-gray-600 bg-white"} body-font`}>
                <div className="container flex max-[500px]:flex-col items-center justify-center sm:justify-between p-5 mx-auto">
                    <div className={`flex title-font font-medium items-center md:justify-start justify-center cursor-pointer ${darkMode ? "text-white" : "text-gray-900"}`}>
                        <img src={require("./Logo.png")} alt="App Logo" className='h-10 w-10 rounded-full object-cover object-center' />
                        <span className="ml-3 text-xl">Word Counter</span>
                    </div>
                    <p className={`text-sm font-semibold text-center max-[640px]:ml-5 max-[500px]:ml-0 max-[500px]:mt-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>© MD-Shahzaib {currentYear} Word Counter</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;