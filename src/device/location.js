import { readable } from 'svelte/store'

export const location = readable({}, set => {
    const watchID = navigator.geolocation.watchPosition(
        function success({ coords, timestamp }){
            let { latitude, longitude, altitude, accuracy, altitudeAccuracy, heading, speed } = coords
            
            set({
                coords: {
                    latitude, 
                    longitude, 
                    altitude, 
                    accuracy, 
                    altitudeAccuracy, 
                    heading, 
                    speed
                },
                timestamp
            })
        }, 
        function error({ code, message }){
            set({
                code, message
            })
        },
        { enableHighAccuracy: true, timeout: 30000 }
    )

    return () => navigator.geolocation.clearWatch(watchID)
})