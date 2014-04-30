function showPreloader() {
    $('#busy').show();
}
function hidePreloader() {
    $('#busy').hide();
}
$(window).load(function() {
    showPreloader();
	setTimeout(function(){
		alert('righty ho');
		//window.open('pdf/progression-in-the-national-curriculum-2014-app-version.pdf', '_self', 'location=yes,EnableViewPortScale=yes');
	}, 3000);
});