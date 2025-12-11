const express = require('express');
const cors = require('cors');
const mainRouter = require('./routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();


app.use(cors());  
app.use(express.json()); 

app.use('/api/v1', mainRouter);


app.use(errorHandler);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Blogify API running on port ${PORT}`);
  console.log(`API Base URL: http://localhost:${PORT}/api/v1`);
});