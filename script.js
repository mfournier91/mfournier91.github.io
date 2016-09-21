$(document).ready(function() {
    $('#fullpage').fullpage({
      anchors:['welcome', 'about', 'projects', 'contact', 'json'],
      menu: '#myMenu',
      sectionsColor: ['#847577', '#a6a2a2', '#cfd2cd', '#e5e6e4', '#fbfbf2']
    });

    $('.hoverable').hover(hoverStart, hoverEnd);
    $('.hoverable').on("click", selectClicked);

    function hoverStart() {
      $(this).addClass("hovered");
    }

    function hoverEnd() {
      $(this).removeClass("hovered");
    }

    function selectClicked() {
      currentSelection = $('.selected');
      $(currentSelection).removeClass('selected');
      $(this).addClass('selected');
    }

});
