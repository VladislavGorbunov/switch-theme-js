let theme
let transition
let toggleButtonClass
let lightThemeBackground
let lightThemeText
let darkThemeBackground
let darkThemeText
let blurDark
let blurLight
let rootBlockClass = null
let defaultTheme

function setTheme(options) {
    transition = options.transition || 1
    toggleButtonClass = options.toggleButtonClass
    lightThemeBackground = options.lightThemeBackground
    lightThemeText = options.lightThemeText
    darkThemeBackground = options.darkThemeBackground
    darkThemeText = options.darkThemeText
    defaultTheme = options.defaultTheme || 'dark'
    
    rootBlockClass = document.querySelector(`.${options.rootBlockClass}`) || document.body
    
    const themeSwitchButton = document.querySelector(`.${ toggleButtonClass }`)
    blurDark = document.querySelector('.blur-dark')
    blurLight = document.querySelector('.blur-light')
    
    themeSwitchButton.addEventListener('click', switchTheme)

    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme')
    } else {
        theme = defaultTheme
    }

    if (theme === 'dark') {
        setDarkTheme()
    } else {
        setLightTheme()
    }
}

function setDarkTheme() {
    rootBlockClass.style.background = darkThemeBackground
    rootBlockClass.style.color = darkThemeText
    blurDark.style.display = 'block'
    blurLight.style.display = 'none'
    localStorage.setItem('theme', 'dark')
}

function setLightTheme() {
    rootBlockClass.style.background = lightThemeBackground
    rootBlockClass.style.color = lightThemeText
    blurDark.style.display = 'none'
    blurLight.style.display = 'block'
    localStorage.setItem('theme', 'white')
}

function switchTheme() {
    rootBlockClass.style.transition = transition + 's'
    
    theme = localStorage.getItem('theme')
    if (theme === 'white') {
        setDarkTheme()
    } else {
        setLightTheme()
    }

}

const options = {
    rootBlockClass: null, // Имя класса блока, в котором будем менять тему, null - для body
    defaultTheme: 'dark', // Тема по умолчанию
    transition: 1, // Скорость изменения цветовой темы в секкундах
    toggleButtonClass: 'theme-switch-button', // Название класса кнопки для переключения темы
    lightThemeBackground: '#e9f1ff', // Цвет фона для светлой темы
    lightThemeText: '#111', // Цвет текста для светлой темы
    darkThemeBackground: '#1c1b1f', // Цвет фона для тёмной темы
    darkThemeText: '#e0e6f7' // Цвет текста для тёмной темы
}

setTheme(options)