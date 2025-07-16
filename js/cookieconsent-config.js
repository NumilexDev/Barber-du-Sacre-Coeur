import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.0/dist/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "bar inline",
            position: "bottom",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: true
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {},
        marketing: {}
    },
    language: {
        default: "it",
        autoDetect: "browser",
        rtl: "ar",
        translations: {
            ar: {
                "consentModal": {
                    "title": "مرحبًا، حان وقت ملفات تعريف الارتباط!",
                    "description": "نحن نستخدم ملفات تعريف الارتباط والتقنيات المماثلة لتحسين تجربتك في التصفح وعرض الإعلانات ذات الصلة. من خلال قبول هذه التقنيات، تمنحنا إذنًا بجمع ومعالجة بعض البيانات. ومع ذلك، إذا رفضت أو سحبت موافقتك، فقد لا تكون بعض ميزات الموقع متاحة.",
                    "acceptAllBtn": "قبول الكل",
                    "acceptNecessaryBtn": "رفض كل شيء",
                    "showPreferencesBtn": "إدارة التفضيلات",
                    "footer": "<a href='/politique-cookie.html'>سياسة الخصوصية</a>"
                },
                "preferencesModal": {
                    "title": "مركز تفضيلات الموافقة",
                    "acceptAllBtn": "قبول الكل",
                    "acceptNecessaryBtn": "رفض كل شيء",
                    "savePreferencesBtn": "حفظ التفضيلات",
                    "closeIconLabel": "إغلاق النافذة المنبثقة",
                    "serviceCounterLabel": "الخدمات",
                    "sections": [
                        {
                            "title": "استخدام ملفات تعريف الارتباط",
                            "description": "نحن نستخدم ملفات تعريف الارتباط والتقنيات المماثلة لتحسين تجربتك في التصفح وعرض الإعلانات ذات الصلة. من خلال قبول هذه التقنيات، تمنحنا إذنًا بجمع ومعالجة بعض البيانات. ومع ذلك، إذا رفضت أو سحبت موافقتك، فقد لا تكون بعض ميزات الموقع متاحة. <a href='/politique-cookie.html'>سياسة الخصوصية.</a>"
                        },
                        {
                            "title": "ملفات تعريف الارتباط الضرورية للغاية <span class=\"pm__badge\">ممكّن دائمًا</span>",
                            "description": "هذه الملفات تعريف الارتباط دائماً ممكّنة وضرورية لتمكين استخدام خدمة محددة طلبها المستخدم أو لنقل الاتصالات عبر شبكة إلكترونية.",
                            "linkedCategory": "necessary"
                        },
                        {
                            "title": "ملفات تعريف الارتباط التحليلية",
                            "description": "نحن نستخدم هذه الملفات تعريف الارتباط لفهم كيفية تفاعل الزوار مع موقعنا الإلكتروني، لتحسين تجربة المستخدم.",
                            "linkedCategory": "analytics"
                        },
                        {
                            "title": "ملفات تعريف الارتباط للإعلان",
                            "description": "تُستخدم هذه الملفات تعريف الارتباط لتتبع الزوار على مواقع الويب. الهدف هو عرض إعلانات ذات صلة وجذابة للمستخدم الفردي وبالتالي أكثر قيمة للناشرين ومعلني الطرف الثالث.",
                            "linkedCategory": "marketing"
                        },
                        {
                            "title": "لمزيد من المعلومات",
                            "description": " لأي استفسار يتعلق بسياستي الخاصة بملفات تعريف الارتباط وخياراتك ، يرجى  <a class=\"cc__link\" href='/contactez_nous.html'>الاتصال بي</a>."
                        }
                    ]
                }
            },
            de: {
                "consentModal": {
                    "title": "Hallo, es ist Zeit für Cookies!",
                    "description": "Wir verwenden Cookies und ähnliche Technologien, um Ihr Surf-Erlebnis zu verbessern und relevante Anzeigen anzuzeigen. Durch die Annahme dieser Technologien erteilen Sie uns die Erlaubnis, bestimmte Daten zu sammeln und zu verarbeiten. Wenn Sie Ihre Zustimmung verweigern oder widerrufen, sind möglicherweise bestimmte Funktionen der Website nicht verfügbar.",
                    "acceptAllBtn": "Alle akzeptieren",
                    "acceptNecessaryBtn": "Alles ablehnen",
                    "showPreferencesBtn": "Präferenzen verwalten",
                    "footer": "<a href='/politique-cookie.html'>Datenschutz</a>"
                },
                "preferencesModal": {
                    "title": "Präferenzen für Cookies",
                    "acceptAllBtn": "Alle akzeptieren",
                    "acceptNecessaryBtn": "Alles ablehnen",
                    "savePreferencesBtn": "Einstellungen speichern",
                    "closeIconLabel": "Modales schließen",
                    "serviceCounterLabel": "Dienstleistungen",
                    "sections": [
                        {
                            "title": "Verwendung von Cookies",
                            "description": "Wir verwenden Cookies und ähnliche Technologien, um Ihr Surf-Erlebnis zu verbessern und relevante Anzeigen anzuzeigen. Durch die Annahme dieser Technologien erteilen Sie uns die Erlaubnis, bestimmte Daten zu sammeln und zu verarbeiten. Wenn Sie Ihre Zustimmung verweigern oder widerrufen, sind möglicherweise bestimmte Funktionen der Website nicht verfügbar.<a href='/politique-cookie.html'>Datenschutz.</a>"
                        },
                        {
                            "title": "Streng Notwendige Cookies <span class=\"pm__badge\">Immer Aktiviert</span>",
                            "description": "Diese Cookies sind immer aktiviert und unerlässlich, um die Nutzung eines vom Benutzer angeforderten spezifischen Dienstes zu ermöglichen oder Kommunikationen über ein elektronisches Netzwerk zu übertragen.",
                            "linkedCategory": "necessary"
                        },
                        {
                            "title": "Analytische Cookies",
                            "description": "Wir verwenden diese Cookies, um zu verstehen, wie Besucher mit unserer Website interagieren, um das Benutzererlebnis zu verbessern.",
                            "linkedCategory": "analytics"
                        },
                        {
                            "title": "Werbung Cookies",
                            "description": "Diese Cookies werden verwendet, um Besucher auf Websites zu verfolgen. Ziel ist es, relevante und ansprechende Anzeigen für den einzelnen Benutzer anzuzeigen und damit wertvoller für Publisher und werbetreibende Dritte zu sein.",
                            "linkedCategory": "marketing"
                        },
                        {
                            "title": "Weitere Informationen",
                            "description": "Für Fragen zu meiner Cookie-Richtlinie und Ihren Auswahlmöglichkeiten wenden Sie sich bitte <a class=\"cc__link\" href='/contactez_nous.html'>an uns</a>."
                        }
                    ]
                }
            },
            en: {
                consentModal: {
                    title: "Bonjour, c'est l'heure des cookies!",
                    description: "Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience de navigation et afficher des publicités pertinentes. En acceptant ces technologies, vous nous autorisez à collecter et traiter certaines données. Cependant, si vous refusez ou retirez votre consentement, certaines fonctionnalités du site pourraient ne pas être disponibles.",
                    acceptAllBtn: "Tout accepter",
                    acceptNecessaryBtn: "Tout rejeter",
                    showPreferencesBtn: "Gérer les préférences",
                    footer: "<a href='./confidentiality.html'>Politique de cookies</a>"
                },
                preferencesModal: {
                    title: "Préférences de cookies",
                    acceptAllBtn: "Tout accepter",
                    acceptNecessaryBtn: "Tout rejeter",
                    savePreferencesBtn: "Sauvegarder les préférences",
                    closeIconLabel: "Fermer la modale",
                    serviceCounterLabel: "Services",
                    sections: [
                        {
                            title: "Utilisation des Cookies",
                            description: "Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience de navigation et afficher des publicités pertinentes. En acceptant ces technologies, vous nous autorisez à collecter et traiter certaines données. Cependant, si vous refusez ou retirez votre consentement, certaines fonctionnalités du site pourraient ne pas être disponibles. <a href='/politique-cookie.html'>Politique de cookie.</a>"
                        },
                        {
                            title: "Strictement Nécessaires <span class='pm__badge'>Toujours Activé</span>",
                            description: "Ces cookies sont toujours activés et indispensables pour permettre l'utilisation d'un service spécifique demandé par l'utilisateur ou pour transmettre des communications sur un réseau électronique.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytiques",
                            description: "Nous utilisons ces cookies pour comprendre comment les visiteurs interagissent avec notre site web, afin d'améliorer l'expérience utilisateur.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Publicitaires",
                            description: "Ces cookies sont utilisés pour suivre les visiteurs sur les sites web. L'intention est d'afficher des publicités pertinentes et engageantes pour l'utilisateur individuel et donc plus précieuses pour les éditeurs et les annonceurs tiers.",
                            linkedCategory: "marketing"
                        },
                        {
                            title: "Plus d'informations",
                            description: "Pour toute question relative à ma politique en matière de cookies et à vos choix, veuillez <a class=\"cc__link\" href='./cgu.html'>nous contacter</a>."
                        }
                    ]
                }
            },
            es: {
                "consentModal": {
                    "title": "¡Hola, es hora de las cookies!",
                    "description": "Utilizamos cookies y tecnologías similares para mejorar su experiencia de navegación y mostrar anuncios relevantes. Al aceptar estas tecnologías, nos autoriza a recopilar y procesar ciertos datos. Sin embargo, si rechaza o retira su consentimiento, es posible que algunas funciones del sitio no estén disponibles.",
                    "acceptAllBtn": "Aceptar todo",
                    "acceptNecessaryBtn": "Rechazar todo",
                    "showPreferencesBtn": "Gestionar preferencias",
                    "footer": "<a href='/politique-cookie.html'>Política de privacidad</a>"
                },
                "preferencesModal": {
                    "title": "Preferencias de Consentimiento",
                    "acceptAllBtn": "Aceptar todo",
                    "acceptNecessaryBtn": "Rechazar todo",
                    "savePreferencesBtn": "Guardar preferencias",
                    "closeIconLabel": "Cerrar modal",
                    "serviceCounterLabel": "Servicios",
                    "sections": [
                        {
                            "title": "Uso de Cookies",
                            "description": "Utilizamos cookies y tecnologías similares para mejorar su experiencia de navegación y mostrar anuncios relevantes. Al aceptar estas tecnologías, nos autoriza a recopilar y procesar ciertos datos. Sin embargo, si rechaza o retira su consentimiento, es posible que algunas funciones del sitio no estén disponibles. <a href='/politique-cookie.html'>Política de privacidad.</a>"
                        },
                        {
                            "title": "Cookies Estrictamente Necesarias <span class=\"pm__badge\">Siempre Habilitado</span>",
                            "description": "Estas cookies están siempre habilitadas e son indispensables para permitir el uso de un servicio específico solicitado por el usuario o para transmitir comunicaciones a través de una red electrónica.",
                            "linkedCategory": "necessary"
                        },
                        {
                            "title": "Cookies Analíticas",
                            "description": "Utilizamos estas cookies para comprender cómo interactúan los visitantes con nuestro sitio web, con el fin de mejorar la experiencia del usuario.",
                            "linkedCategory": "analytics"
                        },
                        {
                            "title": "Cookies Publicitarias",
                            "description": "Estas cookies se utilizan para rastrear a los visitantes en los sitios web. El objetivo es mostrar anuncios relevantes y atractivos para el usuario individual y, por lo tanto, más valiosos para los editores y los anunciantes de terceros.",
                            "linkedCategory": "marketing"
                        },
                        {
                            "title": "Más información",
                            "description": "Para cualquier consulta relacionada con mi política de cookies y sus opciones, por favor <a class=\"cc__link\" href='/contactez_nous.html'>contácteme</a>."
                        }
                    ]
                }
            }
            ,
            fr: {
                consentModal: {
                    title: "Bonjour, c'est l'heure des cookies!",
                    description: "Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience de navigation et afficher des publicités pertinentes. En acceptant ces technologies, vous nous autorisez à collecter et traiter certaines données. Cependant, si vous refusez ou retirez votre consentement, certaines fonctionnalités du site pourraient ne pas être disponibles.",
                    acceptAllBtn: "Tout accepter",
                    acceptNecessaryBtn: "Tout rejeter",
                    showPreferencesBtn: "Gérer les préférences",
                    footer: "<a href='/politique-cookie.html'>Politique de cookie</a>"
                },
                preferencesModal: {
                    title: "Préférences de cookies",
                    acceptAllBtn: "Tout accepter",
                    acceptNecessaryBtn: "Tout rejeter",
                    savePreferencesBtn: "Sauvegarder les préférences",
                    closeIconLabel: "Fermer la modale",
                    serviceCounterLabel: "Services",
                    sections: [
                        {
                            title: "Utilisation des Cookies",
                            description: "Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience de navigation et afficher des publicités pertinentes. En acceptant ces technologies, vous nous autorisez à collecter et traiter certaines données. Cependant, si vous refusez ou retirez votre consentement, certaines fonctionnalités du site pourraient ne pas être disponibles. <a href='/politique-cookie.html'>Politique de cookie.</a>"
                        },
                        {
                            title: "Strictement Nécessaires <span class='pm__badge'>Toujours Activé</span>",
                            description: "Ces cookies sont toujours activés et indispensables pour permettre l'utilisation d'un service spécifique demandé par l'utilisateur ou pour transmettre des communications sur un réseau électronique.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytiques",
                            description: "Nous utilisons ces cookies pour comprendre comment les visiteurs interagissent avec notre site web, afin d'améliorer l'expérience utilisateur.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Publicitaires",
                            description: "Ces cookies sont utilisés pour suivre les visiteurs sur les sites web. L'intention est d'afficher des publicités pertinentes et engageantes pour l'utilisateur individuel et donc plus précieuses pour les éditeurs et les annonceurs tiers.",
                            linkedCategory: "marketing"
                        },
                        {
                            title: "Plus d'informations",
                            description: "Pour toute question relative à ma politique en matière de cookies et à vos choix, veuillez <a class=\"cc__link\" href='/contactez_nous.html'>nous contacter</a>."
                        }
                    ]
                }
            },
            it: {
                "consentModal": {
                    "title": "Ciao, è ora dei cookie!",
                    "description": "Utilizziamo cookie e tecnologie simili per migliorare la tua esperienza di navigazione e mostrare annunci pertinenti. Accettando queste tecnologie, ci autorizzi a raccogliere e trattare determinati dati. Tuttavia, se rifiuti o revochi il tuo consenso, alcune funzionalità del sito potrebbero non essere disponibili.",
                    "acceptAllBtn": "Accetta tutto",
                    "acceptNecessaryBtn": "Rifiuta tutto",
                    "showPreferencesBtn": "Gestisci preferenze",
                    "footer": "<a href='/politique-cookie.html'>Informativa sulla privacy</a>"
                },
                "preferencesModal": {
                    "title": "Preferenze dei cookie",
                    "acceptAllBtn": "Accetta tutto",
                    "acceptNecessaryBtn": "Rifiuta tutto",
                    "savePreferencesBtn": "Salva preferenze",
                    "closeIconLabel": "Chiudi modale",
                    "serviceCounterLabel": "Servizi",
                    "sections": [
                        {
                            "title": "Utilizzo dei cookie",
                            "description": "Utilizziamo cookie e tecnologie simili per migliorare la tua esperienza di navigazione e mostrare annunci pertinenti. Accettando queste tecnologie, ci autorizzi a raccogliere e trattare determinati dati. Tuttavia, se rifiuti o revochi il tuo consenso, alcune funzionalità del sito potrebbero non essere disponibili. <a href='/politique-cookie.html'>Informativa sulla privacy.</a>"
                        },
                        {
                            "title": "Cookie strettamente necessari <span class=\"pm__badge\">Sempre Abilitato</span>",
                            "description": "Questi cookie sono sempre attivi ed essenziali per consentire l'uso di un servizio specifico richiesto dall'utente o per trasmettere comunicazioni su una rete elettronica.",
                            "linkedCategory": "necessary"
                        },
                        {
                            "title": "Cookie analitici",
                            "description": "Utilizziamo questi cookie per capire come interagiscono i visitatori con il nostro sito web, al fine di migliorare l'esperienza dell'utente.",
                            "linkedCategory": "analytics"
                        },
                        {
                            "title": "Cookie pubblicitari",
                            "description": "Questi cookie vengono utilizzati per tracciare i visitatori sui siti web. L'obiettivo è mostrare annunci pertinenti e coinvolgenti per l'utente singolo e quindi più preziosi per gli editori e gli inserzionisti di terze parti.",
                            "linkedCategory": "marketing"
                        },
                        {
                            "title": "Maggiori informazioni",
                            "description": "Per eventuali domande relative alla mia politica sui cookie e alle tue scelte, ti preghiamo di <a class=\"cc__link\" href='/contactez_nous.html'>contattarci</a>."
                        }
                    ]
                }
            }

        }
    },
    disablePageInteraction: false
});