const obj1 = {
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: {
        sub1: 'sub1',
        sub2: 'sub2',
    }
}

const obj2 = {
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: {
        sub1: 'sub1',
        sub2: 'sub2',
    }
}

//funcion para comparar objetos anidados
function objCompare(object1, object2){
  var same = true;
  for (var [key, value] of Object.entries(object1)) {
    if(typeof value === 'object') {
      same = objCompare(object1[key], object2[key]);
    } else {
      if(object1[key] != object2[key]) same = false;
    }
  }
  
  return same;
}

//Este primer console.log compara los 2 objetos y el segundo los niveles inferiores
console.log(Object.entries(obj1).sort().toString() === Object.entries(obj2).sort().toString())
console.log(objCompare(obj1, obj2));
