const arr1 = [7653,6734.344, 'hello' ,true, null];

console.log(arr1);
const fruits = [ 'apple','mango', 'lichi','guava',"kiwi"];
console.log(fruits[3]);
console.log(fruits.indexOf('kiwi'));
console.log( fruits.at(-2));

//slicing 
console.log(fruits.slice(1,4));
console.log(fruits.slice(1));

price ='₹8932.4746';
console.log(price.slice('1'));

// adding elements
fruits.push('banna');//adds element at te end

fruits.unshift('papaya');// adds element at the beginning
console.log(fruits);
fruits.poh('banna');//remove element at te end

fruits.shift('papaya');// remove element at the beginning
console.log(fruits);