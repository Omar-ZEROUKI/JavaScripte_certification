const diffArray = (arr1, arr2) => [...arr1.filter((ele)=>!arr2.includes(ele)), ...arr2.filter((ele)=>!arr1.includes(ele))]

