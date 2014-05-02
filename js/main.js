function showPreloader() {
    $('#busy').show();
}
function hidePreloader() {
    $('#busy').hide();
}
$(window).load(function() {
    showPreloader();
	setTimeout(function(){
		hidePreloader();
		window.open('pdf/progression-in-the-national-curriculum-2014-app-version.pdf', '_blank', 'location=yes');
	}, 3000);
});