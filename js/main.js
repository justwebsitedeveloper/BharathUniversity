// Banner animation
var bannerTl = gsap.timeline();

bannerTl.from(".banner-content__left p", { duration: .5, x: -100, autoAlpha: 0 }, 1.5)
    .from(".banner-content__left h2", { duration: .5, y: 100, autoAlpha: 0 }, '-=.5')
    .from(".banner-content__left span", { duration: .5, width: 0 })
    .from(".banner-content__right", { duration: .3, scale: .01, transformOrigin: "center" }, '-=.2');

//   play video

let videoPlaying = false;

$('.banner-content__right').on('click', function () {
    var vid = document.getElementById("myVideo");

    if (videoPlaying) {
        vid.pause();
        $('.banner-content__right p').text('Watch video');
        videoPlaying = false;
    } else {
        vid.play();
        $('.banner-content__right p').text('Pause video');
        videoPlaying = true;
    }
});


$(document).ready(function () {
    $('.skip').click(function () {
        $('.overlay, body').addClass('loaded');
    })

    // Will wait for everything on the page to load.
    $(window).bind('load', function () {
        $('.overlay, body').addClass('loaded');
        setTimeout(function () {
            $('.overlay').css({ 'display': 'none' })
            bannerTl.play();
        }, 2000)
    });

    // Will remove overlay after 1min for users cannnot load properly.
    setTimeout(function () {
        $('.overlay, body').addClass('loaded');
    }, 15000);
})

$(window).on('scroll', testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height() - 100;

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function testScroll() {
    if (isScrolledIntoView($(".numbers__left")) && !viewed) {
        viewed = true;
        $('.numbers__item span').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 6000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
}


$('.nirf-bottom__carousel').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: "<img class='prev slick-prev' src='./img/icons/arrow-left.svg'>",
    nextArrow: "<img class='next slick-next' src='./img/icons/arrow.svg'>",


});

$('.partners').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
});


$('.congrats__carousel-inner-container').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
});


let congratsTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".congrats",
        start: "top bottom",
    }
});

congratsTl.from(".congrats-item", {
    y: 100,
    autoAlpha: 0,
    stagger: 0.2
});

let newsTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".news",
        start: "0 bottom",
        end: "center center",
        scrub: 1,
    }
})

newsTl.from(".news__title h3", { duration: .5, x: -100, autoAlpha: 0 }, 1.5)
    .from(".news__title a", { duration: .5, x: 100, autoAlpha: 0 }, 1.5)
    .from(".news_item", { y: 100, autoAlpha: 0, stagger: 0.5 })
    .from(".news_item__body span", { y: 50, autoAlpha: 0, stagger: 0.5 }, "-=1.5")
    .from(".news_item__body h4", { y: 50, autoAlpha: 0, stagger: 0.5 }, "-=1")
    .from(".news_item__body p", { y: 50, autoAlpha: 0, stagger: 0.5 }, "-=.5")


let studyTopTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".study-top",
        start: "0 bottom",
        end: "bottom center+=200",
        scrub: .5,
    }
});


studyTopTl.from(".study-top__content p", { duration: .5, y: -50, autoAlpha: 0 }, 1.5)
    .from(".study-top__content svg", { duration: .5, autoAlpha: 0 }, "-=.5")
    .from(".study-top__content", { duration: 1, css: { borderColor: "transparent" } })
    .from('.study-top__content span', { duration: .5, y: 50, autoAlpha: 0 }, "-=1");



let studyBottomTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".study-bottom__right",
        start: "+=110 bottom",
        end: "center+=100 center+=200",
        scrub: .5,
    }
});

studyBottomTl.from(".study-bottom__left h4", { duration: .5, x: -50, autoAlpha: 0 }, 1)
    .from(".study-bottom__left p", { duration: .5, y: 50, autoAlpha: 0 })
    .from(".study-bottom__right", { duration: 1, y: -100, autoAlpha: 0 })
    .from(".study-bottom__left div a", { y: 50, autoAlpha: 0, stagger: .2 }, '+=.5')


let innovationTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".innovation",
        start: "+=120 bottom-=150",
        end: "bottom-=175 bottom-=150",
        scrub: .5,
    }
})

innovationTL.from(".innov1", { duration: .5, x: -50, autoAlpha: 0 }, 1)
    .from(".innov2", { duration: .5, y: 50, autoAlpha: 0 }, '-=.5')
    .from(".innov3", { duration: .25, x: 50, autoAlpha: 0 }, '-=.5')


let numbersTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".numbers",
        start: "start bottom-=150",
        end: "bottom+=200 bottom",
        scrub: .5,
    }
})

numbersTL.from(".numbers__left p", { duration: .75, x: -50, autoAlpha: 0 })
    .from(".numbers__right p", { duration: .75, x: 50, autoAlpha: 0 },)
    .from(".numbers__right img", { duration: 1, y: 100, autoAlpha: 0 }, '+=1')
    .from(".numbers__left a", { duration: 1.5, y: -100, autoAlpha: 0 },)


let awardsTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".awards",
        start: "start bottom-=150",
        end: "bottom-=150 bottom-=150",
        scrub: 1,
    }
})

var grid = [7, 15], //[rows, columns]
    tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

awardsTL.from(".awards h3", { duration: .75, x: -50, autoAlpha: 0 })
    .from('.awards__content .ani-1', 0.5, { y: 100, autoAlpha: 0, stagger: .2 })
    .from('.awards__content .ani-2', 0.5, { y: 100, autoAlpha: 0, stagger: .2 })
    .from('.awards__content .ani-3', 0.5, { y: 100, autoAlpha: 0, stagger: .2 },)


let womenTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".women",
        start: "start bottom-=150",
        end: "bottom-=200 bottom-=150",
        scrub: 1,
    }
})

womenTL.from(".women h3", { duration: .75, x: -50, autoAlpha: 0 })
    .from(".women h4", { duration: .75, x: -50, autoAlpha: 0 })
    .from(".women p", { duration: .75, y: 50, autoAlpha: 0 })
    .from(".women a", { duration: .75, x: -50, autoAlpha: 0 })
    .from(".women img ", { duration: 1.25, autoAlpha: 0, x: 100 }, '-=.5')

let nirfTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".nirf-top",
        start: "start bottom-=150",
        end: "bottom bottom-=150",
        scrub: 1,
    }
})

nirfTL.from(".nirf-top__left img", { duration: .75, y: 50, autoAlpha: 0 })
    .from(".nirf-rank__item", { duration: .75, y: 50, autoAlpha: 0, stagger: .2 })
    .from(".nirf-top__left p", { duration: .75, y: 50, autoAlpha: 0 })
    .from(".nirf-rank__item span", { duration: .75, scale: .01, transformOrigin: "center", stagger: .2 })
    .from(".nirf-top_illustration", { duration: .75, y: 50, autoAlpha: 0 })


let rndTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".rnd",
        start: "+=120 bottom-=150",
        end: "bottom-=180 bottom-=150",
        scrub: 1,
    }
})

rndTl.from(".rnd__content-left h3", { duration: .75, y: 50, autoAlpha: 0 })
    .from(".rnd__content-left > p", { duration: .75, y: 50, autoAlpha: 0 })
    .from(".rnd__content-right img", { duration: .75, x: 50, autoAlpha: 0 }, '-=.75')
    .from(".rnd__content-left a", { duration: .75, x: -50, autoAlpha: 0, zIndex: 1 }, '-=.75')


let academicsTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".academics",
        start: "start bottom-=150",
        end: "center bottom-=150",
        scrub: .5,
    }
})

academicsTL.from(".academics h3", { duration: .75, x: -50, autoAlpha: 0 })
    .from('.academics img', 0.75, { y: 100, autoAlpha: 0, stagger: .3 })

let studentMagazineTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".student-magazine__top",
        start: "0 bottom-=150",
        end: "bottom bottom-=150",
        scrub: .5,
    }
})

studentMagazineTl.from(".mag1 h3", { duration: .5, x: -50, autoAlpha: 0 })
    .from(".mag2", { duration: .5, y: 50, autoAlpha: 0 })
    .from(".mag3", { duration: .25, x: 50, autoAlpha: 0 })

let admissionTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".admission",
        start: "start+=100 bottom-=150",
        end: "center+=100 bottom-=150",
        scrub: .5,
    }
})

admissionTL.from(".admission h4", { duration: .75, y: -50, autoAlpha: 0 })
.from(".admission__links a", { duration: .75, x: 100, autoAlpha: 0, stagger: 1 })
.from(".admission img", { duration: .5, scale: .01, transformOrigin: "center" }, '-=.2');
