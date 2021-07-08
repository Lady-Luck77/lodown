'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: describes the property of objects that distinguishes them from other objects. 
 * The reference identity is nothing more than the use of the object reference as identity. 
 * Variables that are assigned a non-primitive value are given a reference to that value.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the collection.
 * 
 * */

function identity(value) {
    return value;
}

module.exports.identity = identity;

/**
 * typeOf:perator returns a string indicating the type of the unevaluated operand.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the collection.
 * 
 * */
 
 function typeOf(value) {
   
    if(typeof(value) === "string"){
        return "string";
        
    } else if(Array.isArray(value)) {
        return "array";
        
    } else if(typeof(value) === "boolean"){
          return "boolean";
          
    }  else if(typeof(value) === "undefined"){
        return "undefined";
        
    } else if(typeof(value) === "function"){
        return "function";
        
    } else if(value === null) {
       return "null";
       
    } else if(typeof(value) === "number"){
      return "number";
      
    } else if(value instanceof Date) {
        return "date";
        
    } else if(typeof value === "object") {
        return "object";
        
    } else {
        return "Unknown";
    }
  
}

module.exports.typeOf = typeOf;




/**
 * first:gives the first value of the collection. 
 * Simply means it returns the first value or the first method returns the first element in the collection that passes a given condition. 
 * In JavaScript, the array is first converted to a collection and then the function is applied to the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the collection.
 * 
 * */


function first(array, number) {
    
    // check if array is not an array or if number is not a positve number
    if (Array.isArray(array) === false || number < 0) {
    return [];
    
        //check if number is not a number
    } else if (typeof number !== "number") {
        return array[0];
    
        //otherwise return the first items from the array
    } else {
        return array.slice(0, number);
    }
    
}


module.exports.first = first;


/**
 * last:returns the last element of the selected elements.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the collection.
 * 
 * */

function last(array, number) {
    // check if array is not an array or if number is not a positve number
    if (Array.isArray(array) === false || number < 0 ) {
    return [];
        //check if number is not a number
    } else if (typeof number !== "number") {
        return array[array.length-1];
        //otherwise return the first items from the array
    } else if(number > array.length){
        return array;
    } else {
        return array.slice(array.length -number, array.length);
    }
}

module.exports.last = last;


/**
 * indexOf: method returns the first index at which a given 
 * element can be found in the array, or -1 if it is not present.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the collection.
 * 
 * */
 
  function indexOf(array, value){
    for(var i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
    }} return -1;
}
    
module.exports.indexOf = indexOf;

/**
 * contains:method returns a Boolean value indicating whether a node is a descendant of a given node,
 * i.e. the node itself, one of its direct children (childNodes), one of the children's direct children, and so on.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the collection.
 * 
 * */
 
 function contains(array, value) {
    //return true if array contains value (must use ternary operator in implentation)
    for(var i = 0; i < array.length ; i++){
    if (array[i] === value) {
        return true;
    } }
        return false;
}

module.exports.contains = contains;


 /**
 * unique:ead-only property returns a boolean that states whether the index allows duplicate keys.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the collection.
 * 
 * */
 
function unique(array) {
   
   //create new array variable & variable for array length
    var arr = [];
    var l = array.length;
    
    //Create for loop to pass through entire array
    for (var i = 0; i < l; i++)
        
        //create if statement to see if array index in new array is strictly equal to
        // -1 and check that the index in array is not equal to a string
        if (arr.indexOf(array[i]) === -1 && array[i] !== "")
            
            //pushed the new array indexes(elements) into new array
            arr.push(array[i]);
    
    //return new array
    return arr;
    
}

module.exports.unique = unique;

/**
 * filter: method creates a new array with all elements that pass the test implemented by the provided function.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the collection.
 * 
 * */
 
function filter(array, func) {
    const arr4 = [];
//create for loop to call function for each element in array
    for (let i = 0; i < array.length; i++) {
//unknon function passing in element, index and array
    if (func(array[i], i, array)) {
        arr4.push(array[i]);
        }
    }
    //return arr4 new array
    return arr4;
}

module.exports.filter = filter;

/**
 * reject: method returns a Promise object that is rejected with a given reason.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the collection.
 * 
 * */
 
 function reject(array, func) {
    //create new array
    let arr2 = [];
    for (let i = 0; i < array.length; i++) {
        
    if (!func(array[i], i, array)) {
        arr2.push(array[i]);
    }  
    }
        return arr2;
}

module.exports.reject = reject;

/**
 * partition:Helper function for quickSort().
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the collection.
 * 
 * */
 
function partition(array, func) {
    //create new passing array
    let passing = filter(array, function(value, i, array) {
        return func(value);
    });
   
  //create new failing array
    let failing = reject(array, function(value, i, array) {
        return func(value);
    });

    //create result array [passing, failing]
    let result = [passing, failing];
    
  
    
    return result;
}

module.exports.partition = partition;



/**
 * map: method creates a new array populated with the results of calling a 
 * provided function on every element in the calling array.
 * 
 * @param {Element, Index, Array} collection: The collection over which to iterate.The current element being processed in the array.
 * The index of the current element being processed in the array.The array map was called upon
 * @param {Function} action: The Function to be applied to each value in the collection.
 * 
 * */

function map(collection, func) {
    //create new array result
    let result = [];
    
    
    each(collection, function(value, i, collection) {
        result.push(func(value, i, collection));
    });
    
    
    return result;
}
module.exports.map = map;


/**
 * pluck: is used when we need to extract a list of a given property
 * 
 * @param {list, property name} collection: The collection over which to iterate. 
 * It is the property on which we need to aggregate the content.
 * @param {Function} action: The Function to be applied to each value in the collection.
 * 
 * */

function pluck(array, property) {
    
    let result = map(array, function(value, i, collection) {
        return value[property];
    });

    return result;
}

module.exports.pluck = pluck;

/**
 * every:  method tests whether all elements in the array pass the test implemented by the provided function. 
 * It returns a Boolean value.
 * 
 * @param {element, index, array} collection: The collection over which to iterate.
 * The current element being processed in the array. he index of the current element being processed in the array.
 * The array every was called upon.
 * @param {Function} action: The Function to be applied to each value in the collection.
 * 
 * */

function every(collection, func) {
    
    //create variable flag result to equal true
    let result = true;
    
    if (!func) {
        each(collection, function(value, i, collection) {
            if (value === false) {
             result = false;
            
        } 
            
        });
    
     } else {
         each(collection, function(value, i, collection) {
             if (func(value, i, collection) === false) {
                 result = false;
             }
         
             
         });
     }
 return result;
}
module.exports.every = every;

/**
 * some: method tests whether at least one element in the array passes the test implemented by the provided function. 
 * It returns true if, in the array, it finds an element for which the provided function returns true; 
 * otherwise it returns false. It doesn't modify the array. 
 * 
 * @param {Callback, Element, Index, Array & thisArg} collection: The collection over which to iterate.
 * A function to test for each element, taking three arguments: The current element being processed in the array.
 * The index of the current element being processed in the array. The array some() was called upon. 
 * A value to use as this when executing callbackFn.
 * @param {Function} action: The Function to be applied to each value in the collection.
 * 
 * */

function some(collection, func) {
    
    let result = false;
    
    if (!func) {
        each(collection, function(value, i, collection) {
            if (value === true) {
             result = true;
            
        } 
            
        });
    
     } else {
         each(collection, function(value, i, collection) {
             if (func(value, i, collection) === true) {
                 result = true;
             }
         
             
         });
     }
 return result;
}
module.exports.some = some;



/**
 * reduce: method executes a reducer function (that you provide) 
 * on each element of the array, resulting in a single output value.
 * 
 * @param {Accumulator, Current Value, Current Index, Source Array } collection: Your reducer function's returned value is assigned to the accumulator, 
 * whose value is remembered across each iteration throughout the array, 
 * and ultimately becomes the final, single resulting value.
 * @param {Function} action: The Function to be applied to each value in the collection.
 * 
 * */


function reduce(array, func, seed) {
 //check if seed exists/ not undefined
    if(seed !== undefined) {
       //if it does, then loop through array
       for(var i = 0; i < array.length; i++) {
           //reassign seed to be value of function call 
          //call the func function on seed, value, index
          seed = func(seed, array[i], i);
       }
       //return seed
       return seed;
    } else {
        //if no seed given, first value in array is the seed
        seed = array[0];
        //if it does, then loop through array
        for (var i = 1; i < array.length; i++) {
          //reassign seed to be value of function call 
          //call the func function on seed, value, index
          seed = func(seed, array[i], i);
        }
        return seed;
    }
}

module.exports.reduce = reduce;

/**
 * extend: method moves the focus of the selection to a specified point. 
 * The anchor of the selection does not move. The selection will be from the anchor to the new focus, regardless of direction.
 * 
 * @param {node, offset} The node within which the focus will be moved. 
 * The offset position within node where the focus will be moved to. If not specified, 
 * the default value 0 is used.
 * @param {Function} action: The Function to be applied to each value in the collection.
 * 
 * */


function extend(obj1, ...obj2) {
    var newObj = Object.assign(obj1, ...obj2);
    return newObj;
}

module.exports.extend = extend;

