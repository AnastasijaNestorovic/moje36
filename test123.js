/*const path = require ('path');
const testPath = 'C:\Users\38165\Programiranje\Front-End Development\36 NodeJS\moje\moje36\tekst.txt';

const baseName = path.basename(testPath);
console.log(baseName);

const extension = path.extname(testPath);
console.log(extension);
const location = path.dirname(testPath);
console.log(location);
const pathInfo = path.parse(testPath);
console.log(pathInfo);
console.log(pathInfo.ext);*/

/*const os = require ('os');

console.log(os.platform());

console.log(os.totalmem());
console.log(os.freemem());

console.log(os.arch());
console.log(os.cpus());
console.log(os.endianness);*/

/*const fs = require ('fs');

fs.readFile('tekst.txt', 'utf-8', (err, data) =>{
if(err) {
    throw err;
}
console.log('sadrzaj:');
console.log(data);
});

const sadrzaj = 'Neki novi sadrzaj koji ce da ispise: ';
const argument = process.argv[2]

;fs.writeFile('tekst1.txt', sadrzaj + argument, (err) => {
    if(err) {
        throw err;
    }
    console.log('ispisan je novi sadrzaj');
})*/

/*const url = require('url');

const testUrl = new URL('C:\Users\38165\Programiranje\Front-End Development\36 NodeJS\moje\moje36\index.html')

console.log(testUrl.host);
console.log(testUrl.hostname);
console.log(testUrl.port);
console.log(testUrl.href);
console.log(testUrl.pathname);
console.log(testUrl.search);
testUrl.searchParams.forEach((name, value) => {
    console.log(name);
    console.log(value);
});

const http = require('http');

const server = http.createServer((req, res) => {
});

server.listen("5000", () => {
    console.log('pozvan je port 5000');
});*/

