$(document).ready(function() {
    $('#fullpage').fullpage({
      anchors:['welcome', 'about', 'projects', 'contact'],
      navigaton: false,
      slidesNaviagion: true,
      slidesNavPosition: 'bottom',
      sectionsColor: ['#a09be7', '#5f00ba', '#d6ff79', '#b0ff92', '#fff2f1']
    });
});
