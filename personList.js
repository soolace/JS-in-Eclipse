/**
 * 
 */

var person = [{name:"isa", ort: "st.gallen", alter: 23},
			{name:"igor", ort: "st.petersburg", alter: 28},
			{name: "elena", ort: "bern", alter: 34},
			{name: "simon", ort: "zürich", alter: 19},
			{name: "lea", ort: "st.gallen", alter: 38},
			{name: "mischa", ort: "st.petersburg", alter: 22},
			{name: "kelly", ort: "bern", alter: 37}
			];



let obj = person.find(o => o.ort === 'st.gallen');

console.log(obj);
