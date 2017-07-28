<!--
$(function() {
    var moveLeft = -10;
    var moveDown = 20;
        
    /*var pyside = 'content/pyside-docs/PySide/QtGui/';*/
    var pyside = 'https://srinikom.github.io/pyside-docs/PySide/QtGui/';

    var maya_python = 'http://help.autodesk.com/cloudhelp/2017/ENU/Maya-Tech-Docs/Commands/';
    
        
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
        //var a_href = $(this).attr('href').split('#');
        var ref = maya_python + $(this).contents().text() + '.html';
        
        $.get(ref, function(response) {
                $('#pop-up').html($(response).filter('#synopsis').html().split('<br>')[0]);
            });
        
        $('#pop-up').show().css('top', e.pageY + moveDown).css('left', e.width);
        }, function() {
            $('#pop-up').hide();
            
    });
});
-->