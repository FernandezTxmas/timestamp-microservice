// index.js
const express = require('express');
const app = express();

// Enable CORS
const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

// Serve static files
app.use(express.static('public'));

// Homepage route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// API endpoint for handling timestamp requests
app.get('/api/:date?', (req, res) => {
  const { date } = req.params;

  // Check for an empty date
  if (!date) {
    const currentDate = new Date();
    return res.json({
      unix: currentDate.getTime(),
      utc: currentDate.toUTCString(),
    });
  }

  // Attempt to parse the date using both new Date(date) and new Date(parseInt(date))
  const parsedDate = new Date(date);
  const parsedTimestampDate = new Date(parseInt(date));

  // Check if either parsing is successful
  if (!isNaN(parsedDate.getTime()) || !isNaN(parsedTimestampDate.getTime())) {
    const selectedDate = !isNaN(parsedDate.getTime()) ? parsedDate : parsedTimestampDate;
    return res.json({
      unix: selectedDate.getTime(),
      utc: selectedDate.toUTCString(),
    });
  } else {
    // Handle invalid date
    return res.json({ error: 'Invalid Date' });
  }
});

// Start the server
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
