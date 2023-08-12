const fs = require('fs');
const path = require('path');

async function main() {
  try {
    var all_files = []
    const recursiveReader = (directoryPath) => {
      var pdf_files = [];
      let files = fs.readdirSync(directoryPath);
      for (var itemFile of files) {
        let filePath = path.join(directoryPath, itemFile);
        if (!itemFile.includes('.pdf') && 
          !itemFile.includes('.docx') && 
          !itemFile.includes('.pub') && 
          !itemFile.includes('.png') && 
          !itemFile.includes('.jpg') && 
          !itemFile.includes('.jpeg')&& 
          !itemFile.includes('.pptx')) {
          recursiveReader(filePath);
        } else {
          if(filePath.includes(".pdf")){
            pdf_files.push(filePath)
          }
        }
      }
      if(pdf_files.length !== 0 ){
        all_files.push(pdf_files)
      }
    };
    
    recursiveReader('C:/Users/evegu/Desktop/isala-client/public/assets/module');
  
    const flattenedArray = [].concat(...all_files);

    // Write the flattened array to a JSON file
    const jsonData = JSON.stringify(flattenedArray, null, 2); // Convert data to formatted JSON
    fs.writeFile('flattened_data.json', jsonData, 'utf8', (err) => {
      if (err) {
        console.error('Error writing JSON file:', err);
      } else {
        console.log('JSON file with flattened data has been saved.');
      }
    });

  } catch (error) {
    console.error('Error reading directory:', error);
  }
}

main();
