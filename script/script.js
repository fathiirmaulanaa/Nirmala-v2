document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Burger animation
    burger.classList.toggle("toggle");
  });
});

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-J1PSPCEVFS");

document
  .getElementById("whatsappForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var notelp = document.getElementById("notelp").value;
    var gender = document.getElementById("gender").value;
    var alamat = document.getElementById("alamat").value;
    var area = document.querySelector('input[name="area"]:checked').value;
    var jam = document.getElementById("jam").value;
    var layanan = document.getElementById("layanan").value;
    var durasi = document.querySelector('input[name="durasi"]:checked').value;
    var pembayaran = document.querySelector(
      'input[name="pembayaran"]:checked'
    ).value;

    var whatsappUrl = `https://api.whatsapp.com/send?phone=6281936626336&text=*FORM%20BOOKING*%0A%0A-%20Nama%20Lengkap%20%3A%20${encodeURIComponent(
      name
    )}%0A-%20No.%20Telp%20%3A%20${encodeURIComponent(
      notelp
    )}%0A-%20Gender%20%3A%20${encodeURIComponent(
      gender
    )}%0A-%20Alamat%20Lengkap%20%3A%20${encodeURIComponent(
      alamat
    )}%0A-%20Area%20%3A%20${encodeURIComponent(
      area
    )}%0A-%20Jam%20Pemesanan%20%3A%20${encodeURIComponent(
      jam
    )}%20WIB.%0A-%20Layanan%20Nirmala%20%3A%20${encodeURIComponent(
      layanan
    )}%0A-%20Durasi%20Layanan%20%3A%20${encodeURIComponent(
      durasi
    )}%0A-%20Type%20Pembayaran%20%3A%20${encodeURIComponent(
      pembayaran
    )}%0A%20_Jika%20ada%20penambahan%20layanan%20dimohon%20konfirmasi%20admin_
    `;

    window.open(whatsappUrl, "_blank");
    setTimeout(function() {
      location.reload();
  }, 2000);
  });

document.getElementById("showFormBtn").onclick = function () {
  var form = document.getElementById("formcontainer");
  if (form.style.display === "none" || form.style.display === "") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
};

document.addEventListener("click", function (event) {
  if (!formcontainer.contains(event.target) && event.target !== showFormBtn) {
    formcontainer.style.display = "none";
  }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
