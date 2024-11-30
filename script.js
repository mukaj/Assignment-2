function calculateArea(width, height) {
  while (!isNaN(width) || width <= 0) {
    width = prompt("Please enter a positive numeric value for width");
  }
  while (!isNaN(height) || height <= 0) {
    height = prompt("Please enter a positive numeric value for height");
  }

  console.log(width * height);
  return width * height;
}
