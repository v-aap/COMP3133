const fs = require('fs');
const csv = require('csv-parser');

// File paths
const inputFile = 'input_countries.csv';
const canadaFile = 'canada.txt';
const usaFile = 'usa.txt';

// Task 3a: Delete canada.txt and usa.txt if they already exist
if (fs.existsSync(canadaFile)) {
    fs.unlinkSync(canadaFile);
    console.log(`${canadaFile} deleted`);
}

if (fs.existsSync(usaFile)) {
    fs.unlinkSync(usaFile);
    console.log(`${usaFile} deleted`);
}

// Task 3b and 3c: Read input_countries.csv and filter data
fs.createReadStream(inputFile)
    .pipe(csv())
    .on('data', (row) => {
        // Check the country and append to the respective file
        if (row['country'] && row['country'].toLowerCase() === 'canada') {
            fs.appendFileSync(canadaFile, `${row['country']},${row['year']},${row['population']}\n`);
        } else if (row['country'] && row['country'].toLowerCase() === 'united states') {
            fs.appendFileSync(usaFile, `${row['country']},${row['year']},${row['population']}\n`);
        }
    })
    .on('end', () => {
        console.log('CSV file processing completed.');
    });
