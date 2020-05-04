let button = document.getElementById("button");

button.addEventListener("click", function () {
    //get the values user type
    let lover1 = document.getElementById("lover1").value;
    let lover2 = document.getElementById("lover2").value;

    if (lover1 == "" || lover2 == "") {
        alert("Fields cannot be empty");
    } else {
                
                    var p=Math.floor(Math.random() * 100); ;
            p=p+" % Love";
            document.getElementById("percentage").innerHTML=p;


             }
});
