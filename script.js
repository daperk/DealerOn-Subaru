$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });


    var scrollToTopBtn = $('<button id="scrollToTop" class="btn btn-primary">⬆️</button>');
    $('body').append(scrollToTopBtn);
    $('#scrollToTop').hide(); 
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#scrollToTop').fadeIn();
        } else {
            $('#scrollToTop').fadeOut();
        }
    });

    $('#scrollToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1000);
        return false;
    });

    var navbar = $('header.navbar');
    var stickyOffset = navbar.offset().top;

    $(window).scroll(function() {
        if ($(window).scrollTop() >= stickyOffset) {
            navbar.addClass('sticky');
        } else {
            navbar.removeClass('sticky');
        }
    });

    $('.gallery-section img').on('click', function() {
        var imgSrc = $(this).attr('src');
        var modal = `
            <div id="imageModal" class="modal">
                <span class="close">&times;</span>
                <img class="modal-content" id="modalImage" src="${imgSrc}">
            </div>`;

        $('body').append(modal);
        $('#imageModal').fadeIn();
        $('.close, #imageModal').on('click', function() {
            $('#imageModal').fadeOut(function() {
                $('#imageModal').remove(); 
            });
        });
    });
});
