let path = require('path');

//path.join
for(let i=0;i<=10;i++){
    let dirPathtoMake = `Lecture-${i}`;
    fs.mkdirSync(dirPathtoMake);
    fs.writeFileSync(path.join(dirPathtoMake,"readme.md"), `readme for ${dirPathtoMake}`);
}

//extname, basename
let ext = path.extname(path.join(__dirname,"abc.js"));
console.log(ext);
let name = path.basename(__dirname);
console.log(name);
name = path.basename(path.join(__dirname,"abc.js"));
console.log(name);

