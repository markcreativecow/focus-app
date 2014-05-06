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
		window.open('http://docs.google.com/viewer?url=http%3A%2F%2Fwww.focus-education.co.uk%2Fimages%2Fprogression-in-the-national-curriculum-2014-app-version.pdf', '_blank', 'location=yes');
		// window.open('pdf/progression-in-the-national-curriculum-2014-app-version.pdf', '_blank', 'location=yes');
	}, 3000);
});