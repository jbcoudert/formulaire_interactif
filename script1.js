$(document).ready(function () {
    // $(".error").hide()
    var inputLength = $("input")
    var valueInputSize = inputLength.val().length
    
    $(".btn1").click(function () {
        console.log(valueInputSize);
        if (valueInputSize < 5) {
            alert("hevry")
        }     
    })
    
})

