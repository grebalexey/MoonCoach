const mainHomepages = document.getElementById('mainHomepages');
const mainAboutpages = document.getElementById('mainAboutpages');
const mainBlogpages = document.getElementById('mainBlogpages');
const mainOtherpages = document.getElementById('mainOtherpages');


const scrollToHomepages = document.getElementById('scrollToHomepages');
const scrollToAboutpages = document.getElementById('scrollToAboutpages');
const scrollToBlogpages = document.getElementById('scrollToBlogpages');
const scrollToOtherpages = document.getElementById('scrollToOtherpages');


scrollToHomepages.addEventListener('click', function(){
    console.log(2);
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




// = function(){
//     console.log(2);
//     mainAboutpages.scrollIntoView({behavior: "smooth"});
// }

