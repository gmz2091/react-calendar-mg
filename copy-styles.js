const fs = require('fs');

fs.copyFile('src/components/Calendar/index.css', 'build/components/Calendar/index.css', (error) => {
  if (error) {
    throw error;
  }
  // eslint-disable-next-line no-console
  console.log('Calendar.css copied successfully.');
});