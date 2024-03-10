import {
  buttonLightTheme,
  buttonDarkTheme,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFireplace,
  inputForestVolume,
  inputRainVolume,
  inputCoffeeShopVolume,
  inputFireplaceVolume
} from "./elements.js"

export default function({controls, timer, sound}) {
  buttonLightTheme.addEventListener('click', function() {
      controls.changeTheme()
      sound.pressButton()
  })

  buttonDarkTheme.addEventListener('click', function() {
      controls.changeTheme()
      sound.pressButton()
  })

  buttonPlay.addEventListener('click', function() {
      controls.play()
      timer.countdown()
      sound.pressButton()
  })

  buttonPause.addEventListener('click', function() {
      controls.pause()
      timer.hold()
      sound.pressButton()
  })

  buttonStop.addEventListener('click', function() {
      controls.reset()
      timer.reset()
      sound.pressButton()
  })

  buttonPlus.addEventListener('click', function() {
      controls.reset()
      timer.plus()
      sound.pressButton()
  })

  buttonMinus.addEventListener('click', function() {
      controls.reset()
      timer.minus()
      sound.pressButton()
  })

  buttonSoundForest.addEventListener('click', function() {
      controls.soundForest()
      sound.pressButton()
      sound.audioForest()
      sound.resetForestVolume()
  })

  buttonSoundRain.addEventListener('click', function() {
      controls.soundRain()
      sound.pressButton()
      sound.audioRain()
      sound.resetRainVolume()
  })

  buttonSoundCoffeeShop.addEventListener('click', function() {
      controls.soundCoffeeShop()
      sound.pressButton()
      sound.audioCoffeeShop()
      sound.resetCoffeeShopVolume()
  })

  buttonSoundFireplace.addEventListener('click', function() {
      controls.soundFireplace()
      sound.pressButton()
      sound.audioFireplace()
      sound.resetFireplaceVolume()
  })

  inputForestVolume.addEventListener('input', sound.setAudioVolume)
  inputRainVolume.addEventListener('input', sound.setAudioVolume)
  inputCoffeeShopVolume.addEventListener('input', sound.setAudioVolume)
  inputFireplaceVolume.addEventListener('input', sound.setAudioVolume)
}