const btn = document.querySelector('button');
const body = document.querySelector('body');
let count = 0;
body.classList.add('light-mode');

btn.addEventListener('click', function(){
    
    if(count % 2 == 0){
        //dark mode
        const darkModeBackground = document.body.style.backgroundColor = 'rgb(34,34,34)';
        const darkModeText = document.body.style.color = 'white';
        document.body.style.backgroundColor = darkModeBackground;
        document.body.style.color = darkModeText;
        btn.style.backgroundColor = 'rgb(34, 34, 34)';
        btn.style.color = 'white';
        btn.style.border = '1px solid white';

        body.classList.add('dark-mode');
        body.classList.remove('light-mode');

        document.querySelector('a').style.color = 'white';
        let links = document.getElementsByClassName('link');
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = 'white';
        }
        btn.innerHTML = 'Light Mode';
    }
    else{
        //light mode
        const lightModeBackground = document.body.style.backgroundColor = 'white';
        const lightModeText = document.body.style.color = 'black';
        document.body.style.backgroundColor = lightModeBackground;
        document.body.style.color = lightModeText;
        btn.style.backgroundColor = 'rgb(255, 255, 255)';
        btn.style.color = 'black';
        btn.style.border = '1px solid black';

        body.classList.remove('dark-mode');
        body.classList.add('light-mode');

        document.querySelector('a').style.color = 'black';
        let links = document.getElementsByClassName('link');
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = 'black';
        }
        btn.innerHTML = 'Dark Mode';
    }
    count++;
})
