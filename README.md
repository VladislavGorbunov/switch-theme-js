<h1>Скрипт на JS для именения цветовой темы сайтов</h1>
<img src="switch.gif">
<pre>
    <script src="<span class="script-link">switchTheme.js</span>"></script>

    <script>
        const options = {
            rootBlockClass: null,                        // Имя класса блока, в котором будем менять тему, или null для работы с <body>
            defaultTheme: 'dark',                        // Тема по умолчанию, dark или light
            transition: 0.5,                             // Скорость изменения цветовой темы в секундах
            toggleButtonClass: 'theme-switch-button',    // Название класса кнопки для переключения темы
            lightThemeBackground: '#e9f1ff',             // Цвет фона для светлой темы
            lightThemeText: '#111',                      // Цвет текста для светлой темы
            darkThemeBackground: '#1c1b1f',              // Цвет фона для тёмной темы
            darkThemeText: '#e0e6f7',                    // Цвет текста для тёмной темы
            customFunctionDark: darkBlur,                // Имя пользовательской функции срабатывающей при тёмном режиме
            customFunctionLight: lightBlur,              // Имя пользовательской функции срабатывающей при светлом режиме
        }

        setTheme(options)

        function darkBlur() {
            blurDark.style.display = 'block'
            blurLight.style.display = 'none'
        }

        function lightBlur() {
            blurDark.style.display = 'none'
            blurLight.style.display = 'block'
        }
    </script>
</pre>

<a href="https://vladislavgorbunov.github.io/switch-theme-js/">ДЕМО</a>
