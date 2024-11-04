const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const mainColor = '#22b14c';
const secondaryColor = '#d61412';
const width = 600;
const height = 30;
const totalImages = 101;
const outputFolder = './sellImages';

// Create the output folder if it doesn't exist
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

for (let i = 0; i < totalImages; i++) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill with main color
  ctx.fillStyle = mainColor;
  ctx.fillRect(0, 0, width, height);

  // Calculate the width for the secondary color
  const secondaryWidth = Math.round((i / 100) * width);

  // Fill with secondary color on the right side
  ctx.fillStyle = secondaryColor;
  ctx.fillRect(width - secondaryWidth, 0, secondaryWidth, height);

  // Save the image as a PNG file in the buyImages folder
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(outputFolder, `sellImage_${i}.png`), buffer);
}

console.log(`Generated ${totalImages} images in the ${outputFolder} folder.`);