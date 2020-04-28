window.setInterval(function() {
    var el = document.querySelectorAll('.g3VIld');
    if (el.length > 0) {
        for (var i = 0; i < el.length; i++) {
            if (el[i].getAttribute('aria-label') == 'Alguien quiere unirse a esta reunión') {
            //if (el[i].getAttribute('jsowner') == 'ow121') {
                console.log("Aceptando...")
                var denegar = el[i].children[3].children[0]
                var aceptar = el[i].children[3].children[1]
                aceptar.click()

            }
        }

    }

}, 500);