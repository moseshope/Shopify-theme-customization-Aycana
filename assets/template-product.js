$(document).ready(function() {
    console.log("ready!");
    $('a.product-single__thumbnail').click(function() {
        var currPdtVrtID = $(this).attr('data-variant');
        var productVariants = meta.product.variants;
        var currVrtTtl = '';
        productVariants.forEach(variant => {
            if(variant.id == currPdtVrtID) {
                currVrtTtl = variant.public_title;
            }
        });
        $('button#SingleOptionSelector-0-button').find('span').html(currVrtTtl);
        $('ul#SingleOptionSelector-0-dropdown *').removeAttr('aria-selected');
        $('ul#SingleOptionSelector-0-dropdown *').attr('class', '');
        var variantOptions = $('ul#SingleOptionSelector-0-dropdown').find('li');
        console.log(variantOptions);
        variantOptions.each((index, vOption) => {
            console.log('currVrtTtl:', currVrtTtl, 'option:', $(vOption).attr('id'));
            if($(vOption).attr('id') == currVrtTtl) {
                $(vOption).attr('aria-selected', true);
                $(vOption).addClass('selected');
            }
        });

    });
});