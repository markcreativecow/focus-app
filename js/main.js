function showPreloader() {
    $('#busy').show();
}
function hidePreloader() {
    $('#busy').hide();
}
$(window).load(function() {
    showPreloader();
	setTimeout(function(){
		window.open('pdf/progression-in-the-national-curriculum-2014.pdf', '_self', 'location=yes,EnableViewPortScale=yes');
	}, 3000);
});
