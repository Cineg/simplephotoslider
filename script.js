const slider = {
  init: function(){
    slider.putFirstImg(images[currentValue].src, images[currentValue].alt, images[currentValue].desc);
    slider.changeSlide(currentValue);
  },

  //putting img to a div
  putFirstImg: function(src, alt, desc){
    let sliderDiv = document.getElementById('slider');
    sliderDiv.innerHTML += '<img src="'+src+'" alt="'+alt+'" id="img">';
    slider.putFirstDesc(desc);
  },
  putFirstDesc: function(desc){
    let sliderDiv = document.getElementById('slider');
    sliderDiv.innerHTML += '<p class="desc" id="sliderdesc">'+desc+'</p>'
  },

  changeSlide: function(x){
    slider.img(x);
    slider.desc(x);
  },

  img: function(val){
    let sliderDiv = document.getElementById('img');
    sliderDiv.src = images[val].src;
    sliderDiv.alt = images[val].alt;
  },
  desc: function(val){
    let sliderdesc = document.getElementById('sliderdesc');
    sliderdesc.innerHTML = images[val].desc;
  },

  left: function(){
    if (currentValue === 0) {
    currentValue = maxVal;
    }
    currentValue--;
    slider.changeSlide(currentValue);
  },
  right: function(){
    if (currentValue === maxVal-1) {
    currentValue = -1;
    }
    currentValue++;
    slider.changeSlide(currentValue);
  },

}


let images = [
  {
    src: 'https://img.theculturetrip.com/840x440/smart/wp-content/uploads/2017/08/kyoto.jpg',
    alt: 'Kyoto',
    desc: "Woah! Kyoto at it's finest",
  },
  {
    src: 'http://gotravelaz.com/wp-content/uploads/images/Kyoto.jpg',
    alt: 'Holy fuck its pretty',
    desc: "Some description",
  },
  {
    src: 'https://i.imgur.com/EdhFIeB.png',
    alt: 'nothing here ',
    desc: 'nothing here'
  }
]

let currentValue = 1;
let maxVal = images.length;
slider.init();
