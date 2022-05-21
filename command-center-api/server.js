const express = require('express')
const { exec } =  require('child_process')
const cors = require('cors')
const app = express();

app.use(cors())

let script = command => exec(`make ${command}`,
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });

app.get('/:cmd', (req, res) => {
  script(req.params['cmd'])
  res.send('Ok')
});

app.listen(3001)
