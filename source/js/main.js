window.onscroll = function() {
    if( window.scrollY > 3 ) {
        document.querySelector('.header').style.display = 'none';
    }else{
        document.querySelector('.header').style.display = 'grid';
    }

    let rotate = window.scrollY / 600 % Math.PI;
    document.querySelector('.rotate-logo--item').style.transform = `rotate(${rotate}rad)`;

};

let darkmode = {
    '--primary-color'    : { dark: '#222222', light: '#e3e0d7'},
    '--border-color'     : { dark: '#fff', light: '#161616' },
    '--grey'             : { dark:  '#fff', light: '#3b3b3b' },
    '--glass'            : { dark:  'hsla(0, 0%, 0%, 0.5)', light: 'hsla(0, 0%, 100%, 0.5)' },
    '--bg-font-variable' : { dark:  '#0B1335', light: '#fb3729' },
};

const sunMoonContainer = document.querySelector('.sun-moon-container')

document.querySelector('.lamp_mode-color').addEventListener('click', () => {
    let darkModeSet = document.body.classList.toggle('dark');
    const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation')) + 180;
    if(darkModeSet) {
        sunMoonContainer.style.setProperty('--rotation', currentRotation);
        document.querySelector('.dark-mode-img').removeAttribute('hidden');
        document.querySelector('.ligh-mode-img').setAttribute('hidden', '');

        Object.entries(darkmode).forEach(items => {
            document.documentElement.style.setProperty(items[0], items[1].dark);
        });
    }else{
        sunMoonContainer.style.setProperty('--rotation', currentRotation);
        document.querySelector('.dark-mode-img').setAttribute('hidden', '');
        document.querySelector('.ligh-mode-img').removeAttribute('hidden');

        Object.entries(darkmode).forEach(items => {
            document.documentElement.style.setProperty(items[0], items[1].light);
        });
    }
})
