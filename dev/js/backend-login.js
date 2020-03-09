function loginInit() {
    let storage = sessionStorage;

    
    function hideClose() {
        $('.memInfoClear').css({
            'visibility': 'hidden'
        })
    }
    $('input').focus(function () {
        $(this).next().css({
            'visibility': 'visible'
        })
    })
    $('input').focusout(function () {
        setTimeout(hideClose, 200)
    })
  
    $('.memInfoClear').click(function () {
        $(this).prev().val('');
    })
}
window.addEventListener('load', loginInit)
