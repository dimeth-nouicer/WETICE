const express = require('express');
const path = require('path');
const fs = require("fs");
const { exec } = require('child_process');
const http = require("http");
const noble = require('noble');

//init app
const app = express();

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//set public folder
app.use(express.static(path.join(__dirname, 'public')));


app.get('/hello', function (req, res) {
  http
  .get("http://localhost:8080/reasoning", (resp) => {
    let data = "";
    // A chunk of data has been recieved. Append it with the previously retrieved chunk of data
    resp.on("data", (chunk) => {
      
      data += chunk;
    });
    // when the whole response is received, parse the result and Print it in the console
    resp.on("end", () => {console.log(data);});
  })
  .on("error", (err) => {console.log("Error: " + err.message);
  });

});

/*app.get('/get-file', function (req, res) {
  if(err) {
			// Handle error
		}
		resp.send(JSON.stringify(data)); 

  http
  .get("http://localhost:8080/get-file", (resp) => {
    let data = "";
    // A chunk of data has been recieved. Append it with the previously retrieved chunk of data
    resp.on("data", (chunk) => {
      data += chunk;
    });
    // when the whole response is received, parse the result and Print it in the console
    resp.on("end", () => {console.log(JSON.parse(data));});
  })
  .on("error", (err) => {console.log("Error: " + err.message);
  });
});
*/
app.get('/', (req, res) => {
  res.render('index', {
      title: 'Devices'
  })
});

app.post('/', (req, res) => {
  /*console.log(req.body.name);
  fs.writeFile("C:/Users/MSI/Documents/work/Dev/wetice_app/data/result.txt", "req.body.name" , err => {
      if (err) throw err;
      console.log('File successfully written to disk');
  })  */
  });

app.listen(3000, () => {
  console.log('app listening at http://localhost:3000')
});