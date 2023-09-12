const items = document.querySelector(".modal-body");
const modalContent = document.querySelector(".modal-content");
const amount = document.querySelector(".amount");
const increase = document.querySelector(".add");
const decrease = document.querySelector(".subtract");
const cartIcon = document.querySelector(".cart-badge");
const submit = document.querySelector(".submit");
const cartBtn = document.querySelector(".cart_btn");

let quantity = 0;
modalContent.style.lineHeight = "10";
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
			modalContent.style.lineHeight = "2";
			items.innerHTML = "";
			return items.insertAdjacentHTML(
				"beforeend",
				`<div class="full-cart">
			<div class="full-cart-top">
				<img class="cart-product" src="images/image-product-1-thumbnail.jpg" alt="Selected item thumbnail">
				<div class="cart-details">
					<h2>Fall Limited Edition Sneakers</h2>
					<div class="cart-price">
						<p>$125.00 x ${sum}</p>
						<p>$${125 * sum}.00</p>
					</div>
				</div>
				<img class="cart-delete" src="images/icon-delete.svg" alt="delete button">
			</div>
			<div class="full-cart-bottom">
				<button class="btn checkout-btn">Checkout</button>
			</div>
		</div>`
			);
		} else {
			return;
		}
	};
	cartStatus();
	cartBadgeDisplay();
	quantity = 0;
	amount.innerHTML = quantity;
};

const cartBadgeDisplay = () => {
	if (quantity === 0) {
		cartIcon.style.display = "none";
		cartBtn.style.marginRight = "1.8rem";
	} else {
		cartBtn.style.marginRight = "0rem";
		cartIcon.style.display = "inline-block";
	}
};

cartBadgeDisplay();
increase.addEventListener("click", handleIncrease);
decrease.addEventListener("click", handleDecrease);
submit.addEventListener("click", handleSubmit);
