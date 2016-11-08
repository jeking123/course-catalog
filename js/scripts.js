// Grid View
$('#grid').click(function(){
    // Remove ONLY 'list' class
    $('.cd-gallery').removeClass('list');
    // ADD ONLY 'grid' Class
    $('.cd-gallery').addClass('grid');
});

// List View
$('#list').click(function(){
    // Remove ONLY 'list' class
    $('.cd-gallery').removeClass('grid');
    // ADD ONLY 'grid' Class
    $('.cd-gallery').addClass('list');
});

/* */