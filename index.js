const fs = require("fs");

fs.writeFile("hello.txt", "Hello World!", (err) => {
  if(err)
  {
    console.log(err);
  }
  else{
    console.log("File created successfully");
      fs.readFile("hello.txt", "utf8", (err, file) => {
        if(err)
        {
          console.log(err);
        }
        else{
          console.log(file);
  }
});
  }
});