function showPreloader() {
    $('#busy').show();
}
function hidePreloader() {
    $('#busy').hide();
}
function openPDF() {
	window.open('http://www.learningchallengecurriculum.com/new/assets/resources/progression-in-the-national-curriculum-2014.pdf', '_blank', 'location=no,EnableViewPortScale=yes');
}
$(window).load(function() {
	setTimeout(function() {
		navigator.splashscreen.hide();
	}, 2000);
    showPreloader();
    setTimeout(openPDF, 100);
	hidePreloader();
});
