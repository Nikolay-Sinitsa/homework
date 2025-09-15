
/////////

/////////

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    speed: 1600,
    effect: 'creative',
    creativeEffect: {
        prev: {
            translate: ['-120%', 0, -500],
            opacity: 0.4,
            scale: 0.8,
        },
        next: {
            translate: ['120%', 0, -500],
            opacity: 1,
            scale: 1,
        },
    },
    pagination: {
        el: '.store__pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.store__next',
        prevEl: '.store__prev',
    },
});

/////////////
const board = document.getElementById('board');
const boardContents = document.querySelectorAll('.board__content');
const openSearch = document.getElementById('openSearch');
const burger = document.getElementById('burger');

let boardIsOpen = false;

function isMobile() {
    return window.innerWidth <= 760;
}
function openBoard(contentIndex) {
    board.classList.add('active');
    burger.classList.add('open');
    boardIsOpen = true;

    boardContents.forEach((content, index) => {
        content.style.display = index === contentIndex ? 'block' : 'none';
    });

    document.body.style.overflow = 'hidden';
}


function closeBoard() {
    board.classList.remove('active');
    burger.classList.remove('open');
    boardIsOpen = false;

    document.body.style.overflow = '';
}


burger.addEventListener('click', () => {
    if (!isMobile()) return;

    if (boardIsOpen) {
        closeBoard();
    } else {
        openBoard(0);
    }
});

openSearch.addEventListener('click', () => {
    if (!isMobile()) return;

    if (boardIsOpen) {
        closeBoard();
    } else {
        openBoard(1);
    }
});


window.addEventListener('resize', () => {
    if (!isMobile() && boardIsOpen) {
        closeBoard();
    }
});

/////////////
const searcher = document.querySelector('.searcher');

function toggleSearcher() {
    searcher.classList.toggle('active');
    document.body.style.overflow = searcher.classList.contains('active') ? 'hidden' : '';
}

openSearch.addEventListener('click', () => {
    if (window.innerWidth > 760) {
        toggleSearcher();
    }
});

///

const buttons = document.querySelectorAll('.look__search-button');
const input = document.getElementById('search');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        input.value = button.textContent;
    });
});



///////
document.addEventListener("DOMContentLoaded", () => {
    const trigger = document.getElementById("solution");
    const parentItem = trigger.closest(".nav__list-item");
    const dropdown = parentItem.querySelector(".nav__links");

    trigger.addEventListener("click", (e) => {
        e.preventDefault();
        dropdown.classList.toggle("open");
    });


    document.addEventListener("click", (e) => {
        const isClickInside = parentItem.contains(e.target);

        if (!isClickInside) {
            dropdown.classList.remove("open");
        }
    });
});



