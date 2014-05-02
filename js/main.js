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
		Intent target = new Intent(Intent.ACTION_VIEW);
		target.setDataAndType(Uri.fromFile(file),"application/pdf");
		target.setFlags(Intent.FLAG_ACTIVITY_NO_HISTORY);
		Intent intent = Intent.createChooser(target, "Open File");
		try {
			startActivity(intent);
		} catch (ActivityNotFoundException e) {
			alert('ooooops');
		}   
		// hidePreloader();
		// window.open('pdf/progression-in-the-national-curriculum-2014-app-version.pdf', '_blank', 'location=yes');
	}, 3000);
});