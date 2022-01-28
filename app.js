const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('Xx')
    document.querySelector('.nav-list').classList.toggle('active')
})

