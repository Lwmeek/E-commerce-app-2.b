const items = document.querySelector(".modal-body");
const amount = document.querySelector(".amount");
const increase = document.querySelector(".add");
const decrease = document.querySelector(".subtract");
const cartIcon = document.querySelector(".cart-badge");
const submit = document.querySelector(".submit");

let quantity = 0;
items.insertAdjacentHTML("beforeend", "<p>Your cart is empty.<p>");

amount.innerHTML = quantity;
cartIcon.innerHTML = quantity;

console.log(cartIcon.innerHTML);
console.log(amount.innerHTML);

const handleIncrease = () => {
	quantity++;
	amount.innerHTML = quantity;
};
const handleDecrease = () => {
	if (quantity === 0) {
		return (amount.innerHTML = 0);
	} else {
		quantity--;
		return (amount.innerHTML = quantity);
	}
};

const handleSubmit = () => {
	let sum = 0;
	sum = parseInt(`${cartIcon.innerHTML}`, 10) + quantity;
	cartIcon.innerHTML = sum;
	const cartStatus = () => {
		if (quantity > 0) {
			items.innerHTML = "";
			return items.insertAdjacentHTML("beforeend", "<p>Your cart is full.<p>");
		} else {
			return;
		}
	};
	cartStatus();
	quantity = 0;
	amount.innerHTML = quantity;
};

increase.addEventListener("click", handleIncrease);
decrease.addEventListener("click", handleDecrease);
submit.addEventListener("click", handleSubmit);
