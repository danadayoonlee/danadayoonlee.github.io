var bigScreen = window.matchMedia("(min-width: 570px)");
var smallScreen = window.matchMedia("(max-width: 570px)");

if (!sessionStorage.isVisited) {
    sessionStorage.isVisited = 'true'
    $(document).ready(function() {
        // Loader
        delayLoader();

        function delayLoader() {
            $("body").css("background", "linear-gradient(to left,#303030 0%,#182327 100%");
            $(".loader").css("display", "block");
            $(".loader-content").delay(2300).animate({
                top: "-100px",
                opacity: "0"
            }, 'slow');
            $(".loader").delay(2300).animate({
                height: "0"
            }, 1000);
            setTimeout(showLoader, 4000);
        }

        function showLoader() {
            $(".main").css("opacity", "1");
            if ($("body").hasClass("index")) {
                textSplit();
            }
            animate();
        }
    });
} else {
    $("body").css("background", "linear-gradient(to left,#303030 0%,#182327 100%");
    $(".main").css("opacity", "1");
    if ($("body").hasClass("index")) {
        textSplit();
    }
    animate();
}

// Nav toggle
$('.nav-toggle').click(function(event) {
    $(this).toggleClass('active');
    $('.overlay').toggleClass('open');
    $('.sub-page .contact-icons').css("opacity", "1");
    $('.sub-page .contact-icons').fadeToggle(100);
});

$(window).resize(function() {
    if (bigScreen.matches) {
        $('.sub-page .contact-icons').css("opacity", "0");
    }
    if (smallScreen.matches) {
        $('.sub-page .contact-icons').css("opacity", "1");
    }
})

// Text split
function textSplit() {
    $(".main-txt-b").delay(200).animate({
        opacity: "1"
    });

    var $title = document.querySelector('.split');
    var words = $title.textContent.split(" ");
    var html = "";
    for (var i = 0; i < words.length; i++) {

        var letters = words[i].split("");
        var htmlWords = "";

        for (var j = 0; j < letters.length; j++) {
            htmlWords += "<i>" + letters[j] + "</i>";
        }

        html += "<span>" + htmlWords + " </span>";
    }

    $title.innerHTML = html;

    var $letters = $title.querySelectorAll('i');

    if (bigScreen.matches) {
        var totalDuration = 1200;
    }
    if (smallScreen.matches) {
        var totalDuration = 700;
    }

    var duration = totalDuration / $letters.length;

    for (var i = 0; i < $letters.length; i++) {
        var setTimeDuration = duration * i;
        var letter = $letters[i];
        addLetterClass(letter, setTimeDuration);
    }


    function addLetterClass(el, duration) {
        setTimeout(function() {
            console.log(el);
            el.classList.add('on');
        }, duration);
    }
}

// Default effect
function animate() {
    if (bigScreen.matches) {
        $(".index svg").delay(1300).animate({
            opacity: "1"
        });
        $(".index .nav").delay(1300).animate({
            opacity: "1"
        });
        $(".index .contact-icons").delay(1300).animate({
            opacity: "1"
        });

        $(".work svg, .about svg").delay(300).animate({
            opacity: "1"
        });
        $(".work .nav, .about .nav").delay(300).animate({
            opacity: "1"
        });
        $(".work .container").delay(300).animate({
            opacity: "1"
        });
    } else if (smallScreen.matches) {
        $("svg").css("opacity", "1");
        $(".nav").animate({
            opacity: "1"
        });
        $(".contact-icons").css("opacity", "1");
        $(".work .container").animate({
            opacity: "1"
        });
    }
    $(".index .main-txt-s").delay(1100).animate({
        opacity: "1"
    });
    $(".index .main-txt-b-m").delay(500).animate({
        opacity: "1"
    });
    $(".index .main-txt-s-m").delay(500).animate({
        opacity: "1"
    });
    $(".index .main-button-m").delay(500).animate({
        opacity: "1"
    });
    $(".index .main-button").delay(1200).animate({
        opacity: "1"
    });

    $(".about .about-txt").delay(300).animate({
        opacity: "1"
    });

    $(".about .about-contact-icons").delay(300).animate({
        opacity: "1"
    });
}

// Small screen Particle
$(document).ready(function() {
    if (bigScreen.matches) {
        particle();
    }
});

$(window).resize(function() {
    if (bigScreen.matches) {
        $("#particles-js").css("display", "block");
        particle();
    } else if (smallScreen.matches) {
        $("#particles-js").css("display", "none");
    }
});


// Particle
function particle() {
    document.addEventListener("DOMContentLoaded",
        function() {
            var div, n,
                v = document.getElementsByClassName("youtube-player");
            for (n = 0; n < v.length; n++) {
                div = document.createElement("div");
                div.setAttribute("data-id", v[n].dataset.id);
                div.innerHTML = labnolThumb(v[n].dataset.id);
                div.onclick = labnolIframe;
                v[n].appendChild(div);
            }
        });

    function labnolThumb(id) {
        var thumb = '<img src="/img/yt-thumb.jpg" title="youtube video" alt="Youtube Video">',
            play = '<div class="play"></div>';
        return thumb + play;
    }

    function labnolIframe() {
        var iframe = document.createElement("iframe");
        var embed = "https://www.youtube.com/embed/ID?autoplay=1";
        iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "1");
        this.parentNode.replaceChild(iframe, this);
    }

    // ParticlesJS Config.
    if ($("body").hasClass("index") && window.matchMedia('(min-width: 550px)').matches) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 3,
                    "density": {
                        "enable": true,
                        "value_area": 30
                    }
                },
                "color": {
                    "value": "#BEAF96"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#BEAF96"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#BEAF96",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
}

// Gallery filter
jQuery(document).ready(function() {

    "use strict";

    ap_portfolio();
    ap_data_images();


});

function ap_portfolio() {

    "use strict";

    if (jQuery().isotope) {

        var list = jQuery('.ap_portfolio_list');
        var filter = jQuery('.ap_portfolio_filter');

        if (filter.length) {
            // Isotope Filter 
            filter.find('a').on('click', function() {
                var selector = jQuery(this).attr('data-filter');
                list.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });

            // Change active element class
            filter.find('a').on('click', function() {
                filter.find('a').removeClass('current');
                jQuery(this).addClass('current');
                return false;
            });
        }
    }
}

function ap_data_images(){
    
    "use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// Back to top
var btn = $('.back-to-top');

$("body").scroll(function() {
    if ($("body").scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});