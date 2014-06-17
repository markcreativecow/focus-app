var topics = [
	// Topics
	{'id':1,'name':'Art','child':false,'parent':0},
	{'id':2,'name':'Computing','child':false,'parent':0},
	{'id':3,'name':'Design Technology','child':false,'parent':0},
	{'id':4,'name':'English','child':true,'parent':0},
	{'id':5,'name':'Geography','child':false,'parent':0},
	{'id':6,'name':'History','child':false,'parent':0},
	{'id':7,'name':'Languages','child':false,'parent':0},
	{'id':8,'name':'Mathematics','child':true,'parent':0},
	{'id':9,'name':'Music','child':false,'parent':0},
	{'id':10,'name':'Physical Education','child':false,'parent':0},
	{'id':11,'name':'Science','child':true,'parent':0},
	// English Sub Topics
	{'id':12,'name':'English Overview','child':false,'parent':4},
	{'id':13,'name':'Spoken Language','child':false,'parent':4},
	{'id':14,'name':'Reading: Word Reading','child':false,'parent':4},
	{'id':15,'name':'Reading: Comprehension','child':false,'parent':4},
	{'id':16,'name':'Writing: Handwriting','child':false,'parent':4},
	{'id':17,'name':'Writing: Punctuation and Grammar','child':false,'parent':4},
	{'id':18,'name':'Writing: Composition','child':false,'parent':4},
	{'id':19,'name':'Writing: Spelling','child':false,'parent':4},
	// Mathematics Sub Topics
	{'id':20,'name':'Mathematics Overview','child':false,'parent':8},
	{'id':21,'name':'Number, Place Value and Rounding','child':false,'parent':8},
	{'id':22,'name':'Addition and Subtraction','child':false,'parent':8},
	{'id':23,'name':'Multiplication and Division','child':false,'parent':8},
	{'id':24,'name':'Fractions, Decimals and Percentages','child':false,'parent':8},
	{'id':25,'name':'Ratio and Proporation','child':false,'parent':8},
	{'id':26,'name':'Algabra','child':false,'parent':8},
	{'id':27,'name':'Measurement','child':false,'parent':8},
	{'id':28,'name':'Geometry: Properties and Shapes','child':false,'parent':8},
	{'id':29,'name':'Geometry: Position, Direction and Motion','child':false,'parent':8},
	{'id':30,'name':'Statistics','child':false,'parent':8},
	// Science Sub Topics
	{'id':31,'name':'Science Overview','child':false,'parent':11},
	{'id':32,'name':'Science Strands By Year Group','child':false,'parent':11},
	{'id':33,'name':'Working Scientifically','child':false,'parent':11},
	{'id':34,'name':'Plants','child':false,'parent':11},
	{'id':35,'name':'Animals, Including Humans','child':false,'parent':11},
	{'id':36,'name':'Living Things and Habitats','child':false,'parent':11},
	{'id':37,'name':'Evolution and Inheritance','child':false,'parent':11},
	{'id':38,'name':'Rocks','child':false,'parent':11},
	{'id':39,'name':'Everyday Materials','child':false,'parent':11},
	{'id':40,'name':'Properties and Changes of Materials','child':false,'parent':11},
	{'id':41,'name':'States of Matter','child':false,'parent':11},
	{'id':42,'name':'Light','child':false,'parent':11},
	{'id':43,'name':'Sound','child':false,'parent':11},
	{'id':44,'name':'Forces and Magnets','child':false,'parent':11},
	{'id':45,'name':'Seasonal Changes','child':false,'parent':11},
	{'id':46,'name':'Earth and Space','child':false,'parent':11},
	{'id':47,'name':'Electricity','child':false,'parent':11}
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
