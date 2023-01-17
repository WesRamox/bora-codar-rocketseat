var rotateButton = document.querySelector('.rotate')
var imageProduct = document.querySelector('.productImage')
var disableRotate = document.querySelector('.disableRotate')
var rotateSvg = document.querySelector('.rotateSvg')

isRotate = false;

rotateButton.addEventListener('click', () => {
    if(isRotate == false) {
        imageProduct.src = "./images/sofa.gif"
        isRotate = true;
        rotateSvg.style.display = "none"
        disableRotate.style.display = "block"
    } else {
        imageProduct.src = "./images/sofa.svg"
        isRotate = false;
        rotateSvg.style.display = "block"
        disableRotate.style.display = "none"
    }
})