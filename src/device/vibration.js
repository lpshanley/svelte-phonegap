const createVibration = () => {

    const pause = 60

    return {
        success: () => navigator.vibrate([150, pause, 150, pause, 150]),
        error: () => navigator.vibrate([385, pause, 125]),
        default: () => navigator.vibrate(9),
        custom: pattern => navigator.vibrate(pattern)
    }
}
export const vibration = createVibration()