// make all images responsive
$(function() {
	$("img").addClass("img-responsive");
});

// responsive tables
$(document).ready(function() {
    if(!location.pathname.startsWith("/search")){
        $("table").wrap("<div class='table-responsive'></div>");
        $("table").addClass("table");
    }
});

// responsive embed videos
$(document).ready(function () { 
    $('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
	$('iframe[src*="youtube.com"]').addClass('embed-responsive-item');
    $('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
	$('iframe[src*="vimeo.com"]').addClass('embed-responsive-item');
});

// Navigation Scripts to Show Header on Scroll-Up
$(function() {
    var MQL = 1170;
    var headerHeight = $('.intro-header').height();

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop ) {
                    //if scrolling up...
                    if (currentTop > headerHeight && $('.navbar-custom').hasClass('is-fixed')) {
                        $('.navbar-custom').addClass('is-visible');
                    } else {
                        $('.navbar-custom').removeClass('is-visible is-fixed');
                    }
                } else {
                    //if scrolling down...
                    $('.navbar-custom').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
                }
                this.previousTop = currentTop;
            });
    }
});


function loadScript(d, s, src, id, b, timeout) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); 
    if(id) js.id = id;
    js.src = src;
    js.async = 1;
    js.innerHTML = b;
    
    var executed = false;
    var deferred = $.Deferred();
    timeout = timeout || 0;
    
    function afterLoad() {
        setTimeout(function() {
            deferred.resolve();
        }, timeout); // сохранить "this" для onload
    }
    
    js.onload = function(){
        if (!executed) { // выполнится только один раз
            executed = true;
            afterLoad();
        }
    }
    
    js.onreadystatechange = function() {
        var self = this;
        if (this.readyState == "complete" || this.readyState == "loaded") {
            setTimeout(function() {
                 self.onload()
            }, 0); // сохранить "this" для onload
        }
    }
    
    fjs.parentNode.insertBefore(js, fjs);
    
    return deferred.promise();
}