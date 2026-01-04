const whatIsInAName = (array, obj) => array.filter((ele)=>Object.entries(obj).every(([key, value]) => Object.hasOwn(ele, key) && ele[key] === value))

