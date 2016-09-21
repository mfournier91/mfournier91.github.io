$(document).ready(function() {
    $('#fullpage').fullpage({
      anchors:['welcome', 'about', 'projects', 'contact', 'json'],
      menu: '#myMenu',
      sectionsColor: ['#847577', '#a6a2a2', '#cfd2cd', '#e5e6e4', '#fbfbf2']
    });

    $('.hoverable').hover(hoverStart, hoverEnd);

    function hoverStart() {
      $(this).addClass("hovered");
      var currentClasses = $(this).attr('class');
    }

    function hoverEnd() {
      $(this).removeClass("hovered")
      var currentClasses = $(this).attr('class');
    }
});
