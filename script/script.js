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

let modalCallLists = document.querySelectorAll('.menu-list__items-nextitems');
let modalCallCards = document.querySelectorAll('.section-cards__inner');
let modals = document.querySelectorAll('.modal');
let overlayCloses = document.querySelectorAll('.modal__overlay');
let crossCloses = document.querySelectorAll('.modal__cross')

// console.log(modalCallCards);

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




