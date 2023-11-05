document.addEventListener("DOMContentLoaded", () => {
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
    let burgerRows = document.querySelectorAll('.burger-list__items-nextlist');

    burgerBtn.addEventListener('click', ()=>{
        burgerList.classList.add('burger--active');
    })

    // раскрытие списка по клику и закрытие при клике на другой раздел

    let burgerTitles = Array.from(document.querySelectorAll('.burger-list__title'));
    let burgerCrosses = document.querySelectorAll('.burger-list__cross');

    burgerTitles.forEach(function(burgerTitle){
        burgerTitle.addEventListener('click', function (event){
            
            let burgerRowActives = Array.from(document.querySelectorAll('.burger-items--active'));
            burgerRowActives.forEach(function(burgerRowActive){
                burgerRowActive.classList.remove('burger-items--active');
            })

            burgerCrosses.forEach(function(burgerCross){
                burgerCross.classList.add('cross--active');
            })
            
            let burgerItemElement = event.target;
            
            let burgerRowID = burgerItemElement.getAttribute("data-target");
            let burgerRow = document.getElementById(burgerRowID);
            burgerRow.classList.add('burger-items--active');
        })
    })

    // закрытие списка при нажатии на крестик

    burgerCrosses.forEach(function(burgerCross){
        burgerCross.addEventListener('click', function(){
            burgerRows.forEach(function(burgerRow){
                burgerRow.classList.remove('burger-items--active');
            })
            burgerCross.classList.remove('cross--active');
        })
    })

   
    // раскрытие модальных окон из бургера

    let modalCallBurgers = document.querySelectorAll('.burger-list__items-nextitems');

    modalCallBurgers.forEach(function(modalCallBurger){
        modalCallBurger.addEventListener('click', function (event){
            let modalCallElement = event.target;
            while (modalCallElement != modalCallBurger){
                modalCallElement = modalCallElement.parentNode;
            }
            let modalID = modalCallElement.getAttribute("data-target");
            let modal = document.getElementById(modalID);
            modal.classList.add('modal--active');
        })
    })

    // слайдер в бургере

    let slider = document.querySelector('.burger-list__cards');
    let prevBtn = document. querySelector('.burger-list__arrows-left');
    let nextBtn = document.querySelector('.burger-list__arrows-right');
    let slides = Array.from(slider.querySelectorAll('.burger-list__items-nextitems'));
    let slideCount = slides.length;
    let slideIndex = 0;

    prevBtn.addEventListener('click', showPreviousSlide);
    nextBtn.addEventListener('click', showNextSlide);

    function showPreviousSlide() {
        slideIndex = (slideIndex - 1 + slideCount) % slideCount;
        updateSlider();
    }
    

    function showNextSlide() {
        slideIndex = (slideIndex + 1) % slideCount;
        updateSlider();
    }
    
    function updateSlider() {
        slides.forEach((slide, index) => {
            if (index === slideIndex) {
            slide.style.display = 'block';
            } else {
            slide.style.display = 'none';
            }
        });
    }
    
    updateSlider();


})

