var southbay=['bjs', 'mcdonalds', 'outback', 'panera', 'chipotle']
var losGatos = ['pizza my heart', 'steamers', 'icing on the cake', 'california cafe']

function Eats(arr){
  var index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

function Add(arr, place){
  arr.push(place)
  return arr;
}

function Remove(arr, place){
  if(arr.indexOf(place) > -1){
    var temp = arr.indexOf(place);
    arr[arr.indexOf(place)] = arr[arr.length - 1];
    arr[arr.length - 1] = temp
    arr.pop();
  }
  return arr;
}

console.log(Eats(losGatos))
