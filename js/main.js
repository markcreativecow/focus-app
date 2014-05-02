function showPreloader() {
    $('#busy').show();
}
function hidePreloader() {
    $('#busy').hide();
}
$(window).load(function() {
    showPreloader();
	setTimeout(function(){
		File file = new File(Environment.getExternalStorageDirectory().getAbsolutePath() +"/"+ 'pdf/progression-in-the-national-curriculum-2014-app-version.pdf');
		
		alert(JSON.stringify(file));
	}, 3000);
});