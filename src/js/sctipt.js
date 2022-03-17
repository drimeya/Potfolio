// перевод страницы
    var LANGUAGE = false;
    $.redrawLanguage = function (lang) {
      $.ajax({
        url : 'translations/' + lang + '.json', //тянем файл с языком
        dataType : 'json',
        success : function (response) {
          LANGUAGE = response; 
          $('body').find("[lng]").each(function () {
            var lng = LANGUAGE[ $(this).attr('lng') ]; 
            var tag = $(this)[0].tagName.toLowerCase();
    
            switch (tag) {
              case "input":
              $(this).val(lng);
              break;
              default:
              $(this).html(lng);								
              break;
            }
          });
    
    
        }
      });
    };
    
    $.getLanguage = function (key) {
      if (typeof(LANGUAGE[key]) != 'undefined') {
        return LANGUAGE[key]; 
      }
      return key; 
    };

    let btn = document.querySelector('.language-switcher__circle'),
    btnRu = document.querySelector('.ru'),
    ru = document.querySelector ('.language-switcher__lang-ru'),
    en = document.querySelector ('.language-switcher__lang-en');

    btn.addEventListener('click', () => {
      btn.classList.toggle('language-switcher__circle_ru');
      en.classList.toggle('active');
      ru.classList.toggle('active');
      $.redrawLanguage('rus');
    });

    btnRu.addEventListener('click', () => {
      btn.classList.toggle('language-switcher__circle_ru');
      en.classList.toggle('active');
      ru.classList.toggle('active');
      $.redrawLanguage('eng');
    });

// Изменение цвета ссылок меню
jQuery(function($) {

  const section = $('section'),
        nav = $('.header');
  let  navHeight = nav.outerHeight(); 

  window.addEventListener('orientationchange', function () {
      navHeight = nav.outerHeight();
  }, false);

  $(window).on('scroll', function () {
      const position = $(this).scrollTop();

      section.each(function () {
          const top = $(this).offset().top - navHeight - 5,
                bottom = top + $(this).outerHeight();

          if (position >= top && position <= bottom) {
            
              nav.find('a').removeClass('active');
              section.removeClass('active');

              $(this).addClass('active');
              nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
          }
      });
  });

  nav.find('a').on('click', function () {
      const id = $(this).attr('href');

      $('html, body').animate({
          scrollTop: $(id).offset().top - navHeight
      }, 487);

      return false;
  });

});

// popup
let popupBtn = document.querySelector('.btn'),
    close = document.querySelector('.close'),
    popup = document.querySelector('.overlay'),
    submit = document.querySelector('.btn_submit')

popupBtn.addEventListener('click', function () {
  popup.classList.remove('hidden');
});
close.addEventListener('click', function () {
  popup.classList.add('hidden');
});
