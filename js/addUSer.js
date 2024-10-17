document.getElementById("addUserForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah refresh halaman
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Simulasi penambahan pengguna baru
    const newUser = {
        id: Date.now(), // Menggunakan timestamp sebagai ID sementara
        name,
        email,
        phone
    };

    // Menyimpan pengguna baru ke localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Pengguna baru telah ditambahkan!");
    window.location.href = 'index.html'; // Kembali ke halaman utama
});
