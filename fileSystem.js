let fs =  require("fs");

//printing contents of file.
let programContent = fs.readFileSync("program.js");
console.log(programContent.toString());

//create new file.
fs.openSync("input.txt","w");

//create / writing in file.
//no file exist -> create new ; file exist -> content replace.
fs.writeFileSync("input.txt","Hi This is Lakshy Gupta");

//update file
fs.appendFileSync("input.txt","\nHi Lakshy, How are you ?");

//create new folder
fs.mkdirSync("Folder");
fs.writeFileSync("Folder/file.txt","Oh!! All this is created using NodeJS");

//display all files in folder
let content = fs.readdirSync("Folder");
for(var i=0;i<content.length;i++){
    console.log(content[i] +" -> " + fs.readFileSync(`Folder/${content[i]}`));
}
//delete files abc2.txt and abc1.txt
for(var i=0;i<content.length-1;i++){
    fs.unlinkSync("Folder/"+content[i])
}

//remove folder
fs.rmdirSync("Folder")
 
//does path exist or not ?
let doesPathExist = fs.existsSync("file.txt");
console.log(doesPathExist);
doesPathExist = fs.existsSync("input.txt");
console.log(doesPathExist);

//it check if path is of file or folder.
let detailsObj = fs.lstatSync(__dirname + "\\fileSystem.js");
let ans =  detailsObj.isFile();
console.log(ans);
ans = detailsObj.isDirectory();
console.log(ans);

// Make 10 folder and create a readme file in each of them.
for(let i=0;i<=10;i++){
    let dirPathtoMake = `Lecture-${i}`;
    // create
    fs.mkdirSync(dirPathtoMake);
    fs.writeFileSync(dirPathtoMake + "\\"+"readme.md", `readme for ${dirPathtoMake}`);
    // remove
    fs.unlinkSync(dirPathtoMake+"\\"+"readme.md");
    fs.rmdirSync(dirPathtoMake);
}

