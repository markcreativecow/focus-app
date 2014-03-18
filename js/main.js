function showPreloader() {
    $('#busy').show();
}
function hidePreloader() {
    $('#busy').hide();
}
$(window).load(function() {
    showPreloader();
	window.open('pdf/progression-in-the-national-curriculum-2014.pdf', '_self', 'location=no,EnableViewPortScale=yes');
});
