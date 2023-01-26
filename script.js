

const stopnum = document.querySelector('p');
const btn = document.querySelector('#btn');
let num = 0;

const showmynum = () => {
    stopnum.innerHTML = "Loading...."


    setInterval(() => {
        stopnum.innerHTML = `${num}`;
        num++;
    }, 1000)
}
btn.addEventListener('click', showmynum);