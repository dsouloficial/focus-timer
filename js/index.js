import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
    body,
    buttonLightTheme,
    buttonDarkTheme,
    buttonPlay,
    buttonPause,
    buttonStop,
    cardForest,
    cardRain,
    cardCoffeeShop,
    cardFireplace,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffeeShop,
    buttonSoundFireplace,
    minutesDisplay,
    secondsDisplay
} from "./elements.js"

const controls = Controls({
    body,
    buttonLightTheme,
    buttonDarkTheme,
    buttonPlay,
    buttonPause,
    buttonStop,
    cardForest,
    cardRain,
    cardCoffeeShop,
    cardFireplace,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffeeShop,
    buttonSoundFireplace
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})

const sound = Sound()

Events({controls, timer, sound})