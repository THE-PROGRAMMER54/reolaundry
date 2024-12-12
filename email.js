// Inisialisasi emailjs hanya sekali saat halaman dimuat
(function () {
  emailjs.init({
    publicKey: "6oKYdeUGlp8rPhA1m",
  });
})();

// Tangani pengiriman form
function kirim(event) {
  event.preventDefault();

  const nama = document.querySelector("#nama").value.trim();
  const komentar = document.querySelector("#komentar").value.trim();

  const params = {
    nama,
    komentar,
  };

  const serviceid = "service_hrf9etr"; // Gantilah dengan service ID Anda
  const templateid = "template_m2zcf7l"; // Gantilah dengan template ID Anda

  if (!nama || !komentar) {
    Swal.fire({
      title: "Failed",
      text: "semua form harus diisi",
      icon: "error",
    });
    return;
  }

  document.querySelector(".loading").classList.remove("isntLoading");
  document.querySelector(".submit-btn").disabled = true;
  emailjs
    .send(serviceid, templateid, params)
    .then((res) => {
      Swal.fire({
        title: "Success",
        text: "Komentar anda berhasil dikirim",
        icon: "success",
      });
      // console.log(res);
    })
    .catch((err) => {
      // console.error(err);
      Swal.fire({
        title: "Failed",
        text: "komentar anda gagal dikirim, silahkan coba lagi",
        icon: "error",
      });
    })
    .finally(() => {
      document.querySelector(".loading").classList.add("isntLoading");
      document.querySelector(".submit-btn").disabled = false;
      document.querySelector("#form").reset();
    });
}
