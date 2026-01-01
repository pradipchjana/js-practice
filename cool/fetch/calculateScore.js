const sampleData = {
  "1": { "1": [Object], "2": [Object] },
  "2": { "1": [Object], "2": [Object] },
  "3": { "1": [Object], "2": [Object] },
  "4": { "1": [Object], "2": [Object] },
  "5": { "1": [Object], "2": [Object] },
  "6": { "1": [Object], "2": [Object] },
  "7": { "1": [Object] },
  "8": { "1": [Object], "2": [Object] },
  "9": { "1": [Object], "2": [Object] },
  "10": { "1": [Object] },
  "11": { "1": [Object], "2": [Object] },
  "12": { "1": [Object], "2": [Object] },
  "13": { "1": [Object], "2": [Object] },
  "14": { "1": [Object], "2": [Object] },
  "16": { "1": [Object], "2": [Object] },
  "17": { "1": [Object] },
  "22": { "1": [Object], "2": [Object] },
};

const calculateStar = () => {
  let total = 0;
  for (const key in sampleData) {
    total += Object.keys(sampleData[key]).length; 
    
  }
  console.log(total);
  
};

console.log(sampleData);
