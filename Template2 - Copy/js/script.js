$(document).ready(function() {
    const cardWrapper = $('.card-wrapper-contian');
    const scrollAmount = 430; // card width + gap

    $('.next').click(function() {
        cardWrapper.animate({
            scrollLeft: '+=' + scrollAmount
        }, 300);
    });

    $('.prev').click(function() {
        cardWrapper.animate({
            scrollLeft: '-=' + scrollAmount
        }, 300);
    });

    // Touch/swipe support
    let startX;
    let scrollLeft;

    cardWrapper.on('mousedown touchstart', function(e) {
        startX = e.type === 'mousedown' ? e.pageX : e.touches[0].pageX;
        scrollLeft = cardWrapper.scrollLeft();
        cardWrapper.css('cursor', 'grabbing');
    });

    cardWrapper.on('mousemove touchmove', function(e) {
        if (!startX) return;
        
        e.preventDefault();
        const x = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX;
        const dist = startX - x;
        cardWrapper.scrollLeft(scrollLeft + dist);
    });

    cardWrapper.on('mouseup mouseleave touchend', function() {
        startX = null;
        cardWrapper.css('cursor', 'grab');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('.menu ul li');
    menuItems.forEach(function(item) {
        var submenu = item.querySelector('.submenu');
        var link = item.querySelector('a');
        if (submenu && link) {
            // For mobile: open submenu on click
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 900) {
                    e.preventDefault();
                    // Toggle submenu
                    var isOpen = submenu.style.opacity === '1';
                    submenu.style.opacity = isOpen ? '0' : '1';
                    submenu.style.visibility = isOpen ? 'hidden' : 'visible';
                    submenu.style.transform = isOpen ? 'translateY(-10px)' : 'translateY(0)';
                }
            });
            // For desktop: close submenu when mouse leaves
            item.addEventListener('mouseleave', function() {
                if (window.innerWidth <= 900) {
                    submenu.style.opacity = '0';
                    submenu.style.visibility = 'hidden';
                    submenu.style.transform = 'translateY(-10px)';
                }
            });
        }
    });
});
