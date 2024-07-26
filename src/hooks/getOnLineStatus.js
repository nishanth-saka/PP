import React from "react"

const getOnLineStatus = () => {
    return typeof navigator !== null && typeof navigator.onLine === 'boolean' ?
        navigator.onLine : true
}

export const useNavigatorOnline = () => {
    const [status, setStatus] = React.useState(getOnLineStatus())
    const setOnline = () => setStatus(true)
    const setOffline = () => setStatus(false)

    React.useEffect(() => {
        window.addEventListener("online", setOnline);
        window.addEventListener("offline", setOffline);

        return () => {
            window.removeEventListener("online", setOnline);
            window.removeEventListener("offline", setOffline);
        }
    }, [])

    return status;
}