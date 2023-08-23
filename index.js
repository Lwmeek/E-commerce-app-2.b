const items = document.querySelector(".modal-body");
const amount = document.querySelector(".amount");
const increase = document.querySelector(".add");
const decrease = document.querySelector(".subtract");

let quantity = 0;
amount.innerHTML = `${quantity}`;

const cartStatus = () => {
	if (quantity > 0) {
		return items.insertAdjacentHTML("beforeend", "<p>Your cart is full.<p>");
	} else {
		return items.insertAdjacentHTML("beforeend", "<p>Your cart is empty.<p>");
	}
};
cartStatus();
console.log(amount.innerHTML);

const handleIncrease = () => {
	quantity++;
	return (amount.innerHTML = `${quantity}`);
};
const handleDecrease = () => {
	if (amount.innerHTML === "0") {
		return (amount.innerHTML = 0);
	} else {
		quantity--;
		return (amount.innerHTML = `${quantity}`);
	}
};

increase.addEventListener("click", handleIncrease);
decrease.addEventListener("click", handleDecrease);
