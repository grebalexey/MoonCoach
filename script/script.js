// прокрутка до раздела

const mainHomepages = document.getElementById('mainHomepages');
const mainAboutpages = document.getElementById('mainAboutpages');
const mainBlogpages = document.getElementById('mainBlogpages');
const mainOtherpages = document.getElementById('mainOtherpages');


const scrollToHomepages = document.getElementById('scrollToHomepages');
const scrollToAboutpages = document.getElementById('scrollToAboutpages');
const scrollToBlogpages = document.getElementById('scrollToBlogpages');
const scrollToOtherpages = document.getElementById('scrollToOtherpages');


scrollToHomepages.addEventListener('click', function(){
    console.log(1);
    mainHomepages.scrollIntoView({behavior: "smooth"});
} )

scrollToAboutpages.addEventListener('click', function(){
    console.log(2);
    mainAboutpages.scrollIntoView({behavior: "smooth"});
} )

scrollToBlogpages.addEventListener('click', function(){
    console.log(3);
    mainBlogpages.scrollIntoView({behavior: "smooth"});
} )

scrollToOtherpages.addEventListener('click', function(){
    console.log(4);
    mainOtherpages.scrollIntoView({behavior: "smooth"});
} )



// МОДАЛЬНЫЕ ОКНА

let modalCallLists = document.querySelectorAll('.menu-list__items-nextitems');
let modalCallCards = document.querySelectorAll('.section-cards__inner');
let modals = document.querySelectorAll('.modal');
let overlayCloses = document.querySelectorAll('.modal__overlay');
let crossCloses = document.querySelectorAll('.modal__cross')

// вызов из раздела

modalCallCards.forEach(function(modalCallCard){
    // console.log(modalCallCard);
    modalCallCard.addEventListener('click', function (event){
        console.log(event.target);
        let modalCallElement = event.target;
        // console.log(modalCallElement);
        while (modalCallElement != modalCallCard){
            modalCallElement = modalCallElement.parentNode;
        }
        let modalID = modalCallElement.getAttribute("data-target");
        console.log(modalID);
        let modal = document.getElementById(modalID);
        console.log(modal);
        if (modal){
            modal.classList.add('modal--active');
        }
    });
})

// вызов из меню

modalCallLists.forEach(function(modalCallList){
    // console.log(modalCallCard);
    modalCallList.addEventListener('click', function (event){
        console.log(event.target);
        let modalCallElement = event.target;
        // console.log(modalCallElement);
        while (modalCallElement != modalCallList){
            modalCallElement = modalCallElement.parentNode;
        }
        let modalID = modalCallElement.getAttribute("data-target");
        console.log(modalID);
        let modal = document.getElementById(modalID);
        console.log(modal);
        if (modal){
            modal.classList.add('modal--active');
        }
    });
})

function modalClose (){
    modals.forEach(function(modal){
        modal.classList.remove('modal--active');
    })
}

overlayCloses.forEach(function(overlayClose){
    overlayClose.addEventListener('click', modalClose)
})

crossCloses.forEach(function(crossClose){
    crossClose.addEventListener('click', modalClose)
})


// БУРГЕР МЕНЮ

//вызов

let burgerBtn = document.querySelector('.header-menu__burger-button');
let burgerList = document.querySelector('.header-menu__burger-list');

burgerBtn.addEventListener('click', ()=>{
    burgerList.classList.add('burger--active');
})

// раскрытие списка

let burgerItems = document.querySelectorAll('.burger-list__items');
let burgerRows = document.querySelectorAll('.burger-list__items-nextlist');

burgerItems.forEach(function(burgerItem){
    burgerItem.addEventListener('click', function (event){
        let burgerItemElement = event.target;
        while (burgerItemElement != burgerItem){
            burgerItemElement = burgerItemElement.parentNode;
        }
        let burgerRowID = burgerItemElement.getAttribute("data-target");
        let burgerRow = document.getElementById(burgerRowID);
        burgerRow.classList.add('burger-items--active');
    })
})
