const languages = [
    {
        flag: "🇦🇩",
        name: "Andorra",
        flagKey: "ad",
        key: "ad"
    },
    {
        flag: "🇦🇪",
        name: "Vereinigte Arabische Emirate",
        flagKey: "ae",
        key: "ae"
    },
    {
        flag: "🇦🇫",
        name: "Afghanistan",
        flagKey: "af",
        key: "af"
    },
    {
        flag: "🇦🇱",
        name: "Albanien",
        flagKey: "al",
        key: "al"
    },
    {
        flag: "🇦🇲",
        name: "Armenien",
        flagKey: "am",
        key: "am"
    },
    {
        flag: "🇦🇴",
        name: "Angola",
        flagKey: "ao",
        key: "ao"
    },
    {
        flag: "🇦🇶",
        name: "Antarktis",
        flagKey: "aq",
        key: "aq"
    },
    {
        flag: "🇦🇷",
        name: "Argentinien",
        flagKey: "ar",
        key: "ar"
    },
    {
        flag: "🇦🇹",
        name: "Österreich",
        flagKey: "at",
        key: "at"
    },
    {
        flag: "🇦🇺",
        name: "Australien",
        flagKey: "au",
        key: "au"
    },
    {
        flag: "🇦🇿",
        name: "Aserbaidschan",
        flagKey: "az",
        key: "az"
    },
    {
        flag: "🇧🇦",
        name: "Bosnien",
        flagKey: "ba",
        key: "ba"
    },
    {
        flag: "🇧🇩",
        name: "Bangladesh",
        flagKey: "bd",
        key: "bd"
    },
    {
        flag: "🇧🇪",
        name: "Belgien",
        flagKey: "be",
        key: "be"
    },
    {
        flag: "🇧🇬",
        name: "Bulgarien",
        flagKey: "bg",
        key: "bg"
    },
    {
        flag: "🇧🇭",
        name: "Bahrain",
        flagKey: "bh",
        key: "bh"
    },
    {
        flag: "🇧🇮",
        name: "Burundi",
        flagKey: "bi",
        key: "bi"
    },
    {
        flag: "🇧🇯",
        name: "Benin",
        flagKey: "bj",
        key: "bj"
    },
    {
        flag: "🇧🇴",
        name: "Bolivien",
        flagKey: "bo",
        key: "bo"
    },
    {
        flag: "🇧🇷",
        name: "Brasilien",
        flagKey: "br",
        key: "br"
    },
    {
        flag: "🇧🇼",
        name: "Botsuana",
        flagKey: "bw",
        key: "bw"
    },
    {
        flag: "🇧🇾",
        name: "Weißrussland",
        flagKey: "by",
        key: "by"
    },
    {
        flag: "🇨🇦",
        name: "Kanada",
        flagKey: "ca",
        key: "ca"
    },
    {
        flag: "🇨🇩",
        name: "Kinshasa",
        flagKey: "cd",
        key: "cd"
    },
    {
        flag: "🇨🇫",
        name: "Zentralafrikanische Republik",
        flagKey: "cf",
        key: "cf"
    },
    {
        flag: "🇨🇬",
        name: "Kongo",
        flagKey: "cg",
        key: "cg"
    },
    {
        flag: "🇨🇭",
        name: "Schweiz",
        flagKey: "ch",
        key: "ch"
    },
    {
        flag: "🇨🇱",
        name: "Chile",
        flagKey: "cl",
        key: "cl"
    },
    {
        flag: "🇨🇲",
        name: "Kamerun",
        flagKey: "cm",
        key: "cm"
    },
    {
        flag: "🇨🇳",
        name: "China",
        flagKey: "cn",
        key: "cn"
    },
    {
        flag: "🇨🇴",
        name: "Kolumbien",
        flagKey: "co",
        key: "co"
    },
    {
        flag: "🇨🇺",
        name: "Kuba",
        flagKey: "cu",
        key: "cu"
    },
    {
        flag: "🇨🇾",
        name: "Zypern",
        flagKey: "cy",
        key: "cy"
    },
    {
        flag: "🇨🇿",
        name: "Tschechien",
        flagKey: "cz",
        key: "cz"
    },
    {
        flag: "🇩🇪",
        name: "Deutschland",
        flagKey: "de",
        key: "de"
    },
    {
        flag: "🇩🇰",
        name: "Dänemark",
        flagKey: "dk",
        key: "dk"
    },
    {
        flag: "🇩🇴",
        name: "Dominikanische Republik",
        flagKey: "do",
        key: "do"
    },
    {
        flag: "🇩🇿",
        name: "Algerien",
        flagKey: "dz",
        key: "dz"
    },
    {
        flag: "🇪🇨",
        name: "Ecuador",
        flagKey: "ec",
        key: "ec"
    },
    {
        flag: "🇪🇪",
        name: "Estland",
        flagKey: "ee",
        key: "ee"
    },
    {
        flag: "🇪🇬",
        name: "Ägypten",
        flagKey: "eg",
        key: "eg"
    },
    {
        flag: "🇪🇷",
        name: "Eritrea",
        flagKey: "er",
        key: "er"
    },
    {
        flag: "🇪🇸",
        name: "Spanien",
        flagKey: "es",
        key: "es"
    },
    {
        flag: "🇪🇹",
        name: "Äthiopien",
        flagKey: "et",
        key: "et"
    },
    {
        flag: "🇫🇮",
        name: "Finnland",
        flagKey: "fi",
        key: "fi"
    },
    {
        flag: "🇫🇷",
        name: "Frankreich",
        flagKey: "fr",
        key: "fr"
    },
    {
        flag: "🇬🇦",
        name: "Gabun",
        flagKey: "ga",
        key: "ga"
    },
    {
        flag: "🇬🇧",
        name: "Vereinigtes Königreich",
        flagKey: "gb",
        key: "gb"
    },
    {
        flag: "🇬🇪",
        name: "Georgien",
        flagKey: "ge",
        key: "ge"
    },
    {
        flag: "🇬🇭",
        name: "Ghana",
        flagKey: "gh",
        key: "gh"
    },
    {
        flag: "🇬🇲",
        name: "Gambia",
        flagKey: "gm",
        key: "gm"
    },
    {
        flag: "🇬🇳",
        name: "Guinea",
        flagKey: "gn",
        key: "gn"
    },
    {
        flag: "🇬🇷",
        name: "Griechenland",
        flagKey: "gr",
        key: "gr"
    },
    {
        flag: "🇬🇹",
        name: "Guatemala",
        flagKey: "gt",
        key: "gt"
    },
    {
        flag: "🇭🇳",
        name: "Honduras",
        flagKey: "hn",
        key: "hn"
    },
    {
        flag: "🇭🇷",
        name: "Kroatien",
        flagKey: "hr",
        key: "hr"
    },
    {
        flag: "🇭🇹",
        name: "Haiti",
        flagKey: "ht",
        key: "ht"
    },
    {
        flag: "🇭🇺",
        name: "Ungarn",
        flagKey: "hu",
        key: "hu"
    },
    {
        flag: "🇮🇩",
        name: "Indonesien",
        flagKey: "id",
        key: "id"
    },
    {
        flag: "🇮🇪",
        name: "Irland",
        flagKey: "ie",
        key: "ie"
    },
    {
        flag: "🇮🇱",
        name: "Israel",
        flagKey: "il",
        key: "il"
    },
    {
        flag: "🇮🇳",
        name: "Indien",
        flagKey: "in",
        key: "in"
    },
    {
        flag: "🇮🇳",
        name: "Irak",
        flagKey: "iq",
        key: "iq"
    },
    {
        flag: "🇮🇷",
        name: "Iran",
        flagKey: "ir",
        key: "ir"
    },
    {
        flag: "🇮🇸",
        name: "Island",
        flagKey: "is",
        key: "is"
    },
    {
        flag: "🇮🇹",
        name: "Italien",
        flagKey: "it",
        key: "it"
    },
    {
        flag: "🇯🇲",
        name: "Jamaika",
        flagKey: "jm",
        key: "jm"
    },
    {
        flag: "🇯🇴",
        name: "Jordanien",
        flagKey: "jo",
        key: "jo"
    },
    {
        flag: "🇯🇵",
        name: "Japan",
        flagKey: "jp",
        key: "jp"
    },
    {
        flag: "🇰🇪",
        name: "Kenia",
        flagKey: "ke",
        key: "ke"
    },
    {
        flag: "🇰🇬",
        name: "Kirgisistan",
        flagKey: "kg",
        key: "kg"
    },
    {
        flag: "🇰🇭",
        name: "Kambodscha",
        flagKey: "kh",
        key: "kh"
    },
    {
        flag: "🇰🇵",
        name: "Nordkorea",
        flagKey: "kp",
        key: "kp"
    },
    {
        flag: "🇰🇷",
        name: "Südkorea",
        flagKey: "kr",
        key: "kr"
    },
    {
        flag: "🇹🇯",
        name: "Kurdistan",
        flagKey: "tj",
        key: "ku"
    },
    {
        flag: "🇰🇼",
        name: "Kuwait",
        flagKey: "kw",
        key: "kw"
    },
    {
        flag: "🇰🇿",
        name: "Kasachstan",
        flagKey: "kz",
        key: "kz"
    },
    {
        flag: "🇱🇦",
        name: "Laos",
        flagKey: "la",
        key: "la"
    },
    {
        flag: "🇱🇧",
        name: "Libanon",
        flagKey: "lb",
        key: "lb"
    },
    {
        flag: "🇱🇰",
        name: "Sri Lanka",
        flagKey: "lk",
        key: "lk"
    },
    {
        flag: "🇱🇷",
        name: "Liberia",
        flagKey: "lr",
        key: "lr"
    },
    {
        flag: "🇱🇸",
        name: "Lesotho",
        flagKey: "ls",
        key: "ls"
    },
    {
        flag: "🇱🇹",
        name: "Litauen",
        flagKey: "lt",
        key: "lt"
    },
    {
        flag: "🇱🇺",
        name: "Luxemburg",
        flagKey: "lu",
        key: "lu"
    },
    {
        flag: "🇱🇻",
        name: "Lettland",
        flagKey: "lv",
        key: "lv"
    },
    {
        flag: "🇱🇾",
        name: "Libyen",
        flagKey: "ly",
        key: "ly"
    },
    {
        flag: "🇲🇦",
        name: "Marokko",
        flagKey: "ma",
        key: "ma"
    },
    {
        flag: "🇲🇩",
        name: "Moldawien",
        flagKey: "md",
        key: "md"
    },
    {
        flag: "🇲🇬",
        name: "Madagaskar",
        flagKey: "mg",
        key: "mg"
    },
    {
        flag: "🇲🇰",
        name: "Nordmazedonien",
        flagKey: "mk",
        key: "mk"
    },
    {
        flag: "🇲🇱",
        name: "Mali",
        flagKey: "ml",
        key: "ml"
    },
    {
        flag: "🇲🇲",
        name: "Myanmar",
        flagKey: "mm",
        key: "mm"
    },
    {
        flag: "🇲🇳",
        name: "Mongolei",
        flagKey: "mn",
        key: "mn"
    },
    {
        flag: "🇲🇷",
        name: "Mauretanien",
        flagKey: "mr",
        key: "mr"
    },
    {
        flag: "🇲🇺",
        name: "Mauritius",
        flagKey: "mu",
        key: "mu"
    },
    {
        flag: "🇲🇼",
        name: "Malawi",
        flagKey: "mw",
        key: "mw"
    },
    {
        flag: "🇲🇽",
        name: "Mexiko",
        flagKey: "mx",
        key: "mx"
    },
    {
        flag: "🇲🇾",
        name: "Malaysia",
        flagKey: "my",
        key: "my"
    },
    {
        flag: "🇲🇿",
        name: "Mosambik",
        flagKey: "mz",
        key: "mz"
    },
    {
        flag: "🇳🇦",
        name: "Namibia",
        flagKey: "na",
        key: "na"
    },
    {
        flag: "🇳🇪",
        name: "Niger",
        flagKey: "ne",
        key: "ne"
    },
    {
        flag: "🇳🇬",
        name: "Nigeria",
        flagKey: "ng",
        key: "ng"
    },
    {
        flag: "🇳🇮",
        name: "Nicaragua",
        flagKey: "ni",
        key: "ni"
    },
    {
        flag: "🇳🇱",
        name: "Niederlande",
        flagKey: "nl",
        key: "nl"
    },
    {
        flag: "🇳🇴",
        name: "Norwegen",
        flagKey: "no",
        key: "no"
    },
    {
        flag: "🇳🇵",
        name: "Nepal",
        flagKey: "np",
        key: "np"
    },
    {
        flag: "🇳🇿",
        name: "Neuseeland",
        flagKey: "nz",
        key: "nz"
    },
    {
        flag: "🇴🇲",
        name: "Oman",
        flagKey: "om",
        key: "om"
    },
    {
        flag: "🇵🇦",
        name: "Panama",
        flagKey: "pa",
        key: "pa"
    },
    {
        flag: "🇵🇪",
        name: "Peru",
        flagKey: "pe",
        key: "pe"
    },
    {
        flag: "🇵🇬",
        name: "Papua-Neuguinea",
        flagKey: "pg",
        key: "pg"
    },
    {
        flag: "🇵🇭",
        name: "Philippinen",
        flagKey: "ph",
        key: "ph"
    },
    {
        flag: "🇵🇰",
        name: "Pakistan",
        flagKey: "pk",
        key: "pk"
    },
    {
        flag: "🇵🇱",
        name: "Polen",
        flagKey: "pl",
        key: "pl"
    },
    {
        flag: "🇵🇷",
        name: "Puerto Rico",
        flagKey: "pr",
        key: "pr"
    },
    {
        flag: "🇵🇸",
        name: "Palästina",
        flagKey: "ps",
        key: "ps"
    },
    {
        flag: "🇵🇹",
        name: "Portugal",
        flagKey: "pt",
        key: "pt"
    },
    {
        flag: "🇵🇾",
        name: "Paraguay",
        flagKey: "py",
        key: "py"
    },
    {
        flag: "🇶🇦",
        name: "Katar",
        flagKey: "qa",
        key: "qa"
    },
    {
        flag: "🇷🇴",
        name: "Rumänien",
        flagKey: "ro",
        key: "ro"
    },
    {
        flag: "🇷🇸",
        name: "Serbien",
        flagKey: "rs",
        key: "rs"
    },
    {
        flag: "🇷🇺",
        name: "Russland",
        flagKey: "ru",
        key: "ru"
    },
    {
        flag: "🇷🇼",
        name: "Ruanda",
        flagKey: "rw",
        key: "rw"
    },
    {
        flag: "🇸🇦",
        name: "Saudi-Arabien",
        flagKey: "sa",
        key: "sa"
    },
    {
        flag: "🇸🇩",
        name: "Sudan",
        flagKey: "sd",
        key: "sd"
    },
    {
        flag: "🇸🇪",
        name: "Schweden",
        flagKey: "se",
        key: "se"
    },
    {
        flag: "🇸🇬",
        name: "Singapur",
        flagKey: "sg",
        key: "sg"
    },
    {
        flag: "🇸🇮",
        name: "Slowenien",
        flagKey: "si",
        key: "si"
    },
    {
        flag: "🇸🇰",
        name: "Slowakei",
        flagKey: "sk",
        key: "sk"
    },
    {
        flag: "🇸🇱",
        name: "Sierra Leone",
        flagKey: "sl",
        key: "sl"
    },
    {
        flag: "🇸🇳",
        name: "Senegal",
        flagKey: "sn",
        key: "sn"
    },
    {
        flag: "🇸🇴",
        name: "Somalia",
        flagKey: "so",
        key: "so"
    },
    {
        flag: "🇸🇸",
        name: "Südsudan",
        flagKey: "ss",
        key: "ss"
    },
    {
        flag: "🇸🇻",
        name: "El Salvador",
        flagKey: "sv",
        key: "sv"
    },
    {
        flag: "🇸🇾",
        name: "Syrien",
        flagKey: "sy",
        key: "sy"
    },
    {
        flag: "🇸🇿",
        name: "Swasiland",
        flagKey: "sz",
        key: "sz"
    },
    {
        flag: "🇹🇩",
        name: "Tschad",
        flagKey: "td",
        key: "td"
    },
    {
        flag: "🇹🇬",
        name: "Togo",
        flagKey: "tg",
        key: "tg"
    },
    {
        flag: "🇹🇭",
        name: "Thailand",
        flagKey: "th",
        key: "th"
    },
    {
        flag: "🇹🇯",
        name: "Tadschikistan",
        flagKey: "tj",
        key: "tj"
    },
    {
        flag: "🇹🇲",
        name: "Turkmenistan",
        flagKey: "tm",
        key: "tm"
    },
    {
        flag: "🇹🇳",
        name: "Tunesien",
        flagKey: "tn",
        key: "tn"
    },
    {
        flag: "🇹🇷",
        name: "Türkei",
        flagKey: "tr",
        key: "tr"
    },
    {
        flag: "🇹🇼",
        name: "Taiwan",
        flagKey: "tw",
        key: "tw"
    },
    {
        flag: "🇹🇿",
        name: "Tansania",
        flagKey: "tz",
        key: "tz"
    },
    {
        flag: "🇺🇦",
        name: "Ukraine",
        flagKey: "ua",
        key: "ua"
    },
    {
        flag: "🇺🇬",
        name: "Uganda",
        flagKey: "ug",
        key: "ug"
    },
    {
        flag: "🇺🇸",
        name: "USA",
        flagKey: "us",
        key: "us"
    },
    {
        flag: "🇺🇾",
        name: "Uruguay",
        flagKey: "uy",
        key: "uy"
    },
    {
        flag: "🇺🇿",
        name: "Usbekistan",
        flagKey: "uz",
        key: "uz"
    },
    {
        flag: "🇻🇪",
        name: "Venezuela",
        flagKey: "ve",
        key: "ve"
    },
    {
        flag: "🇻🇳",
        name: "Vietnam",
        flagKey: "vn",
        key: "vn"
    },
    {
        flag: "🇽🇰",
        name: "Kosovo",
        flagKey: "xk",
        key: "xk"
    },
    {
        flag: "🇾🇪",
        name: "Jemen",
        flagKey: "ye",
        key: "ye"
    },
    {
        flag: "🇿🇦",
        name: "Südafrika",
        flagKey: "za",
        key: "za"
    },
    {
        flag: "🇿🇲",
        name: "Sambia",
        flagKey: "zm",
        key: "zm"
    },
    {
        flag: "🇿🇼",
        name: "Simbabwe",
        flagKey: "zw",
        key: "zw"
    },
    {
        flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        name: "England",
        flagKey: "gb-eng",
        key: "gb-eng"
    },
    {
        flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        name: "Schottland",
        flagKey: "gb-sct",
        key: "gb-sct"
    }
];

export default languages;