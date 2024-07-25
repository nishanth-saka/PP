export const getLocationCoords = (successFunc) => {
    navigator.geolocation.getCurrentPosition((position) => {
        successFunc?.(position);
    })
}