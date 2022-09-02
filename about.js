console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has beem submitted!')
}
const sayHello = () => {
	alert('Hello! I am a Duck!')
}
let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

duck.addEventListener('mouseover',(sayHello))