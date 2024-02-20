const allSeats = document.getElementsByClassName("seat");
// console.log(allSeats);

for (const seat of allSeats) {
  seat.addEventListener("click", function (event) {
    const seatName = event.target.innerText;
    console.log(seatName);
    const selectedContainer = document.getElementById(
      "selected-seat-container"
    );

    if (getValueById("cart") > 3) {
      alert("You Can Buy maximum four Seats Only");
      return;
    }

    //  event.target.setAttribute("disabled", false);
    event.target.style.backgroundColor = "green";

    const div = document.createElement("div");
    div.classList.add("selected-seats");
    div.classList.add("flex");
    div.classList.add("justify-between");
    div.classList.add("gap-1");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p1.innerText = seatName;
    p2.innerText = "Economy";
    p3.innerText = 550;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    selectedContainer.appendChild(div);
    const price = p3.innerText;
    updateTotalCost(price);
    updateSeatCount();
    updateLeftSeat();
    updateGrandTotal();
  });
}

// useful functions that are called

function updateTotalCost(price) {
  const previousTotal = document.getElementById("total-cost").innerText;
  const convertedTotal = parseInt(previousTotal);
  const convertedPrice = parseInt(price);
  const sum = convertedTotal + convertedPrice;
  document.getElementById("total-cost").innerText = sum;
}

function updateSeatCount() {
  const defaultSeatCount = document.getElementById("cart").innerText;
  const convertedDefaultSeatCount = parseInt(defaultSeatCount);
  document.getElementById("cart").innerText = convertedDefaultSeatCount + 1;
}

function getValueById(id) {
  const targetElement = document.getElementById(id).innerText;
  return parseInt(targetElement);
}

function updateLeftSeat() {
  const defaultLeft = document.getElementById("left").innerText;
  const convertDefaultLeft = parseInt(defaultLeft);
  document.getElementById("left").innerText = convertDefaultLeft - 1;
}

function updateGrandTotal(control) {
  const previousTotal = document.getElementById("total-cost").innerText;
  const convertedTotal = parseInt(previousTotal);
  const couponCode = document.getElementById("coupon-code").value;
  if (control) {
    if (couponCode == "NEW15") {
      const discount = convertedTotal * 0.15;
      document.getElementById("grand-total").innerText =
        convertedTotal - discount;
    } else if (couponCode == "Couple 20") {
      const discount = convertedTotal * 0.2;
      document.getElementById("grand-total").innerText =
        convertedTotal - discount;
    } else {
      alert("Invalid Coupon Code No Discount");
      return;
    }
  } else {
    document.getElementById("grand-total").innerText = convertedTotal;
  }
}

// input value Check





function submission(control) {
  if (control) {
    alert("successfull transaction");
  } else {
    ("try again");
  }
}
