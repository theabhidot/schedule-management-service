const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
    console.log('Uncaught Exception! Shutting down...');
    console.log(err.name, err.message);
    process.exit();
});

dotenv.config({ path: './config.env' });

const app = require('./app');

const port = process.env.PORT || 5000;

/** Start the server */
const server = app.listen(port, () => {
    console.log(`Schedule management service running on port ${port}.`);
});

process.on('unhandledRejection', (err) => {
    console.log('Unhandled Rejection! Shutting down...');
    console.log(err.name, err.message);
    server.close(() => process.exit());
});

process.on('SIGTERM', () => {
    console.log('👋 SIGTERM received. Shutting down gracefully...');
    server.close(() => {
        console.log('🚨 Process terminated!');
    });
});
