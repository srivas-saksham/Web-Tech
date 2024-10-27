// To show usage of Alert Prompt & Confirm
let check;
do{
    let num = prompt("Enter a Number to find its Square: ");
    let sq = num*num;
    alert(`Square of ${num} is ${sq}.`);
    check = confirm("Do you want to Enter again?");
}while(check != false);
alert("You've Exited the Program!")
