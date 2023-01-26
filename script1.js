const stopnum = document.querySelector('p');
const btn = document.querySelector('#btn');
const stopinterval = document.querySelector('#btn1');
let timeref
let num = 0;

const showmyname = () => {
    stopnum.innerHTML = "loading...."


    timeref = setInterval(() => {
        stopnum.innerHTML = `${num}`;
        num++;
    }, 1000);
}

btn.addEventListener('click', showmyname);
stopinterval.addEventListener('click', () => {
    clearInterval(timeref);
})