var fs = require("fs")

fs.writeFile('a.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

fs.readFile("a.txt", "utf-8", (err,data)=>{
    console.log(data)
})