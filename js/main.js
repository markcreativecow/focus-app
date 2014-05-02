function showPreloader() {
    $('#busy').show();
}
function hidePreloader() {
    $('#busy').hide();
}
$(window).load(function() {
	var devicePlatform = device.platform;
	alert('asdasd' + devicePlatform);
});