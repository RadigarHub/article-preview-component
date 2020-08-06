window.onload = function() {
    
    var hidden = true;
    var shareButtons = document.getElementsByClassName('share-button');
    var userShareButton = shareButtons[0];
    var shareBar = document.getElementsByClassName('article-share-bar')[0];
    var isDesktop = window.matchMedia("(min-width: 768px)").matches;

    window.onresize = function() {
        isDesktop = window.matchMedia("(min-width: 768px)").matches;
        if (isDesktop) {
            if (hidden) {
                shareBar.style.clipPath = "circle(0 at 51% 140%)";
            } else {
                shareBar.style.clipPath = "circle(160% at 51% 140%)";
            }
        } else {
            if (hidden) {
                shareBar.style.clipPath = "circle(0 at calc(100% - 50px) 50%)";
            } else {
                shareBar.style.clipPath = "circle(160% at calc(100% - 50px) 50%)";
            }
        }
    }

    for (let shareButton of shareButtons) {
        shareButton.onclick = function() {
            toggleShareBar();
        }
    }
    
    function toggleShareBar() {
        if (hidden) {
            showShareBar();
        } else {
            hideShareBar();
        }
    }

    function showShareBar() {
        hidden = false;
        userShareButton.style.backgroundColor = "hsl(214, 17%, 51%)";
        userShareButton.getElementsByTagName('path')[0].style.fill = "white";
        if (isDesktop) {
            shareBar.style.clipPath = "circle(160% at 51% 140%)";
        } else {
            shareBar.style.clipPath = "circle(160% at calc(100% - 50px) 50%)";
        }
    }

    function hideShareBar() {
        hidden = true;
        userShareButton.style.backgroundColor = "hsl(210, 46%, 95%)";
        userShareButton.getElementsByTagName('path')[0].style.fill = "hsl(214, 17%, 51%)";
        if (isDesktop) {
            shareBar.style.clipPath = "circle(0 at 51% 140%)";
        } else {
            shareBar.style.clipPath = "circle(0 at calc(100% - 50px) 50%)";
        }
    }

}