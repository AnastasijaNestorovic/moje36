const URL = process.argv[2];
location = process.argv[3];
if(!URL || !location){
    console.error("Nije dadat URL ni lokacija");
}
console.log(URL);
console.log(location);