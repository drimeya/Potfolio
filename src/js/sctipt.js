
    

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
    }
    
    $.getLanguage = function (key) {
      if (typeof(LANGUAGE[key]) != 'undefined') {
        return LANGUAGE[key]; 
      }
      return key; 
    }
  
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