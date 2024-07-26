export const getLocationCoords = (successFunc) => {
    navigator.geolocation.getCurrentPosition((position) => {
        successFunc?.(position);
    })
}

export const getMicrophonePermission = async () => {    
    if("MediaRecorder" in window){
        try {
            return await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: false
            })            
        } catch (error) {
            console.warn(`getMicrophonePermission: `, error)
            return;
        }
    } else {
        alert('Unable to start Camera/Audio!')
        return;
    }
}

export const getCameraPermission = async () => {    
    if("MediaRecorder" in window){
        try {
            return await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: true
            })            
        } catch (error) {
            console.warn(`getCameraPermission: `, error)
            return;
        }
    } else {
        alert('Unable to start Camera/Audio!')
        return;
    }
}