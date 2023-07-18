import React from 'react'

const Footer = ({ mode }) => {
    return (
        <>
            <footer className={`${mode ? "text-gray-400 bg-gray-900 body-font" : "text-gray-600 bg-white"} body-font border-t-2 border-slate-200`}>
                <div className="container p-5 mx-auto flex flex-wrap items-center justify-between">
                    <a href='/' className={`flex title-font font-medium items-center md:justify-start justify-center ${mode ? "text-white" : "text-gray-900"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                        <span className="ml-3 text-xl">Word Counter</span>
                    </a>
                    <p className={`text-sm ${mode ? "text-gray-400" : "text-gray-500"}`}>© Word Counter App 2023</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;