// 把程式碼寫在這檔案裡面
const randomFoods = ['拉麵', '泡麵', '乾麵', '陽春麵', '牛肉麵']



document.querySelector('body').addEventListener('click', function(e) {
  if (e.target === document.querySelector('.add')) {
    let inputFood = document.querySelector('.input-food').value
    if (inputFood === '') {
      alert('必須輸入食物名稱')
    } else {
      let newFood = document.createElement("li");
      newFood.innerHTML = `${inputFood} <button>刪除</button>`
      document.querySelector('ol').appendChild(newFood)
      document.querySelector('.input-food').value = ''
    }
  }

  if (e.target === document.querySelector('.remove-all')) {
    document.querySelector('ol').remove(document.querySelectorAll('li'))
  }

  if (e.target === document.querySelector('.random')) {
    let foodIndex = Math.random()
    foodIndex*=5
    foodIndex = Math.ceil(foodIndex)-1
    let newFood = document.createElement("li")
    newFood.innerHTML = `${randomFoods[foodIndex]} <button>刪除</button>`
    document.querySelector('ol').appendChild(newFood)
    document.querySelector('.input-food').value = ''
  }
}, false);
