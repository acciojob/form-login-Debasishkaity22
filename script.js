function getFormvalue() {
    //Write your code here
	const form1=document.getElementById("form1");
	let first=form1["fname"].value;
     let last=form1["lname"].value;
	alert(first+" "+last);
}
document.getElementById('myForm').addEventListener("submit",function(ev){
ev.preventDefault();
	getFormvalue();
})
