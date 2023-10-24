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



// модальные окна
// Home version1

let modalCallLists = document.querySelectorAll('.menu-list__items-nextitems');
let modalCallCards = document.querySelectorAll('.section-cards__item');
let modals = document.querySelectorAll('.modal');
let overlayCloses = document.querySelectorAll('.modal__overlay');
let crossCloses = document.querySelectorAll('.modal__cross')

function modalOpen(event){
    let modalID = event.target.getAttribute("data-target");
    console.log(modalID);
    let modal = document.getElementById(modalID);
    console.log(modal);
    if (modal){
        console.log(modal);
        modal.classList.add('modal--active');
    }
}

modalCallCards.forEach(function(modalCallCard){
    modalCallCard.addEventListener('click',modalOpen);
})



// modalCallList.addEventListener('click', function(modalOpen){
//     modal.classList.add('modal--active');
// })



// modalCallCards.addEventListener('click', function(modalOpen){
//     modal.classList.add('modal--active');
// })

// overlayClose.addEventListener('click', function(modalClose){
//     modal.classList.remove('modal--active');
// })

// crossClose.addEventListener('click', function(modalClose){
//     modal.classList.remove('modal--active');
// })




