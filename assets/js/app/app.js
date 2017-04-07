$(document).ready( function() {
    $("#my-profile").on("click", function() {
        $("#view-section").load("my_profile.html");
    });

    $("#my-leave").on("click", function() {
        $("#view-section").load("my_leave.html");
    });

    $("#my-payroll").on("click", function() {
        $("#view-section").load("my_payroll.html");
    });

    $("#my-timerecord").on("click", function() {
        $("#view-section").load("my_timerecord.html");
    });

});