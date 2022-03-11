const newobj = new XMLHttpRequest ();
newobj.onreadystatechange = function() {
    if(newobj.readyState == 4 && newobj.status == 200) {
        
    }
}
newobj.open("GET", "data.json");
newobj.send();
