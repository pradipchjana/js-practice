// Lion and zebra find 
const testCase1 = "LZ";          
const testCase2 = "Z L";             
const testCase3 = "L     Z";           
const testCase4 = "L     L";         
const testCase5 = "Z   Z   Z";         
const testCase6 =  "L  ZL Z";

const testCaseToUse = testCase6;
const lion = "L";
const zebra = "Z";

let distance = -1;
let ifNoZebraOrLion = -1;
let nearestZebra = 0;
let smallDistance = Infinity;

for (let lionFinder = 0; lionFinder < testCaseToUse.length; lionFinder++) {

  if(testCaseToUse[lionFinder] === lion){

    for (let zebraFinder = 0; zebraFinder < testCaseToUse.length; zebraFinder++) {

      if(testCaseToUse[zebraFinder] === zebra){

        distance = ((lionFinder < zebraFinder) ? (zebraFinder - lionFinder) : (lionFinder - zebraFinder)) - 1;

        //console.log(distance);
        smallDistance = (smallDistance < distance) ? smallDistance : distance;
        //console.log(smallDistance);

      }
    }
  }
}
nearestZebra = (distance === -1) ? ifNoZebraOrLion : smallDistance;

console.log("Input: ", testCaseToUse, "Output: ",nearestZebra);

//console.log(lionAndZebraPosition.length);
