export default function Controls({
  body,
  buttonLightTheme,
  buttonDarkTheme,
  buttonPlay,
  buttonPause,
  cardForest,
  cardRain,
  cardCoffeeShop,
  cardFireplace
}) {
  function changeTheme() {
      buttonLightTheme.classList.toggle('hide')
      buttonDarkTheme.classList.toggle('hide')
      body.classList.toggle('dark-mode')
  }

  function play() {
      buttonPlay.classList.add('hide')
      buttonPause.classList.remove('hide')
  }

  function pause() {
      buttonPause.classList.add('hide')
      buttonPlay.classList.remove('hide')
  }

  function reset() {
      buttonPlay.classList.remove('hide')
      buttonPause.classList.add('hide')
  }

  function soundForest() {
      cardForest.classList.toggle('active')
  }

  function soundRain() {
      cardRain.classList.toggle('active')
  }

  function soundCoffeeShop() {
      cardCoffeeShop.classList.toggle('active')
  }

  function soundFireplace() {
      cardFireplace.classList.toggle('active')
  }

  return {
      changeTheme,
      play,
      pause,
      reset,
      soundForest,
      soundRain,
      soundCoffeeShop,
      soundFireplace
  }
}