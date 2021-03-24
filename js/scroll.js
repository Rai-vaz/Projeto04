$(function(){
   
    $('.menu-desktop a').click(
        function(){
            var valor_href = $(this).attr('href');
            console.log(valor_href);
            var altura_top = $(valor_href).offset().top;
            $('html,body').animate({
                //Está dando um scrolltop no valor que o elemento tem do topo
                'scrollTop':altura_top,

            },3000);
            return false;
        }
    );
});