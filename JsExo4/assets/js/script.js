
function showModal() {
    let userModal = document.getElementById("userModal");
    userModal.showModal();
}

function collectData() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    window.alert("Bonjour, je me nomme " + name + ", j'ai " + age + " ans et j'habite " + city);
}
