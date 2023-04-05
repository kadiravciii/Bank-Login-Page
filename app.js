const gonderButton = document.querySelector('.kirmizi');
const tcInput = document.getElementById('tc');
const kartNumarasiInput = document.getElementById('kart-numarasi');
const kartSifresiInput = document.getElementById('kart-sifresi');

gonderButton.addEventListener('click', function(e) {
  e.preventDefault(); // formun submit işlemini durdur

  const tc = tcInput.value;
  const kartNumarasi = kartNumarasiInput.value;
  const kartSifresi = kartSifresiInput.value;

  // Burada giriş koşullarını kontrol edebilirsiniz
  if (tc !== '12345678901' || kartNumarasi !== '1234567890123456' || kartSifresi !== '1234') {
    alert('Giriş başarısız. Lütfen tekrar deneyin.');
  } else {
    alert('Giriş başarılı. Hoş geldiniz!');
  }
});
