import React from 'react'

const GridItems = ({ heading = "", content = "", children }) => {
    return (
        <>
            <div className="flex justify-center items-center p-3 w-max bg-neutral-900 rounded-xl border border-neutral-800">
                {children}
            </div>
            <div className="mt-10">
                <h1 className="text-xl font-semibold text-customRed">{heading}</h1>
                <h1 className="text-lg font-quicksand dark:text-zinc-400 font-semibold mt-2">{content}</h1>
            </div>
        </>
    )
}

export default GridItems