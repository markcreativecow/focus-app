var topics = [
	// Topics
	{'id':1,'name':'Art','icon':'art.png','child':false,'parent':0},
	{'id':2,'name':'Computing','icon':'computing.png','child':false,'parent':0},
	{'id':3,'name':'Design Technology','icon':'design-technology.png','child':false,'parent':0},
	{'id':4,'name':'English','icon':'english.png','child':true,'parent':0},
	{'id':5,'name':'Geography','icon':'geography.png','child':false,'parent':0},
	{'id':6,'name':'History','icon':'history.png','child':false,'parent':0},
	{'id':7,'name':'Languages','icon':'languages.png','child':false,'parent':0},
	{'id':8,'name':'Mathematics','icon':'mathematics.png','child':true,'parent':0},
	{'id':9,'name':'Music','icon':'music.png','child':false,'parent':0},
	{'id':10,'name':'Physical Education','icon':'physical-education.png','child':false,'parent':0},
	{'id':11,'name':'Science','icon':'science.png','child':true,'parent':0},
	// English Sub Topics
	{'id':12,'name':'English Overview','icon':'english.png','child':false,'parent':4},
	{'id':13,'name':'Spoken Language','icon':'spoken-language.png','child':false,'parent':4},
	{'id':14,'name':'Reading: Word Reading','icon':'reading.png','child':false,'parent':4},
	{'id':15,'name':'Reading: Comprehension','icon':'reading.png','child':false,'parent':4},
	{'id':16,'name':'Writing: Handwriting','icon':'writing.png','child':false,'parent':4},
	{'id':17,'name':'Writing: Punctuation and Grammar','icon':'writing.png','child':false,'parent':4},
	{'id':18,'name':'Writing: Composition','icon':'writing.png','child':false,'parent':4},
	{'id':19,'name':'Writing: Spelling','icon':'writing.png','child':false,'parent':4},
	// Mathematics Sub Topics
	{'id':20,'name':'Mathematics Overview','icon':'mathematics.png','child':false,'parent':8},
	{'id':21,'name':'Number, Place Value and Rounding','icon':'mathematics.png','child':false,'parent':8},
	{'id':22,'name':'Addition and Subtraction','icon':'mathematics.png','child':false,'parent':8},
	{'id':23,'name':'Multiplication and Division','icon':'mathematics.png','child':false,'parent':8},
	{'id':24,'name':'Fractions, Decimals and Percentages','icon':'mathematics.png','child':false,'parent':8},
	{'id':25,'name':'Ratio and Proporation','icon':'mathematics.png','child':false,'parent':8},
	{'id':26,'name':'Algabra','icon':'mathematics.png','child':false,'parent':8},
	{'id':27,'name':'Measurement','icon':'mathematics.png','child':false,'parent':8},
	{'id':28,'name':'Geometry: Properties and Shapes','icon':'mathematics.png','child':false,'parent':8},
	{'id':29,'name':'Geometry: Position, Direction and Motion','icon':'mathematics.png','child':false,'parent':8},
	{'id':29,'name':'Statistics','icon':'mathematics.png','child':false,'parent':8},
	// Science Sub Topics
	{'id':31,'name':'Science Overview','icon':'science.png','child':false,'parent':11},
	{'id':32,'name':'Science Strands By Year Group','icon':'science.png','child':false,'parent':11},
	{'id':33,'name':'Working Scientifically','icon':'science.png','child':false,'parent':11},
	{'id':34,'name':'Plants','icon':'science.png','child':false,'parent':11},
	{'id':35,'name':'Animals, Including Humans','icon':'science.png','child':false,'parent':11},
	{'id':36,'name':'Living Things and Habitats','icon':'science.png','child':false,'parent':11},
	{'id':37,'name':'Evolution and Inheritance','icon':'science.png','child':false,'parent':11},
	{'id':37,'name':'Rocks','icon':'science.png','child':false,'parent':11},
	{'id':39,'name':'Everyday Materials','icon':'science.png','child':false,'parent':11},
	{'id':39,'name':'Properties and Changes of Materials','icon':'science.png','child':false,'parent':11},
	{'id':41,'name':'States of Matter','icon':'science.png','child':false,'parent':11},
	{'id':41,'name':'Light','icon':'science.png','child':false,'parent':11},
	{'id':41,'name':'Sound','icon':'science.png','child':false,'parent':11},
	{'id':44,'name':'Forces and Magnets','icon':'science.png','child':false,'parent':11},
	{'id':45,'name':'Seasonal Changes','icon':'science.png','child':false,'parent':11},
	{'id':45,'name':'Earth and Space','icon':'science.png','child':false,'parent':11},
	{'id':47,'name':'Electricity','icon':'science.png','child':false,'parent':11}
];
function getParentTopics() {
	var items = [];
	$.each(topics, function(index, item){
		if (item.parent == 0) {
			items.push(item);
		}
	});
	return items;	
}
function getChildTopics(id) {
	var items = [];
	$.each(topics, function(index, item){
		if (item.id == id) {
			item.child = false;
			item.name = 'Read All ' + item.name + ' Topics';
			items.push(item);
		}
		if (item.parent == id) {
			items.push(item);
		}
	});
	return items;
}
function openPDF(src) {
	window.open('pdf/' + src + '.pdf', '_blank', 'location=no,EnableViewPortScale=yes');
}
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
$(window).load(function(){	
	$('.clickable').live('click', function() {
		var src = $(this).attr('id').substring(6);
		openPDF(src);
	});
});