const numBtn = document.getElementById('number-btn');


numBtn.addEventListener('click', () => {
  let num = document.forms.number.numbox.value;
  console.log(num * num);
});