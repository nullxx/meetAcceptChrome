const translations = {
    ca: {
        activate: 'Admetre a tothom',
        admitClass: 'pw1uU',
    },
    de: {
        activate: 'Gib alle zu',
        admitClass: 'pw1uU',
    },
    en: {
        activate: 'Admit everyone',
        admitClass: 'pw1uU',
    },
    es: {
        activate: 'Admitir a todo el mundo',
        admitClass: 'pw1uU',
    },
    fr: {
        activate: 'Admettez tout le monde',
        admitClass: 'pw1uU',
    },
}
const T = key =>
    navigator.languages
    .concat(['en'])
    .map(l => (translations[l] && translations[l][key]) || (translations[l.split('-')[0]] && translations[l.split('-')[0]][key]))
    .find(t => t)
const s = document.createElement('style')
s.innerText = `
      .button__ {
        overflow: visible !important;
      }
      .button__ > div {
        box-sizing: border-box;
        display: none;
        position: absolute;
        top: 40px;
        left: 0;
        width: 300px;
        padding: 12px;
        background: white;
        border-radius: 0 0 0 8px;
        text-align: left;
        cursor: auto;
        line-height: 0;
      }
      .button__:hover > div {
        display: block;
      }
      .button__ > div label {
        display: block;
        line-height: 24px;
        color: #999999;
      }
      .button__ > div label:not(.disabled) {
        cursor: pointer;
        color: #000000;
      }
      .button__ > div label small {
        display: block;
        line-height: 12px;
        font-weight: 400;
      }
      .button__ > div hr {
        border: 0;
        height: 1px;
        background: #f1f3f4;
      }
      .button__ > div a {
        display: inline-block;
        line-height: 20px;
      }
    `
document.body.append(s)
var interval = setInterval(go, 1000);
var acceptAllInverval = null;

function go() {
    var barra = document.querySelectorAll('.NzPR9b')[0];
    if (barra != null) {
        clearInterval(interval)
        var menu = `<div class="uArJ5e UQuaGc kCyAyd kW31ib foXzLb button__" style="display: flex;" id="meetAcceptMenu">
<svg height="24pt" viewBox="0 -107 512 512" width="24pt" xmlns="http://www.w3.org/2000/svg"><path d="m362.667969 298.667969h-213.335938c-82.34375 0-149.332031-67.007813-149.332031-149.335938 0-82.324219 66.988281-149.332031 149.332031-149.332031h213.335938c82.34375 0 149.332031 67.007812 149.332031 149.332031 0 82.328125-66.988281 149.335938-149.332031 149.335938zm-213.335938-266.667969c-64.703125 0-117.332031 52.652344-117.332031 117.332031 0 64.683594 52.628906 117.335938 117.332031 117.335938h213.335938c64.703125 0 117.332031-52.652344 117.332031-117.335938 0-64.679687-52.628906-117.332031-117.332031-117.332031zm0 0"/><path d="m149.332031 234.667969c-47.058593 0-85.332031-38.273438-85.332031-85.335938 0-47.058593 38.273438-85.332031 85.332031-85.332031 47.0625 0 85.335938 38.273438 85.335938 85.332031 0 47.0625-38.273438 85.335938-85.335938 85.335938zm0-138.667969c-29.394531 0-53.332031 23.914062-53.332031 53.332031 0 29.421875 23.9375 53.335938 53.332031 53.335938 29.398438 0 53.335938-23.914063 53.335938-53.335938 0-29.417969-23.9375-53.332031-53.335938-53.332031zm0 0"/></svg>
<div>
    <label>
        <input type="checkbox" id="meetAcceot_activated">${T("activate")}</label>
</div>
</div>`

        barra.insertAdjacentHTML( 'afterbegin', menu );
        document.getElementById("meetAcceot_activated").addEventListener('change', function() {
            if (this.checked) {
                acceptAllInverval = setInterval(acceptAll, 500, true);
            } else {
                clearInterval(acceptAllInverval);
            }
        });

    } else {
        // no existe sesion meet activa
    }
}

function acceptAll(all) {
    var el = document.querySelectorAll('.g3VIld');
    if (el.length > 0) {
        for (var i = 0; i < el.length; i++) {
            if (el[i].children[0].getAttribute("class") == T('admitClass')) {
                var denegar = el[i].children[3].children[0]
                var aceptar = el[i].children[3].children[1]
                var mensaje = el[i].children[2].innerText;
                if (all == false) {
                    // TODO customization
                } else {
                    console.log("Invited auto: " + mensaje)
                    aceptar.click()
                }
            }
        }

    }

}