// if we return data from JSON
// and we are not sure about its type, we can use "optional chaining"
// with casting

const fromJson = JSON.parse('{"x": { "xxu": 11 }, "y": "2"}');
const x: number = (fromJson.x?.xx || 0) as number;
console.log(x);
