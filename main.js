// Tooltips

let $selectorToolTip = $("<div>");
$selectorToolTip.addClass('tool-tip');

$('.hover-element').mousemove(function(e) {
    let text = $(this).data('text');
    let scrollY = e.clientY;
    let scrollX = e.clientX;

    $selectorToolTip.text(text);
    $selectorToolTip.css(
        {
            'top': scrollY + 20 + 'px',
            'left': scrollX + 20 + 'px'
        });
    $selectorToolTip.addClass('active');
    
    $('body').append($selectorToolTip)
});

$('.hover-element').mouseout(function(e) {
    $selectorToolTip.removeClass('active');
})

// Spoilers
$('.spoiler').click(function(e) {
    let $dataSelector = $(this).data('spoiler');
    $($dataSelector + ' .hidden-content').toggleClass('active');
    $($dataSelector + ' p').toggleClass('active');

    if($(' .hidden-content').hasClass('active')) {
        $($dataSelector + ' .fa').text('-');
    } else {
        $($dataSelector + ' .fa').text('+');
    }
})
//Tabs

$('.tab-btn').each(function() {
    let hash = $(this).data('button');

    if(window.location.hash === hash) {
        $('.tab-content__text' + hash).addClass('active');
    }
})

$('.tab-btn').click(function(e) {
    let $selector = $(this).data('button');

    if(window.location.hash === $selector) {
        $($selector + '.tab-content__text').addClass('active');
        $(this).addClass('active');
        console.log('hui');
    }
    
    $('.tab-content__text').removeClass('active');
    $('.tab-btn').removeClass('active');
    $($selector + '.tab-content__text').addClass('active');
    $(this).addClass('active');
})