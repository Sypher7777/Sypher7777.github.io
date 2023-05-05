// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here

  //applyFilter(decreaseBlue)
  applyFilterNoBackground(reddify)
  //applyFilter(increaseGreenByBlue)



  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here

function applyFilter(filterFunction) {
  for (var i = 0; i < image.length; i++) {
    var colors = image[i]
    for (var r = 0; r < colors.length; r++) {
      var rgbString = colors[r];
      var rgbNumbers = rgbStringToArray(rgbString);
      filterFunction(rgbNumbers)
      rgbString = rgbArrayToString(rgbNumbers);
      colors[r] = rgbString;
    }
  }
}


// TODO 7: Create the applyFilterNoBackground function

function applyFilterNoBackground(filterFunction) {
  var bgcolor = image[0][0]

  for (var i = 0; i < image.length; i++) {
    var colors = image[i]
    for (var r = 0; r < colors.length; r++) {
      if (rgbString !== bgcolor) {
        var rgbString = colors[r];
      }
      var rgbNumbers = rgbStringToArray(rgbString);
      filterFunction(rgbNumbers)
      rgbString = rgbArrayToString(rgbNumbers);
      colors[r] = rgbString;
    }
  }
}

// TODO 5: Create the keepInBounds function

function keepInBounds(num) {
  var max = Math.max(0, num)
  var min = Math.min(num, 225)
  return min;
}

// TODO 3: Create reddify function

function reddify(arr) {
  arr[RED] = 200;
  arr[0] = 200;
}


// TODO 6: Create more filter functions
function increaseGreenByBlue(arr) {
  var gb = arr[GREEN] + arr[BLUE]
  // gb is green + blue
  var kibgb = keepInBounds(gb)
  // K.I.B. is keep in bounds function
  console.log(kibgb);
  arr[GREEN] = kibgb;
}

function decreaseBlue(arr) {
  var deBlue = arr[BLUE] - 50
  // deBlue is decrease in blue
  var kibdeBlue = keepInBounds(deBlue)
  //kibdeBlue is the keep in bounds function with the decrease blue variable
  console.log(kibdeBlue);
  arr[BLUE] = kibdeBlue;
}

// CHALLENGE code goes below here
