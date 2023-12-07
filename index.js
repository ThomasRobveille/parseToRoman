// Information à connaitre pour les chiffres romain 

/*
I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1000

*/

function parseToRoman(number){
  let roman = "";
  let numberToTransform = number;
  while(numberToTransform > 999){
    numberToTransform -= 1000;
    roman += "M"
  }
  while(numberToTransform > 499){
    numberToTransform -= 500
    roman += "D"
  } 
  while(numberToTransform > 99){
    numberToTransform -= 100
    roman += "C"
  }
  while(numberToTransform > 49){
    numberToTransform -= 50
    roman += "L"
  }
  while(numberToTransform > 9){
    numberToTransform -= 10
    roman += "X"
  }
  if(numberToTransform == 4){
    roman += "IV"
    return console.log(roman)
  }
  while(numberToTransform > 4){
    numberToTransform -= 5
    roman += "V"
  }
  console.log(numberToTransform)
  while(numberToTransform > 1){
    numberToTransform -= 1
    roman += "I"
  }

  return console.log(roman)
}

parseToRoman(3248)



