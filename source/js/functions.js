function setStorage() {
    let storage = localStorage.getItem('dark-mode');
    if(storage == 'light') {
        localStorage.setItem('dark-mode', 'dark');
    }else{
        localStorage.setItem('dark-mode', 'light');
    }
}

function setDarkMode() {
    let storage = localStorage.getItem('dark-mode');
    let darkModeSet = document.body.classList.toggle('dark');

    if(storage == 'dark') {
        console.log('dark');
    }else{
        console.log('light');
    }
}