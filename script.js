$(document).ready(function() {
    $('#fullpage').fullpage({
      anchors:['welcome', 'about', 'projects', 'contact', 'json'],
      menu: '#myMenu',
      sectionsColor: ['#5b507a', '#96bdc6', '#a7a5ce', '#2e6171', '#ebbab9']
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
