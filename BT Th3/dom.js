// === PHẦN 5: THAO TÁC DOM & SỰ KIỆN ===

// 5.1: Lấy các phần tử từ HTML
const statusEl = document.getElementById("status");
const btnHello = document.getElementById("btnHello");
const btnRed = document.getElementById("btnRed");
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

console.log("\n--- DOM & Sự kiện (Phần 5) ---");

// 5.2: Sự kiện click - Nút "Chào"
btnHello.addEventListener("click", function () {
  statusEl.textContent = "Xin chào! Đây là nội dung được thay đổi bằng JavaScript.";
  console.log("Đã nhấn nút 'Chào'");
});

// 5.3: Sự kiện click - Nút đổi màu nền
btnRed.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
  console.log("Đã đổi màu nền thành đỏ");
});

// 5.4: Sự kiện input - Gõ tên, hiện lời chào
nameInput.addEventListener("input", function () {
  const value = nameInput.value;
  greeting.textContent = "Xin chào, " + value + "!";
  console.log("Gõ: " + value);
});

console.log("Các sự kiện đã được thiết lập thành công!");
