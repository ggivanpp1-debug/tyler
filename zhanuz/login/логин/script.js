function checkAge() {
    let age = document.getElementById("age").value;

    if (age < 18) {
        alert("вам еще нет 18 лет.");
        return false;
    }
    if (age > 18)
        alert("успешно прошли регистрацию");
        return true;
}
    