var app = new Vue({
    el: '#app',
    data: {
        interval: null,
        position: 0,
        images: [
            {
                urlImg:'img/01.jpg',
                title:'Svezia',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                urlImg:'img/02.jpg',
                title:'Svizzera',
                text:'Lorem ipsum'
            },
            {
                urlImg:'img/03.jpg',
                title:'Gran Bretagna',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                urlImg:'img/04.jpg',
                title:'Germania',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            },
            {
                urlImg:'img/05.jpg',
                title:'Paradise',
                text:'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            }
        ]
    },
    methods: {
        generateImgId: function(index, partialId) {
            return partialId+index;
        },
        imgActive: function(index, msClass) {
            if (index == this.position) {
                return msClass;   
            }
        },
        movePosition: function(number) {
            // number -1 previous or 1 next funzione ridondande ma ne compatta due
            // non so quale si preferisce ?????
            this.position += number;
            if (this.position < 0) {
                this.position = this.images.length-1;
            } else if (this.position == this.images.length) {
                this.position = 0;
            }
        },
        previous: function() {
            this.position--;
            if (this.position < 0) {
                this.position = this.images.length-1;
            }
        },    
        next: function() {
            this.position++;
            if (this.position  == this.images.length) {
                this.position  = 0;
            }
        },
        select: function(index) {
            this.position = index;
        },
        autoPlay: function() {
            // Perchè non usare app.next ???? Non fai riferimeto al nome, 
            // in molti usano self oppure una funzione freccia
            let self = this; 
            this.interval = setInterval(function () {
                console.log('clock');
                self.next();
            }, 3000);
        },
        stopAutoPlay: function() {
            clearInterval(this.interval);
            console.log('hover, stop clock!');
        }
    }, 
    // usare mounted invece di created, vedere hooks di vue!
    mounted: function() {
        this.autoPlay();
    } 
});

// app.autoPlay() Perchè non fare così???? meno "elegante"

/*

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

let imgContainerHtml = '';

let imgSelectorHtml = `
<div class="ms_previous-button">
    <i class="fas fa-chevron-up"></i>
</div>
<div class="ms_next-button">
    <i class="fas fa-chevron-down"></i>
</div>`;

for (let i = 0; i < items.length; i++) {
    imgContainerHtml += `
<div class="ms_main-img" id="main-img-${[i]}">
    <img src="${items[i]}" alt="">
    <div class="ms_img-info">
        <h3 class="m-0">${title[i]}</h3>
        <p class="m-0">${text[i]}</p>
    </div>
</div>`;
    imgSelectorHtml +=`
<div class="ms_img-preview" id="img-preview-${[i]}">
    <img src="${items[i]}" alt="">
</div>`; 
}
 
document.querySelector('.ms_img-container').innerHTML = imgContainerHtml;
document.querySelector('.ms_img-selector').innerHTML = imgSelectorHtml;


let position = 0;

let mainImgActive = document.querySelector('.ms_img-container > #main-img-'+position);
mainImgActive.classList.add('ms_main-img-active');
let imgPreviewActive = document.querySelector('.ms_img-selector > #img-preview-'+position);
imgPreviewActive.classList.add('ms_img-preview-active');

const previousButton = document.querySelector('.ms_img-selector .ms_previous-button');
const nextButton = document.querySelector('.ms_img-selector .ms_next-button');

previousButton.addEventListener('click', function() {
    position--;
    if (position < 0) {
        position = items.length-1;
    }
    mainImgActive.classList.remove('ms_main-img-active');
    mainImgActive = document.querySelector('.ms_img-container > #main-img-'+position);
    mainImgActive.classList.add('ms_main-img-active');
    imgPreviewActive.classList.remove('ms_img-preview-active')
    imgPreviewActive = document.querySelector('.ms_img-selector > #img-preview-'+position);
    imgPreviewActive.classList.add('ms_img-preview-active');
});

nextButton.addEventListener('click', function() {
    position++;
    if (position == items.length) {
        position = 0;
    }
    mainImgActive.classList.remove('ms_main-img-active');
    mainImgActive = document.querySelector('.ms_img-container > #main-img-'+position);
    mainImgActive.classList.add('ms_main-img-active');
    imgPreviewActive.classList.remove('ms_img-preview-active')
    imgPreviewActive = document.querySelector('.ms_img-selector > #img-preview-'+position);
    imgPreviewActive.classList.add('ms_img-preview-active');
});



*/
