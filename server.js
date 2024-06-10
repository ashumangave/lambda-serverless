require('dotenv').config()
const app = require('./app')
const http = require('http')

const httpServer = http.createServer(app)
const PORT = process.env.PORT;                  //Save the port number where your server will be listening

httpServer.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} mode on PORT ${PORT}`));

process.on('unhandledRejection', (err) => {
    console.log(err.name, err.message);
    console.log('Unhandled Rejection... Shutting Down');
    process.exit(1);

});
