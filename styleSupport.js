window.onload = function () {
    let services = document.getElementById('services');
    let cards = services.getElementsByClassName('card');
    for (const key in cards) {
        if (Object.hasOwnProperty.call(cards, key)) {
            const card = cards[key];
            let dismissCardLinks = card.getElementsByTagName('a');
            if( typeof dismissCardLinks[0] === 'object' ){
                let dismissLink = dismissCardLinks[0];
                dismissLink.addEventListener("click", function(){
                    $(card).fadeOut("slow");
                });
            }
        }
    }
}