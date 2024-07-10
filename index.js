const express = require('express');
const port = 3000;
const app = express();  
const cron = require('node-cron');


const sendMessage = () =>{
    cron.schedule('*/10 * * * * *', () => {
        console.log('running a task every minute');
    });
}

sendMessage();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

