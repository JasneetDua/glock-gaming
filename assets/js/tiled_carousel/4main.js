new BoxesFx( document.getElementById( 'boxgallery' ) );

(function(){
    $carousel = $('#boxgallery');
    $nav = $carousel.find('nav').hide();
    setInterval(function(){
        $nav.find('.prev').get(0).click();
    },3000);
})();