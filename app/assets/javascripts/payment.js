$(document).on("click", ".open-AddPointDialog", function () {

     var myPoint = $(this).data('points');
     $(".modal-body #point_transaction_points").val( myPoint );
});

$(document).ready(function () {
    $("#order1").shieldQRcode({
        mode: "byte",
        size: 150,
        value: "https://somesite/order?plan=1"
    });
    $("#order2").shieldQRcode({
        mode: "byte",
        size: 150,
        value: "https://somesite/order?plan=2"
    });
    $("#order3").shieldQRcode({
        mode: "byte",
        size: 150,
        value: "https://somesite/order?plan=3"
    });
});
