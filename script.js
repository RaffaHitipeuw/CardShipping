let priceElem = document.getElementById("price");
let subTotalElem = document.getElementById("subtotal");
let discountElem = document.getElementById("discount");
let shipingElem = document.getElementById("shipping");
let totalElem = document.getElementById("total");
let quantityElem = document.getElementById("quantity");
let textVoucherElem = document.getElementById("textVoucher");
let codeVoucherElem = document.getElementById("codeVoucher");

subTotalElem.innerHTML = priceElem.innerHTML;

function totalAll(subTotal, shiping = 0, discount = 0) {
  return Number(subTotal) + Number(shiping) - Number(discount);
}

totalElem.innerHTML = totalAll(subTotalElem.innerHTML, shipingElem.innerHTML, discountElem.innerHTML);

let tambah = (num) => {
  let number = parseFloat(quantityElem.value);
  number += num;
  quantityElem.value = number;

  let hasil = number * priceElem.innerHTML;
  subTotalElem.innerHTML = hasil;
  console.log(subTotalElem.innerHTML);
  console.log(shipingElem.innerHTML);
  console.log(discountElem.innerHTML);
  
  let total = totalAll(subTotalElem.innerHTML, shipingElem.innerHTML, discountElem.innerHTML);
  totalElem.innerHTML = total;
}

let kurang = (num) => {
  let number = parseFloat(quantityElem.value);
  number -= num;
  quantityElem.value = number;
  
  let hasil = number * priceElem.innerHTML;
  subTotalElem.innerHTML = hasil;
  let total = totalAll(subTotalElem.innerHTML, shipingElem.innerHTML, discountElem.innerHTML);
  totalElem.innerHTML = total;
}


function buttonvoucher() {
  let inputvoucher = codeVoucherElem.value;
  if (inputvoucher === "abu-dzar") {
    textVoucherElem.innerHTML = "Voucher 20% Berhasil";
    textVoucherElem.classList.add("success");
    discountElem.innerHTML = 2000;
  }else if (inputvoucher === "fulan"){
    textVoucherElem.innerHTML = "Voucher 30% Berhasil";
    textVoucherElem.classList.remove("applied", "reject");
    textVoucherElem.classList.add("success");
    discountElem.innerHTML = 5000;
  } else{
    textVoucherElem.innerHTML = "Voucher Salah";
    textVoucherElem.classList.remove("success");
    textVoucherElem.classList.add("reject");
  }
}