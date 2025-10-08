$(document).ready(function() {
    const cardWrapper = $('.card-wrapper');
    const scrollAmount = 330; // card width + gap

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