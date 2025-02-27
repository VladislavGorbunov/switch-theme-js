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

