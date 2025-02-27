<code>
<pre>
    <script src="<span class="script-link">switchTheme.js</span>"></script>

    <script>
        const options = {
            rootBlockClass: <span class="option">null</span>, <span class="comment"> //-------------------- Имя класса блока, в котором будем менять тему или null - для работы с &lt;body></body></span>
            transition: <span class="option">0.5</span>, <span class="comment"> //------------------------- Скорость изменения цветовой темы в секундах</span>
            toggleButtonClass: <span class="option">'theme-switch-button'</span>, <span class="comment"> // Название класса кнопки для переключения темы</span>
            lightThemeBackground: <span class="option">'#e9f1ff'</span>, <span class="comment"> //--------- Цвет фона для светлой темы</span>
            lightThemeText: <span class="option">'#111'</span>, <span class="comment"> //------------------ Цвет текста для светлой темы</span>
            darkThemeBackground: <span class="option">'#1c1b1f'</span>, <span class="comment"> //---------- Цвет фона для тёмной темы</span>
            darkThemeText: <span class="option">'#e0e6f7'</span> <span class="comment"> //----------------- Цвет текста для тёмной темы</span>
        }

        setTheme(options)
    </script>
</pre>
</code>
