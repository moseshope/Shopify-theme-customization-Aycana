$(document).ready(function() {
    $('a.product-single__thumbnail').click(function() {
        var currPdtVrtID = $(this).attr('data-variant');
        console.log('currPdtVrtID:', currPdtVrtID);
        var productVariants = meta.product.variants;
        var productPrice = 0;
        var currVrtTtl = '';
        if(currPdtVrtID != undefined) {
            productVariants.forEach(variant => {
                if(variant.id == currPdtVrtID) {
                    currVrtTtl = variant.public_title;
                    productPrice = variant.price;
                }
            });
            $('span#price-field span.money').html('$'+productPrice/100);
            $('button#SingleOptionSelector-0-button').find('span').html(currVrtTtl);
            $('ul#SingleOptionSelector-0-dropdown *').removeAttr('aria-selected');
            $('ul#SingleOptionSelector-0-dropdown *').attr('class', '');
            var variantOptions = $('ul#SingleOptionSelector-0-dropdown').find('li');
            variantOptions.each((index, vOption) => {
                if($(vOption).attr('id') == currVrtTtl) {
                    $(vOption).attr('aria-selected', true);
                    $(vOption).addClass('selected');
                }
            });
        } else {
            productPrice = variants[0].price;
            $('span#price-field span.money').html('$'+productPrice/100);
        }
    });
});