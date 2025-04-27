const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to delete a directory recursively
function deleteFolderRecursive(directoryPath) {
  if (fs.existsSync(directoryPath)) {
    fs.readdirSync(directoryPath).forEach((file) => {
      const curPath = path.join(directoryPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        // Recursive call
        deleteFolderRecursive(curPath);
      } else {
        // Delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(directoryPath);
    console.log(`Deleted directory: ${directoryPath}`);
  } else {
    console.log(`Directory does not exist: ${directoryPath}`);
  }
}

// Delete the .next directory
const nextDir = path.join(__dirname, '.next');
console.log(`Attempting to delete: ${nextDir}`);
try {
  deleteFolderRecursive(nextDir);
  console.log('.next directory successfully deleted');
} catch (error) {
  console.error('Error deleting .next directory:', error);
}

// Run npm commands
console.log('Running npm install...');
try {
  execSync('npm install', { stdio: 'inherit' });
  console.log('npm install completed successfully');
} catch (error) {
  console.error('Error running npm install:', error);
}

console.log('Running npm run build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('npm run build completed successfully');
} catch (error) {
  console.error('Error running npm run build:', error);
}

console.log('Rebuild process completed');
