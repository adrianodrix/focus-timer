let buttonToggle = document.getElementById('toggle-mode')
buttonToggle.addEventListener('click', e => {
    document.documentElement.classList.toggle('light')
    const mode = document.documentElement.classList.contains('light') 
                    ? 'light' 
                    : 'dark'

    e.currentTarget
        .querySelector('span')
        .textContent = `${mode} mode ativado`
})