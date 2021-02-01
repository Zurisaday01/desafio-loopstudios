 
document.querySelector('.nav__btn').addEventListener('click', () => {
    document.querySelector('.hero__bg').classList.toggle('hero-active');
    
    if(document.querySelector('.hero__bg').classList.contains('hero-active')) {
        document.querySelector('.hero__content').classList.add('hero-content');
    }else{
        document.querySelector('.hero__content').classList.remove('hero-content');
    };
})


    

if (screen.width <= 900){
    console.log('bg deberia estar inactivo')
}










