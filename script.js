function change_theme(theme){
  if(theme == 'system'){
    document.getElementById('html').classList.remove("theme-light", "theme-dark");
    document.cookie = "theme=system; max-age=43200; SameSite=Lax;"
";
  }else{
    document.getElementById('html').classList.remove("theme-light", "theme-dark");
    document.getElementById('html').classList.add(theme);
    document.cookie = "theme=theme-" + theme + "; max-age=43200; SameSite=Lax;"
";
  }
}

if ( ~document.cookie.indexOf('theme=system')) {
  change_theme('system');
}else{
  if ( ~document.cookie.indexOf('theme=theme-light')) {
  change_theme('theme-light');
  }else{
    if ( ~document.cookie.indexOf('theme=theme-dark')) {
      change_theme('theme-dark');
    }
  }
}

$(document).ready(function() {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  });
});

$('.top-slider').slick();
