<!--
$(function() {
    var moveLeft = -10;
    var moveDown = 20;
        
    var pyside = 'content/documentation/pyside-docs/PySide/QtGui/';
    
        
    $('#pyside').hover(function(e) {
        var reference = pyside + $(this).contents().text() + '.html';
        $('#pop-up').load(reference + ' #functions');
        
        /*$.get(reference, function(response) {
                $('#pop-up').html($(response).filter('.simple'));
            });*/
        
        $('#pop-up').show().css('top', e.pageY + moveDown).css('left', e.width);
        }, function() {
            $('#pop-up').hide();
                });
            
    $('a#pycom').hover(function(e) {
        var a_href = $(this).attr('href').split('#');
        
        $.get(a_href[0], function(response) {
                $('#pop-up').html($(response).filter('#synopsis').html().split('<br>')[0]);
            });
        
        $('div#pop-up').show().css('top', e.pageY + moveDown).css('left', e.width);
        }, function() {
        $('div#pop-up').hide();
    });
});
-->