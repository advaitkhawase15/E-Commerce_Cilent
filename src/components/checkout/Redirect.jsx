import React, { useState, useEffect } from 'react'

function Redirect(props) {
    const { success, Status } = props;
    const [RedirectText, setRedirectText] = useState(null);

    useEffect(() => {
        if (Status === "Loading") {
            setRedirectText(<img alt="Loading" className='mx-auto' src={require("../../Photos/282.gif")} width="50px" height="50px" />)
        }
        if (Status === "Failed") {
            setRedirectText(
                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" className="mx-auto bi bi-x-octagon text-red-500" viewBox="0 0 16 16">
                    <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            )
        }
        if (Status === "Successful") {
            setRedirectText(
                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" className="mx-auto bi bi-check-circle text-green-500" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                </svg>
            )
        }
    }, [Status])

    return (
        <>
            <div className='w-full h-full z-20 top-0 absolute bg-white dark:!bg-gray-900 dark:text-gray-400'>
                <div className='relative h-full'>
                    <div className='absolute left-0 right-0 bottom-1/2'>
                        {RedirectText}
                        <p className='mx-auto mt-4'>{success}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Redirect