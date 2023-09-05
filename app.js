const btn = document.querySelector('button');
let count = 0;

btn.addEventListener('click', function(){
    
    if(count % 2 == 0){
        //dark mode
        const darkModeBackground = document.body.style.backgroundColor = 'rgb(34,34,34)';
        const darkModeText = document.body.style.color = 'white';
        document.body.style.backgroundColor = darkModeBackground;
        document.body.style.color = darkModeText;

        document.querySelector('a').style.color = 'white';
        let links = document.getElementsByClassName('link');
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = 'white';
        }
    }
    else{
        //light mode
        const lightModeBackground = document.body.style.backgroundColor = 'white';
        const lightModeText = document.body.style.color = 'black';
        document.body.style.backgroundColor = lightModeBackground;
        document.body.style.color = lightModeText;

        document.querySelector('a').style.color = 'black';
        let links = document.getElementsByClassName('link');
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = 'black';
        }
    }
    count++;

})
