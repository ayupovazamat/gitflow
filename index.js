const btn = document.createElement("button");
btn.innerHTML = "Git Flow";
btn.className = 'btn';
document.body.appendChild(btn);

const btnElem = document.querySelector('btn');
btnElem.addEventListener("click", function () {
alert('git flow')
});