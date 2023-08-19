import './style.scss'

// 1. 0 toggle dropdown menubar 
    const menuButtons = document.querySelectorAll('.header__singlemenu');
    const dropdownMenus = document.querySelectorAll('.header__dropdown');

    // close other menu except current menu
    function closeOtherMenus(exceptId) {
        dropdownMenus.forEach(menu => {
            if (menu.id !== exceptId) {
                menu.classList.remove("toggleMenu");
            }
        });
    }

    // Dropdown toggle function
    function toggleMenuAndOpacity(targetId) {
        const targetMenu = document.getElementById(targetId);
        if (targetMenu) {
            closeOtherMenus(targetId);
            targetMenu.classList.toggle("toggleMenu");
        }
        document.body.classList.toggle('opacityClass');
    }

    // Click current menu of the menuList

    menuButtons.forEach(button => {
        button.addEventListener("click", function(e) {
            e.stopPropagation();
            const targetId = button.getAttribute('data-target');
            toggleMenuAndOpacity(targetId);
        });
    });

    // remove dropdown with outside click of the dropdown menu

    document.addEventListener("click", function(event) {
        if (!event.target.classList.contains("header__singlemenu") && !event.target.classList.contains("header__dropdown")) {
            closeOtherMenus();  
        }
    });


// 2.0 searchbar open and hide js

    const searchOpen = document.getElementById('searchOpen');
    const fullSearchBar = document.getElementById('openSearch');
    const closeButton = document.getElementById('close__button');
    const inputElement = document.getElementById('inputbox');


    searchOpen.addEventListener('click', function(){
        fullSearchBar.classList.add('searchbarOpen');
        inputElement.focus();
    })

    closeButton.addEventListener('click', function(){
        fullSearchBar.classList.remove('searchbarOpen')
    })
     
    // submit handler
    fullSearchBar.addEventListener('submit', function(event) {
         event.preventDefault();
         console.log('submit');
    });


    // sidebar menu js 

    const humbarIcon = document.getElementById('humbar__icon');
    const mobileMenu = document.getElementById('mobile__menu');
    const closeSidebar = document.getElementById('close__sidebar');

    humbarIcon.addEventListener('click', function() {
        mobileMenu.classList.add('showMobileMenu');
    })

    closeSidebar.addEventListener('click', function(){
        mobileMenu.classList.remove('showMobileMenu');
    })


    var subMenus = document.querySelectorAll('.nav__sub');
    subMenus.forEach(function(subMenu) {
        var backButton = document.createElement('li');
        backButton.className = 'nav__item';
        var backLink = document.createElement('a');
        backLink.className = 'nav__link sub__close';
        backLink.href = '#';
        var backIcon = document.createElement('i');
        backIcon.className = 'arrow left';
        backLink.appendChild(backIcon);
        backLink.appendChild(document.createTextNode(' Back'));
        backButton.appendChild(backLink);
        subMenu.insertBefore(backButton, subMenu.firstChild);
    });

    // Close out sub menu
    var subCloseButtons = document.querySelectorAll('.sub__close');
    subCloseButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            button.parentElement.parentElement.classList.remove('is-active');
        });
    });

    // Trigger sub menu
    var navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(e) {
            e.preventDefault();
            var siblings = navLink.parentElement.querySelectorAll('.nav__sub');
            siblings.forEach(function(sibling) {
                sibling.classList.add('is-active');
            });
        });
    });


