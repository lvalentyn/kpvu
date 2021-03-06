window.addEventListener('DOMContentLoaded', () => {


    // Animations

    const animItems = document.querySelectorAll('._anim-items');

    if (animItems.length > 0) {

        window.addEventListener('scroll', animOnScroll);

        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 3;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                } else {
                    if (!animItem.classList.contains('_anim-off')) {
                        animItem.classList.remove('_active');
                    }
                }
            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: rect.top + scrollTop,
                left: rect.left + scrollLeft
            }
        }

        setTimeout(() => {
            animOnScroll();
        }, 300);

    };
    lightGallery(document.querySelector('.about__sertificates'));

    /* Jquery */
    $(document).ready(function () {
        // navmenu on scroll
        $(window).scroll(function () {
            if (this.scrollY > 40) {
                $('.navbar').addClass('sticky');
                // $('.gotop').fadeIn();
            } else {
                $('.navbar').removeClass('sticky');
                // $('.gotop').fadeOut();
            }
        });
        // header slider
        $('.header__slider').slick({
            dots: true,
            arrows: false,
            speed: 2000,
            swipe: false,
            autoplay: true,
            autoplaySpeed: 5000
        });
        $('.slick-dots button').html('')

        // catalog
        $(".catalog__cards").not(":first").hide();
        $(".catalog__tab").click(function () {
            $(".catalog__tab").removeClass("active").eq($(this).index()).addClass("active");
            $(".catalog__cards").hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass("active");



        // product slider
        $('.main__photo').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            swipe: false,
            asNavFor: '.sub__photo'
        });
        $('.sub__photo').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.main__photo',
            dots: false,
            centerMode: false,
            arrows: false,

            focusOnSelect: true
        });
        // плавная прокрутка
        // $("a[href='#up']")
        $("a[href]").click(function () {
            const _href = $(this).attr("href");
            $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
            return false;
        });
        // burger 
        $('.burger').click(function () {
            $('.burger, .navbar__menu').toggleClass('active');
            $('body').toggleClass('lock');
            $('.navbar__tel a').toggleClass('grn');
        });
        $('.navbar__logo, .navbar__item, .navbar__tel').click(function () {
            $('.burger, .navbar__menu').removeClass('active');
            $('body').removeClass('lock');
            $('.navbar__tel a').removeClass('grn');
        });

        // modal
        // $('.modal__close').on('click', function () {
        //     $('.overlay, #thanks').fadeOut('slow');
        // });

        // gotop

        // $('.gotop').click(function () {
        //     scroll(0, 0)
        // });

        // mailer
        // $('form').submit(function (e) {
        //     e.preventDefault();/* отключаем перезагрузку страницы */
        //     $.ajax({
        //         type: "POST",
        //         url: "mailer/smart.php",
        //         data: $(this).serialize()
        //     }).done(function () {
        //         $(this).find("input").val("");
        //         $('.overlay, #thanks').fadeIn('slow');
        //         $('form').trigger('reset');
        //     });
        //     return false;
        // });

    });
});