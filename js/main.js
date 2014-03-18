function showPreloader() {
    $('#busy').show();
}
function hidePreloader() {
    $('#busy').hide();
}
$(window).load(function() {
	setTimeout(function() {
        navigator.splashscreen.hide();
    }, 10000);
    showPreloader();
});
