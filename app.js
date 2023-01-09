let sizeScreen = 0,
image = document.querySelector('img')

window.addEventListener('resize',()=>{
    sizeScreen = window.innerWidth
    if(sizeScreen<=375)image.setAttribute('src', "./images/image-product-mobile.jpg")
    else image.setAttribute('src', "./images/image-product-desktop.jpg")
})