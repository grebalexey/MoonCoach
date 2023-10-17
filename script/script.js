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
// Homepage1

let addModalHomepages1 = document.querySelector('.cardHomepage1');
let modal = document.querySelector('.modal');
let wrap = document.querySelector('.g-hidden::before')

addModalHomepages1.addEventListener('click', function(){

    if(!modal.classList.contains("js-active")){
        setTimeout(() => {
            modal.classList.add("js-active");
            wrap.classList.add("g-hidden-active");
        })
        
        
    }
})

// function closeModal(modal){
//     modal.classList.remove("js-active");

// }

// function closeModal(modal){
//     modal.classList.remove("js-active");

// }

// document.addEventListener('click', function(event){
//     console.log(event);

//     if(!modal.contains(event.target) && modal.classList.contains("js-active")){
//         closeModal(modal);
//     }
// })


