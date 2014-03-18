function showPreloader() {
    $('#busy').show();
}
function hidePreloader() {
    $('#busy').hide();
}
$(window).load(function() {
    showPreloader();
	window.open('http://www.learningchallengecurriculum.com/new/assets/resources/progression-in-the-national-curriculum-2014.pdf', '_blank', 'location=no,EnableViewPortScale=yes');
	setTimeout(hidePreloader, 3000);
});
