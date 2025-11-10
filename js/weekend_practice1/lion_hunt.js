// Lion and zebra find 
const testCase1 = "LZ";          
const testCase2 = "Z L";             
const testCase3 = "L     Z";           
const testCase4 = "L     L";         
const testCase5 = "Z   Z   Z";         
const testCase6 =  "L  ZL Z";
const testCase7 = "  ";
const testCase8 = " Z  L L  Z";

const testCaseToUse = testCase8;
const lion = "L";
const zebra = "Z";

let distance = -1;
let ifNoZebraOrLion = -1;
let nearestZebra = 0;
let shortestDistance = Infinity;

for (let lionFinder = 0; lionFinder < testCaseToUse.length; lionFinder++) {

  
  let zebraFinder = 0;
  while (zebraFinder < testCaseToUse.length && testCaseToUse[lionFinder] === lion) {

    if(testCaseToUse[zebraFinder] === zebra){

      distance = ((lionFinder < zebraFinder) ? (zebraFinder - lionFinder) : (lionFinder - zebraFinder)) - 1;

      //console.log(distance);
      shortestDistance = (shortestDistance < distance) ? shortestDistance : distance;
      //console.log(smallDistance);

    }
    zebraFinder++;
  }
  
}
nearestZebra = (distance === -1) ? ifNoZebraOrLion : shortestDistance;

console.log("Input: ", testCaseToUse, "Output: ",nearestZebra);

//console.log(lionAndZebraPosition.length);

