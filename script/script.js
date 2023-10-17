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

let modalCallList = document.querySelector('.menu-list__items-nextitems');
let modalCallCard = document.querySelector('.cardHomepage1');
let modal = document.querySelector('.modal');
let overlayClose = document.querySelector('.modal__overlay');
let crossClose = document.querySelector('.modal__cross')

modalCallList.addEventListener('click', function(modalOpen){
    modal.classList.add('modal--active');
})

modalCallCard.addEventListener('click', function(modalOpen){
    modal.classList.add('modal--active');
})

overlayClose.addEventListener('click', function(modalClose){
    modal.classList.remove('modal--active');
})

crossClose.addEventListener('click', function(modalClose){
    modal.classList.remove('modal--active');
})




