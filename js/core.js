var scroll = new iScroll('wrapper', {
    vScrollbar: false,
    hScrollbar: false,
    hScroll: false
});
var topics = [
	{"name":"Art","icon":"art"},
	{"name":"Computing","icon":"computing"},
	{"name":"Design Technology","icon":"design-technology"},
	{"name":"English","icon":"english"},
	{"name":"Geography","icon":"geography"},
	{"name":"History","icon":"history"},
	{"name":"Languages","icon":"languages"},
	{"name":"Mathematics","icon":"mathematics"},
	{"name":"Music","icon":"music"},
	{"name":"Physical Education","icon":"physical-education"},
	{"name":"Science","icon":"science"}
];
function openPDF(src) {
	window.open('../pdf/' + src + '.pdf', '_blank', 'location=no,EnableViewPortScale=yes');
}
$(window).load(function() {
	$('ul#topicList li').remove();
	$.each(topics, function(index, item) {
		$('ul#topicList').append('<li class="' + item.icon + '"><img src="../img/icons/' + item.icon + '.png" alt="' + item.name + '" /></li>');
	});
	$('ul#topicList li').click(function(){
		var src = $(this).attr('class');
		openPDF(src);
	});
	setTimeout(function(){
		scroll.refresh();
	}, 1000);
});