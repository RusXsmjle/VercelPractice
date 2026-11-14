let total = 0;

function addPayment() {
  const name = document.getElementById("name").value.trim();
  const amount = Number(
    document.getElementById("amount").value
  );

  if (!name || !Number.isFinite(amount) || amount <= 0) {
    alert("Vui lòng nhập tên và số tiền hợp lệ");
    return;
  }

  total = total + amount;

  document.getElementById("total").textContent =
    total.toLocaleString("vi-VN");

  const item = document.createElement("li");
  item.textContent =
    `${name}: ${amount.toLocaleString("vi-VN")} VND`;

  document.getElementById("payments").appendChild(item);

  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";
}