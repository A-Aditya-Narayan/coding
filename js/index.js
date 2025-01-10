
$(document).on("submit", "form", function (e) {
    e.preventDefault();
    var $this = $(this);

    var data = $this.serialize();

    var action = $this.attr("action");
    var method = $this.attr("method");
    $.ajax({
    type: method,
    url: action,
    data: data,
    success: (response) => {
        Swal.fire("Hello World")
    },
    error: (error) => {},
    });
});