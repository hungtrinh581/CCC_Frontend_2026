function startGame() {
  const secret = Math.floor(Math.random() * 100) + 1;
  const guessed = [];
  let attempts = 0;

  while (attempts < 7) {
    const raw = prompt('Nhập số 1-100');
    if (raw === null) return;

    const value = Number(raw);
    if (!Number.isInteger(value) || value < 1 || value > 100) {
      alert('Chỉ chấp nhận số 1-100');
      continue;
    }

    if (guessed.includes(value)) {
      alert('Bạn đã đoán số này rồi!');
      continue;
    }

    guessed.push(value);
    attempts++;

    if (value === secret) {
      alert('Bạn đoán đúng sau ' + attempts + ' lan!');
      return;
    }

    alert(value < secret ? 'Cao hơn' : 'Thấp hơn');
  }

  alert('Hết lượt! Đáp án la ' + secret);
}
