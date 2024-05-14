var fs = require('fs');

fs.readFile("a.txt", "utf-8", (err,data)=>{
    const cleanedData = data.replace(/\s+/g, ' ').trim();
    console.log(cleanedData);
    fs.writeFile('a.txt', cleanedData, function(err) {
        if (err) {
            return console.error(err);
        }
        console.log('File cleaned successfully');
    });
})