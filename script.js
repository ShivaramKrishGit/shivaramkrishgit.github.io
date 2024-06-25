const changeImage  = function(){
    const imageEl = document.querySelector('#coord-image');

    console.log(imageEl);
    console.log(imageEl.src);

    const xInputEl = document.querySelector('#x-changer');
    const yInputEl = document.querySelector('#y-changer');


    const xCoord = 'xInputEl.value';
    const yCoord = 'yInputEl.value1';
    
    const imageSrc = `images/out256_${xCoord}_${yCoord}.jpg`;
    imageEl.src = imageSrc;
}
const buttonEl = document.querySelector('#image-changer');
buttonEl.addEventListener('click',changeImage)

const xInputEl = document.querySelector('#x-changer');
xInputEl.addEventlistener('input',changeImage);

const yInputEl = document.querySelector('#y-changer');
yInputEl.addEventlistener('input',changeImage);
