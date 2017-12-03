var Lightbox = {
    "alerta": function(){
        alert("Será?");
    },

    "init": function(texto, cor, largura) {
        var container = $('<div>');
        container.attr({
            'id': 'minha_lightbox',
            'class': 'lightbox'
        });

        var fundo = $('<div>');
        fundo.attr('class','fundo');
        fundo.appendTo(container);
        fundo.click(function(){
            container.hide();
        });

        var box = $('<div>');
        box.attr('class','conteudo');
        box.text(texto);
        box.css({
            'background': cor,
            'max-width': largura,
            'margin-left': ((largura/2)*-1)
        });
        box.appendTo(container);

        var btn_fechar = $('<a>');
        btn_fechar.attr('class','fechar');
        btn_fechar.text('X');
        btn_fechar.click(function(){
            container.hide();
        });
        btn_fechar.appendTo(box);

        container.appendTo($('body'));

        // Lightbox.margem();
    }

    // "margem": function() {

    //         var conteudoWidth = $('.conteudo').innerWidth();
    //         $('.conteudo').css({
    //             "margin-left":  (conteudoWidth/2)*-1
    //         });
       
    // }
}