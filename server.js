const express = require('express');

// gets dotenv module to use env vars.
require('dotenv').config()

const server = express();

// starts server on specified env var.
server.listen(process.env.PORT, (err) => {

	// logs error if one has occurred.
	console.log(err ? `Fatal server start-up error has occurred: ${err}` :
				`Server is listening on port ${process.env.PORT}...`);
});
