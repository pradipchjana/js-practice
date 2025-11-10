//for Identify where zebra and lion is located
const lionAndZebraPosition = "L Z";

let lion = "L";
let zebra = "Z";
for (let zebraFinder = 0; zebraFinder < lionAndZebraPosition.length; zebraFinder++) {

      if(lionAndZebraPosition[zebraFinder] === zebra){
        console.log("zebra in",zebraFinder);

      }
    
}

for (let lionFinder = 0; lionFinder < lionAndZebraPosition.length; lionFinder++) {

      if(lionAndZebraPosition[lionFinder] === lion){
        console.log("Lion in",lionFinder);
        
      }
}