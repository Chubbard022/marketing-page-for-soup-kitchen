// const images = document.querySelectorAll('.carousel img');
// const leftButton = document.querySelector('.left-button')
// const rightButton = document.querySelector('.right-button')

class Carousel{
    constructor(carousel){
        this.carousel = carousel;
        this.leftButton = document.querySelector('.left-button')
        this.rightButton = document.querySelector('.right-button')
        this.images = document.querySelectorAll('.carousel img')
        //indexing pictures
        this.index = 0;
        this.currentImage = this.images[this.index];
        this.currentImage.style.display = 'block'
        //event listeners set to each button
        this.leftButton.addEventListener('click',()=>this.previousImage())
        this.rightButton.addEventListener('click',()=>this.nextImage())
    }
    previousImage(){
        this.images.forEach((image)=>image.style.display = 'none')
        this.index -= 1;
        if(this.index < 0){
            this.index = 3;
        }
        if(this.index > 3){
            this.index = 0;
        }
        this.images[this.index].style.display = 'block';
    }
    nextImage(){
        this.images.forEach((image)=>image.style.display = 'none')
        this.index +=1;
        if(this.index < 0){
            this.index = 3;
        }
        if(this.index > 3){
            this.index = 0;
        }
        this.images[this.index].style.display = 'block';
    }
}

let carousel = document.querySelectorAll('.carousel').forEach((carousel)=> new Carousel(carousel))
