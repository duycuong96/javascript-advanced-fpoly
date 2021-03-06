function renderProduct(product) {
    var template = $("#template").html();
    template = template.replace("{{alt}}", product.title);
    template = template.replace("{{img}}", product.image);
    template = template.replace("{{title}}", product.title);
    template = template.replace("{{author}}", product.author);
    var shopCart = $('.shop-cart');
    $(template).appendTo(shopCart);
}


function getProducts() {
    var settings = {
        url: "http://ajax-json.cione.vn/api/v1/shop/cart/products",
        dataType: "json",
        success: function(data, textStatus, jqXHR) {
            for (var product of data) {
                renderProduct(product);
            }
        }
    };
    $.ajax(settings);
}
getProducts();

    $(".contact-form").submit(function(){
        if(name.val() == "" ){
            name.focus();
            $('#userError').html("Vui lòng nhập tên");
            return false;
        }
        if ( pattern.test(email.val()) == false ) {{
            email.focus();
            $('#emailError').html("Bạn cần nhập đúng email");
            return false;
        }}
    });
    // kiểm tra nếu nhập thì mất lỗi
    name.bind('blur', function(){
        if(name.val() == ""){
            name.focus();
            $('#userError').html("Vui lòng nhập tên");
        } else {
            $('#userError').html("");
        }
    });
