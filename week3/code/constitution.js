/*
  Thanks to the magic of E.Liu
*/

/*

constitution.js

Add togglable panel containing links to all external student CSS files for the Constitution assignment.
Clicking a link will replace the current stylesheet with that of the specified student.

*/


var body = document.body; // cache body object

// array of students in non-JSON format. First name : storm handle
var arrStudents = []; 
arrStudents[0] = 'tatiana:bainsaar';
arrStudents[1] = 'davis:davisavi';
arrStudents[2] = 'noelle:brimble';
arrStudents[3] = 'barbara:bcbrooks';
arrStudents[4] = 'ryan:cenicola';
arrStudents[5] = 'morgan:morganch';
arrStudents[6] = 'kate:katedowd';
arrStudents[7] = 'james:jamestgi';
arrStudents[8] = 'paxton:paxtonha';
arrStudents[9] = 'hannah:hengst';
arrStudents[10] = 'lily:lilyhoan';
arrStudents[11] = 'janine:janineki';
arrStudents[12] = 'yang:yang477';
arrStudents[13] = 'alison:amalamud';
arrStudents[14] = 'alyssa:matlosz';
arrStudents[15] = 'audey:audeyshe';
arrStudents[16] = 'maya:mtellez';
arrStudents[17] = 'mark:mdvasque';
arrStudents[18] = 'amanda:verdader';
arrStudents[19] = 'michelle:whangmic';
arrStudents[20] = 'zoe:zmalhotr';




// Append min-height 100% style to body

body.style.minHeight= '100%';

// Append div containing list of links to students CSS

body.innerHTML += '<div id="students" style="z-index:999;position:fixed;top:0;left:0;width:auto;height:100%;padding:10px 20px 60px 20px;overflow-y:auto;background:#f2f2f2;display:none;"></div>';




var students = document.getElementById('students'); // Cache students ID

// Append array links to students ID

for (var i=0;i<arrStudents.length;i++) {
	students.innerHTML += '<a style="display:block;padding:0;margin-bottom:5px" href="http://storm.usc.edu/~'+arrStudents[i].split(':').pop()+'/assignments/css/constitution.css" data-type='+arrStudents[i].split(':').pop()+'>'+arrStudents[i].split(':').shift()+'</a>';
}

// Add click event listeners to all links

for (var i=0;i<arrStudents.length;i++) {
	document.querySelectorAll('#students a')[i].addEventListener('click', switchStylesheet);
}





var linkStylesheet = document.querySelectorAll('link[rel=stylesheet][href]'), // get stylesheet
prefix = 'http://storm.usc.edu/~', // prefix for link
suffix = '/iml300/assignments/css/constitution.css'; // suffix for link
function switchStylesheet(e) {
	e.preventDefault(); // prevent default behavior of following href link
	linkStylesheet[0].href = prefix + this.getAttribute('data-type') + suffix; // change current url to clicked student stylesheet
	console.log('Current stylesheet source: ' + linkStylesheet[0].href); // console log current stylesheet source
}





// Add key event listener to body

body.addEventListener('keyup', key);

var isToggled = false; // by default, the students ID is not visible

function key(e) {
	var code = e.keyCode;
	if (code === 27) {
		e.preventDefault();
		if (!isToggled) { // boolean to toggle students ID on pressing 'escape' key
			isToggled = true;
			students.style.display = 'block';	
		} else {
			isToggled = false;
			students.style.display = 'none';	
		}
	}
}
