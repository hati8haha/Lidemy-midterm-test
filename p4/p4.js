// 請把解題函式寫在這個裡面
function solve(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !==j) {
        if (arr[i].id === arr[j].id) {
          if (typeof arr[i].value === 'number') {
            let newValue = []
            newValue.push(arr[i].value)
            if (typeof arr[j].value === 'number') {
              newValue.push(arr[j].value)
            } else {
              newValue.concat(arr[j].value)
            }
            arr[i].value = newValue
            arr[j] = ''
          } else {
            let newValue = arr[i].value
            if (typeof arr[j].value === 'number') {
              newValue.push(arr[j].value)
            } else {
              newValue.concat(arr[j].value)
            }
            arr[i].value = newValue
            arr[j] = ''
          }
        }
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if ( arr[i] === '') { 
      arr.splice(i, 1); 
    }
  }
  
  return arr;
}

// 事先為你準備好的測驗正確性的函式，如果你很確定不會改壞的話，可以改動
function test() {
  let isCorrect = true;
  for (let i = 0; i < testCases.length; i++) {
    const result = solve(testCases[i].input);
    if (!deepEqual(testCases[i].output, result)) {
      isCorrect = false;
      console.log('Wrong Answer!');
      console.log('預期答案：');
      console.log(JSON.stringify(testCases[i].output));
      console.log('你的答案：');
      console.log(JSON.stringify(result));
      break;
    }
  }
  if (isCorrect) {
    console.log('過關！');
  }

  function deepEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  }
}
