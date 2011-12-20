$(function() {
    console.log('ok');
    $("#player1").jPlayer({
		ready: function (event) {
			$(this).jPlayer("setMedia", {
				m4a:"audio/gruber-eating.m4a",
				oga:"audio/gruber-eating.ogg"
			});
		},
		swfPath: "javascripts/Vendor",
		supplied: "m4a, oga"
	});
    
    $('a.play').click(function() {
        console.log('play');
        $('#player1').jPlayer('play');
        return false;
    });
});
