$(document).ready(function () {
    const swiper = new Swiper('.swiper-benefits', {
        loop: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      const secondSwiper = new Swiper(".lessons-swiper", {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },},
          navigation: {
            nextEl: '.lessons-swiper-button-next',
            prevEl: '.lessons-swiper-button-prev',
          },
      });

      const thirdSwiper = new Swiper(".feedback-swiper", {
        loop: true,
      });

      new WOW().init();

      var btn = $('#button');

        $(window).scroll(function() {
          if (($(window).scrollTop() > 300) && ($(window).scrollTop() < 12000)) {
            btn.addClass('show');
          } else {
            btn.removeClass('show');
          }
        });
        
        btn.on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({scrollTop:0}, '300');
        });

        var btn1 = $('button-top');

        btn1.on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({scrollTop:0}, '300');
        });

        // Валдиация формы
        $('.learning-form__form').validate({
          errorClass: "invalid",
          rules: {
            // simple rule, converted to {required:true}
            userName: {
              required: true,
              minlength: 2,
              maxlength: 15
            },
            userPhone: "required",
            // compound rule
            userEmail: {
              required: true,
              email: true
            }
          },
          messages: {
            userName: {
                required:"Введите имя",
                minlength:"Имя не короче двух символов",
                maxlength:"Имя не длиннее 15 символов"
            },
            userPhone: "Введите телефон",
            userEmail: {
              required: "Введите почту в формате: name@domain.com",
              email: "Введите корректный email, в формате: name@domain.com"
            }
          }
        });

        $('.questions-form__form').validate({
          errorClass: "invalid",
          rules: {
            // simple rule, converted to {required:true}
            userName: {
              required: true,
              minlength: 2,
              maxlength: 15
            },
            userPhone: "required",
            // compound rule
            userEmail: {
              required: true,
              email: true
            }
          },
          messages: {
            userName: {
                required:"Введите имя",
                minlength:"Имя не короче двух символов",
                maxlength:"Имя не длиннее 15 символов"
            },
            userPhone: "Введите телефон",
            userEmail: {
              required: "Введите в формате: name@domain.com",
              email: "Введите корректный email, в формате: name@domain.com"
            }
          }
        });

        // маска для телефона

        $('[type=tel]').mask('+7(000) 000-00-00');

        // ------------------------------

});