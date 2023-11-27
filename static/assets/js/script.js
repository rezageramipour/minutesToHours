var minutes = prompt("دقیقه وارد کنید تا ساعت تحویل بگیرید: ", 120);
var sixty = 60;
var hoursAndMinutes = minutes / sixty;
if (isNaN(hoursAndMinutes) || minutes < 0) {
    alert("ورودی شما معتبر نمی باشد.");
} else {
    alert (hoursAndMinutes + " hours");
}