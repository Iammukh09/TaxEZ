// ISO 3166 country/subdivision and ISO 4217 currency data with CLDR currency defaults.
const TAXEZ_COUNTRIES = [
  {
    "code": "AF",
    "name": "Afghanistan",
    "currency": "AFN"
  },
  {
    "code": "AL",
    "name": "Albania",
    "currency": "ALL"
  },
  {
    "code": "DZ",
    "name": "Algeria",
    "currency": "DZD"
  },
  {
    "code": "AS",
    "name": "American Samoa",
    "currency": "USD"
  },
  {
    "code": "AD",
    "name": "Andorra",
    "currency": "EUR"
  },
  {
    "code": "AO",
    "name": "Angola",
    "currency": "AOA"
  },
  {
    "code": "AI",
    "name": "Anguilla",
    "currency": "XCD"
  },
  {
    "code": "AQ",
    "name": "Antarctica",
    "currency": ""
  },
  {
    "code": "AG",
    "name": "Antigua and Barbuda",
    "currency": "XCD"
  },
  {
    "code": "AR",
    "name": "Argentina",
    "currency": "ARS"
  },
  {
    "code": "AM",
    "name": "Armenia",
    "currency": "AMD"
  },
  {
    "code": "AW",
    "name": "Aruba",
    "currency": "AWG"
  },
  {
    "code": "AU",
    "name": "Australia",
    "currency": "AUD"
  },
  {
    "code": "AT",
    "name": "Austria",
    "currency": "EUR"
  },
  {
    "code": "AZ",
    "name": "Azerbaijan",
    "currency": "AZN"
  },
  {
    "code": "BS",
    "name": "Bahamas",
    "currency": "BSD"
  },
  {
    "code": "BH",
    "name": "Bahrain",
    "currency": "BHD"
  },
  {
    "code": "BD",
    "name": "Bangladesh",
    "currency": "BDT"
  },
  {
    "code": "BB",
    "name": "Barbados",
    "currency": "BBD"
  },
  {
    "code": "BY",
    "name": "Belarus",
    "currency": "BYN"
  },
  {
    "code": "BE",
    "name": "Belgium",
    "currency": "EUR"
  },
  {
    "code": "BZ",
    "name": "Belize",
    "currency": "BZD"
  },
  {
    "code": "BJ",
    "name": "Benin",
    "currency": "XOF"
  },
  {
    "code": "BM",
    "name": "Bermuda",
    "currency": "BMD"
  },
  {
    "code": "BT",
    "name": "Bhutan",
    "currency": "INR"
  },
  {
    "code": "BO",
    "name": "Bolivia, Plurinational State of",
    "currency": "BOB"
  },
  {
    "code": "BQ",
    "name": "Bonaire, Sint Eustatius and Saba",
    "currency": "USD"
  },
  {
    "code": "BA",
    "name": "Bosnia and Herzegovina",
    "currency": "BAM"
  },
  {
    "code": "BW",
    "name": "Botswana",
    "currency": "BWP"
  },
  {
    "code": "BV",
    "name": "Bouvet Island",
    "currency": "NOK"
  },
  {
    "code": "BR",
    "name": "Brazil",
    "currency": "BRL"
  },
  {
    "code": "IO",
    "name": "British Indian Ocean Territory",
    "currency": "USD"
  },
  {
    "code": "BN",
    "name": "Brunei Darussalam",
    "currency": "BND"
  },
  {
    "code": "BG",
    "name": "Bulgaria",
    "currency": "BGN"
  },
  {
    "code": "BF",
    "name": "Burkina Faso",
    "currency": "XOF"
  },
  {
    "code": "BI",
    "name": "Burundi",
    "currency": "BIF"
  },
  {
    "code": "CV",
    "name": "Cabo Verde",
    "currency": "CVE"
  },
  {
    "code": "KH",
    "name": "Cambodia",
    "currency": "KHR"
  },
  {
    "code": "CM",
    "name": "Cameroon",
    "currency": "XAF"
  },
  {
    "code": "CA",
    "name": "Canada",
    "currency": "CAD"
  },
  {
    "code": "KY",
    "name": "Cayman Islands",
    "currency": "KYD"
  },
  {
    "code": "CF",
    "name": "Central African Republic",
    "currency": "XAF"
  },
  {
    "code": "TD",
    "name": "Chad",
    "currency": "XAF"
  },
  {
    "code": "CL",
    "name": "Chile",
    "currency": "CLP"
  },
  {
    "code": "CN",
    "name": "China",
    "currency": "CNY"
  },
  {
    "code": "CX",
    "name": "Christmas Island",
    "currency": "AUD"
  },
  {
    "code": "CC",
    "name": "Cocos (Keeling) Islands",
    "currency": "AUD"
  },
  {
    "code": "CO",
    "name": "Colombia",
    "currency": "COP"
  },
  {
    "code": "KM",
    "name": "Comoros",
    "currency": "KMF"
  },
  {
    "code": "CG",
    "name": "Congo",
    "currency": "XAF"
  },
  {
    "code": "CD",
    "name": "Congo, The Democratic Republic of the",
    "currency": "CDF"
  },
  {
    "code": "CK",
    "name": "Cook Islands",
    "currency": "NZD"
  },
  {
    "code": "CR",
    "name": "Costa Rica",
    "currency": "CRC"
  },
  {
    "code": "HR",
    "name": "Croatia",
    "currency": "EUR"
  },
  {
    "code": "CU",
    "name": "Cuba",
    "currency": "CUP"
  },
  {
    "code": "CW",
    "name": "Curaçao",
    "currency": "XCG"
  },
  {
    "code": "CY",
    "name": "Cyprus",
    "currency": "EUR"
  },
  {
    "code": "CZ",
    "name": "Czechia",
    "currency": "CZK"
  },
  {
    "code": "CI",
    "name": "Côte d'Ivoire",
    "currency": "XOF"
  },
  {
    "code": "DK",
    "name": "Denmark",
    "currency": "DKK"
  },
  {
    "code": "DJ",
    "name": "Djibouti",
    "currency": "DJF"
  },
  {
    "code": "DM",
    "name": "Dominica",
    "currency": "XCD"
  },
  {
    "code": "DO",
    "name": "Dominican Republic",
    "currency": "DOP"
  },
  {
    "code": "EC",
    "name": "Ecuador",
    "currency": "USD"
  },
  {
    "code": "EG",
    "name": "Egypt",
    "currency": "EGP"
  },
  {
    "code": "SV",
    "name": "El Salvador",
    "currency": "USD"
  },
  {
    "code": "GQ",
    "name": "Equatorial Guinea",
    "currency": "XAF"
  },
  {
    "code": "ER",
    "name": "Eritrea",
    "currency": "ERN"
  },
  {
    "code": "EE",
    "name": "Estonia",
    "currency": "EUR"
  },
  {
    "code": "SZ",
    "name": "Eswatini",
    "currency": "SZL"
  },
  {
    "code": "ET",
    "name": "Ethiopia",
    "currency": "ETB"
  },
  {
    "code": "FK",
    "name": "Falkland Islands (Malvinas)",
    "currency": "FKP"
  },
  {
    "code": "FO",
    "name": "Faroe Islands",
    "currency": "DKK"
  },
  {
    "code": "FJ",
    "name": "Fiji",
    "currency": "FJD"
  },
  {
    "code": "FI",
    "name": "Finland",
    "currency": "EUR"
  },
  {
    "code": "FR",
    "name": "France",
    "currency": "EUR"
  },
  {
    "code": "GF",
    "name": "French Guiana",
    "currency": "EUR"
  },
  {
    "code": "PF",
    "name": "French Polynesia",
    "currency": "XPF"
  },
  {
    "code": "TF",
    "name": "French Southern Territories",
    "currency": "EUR"
  },
  {
    "code": "GA",
    "name": "Gabon",
    "currency": "XAF"
  },
  {
    "code": "GM",
    "name": "Gambia",
    "currency": "GMD"
  },
  {
    "code": "GE",
    "name": "Georgia",
    "currency": "GEL"
  },
  {
    "code": "DE",
    "name": "Germany",
    "currency": "EUR"
  },
  {
    "code": "GH",
    "name": "Ghana",
    "currency": "GHS"
  },
  {
    "code": "GI",
    "name": "Gibraltar",
    "currency": "GIP"
  },
  {
    "code": "GR",
    "name": "Greece",
    "currency": "EUR"
  },
  {
    "code": "GL",
    "name": "Greenland",
    "currency": "DKK"
  },
  {
    "code": "GD",
    "name": "Grenada",
    "currency": "XCD"
  },
  {
    "code": "GP",
    "name": "Guadeloupe",
    "currency": "EUR"
  },
  {
    "code": "GU",
    "name": "Guam",
    "currency": "USD"
  },
  {
    "code": "GT",
    "name": "Guatemala",
    "currency": "GTQ"
  },
  {
    "code": "GG",
    "name": "Guernsey",
    "currency": "GBP"
  },
  {
    "code": "GN",
    "name": "Guinea",
    "currency": "GNF"
  },
  {
    "code": "GW",
    "name": "Guinea-Bissau",
    "currency": "XOF"
  },
  {
    "code": "GY",
    "name": "Guyana",
    "currency": "GYD"
  },
  {
    "code": "HT",
    "name": "Haiti",
    "currency": "HTG"
  },
  {
    "code": "HM",
    "name": "Heard Island and McDonald Islands",
    "currency": "AUD"
  },
  {
    "code": "VA",
    "name": "Holy See (Vatican City State)",
    "currency": "EUR"
  },
  {
    "code": "HN",
    "name": "Honduras",
    "currency": "HNL"
  },
  {
    "code": "HK",
    "name": "Hong Kong",
    "currency": "HKD"
  },
  {
    "code": "HU",
    "name": "Hungary",
    "currency": "HUF"
  },
  {
    "code": "IS",
    "name": "Iceland",
    "currency": "ISK"
  },
  {
    "code": "IN",
    "name": "India",
    "currency": "INR"
  },
  {
    "code": "ID",
    "name": "Indonesia",
    "currency": "IDR"
  },
  {
    "code": "IR",
    "name": "Iran, Islamic Republic of",
    "currency": "IRR"
  },
  {
    "code": "IQ",
    "name": "Iraq",
    "currency": "IQD"
  },
  {
    "code": "IE",
    "name": "Ireland",
    "currency": "EUR"
  },
  {
    "code": "IM",
    "name": "Isle of Man",
    "currency": "GBP"
  },
  {
    "code": "IL",
    "name": "Israel",
    "currency": "ILS"
  },
  {
    "code": "IT",
    "name": "Italy",
    "currency": "EUR"
  },
  {
    "code": "JM",
    "name": "Jamaica",
    "currency": "JMD"
  },
  {
    "code": "JP",
    "name": "Japan",
    "currency": "JPY"
  },
  {
    "code": "JE",
    "name": "Jersey",
    "currency": "GBP"
  },
  {
    "code": "JO",
    "name": "Jordan",
    "currency": "JOD"
  },
  {
    "code": "KZ",
    "name": "Kazakhstan",
    "currency": "KZT"
  },
  {
    "code": "KE",
    "name": "Kenya",
    "currency": "KES"
  },
  {
    "code": "KI",
    "name": "Kiribati",
    "currency": "AUD"
  },
  {
    "code": "KP",
    "name": "Korea, Democratic People's Republic of",
    "currency": "KPW"
  },
  {
    "code": "KR",
    "name": "Korea, Republic of",
    "currency": "KRW"
  },
  {
    "code": "KW",
    "name": "Kuwait",
    "currency": "KWD"
  },
  {
    "code": "KG",
    "name": "Kyrgyzstan",
    "currency": "KGS"
  },
  {
    "code": "LA",
    "name": "Lao People's Democratic Republic",
    "currency": "LAK"
  },
  {
    "code": "LV",
    "name": "Latvia",
    "currency": "EUR"
  },
  {
    "code": "LB",
    "name": "Lebanon",
    "currency": "LBP"
  },
  {
    "code": "LS",
    "name": "Lesotho",
    "currency": "ZAR"
  },
  {
    "code": "LR",
    "name": "Liberia",
    "currency": "LRD"
  },
  {
    "code": "LY",
    "name": "Libya",
    "currency": "LYD"
  },
  {
    "code": "LI",
    "name": "Liechtenstein",
    "currency": "CHF"
  },
  {
    "code": "LT",
    "name": "Lithuania",
    "currency": "EUR"
  },
  {
    "code": "LU",
    "name": "Luxembourg",
    "currency": "EUR"
  },
  {
    "code": "MO",
    "name": "Macao",
    "currency": "MOP"
  },
  {
    "code": "MG",
    "name": "Madagascar",
    "currency": "MGA"
  },
  {
    "code": "MW",
    "name": "Malawi",
    "currency": "MWK"
  },
  {
    "code": "MY",
    "name": "Malaysia",
    "currency": "MYR"
  },
  {
    "code": "MV",
    "name": "Maldives",
    "currency": "MVR"
  },
  {
    "code": "ML",
    "name": "Mali",
    "currency": "XOF"
  },
  {
    "code": "MT",
    "name": "Malta",
    "currency": "EUR"
  },
  {
    "code": "MH",
    "name": "Marshall Islands",
    "currency": "USD"
  },
  {
    "code": "MQ",
    "name": "Martinique",
    "currency": "EUR"
  },
  {
    "code": "MR",
    "name": "Mauritania",
    "currency": "MRU"
  },
  {
    "code": "MU",
    "name": "Mauritius",
    "currency": "MUR"
  },
  {
    "code": "YT",
    "name": "Mayotte",
    "currency": "EUR"
  },
  {
    "code": "MX",
    "name": "Mexico",
    "currency": "MXN"
  },
  {
    "code": "FM",
    "name": "Micronesia, Federated States of",
    "currency": "USD"
  },
  {
    "code": "MD",
    "name": "Moldova, Republic of",
    "currency": "MDL"
  },
  {
    "code": "MC",
    "name": "Monaco",
    "currency": "EUR"
  },
  {
    "code": "MN",
    "name": "Mongolia",
    "currency": "MNT"
  },
  {
    "code": "ME",
    "name": "Montenegro",
    "currency": "EUR"
  },
  {
    "code": "MS",
    "name": "Montserrat",
    "currency": "XCD"
  },
  {
    "code": "MA",
    "name": "Morocco",
    "currency": "MAD"
  },
  {
    "code": "MZ",
    "name": "Mozambique",
    "currency": "MZN"
  },
  {
    "code": "MM",
    "name": "Myanmar",
    "currency": "MMK"
  },
  {
    "code": "NA",
    "name": "Namibia",
    "currency": "ZAR"
  },
  {
    "code": "NR",
    "name": "Nauru",
    "currency": "AUD"
  },
  {
    "code": "NP",
    "name": "Nepal",
    "currency": "NPR"
  },
  {
    "code": "NL",
    "name": "Netherlands",
    "currency": "EUR"
  },
  {
    "code": "NC",
    "name": "New Caledonia",
    "currency": "XPF"
  },
  {
    "code": "NZ",
    "name": "New Zealand",
    "currency": "NZD"
  },
  {
    "code": "NI",
    "name": "Nicaragua",
    "currency": "NIO"
  },
  {
    "code": "NE",
    "name": "Niger",
    "currency": "XOF"
  },
  {
    "code": "NG",
    "name": "Nigeria",
    "currency": "NGN"
  },
  {
    "code": "NU",
    "name": "Niue",
    "currency": "NZD"
  },
  {
    "code": "NF",
    "name": "Norfolk Island",
    "currency": "AUD"
  },
  {
    "code": "MK",
    "name": "North Macedonia",
    "currency": "MKD"
  },
  {
    "code": "MP",
    "name": "Northern Mariana Islands",
    "currency": "USD"
  },
  {
    "code": "NO",
    "name": "Norway",
    "currency": "NOK"
  },
  {
    "code": "OM",
    "name": "Oman",
    "currency": "OMR"
  },
  {
    "code": "PK",
    "name": "Pakistan",
    "currency": "PKR"
  },
  {
    "code": "PW",
    "name": "Palau",
    "currency": "USD"
  },
  {
    "code": "PS",
    "name": "Palestine, State of",
    "currency": "ILS"
  },
  {
    "code": "PA",
    "name": "Panama",
    "currency": "PAB"
  },
  {
    "code": "PG",
    "name": "Papua New Guinea",
    "currency": "PGK"
  },
  {
    "code": "PY",
    "name": "Paraguay",
    "currency": "PYG"
  },
  {
    "code": "PE",
    "name": "Peru",
    "currency": "PEN"
  },
  {
    "code": "PH",
    "name": "Philippines",
    "currency": "PHP"
  },
  {
    "code": "PN",
    "name": "Pitcairn",
    "currency": "NZD"
  },
  {
    "code": "PL",
    "name": "Poland",
    "currency": "PLN"
  },
  {
    "code": "PT",
    "name": "Portugal",
    "currency": "EUR"
  },
  {
    "code": "PR",
    "name": "Puerto Rico",
    "currency": "USD"
  },
  {
    "code": "QA",
    "name": "Qatar",
    "currency": "QAR"
  },
  {
    "code": "RO",
    "name": "Romania",
    "currency": "RON"
  },
  {
    "code": "RU",
    "name": "Russian Federation",
    "currency": "RUB"
  },
  {
    "code": "RW",
    "name": "Rwanda",
    "currency": "RWF"
  },
  {
    "code": "RE",
    "name": "Réunion",
    "currency": "EUR"
  },
  {
    "code": "BL",
    "name": "Saint Barthélemy",
    "currency": "EUR"
  },
  {
    "code": "SH",
    "name": "Saint Helena, Ascension and Tristan da Cunha",
    "currency": "SHP"
  },
  {
    "code": "KN",
    "name": "Saint Kitts and Nevis",
    "currency": "XCD"
  },
  {
    "code": "LC",
    "name": "Saint Lucia",
    "currency": "XCD"
  },
  {
    "code": "MF",
    "name": "Saint Martin (French part)",
    "currency": "EUR"
  },
  {
    "code": "PM",
    "name": "Saint Pierre and Miquelon",
    "currency": "EUR"
  },
  {
    "code": "VC",
    "name": "Saint Vincent and the Grenadines",
    "currency": "XCD"
  },
  {
    "code": "WS",
    "name": "Samoa",
    "currency": "WST"
  },
  {
    "code": "SM",
    "name": "San Marino",
    "currency": "EUR"
  },
  {
    "code": "ST",
    "name": "Sao Tome and Principe",
    "currency": "STN"
  },
  {
    "code": "SA",
    "name": "Saudi Arabia",
    "currency": "SAR"
  },
  {
    "code": "SN",
    "name": "Senegal",
    "currency": "XOF"
  },
  {
    "code": "RS",
    "name": "Serbia",
    "currency": "RSD"
  },
  {
    "code": "SC",
    "name": "Seychelles",
    "currency": "SCR"
  },
  {
    "code": "SL",
    "name": "Sierra Leone",
    "currency": "SLE"
  },
  {
    "code": "SG",
    "name": "Singapore",
    "currency": "SGD"
  },
  {
    "code": "SX",
    "name": "Sint Maarten (Dutch part)",
    "currency": "XCG"
  },
  {
    "code": "SK",
    "name": "Slovakia",
    "currency": "EUR"
  },
  {
    "code": "SI",
    "name": "Slovenia",
    "currency": "EUR"
  },
  {
    "code": "SB",
    "name": "Solomon Islands",
    "currency": "SBD"
  },
  {
    "code": "SO",
    "name": "Somalia",
    "currency": "SOS"
  },
  {
    "code": "ZA",
    "name": "South Africa",
    "currency": "ZAR"
  },
  {
    "code": "GS",
    "name": "South Georgia and the South Sandwich Islands",
    "currency": "GBP"
  },
  {
    "code": "SS",
    "name": "South Sudan",
    "currency": "SSP"
  },
  {
    "code": "ES",
    "name": "Spain",
    "currency": "EUR"
  },
  {
    "code": "LK",
    "name": "Sri Lanka",
    "currency": "LKR"
  },
  {
    "code": "SD",
    "name": "Sudan",
    "currency": "SDG"
  },
  {
    "code": "SR",
    "name": "Suriname",
    "currency": "SRD"
  },
  {
    "code": "SJ",
    "name": "Svalbard and Jan Mayen",
    "currency": "NOK"
  },
  {
    "code": "SE",
    "name": "Sweden",
    "currency": "SEK"
  },
  {
    "code": "CH",
    "name": "Switzerland",
    "currency": "CHF"
  },
  {
    "code": "SY",
    "name": "Syrian Arab Republic",
    "currency": "SYP"
  },
  {
    "code": "TW",
    "name": "Taiwan, Province of China",
    "currency": "TWD"
  },
  {
    "code": "TJ",
    "name": "Tajikistan",
    "currency": "TJS"
  },
  {
    "code": "TZ",
    "name": "Tanzania, United Republic of",
    "currency": "TZS"
  },
  {
    "code": "TH",
    "name": "Thailand",
    "currency": "THB"
  },
  {
    "code": "TL",
    "name": "Timor-Leste",
    "currency": "USD"
  },
  {
    "code": "TG",
    "name": "Togo",
    "currency": "XOF"
  },
  {
    "code": "TK",
    "name": "Tokelau",
    "currency": "NZD"
  },
  {
    "code": "TO",
    "name": "Tonga",
    "currency": "TOP"
  },
  {
    "code": "TT",
    "name": "Trinidad and Tobago",
    "currency": "TTD"
  },
  {
    "code": "TN",
    "name": "Tunisia",
    "currency": "TND"
  },
  {
    "code": "TM",
    "name": "Turkmenistan",
    "currency": "TMT"
  },
  {
    "code": "TC",
    "name": "Turks and Caicos Islands",
    "currency": "USD"
  },
  {
    "code": "TV",
    "name": "Tuvalu",
    "currency": "AUD"
  },
  {
    "code": "TR",
    "name": "Türkiye",
    "currency": "TRY"
  },
  {
    "code": "UG",
    "name": "Uganda",
    "currency": "UGX"
  },
  {
    "code": "UA",
    "name": "Ukraine",
    "currency": "UAH"
  },
  {
    "code": "AE",
    "name": "United Arab Emirates",
    "currency": "AED"
  },
  {
    "code": "GB",
    "name": "United Kingdom",
    "currency": "GBP"
  },
  {
    "code": "US",
    "name": "United States",
    "currency": "USD"
  },
  {
    "code": "UM",
    "name": "United States Minor Outlying Islands",
    "currency": "USD"
  },
  {
    "code": "UY",
    "name": "Uruguay",
    "currency": "UYU"
  },
  {
    "code": "UZ",
    "name": "Uzbekistan",
    "currency": "UZS"
  },
  {
    "code": "VU",
    "name": "Vanuatu",
    "currency": "VUV"
  },
  {
    "code": "VE",
    "name": "Venezuela, Bolivarian Republic of",
    "currency": "VES"
  },
  {
    "code": "VN",
    "name": "Viet Nam",
    "currency": "VND"
  },
  {
    "code": "VG",
    "name": "Virgin Islands, British",
    "currency": "USD"
  },
  {
    "code": "VI",
    "name": "Virgin Islands, U.S.",
    "currency": "USD"
  },
  {
    "code": "WF",
    "name": "Wallis and Futuna",
    "currency": "XPF"
  },
  {
    "code": "EH",
    "name": "Western Sahara",
    "currency": "MAD"
  },
  {
    "code": "YE",
    "name": "Yemen",
    "currency": "YER"
  },
  {
    "code": "ZM",
    "name": "Zambia",
    "currency": "ZMW"
  },
  {
    "code": "ZW",
    "name": "Zimbabwe",
    "currency": "USD"
  },
  {
    "code": "AX",
    "name": "Åland Islands",
    "currency": "EUR"
  }
];
const TAXEZ_REGIONS = [
  {
    "countryCode": "AD",
    "code": "AD-07",
    "name": "Andorra la Vella",
    "type": "Parish"
  },
  {
    "countryCode": "AD",
    "code": "AD-02",
    "name": "Canillo",
    "type": "Parish"
  },
  {
    "countryCode": "AD",
    "code": "AD-03",
    "name": "Encamp",
    "type": "Parish"
  },
  {
    "countryCode": "AD",
    "code": "AD-08",
    "name": "Escaldes-Engordany",
    "type": "Parish"
  },
  {
    "countryCode": "AD",
    "code": "AD-04",
    "name": "La Massana",
    "type": "Parish"
  },
  {
    "countryCode": "AD",
    "code": "AD-05",
    "name": "Ordino",
    "type": "Parish"
  },
  {
    "countryCode": "AD",
    "code": "AD-06",
    "name": "Sant Julià de Lòria",
    "type": "Parish"
  },
  {
    "countryCode": "AE",
    "code": "AE-AZ",
    "name": "Abū Z̧aby",
    "type": "Emirate"
  },
  {
    "countryCode": "AE",
    "code": "AE-FU",
    "name": "Al Fujayrah",
    "type": "Emirate"
  },
  {
    "countryCode": "AE",
    "code": "AE-SH",
    "name": "Ash Shāriqah",
    "type": "Emirate"
  },
  {
    "countryCode": "AE",
    "code": "AE-DU",
    "name": "Dubayy",
    "type": "Emirate"
  },
  {
    "countryCode": "AE",
    "code": "AE-RK",
    "name": "Ra’s al Khaymah",
    "type": "Emirate"
  },
  {
    "countryCode": "AE",
    "code": "AE-UQ",
    "name": "Umm al Qaywayn",
    "type": "Emirate"
  },
  {
    "countryCode": "AE",
    "code": "AE-AJ",
    "name": "‘Ajmān",
    "type": "Emirate"
  },
  {
    "countryCode": "AF",
    "code": "AF-BDS",
    "name": "Badakhshān",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-BGL",
    "name": "Baghlān",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-BAL",
    "name": "Balkh",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-BDG",
    "name": "Bādghīs",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-BAM",
    "name": "Bāmyān",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-DAY",
    "name": "Dāykundī",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-FRA",
    "name": "Farāh",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-FYB",
    "name": "Fāryāb",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-GHA",
    "name": "Ghaznī",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-GHO",
    "name": "Ghōr",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-HEL",
    "name": "Helmand",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-HER",
    "name": "Herāt",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-JOW",
    "name": "Jowzjān",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-KAN",
    "name": "Kandahār",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-KHO",
    "name": "Khōst",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-KNR",
    "name": "Kunaṟ",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-KDZ",
    "name": "Kunduz",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-KAB",
    "name": "Kābul",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-KAP",
    "name": "Kāpīsā",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-LAG",
    "name": "Laghmān",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-LOG",
    "name": "Lōgar",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-NAN",
    "name": "Nangarhār",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-NIM",
    "name": "Nīmrōz",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-NUR",
    "name": "Nūristān",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-PIA",
    "name": "Paktiyā",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-PKA",
    "name": "Paktīkā",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-PAN",
    "name": "Panjshayr",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-PAR",
    "name": "Parwān",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-SAM",
    "name": "Samangān",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-SAR",
    "name": "Sar-e Pul",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-TAK",
    "name": "Takhār",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-URU",
    "name": "Uruzgān",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-WAR",
    "name": "Wardak",
    "type": "Province"
  },
  {
    "countryCode": "AF",
    "code": "AF-ZAB",
    "name": "Zābul",
    "type": "Province"
  },
  {
    "countryCode": "AG",
    "code": "AG-10",
    "name": "Barbuda",
    "type": "Dependency"
  },
  {
    "countryCode": "AG",
    "code": "AG-11",
    "name": "Redonda",
    "type": "Dependency"
  },
  {
    "countryCode": "AG",
    "code": "AG-03",
    "name": "Saint George",
    "type": "Parish"
  },
  {
    "countryCode": "AG",
    "code": "AG-04",
    "name": "Saint John",
    "type": "Parish"
  },
  {
    "countryCode": "AG",
    "code": "AG-05",
    "name": "Saint Mary",
    "type": "Parish"
  },
  {
    "countryCode": "AG",
    "code": "AG-06",
    "name": "Saint Paul",
    "type": "Parish"
  },
  {
    "countryCode": "AG",
    "code": "AG-07",
    "name": "Saint Peter",
    "type": "Parish"
  },
  {
    "countryCode": "AG",
    "code": "AG-08",
    "name": "Saint Philip",
    "type": "Parish"
  },
  {
    "countryCode": "AL",
    "code": "AL-01",
    "name": "Berat",
    "type": "County"
  },
  {
    "countryCode": "AL",
    "code": "AL-09",
    "name": "Dibër",
    "type": "County"
  },
  {
    "countryCode": "AL",
    "code": "AL-02",
    "name": "Durrës",
    "type": "County"
  },
  {
    "countryCode": "AL",
    "code": "AL-03",
    "name": "Elbasan",
    "type": "County"
  },
  {
    "countryCode": "AL",
    "code": "AL-04",
    "name": "Fier",
    "type": "County"
  },
  {
    "countryCode": "AL",
    "code": "AL-05",
    "name": "Gjirokastër",
    "type": "County"
  },
  {
    "countryCode": "AL",
    "code": "AL-06",
    "name": "Korçë",
    "type": "County"
  },
  {
    "countryCode": "AL",
    "code": "AL-07",
    "name": "Kukës",
    "type": "County"
  },
  {
    "countryCode": "AL",
    "code": "AL-08",
    "name": "Lezhë",
    "type": "County"
  },
  {
    "countryCode": "AL",
    "code": "AL-10",
    "name": "Shkodër",
    "type": "County"
  },
  {
    "countryCode": "AL",
    "code": "AL-11",
    "name": "Tiranë",
    "type": "County"
  },
  {
    "countryCode": "AL",
    "code": "AL-12",
    "name": "Vlorë",
    "type": "County"
  },
  {
    "countryCode": "AM",
    "code": "AM-AG",
    "name": "Aragac̣otn",
    "type": "Region"
  },
  {
    "countryCode": "AM",
    "code": "AM-AR",
    "name": "Ararat",
    "type": "Region"
  },
  {
    "countryCode": "AM",
    "code": "AM-AV",
    "name": "Armavir",
    "type": "Region"
  },
  {
    "countryCode": "AM",
    "code": "AM-ER",
    "name": "Erevan",
    "type": "City"
  },
  {
    "countryCode": "AM",
    "code": "AM-GR",
    "name": "Geġark'unik'",
    "type": "Region"
  },
  {
    "countryCode": "AM",
    "code": "AM-KT",
    "name": "Kotayk'",
    "type": "Region"
  },
  {
    "countryCode": "AM",
    "code": "AM-LO",
    "name": "Loṙi",
    "type": "Region"
  },
  {
    "countryCode": "AM",
    "code": "AM-SU",
    "name": "Syunik'",
    "type": "Region"
  },
  {
    "countryCode": "AM",
    "code": "AM-TV",
    "name": "Tavuš",
    "type": "Region"
  },
  {
    "countryCode": "AM",
    "code": "AM-VD",
    "name": "Vayoć Jor",
    "type": "Region"
  },
  {
    "countryCode": "AM",
    "code": "AM-SH",
    "name": "Širak",
    "type": "Region"
  },
  {
    "countryCode": "AO",
    "code": "AO-BGO",
    "name": "Bengo",
    "type": "Province"
  },
  {
    "countryCode": "AO",
    "code": "AO-BGU",
    "name": "Benguela",
    "type": "Province"
  },
  {
    "countryCode": "AO",
    "code": "AO-BIE",
    "name": "Bié",
    "type": "Province"
  },
  {
    "countryCode": "AO",
    "code": "AO-CAB",
    "name": "Cabinda",
    "type": "Province"
  },
  {
    "countryCode": "AO",
    "code": "AO-CCU",
    "name": "Cuando Cubango",
    "type": "Province"
  },
  {
    "countryCode": "AO",
    "code": "AO-CNO",
    "name": "Cuanza-Norte",
    "type": "Province"
  },
  {
    "countryCode": "AO",
    "code": "AO-CUS",
    "name": "Cuanza-Sul",
    "type": "Province"
  },
  {
    "countryCode": "AO",
    "code": "AO-CNN",
    "name": "Cunene",
    "type": "Province"
  },
  {
    "countryCode": "AO",
    "code": "AO-HUA",
    "name": "Huambo",
    "type": "Province"
  },
  {
    "countryCode": "AO",
    "code": "AO-HUI",
    "name": "Huíla",
    "type": "Province"
  },
  {
    "countryCode": "AO",
    "code": "AO-LUA",
    "name": "Luanda",
    "type": "Province"
  },
  {
    "countryCode": "AO",
    "code": "AO-LNO",
    "name": "Lunda-Norte",
    "type": "Province"
  },
  {
    "countryCode": "AO",
    "code": "AO-LSU",
    "name": "Lunda-Sul",
    "type": "Province"
  },
  {
    "countryCode": "AO",
    "code": "AO-MAL",
    "name": "Malange",
    "type": "Province"
  },
  {
    "countryCode": "AO",
    "code": "AO-MOX",
    "name": "Moxico",
    "type": "Province"
  },
  {
    "countryCode": "AO",
    "code": "AO-NAM",
    "name": "Namibe",
    "type": "Province"
  },
  {
    "countryCode": "AO",
    "code": "AO-UIG",
    "name": "Uíge",
    "type": "Province"
  },
  {
    "countryCode": "AO",
    "code": "AO-ZAI",
    "name": "Zaire",
    "type": "Province"
  },
  {
    "countryCode": "AR",
    "code": "AR-B",
    "name": "Buenos Aires",
    "type": "Province"
  },
  {
    "countryCode": "AR",
    "code": "AR-K",
    "name": "Catamarca",
    "type": "Province"
  },
  {
    "countryCode": "AR",
    "code": "AR-H",
    "name": "Chaco",
    "type": "Province"
  },
  {
    "countryCode": "AR",
    "code": "AR-U",
    "name": "Chubut",
    "type": "Province"
  },
  {
    "countryCode": "AR",
    "code": "AR-C",
    "name": "Ciudad Autónoma de Buenos Aires",
    "type": "City"
  },
  {
    "countryCode": "AR",
    "code": "AR-W",
    "name": "Corrientes",
    "type": "Province"
  },
  {
    "countryCode": "AR",
    "code": "AR-X",
    "name": "Córdoba",
    "type": "Province"
  },
  {
    "countryCode": "AR",
    "code": "AR-E",
    "name": "Entre Ríos",
    "type": "Province"
  },
  {
    "countryCode": "AR",
    "code": "AR-P",
    "name": "Formosa",
    "type": "Province"
  },
  {
    "countryCode": "AR",
    "code": "AR-Y",
    "name": "Jujuy",
    "type": "Province"
  },
  {
    "countryCode": "AR",
    "code": "AR-L",
    "name": "La Pampa",
    "type": "Province"
  },
  {
    "countryCode": "AR",
    "code": "AR-F",
    "name": "La Rioja",
    "type": "Province"
  },
  {
    "countryCode": "AR",
    "code": "AR-M",
    "name": "Mendoza",
    "type": "Province"
  },
  {
    "countryCode": "AR",
    "code": "AR-N",
    "name": "Misiones",
    "type": "Province"
  },
  {
    "countryCode": "AR",
    "code": "AR-Q",
    "name": "Neuquén",
    "type": "Province"
  },
  {
    "countryCode": "AR",
    "code": "AR-R",
    "name": "Río Negro",
    "type": "Province"
  },
  {
    "countryCode": "AR",
    "code": "AR-A",
    "name": "Salta",
    "type": "Province"
  },
  {
    "countryCode": "AR",
    "code": "AR-J",
    "name": "San Juan",
    "type": "Province"
  },
  {
    "countryCode": "AR",
    "code": "AR-D",
    "name": "San Luis",
    "type": "Province"
  },
  {
    "countryCode": "AR",
    "code": "AR-Z",
    "name": "Santa Cruz",
    "type": "Province"
  },
  {
    "countryCode": "AR",
    "code": "AR-S",
    "name": "Santa Fe",
    "type": "Province"
  },
  {
    "countryCode": "AR",
    "code": "AR-G",
    "name": "Santiago del Estero",
    "type": "Province"
  },
  {
    "countryCode": "AR",
    "code": "AR-V",
    "name": "Tierra del Fuego",
    "type": "Province"
  },
  {
    "countryCode": "AR",
    "code": "AR-T",
    "name": "Tucumán",
    "type": "Province"
  },
  {
    "countryCode": "AT",
    "code": "AT-1",
    "name": "Burgenland",
    "type": "State"
  },
  {
    "countryCode": "AT",
    "code": "AT-2",
    "name": "Kärnten",
    "type": "State"
  },
  {
    "countryCode": "AT",
    "code": "AT-3",
    "name": "Niederösterreich",
    "type": "State"
  },
  {
    "countryCode": "AT",
    "code": "AT-4",
    "name": "Oberösterreich",
    "type": "State"
  },
  {
    "countryCode": "AT",
    "code": "AT-5",
    "name": "Salzburg",
    "type": "State"
  },
  {
    "countryCode": "AT",
    "code": "AT-6",
    "name": "Steiermark",
    "type": "State"
  },
  {
    "countryCode": "AT",
    "code": "AT-7",
    "name": "Tirol",
    "type": "State"
  },
  {
    "countryCode": "AT",
    "code": "AT-8",
    "name": "Vorarlberg",
    "type": "State"
  },
  {
    "countryCode": "AT",
    "code": "AT-9",
    "name": "Wien",
    "type": "State"
  },
  {
    "countryCode": "AU",
    "code": "AU-ACT",
    "name": "Australian Capital Territory",
    "type": "Territory"
  },
  {
    "countryCode": "AU",
    "code": "AU-NSW",
    "name": "New South Wales",
    "type": "State"
  },
  {
    "countryCode": "AU",
    "code": "AU-NT",
    "name": "Northern Territory",
    "type": "Territory"
  },
  {
    "countryCode": "AU",
    "code": "AU-QLD",
    "name": "Queensland",
    "type": "State"
  },
  {
    "countryCode": "AU",
    "code": "AU-SA",
    "name": "South Australia",
    "type": "State"
  },
  {
    "countryCode": "AU",
    "code": "AU-TAS",
    "name": "Tasmania",
    "type": "State"
  },
  {
    "countryCode": "AU",
    "code": "AU-VIC",
    "name": "Victoria",
    "type": "State"
  },
  {
    "countryCode": "AU",
    "code": "AU-WA",
    "name": "Western Australia",
    "type": "State"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-ABS",
    "name": "Abşeron",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-AST",
    "name": "Astara",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-AGC",
    "name": "Ağcabədi",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-AGM",
    "name": "Ağdam",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-AGS",
    "name": "Ağdaş",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-AGA",
    "name": "Ağstafa",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-AGU",
    "name": "Ağsu",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-BAB",
    "name": "Babək",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-BA",
    "name": "Bakı",
    "type": "Municipality"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-BAL",
    "name": "Balakən",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-BEY",
    "name": "Beyləqan",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-BIL",
    "name": "Biləsuvar",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-BAR",
    "name": "Bərdə",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-CUL",
    "name": "Culfa",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-CAB",
    "name": "Cəbrayıl",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-CAL",
    "name": "Cəlilabad",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-DAS",
    "name": "Daşkəsən",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-FUZ",
    "name": "Füzuli",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-GOR",
    "name": "Goranboy",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-GYG",
    "name": "Göygöl",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-GOY",
    "name": "Göyçay",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-GAD",
    "name": "Gədəbəy",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-GA",
    "name": "Gəncə",
    "type": "Municipality"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-HAC",
    "name": "Hacıqabul",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-IMI",
    "name": "İmişli",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-ISM",
    "name": "İsmayıllı",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-KUR",
    "name": "Kürdəmir",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-KAN",
    "name": "Kǝngǝrli",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-KAL",
    "name": "Kəlbəcər",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-LAC",
    "name": "Laçın",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-LER",
    "name": "Lerik",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-LA",
    "name": "Lənkəran",
    "type": "Municipality"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-LAN",
    "name": "Lənkəran",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-MAS",
    "name": "Masallı",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-MI",
    "name": "Mingəçevir",
    "type": "Municipality"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-NA",
    "name": "Naftalan",
    "type": "Municipality"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-NV",
    "name": "Naxçıvan",
    "type": "Municipality"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-NX",
    "name": "Naxçıvan",
    "type": "Autonomous republic"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-NEF",
    "name": "Neftçala",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-ORD",
    "name": "Ordubad",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-OGU",
    "name": "Oğuz",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-QAX",
    "name": "Qax",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-QAZ",
    "name": "Qazax",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-QOB",
    "name": "Qobustan",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-QBA",
    "name": "Quba",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-QBI",
    "name": "Qubadlı",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-QUS",
    "name": "Qusar",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-QAB",
    "name": "Qəbələ",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-SAT",
    "name": "Saatlı",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-SAB",
    "name": "Sabirabad",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-SAL",
    "name": "Salyan",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-SMX",
    "name": "Samux",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-SIY",
    "name": "Siyəzən",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-SM",
    "name": "Sumqayıt",
    "type": "Municipality"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-SAD",
    "name": "Sədərək",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-TOV",
    "name": "Tovuz",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-TAR",
    "name": "Tərtər",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-UCA",
    "name": "Ucar",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-XA",
    "name": "Xankəndi",
    "type": "Municipality"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-XAC",
    "name": "Xaçmaz",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-XCI",
    "name": "Xocalı",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-XVD",
    "name": "Xocavənd",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-XIZ",
    "name": "Xızı",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-YAR",
    "name": "Yardımlı",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-YE",
    "name": "Yevlax",
    "type": "Municipality"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-YEV",
    "name": "Yevlax",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-ZAQ",
    "name": "Zaqatala",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-ZAN",
    "name": "Zəngilan",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-ZAR",
    "name": "Zərdab",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-SBN",
    "name": "Şabran",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-SAH",
    "name": "Şahbuz",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-SMI",
    "name": "Şamaxı",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-SR",
    "name": "Şirvan",
    "type": "Municipality"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-SUS",
    "name": "Şuşa",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-SA",
    "name": "Şəki",
    "type": "Municipality"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-SAK",
    "name": "Şəki",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-SKR",
    "name": "Şəmkir",
    "type": "Rayon"
  },
  {
    "countryCode": "AZ",
    "code": "AZ-SAR",
    "name": "Şərur",
    "type": "Rayon"
  },
  {
    "countryCode": "BA",
    "code": "BA-BRC",
    "name": "Brčko distrikt",
    "type": "District with special status"
  },
  {
    "countryCode": "BA",
    "code": "BA-BIH",
    "name": "Federacija Bosne i Hercegovine",
    "type": "Entity"
  },
  {
    "countryCode": "BA",
    "code": "BA-SRP",
    "name": "Republika Srpska",
    "type": "Entity"
  },
  {
    "countryCode": "BB",
    "code": "BB-01",
    "name": "Christ Church",
    "type": "Parish"
  },
  {
    "countryCode": "BB",
    "code": "BB-02",
    "name": "Saint Andrew",
    "type": "Parish"
  },
  {
    "countryCode": "BB",
    "code": "BB-03",
    "name": "Saint George",
    "type": "Parish"
  },
  {
    "countryCode": "BB",
    "code": "BB-04",
    "name": "Saint James",
    "type": "Parish"
  },
  {
    "countryCode": "BB",
    "code": "BB-05",
    "name": "Saint John",
    "type": "Parish"
  },
  {
    "countryCode": "BB",
    "code": "BB-06",
    "name": "Saint Joseph",
    "type": "Parish"
  },
  {
    "countryCode": "BB",
    "code": "BB-07",
    "name": "Saint Lucy",
    "type": "Parish"
  },
  {
    "countryCode": "BB",
    "code": "BB-08",
    "name": "Saint Michael",
    "type": "Parish"
  },
  {
    "countryCode": "BB",
    "code": "BB-09",
    "name": "Saint Peter",
    "type": "Parish"
  },
  {
    "countryCode": "BB",
    "code": "BB-10",
    "name": "Saint Philip",
    "type": "Parish"
  },
  {
    "countryCode": "BB",
    "code": "BB-11",
    "name": "Saint Thomas",
    "type": "Parish"
  },
  {
    "countryCode": "BD",
    "code": "BD-05",
    "name": "Bagerhat",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-01",
    "name": "Bandarban",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-02",
    "name": "Barguna",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-06",
    "name": "Barishal",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-A",
    "name": "Barishal",
    "type": "Division"
  },
  {
    "countryCode": "BD",
    "code": "BD-07",
    "name": "Bhola",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-03",
    "name": "Bogura",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-04",
    "name": "Brahmanbaria",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-09",
    "name": "Chandpur",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-45",
    "name": "Chapai Nawabganj",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-10",
    "name": "Chattogram",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-B",
    "name": "Chattogram",
    "type": "Division"
  },
  {
    "countryCode": "BD",
    "code": "BD-12",
    "name": "Chuadanga",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-11",
    "name": "Cox's Bazar",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-08",
    "name": "Cumilla",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-13",
    "name": "Dhaka",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-C",
    "name": "Dhaka",
    "type": "Division"
  },
  {
    "countryCode": "BD",
    "code": "BD-14",
    "name": "Dinajpur",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-15",
    "name": "Faridpur",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-16",
    "name": "Feni",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-19",
    "name": "Gaibandha",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-18",
    "name": "Gazipur",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-17",
    "name": "Gopalganj",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-20",
    "name": "Habiganj",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-21",
    "name": "Jamalpur",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-22",
    "name": "Jashore",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-25",
    "name": "Jhalakathi",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-23",
    "name": "Jhenaidah",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-24",
    "name": "Joypurhat",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-29",
    "name": "Khagrachhari",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-27",
    "name": "Khulna",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-D",
    "name": "Khulna",
    "type": "Division"
  },
  {
    "countryCode": "BD",
    "code": "BD-26",
    "name": "Kishoreganj",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-28",
    "name": "Kurigram",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-30",
    "name": "Kushtia",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-31",
    "name": "Lakshmipur",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-32",
    "name": "Lalmonirhat",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-36",
    "name": "Madaripur",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-37",
    "name": "Magura",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-33",
    "name": "Manikganj",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-39",
    "name": "Meherpur",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-38",
    "name": "Moulvibazar",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-35",
    "name": "Munshiganj",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-34",
    "name": "Mymensingh",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-H",
    "name": "Mymensingh",
    "type": "Division"
  },
  {
    "countryCode": "BD",
    "code": "BD-48",
    "name": "Naogaon",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-43",
    "name": "Narail",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-40",
    "name": "Narayanganj",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-42",
    "name": "Narsingdi",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-44",
    "name": "Natore",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-41",
    "name": "Netrakona",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-46",
    "name": "Nilphamari",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-47",
    "name": "Noakhali",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-49",
    "name": "Pabna",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-52",
    "name": "Panchagarh",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-51",
    "name": "Patuakhali",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-50",
    "name": "Pirojpur",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-53",
    "name": "Rajbari",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-54",
    "name": "Rajshahi",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-E",
    "name": "Rajshahi",
    "type": "Division"
  },
  {
    "countryCode": "BD",
    "code": "BD-56",
    "name": "Rangamati",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-55",
    "name": "Rangpur",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-F",
    "name": "Rangpur",
    "type": "Division"
  },
  {
    "countryCode": "BD",
    "code": "BD-58",
    "name": "Satkhira",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-62",
    "name": "Shariatpur",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-57",
    "name": "Sherpur",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-59",
    "name": "Sirajganj",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-61",
    "name": "Sunamganj",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-60",
    "name": "Sylhet",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-G",
    "name": "Sylhet",
    "type": "Division"
  },
  {
    "countryCode": "BD",
    "code": "BD-63",
    "name": "Tangail",
    "type": "District"
  },
  {
    "countryCode": "BD",
    "code": "BD-64",
    "name": "Thakurgaon",
    "type": "District"
  },
  {
    "countryCode": "BE",
    "code": "BE-VAN",
    "name": "Antwerpen",
    "type": "Province"
  },
  {
    "countryCode": "BE",
    "code": "BE-WBR",
    "name": "Brabant wallon",
    "type": "Province"
  },
  {
    "countryCode": "BE",
    "code": "BE-BRU",
    "name": "Bruxelles-Capitale, Région de",
    "type": "Region"
  },
  {
    "countryCode": "BE",
    "code": "BE-WHT",
    "name": "Hainaut",
    "type": "Province"
  },
  {
    "countryCode": "BE",
    "code": "BE-VLI",
    "name": "Limburg",
    "type": "Province"
  },
  {
    "countryCode": "BE",
    "code": "BE-WLG",
    "name": "Liège",
    "type": "Province"
  },
  {
    "countryCode": "BE",
    "code": "BE-WLX",
    "name": "Luxembourg",
    "type": "Province"
  },
  {
    "countryCode": "BE",
    "code": "BE-WNA",
    "name": "Namur",
    "type": "Province"
  },
  {
    "countryCode": "BE",
    "code": "BE-VOV",
    "name": "Oost-Vlaanderen",
    "type": "Province"
  },
  {
    "countryCode": "BE",
    "code": "BE-VLG",
    "name": "Vlaams Gewest",
    "type": "Region"
  },
  {
    "countryCode": "BE",
    "code": "BE-VBR",
    "name": "Vlaams-Brabant",
    "type": "Province"
  },
  {
    "countryCode": "BE",
    "code": "BE-WAL",
    "name": "wallonne, Région",
    "type": "Region"
  },
  {
    "countryCode": "BE",
    "code": "BE-VWV",
    "name": "West-Vlaanderen",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-BAL",
    "name": "Balé",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-BAM",
    "name": "Bam",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-BAN",
    "name": "Banwa",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-BAZ",
    "name": "Bazèga",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-01",
    "name": "Boucle du Mouhoun",
    "type": "Region"
  },
  {
    "countryCode": "BF",
    "code": "BF-BGR",
    "name": "Bougouriba",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-BLG",
    "name": "Boulgou",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-BLK",
    "name": "Boulkiemdé",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-02",
    "name": "Cascades",
    "type": "Region"
  },
  {
    "countryCode": "BF",
    "code": "BF-03",
    "name": "Centre",
    "type": "Region"
  },
  {
    "countryCode": "BF",
    "code": "BF-04",
    "name": "Centre-Est",
    "type": "Region"
  },
  {
    "countryCode": "BF",
    "code": "BF-05",
    "name": "Centre-Nord",
    "type": "Region"
  },
  {
    "countryCode": "BF",
    "code": "BF-06",
    "name": "Centre-Ouest",
    "type": "Region"
  },
  {
    "countryCode": "BF",
    "code": "BF-07",
    "name": "Centre-Sud",
    "type": "Region"
  },
  {
    "countryCode": "BF",
    "code": "BF-COM",
    "name": "Comoé",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-08",
    "name": "Est",
    "type": "Region"
  },
  {
    "countryCode": "BF",
    "code": "BF-GAN",
    "name": "Ganzourgou",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-GNA",
    "name": "Gnagna",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-GOU",
    "name": "Gourma",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-09",
    "name": "Hauts-Bassins",
    "type": "Region"
  },
  {
    "countryCode": "BF",
    "code": "BF-HOU",
    "name": "Houet",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-IOB",
    "name": "Ioba",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-KAD",
    "name": "Kadiogo",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-KMD",
    "name": "Komondjari",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-KMP",
    "name": "Kompienga",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-KOS",
    "name": "Kossi",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-KOP",
    "name": "Koulpélogo",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-KOT",
    "name": "Kouritenga",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-KOW",
    "name": "Kourwéogo",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-KEN",
    "name": "Kénédougou",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-LOR",
    "name": "Loroum",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-LER",
    "name": "Léraba",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-MOU",
    "name": "Mouhoun",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-NAO",
    "name": "Nahouri",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-NAM",
    "name": "Namentenga",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-NAY",
    "name": "Nayala",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-10",
    "name": "Nord",
    "type": "Region"
  },
  {
    "countryCode": "BF",
    "code": "BF-NOU",
    "name": "Noumbiel",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-OUB",
    "name": "Oubritenga",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-OUD",
    "name": "Oudalan",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-PAS",
    "name": "Passoré",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-11",
    "name": "Plateau-Central",
    "type": "Region"
  },
  {
    "countryCode": "BF",
    "code": "BF-PON",
    "name": "Poni",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-12",
    "name": "Sahel",
    "type": "Region"
  },
  {
    "countryCode": "BF",
    "code": "BF-SNG",
    "name": "Sanguié",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-SMT",
    "name": "Sanmatenga",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-SIS",
    "name": "Sissili",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-SOM",
    "name": "Soum",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-SOR",
    "name": "Sourou",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-13",
    "name": "Sud-Ouest",
    "type": "Region"
  },
  {
    "countryCode": "BF",
    "code": "BF-SEN",
    "name": "Séno",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-TAP",
    "name": "Tapoa",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-TUI",
    "name": "Tuy",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-YAG",
    "name": "Yagha",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-YAT",
    "name": "Yatenga",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-ZIR",
    "name": "Ziro",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-ZON",
    "name": "Zondoma",
    "type": "Province"
  },
  {
    "countryCode": "BF",
    "code": "BF-ZOU",
    "name": "Zoundwéogo",
    "type": "Province"
  },
  {
    "countryCode": "BG",
    "code": "BG-01",
    "name": "Blagoevgrad",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-02",
    "name": "Burgas",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-08",
    "name": "Dobrich",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-07",
    "name": "Gabrovo",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-26",
    "name": "Haskovo",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-09",
    "name": "Kardzhali",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-10",
    "name": "Kyustendil",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-11",
    "name": "Lovech",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-12",
    "name": "Montana",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-13",
    "name": "Pazardzhik",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-14",
    "name": "Pernik",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-15",
    "name": "Pleven",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-16",
    "name": "Plovdiv",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-17",
    "name": "Razgrad",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-18",
    "name": "Ruse",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-27",
    "name": "Shumen",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-19",
    "name": "Silistra",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-20",
    "name": "Sliven",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-21",
    "name": "Smolyan",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-23",
    "name": "Sofia",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-22",
    "name": "Sofia (stolitsa)",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-24",
    "name": "Stara Zagora",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-25",
    "name": "Targovishte",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-03",
    "name": "Varna",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-04",
    "name": "Veliko Tarnovo",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-05",
    "name": "Vidin",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-06",
    "name": "Vratsa",
    "type": "District"
  },
  {
    "countryCode": "BG",
    "code": "BG-28",
    "name": "Yambol",
    "type": "District"
  },
  {
    "countryCode": "BH",
    "code": "BH-14",
    "name": "Al Janūbīyah",
    "type": "Governorate"
  },
  {
    "countryCode": "BH",
    "code": "BH-15",
    "name": "Al Muḩarraq",
    "type": "Governorate"
  },
  {
    "countryCode": "BH",
    "code": "BH-13",
    "name": "Al ‘Āşimah",
    "type": "Governorate"
  },
  {
    "countryCode": "BH",
    "code": "BH-17",
    "name": "Ash Shamālīyah",
    "type": "Governorate"
  },
  {
    "countryCode": "BI",
    "code": "BI-BB",
    "name": "Bubanza",
    "type": "Province"
  },
  {
    "countryCode": "BI",
    "code": "BI-BM",
    "name": "Bujumbura Mairie",
    "type": "Province"
  },
  {
    "countryCode": "BI",
    "code": "BI-BL",
    "name": "Bujumbura Rural",
    "type": "Province"
  },
  {
    "countryCode": "BI",
    "code": "BI-BR",
    "name": "Bururi",
    "type": "Province"
  },
  {
    "countryCode": "BI",
    "code": "BI-CA",
    "name": "Cankuzo",
    "type": "Province"
  },
  {
    "countryCode": "BI",
    "code": "BI-CI",
    "name": "Cibitoke",
    "type": "Province"
  },
  {
    "countryCode": "BI",
    "code": "BI-GI",
    "name": "Gitega",
    "type": "Province"
  },
  {
    "countryCode": "BI",
    "code": "BI-KR",
    "name": "Karuzi",
    "type": "Province"
  },
  {
    "countryCode": "BI",
    "code": "BI-KY",
    "name": "Kayanza",
    "type": "Province"
  },
  {
    "countryCode": "BI",
    "code": "BI-KI",
    "name": "Kirundo",
    "type": "Province"
  },
  {
    "countryCode": "BI",
    "code": "BI-MA",
    "name": "Makamba",
    "type": "Province"
  },
  {
    "countryCode": "BI",
    "code": "BI-MU",
    "name": "Muramvya",
    "type": "Province"
  },
  {
    "countryCode": "BI",
    "code": "BI-MY",
    "name": "Muyinga",
    "type": "Province"
  },
  {
    "countryCode": "BI",
    "code": "BI-MW",
    "name": "Mwaro",
    "type": "Province"
  },
  {
    "countryCode": "BI",
    "code": "BI-NG",
    "name": "Ngozi",
    "type": "Province"
  },
  {
    "countryCode": "BI",
    "code": "BI-RM",
    "name": "Rumonge",
    "type": "Province"
  },
  {
    "countryCode": "BI",
    "code": "BI-RT",
    "name": "Rutana",
    "type": "Province"
  },
  {
    "countryCode": "BI",
    "code": "BI-RY",
    "name": "Ruyigi",
    "type": "Province"
  },
  {
    "countryCode": "BJ",
    "code": "BJ-AL",
    "name": "Alibori",
    "type": "Department"
  },
  {
    "countryCode": "BJ",
    "code": "BJ-AK",
    "name": "Atacora",
    "type": "Department"
  },
  {
    "countryCode": "BJ",
    "code": "BJ-AQ",
    "name": "Atlantique",
    "type": "Department"
  },
  {
    "countryCode": "BJ",
    "code": "BJ-BO",
    "name": "Borgou",
    "type": "Department"
  },
  {
    "countryCode": "BJ",
    "code": "BJ-CO",
    "name": "Collines",
    "type": "Department"
  },
  {
    "countryCode": "BJ",
    "code": "BJ-KO",
    "name": "Couffo",
    "type": "Department"
  },
  {
    "countryCode": "BJ",
    "code": "BJ-DO",
    "name": "Donga",
    "type": "Department"
  },
  {
    "countryCode": "BJ",
    "code": "BJ-LI",
    "name": "Littoral",
    "type": "Department"
  },
  {
    "countryCode": "BJ",
    "code": "BJ-MO",
    "name": "Mono",
    "type": "Department"
  },
  {
    "countryCode": "BJ",
    "code": "BJ-OU",
    "name": "Ouémé",
    "type": "Department"
  },
  {
    "countryCode": "BJ",
    "code": "BJ-PL",
    "name": "Plateau",
    "type": "Department"
  },
  {
    "countryCode": "BJ",
    "code": "BJ-ZO",
    "name": "Zou",
    "type": "Department"
  },
  {
    "countryCode": "BN",
    "code": "BN-BE",
    "name": "Belait",
    "type": "District"
  },
  {
    "countryCode": "BN",
    "code": "BN-BM",
    "name": "Brunei-Muara",
    "type": "District"
  },
  {
    "countryCode": "BN",
    "code": "BN-TE",
    "name": "Temburong",
    "type": "District"
  },
  {
    "countryCode": "BN",
    "code": "BN-TU",
    "name": "Tutong",
    "type": "District"
  },
  {
    "countryCode": "BO",
    "code": "BO-H",
    "name": "Chuquisaca",
    "type": "Department"
  },
  {
    "countryCode": "BO",
    "code": "BO-C",
    "name": "Cochabamba",
    "type": "Department"
  },
  {
    "countryCode": "BO",
    "code": "BO-B",
    "name": "El Beni",
    "type": "Department"
  },
  {
    "countryCode": "BO",
    "code": "BO-L",
    "name": "La Paz",
    "type": "Department"
  },
  {
    "countryCode": "BO",
    "code": "BO-O",
    "name": "Oruro",
    "type": "Department"
  },
  {
    "countryCode": "BO",
    "code": "BO-N",
    "name": "Pando",
    "type": "Department"
  },
  {
    "countryCode": "BO",
    "code": "BO-P",
    "name": "Potosí",
    "type": "Department"
  },
  {
    "countryCode": "BO",
    "code": "BO-S",
    "name": "Santa Cruz",
    "type": "Department"
  },
  {
    "countryCode": "BO",
    "code": "BO-T",
    "name": "Tarija",
    "type": "Department"
  },
  {
    "countryCode": "BQ",
    "code": "BQ-BO",
    "name": "Bonaire",
    "type": "Special municipality"
  },
  {
    "countryCode": "BQ",
    "code": "BQ-SA",
    "name": "Saba",
    "type": "Special municipality"
  },
  {
    "countryCode": "BQ",
    "code": "BQ-SE",
    "name": "Sint Eustatius",
    "type": "Special municipality"
  },
  {
    "countryCode": "BR",
    "code": "BR-AC",
    "name": "Acre",
    "type": "State"
  },
  {
    "countryCode": "BR",
    "code": "BR-AL",
    "name": "Alagoas",
    "type": "State"
  },
  {
    "countryCode": "BR",
    "code": "BR-AP",
    "name": "Amapá",
    "type": "State"
  },
  {
    "countryCode": "BR",
    "code": "BR-AM",
    "name": "Amazonas",
    "type": "State"
  },
  {
    "countryCode": "BR",
    "code": "BR-BA",
    "name": "Bahia",
    "type": "State"
  },
  {
    "countryCode": "BR",
    "code": "BR-CE",
    "name": "Ceará",
    "type": "State"
  },
  {
    "countryCode": "BR",
    "code": "BR-DF",
    "name": "Distrito Federal",
    "type": "Federal district"
  },
  {
    "countryCode": "BR",
    "code": "BR-ES",
    "name": "Espírito Santo",
    "type": "State"
  },
  {
    "countryCode": "BR",
    "code": "BR-GO",
    "name": "Goiás",
    "type": "State"
  },
  {
    "countryCode": "BR",
    "code": "BR-MA",
    "name": "Maranhão",
    "type": "State"
  },
  {
    "countryCode": "BR",
    "code": "BR-MT",
    "name": "Mato Grosso",
    "type": "State"
  },
  {
    "countryCode": "BR",
    "code": "BR-MS",
    "name": "Mato Grosso do Sul",
    "type": "State"
  },
  {
    "countryCode": "BR",
    "code": "BR-MG",
    "name": "Minas Gerais",
    "type": "State"
  },
  {
    "countryCode": "BR",
    "code": "BR-PR",
    "name": "Paraná",
    "type": "State"
  },
  {
    "countryCode": "BR",
    "code": "BR-PB",
    "name": "Paraíba",
    "type": "State"
  },
  {
    "countryCode": "BR",
    "code": "BR-PA",
    "name": "Pará",
    "type": "State"
  },
  {
    "countryCode": "BR",
    "code": "BR-PE",
    "name": "Pernambuco",
    "type": "State"
  },
  {
    "countryCode": "BR",
    "code": "BR-PI",
    "name": "Piauí",
    "type": "State"
  },
  {
    "countryCode": "BR",
    "code": "BR-RJ",
    "name": "Rio de Janeiro",
    "type": "State"
  },
  {
    "countryCode": "BR",
    "code": "BR-RN",
    "name": "Rio Grande do Norte",
    "type": "State"
  },
  {
    "countryCode": "BR",
    "code": "BR-RS",
    "name": "Rio Grande do Sul",
    "type": "State"
  },
  {
    "countryCode": "BR",
    "code": "BR-RO",
    "name": "Rondônia",
    "type": "State"
  },
  {
    "countryCode": "BR",
    "code": "BR-RR",
    "name": "Roraima",
    "type": "State"
  },
  {
    "countryCode": "BR",
    "code": "BR-SC",
    "name": "Santa Catarina",
    "type": "State"
  },
  {
    "countryCode": "BR",
    "code": "BR-SE",
    "name": "Sergipe",
    "type": "State"
  },
  {
    "countryCode": "BR",
    "code": "BR-SP",
    "name": "São Paulo",
    "type": "State"
  },
  {
    "countryCode": "BR",
    "code": "BR-TO",
    "name": "Tocantins",
    "type": "State"
  },
  {
    "countryCode": "BS",
    "code": "BS-AK",
    "name": "Acklins",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-BY",
    "name": "Berry Islands",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-BI",
    "name": "Bimini",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-BP",
    "name": "Black Point",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-CI",
    "name": "Cat Island",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-CO",
    "name": "Central Abaco",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-CS",
    "name": "Central Andros",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-CE",
    "name": "Central Eleuthera",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-FP",
    "name": "City of Freeport",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-CK",
    "name": "Crooked Island and Long Cay",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-EG",
    "name": "East Grand Bahama",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-EX",
    "name": "Exuma",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-GC",
    "name": "Grand Cay",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-HI",
    "name": "Harbour Island",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-HT",
    "name": "Hope Town",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-IN",
    "name": "Inagua",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-LI",
    "name": "Long Island",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-MC",
    "name": "Mangrove Cay",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-MG",
    "name": "Mayaguana",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-MI",
    "name": "Moore's Island",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-NP",
    "name": "New Providence",
    "type": "Island"
  },
  {
    "countryCode": "BS",
    "code": "BS-NO",
    "name": "North Abaco",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-NS",
    "name": "North Andros",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-NE",
    "name": "North Eleuthera",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-RI",
    "name": "Ragged Island",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-RC",
    "name": "Rum Cay",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-SS",
    "name": "San Salvador",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-SO",
    "name": "South Abaco",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-SA",
    "name": "South Andros",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-SE",
    "name": "South Eleuthera",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-SW",
    "name": "Spanish Wells",
    "type": "District"
  },
  {
    "countryCode": "BS",
    "code": "BS-WG",
    "name": "West Grand Bahama",
    "type": "District"
  },
  {
    "countryCode": "BT",
    "code": "BT-33",
    "name": "Bumthang",
    "type": "District"
  },
  {
    "countryCode": "BT",
    "code": "BT-12",
    "name": "Chhukha",
    "type": "District"
  },
  {
    "countryCode": "BT",
    "code": "BT-22",
    "name": "Dagana",
    "type": "District"
  },
  {
    "countryCode": "BT",
    "code": "BT-GA",
    "name": "Gasa",
    "type": "District"
  },
  {
    "countryCode": "BT",
    "code": "BT-13",
    "name": "Haa",
    "type": "District"
  },
  {
    "countryCode": "BT",
    "code": "BT-44",
    "name": "Lhuentse",
    "type": "District"
  },
  {
    "countryCode": "BT",
    "code": "BT-42",
    "name": "Monggar",
    "type": "District"
  },
  {
    "countryCode": "BT",
    "code": "BT-11",
    "name": "Paro",
    "type": "District"
  },
  {
    "countryCode": "BT",
    "code": "BT-43",
    "name": "Pema Gatshel",
    "type": "District"
  },
  {
    "countryCode": "BT",
    "code": "BT-23",
    "name": "Punakha",
    "type": "District"
  },
  {
    "countryCode": "BT",
    "code": "BT-45",
    "name": "Samdrup Jongkhar",
    "type": "District"
  },
  {
    "countryCode": "BT",
    "code": "BT-14",
    "name": "Samtse",
    "type": "District"
  },
  {
    "countryCode": "BT",
    "code": "BT-31",
    "name": "Sarpang",
    "type": "District"
  },
  {
    "countryCode": "BT",
    "code": "BT-15",
    "name": "Thimphu",
    "type": "District"
  },
  {
    "countryCode": "BT",
    "code": "BT-TY",
    "name": "Trashi Yangtse",
    "type": "District"
  },
  {
    "countryCode": "BT",
    "code": "BT-41",
    "name": "Trashigang",
    "type": "District"
  },
  {
    "countryCode": "BT",
    "code": "BT-32",
    "name": "Trongsa",
    "type": "District"
  },
  {
    "countryCode": "BT",
    "code": "BT-21",
    "name": "Tsirang",
    "type": "District"
  },
  {
    "countryCode": "BT",
    "code": "BT-24",
    "name": "Wangdue Phodrang",
    "type": "District"
  },
  {
    "countryCode": "BT",
    "code": "BT-34",
    "name": "Zhemgang",
    "type": "District"
  },
  {
    "countryCode": "BW",
    "code": "BW-CE",
    "name": "Central",
    "type": "District"
  },
  {
    "countryCode": "BW",
    "code": "BW-CH",
    "name": "Chobe",
    "type": "District"
  },
  {
    "countryCode": "BW",
    "code": "BW-FR",
    "name": "Francistown",
    "type": "City"
  },
  {
    "countryCode": "BW",
    "code": "BW-GA",
    "name": "Gaborone",
    "type": "City"
  },
  {
    "countryCode": "BW",
    "code": "BW-GH",
    "name": "Ghanzi",
    "type": "District"
  },
  {
    "countryCode": "BW",
    "code": "BW-JW",
    "name": "Jwaneng",
    "type": "Town"
  },
  {
    "countryCode": "BW",
    "code": "BW-KG",
    "name": "Kgalagadi",
    "type": "District"
  },
  {
    "countryCode": "BW",
    "code": "BW-KL",
    "name": "Kgatleng",
    "type": "District"
  },
  {
    "countryCode": "BW",
    "code": "BW-KW",
    "name": "Kweneng",
    "type": "District"
  },
  {
    "countryCode": "BW",
    "code": "BW-LO",
    "name": "Lobatse",
    "type": "Town"
  },
  {
    "countryCode": "BW",
    "code": "BW-NE",
    "name": "North East",
    "type": "District"
  },
  {
    "countryCode": "BW",
    "code": "BW-NW",
    "name": "North West",
    "type": "District"
  },
  {
    "countryCode": "BW",
    "code": "BW-SP",
    "name": "Selibe Phikwe",
    "type": "Town"
  },
  {
    "countryCode": "BW",
    "code": "BW-SE",
    "name": "South East",
    "type": "District"
  },
  {
    "countryCode": "BW",
    "code": "BW-SO",
    "name": "Southern",
    "type": "District"
  },
  {
    "countryCode": "BW",
    "code": "BW-ST",
    "name": "Sowa Town",
    "type": "Town"
  },
  {
    "countryCode": "BY",
    "code": "BY-BR",
    "name": "Bresckaja voblasć",
    "type": "Oblast"
  },
  {
    "countryCode": "BY",
    "code": "BY-HO",
    "name": "Gomel'skaja oblast'",
    "type": "Oblast"
  },
  {
    "countryCode": "BY",
    "code": "BY-HM",
    "name": "Gorod Minsk",
    "type": "City"
  },
  {
    "countryCode": "BY",
    "code": "BY-HR",
    "name": "Grodnenskaja oblast'",
    "type": "Oblast"
  },
  {
    "countryCode": "BY",
    "code": "BY-MA",
    "name": "Mahilioŭskaja voblasć",
    "type": "Oblast"
  },
  {
    "countryCode": "BY",
    "code": "BY-MI",
    "name": "Minskaja oblast'",
    "type": "Oblast"
  },
  {
    "countryCode": "BY",
    "code": "BY-VI",
    "name": "Viciebskaja voblasć",
    "type": "Oblast"
  },
  {
    "countryCode": "BZ",
    "code": "BZ-BZ",
    "name": "Belize",
    "type": "District"
  },
  {
    "countryCode": "BZ",
    "code": "BZ-CY",
    "name": "Cayo",
    "type": "District"
  },
  {
    "countryCode": "BZ",
    "code": "BZ-CZL",
    "name": "Corozal",
    "type": "District"
  },
  {
    "countryCode": "BZ",
    "code": "BZ-OW",
    "name": "Orange Walk",
    "type": "District"
  },
  {
    "countryCode": "BZ",
    "code": "BZ-SC",
    "name": "Stann Creek",
    "type": "District"
  },
  {
    "countryCode": "BZ",
    "code": "BZ-TOL",
    "name": "Toledo",
    "type": "District"
  },
  {
    "countryCode": "CA",
    "code": "CA-AB",
    "name": "Alberta",
    "type": "Province"
  },
  {
    "countryCode": "CA",
    "code": "CA-BC",
    "name": "British Columbia",
    "type": "Province"
  },
  {
    "countryCode": "CA",
    "code": "CA-MB",
    "name": "Manitoba",
    "type": "Province"
  },
  {
    "countryCode": "CA",
    "code": "CA-NB",
    "name": "New Brunswick",
    "type": "Province"
  },
  {
    "countryCode": "CA",
    "code": "CA-NL",
    "name": "Newfoundland and Labrador",
    "type": "Province"
  },
  {
    "countryCode": "CA",
    "code": "CA-NT",
    "name": "Northwest Territories",
    "type": "Territory"
  },
  {
    "countryCode": "CA",
    "code": "CA-NS",
    "name": "Nova Scotia",
    "type": "Province"
  },
  {
    "countryCode": "CA",
    "code": "CA-NU",
    "name": "Nunavut",
    "type": "Territory"
  },
  {
    "countryCode": "CA",
    "code": "CA-ON",
    "name": "Ontario",
    "type": "Province"
  },
  {
    "countryCode": "CA",
    "code": "CA-PE",
    "name": "Prince Edward Island",
    "type": "Province"
  },
  {
    "countryCode": "CA",
    "code": "CA-QC",
    "name": "Quebec",
    "type": "Province"
  },
  {
    "countryCode": "CA",
    "code": "CA-SK",
    "name": "Saskatchewan",
    "type": "Province"
  },
  {
    "countryCode": "CA",
    "code": "CA-YT",
    "name": "Yukon",
    "type": "Territory"
  },
  {
    "countryCode": "CD",
    "code": "CD-BU",
    "name": "Bas-Uélé",
    "type": "Province"
  },
  {
    "countryCode": "CD",
    "code": "CD-HK",
    "name": "Haut-Katanga",
    "type": "Province"
  },
  {
    "countryCode": "CD",
    "code": "CD-HL",
    "name": "Haut-Lomami",
    "type": "Province"
  },
  {
    "countryCode": "CD",
    "code": "CD-HU",
    "name": "Haut-Uélé",
    "type": "Province"
  },
  {
    "countryCode": "CD",
    "code": "CD-IT",
    "name": "Ituri",
    "type": "Province"
  },
  {
    "countryCode": "CD",
    "code": "CD-KS",
    "name": "Kasaï",
    "type": "Province"
  },
  {
    "countryCode": "CD",
    "code": "CD-KC",
    "name": "Kasaï Central",
    "type": "Province"
  },
  {
    "countryCode": "CD",
    "code": "CD-KE",
    "name": "Kasaï Oriental",
    "type": "Province"
  },
  {
    "countryCode": "CD",
    "code": "CD-KN",
    "name": "Kinshasa",
    "type": "City"
  },
  {
    "countryCode": "CD",
    "code": "CD-BC",
    "name": "Kongo Central",
    "type": "Province"
  },
  {
    "countryCode": "CD",
    "code": "CD-KG",
    "name": "Kwango",
    "type": "Province"
  },
  {
    "countryCode": "CD",
    "code": "CD-KL",
    "name": "Kwilu",
    "type": "Province"
  },
  {
    "countryCode": "CD",
    "code": "CD-LO",
    "name": "Lomami",
    "type": "Province"
  },
  {
    "countryCode": "CD",
    "code": "CD-LU",
    "name": "Lualaba",
    "type": "Province"
  },
  {
    "countryCode": "CD",
    "code": "CD-MN",
    "name": "Mai-Ndombe",
    "type": "Province"
  },
  {
    "countryCode": "CD",
    "code": "CD-MA",
    "name": "Maniema",
    "type": "Province"
  },
  {
    "countryCode": "CD",
    "code": "CD-MO",
    "name": "Mongala",
    "type": "Province"
  },
  {
    "countryCode": "CD",
    "code": "CD-NK",
    "name": "Nord-Kivu",
    "type": "Province"
  },
  {
    "countryCode": "CD",
    "code": "CD-NU",
    "name": "Nord-Ubangi",
    "type": "Province"
  },
  {
    "countryCode": "CD",
    "code": "CD-SA",
    "name": "Sankuru",
    "type": "Province"
  },
  {
    "countryCode": "CD",
    "code": "CD-SK",
    "name": "Sud-Kivu",
    "type": "Province"
  },
  {
    "countryCode": "CD",
    "code": "CD-SU",
    "name": "Sud-Ubangi",
    "type": "Province"
  },
  {
    "countryCode": "CD",
    "code": "CD-TA",
    "name": "Tanganyika",
    "type": "Province"
  },
  {
    "countryCode": "CD",
    "code": "CD-TO",
    "name": "Tshopo",
    "type": "Province"
  },
  {
    "countryCode": "CD",
    "code": "CD-TU",
    "name": "Tshuapa",
    "type": "Province"
  },
  {
    "countryCode": "CD",
    "code": "CD-EQ",
    "name": "Équateur",
    "type": "Province"
  },
  {
    "countryCode": "CF",
    "code": "CF-BB",
    "name": "Bamingui-Bangoran",
    "type": "Prefecture"
  },
  {
    "countryCode": "CF",
    "code": "CF-BGF",
    "name": "Bangui",
    "type": "Commune"
  },
  {
    "countryCode": "CF",
    "code": "CF-BK",
    "name": "Basse-Kotto",
    "type": "Prefecture"
  },
  {
    "countryCode": "CF",
    "code": "CF-KB",
    "name": "Gribingui",
    "type": "Economic prefecture"
  },
  {
    "countryCode": "CF",
    "code": "CF-HM",
    "name": "Haut-Mbomou",
    "type": "Prefecture"
  },
  {
    "countryCode": "CF",
    "code": "CF-HK",
    "name": "Haute-Kotto",
    "type": "Prefecture"
  },
  {
    "countryCode": "CF",
    "code": "CF-HS",
    "name": "Haute-Sangha / Mambéré-Kadéï",
    "type": "Prefecture"
  },
  {
    "countryCode": "CF",
    "code": "CF-KG",
    "name": "Kémo-Gribingui",
    "type": "Prefecture"
  },
  {
    "countryCode": "CF",
    "code": "CF-LB",
    "name": "Lobaye",
    "type": "Prefecture"
  },
  {
    "countryCode": "CF",
    "code": "CF-MB",
    "name": "Mbomou",
    "type": "Prefecture"
  },
  {
    "countryCode": "CF",
    "code": "CF-NM",
    "name": "Nana-Mambéré",
    "type": "Prefecture"
  },
  {
    "countryCode": "CF",
    "code": "CF-MP",
    "name": "Ombella-Mpoko",
    "type": "Prefecture"
  },
  {
    "countryCode": "CF",
    "code": "CF-UK",
    "name": "Ouaka",
    "type": "Prefecture"
  },
  {
    "countryCode": "CF",
    "code": "CF-AC",
    "name": "Ouham",
    "type": "Prefecture"
  },
  {
    "countryCode": "CF",
    "code": "CF-OP",
    "name": "Ouham-Pendé",
    "type": "Prefecture"
  },
  {
    "countryCode": "CF",
    "code": "CF-SE",
    "name": "Sangha",
    "type": "Economic prefecture"
  },
  {
    "countryCode": "CF",
    "code": "CF-VK",
    "name": "Vakaga",
    "type": "Prefecture"
  },
  {
    "countryCode": "CG",
    "code": "CG-11",
    "name": "Bouenza",
    "type": "Department"
  },
  {
    "countryCode": "CG",
    "code": "CG-BZV",
    "name": "Brazzaville",
    "type": "Department"
  },
  {
    "countryCode": "CG",
    "code": "CG-8",
    "name": "Cuvette",
    "type": "Department"
  },
  {
    "countryCode": "CG",
    "code": "CG-15",
    "name": "Cuvette-Ouest",
    "type": "Department"
  },
  {
    "countryCode": "CG",
    "code": "CG-5",
    "name": "Kouilou",
    "type": "Department"
  },
  {
    "countryCode": "CG",
    "code": "CG-7",
    "name": "Likouala",
    "type": "Department"
  },
  {
    "countryCode": "CG",
    "code": "CG-2",
    "name": "Lékoumou",
    "type": "Department"
  },
  {
    "countryCode": "CG",
    "code": "CG-9",
    "name": "Niari",
    "type": "Department"
  },
  {
    "countryCode": "CG",
    "code": "CG-14",
    "name": "Plateaux",
    "type": "Department"
  },
  {
    "countryCode": "CG",
    "code": "CG-16",
    "name": "Pointe-Noire",
    "type": "Department"
  },
  {
    "countryCode": "CG",
    "code": "CG-12",
    "name": "Pool",
    "type": "Department"
  },
  {
    "countryCode": "CG",
    "code": "CG-13",
    "name": "Sangha",
    "type": "Department"
  },
  {
    "countryCode": "CH",
    "code": "CH-AG",
    "name": "Aargau",
    "type": "Canton"
  },
  {
    "countryCode": "CH",
    "code": "CH-AR",
    "name": "Appenzell Ausserrhoden",
    "type": "Canton"
  },
  {
    "countryCode": "CH",
    "code": "CH-AI",
    "name": "Appenzell Innerrhoden",
    "type": "Canton"
  },
  {
    "countryCode": "CH",
    "code": "CH-BL",
    "name": "Basel-Landschaft",
    "type": "Canton"
  },
  {
    "countryCode": "CH",
    "code": "CH-BS",
    "name": "Basel-Stadt",
    "type": "Canton"
  },
  {
    "countryCode": "CH",
    "code": "CH-BE",
    "name": "Berne",
    "type": "Canton"
  },
  {
    "countryCode": "CH",
    "code": "CH-FR",
    "name": "Fribourg",
    "type": "Canton"
  },
  {
    "countryCode": "CH",
    "code": "CH-GE",
    "name": "Genève",
    "type": "Canton"
  },
  {
    "countryCode": "CH",
    "code": "CH-GL",
    "name": "Glarus",
    "type": "Canton"
  },
  {
    "countryCode": "CH",
    "code": "CH-GR",
    "name": "Graubünden",
    "type": "Canton"
  },
  {
    "countryCode": "CH",
    "code": "CH-JU",
    "name": "Jura",
    "type": "Canton"
  },
  {
    "countryCode": "CH",
    "code": "CH-LU",
    "name": "Luzern",
    "type": "Canton"
  },
  {
    "countryCode": "CH",
    "code": "CH-NE",
    "name": "Neuchâtel",
    "type": "Canton"
  },
  {
    "countryCode": "CH",
    "code": "CH-NW",
    "name": "Nidwalden",
    "type": "Canton"
  },
  {
    "countryCode": "CH",
    "code": "CH-OW",
    "name": "Obwalden",
    "type": "Canton"
  },
  {
    "countryCode": "CH",
    "code": "CH-SG",
    "name": "Sankt Gallen",
    "type": "Canton"
  },
  {
    "countryCode": "CH",
    "code": "CH-SH",
    "name": "Schaffhausen",
    "type": "Canton"
  },
  {
    "countryCode": "CH",
    "code": "CH-SZ",
    "name": "Schwyz",
    "type": "Canton"
  },
  {
    "countryCode": "CH",
    "code": "CH-SO",
    "name": "Solothurn",
    "type": "Canton"
  },
  {
    "countryCode": "CH",
    "code": "CH-TG",
    "name": "Thurgau",
    "type": "Canton"
  },
  {
    "countryCode": "CH",
    "code": "CH-TI",
    "name": "Ticino",
    "type": "Canton"
  },
  {
    "countryCode": "CH",
    "code": "CH-UR",
    "name": "Uri",
    "type": "Canton"
  },
  {
    "countryCode": "CH",
    "code": "CH-VS",
    "name": "Valais",
    "type": "Canton"
  },
  {
    "countryCode": "CH",
    "code": "CH-VD",
    "name": "Vaud",
    "type": "Canton"
  },
  {
    "countryCode": "CH",
    "code": "CH-ZG",
    "name": "Zug",
    "type": "Canton"
  },
  {
    "countryCode": "CH",
    "code": "CH-ZH",
    "name": "Zürich",
    "type": "Canton"
  },
  {
    "countryCode": "CI",
    "code": "CI-AB",
    "name": "Abidjan",
    "type": "Autonomous district"
  },
  {
    "countryCode": "CI",
    "code": "CI-BS",
    "name": "Bas-Sassandra",
    "type": "District"
  },
  {
    "countryCode": "CI",
    "code": "CI-CM",
    "name": "Comoé",
    "type": "District"
  },
  {
    "countryCode": "CI",
    "code": "CI-DN",
    "name": "Denguélé",
    "type": "District"
  },
  {
    "countryCode": "CI",
    "code": "CI-GD",
    "name": "Gôh-Djiboua",
    "type": "District"
  },
  {
    "countryCode": "CI",
    "code": "CI-LC",
    "name": "Lacs",
    "type": "District"
  },
  {
    "countryCode": "CI",
    "code": "CI-LG",
    "name": "Lagunes",
    "type": "District"
  },
  {
    "countryCode": "CI",
    "code": "CI-MG",
    "name": "Montagnes",
    "type": "District"
  },
  {
    "countryCode": "CI",
    "code": "CI-SM",
    "name": "Sassandra-Marahoué",
    "type": "District"
  },
  {
    "countryCode": "CI",
    "code": "CI-SV",
    "name": "Savanes",
    "type": "District"
  },
  {
    "countryCode": "CI",
    "code": "CI-VB",
    "name": "Vallée du Bandama",
    "type": "District"
  },
  {
    "countryCode": "CI",
    "code": "CI-WR",
    "name": "Woroba",
    "type": "District"
  },
  {
    "countryCode": "CI",
    "code": "CI-YM",
    "name": "Yamoussoukro",
    "type": "Autonomous district"
  },
  {
    "countryCode": "CI",
    "code": "CI-ZZ",
    "name": "Zanzan",
    "type": "District"
  },
  {
    "countryCode": "CL",
    "code": "CL-AI",
    "name": "Aisén del General Carlos Ibañez del Campo",
    "type": "Region"
  },
  {
    "countryCode": "CL",
    "code": "CL-AN",
    "name": "Antofagasta",
    "type": "Region"
  },
  {
    "countryCode": "CL",
    "code": "CL-AP",
    "name": "Arica y Parinacota",
    "type": "Region"
  },
  {
    "countryCode": "CL",
    "code": "CL-AT",
    "name": "Atacama",
    "type": "Region"
  },
  {
    "countryCode": "CL",
    "code": "CL-BI",
    "name": "Biobío",
    "type": "Region"
  },
  {
    "countryCode": "CL",
    "code": "CL-CO",
    "name": "Coquimbo",
    "type": "Region"
  },
  {
    "countryCode": "CL",
    "code": "CL-AR",
    "name": "La Araucanía",
    "type": "Region"
  },
  {
    "countryCode": "CL",
    "code": "CL-LI",
    "name": "Libertador General Bernardo O'Higgins",
    "type": "Region"
  },
  {
    "countryCode": "CL",
    "code": "CL-LL",
    "name": "Los Lagos",
    "type": "Region"
  },
  {
    "countryCode": "CL",
    "code": "CL-LR",
    "name": "Los Ríos",
    "type": "Region"
  },
  {
    "countryCode": "CL",
    "code": "CL-MA",
    "name": "Magallanes",
    "type": "Region"
  },
  {
    "countryCode": "CL",
    "code": "CL-ML",
    "name": "Maule",
    "type": "Region"
  },
  {
    "countryCode": "CL",
    "code": "CL-RM",
    "name": "Región Metropolitana de Santiago",
    "type": "Region"
  },
  {
    "countryCode": "CL",
    "code": "CL-TA",
    "name": "Tarapacá",
    "type": "Region"
  },
  {
    "countryCode": "CL",
    "code": "CL-VS",
    "name": "Valparaíso",
    "type": "Region"
  },
  {
    "countryCode": "CL",
    "code": "CL-NB",
    "name": "Ñuble",
    "type": "Region"
  },
  {
    "countryCode": "CM",
    "code": "CM-AD",
    "name": "Adamaoua",
    "type": "Region"
  },
  {
    "countryCode": "CM",
    "code": "CM-CE",
    "name": "Centre",
    "type": "Region"
  },
  {
    "countryCode": "CM",
    "code": "CM-ES",
    "name": "East",
    "type": "Region"
  },
  {
    "countryCode": "CM",
    "code": "CM-EN",
    "name": "Far North",
    "type": "Region"
  },
  {
    "countryCode": "CM",
    "code": "CM-LT",
    "name": "Littoral",
    "type": "Region"
  },
  {
    "countryCode": "CM",
    "code": "CM-NO",
    "name": "North",
    "type": "Region"
  },
  {
    "countryCode": "CM",
    "code": "CM-NW",
    "name": "North-West",
    "type": "Region"
  },
  {
    "countryCode": "CM",
    "code": "CM-SU",
    "name": "South",
    "type": "Region"
  },
  {
    "countryCode": "CM",
    "code": "CM-SW",
    "name": "South-West",
    "type": "Region"
  },
  {
    "countryCode": "CM",
    "code": "CM-OU",
    "name": "West",
    "type": "Region"
  },
  {
    "countryCode": "CN",
    "code": "CN-AH",
    "name": "Anhui Sheng",
    "type": "Province"
  },
  {
    "countryCode": "CN",
    "code": "CN-BJ",
    "name": "Beijing Shi",
    "type": "Municipality"
  },
  {
    "countryCode": "CN",
    "code": "CN-CQ",
    "name": "Chongqing Shi",
    "type": "Municipality"
  },
  {
    "countryCode": "CN",
    "code": "CN-FJ",
    "name": "Fujian Sheng",
    "type": "Province"
  },
  {
    "countryCode": "CN",
    "code": "CN-GS",
    "name": "Gansu Sheng",
    "type": "Province"
  },
  {
    "countryCode": "CN",
    "code": "CN-GD",
    "name": "Guangdong Sheng",
    "type": "Province"
  },
  {
    "countryCode": "CN",
    "code": "CN-GX",
    "name": "Guangxi Zhuangzu Zizhiqu",
    "type": "Autonomous region"
  },
  {
    "countryCode": "CN",
    "code": "CN-GZ",
    "name": "Guizhou Sheng",
    "type": "Province"
  },
  {
    "countryCode": "CN",
    "code": "CN-HI",
    "name": "Hainan Sheng",
    "type": "Province"
  },
  {
    "countryCode": "CN",
    "code": "CN-HE",
    "name": "Hebei Sheng",
    "type": "Province"
  },
  {
    "countryCode": "CN",
    "code": "CN-HL",
    "name": "Heilongjiang Sheng",
    "type": "Province"
  },
  {
    "countryCode": "CN",
    "code": "CN-HA",
    "name": "Henan Sheng",
    "type": "Province"
  },
  {
    "countryCode": "CN",
    "code": "CN-HK",
    "name": "Hong Kong SAR",
    "type": "Special administrative region"
  },
  {
    "countryCode": "CN",
    "code": "CN-HB",
    "name": "Hubei Sheng",
    "type": "Province"
  },
  {
    "countryCode": "CN",
    "code": "CN-HN",
    "name": "Hunan Sheng",
    "type": "Province"
  },
  {
    "countryCode": "CN",
    "code": "CN-JS",
    "name": "Jiangsu Sheng",
    "type": "Province"
  },
  {
    "countryCode": "CN",
    "code": "CN-JX",
    "name": "Jiangxi Sheng",
    "type": "Province"
  },
  {
    "countryCode": "CN",
    "code": "CN-JL",
    "name": "Jilin Sheng",
    "type": "Province"
  },
  {
    "countryCode": "CN",
    "code": "CN-LN",
    "name": "Liaoning Sheng",
    "type": "Province"
  },
  {
    "countryCode": "CN",
    "code": "CN-MO",
    "name": "Macao SAR",
    "type": "Special administrative region"
  },
  {
    "countryCode": "CN",
    "code": "CN-NM",
    "name": "Nei Mongol Zizhiqu",
    "type": "Autonomous region"
  },
  {
    "countryCode": "CN",
    "code": "CN-NX",
    "name": "Ningxia Huizu Zizhiqu",
    "type": "Autonomous region"
  },
  {
    "countryCode": "CN",
    "code": "CN-QH",
    "name": "Qinghai Sheng",
    "type": "Province"
  },
  {
    "countryCode": "CN",
    "code": "CN-SN",
    "name": "Shaanxi Sheng",
    "type": "Province"
  },
  {
    "countryCode": "CN",
    "code": "CN-SD",
    "name": "Shandong Sheng",
    "type": "Province"
  },
  {
    "countryCode": "CN",
    "code": "CN-SH",
    "name": "Shanghai Shi",
    "type": "Municipality"
  },
  {
    "countryCode": "CN",
    "code": "CN-SX",
    "name": "Shanxi Sheng",
    "type": "Province"
  },
  {
    "countryCode": "CN",
    "code": "CN-SC",
    "name": "Sichuan Sheng",
    "type": "Province"
  },
  {
    "countryCode": "CN",
    "code": "CN-TW",
    "name": "Taiwan Sheng",
    "type": "Province"
  },
  {
    "countryCode": "CN",
    "code": "CN-TJ",
    "name": "Tianjin Shi",
    "type": "Municipality"
  },
  {
    "countryCode": "CN",
    "code": "CN-XJ",
    "name": "Xinjiang Uygur Zizhiqu",
    "type": "Autonomous region"
  },
  {
    "countryCode": "CN",
    "code": "CN-XZ",
    "name": "Xizang Zizhiqu",
    "type": "Autonomous region"
  },
  {
    "countryCode": "CN",
    "code": "CN-YN",
    "name": "Yunnan Sheng",
    "type": "Province"
  },
  {
    "countryCode": "CN",
    "code": "CN-ZJ",
    "name": "Zhejiang Sheng",
    "type": "Province"
  },
  {
    "countryCode": "CO",
    "code": "CO-AMA",
    "name": "Amazonas",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-ANT",
    "name": "Antioquia",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-ARA",
    "name": "Arauca",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-ATL",
    "name": "Atlántico",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-BOL",
    "name": "Bolívar",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-BOY",
    "name": "Boyacá",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-CAL",
    "name": "Caldas",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-CAQ",
    "name": "Caquetá",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-CAS",
    "name": "Casanare",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-CAU",
    "name": "Cauca",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-CES",
    "name": "Cesar",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-CHO",
    "name": "Chocó",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-CUN",
    "name": "Cundinamarca",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-COR",
    "name": "Córdoba",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-DC",
    "name": "Distrito Capital de Bogotá",
    "type": "Capital district"
  },
  {
    "countryCode": "CO",
    "code": "CO-GUA",
    "name": "Guainía",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-GUV",
    "name": "Guaviare",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-HUI",
    "name": "Huila",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-LAG",
    "name": "La Guajira",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-MAG",
    "name": "Magdalena",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-MET",
    "name": "Meta",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-NAR",
    "name": "Nariño",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-NSA",
    "name": "Norte de Santander",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-PUT",
    "name": "Putumayo",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-QUI",
    "name": "Quindío",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-RIS",
    "name": "Risaralda",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-SAP",
    "name": "San Andrés, Providencia y Santa Catalina",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-SAN",
    "name": "Santander",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-SUC",
    "name": "Sucre",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-TOL",
    "name": "Tolima",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-VAC",
    "name": "Valle del Cauca",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-VAU",
    "name": "Vaupés",
    "type": "Department"
  },
  {
    "countryCode": "CO",
    "code": "CO-VID",
    "name": "Vichada",
    "type": "Department"
  },
  {
    "countryCode": "CR",
    "code": "CR-A",
    "name": "Alajuela",
    "type": "Province"
  },
  {
    "countryCode": "CR",
    "code": "CR-C",
    "name": "Cartago",
    "type": "Province"
  },
  {
    "countryCode": "CR",
    "code": "CR-G",
    "name": "Guanacaste",
    "type": "Province"
  },
  {
    "countryCode": "CR",
    "code": "CR-H",
    "name": "Heredia",
    "type": "Province"
  },
  {
    "countryCode": "CR",
    "code": "CR-L",
    "name": "Limón",
    "type": "Province"
  },
  {
    "countryCode": "CR",
    "code": "CR-P",
    "name": "Puntarenas",
    "type": "Province"
  },
  {
    "countryCode": "CR",
    "code": "CR-SJ",
    "name": "San José",
    "type": "Province"
  },
  {
    "countryCode": "CU",
    "code": "CU-15",
    "name": "Artemisa",
    "type": "Province"
  },
  {
    "countryCode": "CU",
    "code": "CU-09",
    "name": "Camagüey",
    "type": "Province"
  },
  {
    "countryCode": "CU",
    "code": "CU-08",
    "name": "Ciego de Ávila",
    "type": "Province"
  },
  {
    "countryCode": "CU",
    "code": "CU-06",
    "name": "Cienfuegos",
    "type": "Province"
  },
  {
    "countryCode": "CU",
    "code": "CU-12",
    "name": "Granma",
    "type": "Province"
  },
  {
    "countryCode": "CU",
    "code": "CU-14",
    "name": "Guantánamo",
    "type": "Province"
  },
  {
    "countryCode": "CU",
    "code": "CU-11",
    "name": "Holguín",
    "type": "Province"
  },
  {
    "countryCode": "CU",
    "code": "CU-99",
    "name": "Isla de la Juventud",
    "type": "Special municipality"
  },
  {
    "countryCode": "CU",
    "code": "CU-03",
    "name": "La Habana",
    "type": "Province"
  },
  {
    "countryCode": "CU",
    "code": "CU-10",
    "name": "Las Tunas",
    "type": "Province"
  },
  {
    "countryCode": "CU",
    "code": "CU-04",
    "name": "Matanzas",
    "type": "Province"
  },
  {
    "countryCode": "CU",
    "code": "CU-16",
    "name": "Mayabeque",
    "type": "Province"
  },
  {
    "countryCode": "CU",
    "code": "CU-01",
    "name": "Pinar del Río",
    "type": "Province"
  },
  {
    "countryCode": "CU",
    "code": "CU-07",
    "name": "Sancti Spíritus",
    "type": "Province"
  },
  {
    "countryCode": "CU",
    "code": "CU-13",
    "name": "Santiago de Cuba",
    "type": "Province"
  },
  {
    "countryCode": "CU",
    "code": "CU-05",
    "name": "Villa Clara",
    "type": "Province"
  },
  {
    "countryCode": "CV",
    "code": "CV-BV",
    "name": "Boa Vista",
    "type": "Municipality"
  },
  {
    "countryCode": "CV",
    "code": "CV-BR",
    "name": "Brava",
    "type": "Municipality"
  },
  {
    "countryCode": "CV",
    "code": "CV-B",
    "name": "Ilhas de Barlavento",
    "type": "Geographical region"
  },
  {
    "countryCode": "CV",
    "code": "CV-S",
    "name": "Ilhas de Sotavento",
    "type": "Geographical region"
  },
  {
    "countryCode": "CV",
    "code": "CV-MA",
    "name": "Maio",
    "type": "Municipality"
  },
  {
    "countryCode": "CV",
    "code": "CV-MO",
    "name": "Mosteiros",
    "type": "Municipality"
  },
  {
    "countryCode": "CV",
    "code": "CV-PA",
    "name": "Paul",
    "type": "Municipality"
  },
  {
    "countryCode": "CV",
    "code": "CV-PN",
    "name": "Porto Novo",
    "type": "Municipality"
  },
  {
    "countryCode": "CV",
    "code": "CV-PR",
    "name": "Praia",
    "type": "Municipality"
  },
  {
    "countryCode": "CV",
    "code": "CV-RB",
    "name": "Ribeira Brava",
    "type": "Municipality"
  },
  {
    "countryCode": "CV",
    "code": "CV-RG",
    "name": "Ribeira Grande",
    "type": "Municipality"
  },
  {
    "countryCode": "CV",
    "code": "CV-RS",
    "name": "Ribeira Grande de Santiago",
    "type": "Municipality"
  },
  {
    "countryCode": "CV",
    "code": "CV-SL",
    "name": "Sal",
    "type": "Municipality"
  },
  {
    "countryCode": "CV",
    "code": "CV-CA",
    "name": "Santa Catarina",
    "type": "Municipality"
  },
  {
    "countryCode": "CV",
    "code": "CV-CF",
    "name": "Santa Catarina do Fogo",
    "type": "Municipality"
  },
  {
    "countryCode": "CV",
    "code": "CV-CR",
    "name": "Santa Cruz",
    "type": "Municipality"
  },
  {
    "countryCode": "CV",
    "code": "CV-SD",
    "name": "São Domingos",
    "type": "Municipality"
  },
  {
    "countryCode": "CV",
    "code": "CV-SF",
    "name": "São Filipe",
    "type": "Municipality"
  },
  {
    "countryCode": "CV",
    "code": "CV-SO",
    "name": "São Lourenço dos Órgãos",
    "type": "Municipality"
  },
  {
    "countryCode": "CV",
    "code": "CV-SM",
    "name": "São Miguel",
    "type": "Municipality"
  },
  {
    "countryCode": "CV",
    "code": "CV-SS",
    "name": "São Salvador do Mundo",
    "type": "Municipality"
  },
  {
    "countryCode": "CV",
    "code": "CV-SV",
    "name": "São Vicente",
    "type": "Municipality"
  },
  {
    "countryCode": "CV",
    "code": "CV-TA",
    "name": "Tarrafal",
    "type": "Municipality"
  },
  {
    "countryCode": "CV",
    "code": "CV-TS",
    "name": "Tarrafal de São Nicolau",
    "type": "Municipality"
  },
  {
    "countryCode": "CY",
    "code": "CY-04",
    "name": "Ammochostos",
    "type": "District"
  },
  {
    "countryCode": "CY",
    "code": "CY-05",
    "name": "Baf",
    "type": "District"
  },
  {
    "countryCode": "CY",
    "code": "CY-06",
    "name": "Girne",
    "type": "District"
  },
  {
    "countryCode": "CY",
    "code": "CY-03",
    "name": "Larnaka",
    "type": "District"
  },
  {
    "countryCode": "CY",
    "code": "CY-01",
    "name": "Lefkosia",
    "type": "District"
  },
  {
    "countryCode": "CY",
    "code": "CY-02",
    "name": "Lemesos",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-201",
    "name": "Benešov",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-202",
    "name": "Beroun",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-641",
    "name": "Blansko",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-642",
    "name": "Brno-město",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-643",
    "name": "Brno-venkov",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-801",
    "name": "Bruntál",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-644",
    "name": "Břeclav",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-411",
    "name": "Cheb",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-422",
    "name": "Chomutov",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-531",
    "name": "Chrudim",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-321",
    "name": "Domažlice",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-421",
    "name": "Děčín",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-802",
    "name": "Frýdek-Místek",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-631",
    "name": "Havlíčkův Brod",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-645",
    "name": "Hodonín",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-521",
    "name": "Hradec Králové",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-512",
    "name": "Jablonec nad Nisou",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-711",
    "name": "Jeseník",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-632",
    "name": "Jihlava",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-64",
    "name": "Jihomoravský kraj",
    "type": "Region"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-31",
    "name": "Jihočeský kraj",
    "type": "Region"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-313",
    "name": "Jindřichův Hradec",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-522",
    "name": "Jičín",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-41",
    "name": "Karlovarský kraj",
    "type": "Region"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-412",
    "name": "Karlovy Vary",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-803",
    "name": "Karviná",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-203",
    "name": "Kladno",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-322",
    "name": "Klatovy",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-204",
    "name": "Kolín",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-63",
    "name": "Kraj Vysočina",
    "type": "Region"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-721",
    "name": "Kroměříž",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-52",
    "name": "Královéhradecký kraj",
    "type": "Region"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-205",
    "name": "Kutná Hora",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-513",
    "name": "Liberec",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-51",
    "name": "Liberecký kraj",
    "type": "Region"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-423",
    "name": "Litoměřice",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-424",
    "name": "Louny",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-207",
    "name": "Mladá Boleslav",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-80",
    "name": "Moravskoslezský kraj",
    "type": "Region"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-425",
    "name": "Most",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-206",
    "name": "Mělník",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-804",
    "name": "Nový Jičín",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-208",
    "name": "Nymburk",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-523",
    "name": "Náchod",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-712",
    "name": "Olomouc",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-71",
    "name": "Olomoucký kraj",
    "type": "Region"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-805",
    "name": "Opava",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-806",
    "name": "Ostrava-město",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-532",
    "name": "Pardubice",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-53",
    "name": "Pardubický kraj",
    "type": "Region"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-633",
    "name": "Pelhřimov",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-324",
    "name": "Plzeň-jih",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-323",
    "name": "Plzeň-město",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-325",
    "name": "Plzeň-sever",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-32",
    "name": "Plzeňský kraj",
    "type": "Region"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-315",
    "name": "Prachatice",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-10",
    "name": "Praha, Hlavní město",
    "type": "Capital city"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-209",
    "name": "Praha-východ",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-20A",
    "name": "Praha-západ",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-713",
    "name": "Prostějov",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-314",
    "name": "Písek",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-714",
    "name": "Přerov",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-20B",
    "name": "Příbram",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-20C",
    "name": "Rakovník",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-326",
    "name": "Rokycany",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-524",
    "name": "Rychnov nad Kněžnou",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-514",
    "name": "Semily",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-413",
    "name": "Sokolov",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-316",
    "name": "Strakonice",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-20",
    "name": "Středočeský kraj",
    "type": "Region"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-533",
    "name": "Svitavy",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-327",
    "name": "Tachov",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-426",
    "name": "Teplice",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-525",
    "name": "Trutnov",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-317",
    "name": "Tábor",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-634",
    "name": "Třebíč",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-722",
    "name": "Uherské Hradiště",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-723",
    "name": "Vsetín",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-646",
    "name": "Vyškov",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-724",
    "name": "Zlín",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-72",
    "name": "Zlínský kraj",
    "type": "Region"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-647",
    "name": "Znojmo",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-42",
    "name": "Ústecký kraj",
    "type": "Region"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-427",
    "name": "Ústí nad Labem",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-534",
    "name": "Ústí nad Orlicí",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-511",
    "name": "Česká Lípa",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-311",
    "name": "České Budějovice",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-312",
    "name": "Český Krumlov",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-715",
    "name": "Šumperk",
    "type": "District"
  },
  {
    "countryCode": "CZ",
    "code": "CZ-635",
    "name": "Žďár nad Sázavou",
    "type": "District"
  },
  {
    "countryCode": "DE",
    "code": "DE-BW",
    "name": "Baden-Württemberg",
    "type": "Land"
  },
  {
    "countryCode": "DE",
    "code": "DE-BY",
    "name": "Bayern",
    "type": "Land"
  },
  {
    "countryCode": "DE",
    "code": "DE-BE",
    "name": "Berlin",
    "type": "Land"
  },
  {
    "countryCode": "DE",
    "code": "DE-BB",
    "name": "Brandenburg",
    "type": "Land"
  },
  {
    "countryCode": "DE",
    "code": "DE-HB",
    "name": "Bremen",
    "type": "Land"
  },
  {
    "countryCode": "DE",
    "code": "DE-HH",
    "name": "Hamburg",
    "type": "Land"
  },
  {
    "countryCode": "DE",
    "code": "DE-HE",
    "name": "Hessen",
    "type": "Land"
  },
  {
    "countryCode": "DE",
    "code": "DE-MV",
    "name": "Mecklenburg-Vorpommern",
    "type": "Land"
  },
  {
    "countryCode": "DE",
    "code": "DE-NI",
    "name": "Niedersachsen",
    "type": "Land"
  },
  {
    "countryCode": "DE",
    "code": "DE-NW",
    "name": "Nordrhein-Westfalen",
    "type": "Land"
  },
  {
    "countryCode": "DE",
    "code": "DE-RP",
    "name": "Rheinland-Pfalz",
    "type": "Land"
  },
  {
    "countryCode": "DE",
    "code": "DE-SL",
    "name": "Saarland",
    "type": "Land"
  },
  {
    "countryCode": "DE",
    "code": "DE-SN",
    "name": "Sachsen",
    "type": "Land"
  },
  {
    "countryCode": "DE",
    "code": "DE-ST",
    "name": "Sachsen-Anhalt",
    "type": "Land"
  },
  {
    "countryCode": "DE",
    "code": "DE-SH",
    "name": "Schleswig-Holstein",
    "type": "Land"
  },
  {
    "countryCode": "DE",
    "code": "DE-TH",
    "name": "Thüringen",
    "type": "Land"
  },
  {
    "countryCode": "DJ",
    "code": "DJ-AS",
    "name": "Ali Sabieh",
    "type": "Region"
  },
  {
    "countryCode": "DJ",
    "code": "DJ-AR",
    "name": "Arta",
    "type": "Region"
  },
  {
    "countryCode": "DJ",
    "code": "DJ-DI",
    "name": "Dikhil",
    "type": "Region"
  },
  {
    "countryCode": "DJ",
    "code": "DJ-DJ",
    "name": "Djibouti",
    "type": "City"
  },
  {
    "countryCode": "DJ",
    "code": "DJ-OB",
    "name": "Obock",
    "type": "Region"
  },
  {
    "countryCode": "DJ",
    "code": "DJ-TA",
    "name": "Tadjourah",
    "type": "Region"
  },
  {
    "countryCode": "DK",
    "code": "DK-84",
    "name": "Hovedstaden",
    "type": "Region"
  },
  {
    "countryCode": "DK",
    "code": "DK-82",
    "name": "Midtjylland",
    "type": "Region"
  },
  {
    "countryCode": "DK",
    "code": "DK-81",
    "name": "Nordjylland",
    "type": "Region"
  },
  {
    "countryCode": "DK",
    "code": "DK-85",
    "name": "Sjælland",
    "type": "Region"
  },
  {
    "countryCode": "DK",
    "code": "DK-83",
    "name": "Syddanmark",
    "type": "Region"
  },
  {
    "countryCode": "DM",
    "code": "DM-02",
    "name": "Saint Andrew",
    "type": "Parish"
  },
  {
    "countryCode": "DM",
    "code": "DM-03",
    "name": "Saint David",
    "type": "Parish"
  },
  {
    "countryCode": "DM",
    "code": "DM-04",
    "name": "Saint George",
    "type": "Parish"
  },
  {
    "countryCode": "DM",
    "code": "DM-05",
    "name": "Saint John",
    "type": "Parish"
  },
  {
    "countryCode": "DM",
    "code": "DM-06",
    "name": "Saint Joseph",
    "type": "Parish"
  },
  {
    "countryCode": "DM",
    "code": "DM-07",
    "name": "Saint Luke",
    "type": "Parish"
  },
  {
    "countryCode": "DM",
    "code": "DM-08",
    "name": "Saint Mark",
    "type": "Parish"
  },
  {
    "countryCode": "DM",
    "code": "DM-09",
    "name": "Saint Patrick",
    "type": "Parish"
  },
  {
    "countryCode": "DM",
    "code": "DM-10",
    "name": "Saint Paul",
    "type": "Parish"
  },
  {
    "countryCode": "DM",
    "code": "DM-11",
    "name": "Saint Peter",
    "type": "Parish"
  },
  {
    "countryCode": "DO",
    "code": "DO-02",
    "name": "Azua",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-03",
    "name": "Baoruco",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-04",
    "name": "Barahona",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-33",
    "name": "Cibao Nordeste",
    "type": "Region"
  },
  {
    "countryCode": "DO",
    "code": "DO-34",
    "name": "Cibao Noroeste",
    "type": "Region"
  },
  {
    "countryCode": "DO",
    "code": "DO-35",
    "name": "Cibao Norte",
    "type": "Region"
  },
  {
    "countryCode": "DO",
    "code": "DO-36",
    "name": "Cibao Sur",
    "type": "Region"
  },
  {
    "countryCode": "DO",
    "code": "DO-05",
    "name": "Dajabón",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-01",
    "name": "Distrito Nacional (Santo Domingo)",
    "type": "District"
  },
  {
    "countryCode": "DO",
    "code": "DO-06",
    "name": "Duarte",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-08",
    "name": "El Seibo",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-37",
    "name": "El Valle",
    "type": "Region"
  },
  {
    "countryCode": "DO",
    "code": "DO-07",
    "name": "Elías Piña",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-38",
    "name": "Enriquillo",
    "type": "Region"
  },
  {
    "countryCode": "DO",
    "code": "DO-09",
    "name": "Espaillat",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-30",
    "name": "Hato Mayor",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-19",
    "name": "Hermanas Mirabal",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-39",
    "name": "Higuamo",
    "type": "Region"
  },
  {
    "countryCode": "DO",
    "code": "DO-10",
    "name": "Independencia",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-11",
    "name": "La Altagracia",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-12",
    "name": "La Romana",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-13",
    "name": "La Vega",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-14",
    "name": "María Trinidad Sánchez",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-28",
    "name": "Monseñor Nouel",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-15",
    "name": "Monte Cristi",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-29",
    "name": "Monte Plata",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-40",
    "name": "Ozama",
    "type": "Region"
  },
  {
    "countryCode": "DO",
    "code": "DO-16",
    "name": "Pedernales",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-17",
    "name": "Peravia",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-18",
    "name": "Puerto Plata",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-20",
    "name": "Samaná",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-21",
    "name": "San Cristóbal",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-31",
    "name": "San José de Ocoa",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-22",
    "name": "San Juan",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-23",
    "name": "San Pedro de Macorís",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-25",
    "name": "Santiago",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-26",
    "name": "Santiago Rodríguez",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-32",
    "name": "Santo Domingo",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-24",
    "name": "Sánchez Ramírez",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-41",
    "name": "Valdesia",
    "type": "Region"
  },
  {
    "countryCode": "DO",
    "code": "DO-27",
    "name": "Valverde",
    "type": "Province"
  },
  {
    "countryCode": "DO",
    "code": "DO-42",
    "name": "Yuma",
    "type": "Region"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-01",
    "name": "Adrar",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-16",
    "name": "Alger",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-23",
    "name": "Annaba",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-44",
    "name": "Aïn Defla",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-46",
    "name": "Aïn Témouchent",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-05",
    "name": "Batna",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-07",
    "name": "Biskra",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-09",
    "name": "Blida",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-50",
    "name": "Bordj Badji Mokhtar",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-34",
    "name": "Bordj Bou Arréridj",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-10",
    "name": "Bouira",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-35",
    "name": "Boumerdès",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-08",
    "name": "Béchar",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-06",
    "name": "Béjaïa",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-52",
    "name": "Béni Abbès",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-02",
    "name": "Chlef",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-25",
    "name": "Constantine",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-56",
    "name": "Djanet",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-17",
    "name": "Djelfa",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-32",
    "name": "El Bayadh",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-57",
    "name": "El Meghaier",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-58",
    "name": "El Meniaa",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-39",
    "name": "El Oued",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-36",
    "name": "El Tarf",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-47",
    "name": "Ghardaïa",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-24",
    "name": "Guelma",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-33",
    "name": "Illizi",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-54",
    "name": "In Guezzam",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-53",
    "name": "In Salah",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-18",
    "name": "Jijel",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-40",
    "name": "Khenchela",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-03",
    "name": "Laghouat",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-28",
    "name": "M'sila",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-29",
    "name": "Mascara",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-43",
    "name": "Mila",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-27",
    "name": "Mostaganem",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-26",
    "name": "Médéa",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-45",
    "name": "Naama",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-31",
    "name": "Oran",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-30",
    "name": "Ouargla",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-51",
    "name": "Ouled Djellal",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-04",
    "name": "Oum el Bouaghi",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-48",
    "name": "Relizane",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-20",
    "name": "Saïda",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-22",
    "name": "Sidi Bel Abbès",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-21",
    "name": "Skikda",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-41",
    "name": "Souk Ahras",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-19",
    "name": "Sétif",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-11",
    "name": "Tamanrasset",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-14",
    "name": "Tiaret",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-49",
    "name": "Timimoun",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-37",
    "name": "Tindouf",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-42",
    "name": "Tipaza",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-38",
    "name": "Tissemsilt",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-15",
    "name": "Tizi Ouzou",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-13",
    "name": "Tlemcen",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-55",
    "name": "Touggourt",
    "type": "Province"
  },
  {
    "countryCode": "DZ",
    "code": "DZ-12",
    "name": "Tébessa",
    "type": "Province"
  },
  {
    "countryCode": "EC",
    "code": "EC-A",
    "name": "Azuay",
    "type": "Province"
  },
  {
    "countryCode": "EC",
    "code": "EC-B",
    "name": "Bolívar",
    "type": "Province"
  },
  {
    "countryCode": "EC",
    "code": "EC-C",
    "name": "Carchi",
    "type": "Province"
  },
  {
    "countryCode": "EC",
    "code": "EC-F",
    "name": "Cañar",
    "type": "Province"
  },
  {
    "countryCode": "EC",
    "code": "EC-H",
    "name": "Chimborazo",
    "type": "Province"
  },
  {
    "countryCode": "EC",
    "code": "EC-X",
    "name": "Cotopaxi",
    "type": "Province"
  },
  {
    "countryCode": "EC",
    "code": "EC-O",
    "name": "El Oro",
    "type": "Province"
  },
  {
    "countryCode": "EC",
    "code": "EC-E",
    "name": "Esmeraldas",
    "type": "Province"
  },
  {
    "countryCode": "EC",
    "code": "EC-W",
    "name": "Galápagos",
    "type": "Province"
  },
  {
    "countryCode": "EC",
    "code": "EC-G",
    "name": "Guayas",
    "type": "Province"
  },
  {
    "countryCode": "EC",
    "code": "EC-I",
    "name": "Imbabura",
    "type": "Province"
  },
  {
    "countryCode": "EC",
    "code": "EC-L",
    "name": "Loja",
    "type": "Province"
  },
  {
    "countryCode": "EC",
    "code": "EC-R",
    "name": "Los Ríos",
    "type": "Province"
  },
  {
    "countryCode": "EC",
    "code": "EC-M",
    "name": "Manabí",
    "type": "Province"
  },
  {
    "countryCode": "EC",
    "code": "EC-S",
    "name": "Morona Santiago",
    "type": "Province"
  },
  {
    "countryCode": "EC",
    "code": "EC-N",
    "name": "Napo",
    "type": "Province"
  },
  {
    "countryCode": "EC",
    "code": "EC-D",
    "name": "Orellana",
    "type": "Province"
  },
  {
    "countryCode": "EC",
    "code": "EC-Y",
    "name": "Pastaza",
    "type": "Province"
  },
  {
    "countryCode": "EC",
    "code": "EC-P",
    "name": "Pichincha",
    "type": "Province"
  },
  {
    "countryCode": "EC",
    "code": "EC-SE",
    "name": "Santa Elena",
    "type": "Province"
  },
  {
    "countryCode": "EC",
    "code": "EC-SD",
    "name": "Santo Domingo de los Tsáchilas",
    "type": "Province"
  },
  {
    "countryCode": "EC",
    "code": "EC-U",
    "name": "Sucumbíos",
    "type": "Province"
  },
  {
    "countryCode": "EC",
    "code": "EC-T",
    "name": "Tungurahua",
    "type": "Province"
  },
  {
    "countryCode": "EC",
    "code": "EC-Z",
    "name": "Zamora Chinchipe",
    "type": "Province"
  },
  {
    "countryCode": "EE",
    "code": "EE-130",
    "name": "Alutaguse",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-141",
    "name": "Anija",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-142",
    "name": "Antsla",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-171",
    "name": "Elva",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-184",
    "name": "Haapsalu",
    "type": "Urban municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-191",
    "name": "Haljala",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-37",
    "name": "Harjumaa",
    "type": "County"
  },
  {
    "countryCode": "EE",
    "code": "EE-198",
    "name": "Harku",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-205",
    "name": "Hiiumaa",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-39",
    "name": "Hiiumaa",
    "type": "County"
  },
  {
    "countryCode": "EE",
    "code": "EE-214",
    "name": "Häädemeeste",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-45",
    "name": "Ida-Virumaa",
    "type": "County"
  },
  {
    "countryCode": "EE",
    "code": "EE-255",
    "name": "Järva",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-52",
    "name": "Järvamaa",
    "type": "County"
  },
  {
    "countryCode": "EE",
    "code": "EE-245",
    "name": "Jõelähtme",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-247",
    "name": "Jõgeva",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-50",
    "name": "Jõgevamaa",
    "type": "County"
  },
  {
    "countryCode": "EE",
    "code": "EE-251",
    "name": "Jõhvi",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-272",
    "name": "Kadrina",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-283",
    "name": "Kambja",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-284",
    "name": "Kanepi",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-291",
    "name": "Kastre",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-293",
    "name": "Kehtna",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-296",
    "name": "Keila",
    "type": "Urban municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-303",
    "name": "Kihnu",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-305",
    "name": "Kiili",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-317",
    "name": "Kohila",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-321",
    "name": "Kohtla-Järve",
    "type": "Urban municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-338",
    "name": "Kose",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-353",
    "name": "Kuusalu",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-424",
    "name": "Loksa",
    "type": "Urban municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-432",
    "name": "Luunja",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-431",
    "name": "Lääne-Harju",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-441",
    "name": "Lääne-Nigula",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-60",
    "name": "Lääne-Virumaa",
    "type": "County"
  },
  {
    "countryCode": "EE",
    "code": "EE-56",
    "name": "Läänemaa",
    "type": "County"
  },
  {
    "countryCode": "EE",
    "code": "EE-430",
    "name": "Lääneranna",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-442",
    "name": "Lüganuse",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-446",
    "name": "Maardu",
    "type": "Urban municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-478",
    "name": "Muhu",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-480",
    "name": "Mulgi",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-486",
    "name": "Mustvee",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-503",
    "name": "Märjamaa",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-511",
    "name": "Narva",
    "type": "Urban municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-514",
    "name": "Narva-Jõesuu",
    "type": "Urban municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-528",
    "name": "Nõo",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-557",
    "name": "Otepää",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-567",
    "name": "Paide",
    "type": "Urban municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-586",
    "name": "Peipsiääre",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-624",
    "name": "Pärnu",
    "type": "Urban municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-68",
    "name": "Pärnumaa",
    "type": "County"
  },
  {
    "countryCode": "EE",
    "code": "EE-638",
    "name": "Põhja-Pärnumaa",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-615",
    "name": "Põhja-Sakala",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-618",
    "name": "Põltsamaa",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-622",
    "name": "Põlva",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-64",
    "name": "Põlvamaa",
    "type": "County"
  },
  {
    "countryCode": "EE",
    "code": "EE-651",
    "name": "Raasiku",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-653",
    "name": "Rae",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-661",
    "name": "Rakvere",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-663",
    "name": "Rakvere",
    "type": "Urban municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-668",
    "name": "Rapla",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-71",
    "name": "Raplamaa",
    "type": "County"
  },
  {
    "countryCode": "EE",
    "code": "EE-689",
    "name": "Ruhnu",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-708",
    "name": "Räpina",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-698",
    "name": "Rõuge",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-712",
    "name": "Saarde",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-714",
    "name": "Saaremaa",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-74",
    "name": "Saaremaa",
    "type": "County"
  },
  {
    "countryCode": "EE",
    "code": "EE-719",
    "name": "Saku",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-726",
    "name": "Saue",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-732",
    "name": "Setomaa",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-735",
    "name": "Sillamäe",
    "type": "Urban municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-784",
    "name": "Tallinn",
    "type": "Urban municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-792",
    "name": "Tapa",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-793",
    "name": "Tartu",
    "type": "Urban municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-796",
    "name": "Tartu",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-79",
    "name": "Tartumaa",
    "type": "County"
  },
  {
    "countryCode": "EE",
    "code": "EE-803",
    "name": "Toila",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-809",
    "name": "Tori",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-824",
    "name": "Tõrva",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-834",
    "name": "Türi",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-855",
    "name": "Valga",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-81",
    "name": "Valgamaa",
    "type": "County"
  },
  {
    "countryCode": "EE",
    "code": "EE-890",
    "name": "Viimsi",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-897",
    "name": "Viljandi",
    "type": "Urban municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-899",
    "name": "Viljandi",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-84",
    "name": "Viljandimaa",
    "type": "County"
  },
  {
    "countryCode": "EE",
    "code": "EE-901",
    "name": "Vinni",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-903",
    "name": "Viru-Nigula",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-907",
    "name": "Vormsi",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-928",
    "name": "Väike-Maarja",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-917",
    "name": "Võru",
    "type": "Rural municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-919",
    "name": "Võru",
    "type": "Urban municipality"
  },
  {
    "countryCode": "EE",
    "code": "EE-87",
    "name": "Võrumaa",
    "type": "County"
  },
  {
    "countryCode": "EG",
    "code": "EG-DK",
    "name": "Ad Daqahlīyah",
    "type": "Governorate"
  },
  {
    "countryCode": "EG",
    "code": "EG-BA",
    "name": "Al Baḩr al Aḩmar",
    "type": "Governorate"
  },
  {
    "countryCode": "EG",
    "code": "EG-BH",
    "name": "Al Buḩayrah",
    "type": "Governorate"
  },
  {
    "countryCode": "EG",
    "code": "EG-FYM",
    "name": "Al Fayyūm",
    "type": "Governorate"
  },
  {
    "countryCode": "EG",
    "code": "EG-GH",
    "name": "Al Gharbīyah",
    "type": "Governorate"
  },
  {
    "countryCode": "EG",
    "code": "EG-ALX",
    "name": "Al Iskandarīyah",
    "type": "Governorate"
  },
  {
    "countryCode": "EG",
    "code": "EG-IS",
    "name": "Al Ismā'īlīyah",
    "type": "Governorate"
  },
  {
    "countryCode": "EG",
    "code": "EG-GZ",
    "name": "Al Jīzah",
    "type": "Governorate"
  },
  {
    "countryCode": "EG",
    "code": "EG-MN",
    "name": "Al Minyā",
    "type": "Governorate"
  },
  {
    "countryCode": "EG",
    "code": "EG-MNF",
    "name": "Al Minūfīyah",
    "type": "Governorate"
  },
  {
    "countryCode": "EG",
    "code": "EG-KB",
    "name": "Al Qalyūbīyah",
    "type": "Governorate"
  },
  {
    "countryCode": "EG",
    "code": "EG-C",
    "name": "Al Qāhirah",
    "type": "Governorate"
  },
  {
    "countryCode": "EG",
    "code": "EG-LX",
    "name": "Al Uqşur",
    "type": "Governorate"
  },
  {
    "countryCode": "EG",
    "code": "EG-WAD",
    "name": "Al Wādī al Jadīd",
    "type": "Governorate"
  },
  {
    "countryCode": "EG",
    "code": "EG-SUZ",
    "name": "As Suways",
    "type": "Governorate"
  },
  {
    "countryCode": "EG",
    "code": "EG-SHR",
    "name": "Ash Sharqīyah",
    "type": "Governorate"
  },
  {
    "countryCode": "EG",
    "code": "EG-ASN",
    "name": "Aswān",
    "type": "Governorate"
  },
  {
    "countryCode": "EG",
    "code": "EG-AST",
    "name": "Asyūţ",
    "type": "Governorate"
  },
  {
    "countryCode": "EG",
    "code": "EG-BNS",
    "name": "Banī Suwayf",
    "type": "Governorate"
  },
  {
    "countryCode": "EG",
    "code": "EG-PTS",
    "name": "Būr Sa‘īd",
    "type": "Governorate"
  },
  {
    "countryCode": "EG",
    "code": "EG-DT",
    "name": "Dumyāţ",
    "type": "Governorate"
  },
  {
    "countryCode": "EG",
    "code": "EG-JS",
    "name": "Janūb Sīnā'",
    "type": "Governorate"
  },
  {
    "countryCode": "EG",
    "code": "EG-KFS",
    "name": "Kafr ash Shaykh",
    "type": "Governorate"
  },
  {
    "countryCode": "EG",
    "code": "EG-MT",
    "name": "Maţrūḩ",
    "type": "Governorate"
  },
  {
    "countryCode": "EG",
    "code": "EG-KN",
    "name": "Qinā",
    "type": "Governorate"
  },
  {
    "countryCode": "EG",
    "code": "EG-SIN",
    "name": "Shamāl Sīnā'",
    "type": "Governorate"
  },
  {
    "countryCode": "EG",
    "code": "EG-SHG",
    "name": "Sūhāj",
    "type": "Governorate"
  },
  {
    "countryCode": "ER",
    "code": "ER-MA",
    "name": "Al Awsaţ",
    "type": "Region"
  },
  {
    "countryCode": "ER",
    "code": "ER-DU",
    "name": "Al Janūbī",
    "type": "Region"
  },
  {
    "countryCode": "ER",
    "code": "ER-AN",
    "name": "Ansabā",
    "type": "Region"
  },
  {
    "countryCode": "ER",
    "code": "ER-DK",
    "name": "Debubawi K’eyyĭḥ Baḥri",
    "type": "Region"
  },
  {
    "countryCode": "ER",
    "code": "ER-GB",
    "name": "Gash-Barka",
    "type": "Region"
  },
  {
    "countryCode": "ER",
    "code": "ER-SK",
    "name": "Semienawi K’eyyĭḥ Baḥri",
    "type": "Region"
  },
  {
    "countryCode": "ES",
    "code": "ES-C",
    "name": "A Coruña [La Coruña]",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-A",
    "name": "Alacant*",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-AB",
    "name": "Albacete",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-AL",
    "name": "Almería",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-AN",
    "name": "Andalucía",
    "type": "Autonomous community"
  },
  {
    "countryCode": "ES",
    "code": "ES-VI",
    "name": "Araba*",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-AR",
    "name": "Aragón",
    "type": "Autonomous community"
  },
  {
    "countryCode": "ES",
    "code": "ES-O",
    "name": "Asturias",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-AS",
    "name": "Asturias, Principado de",
    "type": "Autonomous community"
  },
  {
    "countryCode": "ES",
    "code": "ES-BA",
    "name": "Badajoz",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-B",
    "name": "Barcelona [Barcelona]",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-BI",
    "name": "Bizkaia",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-BU",
    "name": "Burgos",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-CN",
    "name": "Canarias",
    "type": "Autonomous community"
  },
  {
    "countryCode": "ES",
    "code": "ES-CB",
    "name": "Cantabria",
    "type": "Autonomous community"
  },
  {
    "countryCode": "ES",
    "code": "ES-S",
    "name": "Cantabria",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-CS",
    "name": "Castelló*",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-CL",
    "name": "Castilla y León",
    "type": "Autonomous community"
  },
  {
    "countryCode": "ES",
    "code": "ES-CM",
    "name": "Castilla-La Mancha",
    "type": "Autonomous community"
  },
  {
    "countryCode": "ES",
    "code": "ES-CT",
    "name": "Catalunya [Cataluña]",
    "type": "Autonomous community"
  },
  {
    "countryCode": "ES",
    "code": "ES-CE",
    "name": "Ceuta",
    "type": "Autonomous city in north africa"
  },
  {
    "countryCode": "ES",
    "code": "ES-CR",
    "name": "Ciudad Real",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-CU",
    "name": "Cuenca",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-CC",
    "name": "Cáceres",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-CA",
    "name": "Cádiz",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-CO",
    "name": "Córdoba",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-PV",
    "name": "Euskal Herria",
    "type": "Autonomous community"
  },
  {
    "countryCode": "ES",
    "code": "ES-EX",
    "name": "Extremadura",
    "type": "Autonomous community"
  },
  {
    "countryCode": "ES",
    "code": "ES-GA",
    "name": "Galicia [Galicia]",
    "type": "Autonomous community"
  },
  {
    "countryCode": "ES",
    "code": "ES-SS",
    "name": "Gipuzkoa",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-GI",
    "name": "Girona [Gerona]",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-GR",
    "name": "Granada",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-GU",
    "name": "Guadalajara",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-H",
    "name": "Huelva",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-HU",
    "name": "Huesca",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-IB",
    "name": "Illes Balears [Islas Baleares]",
    "type": "Autonomous community"
  },
  {
    "countryCode": "ES",
    "code": "ES-PM",
    "name": "Illes Balears [Islas Baleares]",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-J",
    "name": "Jaén",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-LO",
    "name": "La Rioja",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-RI",
    "name": "La Rioja",
    "type": "Autonomous community"
  },
  {
    "countryCode": "ES",
    "code": "ES-GC",
    "name": "Las Palmas",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-LE",
    "name": "León",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-L",
    "name": "Lleida [Lérida]",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-LU",
    "name": "Lugo [Lugo]",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-M",
    "name": "Madrid",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-MD",
    "name": "Madrid, Comunidad de",
    "type": "Autonomous community"
  },
  {
    "countryCode": "ES",
    "code": "ES-ML",
    "name": "Melilla",
    "type": "Autonomous city in north africa"
  },
  {
    "countryCode": "ES",
    "code": "ES-MU",
    "name": "Murcia",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-MC",
    "name": "Murcia, Región de",
    "type": "Autonomous community"
  },
  {
    "countryCode": "ES",
    "code": "ES-MA",
    "name": "Málaga",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-NA",
    "name": "Nafarroa*",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-NC",
    "name": "Nafarroako Foru Komunitatea*",
    "type": "Autonomous community"
  },
  {
    "countryCode": "ES",
    "code": "ES-OR",
    "name": "Ourense [Orense]",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-P",
    "name": "Palencia",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-PO",
    "name": "Pontevedra [Pontevedra]",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-SA",
    "name": "Salamanca",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-TF",
    "name": "Santa Cruz de Tenerife",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-SG",
    "name": "Segovia",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-SE",
    "name": "Sevilla",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-SO",
    "name": "Soria",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-T",
    "name": "Tarragona [Tarragona]",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-TE",
    "name": "Teruel",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-TO",
    "name": "Toledo",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-V",
    "name": "Valencia",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-VC",
    "name": "Valenciana, Comunidad",
    "type": "Autonomous community"
  },
  {
    "countryCode": "ES",
    "code": "ES-VA",
    "name": "Valladolid",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-ZA",
    "name": "Zamora",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-Z",
    "name": "Zaragoza",
    "type": "Province"
  },
  {
    "countryCode": "ES",
    "code": "ES-AV",
    "name": "Ávila",
    "type": "Province"
  },
  {
    "countryCode": "ET",
    "code": "ET-AA",
    "name": "Addis Ababa",
    "type": "Administration"
  },
  {
    "countryCode": "ET",
    "code": "ET-AF",
    "name": "Afar",
    "type": "Regional state"
  },
  {
    "countryCode": "ET",
    "code": "ET-AM",
    "name": "Amara",
    "type": "Regional state"
  },
  {
    "countryCode": "ET",
    "code": "ET-BE",
    "name": "Benshangul-Gumaz",
    "type": "Regional state"
  },
  {
    "countryCode": "ET",
    "code": "ET-DD",
    "name": "Dire Dawa",
    "type": "Administration"
  },
  {
    "countryCode": "ET",
    "code": "ET-GA",
    "name": "Gambela Peoples",
    "type": "Regional state"
  },
  {
    "countryCode": "ET",
    "code": "ET-HA",
    "name": "Harari People",
    "type": "Regional state"
  },
  {
    "countryCode": "ET",
    "code": "ET-OR",
    "name": "Oromia",
    "type": "Regional state"
  },
  {
    "countryCode": "ET",
    "code": "ET-SI",
    "name": "Sidama",
    "type": "Regional state"
  },
  {
    "countryCode": "ET",
    "code": "ET-SO",
    "name": "Somali",
    "type": "Regional state"
  },
  {
    "countryCode": "ET",
    "code": "ET-SN",
    "name": "Southern Nations, Nationalities and Peoples",
    "type": "Regional state"
  },
  {
    "countryCode": "ET",
    "code": "ET-SW",
    "name": "Southwest Ethiopia Peoples",
    "type": "Regional state"
  },
  {
    "countryCode": "ET",
    "code": "ET-TI",
    "name": "Tigrai",
    "type": "Regional state"
  },
  {
    "countryCode": "FI",
    "code": "FI-02",
    "name": "Etelä-Karjala",
    "type": "Region"
  },
  {
    "countryCode": "FI",
    "code": "FI-03",
    "name": "Etelä-Pohjanmaa",
    "type": "Region"
  },
  {
    "countryCode": "FI",
    "code": "FI-04",
    "name": "Etelä-Savo",
    "type": "Region"
  },
  {
    "countryCode": "FI",
    "code": "FI-05",
    "name": "Kainuu",
    "type": "Region"
  },
  {
    "countryCode": "FI",
    "code": "FI-06",
    "name": "Kanta-Häme",
    "type": "Region"
  },
  {
    "countryCode": "FI",
    "code": "FI-07",
    "name": "Keski-Pohjanmaa",
    "type": "Region"
  },
  {
    "countryCode": "FI",
    "code": "FI-08",
    "name": "Keski-Suomi",
    "type": "Region"
  },
  {
    "countryCode": "FI",
    "code": "FI-09",
    "name": "Kymenlaakso",
    "type": "Region"
  },
  {
    "countryCode": "FI",
    "code": "FI-01",
    "name": "Landskapet Åland",
    "type": "Region"
  },
  {
    "countryCode": "FI",
    "code": "FI-10",
    "name": "Lappi",
    "type": "Region"
  },
  {
    "countryCode": "FI",
    "code": "FI-11",
    "name": "Pirkanmaa",
    "type": "Region"
  },
  {
    "countryCode": "FI",
    "code": "FI-12",
    "name": "Pohjanmaa",
    "type": "Region"
  },
  {
    "countryCode": "FI",
    "code": "FI-13",
    "name": "Pohjois-Karjala",
    "type": "Region"
  },
  {
    "countryCode": "FI",
    "code": "FI-14",
    "name": "Pohjois-Pohjanmaa",
    "type": "Region"
  },
  {
    "countryCode": "FI",
    "code": "FI-15",
    "name": "Pohjois-Savo",
    "type": "Region"
  },
  {
    "countryCode": "FI",
    "code": "FI-16",
    "name": "Päijät-Häme",
    "type": "Region"
  },
  {
    "countryCode": "FI",
    "code": "FI-17",
    "name": "Satakunta",
    "type": "Region"
  },
  {
    "countryCode": "FI",
    "code": "FI-18",
    "name": "Uusimaa",
    "type": "Region"
  },
  {
    "countryCode": "FI",
    "code": "FI-19",
    "name": "Varsinais-Suomi",
    "type": "Region"
  },
  {
    "countryCode": "FJ",
    "code": "FJ-01",
    "name": "Ba",
    "type": "Province"
  },
  {
    "countryCode": "FJ",
    "code": "FJ-02",
    "name": "Bua",
    "type": "Province"
  },
  {
    "countryCode": "FJ",
    "code": "FJ-03",
    "name": "Cakaudrove",
    "type": "Province"
  },
  {
    "countryCode": "FJ",
    "code": "FJ-C",
    "name": "Central",
    "type": "Division"
  },
  {
    "countryCode": "FJ",
    "code": "FJ-E",
    "name": "Eastern",
    "type": "Division"
  },
  {
    "countryCode": "FJ",
    "code": "FJ-04",
    "name": "Kadavu",
    "type": "Province"
  },
  {
    "countryCode": "FJ",
    "code": "FJ-05",
    "name": "Lau",
    "type": "Province"
  },
  {
    "countryCode": "FJ",
    "code": "FJ-06",
    "name": "Lomaiviti",
    "type": "Province"
  },
  {
    "countryCode": "FJ",
    "code": "FJ-07",
    "name": "Macuata",
    "type": "Province"
  },
  {
    "countryCode": "FJ",
    "code": "FJ-08",
    "name": "Nadroga and Navosa",
    "type": "Province"
  },
  {
    "countryCode": "FJ",
    "code": "FJ-09",
    "name": "Naitasiri",
    "type": "Province"
  },
  {
    "countryCode": "FJ",
    "code": "FJ-10",
    "name": "Namosi",
    "type": "Province"
  },
  {
    "countryCode": "FJ",
    "code": "FJ-N",
    "name": "Northern",
    "type": "Division"
  },
  {
    "countryCode": "FJ",
    "code": "FJ-11",
    "name": "Ra",
    "type": "Province"
  },
  {
    "countryCode": "FJ",
    "code": "FJ-12",
    "name": "Rewa",
    "type": "Province"
  },
  {
    "countryCode": "FJ",
    "code": "FJ-R",
    "name": "Rotuma",
    "type": "Dependency"
  },
  {
    "countryCode": "FJ",
    "code": "FJ-13",
    "name": "Serua",
    "type": "Province"
  },
  {
    "countryCode": "FJ",
    "code": "FJ-14",
    "name": "Tailevu",
    "type": "Province"
  },
  {
    "countryCode": "FJ",
    "code": "FJ-W",
    "name": "Western",
    "type": "Division"
  },
  {
    "countryCode": "FM",
    "code": "FM-TRK",
    "name": "Chuuk",
    "type": "State"
  },
  {
    "countryCode": "FM",
    "code": "FM-KSA",
    "name": "Kosrae",
    "type": "State"
  },
  {
    "countryCode": "FM",
    "code": "FM-PNI",
    "name": "Pohnpei",
    "type": "State"
  },
  {
    "countryCode": "FM",
    "code": "FM-YAP",
    "name": "Yap",
    "type": "State"
  },
  {
    "countryCode": "FR",
    "code": "FR-01",
    "name": "Ain",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-02",
    "name": "Aisne",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-03",
    "name": "Allier",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-04",
    "name": "Alpes-de-Haute-Provence",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-06",
    "name": "Alpes-Maritimes",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-6AE",
    "name": "Alsace",
    "type": "European collectivity"
  },
  {
    "countryCode": "FR",
    "code": "FR-08",
    "name": "Ardennes",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-07",
    "name": "Ardèche",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-09",
    "name": "Ariège",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-10",
    "name": "Aube",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-11",
    "name": "Aude",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-ARA",
    "name": "Auvergne-Rhône-Alpes",
    "type": "Metropolitan region"
  },
  {
    "countryCode": "FR",
    "code": "FR-12",
    "name": "Aveyron",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-67",
    "name": "Bas-Rhin",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-13",
    "name": "Bouches-du-Rhône",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-BFC",
    "name": "Bourgogne-Franche-Comté",
    "type": "Metropolitan region"
  },
  {
    "countryCode": "FR",
    "code": "FR-BRE",
    "name": "Bretagne",
    "type": "Metropolitan region"
  },
  {
    "countryCode": "FR",
    "code": "FR-14",
    "name": "Calvados",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-15",
    "name": "Cantal",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-CVL",
    "name": "Centre-Val de Loire",
    "type": "Metropolitan region"
  },
  {
    "countryCode": "FR",
    "code": "FR-16",
    "name": "Charente",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-17",
    "name": "Charente-Maritime",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-18",
    "name": "Cher",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-CP",
    "name": "Clipperton",
    "type": "Dependency"
  },
  {
    "countryCode": "FR",
    "code": "FR-19",
    "name": "Corrèze",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-20R",
    "name": "Corse",
    "type": "Metropolitan collectivity with special status"
  },
  {
    "countryCode": "FR",
    "code": "FR-2A",
    "name": "Corse-du-Sud",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-23",
    "name": "Creuse",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-21",
    "name": "Côte-d'Or",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-22",
    "name": "Côtes-d'Armor",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-79",
    "name": "Deux-Sèvres",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-24",
    "name": "Dordogne",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-25",
    "name": "Doubs",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-26",
    "name": "Drôme",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-91",
    "name": "Essonne",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-27",
    "name": "Eure",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-28",
    "name": "Eure-et-Loir",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-29",
    "name": "Finistère",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-30",
    "name": "Gard",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-32",
    "name": "Gers",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-33",
    "name": "Gironde",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-GES",
    "name": "Grand-Est",
    "type": "Metropolitan region"
  },
  {
    "countryCode": "FR",
    "code": "FR-971",
    "name": "Guadeloupe",
    "type": "Overseas departmental collectivity"
  },
  {
    "countryCode": "FR",
    "code": "FR-973",
    "name": "Guyane (française)",
    "type": "Overseas unique territorial collectivity"
  },
  {
    "countryCode": "FR",
    "code": "FR-68",
    "name": "Haut-Rhin",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-2B",
    "name": "Haute-Corse",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-31",
    "name": "Haute-Garonne",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-43",
    "name": "Haute-Loire",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-52",
    "name": "Haute-Marne",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-74",
    "name": "Haute-Savoie",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-70",
    "name": "Haute-Saône",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-87",
    "name": "Haute-Vienne",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-05",
    "name": "Hautes-Alpes",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-65",
    "name": "Hautes-Pyrénées",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-HDF",
    "name": "Hauts-de-France",
    "type": "Metropolitan region"
  },
  {
    "countryCode": "FR",
    "code": "FR-92",
    "name": "Hauts-de-Seine",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-34",
    "name": "Hérault",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-35",
    "name": "Ille-et-Vilaine",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-36",
    "name": "Indre",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-37",
    "name": "Indre-et-Loire",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-38",
    "name": "Isère",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-39",
    "name": "Jura",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-974",
    "name": "La Réunion",
    "type": "Overseas departmental collectivity"
  },
  {
    "countryCode": "FR",
    "code": "FR-40",
    "name": "Landes",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-41",
    "name": "Loir-et-Cher",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-42",
    "name": "Loire",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-44",
    "name": "Loire-Atlantique",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-45",
    "name": "Loiret",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-46",
    "name": "Lot",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-47",
    "name": "Lot-et-Garonne",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-48",
    "name": "Lozère",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-49",
    "name": "Maine-et-Loire",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-50",
    "name": "Manche",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-51",
    "name": "Marne",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-972",
    "name": "Martinique",
    "type": "Overseas unique territorial collectivity"
  },
  {
    "countryCode": "FR",
    "code": "FR-53",
    "name": "Mayenne",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-976",
    "name": "Mayotte",
    "type": "Overseas departmental collectivity"
  },
  {
    "countryCode": "FR",
    "code": "FR-54",
    "name": "Meurthe-et-Moselle",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-55",
    "name": "Meuse",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-56",
    "name": "Morbihan",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-57",
    "name": "Moselle",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-69M",
    "name": "Métropole de Lyon",
    "type": "Metropolitan collectivity with special status"
  },
  {
    "countryCode": "FR",
    "code": "FR-58",
    "name": "Nièvre",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-59",
    "name": "Nord",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-NOR",
    "name": "Normandie",
    "type": "Metropolitan region"
  },
  {
    "countryCode": "FR",
    "code": "FR-NAQ",
    "name": "Nouvelle-Aquitaine",
    "type": "Metropolitan region"
  },
  {
    "countryCode": "FR",
    "code": "FR-NC",
    "name": "Nouvelle-Calédonie",
    "type": "Overseas collectivity with special status"
  },
  {
    "countryCode": "FR",
    "code": "FR-OCC",
    "name": "Occitanie",
    "type": "Metropolitan region"
  },
  {
    "countryCode": "FR",
    "code": "FR-60",
    "name": "Oise",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-61",
    "name": "Orne",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-75C",
    "name": "Paris",
    "type": "Metropolitan collectivity with special status"
  },
  {
    "countryCode": "FR",
    "code": "FR-62",
    "name": "Pas-de-Calais",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-PDL",
    "name": "Pays-de-la-Loire",
    "type": "Metropolitan region"
  },
  {
    "countryCode": "FR",
    "code": "FR-PF",
    "name": "Polynésie française",
    "type": "Overseas collectivity"
  },
  {
    "countryCode": "FR",
    "code": "FR-PAC",
    "name": "Provence-Alpes-Côte-d’Azur",
    "type": "Metropolitan region"
  },
  {
    "countryCode": "FR",
    "code": "FR-63",
    "name": "Puy-de-Dôme",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-64",
    "name": "Pyrénées-Atlantiques",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-66",
    "name": "Pyrénées-Orientales",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-69",
    "name": "Rhône",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-BL",
    "name": "Saint-Barthélemy",
    "type": "Overseas collectivity"
  },
  {
    "countryCode": "FR",
    "code": "FR-MF",
    "name": "Saint-Martin",
    "type": "Overseas collectivity"
  },
  {
    "countryCode": "FR",
    "code": "FR-PM",
    "name": "Saint-Pierre-et-Miquelon",
    "type": "Overseas collectivity"
  },
  {
    "countryCode": "FR",
    "code": "FR-72",
    "name": "Sarthe",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-73",
    "name": "Savoie",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-71",
    "name": "Saône-et-Loire",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-77",
    "name": "Seine-et-Marne",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-76",
    "name": "Seine-Maritime",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-93",
    "name": "Seine-Saint-Denis",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-80",
    "name": "Somme",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-81",
    "name": "Tarn",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-82",
    "name": "Tarn-et-Garonne",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-TF",
    "name": "Terres australes françaises",
    "type": "Overseas territory"
  },
  {
    "countryCode": "FR",
    "code": "FR-90",
    "name": "Territoire de Belfort",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-95",
    "name": "Val-d'Oise",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-94",
    "name": "Val-de-Marne",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-83",
    "name": "Var",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-84",
    "name": "Vaucluse",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-85",
    "name": "Vendée",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-86",
    "name": "Vienne",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-88",
    "name": "Vosges",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-WF",
    "name": "Wallis-et-Futuna",
    "type": "Overseas collectivity"
  },
  {
    "countryCode": "FR",
    "code": "FR-89",
    "name": "Yonne",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-78",
    "name": "Yvelines",
    "type": "Metropolitan department"
  },
  {
    "countryCode": "FR",
    "code": "FR-IDF",
    "name": "Île-de-France",
    "type": "Metropolitan region"
  },
  {
    "countryCode": "GA",
    "code": "GA-1",
    "name": "Estuaire",
    "type": "Province"
  },
  {
    "countryCode": "GA",
    "code": "GA-2",
    "name": "Haut-Ogooué",
    "type": "Province"
  },
  {
    "countryCode": "GA",
    "code": "GA-3",
    "name": "Moyen-Ogooué",
    "type": "Province"
  },
  {
    "countryCode": "GA",
    "code": "GA-4",
    "name": "Ngounié",
    "type": "Province"
  },
  {
    "countryCode": "GA",
    "code": "GA-5",
    "name": "Nyanga",
    "type": "Province"
  },
  {
    "countryCode": "GA",
    "code": "GA-6",
    "name": "Ogooué-Ivindo",
    "type": "Province"
  },
  {
    "countryCode": "GA",
    "code": "GA-7",
    "name": "Ogooué-Lolo",
    "type": "Province"
  },
  {
    "countryCode": "GA",
    "code": "GA-8",
    "name": "Ogooué-Maritime",
    "type": "Province"
  },
  {
    "countryCode": "GA",
    "code": "GA-9",
    "name": "Woleu-Ntem",
    "type": "Province"
  },
  {
    "countryCode": "GB",
    "code": "GB-ABE",
    "name": "Aberdeen City",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-ABD",
    "name": "Aberdeenshire",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-ANS",
    "name": "Angus",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-ANN",
    "name": "Antrim and Newtownabbey",
    "type": "District"
  },
  {
    "countryCode": "GB",
    "code": "GB-AND",
    "name": "Ards and North Down",
    "type": "District"
  },
  {
    "countryCode": "GB",
    "code": "GB-AGB",
    "name": "Argyll and Bute",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-ABC",
    "name": "Armagh City, Banbridge and Craigavon",
    "type": "District"
  },
  {
    "countryCode": "GB",
    "code": "GB-BDG",
    "name": "Barking and Dagenham",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-BNE",
    "name": "Barnet",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-BNS",
    "name": "Barnsley",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-BAS",
    "name": "Bath and North East Somerset",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-BDF",
    "name": "Bedford",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-BFS",
    "name": "Belfast City",
    "type": "District"
  },
  {
    "countryCode": "GB",
    "code": "GB-BEX",
    "name": "Bexley",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-BIR",
    "name": "Birmingham",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-BBD",
    "name": "Blackburn with Darwen",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-BPL",
    "name": "Blackpool",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-BGW",
    "name": "Blaenau Gwent",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-BOL",
    "name": "Bolton",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-BCP",
    "name": "Bournemouth, Christchurch and Poole",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-BRC",
    "name": "Bracknell Forest",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-BRD",
    "name": "Bradford",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-BEN",
    "name": "Brent",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-BGE",
    "name": "Bridgend [Pen-y-bont ar Ogwr GB-POG]",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-BNH",
    "name": "Brighton and Hove",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-BST",
    "name": "Bristol, City of",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-BRY",
    "name": "Bromley",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-BKM",
    "name": "Buckinghamshire",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-BUR",
    "name": "Bury",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-CAY",
    "name": "Caerphilly [Caerffili GB-CAF]",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-CLD",
    "name": "Calderdale",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-CAM",
    "name": "Cambridgeshire",
    "type": "Two-tier county"
  },
  {
    "countryCode": "GB",
    "code": "GB-CMD",
    "name": "Camden",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-CRF",
    "name": "Cardiff [Caerdydd GB-CRD]",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-CMN",
    "name": "Carmarthenshire [Sir Gaerfyrddin GB-GFY]",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-CCG",
    "name": "Causeway Coast and Glens",
    "type": "District"
  },
  {
    "countryCode": "GB",
    "code": "GB-CBF",
    "name": "Central Bedfordshire",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-CGN",
    "name": "Ceredigion [Sir Ceredigion]",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-CHE",
    "name": "Cheshire East",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-CHW",
    "name": "Cheshire West and Chester",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-CLK",
    "name": "Clackmannanshire",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-CWY",
    "name": "Conwy",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-CON",
    "name": "Cornwall",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-COV",
    "name": "Coventry",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-CRY",
    "name": "Croydon",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-CMA",
    "name": "Cumbria",
    "type": "Two-tier county"
  },
  {
    "countryCode": "GB",
    "code": "GB-DAL",
    "name": "Darlington",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-DEN",
    "name": "Denbighshire [Sir Ddinbych GB-DDB]",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-DER",
    "name": "Derby",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-DBY",
    "name": "Derbyshire",
    "type": "Two-tier county"
  },
  {
    "countryCode": "GB",
    "code": "GB-DRS",
    "name": "Derry and Strabane",
    "type": "District"
  },
  {
    "countryCode": "GB",
    "code": "GB-DEV",
    "name": "Devon",
    "type": "Two-tier county"
  },
  {
    "countryCode": "GB",
    "code": "GB-DNC",
    "name": "Doncaster",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-DOR",
    "name": "Dorset",
    "type": "Two-tier county"
  },
  {
    "countryCode": "GB",
    "code": "GB-DUD",
    "name": "Dudley",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-DGY",
    "name": "Dumfries and Galloway",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-DND",
    "name": "Dundee City",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-DUR",
    "name": "Durham, County",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-EAL",
    "name": "Ealing",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-EAY",
    "name": "East Ayrshire",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-EDU",
    "name": "East Dunbartonshire",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-ELN",
    "name": "East Lothian",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-ERW",
    "name": "East Renfrewshire",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-ERY",
    "name": "East Riding of Yorkshire",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-ESX",
    "name": "East Sussex",
    "type": "Two-tier county"
  },
  {
    "countryCode": "GB",
    "code": "GB-EDH",
    "name": "Edinburgh, City of",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-ELS",
    "name": "Eilean Siar",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-ENF",
    "name": "Enfield",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-ENG",
    "name": "England",
    "type": "Country"
  },
  {
    "countryCode": "GB",
    "code": "GB-ESS",
    "name": "Essex",
    "type": "Two-tier county"
  },
  {
    "countryCode": "GB",
    "code": "GB-FAL",
    "name": "Falkirk",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-FMO",
    "name": "Fermanagh and Omagh",
    "type": "District"
  },
  {
    "countryCode": "GB",
    "code": "GB-FIF",
    "name": "Fife",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-FLN",
    "name": "Flintshire [Sir y Fflint GB-FFL]",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-GAT",
    "name": "Gateshead",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-GLG",
    "name": "Glasgow City",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-GLS",
    "name": "Gloucestershire",
    "type": "Two-tier county"
  },
  {
    "countryCode": "GB",
    "code": "GB-GRE",
    "name": "Greenwich",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-GWN",
    "name": "Gwynedd",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-HCK",
    "name": "Hackney",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-HAL",
    "name": "Halton",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-HMF",
    "name": "Hammersmith and Fulham",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-HAM",
    "name": "Hampshire",
    "type": "Two-tier county"
  },
  {
    "countryCode": "GB",
    "code": "GB-HRY",
    "name": "Haringey",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-HRW",
    "name": "Harrow",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-HPL",
    "name": "Hartlepool",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-HAV",
    "name": "Havering",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-HEF",
    "name": "Herefordshire",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-HRT",
    "name": "Hertfordshire",
    "type": "Two-tier county"
  },
  {
    "countryCode": "GB",
    "code": "GB-HLD",
    "name": "Highland",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-HIL",
    "name": "Hillingdon",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-HNS",
    "name": "Hounslow",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-IVC",
    "name": "Inverclyde",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-AGY",
    "name": "Isle of Anglesey [Sir Ynys Môn GB-YNM]",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-IOW",
    "name": "Isle of Wight",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-IOS",
    "name": "Isles of Scilly",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-ISL",
    "name": "Islington",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-KEC",
    "name": "Kensington and Chelsea",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-KEN",
    "name": "Kent",
    "type": "Two-tier county"
  },
  {
    "countryCode": "GB",
    "code": "GB-KHL",
    "name": "Kingston upon Hull",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-KTT",
    "name": "Kingston upon Thames",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-KIR",
    "name": "Kirklees",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-KWL",
    "name": "Knowsley",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-LBH",
    "name": "Lambeth",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-LAN",
    "name": "Lancashire",
    "type": "Two-tier county"
  },
  {
    "countryCode": "GB",
    "code": "GB-LDS",
    "name": "Leeds",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-LCE",
    "name": "Leicester",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-LEC",
    "name": "Leicestershire",
    "type": "Two-tier county"
  },
  {
    "countryCode": "GB",
    "code": "GB-LEW",
    "name": "Lewisham",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-LIN",
    "name": "Lincolnshire",
    "type": "Two-tier county"
  },
  {
    "countryCode": "GB",
    "code": "GB-LBC",
    "name": "Lisburn and Castlereagh",
    "type": "District"
  },
  {
    "countryCode": "GB",
    "code": "GB-LIV",
    "name": "Liverpool",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-LND",
    "name": "London, City of",
    "type": "City corporation"
  },
  {
    "countryCode": "GB",
    "code": "GB-LUT",
    "name": "Luton",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-MAN",
    "name": "Manchester",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-MDW",
    "name": "Medway",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-MTY",
    "name": "Merthyr Tydfil [Merthyr Tudful GB-MTU]",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-MRT",
    "name": "Merton",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-MEA",
    "name": "Mid and East Antrim",
    "type": "District"
  },
  {
    "countryCode": "GB",
    "code": "GB-MUL",
    "name": "Mid-Ulster",
    "type": "District"
  },
  {
    "countryCode": "GB",
    "code": "GB-MDB",
    "name": "Middlesbrough",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-MLN",
    "name": "Midlothian",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-MIK",
    "name": "Milton Keynes",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-MON",
    "name": "Monmouthshire [Sir Fynwy GB-FYN]",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-MRY",
    "name": "Moray",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-NTL",
    "name": "Neath Port Talbot [Castell-nedd Port Talbot GB-CTL]",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-NET",
    "name": "Newcastle upon Tyne",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-NWM",
    "name": "Newham",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-NWP",
    "name": "Newport [Casnewydd GB-CNW]",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-NMD",
    "name": "Newry, Mourne and Down",
    "type": "District"
  },
  {
    "countryCode": "GB",
    "code": "GB-NFK",
    "name": "Norfolk",
    "type": "Two-tier county"
  },
  {
    "countryCode": "GB",
    "code": "GB-NAY",
    "name": "North Ayrshire",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-NEL",
    "name": "North East Lincolnshire",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-NLK",
    "name": "North Lanarkshire",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-NLN",
    "name": "North Lincolnshire",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-NNH",
    "name": "North Northamptonshire",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-NSM",
    "name": "North Somerset",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-NTY",
    "name": "North Tyneside",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-NYK",
    "name": "North Yorkshire",
    "type": "Two-tier county"
  },
  {
    "countryCode": "GB",
    "code": "GB-NIR",
    "name": "Northern Ireland",
    "type": "Province"
  },
  {
    "countryCode": "GB",
    "code": "GB-NBL",
    "name": "Northumberland",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-NGM",
    "name": "Nottingham",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-NTT",
    "name": "Nottinghamshire",
    "type": "Two-tier county"
  },
  {
    "countryCode": "GB",
    "code": "GB-OLD",
    "name": "Oldham",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-ORK",
    "name": "Orkney Islands",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-OXF",
    "name": "Oxfordshire",
    "type": "Two-tier county"
  },
  {
    "countryCode": "GB",
    "code": "GB-PEM",
    "name": "Pembrokeshire [Sir Benfro GB-BNF]",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-PKN",
    "name": "Perth and Kinross",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-PTE",
    "name": "Peterborough",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-PLY",
    "name": "Plymouth",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-POR",
    "name": "Portsmouth",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-POW",
    "name": "Powys",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-RDG",
    "name": "Reading",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-RDB",
    "name": "Redbridge",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-RCC",
    "name": "Redcar and Cleveland",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-RFW",
    "name": "Renfrewshire",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-RCT",
    "name": "Rhondda Cynon Taff [Rhondda CynonTaf]",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-RIC",
    "name": "Richmond upon Thames",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-RCH",
    "name": "Rochdale",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-ROT",
    "name": "Rotherham",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-RUT",
    "name": "Rutland",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-SLF",
    "name": "Salford",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-SAW",
    "name": "Sandwell",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-SCT",
    "name": "Scotland",
    "type": "Country"
  },
  {
    "countryCode": "GB",
    "code": "GB-SCB",
    "name": "Scottish Borders",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-SFT",
    "name": "Sefton",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-SHF",
    "name": "Sheffield",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-ZET",
    "name": "Shetland Islands",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-SHR",
    "name": "Shropshire",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-SLG",
    "name": "Slough",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-SOL",
    "name": "Solihull",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-SOM",
    "name": "Somerset",
    "type": "Two-tier county"
  },
  {
    "countryCode": "GB",
    "code": "GB-SAY",
    "name": "South Ayrshire",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-SGC",
    "name": "South Gloucestershire",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-SLK",
    "name": "South Lanarkshire",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-STY",
    "name": "South Tyneside",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-STH",
    "name": "Southampton",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-SOS",
    "name": "Southend-on-Sea",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-SWK",
    "name": "Southwark",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-SHN",
    "name": "St. Helens",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-STS",
    "name": "Staffordshire",
    "type": "Two-tier county"
  },
  {
    "countryCode": "GB",
    "code": "GB-STG",
    "name": "Stirling",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-SKP",
    "name": "Stockport",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-STT",
    "name": "Stockton-on-Tees",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-STE",
    "name": "Stoke-on-Trent",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-SFK",
    "name": "Suffolk",
    "type": "Two-tier county"
  },
  {
    "countryCode": "GB",
    "code": "GB-SND",
    "name": "Sunderland",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-SRY",
    "name": "Surrey",
    "type": "Two-tier county"
  },
  {
    "countryCode": "GB",
    "code": "GB-STN",
    "name": "Sutton",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-SWA",
    "name": "Swansea [Abertawe GB-ATA]",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-SWD",
    "name": "Swindon",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-TAM",
    "name": "Tameside",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-TFW",
    "name": "Telford and Wrekin",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-THR",
    "name": "Thurrock",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-TOB",
    "name": "Torbay",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-TOF",
    "name": "Torfaen [Tor-faen]",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-TWH",
    "name": "Tower Hamlets",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-TRF",
    "name": "Trafford",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-VGL",
    "name": "Vale of Glamorgan, The [Bro Morgannwg GB-BMG]",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-WKF",
    "name": "Wakefield",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-WLS",
    "name": "Wales [Cymru GB-CYM]",
    "type": "Country"
  },
  {
    "countryCode": "GB",
    "code": "GB-WLL",
    "name": "Walsall",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-WFT",
    "name": "Waltham Forest",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-WND",
    "name": "Wandsworth",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-WRT",
    "name": "Warrington",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-WAR",
    "name": "Warwickshire",
    "type": "Two-tier county"
  },
  {
    "countryCode": "GB",
    "code": "GB-WBK",
    "name": "West Berkshire",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-WDU",
    "name": "West Dunbartonshire",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-WLN",
    "name": "West Lothian",
    "type": "Council area"
  },
  {
    "countryCode": "GB",
    "code": "GB-WNH",
    "name": "West Northamptonshire",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-WSX",
    "name": "West Sussex",
    "type": "Two-tier county"
  },
  {
    "countryCode": "GB",
    "code": "GB-WSM",
    "name": "Westminster",
    "type": "London borough"
  },
  {
    "countryCode": "GB",
    "code": "GB-WGN",
    "name": "Wigan",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-WIL",
    "name": "Wiltshire",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-WNM",
    "name": "Windsor and Maidenhead",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-WRL",
    "name": "Wirral",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-WOK",
    "name": "Wokingham",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-WLV",
    "name": "Wolverhampton",
    "type": "Metropolitan district"
  },
  {
    "countryCode": "GB",
    "code": "GB-WOR",
    "name": "Worcestershire",
    "type": "Two-tier county"
  },
  {
    "countryCode": "GB",
    "code": "GB-WRX",
    "name": "Wrexham [Wrecsam GB-WRC]",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GB",
    "code": "GB-YOR",
    "name": "York",
    "type": "Unitary authority"
  },
  {
    "countryCode": "GD",
    "code": "GD-01",
    "name": "Saint Andrew",
    "type": "Parish"
  },
  {
    "countryCode": "GD",
    "code": "GD-02",
    "name": "Saint David",
    "type": "Parish"
  },
  {
    "countryCode": "GD",
    "code": "GD-03",
    "name": "Saint George",
    "type": "Parish"
  },
  {
    "countryCode": "GD",
    "code": "GD-04",
    "name": "Saint John",
    "type": "Parish"
  },
  {
    "countryCode": "GD",
    "code": "GD-05",
    "name": "Saint Mark",
    "type": "Parish"
  },
  {
    "countryCode": "GD",
    "code": "GD-06",
    "name": "Saint Patrick",
    "type": "Parish"
  },
  {
    "countryCode": "GD",
    "code": "GD-10",
    "name": "Southern Grenadine Islands",
    "type": "Dependency"
  },
  {
    "countryCode": "GE",
    "code": "GE-AB",
    "name": "Abkhazia",
    "type": "Autonomous republic"
  },
  {
    "countryCode": "GE",
    "code": "GE-AJ",
    "name": "Ajaria",
    "type": "Autonomous republic"
  },
  {
    "countryCode": "GE",
    "code": "GE-GU",
    "name": "Guria",
    "type": "Region"
  },
  {
    "countryCode": "GE",
    "code": "GE-IM",
    "name": "Imereti",
    "type": "Region"
  },
  {
    "countryCode": "GE",
    "code": "GE-KA",
    "name": "K'akheti",
    "type": "Region"
  },
  {
    "countryCode": "GE",
    "code": "GE-KK",
    "name": "Kvemo Kartli",
    "type": "Region"
  },
  {
    "countryCode": "GE",
    "code": "GE-MM",
    "name": "Mtskheta-Mtianeti",
    "type": "Region"
  },
  {
    "countryCode": "GE",
    "code": "GE-RL",
    "name": "Rach'a-Lechkhumi-Kvemo Svaneti",
    "type": "Region"
  },
  {
    "countryCode": "GE",
    "code": "GE-SZ",
    "name": "Samegrelo-Zemo Svaneti",
    "type": "Region"
  },
  {
    "countryCode": "GE",
    "code": "GE-SJ",
    "name": "Samtskhe-Javakheti",
    "type": "Region"
  },
  {
    "countryCode": "GE",
    "code": "GE-SK",
    "name": "Shida Kartli",
    "type": "Region"
  },
  {
    "countryCode": "GE",
    "code": "GE-TB",
    "name": "Tbilisi",
    "type": "City"
  },
  {
    "countryCode": "GH",
    "code": "GH-AF",
    "name": "Ahafo",
    "type": "Region"
  },
  {
    "countryCode": "GH",
    "code": "GH-AH",
    "name": "Ashanti",
    "type": "Region"
  },
  {
    "countryCode": "GH",
    "code": "GH-BO",
    "name": "Bono",
    "type": "Region"
  },
  {
    "countryCode": "GH",
    "code": "GH-BE",
    "name": "Bono East",
    "type": "Region"
  },
  {
    "countryCode": "GH",
    "code": "GH-CP",
    "name": "Central",
    "type": "Region"
  },
  {
    "countryCode": "GH",
    "code": "GH-EP",
    "name": "Eastern",
    "type": "Region"
  },
  {
    "countryCode": "GH",
    "code": "GH-AA",
    "name": "Greater Accra",
    "type": "Region"
  },
  {
    "countryCode": "GH",
    "code": "GH-NE",
    "name": "North East",
    "type": "Region"
  },
  {
    "countryCode": "GH",
    "code": "GH-NP",
    "name": "Northern",
    "type": "Region"
  },
  {
    "countryCode": "GH",
    "code": "GH-OT",
    "name": "Oti",
    "type": "Region"
  },
  {
    "countryCode": "GH",
    "code": "GH-SV",
    "name": "Savannah",
    "type": "Region"
  },
  {
    "countryCode": "GH",
    "code": "GH-UE",
    "name": "Upper East",
    "type": "Region"
  },
  {
    "countryCode": "GH",
    "code": "GH-UW",
    "name": "Upper West",
    "type": "Region"
  },
  {
    "countryCode": "GH",
    "code": "GH-TV",
    "name": "Volta",
    "type": "Region"
  },
  {
    "countryCode": "GH",
    "code": "GH-WP",
    "name": "Western",
    "type": "Region"
  },
  {
    "countryCode": "GH",
    "code": "GH-WN",
    "name": "Western North",
    "type": "Region"
  },
  {
    "countryCode": "GL",
    "code": "GL-AV",
    "name": "Avannaata Kommunia",
    "type": "Municipality"
  },
  {
    "countryCode": "GL",
    "code": "GL-KU",
    "name": "Kommune Kujalleq",
    "type": "Municipality"
  },
  {
    "countryCode": "GL",
    "code": "GL-QT",
    "name": "Kommune Qeqertalik",
    "type": "Municipality"
  },
  {
    "countryCode": "GL",
    "code": "GL-SM",
    "name": "Kommuneqarfik Sermersooq",
    "type": "Municipality"
  },
  {
    "countryCode": "GL",
    "code": "GL-QE",
    "name": "Qeqqata Kommunia",
    "type": "Municipality"
  },
  {
    "countryCode": "GM",
    "code": "GM-B",
    "name": "Banjul",
    "type": "City"
  },
  {
    "countryCode": "GM",
    "code": "GM-M",
    "name": "Central River",
    "type": "Division"
  },
  {
    "countryCode": "GM",
    "code": "GM-L",
    "name": "Lower River",
    "type": "Division"
  },
  {
    "countryCode": "GM",
    "code": "GM-N",
    "name": "North Bank",
    "type": "Division"
  },
  {
    "countryCode": "GM",
    "code": "GM-U",
    "name": "Upper River",
    "type": "Division"
  },
  {
    "countryCode": "GM",
    "code": "GM-W",
    "name": "Western",
    "type": "Division"
  },
  {
    "countryCode": "GN",
    "code": "GN-BE",
    "name": "Beyla",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-BF",
    "name": "Boffa",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-B",
    "name": "Boké",
    "type": "Administrative region"
  },
  {
    "countryCode": "GN",
    "code": "GN-BK",
    "name": "Boké",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-C",
    "name": "Conakry",
    "type": "Governorate"
  },
  {
    "countryCode": "GN",
    "code": "GN-CO",
    "name": "Coyah",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-DB",
    "name": "Dabola",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-DL",
    "name": "Dalaba",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-DI",
    "name": "Dinguiraye",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-DU",
    "name": "Dubréka",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-F",
    "name": "Faranah",
    "type": "Administrative region"
  },
  {
    "countryCode": "GN",
    "code": "GN-FA",
    "name": "Faranah",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-FO",
    "name": "Forécariah",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-FR",
    "name": "Fria",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-GA",
    "name": "Gaoual",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-GU",
    "name": "Guékédou",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-K",
    "name": "Kankan",
    "type": "Administrative region"
  },
  {
    "countryCode": "GN",
    "code": "GN-KA",
    "name": "Kankan",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-D",
    "name": "Kindia",
    "type": "Administrative region"
  },
  {
    "countryCode": "GN",
    "code": "GN-KD",
    "name": "Kindia",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-KS",
    "name": "Kissidougou",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-KB",
    "name": "Koubia",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-KN",
    "name": "Koundara",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-KO",
    "name": "Kouroussa",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-KE",
    "name": "Kérouané",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-L",
    "name": "Labé",
    "type": "Administrative region"
  },
  {
    "countryCode": "GN",
    "code": "GN-LA",
    "name": "Labé",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-LO",
    "name": "Lola",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-LE",
    "name": "Lélouma",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-MC",
    "name": "Macenta",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-ML",
    "name": "Mali",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-M",
    "name": "Mamou",
    "type": "Administrative region"
  },
  {
    "countryCode": "GN",
    "code": "GN-MM",
    "name": "Mamou",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-MD",
    "name": "Mandiana",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-N",
    "name": "Nzérékoré",
    "type": "Administrative region"
  },
  {
    "countryCode": "GN",
    "code": "GN-NZ",
    "name": "Nzérékoré",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-PI",
    "name": "Pita",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-SI",
    "name": "Siguiri",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-TO",
    "name": "Tougué",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-TE",
    "name": "Télimélé",
    "type": "Prefecture"
  },
  {
    "countryCode": "GN",
    "code": "GN-YO",
    "name": "Yomou",
    "type": "Prefecture"
  },
  {
    "countryCode": "GQ",
    "code": "GQ-AN",
    "name": "Annobon",
    "type": "Province"
  },
  {
    "countryCode": "GQ",
    "code": "GQ-BN",
    "name": "Bioko Nord",
    "type": "Province"
  },
  {
    "countryCode": "GQ",
    "code": "GQ-BS",
    "name": "Bioko Sud",
    "type": "Province"
  },
  {
    "countryCode": "GQ",
    "code": "GQ-CS",
    "name": "Centro Sud",
    "type": "Province"
  },
  {
    "countryCode": "GQ",
    "code": "GQ-DJ",
    "name": "Djibloho",
    "type": "Province"
  },
  {
    "countryCode": "GQ",
    "code": "GQ-KN",
    "name": "Kié-Ntem",
    "type": "Province"
  },
  {
    "countryCode": "GQ",
    "code": "GQ-LI",
    "name": "Littoral",
    "type": "Province"
  },
  {
    "countryCode": "GQ",
    "code": "GQ-C",
    "name": "Région Continentale",
    "type": "Region"
  },
  {
    "countryCode": "GQ",
    "code": "GQ-I",
    "name": "Région Insulaire",
    "type": "Region"
  },
  {
    "countryCode": "GQ",
    "code": "GQ-WN",
    "name": "Wele-Nzas",
    "type": "Province"
  },
  {
    "countryCode": "GR",
    "code": "GR-A",
    "name": "Anatolikí Makedonía kai Thráki",
    "type": "Administrative region"
  },
  {
    "countryCode": "GR",
    "code": "GR-I",
    "name": "Attikí",
    "type": "Administrative region"
  },
  {
    "countryCode": "GR",
    "code": "GR-G",
    "name": "Dytikí Elláda",
    "type": "Administrative region"
  },
  {
    "countryCode": "GR",
    "code": "GR-C",
    "name": "Dytikí Makedonía",
    "type": "Administrative region"
  },
  {
    "countryCode": "GR",
    "code": "GR-F",
    "name": "Ionía Nísia",
    "type": "Administrative region"
  },
  {
    "countryCode": "GR",
    "code": "GR-B",
    "name": "Kentrikí Makedonía",
    "type": "Administrative region"
  },
  {
    "countryCode": "GR",
    "code": "GR-M",
    "name": "Kríti",
    "type": "Administrative region"
  },
  {
    "countryCode": "GR",
    "code": "GR-L",
    "name": "Nótio Aigaío",
    "type": "Administrative region"
  },
  {
    "countryCode": "GR",
    "code": "GR-J",
    "name": "Pelopónnisos",
    "type": "Administrative region"
  },
  {
    "countryCode": "GR",
    "code": "GR-H",
    "name": "Stereá Elláda",
    "type": "Administrative region"
  },
  {
    "countryCode": "GR",
    "code": "GR-E",
    "name": "Thessalía",
    "type": "Administrative region"
  },
  {
    "countryCode": "GR",
    "code": "GR-K",
    "name": "Vóreio Aigaío",
    "type": "Administrative region"
  },
  {
    "countryCode": "GR",
    "code": "GR-69",
    "name": "Ágion Óros",
    "type": "Self-governed part"
  },
  {
    "countryCode": "GR",
    "code": "GR-D",
    "name": "Ípeiros",
    "type": "Administrative region"
  },
  {
    "countryCode": "GT",
    "code": "GT-16",
    "name": "Alta Verapaz",
    "type": "Department"
  },
  {
    "countryCode": "GT",
    "code": "GT-15",
    "name": "Baja Verapaz",
    "type": "Department"
  },
  {
    "countryCode": "GT",
    "code": "GT-04",
    "name": "Chimaltenango",
    "type": "Department"
  },
  {
    "countryCode": "GT",
    "code": "GT-20",
    "name": "Chiquimula",
    "type": "Department"
  },
  {
    "countryCode": "GT",
    "code": "GT-02",
    "name": "El Progreso",
    "type": "Department"
  },
  {
    "countryCode": "GT",
    "code": "GT-05",
    "name": "Escuintla",
    "type": "Department"
  },
  {
    "countryCode": "GT",
    "code": "GT-01",
    "name": "Guatemala",
    "type": "Department"
  },
  {
    "countryCode": "GT",
    "code": "GT-13",
    "name": "Huehuetenango",
    "type": "Department"
  },
  {
    "countryCode": "GT",
    "code": "GT-18",
    "name": "Izabal",
    "type": "Department"
  },
  {
    "countryCode": "GT",
    "code": "GT-21",
    "name": "Jalapa",
    "type": "Department"
  },
  {
    "countryCode": "GT",
    "code": "GT-22",
    "name": "Jutiapa",
    "type": "Department"
  },
  {
    "countryCode": "GT",
    "code": "GT-17",
    "name": "Petén",
    "type": "Department"
  },
  {
    "countryCode": "GT",
    "code": "GT-09",
    "name": "Quetzaltenango",
    "type": "Department"
  },
  {
    "countryCode": "GT",
    "code": "GT-14",
    "name": "Quiché",
    "type": "Department"
  },
  {
    "countryCode": "GT",
    "code": "GT-11",
    "name": "Retalhuleu",
    "type": "Department"
  },
  {
    "countryCode": "GT",
    "code": "GT-03",
    "name": "Sacatepéquez",
    "type": "Department"
  },
  {
    "countryCode": "GT",
    "code": "GT-12",
    "name": "San Marcos",
    "type": "Department"
  },
  {
    "countryCode": "GT",
    "code": "GT-06",
    "name": "Santa Rosa",
    "type": "Department"
  },
  {
    "countryCode": "GT",
    "code": "GT-07",
    "name": "Sololá",
    "type": "Department"
  },
  {
    "countryCode": "GT",
    "code": "GT-10",
    "name": "Suchitepéquez",
    "type": "Department"
  },
  {
    "countryCode": "GT",
    "code": "GT-08",
    "name": "Totonicapán",
    "type": "Department"
  },
  {
    "countryCode": "GT",
    "code": "GT-19",
    "name": "Zacapa",
    "type": "Department"
  },
  {
    "countryCode": "GW",
    "code": "GW-BA",
    "name": "Bafatá",
    "type": "Region"
  },
  {
    "countryCode": "GW",
    "code": "GW-BM",
    "name": "Biombo",
    "type": "Region"
  },
  {
    "countryCode": "GW",
    "code": "GW-BS",
    "name": "Bissau",
    "type": "Autonomous sector"
  },
  {
    "countryCode": "GW",
    "code": "GW-BL",
    "name": "Bolama / Bijagós",
    "type": "Region"
  },
  {
    "countryCode": "GW",
    "code": "GW-CA",
    "name": "Cacheu",
    "type": "Region"
  },
  {
    "countryCode": "GW",
    "code": "GW-GA",
    "name": "Gabú",
    "type": "Region"
  },
  {
    "countryCode": "GW",
    "code": "GW-L",
    "name": "Leste",
    "type": "Province"
  },
  {
    "countryCode": "GW",
    "code": "GW-N",
    "name": "Norte",
    "type": "Province"
  },
  {
    "countryCode": "GW",
    "code": "GW-OI",
    "name": "Oio",
    "type": "Region"
  },
  {
    "countryCode": "GW",
    "code": "GW-QU",
    "name": "Quinara",
    "type": "Region"
  },
  {
    "countryCode": "GW",
    "code": "GW-S",
    "name": "Sul",
    "type": "Province"
  },
  {
    "countryCode": "GW",
    "code": "GW-TO",
    "name": "Tombali",
    "type": "Region"
  },
  {
    "countryCode": "GY",
    "code": "GY-BA",
    "name": "Barima-Waini",
    "type": "Region"
  },
  {
    "countryCode": "GY",
    "code": "GY-CU",
    "name": "Cuyuni-Mazaruni",
    "type": "Region"
  },
  {
    "countryCode": "GY",
    "code": "GY-DE",
    "name": "Demerara-Mahaica",
    "type": "Region"
  },
  {
    "countryCode": "GY",
    "code": "GY-EB",
    "name": "East Berbice-Corentyne",
    "type": "Region"
  },
  {
    "countryCode": "GY",
    "code": "GY-ES",
    "name": "Essequibo Islands-West Demerara",
    "type": "Region"
  },
  {
    "countryCode": "GY",
    "code": "GY-MA",
    "name": "Mahaica-Berbice",
    "type": "Region"
  },
  {
    "countryCode": "GY",
    "code": "GY-PM",
    "name": "Pomeroon-Supenaam",
    "type": "Region"
  },
  {
    "countryCode": "GY",
    "code": "GY-PT",
    "name": "Potaro-Siparuni",
    "type": "Region"
  },
  {
    "countryCode": "GY",
    "code": "GY-UD",
    "name": "Upper Demerara-Berbice",
    "type": "Region"
  },
  {
    "countryCode": "GY",
    "code": "GY-UT",
    "name": "Upper Takutu-Upper Essequibo",
    "type": "Region"
  },
  {
    "countryCode": "HN",
    "code": "HN-AT",
    "name": "Atlántida",
    "type": "Department"
  },
  {
    "countryCode": "HN",
    "code": "HN-CH",
    "name": "Choluteca",
    "type": "Department"
  },
  {
    "countryCode": "HN",
    "code": "HN-CL",
    "name": "Colón",
    "type": "Department"
  },
  {
    "countryCode": "HN",
    "code": "HN-CM",
    "name": "Comayagua",
    "type": "Department"
  },
  {
    "countryCode": "HN",
    "code": "HN-CP",
    "name": "Copán",
    "type": "Department"
  },
  {
    "countryCode": "HN",
    "code": "HN-CR",
    "name": "Cortés",
    "type": "Department"
  },
  {
    "countryCode": "HN",
    "code": "HN-EP",
    "name": "El Paraíso",
    "type": "Department"
  },
  {
    "countryCode": "HN",
    "code": "HN-FM",
    "name": "Francisco Morazán",
    "type": "Department"
  },
  {
    "countryCode": "HN",
    "code": "HN-GD",
    "name": "Gracias a Dios",
    "type": "Department"
  },
  {
    "countryCode": "HN",
    "code": "HN-IN",
    "name": "Intibucá",
    "type": "Department"
  },
  {
    "countryCode": "HN",
    "code": "HN-IB",
    "name": "Islas de la Bahía",
    "type": "Department"
  },
  {
    "countryCode": "HN",
    "code": "HN-LP",
    "name": "La Paz",
    "type": "Department"
  },
  {
    "countryCode": "HN",
    "code": "HN-LE",
    "name": "Lempira",
    "type": "Department"
  },
  {
    "countryCode": "HN",
    "code": "HN-OC",
    "name": "Ocotepeque",
    "type": "Department"
  },
  {
    "countryCode": "HN",
    "code": "HN-OL",
    "name": "Olancho",
    "type": "Department"
  },
  {
    "countryCode": "HN",
    "code": "HN-SB",
    "name": "Santa Bárbara",
    "type": "Department"
  },
  {
    "countryCode": "HN",
    "code": "HN-VA",
    "name": "Valle",
    "type": "Department"
  },
  {
    "countryCode": "HN",
    "code": "HN-YO",
    "name": "Yoro",
    "type": "Department"
  },
  {
    "countryCode": "HR",
    "code": "HR-07",
    "name": "Bjelovarsko-bilogorska županija",
    "type": "County"
  },
  {
    "countryCode": "HR",
    "code": "HR-12",
    "name": "Brodsko-posavska županija",
    "type": "County"
  },
  {
    "countryCode": "HR",
    "code": "HR-19",
    "name": "Dubrovačko-neretvanska županija",
    "type": "County"
  },
  {
    "countryCode": "HR",
    "code": "HR-21",
    "name": "Grad Zagreb",
    "type": "City"
  },
  {
    "countryCode": "HR",
    "code": "HR-18",
    "name": "Istarska županija",
    "type": "County"
  },
  {
    "countryCode": "HR",
    "code": "HR-04",
    "name": "Karlovačka županija",
    "type": "County"
  },
  {
    "countryCode": "HR",
    "code": "HR-06",
    "name": "Koprivničko-križevačka županija",
    "type": "County"
  },
  {
    "countryCode": "HR",
    "code": "HR-02",
    "name": "Krapinsko-zagorska županija",
    "type": "County"
  },
  {
    "countryCode": "HR",
    "code": "HR-09",
    "name": "Ličko-senjska županija",
    "type": "County"
  },
  {
    "countryCode": "HR",
    "code": "HR-20",
    "name": "Međimurska županija",
    "type": "County"
  },
  {
    "countryCode": "HR",
    "code": "HR-14",
    "name": "Osječko-baranjska županija",
    "type": "County"
  },
  {
    "countryCode": "HR",
    "code": "HR-11",
    "name": "Požeško-slavonska županija",
    "type": "County"
  },
  {
    "countryCode": "HR",
    "code": "HR-08",
    "name": "Primorsko-goranska županija",
    "type": "County"
  },
  {
    "countryCode": "HR",
    "code": "HR-03",
    "name": "Sisačko-moslavačka županija",
    "type": "County"
  },
  {
    "countryCode": "HR",
    "code": "HR-17",
    "name": "Splitsko-dalmatinska županija",
    "type": "County"
  },
  {
    "countryCode": "HR",
    "code": "HR-05",
    "name": "Varaždinska županija",
    "type": "County"
  },
  {
    "countryCode": "HR",
    "code": "HR-10",
    "name": "Virovitičko-podravska županija",
    "type": "County"
  },
  {
    "countryCode": "HR",
    "code": "HR-16",
    "name": "Vukovarsko-srijemska županija",
    "type": "County"
  },
  {
    "countryCode": "HR",
    "code": "HR-13",
    "name": "Zadarska županija",
    "type": "County"
  },
  {
    "countryCode": "HR",
    "code": "HR-01",
    "name": "Zagrebačka županija",
    "type": "County"
  },
  {
    "countryCode": "HR",
    "code": "HR-15",
    "name": "Šibensko-kninska županija",
    "type": "County"
  },
  {
    "countryCode": "HT",
    "code": "HT-AR",
    "name": "Artibonite",
    "type": "Department"
  },
  {
    "countryCode": "HT",
    "code": "HT-CE",
    "name": "Centre",
    "type": "Department"
  },
  {
    "countryCode": "HT",
    "code": "HT-GA",
    "name": "Grande’Anse",
    "type": "Department"
  },
  {
    "countryCode": "HT",
    "code": "HT-NI",
    "name": "Nippes",
    "type": "Department"
  },
  {
    "countryCode": "HT",
    "code": "HT-ND",
    "name": "Nord",
    "type": "Department"
  },
  {
    "countryCode": "HT",
    "code": "HT-NE",
    "name": "Nord-Est",
    "type": "Department"
  },
  {
    "countryCode": "HT",
    "code": "HT-NO",
    "name": "Nord-Ouest",
    "type": "Department"
  },
  {
    "countryCode": "HT",
    "code": "HT-OU",
    "name": "Ouest",
    "type": "Department"
  },
  {
    "countryCode": "HT",
    "code": "HT-SD",
    "name": "Sud",
    "type": "Department"
  },
  {
    "countryCode": "HT",
    "code": "HT-SE",
    "name": "Sud-Est",
    "type": "Department"
  },
  {
    "countryCode": "HU",
    "code": "HU-BA",
    "name": "Baranya",
    "type": "County"
  },
  {
    "countryCode": "HU",
    "code": "HU-BZ",
    "name": "Borsod-Abaúj-Zemplén",
    "type": "County"
  },
  {
    "countryCode": "HU",
    "code": "HU-BU",
    "name": "Budapest",
    "type": "Capital city"
  },
  {
    "countryCode": "HU",
    "code": "HU-BK",
    "name": "Bács-Kiskun",
    "type": "County"
  },
  {
    "countryCode": "HU",
    "code": "HU-BE",
    "name": "Békés",
    "type": "County"
  },
  {
    "countryCode": "HU",
    "code": "HU-BC",
    "name": "Békéscsaba",
    "type": "City with county rights"
  },
  {
    "countryCode": "HU",
    "code": "HU-CS",
    "name": "Csongrád-Csanád",
    "type": "County"
  },
  {
    "countryCode": "HU",
    "code": "HU-DE",
    "name": "Debrecen",
    "type": "City with county rights"
  },
  {
    "countryCode": "HU",
    "code": "HU-DU",
    "name": "Dunaújváros",
    "type": "City with county rights"
  },
  {
    "countryCode": "HU",
    "code": "HU-EG",
    "name": "Eger",
    "type": "City with county rights"
  },
  {
    "countryCode": "HU",
    "code": "HU-FE",
    "name": "Fejér",
    "type": "County"
  },
  {
    "countryCode": "HU",
    "code": "HU-GY",
    "name": "Győr",
    "type": "City with county rights"
  },
  {
    "countryCode": "HU",
    "code": "HU-GS",
    "name": "Győr-Moson-Sopron",
    "type": "County"
  },
  {
    "countryCode": "HU",
    "code": "HU-HB",
    "name": "Hajdú-Bihar",
    "type": "County"
  },
  {
    "countryCode": "HU",
    "code": "HU-HE",
    "name": "Heves",
    "type": "County"
  },
  {
    "countryCode": "HU",
    "code": "HU-HV",
    "name": "Hódmezővásárhely",
    "type": "City with county rights"
  },
  {
    "countryCode": "HU",
    "code": "HU-JN",
    "name": "Jász-Nagykun-Szolnok",
    "type": "County"
  },
  {
    "countryCode": "HU",
    "code": "HU-KV",
    "name": "Kaposvár",
    "type": "City with county rights"
  },
  {
    "countryCode": "HU",
    "code": "HU-KM",
    "name": "Kecskemét",
    "type": "City with county rights"
  },
  {
    "countryCode": "HU",
    "code": "HU-KE",
    "name": "Komárom-Esztergom",
    "type": "County"
  },
  {
    "countryCode": "HU",
    "code": "HU-MI",
    "name": "Miskolc",
    "type": "City with county rights"
  },
  {
    "countryCode": "HU",
    "code": "HU-NK",
    "name": "Nagykanizsa",
    "type": "City with county rights"
  },
  {
    "countryCode": "HU",
    "code": "HU-NY",
    "name": "Nyíregyháza",
    "type": "City with county rights"
  },
  {
    "countryCode": "HU",
    "code": "HU-NO",
    "name": "Nógrád",
    "type": "County"
  },
  {
    "countryCode": "HU",
    "code": "HU-PE",
    "name": "Pest",
    "type": "County"
  },
  {
    "countryCode": "HU",
    "code": "HU-PS",
    "name": "Pécs",
    "type": "City with county rights"
  },
  {
    "countryCode": "HU",
    "code": "HU-ST",
    "name": "Salgótarján",
    "type": "City with county rights"
  },
  {
    "countryCode": "HU",
    "code": "HU-SO",
    "name": "Somogy",
    "type": "County"
  },
  {
    "countryCode": "HU",
    "code": "HU-SN",
    "name": "Sopron",
    "type": "City with county rights"
  },
  {
    "countryCode": "HU",
    "code": "HU-SZ",
    "name": "Szabolcs-Szatmár-Bereg",
    "type": "County"
  },
  {
    "countryCode": "HU",
    "code": "HU-SD",
    "name": "Szeged",
    "type": "City with county rights"
  },
  {
    "countryCode": "HU",
    "code": "HU-SS",
    "name": "Szekszárd",
    "type": "City with county rights"
  },
  {
    "countryCode": "HU",
    "code": "HU-SK",
    "name": "Szolnok",
    "type": "City with county rights"
  },
  {
    "countryCode": "HU",
    "code": "HU-SH",
    "name": "Szombathely",
    "type": "City with county rights"
  },
  {
    "countryCode": "HU",
    "code": "HU-SF",
    "name": "Székesfehérvár",
    "type": "City with county rights"
  },
  {
    "countryCode": "HU",
    "code": "HU-TB",
    "name": "Tatabánya",
    "type": "City with county rights"
  },
  {
    "countryCode": "HU",
    "code": "HU-TO",
    "name": "Tolna",
    "type": "County"
  },
  {
    "countryCode": "HU",
    "code": "HU-VA",
    "name": "Vas",
    "type": "County"
  },
  {
    "countryCode": "HU",
    "code": "HU-VE",
    "name": "Veszprém",
    "type": "County"
  },
  {
    "countryCode": "HU",
    "code": "HU-VM",
    "name": "Veszprém",
    "type": "City with county rights"
  },
  {
    "countryCode": "HU",
    "code": "HU-ZA",
    "name": "Zala",
    "type": "County"
  },
  {
    "countryCode": "HU",
    "code": "HU-ZE",
    "name": "Zalaegerszeg",
    "type": "City with county rights"
  },
  {
    "countryCode": "HU",
    "code": "HU-ER",
    "name": "Érd",
    "type": "City with county rights"
  },
  {
    "countryCode": "ID",
    "code": "ID-AC",
    "name": "Aceh",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-BA",
    "name": "Bali",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-BT",
    "name": "Banten",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-BE",
    "name": "Bengkulu",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-GO",
    "name": "Gorontalo",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-JK",
    "name": "Jakarta Raya",
    "type": "Capital district"
  },
  {
    "countryCode": "ID",
    "code": "ID-JA",
    "name": "Jambi",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-JW",
    "name": "Jawa",
    "type": "Geographical unit"
  },
  {
    "countryCode": "ID",
    "code": "ID-JB",
    "name": "Jawa Barat",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-JT",
    "name": "Jawa Tengah",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-JI",
    "name": "Jawa Timur",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-KA",
    "name": "Kalimantan",
    "type": "Geographical unit"
  },
  {
    "countryCode": "ID",
    "code": "ID-KB",
    "name": "Kalimantan Barat",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-KS",
    "name": "Kalimantan Selatan",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-KT",
    "name": "Kalimantan Tengah",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-KI",
    "name": "Kalimantan Timur",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-KU",
    "name": "Kalimantan Utara",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-BB",
    "name": "Kepulauan Bangka Belitung",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-KR",
    "name": "Kepulauan Riau",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-LA",
    "name": "Lampung",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-MA",
    "name": "Maluku",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-ML",
    "name": "Maluku",
    "type": "Geographical unit"
  },
  {
    "countryCode": "ID",
    "code": "ID-MU",
    "name": "Maluku Utara",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-NU",
    "name": "Nusa Tenggara",
    "type": "Geographical unit"
  },
  {
    "countryCode": "ID",
    "code": "ID-NB",
    "name": "Nusa Tenggara Barat",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-NT",
    "name": "Nusa Tenggara Timur",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-PA",
    "name": "Papua",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-PP",
    "name": "Papua",
    "type": "Geographical unit"
  },
  {
    "countryCode": "ID",
    "code": "ID-PB",
    "name": "Papua Barat",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-PD",
    "name": "Papua Barat Daya",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-PE",
    "name": "Papua Pengunungan",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-PS",
    "name": "Papua Selatan",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-PT",
    "name": "Papua Tengah",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-RI",
    "name": "Riau",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-SL",
    "name": "Sulawesi",
    "type": "Geographical unit"
  },
  {
    "countryCode": "ID",
    "code": "ID-SR",
    "name": "Sulawesi Barat",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-SN",
    "name": "Sulawesi Selatan",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-ST",
    "name": "Sulawesi Tengah",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-SG",
    "name": "Sulawesi Tenggara",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-SA",
    "name": "Sulawesi Utara",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-SM",
    "name": "Sumatera",
    "type": "Geographical unit"
  },
  {
    "countryCode": "ID",
    "code": "ID-SB",
    "name": "Sumatera Barat",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-SS",
    "name": "Sumatera Selatan",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-SU",
    "name": "Sumatera Utara",
    "type": "Province"
  },
  {
    "countryCode": "ID",
    "code": "ID-YO",
    "name": "Yogyakarta",
    "type": "Special region"
  },
  {
    "countryCode": "IE",
    "code": "IE-CW",
    "name": "Carlow",
    "type": "County"
  },
  {
    "countryCode": "IE",
    "code": "IE-CN",
    "name": "Cavan",
    "type": "County"
  },
  {
    "countryCode": "IE",
    "code": "IE-CE",
    "name": "Clare",
    "type": "County"
  },
  {
    "countryCode": "IE",
    "code": "IE-C",
    "name": "Connaught",
    "type": "Province"
  },
  {
    "countryCode": "IE",
    "code": "IE-CO",
    "name": "Cork",
    "type": "County"
  },
  {
    "countryCode": "IE",
    "code": "IE-DL",
    "name": "Donegal",
    "type": "County"
  },
  {
    "countryCode": "IE",
    "code": "IE-D",
    "name": "Dublin",
    "type": "County"
  },
  {
    "countryCode": "IE",
    "code": "IE-G",
    "name": "Galway",
    "type": "County"
  },
  {
    "countryCode": "IE",
    "code": "IE-KY",
    "name": "Kerry",
    "type": "County"
  },
  {
    "countryCode": "IE",
    "code": "IE-KE",
    "name": "Kildare",
    "type": "County"
  },
  {
    "countryCode": "IE",
    "code": "IE-KK",
    "name": "Kilkenny",
    "type": "County"
  },
  {
    "countryCode": "IE",
    "code": "IE-LS",
    "name": "Laois",
    "type": "County"
  },
  {
    "countryCode": "IE",
    "code": "IE-L",
    "name": "Leinster",
    "type": "Province"
  },
  {
    "countryCode": "IE",
    "code": "IE-LM",
    "name": "Leitrim",
    "type": "County"
  },
  {
    "countryCode": "IE",
    "code": "IE-LK",
    "name": "Limerick",
    "type": "County"
  },
  {
    "countryCode": "IE",
    "code": "IE-LD",
    "name": "Longford",
    "type": "County"
  },
  {
    "countryCode": "IE",
    "code": "IE-LH",
    "name": "Louth",
    "type": "County"
  },
  {
    "countryCode": "IE",
    "code": "IE-MO",
    "name": "Mayo",
    "type": "County"
  },
  {
    "countryCode": "IE",
    "code": "IE-MH",
    "name": "Meath",
    "type": "County"
  },
  {
    "countryCode": "IE",
    "code": "IE-MN",
    "name": "Monaghan",
    "type": "County"
  },
  {
    "countryCode": "IE",
    "code": "IE-M",
    "name": "Munster",
    "type": "Province"
  },
  {
    "countryCode": "IE",
    "code": "IE-OY",
    "name": "Offaly",
    "type": "County"
  },
  {
    "countryCode": "IE",
    "code": "IE-RN",
    "name": "Roscommon",
    "type": "County"
  },
  {
    "countryCode": "IE",
    "code": "IE-SO",
    "name": "Sligo",
    "type": "County"
  },
  {
    "countryCode": "IE",
    "code": "IE-TA",
    "name": "Tipperary",
    "type": "County"
  },
  {
    "countryCode": "IE",
    "code": "IE-U",
    "name": "Ulster",
    "type": "Province"
  },
  {
    "countryCode": "IE",
    "code": "IE-WD",
    "name": "Waterford",
    "type": "County"
  },
  {
    "countryCode": "IE",
    "code": "IE-WH",
    "name": "Westmeath",
    "type": "County"
  },
  {
    "countryCode": "IE",
    "code": "IE-WX",
    "name": "Wexford",
    "type": "County"
  },
  {
    "countryCode": "IE",
    "code": "IE-WW",
    "name": "Wicklow",
    "type": "County"
  },
  {
    "countryCode": "IL",
    "code": "IL-M",
    "name": "Al Awsaţ",
    "type": "District"
  },
  {
    "countryCode": "IL",
    "code": "IL-D",
    "name": "Al Janūbī",
    "type": "District"
  },
  {
    "countryCode": "IL",
    "code": "IL-JM",
    "name": "Al Quds",
    "type": "District"
  },
  {
    "countryCode": "IL",
    "code": "IL-Z",
    "name": "Ash Shamālī",
    "type": "District"
  },
  {
    "countryCode": "IL",
    "code": "IL-HA",
    "name": "H̱efa",
    "type": "District"
  },
  {
    "countryCode": "IL",
    "code": "IL-TA",
    "name": "Tall Abīb",
    "type": "District"
  },
  {
    "countryCode": "IN",
    "code": "IN-AN",
    "name": "Andaman and Nicobar Islands",
    "type": "Union territory"
  },
  {
    "countryCode": "IN",
    "code": "IN-AP",
    "name": "Andhra Pradesh",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-AR",
    "name": "Arunāchal Pradesh",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-AS",
    "name": "Assam",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-BR",
    "name": "Bihār",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-CH",
    "name": "Chandīgarh",
    "type": "Union territory"
  },
  {
    "countryCode": "IN",
    "code": "IN-CG",
    "name": "Chhattīsgarh",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-DL",
    "name": "Delhi",
    "type": "Union territory"
  },
  {
    "countryCode": "IN",
    "code": "IN-DH",
    "name": "Dādra and Nagar Haveli and Damān and Diu",
    "type": "Union territory"
  },
  {
    "countryCode": "IN",
    "code": "IN-GA",
    "name": "Goa",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-GJ",
    "name": "Gujarāt",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-HR",
    "name": "Haryāna",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-HP",
    "name": "Himāchal Pradesh",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-JK",
    "name": "Jammu and Kashmīr",
    "type": "Union territory"
  },
  {
    "countryCode": "IN",
    "code": "IN-JH",
    "name": "Jhārkhand",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-KA",
    "name": "Karnātaka",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-KL",
    "name": "Kerala",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-LA",
    "name": "Ladākh",
    "type": "Union territory"
  },
  {
    "countryCode": "IN",
    "code": "IN-LD",
    "name": "Lakshadweep",
    "type": "Union territory"
  },
  {
    "countryCode": "IN",
    "code": "IN-MP",
    "name": "Madhya Pradesh",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-MH",
    "name": "Mahārāshtra",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-MN",
    "name": "Manipur",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-ML",
    "name": "Meghālaya",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-MZ",
    "name": "Mizoram",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-NL",
    "name": "Nāgāland",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-OD",
    "name": "Odisha",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-PY",
    "name": "Puducherry",
    "type": "Union territory"
  },
  {
    "countryCode": "IN",
    "code": "IN-PB",
    "name": "Punjab",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-RJ",
    "name": "Rājasthān",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-SK",
    "name": "Sikkim",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-TN",
    "name": "Tamil Nādu",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-TS",
    "name": "Telangāna",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-TR",
    "name": "Tripura",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-UP",
    "name": "Uttar Pradesh",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-UK",
    "name": "Uttarākhand",
    "type": "State"
  },
  {
    "countryCode": "IN",
    "code": "IN-WB",
    "name": "West Bengal",
    "type": "State"
  },
  {
    "countryCode": "IQ",
    "code": "IQ-AN",
    "name": "Al Anbār",
    "type": "Governorate"
  },
  {
    "countryCode": "IQ",
    "code": "IQ-BA",
    "name": "Al Başrah",
    "type": "Governorate"
  },
  {
    "countryCode": "IQ",
    "code": "IQ-MU",
    "name": "Al Muthanná",
    "type": "Governorate"
  },
  {
    "countryCode": "IQ",
    "code": "IQ-QA",
    "name": "Al Qādisīyah",
    "type": "Governorate"
  },
  {
    "countryCode": "IQ",
    "code": "IQ-NA",
    "name": "An Najaf",
    "type": "Governorate"
  },
  {
    "countryCode": "IQ",
    "code": "IQ-AR",
    "name": "Arbīl",
    "type": "Governorate"
  },
  {
    "countryCode": "IQ",
    "code": "IQ-SU",
    "name": "As Sulaymānīyah",
    "type": "Governorate"
  },
  {
    "countryCode": "IQ",
    "code": "IQ-BG",
    "name": "Baghdād",
    "type": "Governorate"
  },
  {
    "countryCode": "IQ",
    "code": "IQ-BB",
    "name": "Bābil",
    "type": "Governorate"
  },
  {
    "countryCode": "IQ",
    "code": "IQ-DA",
    "name": "Dahūk",
    "type": "Governorate"
  },
  {
    "countryCode": "IQ",
    "code": "IQ-DQ",
    "name": "Dhī Qār",
    "type": "Governorate"
  },
  {
    "countryCode": "IQ",
    "code": "IQ-DI",
    "name": "Diyālá",
    "type": "Governorate"
  },
  {
    "countryCode": "IQ",
    "code": "IQ-KR",
    "name": "Herêm-î Kurdistan",
    "type": "Region"
  },
  {
    "countryCode": "IQ",
    "code": "IQ-KA",
    "name": "Karbalā’",
    "type": "Governorate"
  },
  {
    "countryCode": "IQ",
    "code": "IQ-KI",
    "name": "Kirkūk",
    "type": "Governorate"
  },
  {
    "countryCode": "IQ",
    "code": "IQ-MA",
    "name": "Maysān",
    "type": "Governorate"
  },
  {
    "countryCode": "IQ",
    "code": "IQ-NI",
    "name": "Nīnawá",
    "type": "Governorate"
  },
  {
    "countryCode": "IQ",
    "code": "IQ-WA",
    "name": "Wāsiţ",
    "type": "Governorate"
  },
  {
    "countryCode": "IQ",
    "code": "IQ-SD",
    "name": "Şalāḩ ad Dīn",
    "type": "Governorate"
  },
  {
    "countryCode": "IR",
    "code": "IR-30",
    "name": "Alborz",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-24",
    "name": "Ardabīl",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-18",
    "name": "Būshehr",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-14",
    "name": "Chahār Maḩāl va Bakhtīārī",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-10",
    "name": "Eşfahān",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-07",
    "name": "Fārs",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-27",
    "name": "Golestān",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-01",
    "name": "Gīlān",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-13",
    "name": "Hamadān",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-22",
    "name": "Hormozgān",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-08",
    "name": "Kermān",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-05",
    "name": "Kermānshāh",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-29",
    "name": "Khorāsān-e Jonūbī",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-09",
    "name": "Khorāsān-e Raẕavī",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-28",
    "name": "Khorāsān-e Shomālī",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-06",
    "name": "Khūzestān",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-17",
    "name": "Kohgīlūyeh va Bowyer Aḩmad",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-12",
    "name": "Kordestān",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-15",
    "name": "Lorestān",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-00",
    "name": "Markazī",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-02",
    "name": "Māzandarān",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-26",
    "name": "Qazvīn",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-25",
    "name": "Qom",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-20",
    "name": "Semnān",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-11",
    "name": "Sīstān va Balūchestān",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-23",
    "name": "Tehrān",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-21",
    "name": "Yazd",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-19",
    "name": "Zanjān",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-04",
    "name": "Āz̄ārbāyjān-e Ghārbī",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-03",
    "name": "Āz̄ārbāyjān-e Shārqī",
    "type": "Province"
  },
  {
    "countryCode": "IR",
    "code": "IR-16",
    "name": "Īlām",
    "type": "Province"
  },
  {
    "countryCode": "IS",
    "code": "IS-AKN",
    "name": "Akraneskaupstaður",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-AKU",
    "name": "Akureyrarbær",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-7",
    "name": "Austurland",
    "type": "Region"
  },
  {
    "countryCode": "IS",
    "code": "IS-BLA",
    "name": "Bláskógabyggð",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-BOL",
    "name": "Bolungarvíkurkaupstaður",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-BOG",
    "name": "Borgarbyggð",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-DAB",
    "name": "Dalabyggð",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-DAV",
    "name": "Dalvíkurbyggð",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-EOM",
    "name": "Eyja- og Miklaholtshreppur",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-EYF",
    "name": "Eyjafjarðarsveit",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-FJL",
    "name": "Fjallabyggð",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-FJD",
    "name": "Fjarðabyggð",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-FLR",
    "name": "Fljótsdalshreppur",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-FLA",
    "name": "Flóahreppur",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-GAR",
    "name": "Garðabær",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-GRN",
    "name": "Grindavíkurbær",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-GRU",
    "name": "Grundarfjarðarbær",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-GOG",
    "name": "Grímsnes- og Grafningshreppur",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-GRY",
    "name": "Grýtubakkahreppur",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-HAF",
    "name": "Hafnarfjarðarkaupstaður",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-HRU",
    "name": "Hrunamannahreppur",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-HVA",
    "name": "Hvalfjarðarsveit",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-HVE",
    "name": "Hveragerðisbær",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-1",
    "name": "Höfuðborgarsvæði",
    "type": "Region"
  },
  {
    "countryCode": "IS",
    "code": "IS-HRG",
    "name": "Hörgársveit",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-HUG",
    "name": "Húnabyggð",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-HUV",
    "name": "Húnaþing vestra",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-KAL",
    "name": "Kaldrananeshreppur",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-KJO",
    "name": "Kjósarhreppur",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-KOP",
    "name": "Kópavogsbær",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-LAN",
    "name": "Langanesbyggð",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-MOS",
    "name": "Mosfellsbær",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-MUL",
    "name": "Múlaþing",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-MYR",
    "name": "Mýrdalshreppur",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-6",
    "name": "Norðurland eystra",
    "type": "Region"
  },
  {
    "countryCode": "IS",
    "code": "IS-5",
    "name": "Norðurland vestra",
    "type": "Region"
  },
  {
    "countryCode": "IS",
    "code": "IS-NOR",
    "name": "Norðurþing",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-RGE",
    "name": "Rangárþing eystra",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-RGY",
    "name": "Rangárþing ytra",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-RHH",
    "name": "Reykhólahreppur",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-RKN",
    "name": "Reykjanesbær",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-RKV",
    "name": "Reykjavíkurborg",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-SEL",
    "name": "Seltjarnarnesbær",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-SKF",
    "name": "Skaftárhreppur",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-SKG",
    "name": "Skagabyggð",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-SKR",
    "name": "Skagafjörður",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-SOG",
    "name": "Skeiða- og Gnúpverjahreppur",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-SKO",
    "name": "Skorradalshreppur",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-SNF",
    "name": "Snæfellsbær",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-STR",
    "name": "Strandabyggð",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-STY",
    "name": "Stykkishólmsbær",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-8",
    "name": "Suðurland",
    "type": "Region"
  },
  {
    "countryCode": "IS",
    "code": "IS-2",
    "name": "Suðurnes",
    "type": "Region"
  },
  {
    "countryCode": "IS",
    "code": "IS-SDN",
    "name": "Suðurnesjabær",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-SBT",
    "name": "Svalbarðsstrandarhreppur",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-SHF",
    "name": "Sveitarfélagið Hornafjörður",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-SSS",
    "name": "Sveitarfélagið Skagaströnd",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-SVG",
    "name": "Sveitarfélagið Vogar",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-SFA",
    "name": "Sveitarfélagið Árborg",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-SOL",
    "name": "Sveitarfélagið Ölfus",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-SDV",
    "name": "Súðavíkurhreppur",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-TJO",
    "name": "Tjörneshreppur",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-TAL",
    "name": "Tálknafjarðarhreppur",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-4",
    "name": "Vestfirðir",
    "type": "Region"
  },
  {
    "countryCode": "IS",
    "code": "IS-VEM",
    "name": "Vestmannaeyjabær",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-VER",
    "name": "Vesturbyggð",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-3",
    "name": "Vesturland",
    "type": "Region"
  },
  {
    "countryCode": "IS",
    "code": "IS-VOP",
    "name": "Vopnafjarðarhreppur",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-ARN",
    "name": "Árneshreppur",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-ASA",
    "name": "Ásahreppur",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-ISA",
    "name": "Ísafjarðarbær",
    "type": "Municipality"
  },
  {
    "countryCode": "IS",
    "code": "IS-THG",
    "name": "Þingeyjarsveit",
    "type": "Municipality"
  },
  {
    "countryCode": "IT",
    "code": "IT-65",
    "name": "Abruzzo",
    "type": "Region"
  },
  {
    "countryCode": "IT",
    "code": "IT-AG",
    "name": "Agrigento",
    "type": "Free municipal consortium"
  },
  {
    "countryCode": "IT",
    "code": "IT-AL",
    "name": "Alessandria",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-AN",
    "name": "Ancona",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-AR",
    "name": "Arezzo",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-AP",
    "name": "Ascoli Piceno",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-AT",
    "name": "Asti",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-AV",
    "name": "Avellino",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-BA",
    "name": "Bari",
    "type": "Metropolitan city"
  },
  {
    "countryCode": "IT",
    "code": "IT-BT",
    "name": "Barletta-Andria-Trani",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-77",
    "name": "Basilicata",
    "type": "Region"
  },
  {
    "countryCode": "IT",
    "code": "IT-BL",
    "name": "Belluno",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-BN",
    "name": "Benevento",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-BG",
    "name": "Bergamo",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-BI",
    "name": "Biella",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-BO",
    "name": "Bologna",
    "type": "Metropolitan city"
  },
  {
    "countryCode": "IT",
    "code": "IT-BZ",
    "name": "Bolzano",
    "type": "Autonomous province"
  },
  {
    "countryCode": "IT",
    "code": "IT-BS",
    "name": "Brescia",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-BR",
    "name": "Brindisi",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-CA",
    "name": "Cagliari",
    "type": "Metropolitan city"
  },
  {
    "countryCode": "IT",
    "code": "IT-78",
    "name": "Calabria",
    "type": "Region"
  },
  {
    "countryCode": "IT",
    "code": "IT-CL",
    "name": "Caltanissetta",
    "type": "Free municipal consortium"
  },
  {
    "countryCode": "IT",
    "code": "IT-72",
    "name": "Campania",
    "type": "Region"
  },
  {
    "countryCode": "IT",
    "code": "IT-CB",
    "name": "Campobasso",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-CE",
    "name": "Caserta",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-CT",
    "name": "Catania",
    "type": "Metropolitan city"
  },
  {
    "countryCode": "IT",
    "code": "IT-CZ",
    "name": "Catanzaro",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-CH",
    "name": "Chieti",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-CO",
    "name": "Como",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-CS",
    "name": "Cosenza",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-CR",
    "name": "Cremona",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-KR",
    "name": "Crotone",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-CN",
    "name": "Cuneo",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-45",
    "name": "Emilia-Romagna",
    "type": "Region"
  },
  {
    "countryCode": "IT",
    "code": "IT-EN",
    "name": "Enna",
    "type": "Free municipal consortium"
  },
  {
    "countryCode": "IT",
    "code": "IT-FM",
    "name": "Fermo",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-FE",
    "name": "Ferrara",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-FI",
    "name": "Firenze",
    "type": "Metropolitan city"
  },
  {
    "countryCode": "IT",
    "code": "IT-FG",
    "name": "Foggia",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-FC",
    "name": "Forlì-Cesena",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-36",
    "name": "Friuli Venezia Giulia",
    "type": "Autonomous region"
  },
  {
    "countryCode": "IT",
    "code": "IT-FR",
    "name": "Frosinone",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-GE",
    "name": "Genova",
    "type": "Metropolitan city"
  },
  {
    "countryCode": "IT",
    "code": "IT-GO",
    "name": "Gorizia",
    "type": "Decentralized regional entity"
  },
  {
    "countryCode": "IT",
    "code": "IT-GR",
    "name": "Grosseto",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-IM",
    "name": "Imperia",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-IS",
    "name": "Isernia",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-AQ",
    "name": "L'Aquila",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-SP",
    "name": "La Spezia",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-LT",
    "name": "Latina",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-62",
    "name": "Lazio",
    "type": "Region"
  },
  {
    "countryCode": "IT",
    "code": "IT-LE",
    "name": "Lecce",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-LC",
    "name": "Lecco",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-42",
    "name": "Liguria",
    "type": "Region"
  },
  {
    "countryCode": "IT",
    "code": "IT-LI",
    "name": "Livorno",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-LO",
    "name": "Lodi",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-25",
    "name": "Lombardia",
    "type": "Region"
  },
  {
    "countryCode": "IT",
    "code": "IT-LU",
    "name": "Lucca",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-MC",
    "name": "Macerata",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-MN",
    "name": "Mantova",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-57",
    "name": "Marche",
    "type": "Region"
  },
  {
    "countryCode": "IT",
    "code": "IT-MS",
    "name": "Massa-Carrara",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-MT",
    "name": "Matera",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-ME",
    "name": "Messina",
    "type": "Metropolitan city"
  },
  {
    "countryCode": "IT",
    "code": "IT-MI",
    "name": "Milano",
    "type": "Metropolitan city"
  },
  {
    "countryCode": "IT",
    "code": "IT-MO",
    "name": "Modena",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-67",
    "name": "Molise",
    "type": "Region"
  },
  {
    "countryCode": "IT",
    "code": "IT-MB",
    "name": "Monza e Brianza",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-NA",
    "name": "Napoli",
    "type": "Metropolitan city"
  },
  {
    "countryCode": "IT",
    "code": "IT-NO",
    "name": "Novara",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-NU",
    "name": "Nuoro",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-OR",
    "name": "Oristano",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-PD",
    "name": "Padova",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-PA",
    "name": "Palermo",
    "type": "Metropolitan city"
  },
  {
    "countryCode": "IT",
    "code": "IT-PR",
    "name": "Parma",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-PV",
    "name": "Pavia",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-PG",
    "name": "Perugia",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-PU",
    "name": "Pesaro e Urbino",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-PE",
    "name": "Pescara",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-PC",
    "name": "Piacenza",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-21",
    "name": "Piemonte",
    "type": "Region"
  },
  {
    "countryCode": "IT",
    "code": "IT-PI",
    "name": "Pisa",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-PT",
    "name": "Pistoia",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-PN",
    "name": "Pordenone",
    "type": "Decentralized regional entity"
  },
  {
    "countryCode": "IT",
    "code": "IT-PZ",
    "name": "Potenza",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-PO",
    "name": "Prato",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-75",
    "name": "Puglia",
    "type": "Region"
  },
  {
    "countryCode": "IT",
    "code": "IT-RG",
    "name": "Ragusa",
    "type": "Free municipal consortium"
  },
  {
    "countryCode": "IT",
    "code": "IT-RA",
    "name": "Ravenna",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-RC",
    "name": "Reggio Calabria",
    "type": "Metropolitan city"
  },
  {
    "countryCode": "IT",
    "code": "IT-RE",
    "name": "Reggio Emilia",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-RI",
    "name": "Rieti",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-RN",
    "name": "Rimini",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-RM",
    "name": "Roma",
    "type": "Metropolitan city"
  },
  {
    "countryCode": "IT",
    "code": "IT-RO",
    "name": "Rovigo",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-SA",
    "name": "Salerno",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-88",
    "name": "Sardegna",
    "type": "Autonomous region"
  },
  {
    "countryCode": "IT",
    "code": "IT-SS",
    "name": "Sassari",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-SV",
    "name": "Savona",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-82",
    "name": "Sicilia",
    "type": "Autonomous region"
  },
  {
    "countryCode": "IT",
    "code": "IT-SI",
    "name": "Siena",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-SR",
    "name": "Siracusa",
    "type": "Free municipal consortium"
  },
  {
    "countryCode": "IT",
    "code": "IT-SO",
    "name": "Sondrio",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-SU",
    "name": "Sud Sardegna",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-TA",
    "name": "Taranto",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-TE",
    "name": "Teramo",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-TR",
    "name": "Terni",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-TO",
    "name": "Torino",
    "type": "Metropolitan city"
  },
  {
    "countryCode": "IT",
    "code": "IT-52",
    "name": "Toscana",
    "type": "Region"
  },
  {
    "countryCode": "IT",
    "code": "IT-TP",
    "name": "Trapani",
    "type": "Free municipal consortium"
  },
  {
    "countryCode": "IT",
    "code": "IT-32",
    "name": "Trentino-Alto Adige",
    "type": "Autonomous region"
  },
  {
    "countryCode": "IT",
    "code": "IT-TN",
    "name": "Trento",
    "type": "Autonomous province"
  },
  {
    "countryCode": "IT",
    "code": "IT-TV",
    "name": "Treviso",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-TS",
    "name": "Trieste",
    "type": "Decentralized regional entity"
  },
  {
    "countryCode": "IT",
    "code": "IT-UD",
    "name": "Udine",
    "type": "Decentralized regional entity"
  },
  {
    "countryCode": "IT",
    "code": "IT-55",
    "name": "Umbria",
    "type": "Region"
  },
  {
    "countryCode": "IT",
    "code": "IT-23",
    "name": "Val d'Aoste",
    "type": "Autonomous region"
  },
  {
    "countryCode": "IT",
    "code": "IT-VA",
    "name": "Varese",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-34",
    "name": "Veneto",
    "type": "Region"
  },
  {
    "countryCode": "IT",
    "code": "IT-VE",
    "name": "Venezia",
    "type": "Metropolitan city"
  },
  {
    "countryCode": "IT",
    "code": "IT-VB",
    "name": "Verbano-Cusio-Ossola",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-VC",
    "name": "Vercelli",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-VR",
    "name": "Verona",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-VV",
    "name": "Vibo Valentia",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-VI",
    "name": "Vicenza",
    "type": "Province"
  },
  {
    "countryCode": "IT",
    "code": "IT-VT",
    "name": "Viterbo",
    "type": "Province"
  },
  {
    "countryCode": "JM",
    "code": "JM-13",
    "name": "Clarendon",
    "type": "Parish"
  },
  {
    "countryCode": "JM",
    "code": "JM-09",
    "name": "Hanover",
    "type": "Parish"
  },
  {
    "countryCode": "JM",
    "code": "JM-01",
    "name": "Kingston",
    "type": "Parish"
  },
  {
    "countryCode": "JM",
    "code": "JM-12",
    "name": "Manchester",
    "type": "Parish"
  },
  {
    "countryCode": "JM",
    "code": "JM-04",
    "name": "Portland",
    "type": "Parish"
  },
  {
    "countryCode": "JM",
    "code": "JM-02",
    "name": "Saint Andrew",
    "type": "Parish"
  },
  {
    "countryCode": "JM",
    "code": "JM-06",
    "name": "Saint Ann",
    "type": "Parish"
  },
  {
    "countryCode": "JM",
    "code": "JM-14",
    "name": "Saint Catherine",
    "type": "Parish"
  },
  {
    "countryCode": "JM",
    "code": "JM-11",
    "name": "Saint Elizabeth",
    "type": "Parish"
  },
  {
    "countryCode": "JM",
    "code": "JM-08",
    "name": "Saint James",
    "type": "Parish"
  },
  {
    "countryCode": "JM",
    "code": "JM-05",
    "name": "Saint Mary",
    "type": "Parish"
  },
  {
    "countryCode": "JM",
    "code": "JM-03",
    "name": "Saint Thomas",
    "type": "Parish"
  },
  {
    "countryCode": "JM",
    "code": "JM-07",
    "name": "Trelawny",
    "type": "Parish"
  },
  {
    "countryCode": "JM",
    "code": "JM-10",
    "name": "Westmoreland",
    "type": "Parish"
  },
  {
    "countryCode": "JO",
    "code": "JO-BA",
    "name": "Al Balqā’",
    "type": "Governorate"
  },
  {
    "countryCode": "JO",
    "code": "JO-KA",
    "name": "Al Karak",
    "type": "Governorate"
  },
  {
    "countryCode": "JO",
    "code": "JO-MA",
    "name": "Al Mafraq",
    "type": "Governorate"
  },
  {
    "countryCode": "JO",
    "code": "JO-AQ",
    "name": "Al ‘Aqabah",
    "type": "Governorate"
  },
  {
    "countryCode": "JO",
    "code": "JO-AM",
    "name": "Al ‘A̅şimah",
    "type": "Governorate"
  },
  {
    "countryCode": "JO",
    "code": "JO-AZ",
    "name": "Az Zarqā’",
    "type": "Governorate"
  },
  {
    "countryCode": "JO",
    "code": "JO-AT",
    "name": "Aţ Ţafīlah",
    "type": "Governorate"
  },
  {
    "countryCode": "JO",
    "code": "JO-IR",
    "name": "Irbid",
    "type": "Governorate"
  },
  {
    "countryCode": "JO",
    "code": "JO-JA",
    "name": "Jarash",
    "type": "Governorate"
  },
  {
    "countryCode": "JO",
    "code": "JO-MN",
    "name": "Ma‘ān",
    "type": "Governorate"
  },
  {
    "countryCode": "JO",
    "code": "JO-MD",
    "name": "Mādabā",
    "type": "Governorate"
  },
  {
    "countryCode": "JO",
    "code": "JO-AJ",
    "name": "‘Ajlūn",
    "type": "Governorate"
  },
  {
    "countryCode": "JP",
    "code": "JP-23",
    "name": "Aichi",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-05",
    "name": "Akita",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-02",
    "name": "Aomori",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-12",
    "name": "Chiba",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-38",
    "name": "Ehime",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-18",
    "name": "Fukui",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-40",
    "name": "Fukuoka",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-07",
    "name": "Fukushima",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-21",
    "name": "Gifu",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-10",
    "name": "Gunma",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-34",
    "name": "Hiroshima",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-01",
    "name": "Hokkaido",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-28",
    "name": "Hyogo",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-08",
    "name": "Ibaraki",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-17",
    "name": "Ishikawa",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-03",
    "name": "Iwate",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-37",
    "name": "Kagawa",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-46",
    "name": "Kagoshima",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-14",
    "name": "Kanagawa",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-39",
    "name": "Kochi",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-43",
    "name": "Kumamoto",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-26",
    "name": "Kyoto",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-24",
    "name": "Mie",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-04",
    "name": "Miyagi",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-45",
    "name": "Miyazaki",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-20",
    "name": "Nagano",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-42",
    "name": "Nagasaki",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-29",
    "name": "Nara",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-15",
    "name": "Niigata",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-44",
    "name": "Oita",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-33",
    "name": "Okayama",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-47",
    "name": "Okinawa",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-27",
    "name": "Osaka",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-41",
    "name": "Saga",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-11",
    "name": "Saitama",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-25",
    "name": "Shiga",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-32",
    "name": "Shimane",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-22",
    "name": "Shizuoka",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-09",
    "name": "Tochigi",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-36",
    "name": "Tokushima",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-13",
    "name": "Tokyo",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-31",
    "name": "Tottori",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-16",
    "name": "Toyama",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-30",
    "name": "Wakayama",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-06",
    "name": "Yamagata",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-35",
    "name": "Yamaguchi",
    "type": "Prefecture"
  },
  {
    "countryCode": "JP",
    "code": "JP-19",
    "name": "Yamanashi",
    "type": "Prefecture"
  },
  {
    "countryCode": "KE",
    "code": "KE-01",
    "name": "Baringo",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-02",
    "name": "Bomet",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-03",
    "name": "Bungoma",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-04",
    "name": "Busia",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-05",
    "name": "Elgeyo/Marakwet",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-06",
    "name": "Embu",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-07",
    "name": "Garissa",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-08",
    "name": "Homa Bay",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-09",
    "name": "Isiolo",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-10",
    "name": "Kajiado",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-11",
    "name": "Kakamega",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-12",
    "name": "Kericho",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-13",
    "name": "Kiambu",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-14",
    "name": "Kilifi",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-15",
    "name": "Kirinyaga",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-16",
    "name": "Kisii",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-17",
    "name": "Kisumu",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-18",
    "name": "Kitui",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-19",
    "name": "Kwale",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-20",
    "name": "Laikipia",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-21",
    "name": "Lamu",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-22",
    "name": "Machakos",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-23",
    "name": "Makueni",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-24",
    "name": "Mandera",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-25",
    "name": "Marsabit",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-26",
    "name": "Meru",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-27",
    "name": "Migori",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-28",
    "name": "Mombasa",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-29",
    "name": "Murang'a",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-30",
    "name": "Nairobi City",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-31",
    "name": "Nakuru",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-32",
    "name": "Nandi",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-33",
    "name": "Narok",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-34",
    "name": "Nyamira",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-35",
    "name": "Nyandarua",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-36",
    "name": "Nyeri",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-37",
    "name": "Samburu",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-38",
    "name": "Siaya",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-39",
    "name": "Taita/Taveta",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-40",
    "name": "Tana River",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-41",
    "name": "Tharaka-Nithi",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-42",
    "name": "Trans Nzoia",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-43",
    "name": "Turkana",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-44",
    "name": "Uasin Gishu",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-45",
    "name": "Vihiga",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-46",
    "name": "Wajir",
    "type": "County"
  },
  {
    "countryCode": "KE",
    "code": "KE-47",
    "name": "West Pokot",
    "type": "County"
  },
  {
    "countryCode": "KG",
    "code": "KG-B",
    "name": "Batken",
    "type": "Region"
  },
  {
    "countryCode": "KG",
    "code": "KG-GB",
    "name": "Bishkek Shaary",
    "type": "City"
  },
  {
    "countryCode": "KG",
    "code": "KG-C",
    "name": "Chuyskaya oblast'",
    "type": "Region"
  },
  {
    "countryCode": "KG",
    "code": "KG-J",
    "name": "Dzhalal-Abadskaya oblast'",
    "type": "Region"
  },
  {
    "countryCode": "KG",
    "code": "KG-GO",
    "name": "Gorod Osh",
    "type": "City"
  },
  {
    "countryCode": "KG",
    "code": "KG-Y",
    "name": "Issyk-Kul'skaja oblast'",
    "type": "Region"
  },
  {
    "countryCode": "KG",
    "code": "KG-N",
    "name": "Naryn",
    "type": "Region"
  },
  {
    "countryCode": "KG",
    "code": "KG-O",
    "name": "Osh",
    "type": "Region"
  },
  {
    "countryCode": "KG",
    "code": "KG-T",
    "name": "Talas",
    "type": "Region"
  },
  {
    "countryCode": "KH",
    "code": "KH-2",
    "name": "Baat Dambang",
    "type": "Province"
  },
  {
    "countryCode": "KH",
    "code": "KH-1",
    "name": "Banteay Mean Choăy",
    "type": "Province"
  },
  {
    "countryCode": "KH",
    "code": "KH-23",
    "name": "Kaeb",
    "type": "Province"
  },
  {
    "countryCode": "KH",
    "code": "KH-3",
    "name": "Kampong Chaam",
    "type": "Province"
  },
  {
    "countryCode": "KH",
    "code": "KH-4",
    "name": "Kampong Chhnang",
    "type": "Province"
  },
  {
    "countryCode": "KH",
    "code": "KH-5",
    "name": "Kampong Spueu",
    "type": "Province"
  },
  {
    "countryCode": "KH",
    "code": "KH-6",
    "name": "Kampong Thum",
    "type": "Province"
  },
  {
    "countryCode": "KH",
    "code": "KH-7",
    "name": "Kampot",
    "type": "Province"
  },
  {
    "countryCode": "KH",
    "code": "KH-8",
    "name": "Kandaal",
    "type": "Province"
  },
  {
    "countryCode": "KH",
    "code": "KH-9",
    "name": "Kaoh Kong",
    "type": "Province"
  },
  {
    "countryCode": "KH",
    "code": "KH-10",
    "name": "Kracheh",
    "type": "Province"
  },
  {
    "countryCode": "KH",
    "code": "KH-11",
    "name": "Mondol Kiri",
    "type": "Province"
  },
  {
    "countryCode": "KH",
    "code": "KH-22",
    "name": "Otdar Mean Chey",
    "type": "Province"
  },
  {
    "countryCode": "KH",
    "code": "KH-24",
    "name": "Pailin",
    "type": "Province"
  },
  {
    "countryCode": "KH",
    "code": "KH-12",
    "name": "Phnom Penh",
    "type": "Autonomous municipality"
  },
  {
    "countryCode": "KH",
    "code": "KH-15",
    "name": "Pousaat",
    "type": "Province"
  },
  {
    "countryCode": "KH",
    "code": "KH-18",
    "name": "Preah Sihanouk",
    "type": "Province"
  },
  {
    "countryCode": "KH",
    "code": "KH-13",
    "name": "Preah Vihear",
    "type": "Province"
  },
  {
    "countryCode": "KH",
    "code": "KH-14",
    "name": "Prey Veaeng",
    "type": "Province"
  },
  {
    "countryCode": "KH",
    "code": "KH-16",
    "name": "Rotanak Kiri",
    "type": "Province"
  },
  {
    "countryCode": "KH",
    "code": "KH-17",
    "name": "Siem Reab",
    "type": "Province"
  },
  {
    "countryCode": "KH",
    "code": "KH-19",
    "name": "Stoĕng Trêng",
    "type": "Province"
  },
  {
    "countryCode": "KH",
    "code": "KH-20",
    "name": "Svaay Rieng",
    "type": "Province"
  },
  {
    "countryCode": "KH",
    "code": "KH-21",
    "name": "Taakaev",
    "type": "Province"
  },
  {
    "countryCode": "KH",
    "code": "KH-25",
    "name": "Tbong Khmum",
    "type": "Province"
  },
  {
    "countryCode": "KI",
    "code": "KI-G",
    "name": "Gilbert Islands",
    "type": "Group of islands (20 inhabited islands)"
  },
  {
    "countryCode": "KI",
    "code": "KI-L",
    "name": "Line Islands",
    "type": "Group of islands (20 inhabited islands)"
  },
  {
    "countryCode": "KI",
    "code": "KI-P",
    "name": "Phoenix Islands",
    "type": "Group of islands (20 inhabited islands)"
  },
  {
    "countryCode": "KM",
    "code": "KM-A",
    "name": "Anjouan",
    "type": "Island"
  },
  {
    "countryCode": "KM",
    "code": "KM-G",
    "name": "Grande Comore",
    "type": "Island"
  },
  {
    "countryCode": "KM",
    "code": "KM-M",
    "name": "Mohéli",
    "type": "Island"
  },
  {
    "countryCode": "KN",
    "code": "KN-01",
    "name": "Christ Church Nichola Town",
    "type": "Parish"
  },
  {
    "countryCode": "KN",
    "code": "KN-N",
    "name": "Nevis",
    "type": "State"
  },
  {
    "countryCode": "KN",
    "code": "KN-02",
    "name": "Saint Anne Sandy Point",
    "type": "Parish"
  },
  {
    "countryCode": "KN",
    "code": "KN-03",
    "name": "Saint George Basseterre",
    "type": "Parish"
  },
  {
    "countryCode": "KN",
    "code": "KN-04",
    "name": "Saint George Gingerland",
    "type": "Parish"
  },
  {
    "countryCode": "KN",
    "code": "KN-05",
    "name": "Saint James Windward",
    "type": "Parish"
  },
  {
    "countryCode": "KN",
    "code": "KN-06",
    "name": "Saint John Capisterre",
    "type": "Parish"
  },
  {
    "countryCode": "KN",
    "code": "KN-07",
    "name": "Saint John Figtree",
    "type": "Parish"
  },
  {
    "countryCode": "KN",
    "code": "KN-K",
    "name": "Saint Kitts",
    "type": "State"
  },
  {
    "countryCode": "KN",
    "code": "KN-08",
    "name": "Saint Mary Cayon",
    "type": "Parish"
  },
  {
    "countryCode": "KN",
    "code": "KN-09",
    "name": "Saint Paul Capisterre",
    "type": "Parish"
  },
  {
    "countryCode": "KN",
    "code": "KN-10",
    "name": "Saint Paul Charlestown",
    "type": "Parish"
  },
  {
    "countryCode": "KN",
    "code": "KN-11",
    "name": "Saint Peter Basseterre",
    "type": "Parish"
  },
  {
    "countryCode": "KN",
    "code": "KN-12",
    "name": "Saint Thomas Lowland",
    "type": "Parish"
  },
  {
    "countryCode": "KN",
    "code": "KN-13",
    "name": "Saint Thomas Middle Island",
    "type": "Parish"
  },
  {
    "countryCode": "KN",
    "code": "KN-15",
    "name": "Trinity Palmetto Point",
    "type": "Parish"
  },
  {
    "countryCode": "KP",
    "code": "KP-04",
    "name": "Chagang-do",
    "type": "Province"
  },
  {
    "countryCode": "KP",
    "code": "KP-09",
    "name": "Hamgyǒng-bukto",
    "type": "Province"
  },
  {
    "countryCode": "KP",
    "code": "KP-08",
    "name": "Hamgyǒng-namdo",
    "type": "Province"
  },
  {
    "countryCode": "KP",
    "code": "KP-06",
    "name": "Hwanghae-bukto",
    "type": "Province"
  },
  {
    "countryCode": "KP",
    "code": "KP-05",
    "name": "Hwanghae-namdo",
    "type": "Province"
  },
  {
    "countryCode": "KP",
    "code": "KP-15",
    "name": "Kaeseong",
    "type": "Metropolitan city"
  },
  {
    "countryCode": "KP",
    "code": "KP-07",
    "name": "Kangweonto",
    "type": "Province"
  },
  {
    "countryCode": "KP",
    "code": "KP-14",
    "name": "Nampho",
    "type": "Metropolitan city"
  },
  {
    "countryCode": "KP",
    "code": "KP-03",
    "name": "P'yǒngan-bukto",
    "type": "Province"
  },
  {
    "countryCode": "KP",
    "code": "KP-02",
    "name": "P'yǒngan-namdo",
    "type": "Province"
  },
  {
    "countryCode": "KP",
    "code": "KP-01",
    "name": "P'yǒngyang",
    "type": "Capital city"
  },
  {
    "countryCode": "KP",
    "code": "KP-13",
    "name": "Raseon",
    "type": "Special city"
  },
  {
    "countryCode": "KP",
    "code": "KP-10",
    "name": "Ryanggang-do",
    "type": "Province"
  },
  {
    "countryCode": "KR",
    "code": "KR-26",
    "name": "Busan-gwangyeoksi",
    "type": "Metropolitan city"
  },
  {
    "countryCode": "KR",
    "code": "KR-43",
    "name": "Chungcheongbuk-do",
    "type": "Province"
  },
  {
    "countryCode": "KR",
    "code": "KR-44",
    "name": "Chungcheongnam-do",
    "type": "Province"
  },
  {
    "countryCode": "KR",
    "code": "KR-27",
    "name": "Daegu-gwangyeoksi",
    "type": "Metropolitan city"
  },
  {
    "countryCode": "KR",
    "code": "KR-30",
    "name": "Daejeon-gwangyeoksi",
    "type": "Metropolitan city"
  },
  {
    "countryCode": "KR",
    "code": "KR-42",
    "name": "Gangwon-teukbyeoljachido",
    "type": "Special self-governing province"
  },
  {
    "countryCode": "KR",
    "code": "KR-29",
    "name": "Gwangju-gwangyeoksi",
    "type": "Metropolitan city"
  },
  {
    "countryCode": "KR",
    "code": "KR-41",
    "name": "Gyeonggi-do",
    "type": "Province"
  },
  {
    "countryCode": "KR",
    "code": "KR-47",
    "name": "Gyeongsangbuk-do",
    "type": "Province"
  },
  {
    "countryCode": "KR",
    "code": "KR-48",
    "name": "Gyeongsangnam-do",
    "type": "Province"
  },
  {
    "countryCode": "KR",
    "code": "KR-28",
    "name": "Incheon-gwangyeoksi",
    "type": "Metropolitan city"
  },
  {
    "countryCode": "KR",
    "code": "KR-49",
    "name": "Jeju-teukbyeoljachido",
    "type": "Special self-governing province"
  },
  {
    "countryCode": "KR",
    "code": "KR-45",
    "name": "Jeollabuk-do",
    "type": "Province"
  },
  {
    "countryCode": "KR",
    "code": "KR-46",
    "name": "Jeollanam-do",
    "type": "Province"
  },
  {
    "countryCode": "KR",
    "code": "KR-50",
    "name": "Sejong",
    "type": "Special self-governing city"
  },
  {
    "countryCode": "KR",
    "code": "KR-11",
    "name": "Seoul-teukbyeolsi",
    "type": "Special city"
  },
  {
    "countryCode": "KR",
    "code": "KR-31",
    "name": "Ulsan-gwangyeoksi",
    "type": "Metropolitan city"
  },
  {
    "countryCode": "KW",
    "code": "KW-AH",
    "name": "Al Aḩmadī",
    "type": "Governorate"
  },
  {
    "countryCode": "KW",
    "code": "KW-FA",
    "name": "Al Farwānīyah",
    "type": "Governorate"
  },
  {
    "countryCode": "KW",
    "code": "KW-JA",
    "name": "Al Jahrā’",
    "type": "Governorate"
  },
  {
    "countryCode": "KW",
    "code": "KW-KU",
    "name": "Al ‘Āşimah",
    "type": "Governorate"
  },
  {
    "countryCode": "KW",
    "code": "KW-MU",
    "name": "Mubārak al Kabīr",
    "type": "Governorate"
  },
  {
    "countryCode": "KW",
    "code": "KW-HA",
    "name": "Ḩawallī",
    "type": "Governorate"
  },
  {
    "countryCode": "KZ",
    "code": "KZ-10",
    "name": "Abajskaja oblast’",
    "type": "Region"
  },
  {
    "countryCode": "KZ",
    "code": "KZ-11",
    "name": "Akmolinskaja oblast'",
    "type": "Region"
  },
  {
    "countryCode": "KZ",
    "code": "KZ-15",
    "name": "Aktjubinskaja oblast'",
    "type": "Region"
  },
  {
    "countryCode": "KZ",
    "code": "KZ-19",
    "name": "Almatinskaja oblast'",
    "type": "Region"
  },
  {
    "countryCode": "KZ",
    "code": "KZ-75",
    "name": "Almaty",
    "type": "City"
  },
  {
    "countryCode": "KZ",
    "code": "KZ-71",
    "name": "Astana",
    "type": "City"
  },
  {
    "countryCode": "KZ",
    "code": "KZ-23",
    "name": "Atyrauskaja oblast'",
    "type": "Region"
  },
  {
    "countryCode": "KZ",
    "code": "KZ-27",
    "name": "Batys Qazaqstan oblysy",
    "type": "Region"
  },
  {
    "countryCode": "KZ",
    "code": "KZ-35",
    "name": "Karagandinskaja oblast'",
    "type": "Region"
  },
  {
    "countryCode": "KZ",
    "code": "KZ-39",
    "name": "Kostanajskaja oblast'",
    "type": "Region"
  },
  {
    "countryCode": "KZ",
    "code": "KZ-43",
    "name": "Kyzylordinskaja oblast'",
    "type": "Region"
  },
  {
    "countryCode": "KZ",
    "code": "KZ-47",
    "name": "Mangghystaū oblysy",
    "type": "Region"
  },
  {
    "countryCode": "KZ",
    "code": "KZ-55",
    "name": "Pavlodar oblysy",
    "type": "Region"
  },
  {
    "countryCode": "KZ",
    "code": "KZ-59",
    "name": "Severo-Kazahstanskaja oblast'",
    "type": "Region"
  },
  {
    "countryCode": "KZ",
    "code": "KZ-63",
    "name": "Shyghys Qazaqstan oblysy",
    "type": "Region"
  },
  {
    "countryCode": "KZ",
    "code": "KZ-79",
    "name": "Shymkent",
    "type": "City"
  },
  {
    "countryCode": "KZ",
    "code": "KZ-61",
    "name": "Turkestankaya oblast'",
    "type": "Region"
  },
  {
    "countryCode": "KZ",
    "code": "KZ-62",
    "name": "Ulytauskaja oblast’",
    "type": "Region"
  },
  {
    "countryCode": "KZ",
    "code": "KZ-31",
    "name": "Zhambyl oblysy",
    "type": "Region"
  },
  {
    "countryCode": "KZ",
    "code": "KZ-33",
    "name": "Zhetisū oblysy",
    "type": "Region"
  },
  {
    "countryCode": "LA",
    "code": "LA-AT",
    "name": "Attapu",
    "type": "Province"
  },
  {
    "countryCode": "LA",
    "code": "LA-BK",
    "name": "Bokèo",
    "type": "Province"
  },
  {
    "countryCode": "LA",
    "code": "LA-BL",
    "name": "Bolikhamxai",
    "type": "Province"
  },
  {
    "countryCode": "LA",
    "code": "LA-CH",
    "name": "Champasak",
    "type": "Province"
  },
  {
    "countryCode": "LA",
    "code": "LA-HO",
    "name": "Houaphan",
    "type": "Province"
  },
  {
    "countryCode": "LA",
    "code": "LA-KH",
    "name": "Khammouan",
    "type": "Province"
  },
  {
    "countryCode": "LA",
    "code": "LA-LM",
    "name": "Louang Namtha",
    "type": "Province"
  },
  {
    "countryCode": "LA",
    "code": "LA-LP",
    "name": "Louangphabang",
    "type": "Province"
  },
  {
    "countryCode": "LA",
    "code": "LA-OU",
    "name": "Oudômxai",
    "type": "Province"
  },
  {
    "countryCode": "LA",
    "code": "LA-PH",
    "name": "Phôngsali",
    "type": "Province"
  },
  {
    "countryCode": "LA",
    "code": "LA-SL",
    "name": "Salavan",
    "type": "Province"
  },
  {
    "countryCode": "LA",
    "code": "LA-SV",
    "name": "Savannakhét",
    "type": "Province"
  },
  {
    "countryCode": "LA",
    "code": "LA-VI",
    "name": "Viangchan",
    "type": "Province"
  },
  {
    "countryCode": "LA",
    "code": "LA-VT",
    "name": "Viangchan",
    "type": "Prefecture"
  },
  {
    "countryCode": "LA",
    "code": "LA-XA",
    "name": "Xaignabouli",
    "type": "Province"
  },
  {
    "countryCode": "LA",
    "code": "LA-XS",
    "name": "Xaisômboun",
    "type": "Province"
  },
  {
    "countryCode": "LA",
    "code": "LA-XI",
    "name": "Xiangkhouang",
    "type": "Province"
  },
  {
    "countryCode": "LA",
    "code": "LA-XE",
    "name": "Xékong",
    "type": "Province"
  },
  {
    "countryCode": "LB",
    "code": "LB-AK",
    "name": "Aakkâr",
    "type": "Governorate"
  },
  {
    "countryCode": "LB",
    "code": "LB-BI",
    "name": "Al Biqā‘",
    "type": "Governorate"
  },
  {
    "countryCode": "LB",
    "code": "LB-JA",
    "name": "Al Janūb",
    "type": "Governorate"
  },
  {
    "countryCode": "LB",
    "code": "LB-NA",
    "name": "An Nabaţīyah",
    "type": "Governorate"
  },
  {
    "countryCode": "LB",
    "code": "LB-AS",
    "name": "Ash Shimāl",
    "type": "Governorate"
  },
  {
    "countryCode": "LB",
    "code": "LB-BH",
    "name": "Baalbek-Hermel",
    "type": "Governorate"
  },
  {
    "countryCode": "LB",
    "code": "LB-BA",
    "name": "Bayrūt",
    "type": "Governorate"
  },
  {
    "countryCode": "LB",
    "code": "LB-JL",
    "name": "Jabal Lubnān",
    "type": "Governorate"
  },
  {
    "countryCode": "LC",
    "code": "LC-01",
    "name": "Anse la Raye",
    "type": "District"
  },
  {
    "countryCode": "LC",
    "code": "LC-12",
    "name": "Canaries",
    "type": "District"
  },
  {
    "countryCode": "LC",
    "code": "LC-02",
    "name": "Castries",
    "type": "District"
  },
  {
    "countryCode": "LC",
    "code": "LC-03",
    "name": "Choiseul",
    "type": "District"
  },
  {
    "countryCode": "LC",
    "code": "LC-05",
    "name": "Dennery",
    "type": "District"
  },
  {
    "countryCode": "LC",
    "code": "LC-06",
    "name": "Gros Islet",
    "type": "District"
  },
  {
    "countryCode": "LC",
    "code": "LC-07",
    "name": "Laborie",
    "type": "District"
  },
  {
    "countryCode": "LC",
    "code": "LC-08",
    "name": "Micoud",
    "type": "District"
  },
  {
    "countryCode": "LC",
    "code": "LC-10",
    "name": "Soufrière",
    "type": "District"
  },
  {
    "countryCode": "LC",
    "code": "LC-11",
    "name": "Vieux Fort",
    "type": "District"
  },
  {
    "countryCode": "LI",
    "code": "LI-01",
    "name": "Balzers",
    "type": "Commune"
  },
  {
    "countryCode": "LI",
    "code": "LI-02",
    "name": "Eschen",
    "type": "Commune"
  },
  {
    "countryCode": "LI",
    "code": "LI-03",
    "name": "Gamprin",
    "type": "Commune"
  },
  {
    "countryCode": "LI",
    "code": "LI-04",
    "name": "Mauren",
    "type": "Commune"
  },
  {
    "countryCode": "LI",
    "code": "LI-05",
    "name": "Planken",
    "type": "Commune"
  },
  {
    "countryCode": "LI",
    "code": "LI-06",
    "name": "Ruggell",
    "type": "Commune"
  },
  {
    "countryCode": "LI",
    "code": "LI-07",
    "name": "Schaan",
    "type": "Commune"
  },
  {
    "countryCode": "LI",
    "code": "LI-08",
    "name": "Schellenberg",
    "type": "Commune"
  },
  {
    "countryCode": "LI",
    "code": "LI-09",
    "name": "Triesen",
    "type": "Commune"
  },
  {
    "countryCode": "LI",
    "code": "LI-10",
    "name": "Triesenberg",
    "type": "Commune"
  },
  {
    "countryCode": "LI",
    "code": "LI-11",
    "name": "Vaduz",
    "type": "Commune"
  },
  {
    "countryCode": "LK",
    "code": "LK-52",
    "name": "Ampara",
    "type": "District"
  },
  {
    "countryCode": "LK",
    "code": "LK-71",
    "name": "Anuradhapura",
    "type": "District"
  },
  {
    "countryCode": "LK",
    "code": "LK-81",
    "name": "Badulla",
    "type": "District"
  },
  {
    "countryCode": "LK",
    "code": "LK-51",
    "name": "Batticaloa",
    "type": "District"
  },
  {
    "countryCode": "LK",
    "code": "LK-2",
    "name": "Central Province",
    "type": "Province"
  },
  {
    "countryCode": "LK",
    "code": "LK-11",
    "name": "Colombo",
    "type": "District"
  },
  {
    "countryCode": "LK",
    "code": "LK-5",
    "name": "Eastern Province",
    "type": "Province"
  },
  {
    "countryCode": "LK",
    "code": "LK-31",
    "name": "Galle",
    "type": "District"
  },
  {
    "countryCode": "LK",
    "code": "LK-12",
    "name": "Gampaha",
    "type": "District"
  },
  {
    "countryCode": "LK",
    "code": "LK-33",
    "name": "Hambantota",
    "type": "District"
  },
  {
    "countryCode": "LK",
    "code": "LK-41",
    "name": "Jaffna",
    "type": "District"
  },
  {
    "countryCode": "LK",
    "code": "LK-13",
    "name": "Kalutara",
    "type": "District"
  },
  {
    "countryCode": "LK",
    "code": "LK-21",
    "name": "Kandy",
    "type": "District"
  },
  {
    "countryCode": "LK",
    "code": "LK-92",
    "name": "Kegalla",
    "type": "District"
  },
  {
    "countryCode": "LK",
    "code": "LK-42",
    "name": "Kilinochchi",
    "type": "District"
  },
  {
    "countryCode": "LK",
    "code": "LK-61",
    "name": "Kurunegala",
    "type": "District"
  },
  {
    "countryCode": "LK",
    "code": "LK-43",
    "name": "Mannar",
    "type": "District"
  },
  {
    "countryCode": "LK",
    "code": "LK-22",
    "name": "Matale",
    "type": "District"
  },
  {
    "countryCode": "LK",
    "code": "LK-32",
    "name": "Matara",
    "type": "District"
  },
  {
    "countryCode": "LK",
    "code": "LK-82",
    "name": "Monaragala",
    "type": "District"
  },
  {
    "countryCode": "LK",
    "code": "LK-45",
    "name": "Mullaittivu",
    "type": "District"
  },
  {
    "countryCode": "LK",
    "code": "LK-7",
    "name": "North Central Province",
    "type": "Province"
  },
  {
    "countryCode": "LK",
    "code": "LK-6",
    "name": "North Western Province",
    "type": "Province"
  },
  {
    "countryCode": "LK",
    "code": "LK-4",
    "name": "Northern Province",
    "type": "Province"
  },
  {
    "countryCode": "LK",
    "code": "LK-23",
    "name": "Nuwara Eliya",
    "type": "District"
  },
  {
    "countryCode": "LK",
    "code": "LK-72",
    "name": "Polonnaruwa",
    "type": "District"
  },
  {
    "countryCode": "LK",
    "code": "LK-62",
    "name": "Puttalam",
    "type": "District"
  },
  {
    "countryCode": "LK",
    "code": "LK-91",
    "name": "Ratnapura",
    "type": "District"
  },
  {
    "countryCode": "LK",
    "code": "LK-9",
    "name": "Sabaragamuwa Province",
    "type": "Province"
  },
  {
    "countryCode": "LK",
    "code": "LK-3",
    "name": "Southern Province",
    "type": "Province"
  },
  {
    "countryCode": "LK",
    "code": "LK-53",
    "name": "Trincomalee",
    "type": "District"
  },
  {
    "countryCode": "LK",
    "code": "LK-8",
    "name": "Uva Province",
    "type": "Province"
  },
  {
    "countryCode": "LK",
    "code": "LK-44",
    "name": "Vavuniya",
    "type": "District"
  },
  {
    "countryCode": "LK",
    "code": "LK-1",
    "name": "Western Province",
    "type": "Province"
  },
  {
    "countryCode": "LR",
    "code": "LR-BM",
    "name": "Bomi",
    "type": "County"
  },
  {
    "countryCode": "LR",
    "code": "LR-BG",
    "name": "Bong",
    "type": "County"
  },
  {
    "countryCode": "LR",
    "code": "LR-GP",
    "name": "Gbarpolu",
    "type": "County"
  },
  {
    "countryCode": "LR",
    "code": "LR-GB",
    "name": "Grand Bassa",
    "type": "County"
  },
  {
    "countryCode": "LR",
    "code": "LR-CM",
    "name": "Grand Cape Mount",
    "type": "County"
  },
  {
    "countryCode": "LR",
    "code": "LR-GG",
    "name": "Grand Gedeh",
    "type": "County"
  },
  {
    "countryCode": "LR",
    "code": "LR-GK",
    "name": "Grand Kru",
    "type": "County"
  },
  {
    "countryCode": "LR",
    "code": "LR-LO",
    "name": "Lofa",
    "type": "County"
  },
  {
    "countryCode": "LR",
    "code": "LR-MG",
    "name": "Margibi",
    "type": "County"
  },
  {
    "countryCode": "LR",
    "code": "LR-MY",
    "name": "Maryland",
    "type": "County"
  },
  {
    "countryCode": "LR",
    "code": "LR-MO",
    "name": "Montserrado",
    "type": "County"
  },
  {
    "countryCode": "LR",
    "code": "LR-NI",
    "name": "Nimba",
    "type": "County"
  },
  {
    "countryCode": "LR",
    "code": "LR-RI",
    "name": "River Cess",
    "type": "County"
  },
  {
    "countryCode": "LR",
    "code": "LR-RG",
    "name": "River Gee",
    "type": "County"
  },
  {
    "countryCode": "LR",
    "code": "LR-SI",
    "name": "Sinoe",
    "type": "County"
  },
  {
    "countryCode": "LS",
    "code": "LS-D",
    "name": "Berea",
    "type": "District"
  },
  {
    "countryCode": "LS",
    "code": "LS-B",
    "name": "Botha-Bothe",
    "type": "District"
  },
  {
    "countryCode": "LS",
    "code": "LS-C",
    "name": "Leribe",
    "type": "District"
  },
  {
    "countryCode": "LS",
    "code": "LS-E",
    "name": "Mafeteng",
    "type": "District"
  },
  {
    "countryCode": "LS",
    "code": "LS-A",
    "name": "Maseru",
    "type": "District"
  },
  {
    "countryCode": "LS",
    "code": "LS-F",
    "name": "Mohale's Hoek",
    "type": "District"
  },
  {
    "countryCode": "LS",
    "code": "LS-J",
    "name": "Mokhotlong",
    "type": "District"
  },
  {
    "countryCode": "LS",
    "code": "LS-H",
    "name": "Qacha's Nek",
    "type": "District"
  },
  {
    "countryCode": "LS",
    "code": "LS-G",
    "name": "Quthing",
    "type": "District"
  },
  {
    "countryCode": "LS",
    "code": "LS-K",
    "name": "Thaba-Tseka",
    "type": "District"
  },
  {
    "countryCode": "LT",
    "code": "LT-01",
    "name": "Akmenė",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-AL",
    "name": "Alytaus apskritis",
    "type": "County"
  },
  {
    "countryCode": "LT",
    "code": "LT-02",
    "name": "Alytaus miestas",
    "type": "City municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-03",
    "name": "Alytus",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-04",
    "name": "Anykščiai",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-05",
    "name": "Birštonas",
    "type": "Municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-06",
    "name": "Biržai",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-07",
    "name": "Druskininkai",
    "type": "Municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-08",
    "name": "Elektrėnai",
    "type": "Municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-09",
    "name": "Ignalina",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-10",
    "name": "Jonava",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-11",
    "name": "Joniškis",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-12",
    "name": "Jurbarkas",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-13",
    "name": "Kaišiadorys",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-14",
    "name": "Kalvarija",
    "type": "Municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-16",
    "name": "Kaunas",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-KU",
    "name": "Kauno apskritis",
    "type": "County"
  },
  {
    "countryCode": "LT",
    "code": "LT-15",
    "name": "Kauno miestas",
    "type": "City municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-17",
    "name": "Kazlų Rūdos",
    "type": "Municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-19",
    "name": "Kelmė",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-21",
    "name": "Klaipėda",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-KL",
    "name": "Klaipėdos apskritis",
    "type": "County"
  },
  {
    "countryCode": "LT",
    "code": "LT-20",
    "name": "Klaipėdos miestas",
    "type": "City municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-22",
    "name": "Kretinga",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-23",
    "name": "Kupiškis",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-18",
    "name": "Kėdainiai",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-24",
    "name": "Lazdijai",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-25",
    "name": "Marijampolė",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-MR",
    "name": "Marijampolės apskritis",
    "type": "County"
  },
  {
    "countryCode": "LT",
    "code": "LT-26",
    "name": "Mažeikiai",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-27",
    "name": "Molėtai",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-28",
    "name": "Neringa",
    "type": "Municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-29",
    "name": "Pagėgiai",
    "type": "Municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-30",
    "name": "Pakruojis",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-31",
    "name": "Palangos miestas",
    "type": "City municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-PN",
    "name": "Panevėžio apskritis",
    "type": "County"
  },
  {
    "countryCode": "LT",
    "code": "LT-32",
    "name": "Panevėžio miestas",
    "type": "City municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-33",
    "name": "Panevėžys",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-34",
    "name": "Pasvalys",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-35",
    "name": "Plungė",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-36",
    "name": "Prienai",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-37",
    "name": "Radviliškis",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-38",
    "name": "Raseiniai",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-39",
    "name": "Rietavas",
    "type": "Municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-40",
    "name": "Rokiškis",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-48",
    "name": "Skuodas",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-50",
    "name": "Tauragė",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-TA",
    "name": "Tauragės apskritis",
    "type": "County"
  },
  {
    "countryCode": "LT",
    "code": "LT-51",
    "name": "Telšiai",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-TE",
    "name": "Telšių apskritis",
    "type": "County"
  },
  {
    "countryCode": "LT",
    "code": "LT-52",
    "name": "Trakai",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-53",
    "name": "Ukmergė",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-54",
    "name": "Utena",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-UT",
    "name": "Utenos apskritis",
    "type": "County"
  },
  {
    "countryCode": "LT",
    "code": "LT-55",
    "name": "Varėna",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-56",
    "name": "Vilkaviškis",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-VL",
    "name": "Vilniaus apskritis",
    "type": "County"
  },
  {
    "countryCode": "LT",
    "code": "LT-57",
    "name": "Vilniaus miestas",
    "type": "City municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-58",
    "name": "Vilnius",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-59",
    "name": "Visaginas",
    "type": "Municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-60",
    "name": "Zarasai",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-41",
    "name": "Šakiai",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-42",
    "name": "Šalčininkai",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-44",
    "name": "Šiauliai",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-SA",
    "name": "Šiaulių apskritis",
    "type": "County"
  },
  {
    "countryCode": "LT",
    "code": "LT-43",
    "name": "Šiaulių miestas",
    "type": "City municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-45",
    "name": "Šilalė",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-46",
    "name": "Šilutė",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-47",
    "name": "Širvintos",
    "type": "District municipality"
  },
  {
    "countryCode": "LT",
    "code": "LT-49",
    "name": "Švenčionys",
    "type": "District municipality"
  },
  {
    "countryCode": "LU",
    "code": "LU-CA",
    "name": "Capellen",
    "type": "Canton"
  },
  {
    "countryCode": "LU",
    "code": "LU-CL",
    "name": "Clervaux",
    "type": "Canton"
  },
  {
    "countryCode": "LU",
    "code": "LU-DI",
    "name": "Diekirch",
    "type": "Canton"
  },
  {
    "countryCode": "LU",
    "code": "LU-EC",
    "name": "Echternach",
    "type": "Canton"
  },
  {
    "countryCode": "LU",
    "code": "LU-ES",
    "name": "Esch-sur-Alzette",
    "type": "Canton"
  },
  {
    "countryCode": "LU",
    "code": "LU-GR",
    "name": "Grevenmacher",
    "type": "Canton"
  },
  {
    "countryCode": "LU",
    "code": "LU-LU",
    "name": "Luxembourg",
    "type": "Canton"
  },
  {
    "countryCode": "LU",
    "code": "LU-ME",
    "name": "Mersch",
    "type": "Canton"
  },
  {
    "countryCode": "LU",
    "code": "LU-RD",
    "name": "Redange",
    "type": "Canton"
  },
  {
    "countryCode": "LU",
    "code": "LU-RM",
    "name": "Remich",
    "type": "Canton"
  },
  {
    "countryCode": "LU",
    "code": "LU-VD",
    "name": "Vianden",
    "type": "Canton"
  },
  {
    "countryCode": "LU",
    "code": "LU-WI",
    "name": "Wiltz",
    "type": "Canton"
  },
  {
    "countryCode": "LV",
    "code": "LV-002",
    "name": "Aizkraukles novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-007",
    "name": "Alūksnes novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-111",
    "name": "Augšdaugavas novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-015",
    "name": "Balvu novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-016",
    "name": "Bauskas novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-022",
    "name": "Cēsu novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-DGV",
    "name": "Daugavpils",
    "type": "State city"
  },
  {
    "countryCode": "LV",
    "code": "LV-112",
    "name": "Dienvidkurzemes Novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-026",
    "name": "Dobeles novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-033",
    "name": "Gulbenes novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-JEL",
    "name": "Jelgava",
    "type": "State city"
  },
  {
    "countryCode": "LV",
    "code": "LV-041",
    "name": "Jelgavas novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-042",
    "name": "Jēkabpils novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-JUR",
    "name": "Jūrmala",
    "type": "State city"
  },
  {
    "countryCode": "LV",
    "code": "LV-047",
    "name": "Krāslavas novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-050",
    "name": "Kuldīgas novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-LPX",
    "name": "Liepāja",
    "type": "State city"
  },
  {
    "countryCode": "LV",
    "code": "LV-054",
    "name": "Limbažu novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-058",
    "name": "Ludzas novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-056",
    "name": "Līvānu novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-059",
    "name": "Madonas novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-062",
    "name": "Mārupes novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-067",
    "name": "Ogres novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-068",
    "name": "Olaines novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-073",
    "name": "Preiļu novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-080",
    "name": "Ropažu novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-REZ",
    "name": "Rēzekne",
    "type": "State city"
  },
  {
    "countryCode": "LV",
    "code": "LV-077",
    "name": "Rēzeknes novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-RIX",
    "name": "Rīga",
    "type": "State city"
  },
  {
    "countryCode": "LV",
    "code": "LV-087",
    "name": "Salaspils novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-088",
    "name": "Saldus novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-089",
    "name": "Saulkrastu novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-091",
    "name": "Siguldas novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-094",
    "name": "Smiltenes novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-097",
    "name": "Talsu novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-099",
    "name": "Tukuma novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-101",
    "name": "Valkas novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-113",
    "name": "Valmieras Novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-102",
    "name": "Varakļānu novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-VEN",
    "name": "Ventspils",
    "type": "State city"
  },
  {
    "countryCode": "LV",
    "code": "LV-106",
    "name": "Ventspils novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-011",
    "name": "Ādažu novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LV",
    "code": "LV-052",
    "name": "Ķekavas novads",
    "type": "Municipality"
  },
  {
    "countryCode": "LY",
    "code": "LY-BU",
    "name": "Al Buţnān",
    "type": "Popularate"
  },
  {
    "countryCode": "LY",
    "code": "LY-JA",
    "name": "Al Jabal al Akhḑar",
    "type": "Popularate"
  },
  {
    "countryCode": "LY",
    "code": "LY-JG",
    "name": "Al Jabal al Gharbī",
    "type": "Popularate"
  },
  {
    "countryCode": "LY",
    "code": "LY-JI",
    "name": "Al Jafārah",
    "type": "Popularate"
  },
  {
    "countryCode": "LY",
    "code": "LY-JU",
    "name": "Al Jufrah",
    "type": "Popularate"
  },
  {
    "countryCode": "LY",
    "code": "LY-KF",
    "name": "Al Kufrah",
    "type": "Popularate"
  },
  {
    "countryCode": "LY",
    "code": "LY-MJ",
    "name": "Al Marj",
    "type": "Popularate"
  },
  {
    "countryCode": "LY",
    "code": "LY-MB",
    "name": "Al Marqab",
    "type": "Popularate"
  },
  {
    "countryCode": "LY",
    "code": "LY-WA",
    "name": "Al Wāḩāt",
    "type": "Popularate"
  },
  {
    "countryCode": "LY",
    "code": "LY-NQ",
    "name": "An Nuqāţ al Khams",
    "type": "Popularate"
  },
  {
    "countryCode": "LY",
    "code": "LY-ZA",
    "name": "Az Zāwiyah",
    "type": "Popularate"
  },
  {
    "countryCode": "LY",
    "code": "LY-BA",
    "name": "Banghāzī",
    "type": "Popularate"
  },
  {
    "countryCode": "LY",
    "code": "LY-DR",
    "name": "Darnah",
    "type": "Popularate"
  },
  {
    "countryCode": "LY",
    "code": "LY-GT",
    "name": "Ghāt",
    "type": "Popularate"
  },
  {
    "countryCode": "LY",
    "code": "LY-MI",
    "name": "Mişrātah",
    "type": "Popularate"
  },
  {
    "countryCode": "LY",
    "code": "LY-MQ",
    "name": "Murzuq",
    "type": "Popularate"
  },
  {
    "countryCode": "LY",
    "code": "LY-NL",
    "name": "Nālūt",
    "type": "Popularate"
  },
  {
    "countryCode": "LY",
    "code": "LY-SB",
    "name": "Sabhā",
    "type": "Popularate"
  },
  {
    "countryCode": "LY",
    "code": "LY-SR",
    "name": "Surt",
    "type": "Popularate"
  },
  {
    "countryCode": "LY",
    "code": "LY-WD",
    "name": "Wādī al Ḩayāt",
    "type": "Popularate"
  },
  {
    "countryCode": "LY",
    "code": "LY-WS",
    "name": "Wādī ash Shāţi’",
    "type": "Popularate"
  },
  {
    "countryCode": "LY",
    "code": "LY-TB",
    "name": "Ţarābulus",
    "type": "Popularate"
  },
  {
    "countryCode": "MA",
    "code": "MA-AGD",
    "name": "Agadir-Ida-Ou-Tanane",
    "type": "Prefecture"
  },
  {
    "countryCode": "MA",
    "code": "MA-HAO",
    "name": "Al Haouz",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-HOC",
    "name": "Al Hoceïma",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-AOU",
    "name": "Aousserd (EH)",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-ASZ",
    "name": "Assa-Zag (EH-partial)",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-AZI",
    "name": "Azilal",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-BES",
    "name": "Benslimane",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-BER",
    "name": "Berkane",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-BRR",
    "name": "Berrechid",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-BOD",
    "name": "Boujdour (EH)",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-BOM",
    "name": "Boulemane",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-BEM",
    "name": "Béni Mellal",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-05",
    "name": "Béni Mellal-Khénifra",
    "type": "Region"
  },
  {
    "countryCode": "MA",
    "code": "MA-CAS",
    "name": "Casablanca",
    "type": "Prefecture"
  },
  {
    "countryCode": "MA",
    "code": "MA-06",
    "name": "Casablanca-Settat",
    "type": "Region"
  },
  {
    "countryCode": "MA",
    "code": "MA-CHE",
    "name": "Chefchaouen",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-CHI",
    "name": "Chichaoua",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-CHT",
    "name": "Chtouka-Ait Baha",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-12",
    "name": "Dakhla-Oued Ed-Dahab (EH)",
    "type": "Region"
  },
  {
    "countryCode": "MA",
    "code": "MA-DRI",
    "name": "Driouch",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-08",
    "name": "Drâa-Tafilalet",
    "type": "Region"
  },
  {
    "countryCode": "MA",
    "code": "MA-HAJ",
    "name": "El Hajeb",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-JDI",
    "name": "El Jadida",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-KES",
    "name": "El Kelâa des Sraghna",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-ERR",
    "name": "Errachidia",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-ESM",
    "name": "Es-Semara (EH-partial)",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-ESI",
    "name": "Essaouira",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-FAH",
    "name": "Fahs-Anjra",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-FIG",
    "name": "Figuig",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-FQH",
    "name": "Fquih Ben Salah",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-FES",
    "name": "Fès",
    "type": "Prefecture"
  },
  {
    "countryCode": "MA",
    "code": "MA-03",
    "name": "Fès-Meknès",
    "type": "Region"
  },
  {
    "countryCode": "MA",
    "code": "MA-GUE",
    "name": "Guelmim",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-10",
    "name": "Guelmim-Oued Noun (EH-partial)",
    "type": "Region"
  },
  {
    "countryCode": "MA",
    "code": "MA-GUF",
    "name": "Guercif",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-IFR",
    "name": "Ifrane",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-INE",
    "name": "Inezgane-Ait Melloul",
    "type": "Prefecture"
  },
  {
    "countryCode": "MA",
    "code": "MA-JRA",
    "name": "Jerada",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-KHO",
    "name": "Khouribga",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-KHE",
    "name": "Khémisset",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-KHN",
    "name": "Khénifra",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-KEN",
    "name": "Kénitra",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-02",
    "name": "L'Oriental",
    "type": "Region"
  },
  {
    "countryCode": "MA",
    "code": "MA-LAR",
    "name": "Larache",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-LAA",
    "name": "Laâyoune (EH)",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-11",
    "name": "Laâyoune-Sakia El Hamra (EH-partial)",
    "type": "Region"
  },
  {
    "countryCode": "MA",
    "code": "MA-MAR",
    "name": "Marrakech",
    "type": "Prefecture"
  },
  {
    "countryCode": "MA",
    "code": "MA-07",
    "name": "Marrakech-Safi",
    "type": "Region"
  },
  {
    "countryCode": "MA",
    "code": "MA-MEK",
    "name": "Meknès",
    "type": "Prefecture"
  },
  {
    "countryCode": "MA",
    "code": "MA-MID",
    "name": "Midelt",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-MOH",
    "name": "Mohammadia",
    "type": "Prefecture"
  },
  {
    "countryCode": "MA",
    "code": "MA-MOU",
    "name": "Moulay Yacoub",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-MED",
    "name": "Médiouna",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-MDF",
    "name": "M’diq-Fnideq",
    "type": "Prefecture"
  },
  {
    "countryCode": "MA",
    "code": "MA-NAD",
    "name": "Nador",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-NOU",
    "name": "Nouaceur",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-OUA",
    "name": "Ouarzazate",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-OUD",
    "name": "Oued Ed-Dahab (EH)",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-OUZ",
    "name": "Ouezzane",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-OUJ",
    "name": "Oujda-Angad",
    "type": "Prefecture"
  },
  {
    "countryCode": "MA",
    "code": "MA-RAB",
    "name": "Rabat",
    "type": "Prefecture"
  },
  {
    "countryCode": "MA",
    "code": "MA-04",
    "name": "Rabat-Salé-Kénitra",
    "type": "Region"
  },
  {
    "countryCode": "MA",
    "code": "MA-REH",
    "name": "Rehamna",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-SAF",
    "name": "Safi",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-SAL",
    "name": "Salé",
    "type": "Prefecture"
  },
  {
    "countryCode": "MA",
    "code": "MA-SEF",
    "name": "Sefrou",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-SET",
    "name": "Settat",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-SIB",
    "name": "Sidi Bennour",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-SIF",
    "name": "Sidi Ifni",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-SIK",
    "name": "Sidi Kacem",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-SIL",
    "name": "Sidi Slimane",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-SKH",
    "name": "Skhirate-Témara",
    "type": "Prefecture"
  },
  {
    "countryCode": "MA",
    "code": "MA-09",
    "name": "Souss-Massa",
    "type": "Region"
  },
  {
    "countryCode": "MA",
    "code": "MA-TNT",
    "name": "Tan-Tan (EH-partial)",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-TNG",
    "name": "Tanger-Assilah",
    "type": "Prefecture"
  },
  {
    "countryCode": "MA",
    "code": "MA-01",
    "name": "Tanger-Tétouan-Al Hoceïma",
    "type": "Region"
  },
  {
    "countryCode": "MA",
    "code": "MA-TAO",
    "name": "Taounate",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-TAI",
    "name": "Taourirt",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-TAF",
    "name": "Tarfaya (EH-partial)",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-TAR",
    "name": "Taroudannt",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-TAT",
    "name": "Tata",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-TAZ",
    "name": "Taza",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-TIN",
    "name": "Tinghir",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-TIZ",
    "name": "Tiznit",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-TET",
    "name": "Tétouan",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-YUS",
    "name": "Youssoufia",
    "type": "Province"
  },
  {
    "countryCode": "MA",
    "code": "MA-ZAG",
    "name": "Zagora",
    "type": "Province"
  },
  {
    "countryCode": "MC",
    "code": "MC-FO",
    "name": "Fontvieille",
    "type": "Quarter"
  },
  {
    "countryCode": "MC",
    "code": "MC-JE",
    "name": "Jardin Exotique",
    "type": "Quarter"
  },
  {
    "countryCode": "MC",
    "code": "MC-CL",
    "name": "La Colle",
    "type": "Quarter"
  },
  {
    "countryCode": "MC",
    "code": "MC-CO",
    "name": "La Condamine",
    "type": "Quarter"
  },
  {
    "countryCode": "MC",
    "code": "MC-GA",
    "name": "La Gare",
    "type": "Quarter"
  },
  {
    "countryCode": "MC",
    "code": "MC-SO",
    "name": "La Source",
    "type": "Quarter"
  },
  {
    "countryCode": "MC",
    "code": "MC-LA",
    "name": "Larvotto",
    "type": "Quarter"
  },
  {
    "countryCode": "MC",
    "code": "MC-MA",
    "name": "Malbousquet",
    "type": "Quarter"
  },
  {
    "countryCode": "MC",
    "code": "MC-MO",
    "name": "Monaco-Ville",
    "type": "Quarter"
  },
  {
    "countryCode": "MC",
    "code": "MC-MG",
    "name": "Moneghetti",
    "type": "Quarter"
  },
  {
    "countryCode": "MC",
    "code": "MC-MC",
    "name": "Monte-Carlo",
    "type": "Quarter"
  },
  {
    "countryCode": "MC",
    "code": "MC-MU",
    "name": "Moulins",
    "type": "Quarter"
  },
  {
    "countryCode": "MC",
    "code": "MC-PH",
    "name": "Port-Hercule",
    "type": "Quarter"
  },
  {
    "countryCode": "MC",
    "code": "MC-SR",
    "name": "Saint-Roman",
    "type": "Quarter"
  },
  {
    "countryCode": "MC",
    "code": "MC-SD",
    "name": "Sainte-Dévote",
    "type": "Quarter"
  },
  {
    "countryCode": "MC",
    "code": "MC-SP",
    "name": "Spélugues",
    "type": "Quarter"
  },
  {
    "countryCode": "MC",
    "code": "MC-VR",
    "name": "Vallon de la Rousse",
    "type": "Quarter"
  },
  {
    "countryCode": "MD",
    "code": "MD-AN",
    "name": "Anenii Noi",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-BS",
    "name": "Basarabeasca",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-BD",
    "name": "Bender [Tighina]",
    "type": "City"
  },
  {
    "countryCode": "MD",
    "code": "MD-BR",
    "name": "Briceni",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-BA",
    "name": "Bălți",
    "type": "City"
  },
  {
    "countryCode": "MD",
    "code": "MD-CA",
    "name": "Cahul",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-CT",
    "name": "Cantemir",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-CU",
    "name": "Chișinău",
    "type": "City"
  },
  {
    "countryCode": "MD",
    "code": "MD-CM",
    "name": "Cimișlia",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-CR",
    "name": "Criuleni",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-CL",
    "name": "Călărași",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-CS",
    "name": "Căușeni",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-DO",
    "name": "Dondușeni",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-DR",
    "name": "Drochia",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-DU",
    "name": "Dubăsari",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-ED",
    "name": "Edineț",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-FL",
    "name": "Florești",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-FA",
    "name": "Fălești",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-GL",
    "name": "Glodeni",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-GA",
    "name": "Găgăuzia, Unitatea teritorială autonomă (UTAG)",
    "type": "Autonomous territorial unit"
  },
  {
    "countryCode": "MD",
    "code": "MD-HI",
    "name": "Hîncești",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-IA",
    "name": "Ialoveni",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-LE",
    "name": "Leova",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-NI",
    "name": "Nisporeni",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-OC",
    "name": "Ocnița",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-OR",
    "name": "Orhei",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-RE",
    "name": "Rezina",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-RI",
    "name": "Rîșcani",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-SO",
    "name": "Soroca",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-ST",
    "name": "Strășeni",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-SN",
    "name": "Stînga Nistrului, unitatea teritorială din",
    "type": "Territorial unit"
  },
  {
    "countryCode": "MD",
    "code": "MD-SI",
    "name": "Sîngerei",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-TA",
    "name": "Taraclia",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-TE",
    "name": "Telenești",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-UN",
    "name": "Ungheni",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-SD",
    "name": "Șoldănești",
    "type": "District"
  },
  {
    "countryCode": "MD",
    "code": "MD-SV",
    "name": "Ștefan Vodă",
    "type": "District"
  },
  {
    "countryCode": "ME",
    "code": "ME-01",
    "name": "Andrijevica",
    "type": "Municipality"
  },
  {
    "countryCode": "ME",
    "code": "ME-02",
    "name": "Bar",
    "type": "Municipality"
  },
  {
    "countryCode": "ME",
    "code": "ME-03",
    "name": "Berane",
    "type": "Municipality"
  },
  {
    "countryCode": "ME",
    "code": "ME-04",
    "name": "Bijelo Polje",
    "type": "Municipality"
  },
  {
    "countryCode": "ME",
    "code": "ME-05",
    "name": "Budva",
    "type": "Municipality"
  },
  {
    "countryCode": "ME",
    "code": "ME-06",
    "name": "Cetinje",
    "type": "Municipality"
  },
  {
    "countryCode": "ME",
    "code": "ME-07",
    "name": "Danilovgrad",
    "type": "Municipality"
  },
  {
    "countryCode": "ME",
    "code": "ME-22",
    "name": "Gusinje",
    "type": "Municipality"
  },
  {
    "countryCode": "ME",
    "code": "ME-08",
    "name": "Herceg-Novi",
    "type": "Municipality"
  },
  {
    "countryCode": "ME",
    "code": "ME-09",
    "name": "Kolašin",
    "type": "Municipality"
  },
  {
    "countryCode": "ME",
    "code": "ME-10",
    "name": "Kotor",
    "type": "Municipality"
  },
  {
    "countryCode": "ME",
    "code": "ME-11",
    "name": "Mojkovac",
    "type": "Municipality"
  },
  {
    "countryCode": "ME",
    "code": "ME-12",
    "name": "Nikšić",
    "type": "Municipality"
  },
  {
    "countryCode": "ME",
    "code": "ME-23",
    "name": "Petnjica",
    "type": "Municipality"
  },
  {
    "countryCode": "ME",
    "code": "ME-13",
    "name": "Plav",
    "type": "Municipality"
  },
  {
    "countryCode": "ME",
    "code": "ME-14",
    "name": "Pljevlja",
    "type": "Municipality"
  },
  {
    "countryCode": "ME",
    "code": "ME-15",
    "name": "Plužine",
    "type": "Municipality"
  },
  {
    "countryCode": "ME",
    "code": "ME-16",
    "name": "Podgorica",
    "type": "Municipality"
  },
  {
    "countryCode": "ME",
    "code": "ME-17",
    "name": "Rožaje",
    "type": "Municipality"
  },
  {
    "countryCode": "ME",
    "code": "ME-19",
    "name": "Tivat",
    "type": "Municipality"
  },
  {
    "countryCode": "ME",
    "code": "ME-24",
    "name": "Tuzi",
    "type": "Municipality"
  },
  {
    "countryCode": "ME",
    "code": "ME-20",
    "name": "Ulcinj",
    "type": "Municipality"
  },
  {
    "countryCode": "ME",
    "code": "ME-25",
    "name": "Zeta",
    "type": "Municipality"
  },
  {
    "countryCode": "ME",
    "code": "ME-18",
    "name": "Šavnik",
    "type": "Municipality"
  },
  {
    "countryCode": "ME",
    "code": "ME-21",
    "name": "Žabljak",
    "type": "Municipality"
  },
  {
    "countryCode": "MG",
    "code": "MG-T",
    "name": "Antananarivo",
    "type": "Province"
  },
  {
    "countryCode": "MG",
    "code": "MG-D",
    "name": "Antsiranana",
    "type": "Province"
  },
  {
    "countryCode": "MG",
    "code": "MG-F",
    "name": "Fianarantsoa",
    "type": "Province"
  },
  {
    "countryCode": "MG",
    "code": "MG-M",
    "name": "Mahajanga",
    "type": "Province"
  },
  {
    "countryCode": "MG",
    "code": "MG-A",
    "name": "Toamasina",
    "type": "Province"
  },
  {
    "countryCode": "MG",
    "code": "MG-U",
    "name": "Toliara",
    "type": "Province"
  },
  {
    "countryCode": "MH",
    "code": "MH-ALL",
    "name": "Ailinglaplap",
    "type": "Municipality"
  },
  {
    "countryCode": "MH",
    "code": "MH-ALK",
    "name": "Ailuk",
    "type": "Municipality"
  },
  {
    "countryCode": "MH",
    "code": "MH-ARN",
    "name": "Arno",
    "type": "Municipality"
  },
  {
    "countryCode": "MH",
    "code": "MH-AUR",
    "name": "Aur",
    "type": "Municipality"
  },
  {
    "countryCode": "MH",
    "code": "MH-KIL",
    "name": "Bikini & Kili",
    "type": "Municipality"
  },
  {
    "countryCode": "MH",
    "code": "MH-EBO",
    "name": "Ebon",
    "type": "Municipality"
  },
  {
    "countryCode": "MH",
    "code": "MH-ENI",
    "name": "Enewetak & Ujelang",
    "type": "Municipality"
  },
  {
    "countryCode": "MH",
    "code": "MH-JAB",
    "name": "Jabat",
    "type": "Municipality"
  },
  {
    "countryCode": "MH",
    "code": "MH-JAL",
    "name": "Jaluit",
    "type": "Municipality"
  },
  {
    "countryCode": "MH",
    "code": "MH-KWA",
    "name": "Kwajalein",
    "type": "Municipality"
  },
  {
    "countryCode": "MH",
    "code": "MH-LAE",
    "name": "Lae",
    "type": "Municipality"
  },
  {
    "countryCode": "MH",
    "code": "MH-LIB",
    "name": "Lib",
    "type": "Municipality"
  },
  {
    "countryCode": "MH",
    "code": "MH-LIK",
    "name": "Likiep",
    "type": "Municipality"
  },
  {
    "countryCode": "MH",
    "code": "MH-MAJ",
    "name": "Majuro",
    "type": "Municipality"
  },
  {
    "countryCode": "MH",
    "code": "MH-MAL",
    "name": "Maloelap",
    "type": "Municipality"
  },
  {
    "countryCode": "MH",
    "code": "MH-MEJ",
    "name": "Mejit",
    "type": "Municipality"
  },
  {
    "countryCode": "MH",
    "code": "MH-MIL",
    "name": "Mili",
    "type": "Municipality"
  },
  {
    "countryCode": "MH",
    "code": "MH-NMK",
    "name": "Namdrik",
    "type": "Municipality"
  },
  {
    "countryCode": "MH",
    "code": "MH-NMU",
    "name": "Namu",
    "type": "Municipality"
  },
  {
    "countryCode": "MH",
    "code": "MH-L",
    "name": "Ralik chain",
    "type": "Chain (of islands)"
  },
  {
    "countryCode": "MH",
    "code": "MH-T",
    "name": "Ratak chain",
    "type": "Chain (of islands)"
  },
  {
    "countryCode": "MH",
    "code": "MH-RON",
    "name": "Rongelap",
    "type": "Municipality"
  },
  {
    "countryCode": "MH",
    "code": "MH-UJA",
    "name": "Ujae",
    "type": "Municipality"
  },
  {
    "countryCode": "MH",
    "code": "MH-UTI",
    "name": "Utrik",
    "type": "Municipality"
  },
  {
    "countryCode": "MH",
    "code": "MH-WTH",
    "name": "Wotho",
    "type": "Municipality"
  },
  {
    "countryCode": "MH",
    "code": "MH-WTJ",
    "name": "Wotje",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-801",
    "name": "Aerodrom †",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-802",
    "name": "Aračinovo",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-201",
    "name": "Berovo",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-501",
    "name": "Bitola",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-401",
    "name": "Bogdanci",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-601",
    "name": "Bogovinje",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-402",
    "name": "Bosilovo",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-602",
    "name": "Brvenica",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-803",
    "name": "Butel †",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-313",
    "name": "Centar Župa",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-814",
    "name": "Centar †",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-303",
    "name": "Debar",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-304",
    "name": "Debrca",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-203",
    "name": "Delčevo",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-502",
    "name": "Demir Hisar",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-103",
    "name": "Demir Kapija",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-406",
    "name": "Dojran",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-503",
    "name": "Dolneni",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-804",
    "name": "Gazi Baba †",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-405",
    "name": "Gevgelija",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-805",
    "name": "Gjorče Petrov †",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-604",
    "name": "Gostivar",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-102",
    "name": "Gradsko",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-807",
    "name": "Ilinden",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-606",
    "name": "Jegunovce",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-205",
    "name": "Karbinci",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-808",
    "name": "Karpoš †",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-104",
    "name": "Kavadarci",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-809",
    "name": "Kisela Voda †",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-307",
    "name": "Kičevo",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-407",
    "name": "Konče",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-206",
    "name": "Kočani",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-701",
    "name": "Kratovo",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-702",
    "name": "Kriva Palanka",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-504",
    "name": "Krivogaštani",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-505",
    "name": "Kruševo",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-703",
    "name": "Kumanovo",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-704",
    "name": "Lipkovo",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-105",
    "name": "Lozovo",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-207",
    "name": "Makedonska Kamenica",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-308",
    "name": "Makedonski Brod",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-607",
    "name": "Mavrovo i Rostuše",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-506",
    "name": "Mogila",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-106",
    "name": "Negotino",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-507",
    "name": "Novaci",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-408",
    "name": "Novo Selo",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-310",
    "name": "Ohrid",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-208",
    "name": "Pehčevo",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-810",
    "name": "Petrovec",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-311",
    "name": "Plasnica",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-508",
    "name": "Prilep",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-209",
    "name": "Probištip",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-409",
    "name": "Radoviš",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-705",
    "name": "Rankovce",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-509",
    "name": "Resen",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-107",
    "name": "Rosoman",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-811",
    "name": "Saraj †",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-812",
    "name": "Sopište",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-706",
    "name": "Staro Nagoričane",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-312",
    "name": "Struga",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-410",
    "name": "Strumica",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-813",
    "name": "Studeničani",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-108",
    "name": "Sveti Nikole",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-608",
    "name": "Tearce",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-609",
    "name": "Tetovo",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-403",
    "name": "Valandovo",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-404",
    "name": "Vasilevo",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-101",
    "name": "Veles",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-301",
    "name": "Vevčani",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-202",
    "name": "Vinica",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-603",
    "name": "Vrapčište",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-806",
    "name": "Zelenikovo",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-204",
    "name": "Zrnovci",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-815",
    "name": "Čair †",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-109",
    "name": "Čaška",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-210",
    "name": "Češinovo-Obleševo",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-816",
    "name": "Čučer-Sandevo",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-211",
    "name": "Štip",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-817",
    "name": "Šuto Orizari †",
    "type": "Municipality"
  },
  {
    "countryCode": "MK",
    "code": "MK-605",
    "name": "Želino",
    "type": "Municipality"
  },
  {
    "countryCode": "ML",
    "code": "ML-BKO",
    "name": "Bamako",
    "type": "District"
  },
  {
    "countryCode": "ML",
    "code": "ML-7",
    "name": "Gao",
    "type": "Region"
  },
  {
    "countryCode": "ML",
    "code": "ML-1",
    "name": "Kayes",
    "type": "Region"
  },
  {
    "countryCode": "ML",
    "code": "ML-8",
    "name": "Kidal",
    "type": "Region"
  },
  {
    "countryCode": "ML",
    "code": "ML-2",
    "name": "Koulikoro",
    "type": "Region"
  },
  {
    "countryCode": "ML",
    "code": "ML-5",
    "name": "Mopti",
    "type": "Region"
  },
  {
    "countryCode": "ML",
    "code": "ML-9",
    "name": "Ménaka",
    "type": "Region"
  },
  {
    "countryCode": "ML",
    "code": "ML-3",
    "name": "Sikasso",
    "type": "Region"
  },
  {
    "countryCode": "ML",
    "code": "ML-4",
    "name": "Ségou",
    "type": "Region"
  },
  {
    "countryCode": "ML",
    "code": "ML-10",
    "name": "Taoudénit",
    "type": "Region"
  },
  {
    "countryCode": "ML",
    "code": "ML-6",
    "name": "Tombouctou",
    "type": "Region"
  },
  {
    "countryCode": "MM",
    "code": "MM-07",
    "name": "Ayeyarwady",
    "type": "Region"
  },
  {
    "countryCode": "MM",
    "code": "MM-02",
    "name": "Bago",
    "type": "Region"
  },
  {
    "countryCode": "MM",
    "code": "MM-14",
    "name": "Chin",
    "type": "State"
  },
  {
    "countryCode": "MM",
    "code": "MM-11",
    "name": "Kachin",
    "type": "State"
  },
  {
    "countryCode": "MM",
    "code": "MM-12",
    "name": "Kayah",
    "type": "State"
  },
  {
    "countryCode": "MM",
    "code": "MM-13",
    "name": "Kayin",
    "type": "State"
  },
  {
    "countryCode": "MM",
    "code": "MM-03",
    "name": "Magway",
    "type": "Region"
  },
  {
    "countryCode": "MM",
    "code": "MM-04",
    "name": "Mandalay",
    "type": "Region"
  },
  {
    "countryCode": "MM",
    "code": "MM-15",
    "name": "Mon",
    "type": "State"
  },
  {
    "countryCode": "MM",
    "code": "MM-18",
    "name": "Nay Pyi Taw",
    "type": "Union territory"
  },
  {
    "countryCode": "MM",
    "code": "MM-16",
    "name": "Rakhine",
    "type": "State"
  },
  {
    "countryCode": "MM",
    "code": "MM-01",
    "name": "Sagaing",
    "type": "Region"
  },
  {
    "countryCode": "MM",
    "code": "MM-17",
    "name": "Shan",
    "type": "State"
  },
  {
    "countryCode": "MM",
    "code": "MM-05",
    "name": "Tanintharyi",
    "type": "Region"
  },
  {
    "countryCode": "MM",
    "code": "MM-06",
    "name": "Yangon",
    "type": "Region"
  },
  {
    "countryCode": "MN",
    "code": "MN-073",
    "name": "Arhangay",
    "type": "Province"
  },
  {
    "countryCode": "MN",
    "code": "MN-071",
    "name": "Bayan-Ölgiy",
    "type": "Province"
  },
  {
    "countryCode": "MN",
    "code": "MN-069",
    "name": "Bayanhongor",
    "type": "Province"
  },
  {
    "countryCode": "MN",
    "code": "MN-067",
    "name": "Bulgan",
    "type": "Province"
  },
  {
    "countryCode": "MN",
    "code": "MN-037",
    "name": "Darhan uul",
    "type": "Province"
  },
  {
    "countryCode": "MN",
    "code": "MN-061",
    "name": "Dornod",
    "type": "Province"
  },
  {
    "countryCode": "MN",
    "code": "MN-063",
    "name": "Dornogovĭ",
    "type": "Province"
  },
  {
    "countryCode": "MN",
    "code": "MN-059",
    "name": "Dundgovĭ",
    "type": "Province"
  },
  {
    "countryCode": "MN",
    "code": "MN-057",
    "name": "Dzavhan",
    "type": "Province"
  },
  {
    "countryCode": "MN",
    "code": "MN-065",
    "name": "Govĭ-Altay",
    "type": "Province"
  },
  {
    "countryCode": "MN",
    "code": "MN-064",
    "name": "Govĭ-Sümber",
    "type": "Province"
  },
  {
    "countryCode": "MN",
    "code": "MN-039",
    "name": "Hentiy",
    "type": "Province"
  },
  {
    "countryCode": "MN",
    "code": "MN-043",
    "name": "Hovd",
    "type": "Province"
  },
  {
    "countryCode": "MN",
    "code": "MN-041",
    "name": "Hövsgöl",
    "type": "Province"
  },
  {
    "countryCode": "MN",
    "code": "MN-035",
    "name": "Orhon",
    "type": "Province"
  },
  {
    "countryCode": "MN",
    "code": "MN-049",
    "name": "Selenge",
    "type": "Province"
  },
  {
    "countryCode": "MN",
    "code": "MN-051",
    "name": "Sühbaatar",
    "type": "Province"
  },
  {
    "countryCode": "MN",
    "code": "MN-047",
    "name": "Töv",
    "type": "Province"
  },
  {
    "countryCode": "MN",
    "code": "MN-1",
    "name": "Ulaanbaatar",
    "type": "Capital city"
  },
  {
    "countryCode": "MN",
    "code": "MN-046",
    "name": "Uvs",
    "type": "Province"
  },
  {
    "countryCode": "MN",
    "code": "MN-053",
    "name": "Ömnögovĭ",
    "type": "Province"
  },
  {
    "countryCode": "MN",
    "code": "MN-055",
    "name": "Övörhangay",
    "type": "Province"
  },
  {
    "countryCode": "MR",
    "code": "MR-07",
    "name": "Adrar",
    "type": "Region"
  },
  {
    "countryCode": "MR",
    "code": "MR-03",
    "name": "Assaba",
    "type": "Region"
  },
  {
    "countryCode": "MR",
    "code": "MR-05",
    "name": "Brakna",
    "type": "Region"
  },
  {
    "countryCode": "MR",
    "code": "MR-08",
    "name": "Dakhlet Nouâdhibou",
    "type": "Region"
  },
  {
    "countryCode": "MR",
    "code": "MR-04",
    "name": "Gorgol",
    "type": "Region"
  },
  {
    "countryCode": "MR",
    "code": "MR-10",
    "name": "Guidimaka",
    "type": "Region"
  },
  {
    "countryCode": "MR",
    "code": "MR-01",
    "name": "Hodh ech Chargui",
    "type": "Region"
  },
  {
    "countryCode": "MR",
    "code": "MR-02",
    "name": "Hodh el Gharbi",
    "type": "Region"
  },
  {
    "countryCode": "MR",
    "code": "MR-12",
    "name": "Inchiri",
    "type": "Region"
  },
  {
    "countryCode": "MR",
    "code": "MR-14",
    "name": "Nouakchott Nord",
    "type": "Region"
  },
  {
    "countryCode": "MR",
    "code": "MR-13",
    "name": "Nouakchott Ouest",
    "type": "Region"
  },
  {
    "countryCode": "MR",
    "code": "MR-15",
    "name": "Nouakchott Sud",
    "type": "Region"
  },
  {
    "countryCode": "MR",
    "code": "MR-09",
    "name": "Tagant",
    "type": "Region"
  },
  {
    "countryCode": "MR",
    "code": "MR-11",
    "name": "Tiris Zemmour",
    "type": "Region"
  },
  {
    "countryCode": "MR",
    "code": "MR-06",
    "name": "Trarza",
    "type": "Region"
  },
  {
    "countryCode": "MT",
    "code": "MT-01",
    "name": "Attard",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-02",
    "name": "Balzan",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-03",
    "name": "Birgu",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-04",
    "name": "Birkirkara",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-05",
    "name": "Birżebbuġa",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-06",
    "name": "Bormla",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-07",
    "name": "Dingli",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-08",
    "name": "Fgura",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-09",
    "name": "Floriana",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-10",
    "name": "Fontana",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-11",
    "name": "Gudja",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-13",
    "name": "Għajnsielem",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-14",
    "name": "Għarb",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-15",
    "name": "Għargħur",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-16",
    "name": "Għasri",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-17",
    "name": "Għaxaq",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-12",
    "name": "Gżira",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-19",
    "name": "Iklin",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-20",
    "name": "Isla",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-21",
    "name": "Kalkara",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-22",
    "name": "Kerċem",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-23",
    "name": "Kirkop",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-24",
    "name": "Lija",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-25",
    "name": "Luqa",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-26",
    "name": "Marsa",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-27",
    "name": "Marsaskala",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-28",
    "name": "Marsaxlokk",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-29",
    "name": "Mdina",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-30",
    "name": "Mellieħa",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-32",
    "name": "Mosta",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-33",
    "name": "Mqabba",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-34",
    "name": "Msida",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-35",
    "name": "Mtarfa",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-36",
    "name": "Munxar",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-31",
    "name": "Mġarr",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-37",
    "name": "Nadur",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-38",
    "name": "Naxxar",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-39",
    "name": "Paola",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-40",
    "name": "Pembroke",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-41",
    "name": "Pietà",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-42",
    "name": "Qala",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-43",
    "name": "Qormi",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-44",
    "name": "Qrendi",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-45",
    "name": "Rabat Gozo",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-46",
    "name": "Rabat Malta",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-47",
    "name": "Safi",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-49",
    "name": "Saint John",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-48",
    "name": "Saint Julian's",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-50",
    "name": "Saint Lawrence",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-53",
    "name": "Saint Lucia's",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-51",
    "name": "Saint Paul's Bay",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-52",
    "name": "Sannat",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-54",
    "name": "Santa Venera",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-55",
    "name": "Siġġiewi",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-56",
    "name": "Sliema",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-57",
    "name": "Swieqi",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-58",
    "name": "Ta' Xbiex",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-59",
    "name": "Tarxien",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-60",
    "name": "Valletta",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-61",
    "name": "Xagħra",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-62",
    "name": "Xewkija",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-63",
    "name": "Xgħajra",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-18",
    "name": "Ħamrun",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-64",
    "name": "Żabbar",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-65",
    "name": "Żebbuġ Gozo",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-66",
    "name": "Żebbuġ Malta",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-67",
    "name": "Żejtun",
    "type": "Local council"
  },
  {
    "countryCode": "MT",
    "code": "MT-68",
    "name": "Żurrieq",
    "type": "Local council"
  },
  {
    "countryCode": "MU",
    "code": "MU-AG",
    "name": "Agalega Islands",
    "type": "Dependency"
  },
  {
    "countryCode": "MU",
    "code": "MU-BL",
    "name": "Black River",
    "type": "District"
  },
  {
    "countryCode": "MU",
    "code": "MU-CC",
    "name": "Cargados Carajos Shoals",
    "type": "Dependency"
  },
  {
    "countryCode": "MU",
    "code": "MU-FL",
    "name": "Flacq",
    "type": "District"
  },
  {
    "countryCode": "MU",
    "code": "MU-GP",
    "name": "Grand Port",
    "type": "District"
  },
  {
    "countryCode": "MU",
    "code": "MU-MO",
    "name": "Moka",
    "type": "District"
  },
  {
    "countryCode": "MU",
    "code": "MU-PA",
    "name": "Pamplemousses",
    "type": "District"
  },
  {
    "countryCode": "MU",
    "code": "MU-PW",
    "name": "Plaines Wilhems",
    "type": "District"
  },
  {
    "countryCode": "MU",
    "code": "MU-PL",
    "name": "Port Louis",
    "type": "District"
  },
  {
    "countryCode": "MU",
    "code": "MU-RR",
    "name": "Rivière du Rempart",
    "type": "District"
  },
  {
    "countryCode": "MU",
    "code": "MU-RO",
    "name": "Rodrigues Island",
    "type": "Dependency"
  },
  {
    "countryCode": "MU",
    "code": "MU-SA",
    "name": "Savanne",
    "type": "District"
  },
  {
    "countryCode": "MV",
    "code": "MV-01",
    "name": "Addu City",
    "type": "City"
  },
  {
    "countryCode": "MV",
    "code": "MV-03",
    "name": "Faadhippolhu",
    "type": "Administrative atoll"
  },
  {
    "countryCode": "MV",
    "code": "MV-04",
    "name": "Felidhu Atoll",
    "type": "Administrative atoll"
  },
  {
    "countryCode": "MV",
    "code": "MV-29",
    "name": "Fuvammulah",
    "type": "Administrative atoll"
  },
  {
    "countryCode": "MV",
    "code": "MV-05",
    "name": "Hahdhunmathi",
    "type": "Administrative atoll"
  },
  {
    "countryCode": "MV",
    "code": "MV-08",
    "name": "Kolhumadulu",
    "type": "Administrative atoll"
  },
  {
    "countryCode": "MV",
    "code": "MV-MLE",
    "name": "Male",
    "type": "City"
  },
  {
    "countryCode": "MV",
    "code": "MV-26",
    "name": "Male Atoll",
    "type": "Administrative atoll"
  },
  {
    "countryCode": "MV",
    "code": "MV-12",
    "name": "Mulaku Atoll",
    "type": "Administrative atoll"
  },
  {
    "countryCode": "MV",
    "code": "MV-02",
    "name": "North Ari Atoll",
    "type": "Administrative atoll"
  },
  {
    "countryCode": "MV",
    "code": "MV-27",
    "name": "North Huvadhu Atoll",
    "type": "Administrative atoll"
  },
  {
    "countryCode": "MV",
    "code": "MV-13",
    "name": "North Maalhosmadulu",
    "type": "Administrative atoll"
  },
  {
    "countryCode": "MV",
    "code": "MV-24",
    "name": "North Miladhunmadulu",
    "type": "Administrative atoll"
  },
  {
    "countryCode": "MV",
    "code": "MV-14",
    "name": "North Nilandhe Atoll",
    "type": "Administrative atoll"
  },
  {
    "countryCode": "MV",
    "code": "MV-07",
    "name": "North Thiladhunmathi",
    "type": "Administrative atoll"
  },
  {
    "countryCode": "MV",
    "code": "MV-00",
    "name": "South Ari Atoll",
    "type": "Administrative atoll"
  },
  {
    "countryCode": "MV",
    "code": "MV-28",
    "name": "South Huvadhu Atoll",
    "type": "Administrative atoll"
  },
  {
    "countryCode": "MV",
    "code": "MV-20",
    "name": "South Maalhosmadulu",
    "type": "Administrative atoll"
  },
  {
    "countryCode": "MV",
    "code": "MV-25",
    "name": "South Miladhunmadulu",
    "type": "Administrative atoll"
  },
  {
    "countryCode": "MV",
    "code": "MV-17",
    "name": "South Nilandhe Atoll",
    "type": "Administrative atoll"
  },
  {
    "countryCode": "MV",
    "code": "MV-23",
    "name": "South Thiladhunmathi",
    "type": "Administrative atoll"
  },
  {
    "countryCode": "MW",
    "code": "MW-BA",
    "name": "Balaka",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-BL",
    "name": "Blantyre",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-C",
    "name": "Central Region",
    "type": "Region"
  },
  {
    "countryCode": "MW",
    "code": "MW-CK",
    "name": "Chikwawa",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-CR",
    "name": "Chiradzulu",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-CT",
    "name": "Chitipa",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-DE",
    "name": "Dedza",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-DO",
    "name": "Dowa",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-KR",
    "name": "Karonga",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-KS",
    "name": "Kasungu",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-LK",
    "name": "Likoma",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-LI",
    "name": "Lilongwe",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-MH",
    "name": "Machinga",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-MG",
    "name": "Mangochi",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-MC",
    "name": "Mchinji",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-MU",
    "name": "Mulanje",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-MW",
    "name": "Mwanza",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-MZ",
    "name": "Mzimba",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-NE",
    "name": "Neno",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-NB",
    "name": "Nkhata Bay",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-NK",
    "name": "Nkhotakota",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-N",
    "name": "Northern Region",
    "type": "Region"
  },
  {
    "countryCode": "MW",
    "code": "MW-NS",
    "name": "Nsanje",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-NU",
    "name": "Ntcheu",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-NI",
    "name": "Ntchisi",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-PH",
    "name": "Phalombe",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-RU",
    "name": "Rumphi",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-SA",
    "name": "Salima",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-S",
    "name": "Southern Region",
    "type": "Region"
  },
  {
    "countryCode": "MW",
    "code": "MW-TH",
    "name": "Thyolo",
    "type": "District"
  },
  {
    "countryCode": "MW",
    "code": "MW-ZO",
    "name": "Zomba",
    "type": "District"
  },
  {
    "countryCode": "MX",
    "code": "MX-AGU",
    "name": "Aguascalientes",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-BCN",
    "name": "Baja California",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-BCS",
    "name": "Baja California Sur",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-CAM",
    "name": "Campeche",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-CHP",
    "name": "Chiapas",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-CHH",
    "name": "Chihuahua",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-CMX",
    "name": "Ciudad de México",
    "type": "Federal entity"
  },
  {
    "countryCode": "MX",
    "code": "MX-COA",
    "name": "Coahuila de Zaragoza",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-COL",
    "name": "Colima",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-DUR",
    "name": "Durango",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-GUA",
    "name": "Guanajuato",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-GRO",
    "name": "Guerrero",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-HID",
    "name": "Hidalgo",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-JAL",
    "name": "Jalisco",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-MIC",
    "name": "Michoacán de Ocampo",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-MOR",
    "name": "Morelos",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-MEX",
    "name": "México",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-NAY",
    "name": "Nayarit",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-NLE",
    "name": "Nuevo León",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-OAX",
    "name": "Oaxaca",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-PUE",
    "name": "Puebla",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-QUE",
    "name": "Querétaro",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-ROO",
    "name": "Quintana Roo",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-SLP",
    "name": "San Luis Potosí",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-SIN",
    "name": "Sinaloa",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-SON",
    "name": "Sonora",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-TAB",
    "name": "Tabasco",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-TAM",
    "name": "Tamaulipas",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-TLA",
    "name": "Tlaxcala",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-VER",
    "name": "Veracruz de Ignacio de la Llave",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-YUC",
    "name": "Yucatán",
    "type": "State"
  },
  {
    "countryCode": "MX",
    "code": "MX-ZAC",
    "name": "Zacatecas",
    "type": "State"
  },
  {
    "countryCode": "MY",
    "code": "MY-01",
    "name": "Johor",
    "type": "State"
  },
  {
    "countryCode": "MY",
    "code": "MY-02",
    "name": "Kedah",
    "type": "State"
  },
  {
    "countryCode": "MY",
    "code": "MY-03",
    "name": "Kelantan",
    "type": "State"
  },
  {
    "countryCode": "MY",
    "code": "MY-04",
    "name": "Melaka",
    "type": "State"
  },
  {
    "countryCode": "MY",
    "code": "MY-05",
    "name": "Negeri Sembilan",
    "type": "State"
  },
  {
    "countryCode": "MY",
    "code": "MY-06",
    "name": "Pahang",
    "type": "State"
  },
  {
    "countryCode": "MY",
    "code": "MY-08",
    "name": "Perak",
    "type": "State"
  },
  {
    "countryCode": "MY",
    "code": "MY-09",
    "name": "Perlis",
    "type": "State"
  },
  {
    "countryCode": "MY",
    "code": "MY-07",
    "name": "Pulau Pinang",
    "type": "State"
  },
  {
    "countryCode": "MY",
    "code": "MY-12",
    "name": "Sabah",
    "type": "State"
  },
  {
    "countryCode": "MY",
    "code": "MY-13",
    "name": "Sarawak",
    "type": "State"
  },
  {
    "countryCode": "MY",
    "code": "MY-10",
    "name": "Selangor",
    "type": "State"
  },
  {
    "countryCode": "MY",
    "code": "MY-11",
    "name": "Terengganu",
    "type": "State"
  },
  {
    "countryCode": "MY",
    "code": "MY-14",
    "name": "Wilayah Persekutuan Kuala Lumpur",
    "type": "Federal territory"
  },
  {
    "countryCode": "MY",
    "code": "MY-15",
    "name": "Wilayah Persekutuan Labuan",
    "type": "Federal territory"
  },
  {
    "countryCode": "MY",
    "code": "MY-16",
    "name": "Wilayah Persekutuan Putrajaya",
    "type": "Federal territory"
  },
  {
    "countryCode": "MZ",
    "code": "MZ-P",
    "name": "Cabo Delgado",
    "type": "Province"
  },
  {
    "countryCode": "MZ",
    "code": "MZ-G",
    "name": "Gaza",
    "type": "Province"
  },
  {
    "countryCode": "MZ",
    "code": "MZ-I",
    "name": "Inhambane",
    "type": "Province"
  },
  {
    "countryCode": "MZ",
    "code": "MZ-B",
    "name": "Manica",
    "type": "Province"
  },
  {
    "countryCode": "MZ",
    "code": "MZ-L",
    "name": "Maputo",
    "type": "Province"
  },
  {
    "countryCode": "MZ",
    "code": "MZ-MPM",
    "name": "Maputo",
    "type": "City"
  },
  {
    "countryCode": "MZ",
    "code": "MZ-N",
    "name": "Nampula",
    "type": "Province"
  },
  {
    "countryCode": "MZ",
    "code": "MZ-A",
    "name": "Niassa",
    "type": "Province"
  },
  {
    "countryCode": "MZ",
    "code": "MZ-S",
    "name": "Sofala",
    "type": "Province"
  },
  {
    "countryCode": "MZ",
    "code": "MZ-T",
    "name": "Tete",
    "type": "Province"
  },
  {
    "countryCode": "MZ",
    "code": "MZ-Q",
    "name": "Zambézia",
    "type": "Province"
  },
  {
    "countryCode": "NA",
    "code": "NA-KA",
    "name": "//Karas",
    "type": "Region"
  },
  {
    "countryCode": "NA",
    "code": "NA-ER",
    "name": "Erongo",
    "type": "Region"
  },
  {
    "countryCode": "NA",
    "code": "NA-HA",
    "name": "Hardap",
    "type": "Region"
  },
  {
    "countryCode": "NA",
    "code": "NA-KE",
    "name": "Kavango East",
    "type": "Region"
  },
  {
    "countryCode": "NA",
    "code": "NA-KW",
    "name": "Kavango West",
    "type": "Region"
  },
  {
    "countryCode": "NA",
    "code": "NA-KH",
    "name": "Khomas",
    "type": "Region"
  },
  {
    "countryCode": "NA",
    "code": "NA-KU",
    "name": "Kunene",
    "type": "Region"
  },
  {
    "countryCode": "NA",
    "code": "NA-OW",
    "name": "Ohangwena",
    "type": "Region"
  },
  {
    "countryCode": "NA",
    "code": "NA-OH",
    "name": "Omaheke",
    "type": "Region"
  },
  {
    "countryCode": "NA",
    "code": "NA-OS",
    "name": "Omusati",
    "type": "Region"
  },
  {
    "countryCode": "NA",
    "code": "NA-ON",
    "name": "Oshana",
    "type": "Region"
  },
  {
    "countryCode": "NA",
    "code": "NA-OT",
    "name": "Oshikoto",
    "type": "Region"
  },
  {
    "countryCode": "NA",
    "code": "NA-OD",
    "name": "Otjozondjupa",
    "type": "Region"
  },
  {
    "countryCode": "NA",
    "code": "NA-CA",
    "name": "Zambezi",
    "type": "Region"
  },
  {
    "countryCode": "NE",
    "code": "NE-1",
    "name": "Agadez",
    "type": "Region"
  },
  {
    "countryCode": "NE",
    "code": "NE-2",
    "name": "Diffa",
    "type": "Region"
  },
  {
    "countryCode": "NE",
    "code": "NE-3",
    "name": "Dosso",
    "type": "Region"
  },
  {
    "countryCode": "NE",
    "code": "NE-4",
    "name": "Maradi",
    "type": "Region"
  },
  {
    "countryCode": "NE",
    "code": "NE-8",
    "name": "Niamey",
    "type": "Urban community"
  },
  {
    "countryCode": "NE",
    "code": "NE-5",
    "name": "Tahoua",
    "type": "Region"
  },
  {
    "countryCode": "NE",
    "code": "NE-6",
    "name": "Tillabéri",
    "type": "Region"
  },
  {
    "countryCode": "NE",
    "code": "NE-7",
    "name": "Zinder",
    "type": "Region"
  },
  {
    "countryCode": "NG",
    "code": "NG-AB",
    "name": "Abia",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-FC",
    "name": "Abuja Federal Capital Territory",
    "type": "Capital territory"
  },
  {
    "countryCode": "NG",
    "code": "NG-AD",
    "name": "Adamawa",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-AK",
    "name": "Akwa Ibom",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-AN",
    "name": "Anambra",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-BA",
    "name": "Bauchi",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-BY",
    "name": "Bayelsa",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-BE",
    "name": "Benue",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-BO",
    "name": "Borno",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-CR",
    "name": "Cross River",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-DE",
    "name": "Delta",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-EB",
    "name": "Ebonyi",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-ED",
    "name": "Edo",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-EK",
    "name": "Ekiti",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-EN",
    "name": "Enugu",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-GO",
    "name": "Gombe",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-IM",
    "name": "Imo",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-JI",
    "name": "Jigawa",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-KD",
    "name": "Kaduna",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-KN",
    "name": "Kano",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-KT",
    "name": "Katsina",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-KE",
    "name": "Kebbi",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-KO",
    "name": "Kogi",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-KW",
    "name": "Kwara",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-LA",
    "name": "Lagos",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-NA",
    "name": "Nasarawa",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-NI",
    "name": "Niger",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-OG",
    "name": "Ogun",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-ON",
    "name": "Ondo",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-OS",
    "name": "Osun",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-OY",
    "name": "Oyo",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-PL",
    "name": "Plateau",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-RI",
    "name": "Rivers",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-SO",
    "name": "Sokoto",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-TA",
    "name": "Taraba",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-YO",
    "name": "Yobe",
    "type": "State"
  },
  {
    "countryCode": "NG",
    "code": "NG-ZA",
    "name": "Zamfara",
    "type": "State"
  },
  {
    "countryCode": "NI",
    "code": "NI-BO",
    "name": "Boaco",
    "type": "Department"
  },
  {
    "countryCode": "NI",
    "code": "NI-CA",
    "name": "Carazo",
    "type": "Department"
  },
  {
    "countryCode": "NI",
    "code": "NI-CI",
    "name": "Chinandega",
    "type": "Department"
  },
  {
    "countryCode": "NI",
    "code": "NI-CO",
    "name": "Chontales",
    "type": "Department"
  },
  {
    "countryCode": "NI",
    "code": "NI-AN",
    "name": "Costa Caribe Norte",
    "type": "Autonomous region"
  },
  {
    "countryCode": "NI",
    "code": "NI-AS",
    "name": "Costa Caribe Sur",
    "type": "Autonomous region"
  },
  {
    "countryCode": "NI",
    "code": "NI-ES",
    "name": "Estelí",
    "type": "Department"
  },
  {
    "countryCode": "NI",
    "code": "NI-GR",
    "name": "Granada",
    "type": "Department"
  },
  {
    "countryCode": "NI",
    "code": "NI-JI",
    "name": "Jinotega",
    "type": "Department"
  },
  {
    "countryCode": "NI",
    "code": "NI-LE",
    "name": "León",
    "type": "Department"
  },
  {
    "countryCode": "NI",
    "code": "NI-MD",
    "name": "Madriz",
    "type": "Department"
  },
  {
    "countryCode": "NI",
    "code": "NI-MN",
    "name": "Managua",
    "type": "Department"
  },
  {
    "countryCode": "NI",
    "code": "NI-MS",
    "name": "Masaya",
    "type": "Department"
  },
  {
    "countryCode": "NI",
    "code": "NI-MT",
    "name": "Matagalpa",
    "type": "Department"
  },
  {
    "countryCode": "NI",
    "code": "NI-NS",
    "name": "Nueva Segovia",
    "type": "Department"
  },
  {
    "countryCode": "NI",
    "code": "NI-RI",
    "name": "Rivas",
    "type": "Department"
  },
  {
    "countryCode": "NI",
    "code": "NI-SJ",
    "name": "Río San Juan",
    "type": "Department"
  },
  {
    "countryCode": "NL",
    "code": "NL-AW",
    "name": "Aruba",
    "type": "Country"
  },
  {
    "countryCode": "NL",
    "code": "NL-BQ1",
    "name": "Bonaire",
    "type": "Special municipality"
  },
  {
    "countryCode": "NL",
    "code": "NL-CW",
    "name": "Curaçao",
    "type": "Country"
  },
  {
    "countryCode": "NL",
    "code": "NL-DR",
    "name": "Drenthe",
    "type": "Province"
  },
  {
    "countryCode": "NL",
    "code": "NL-FL",
    "name": "Flevoland",
    "type": "Province"
  },
  {
    "countryCode": "NL",
    "code": "NL-FR",
    "name": "Fryslân",
    "type": "Province"
  },
  {
    "countryCode": "NL",
    "code": "NL-GE",
    "name": "Gelderland",
    "type": "Province"
  },
  {
    "countryCode": "NL",
    "code": "NL-GR",
    "name": "Groningen",
    "type": "Province"
  },
  {
    "countryCode": "NL",
    "code": "NL-LI",
    "name": "Limburg",
    "type": "Province"
  },
  {
    "countryCode": "NL",
    "code": "NL-NB",
    "name": "Noord-Brabant",
    "type": "Province"
  },
  {
    "countryCode": "NL",
    "code": "NL-NH",
    "name": "Noord-Holland",
    "type": "Province"
  },
  {
    "countryCode": "NL",
    "code": "NL-OV",
    "name": "Overijssel",
    "type": "Province"
  },
  {
    "countryCode": "NL",
    "code": "NL-BQ2",
    "name": "Saba",
    "type": "Special municipality"
  },
  {
    "countryCode": "NL",
    "code": "NL-BQ3",
    "name": "Sint Eustatius",
    "type": "Special municipality"
  },
  {
    "countryCode": "NL",
    "code": "NL-SX",
    "name": "Sint Maarten",
    "type": "Country"
  },
  {
    "countryCode": "NL",
    "code": "NL-UT",
    "name": "Utrecht",
    "type": "Province"
  },
  {
    "countryCode": "NL",
    "code": "NL-ZE",
    "name": "Zeeland",
    "type": "Province"
  },
  {
    "countryCode": "NL",
    "code": "NL-ZH",
    "name": "Zuid-Holland",
    "type": "Province"
  },
  {
    "countryCode": "NO",
    "code": "NO-42",
    "name": "Agder",
    "type": "County"
  },
  {
    "countryCode": "NO",
    "code": "NO-34",
    "name": "Innlandet",
    "type": "County"
  },
  {
    "countryCode": "NO",
    "code": "NO-22",
    "name": "Jan Mayen (Arctic Region)",
    "type": "Arctic region"
  },
  {
    "countryCode": "NO",
    "code": "NO-15",
    "name": "Møre og Romsdal",
    "type": "County"
  },
  {
    "countryCode": "NO",
    "code": "NO-18",
    "name": "Nordland",
    "type": "County"
  },
  {
    "countryCode": "NO",
    "code": "NO-03",
    "name": "Oslo",
    "type": "County"
  },
  {
    "countryCode": "NO",
    "code": "NO-11",
    "name": "Rogaland",
    "type": "County"
  },
  {
    "countryCode": "NO",
    "code": "NO-54",
    "name": "Romssa ja Finnmárkku",
    "type": "County"
  },
  {
    "countryCode": "NO",
    "code": "NO-21",
    "name": "Svalbard (Arctic Region)",
    "type": "Arctic region"
  },
  {
    "countryCode": "NO",
    "code": "NO-50",
    "name": "Trööndelage",
    "type": "County"
  },
  {
    "countryCode": "NO",
    "code": "NO-38",
    "name": "Vestfold og Telemark",
    "type": "County"
  },
  {
    "countryCode": "NO",
    "code": "NO-46",
    "name": "Vestland",
    "type": "County"
  },
  {
    "countryCode": "NO",
    "code": "NO-30",
    "name": "Viken",
    "type": "County"
  },
  {
    "countryCode": "NP",
    "code": "NP-P3",
    "name": "Bagmati",
    "type": "Province"
  },
  {
    "countryCode": "NP",
    "code": "NP-P4",
    "name": "Gandaki",
    "type": "Province"
  },
  {
    "countryCode": "NP",
    "code": "NP-P6",
    "name": "Karnali",
    "type": "Province"
  },
  {
    "countryCode": "NP",
    "code": "NP-P1",
    "name": "Koshi",
    "type": "Province"
  },
  {
    "countryCode": "NP",
    "code": "NP-P5",
    "name": "Lumbini",
    "type": "Province"
  },
  {
    "countryCode": "NP",
    "code": "NP-P2",
    "name": "Madhesh",
    "type": "Province"
  },
  {
    "countryCode": "NP",
    "code": "NP-P7",
    "name": "Sudurpashchim",
    "type": "Province"
  },
  {
    "countryCode": "NR",
    "code": "NR-01",
    "name": "Aiwo",
    "type": "District"
  },
  {
    "countryCode": "NR",
    "code": "NR-02",
    "name": "Anabar",
    "type": "District"
  },
  {
    "countryCode": "NR",
    "code": "NR-03",
    "name": "Anetan",
    "type": "District"
  },
  {
    "countryCode": "NR",
    "code": "NR-04",
    "name": "Anibare",
    "type": "District"
  },
  {
    "countryCode": "NR",
    "code": "NR-05",
    "name": "Baitsi",
    "type": "District"
  },
  {
    "countryCode": "NR",
    "code": "NR-06",
    "name": "Boe",
    "type": "District"
  },
  {
    "countryCode": "NR",
    "code": "NR-07",
    "name": "Buada",
    "type": "District"
  },
  {
    "countryCode": "NR",
    "code": "NR-08",
    "name": "Denigomodu",
    "type": "District"
  },
  {
    "countryCode": "NR",
    "code": "NR-09",
    "name": "Ewa",
    "type": "District"
  },
  {
    "countryCode": "NR",
    "code": "NR-10",
    "name": "Ijuw",
    "type": "District"
  },
  {
    "countryCode": "NR",
    "code": "NR-11",
    "name": "Meneng",
    "type": "District"
  },
  {
    "countryCode": "NR",
    "code": "NR-12",
    "name": "Nibok",
    "type": "District"
  },
  {
    "countryCode": "NR",
    "code": "NR-13",
    "name": "Uaboe",
    "type": "District"
  },
  {
    "countryCode": "NR",
    "code": "NR-14",
    "name": "Yaren",
    "type": "District"
  },
  {
    "countryCode": "NZ",
    "code": "NZ-AUK",
    "name": "Auckland",
    "type": "Region"
  },
  {
    "countryCode": "NZ",
    "code": "NZ-BOP",
    "name": "Bay of Plenty",
    "type": "Region"
  },
  {
    "countryCode": "NZ",
    "code": "NZ-CAN",
    "name": "Canterbury",
    "type": "Region"
  },
  {
    "countryCode": "NZ",
    "code": "NZ-CIT",
    "name": "Chatham Islands Territory",
    "type": "Special island authority"
  },
  {
    "countryCode": "NZ",
    "code": "NZ-GIS",
    "name": "Gisborne",
    "type": "Region"
  },
  {
    "countryCode": "NZ",
    "code": "NZ-WGN",
    "name": "Greater Wellington",
    "type": "Region"
  },
  {
    "countryCode": "NZ",
    "code": "NZ-HKB",
    "name": "Hawke's Bay",
    "type": "Region"
  },
  {
    "countryCode": "NZ",
    "code": "NZ-MWT",
    "name": "Manawatū-Whanganui",
    "type": "Region"
  },
  {
    "countryCode": "NZ",
    "code": "NZ-MBH",
    "name": "Marlborough",
    "type": "Region"
  },
  {
    "countryCode": "NZ",
    "code": "NZ-NSN",
    "name": "Nelson",
    "type": "Region"
  },
  {
    "countryCode": "NZ",
    "code": "NZ-NTL",
    "name": "Northland",
    "type": "Region"
  },
  {
    "countryCode": "NZ",
    "code": "NZ-OTA",
    "name": "Otago",
    "type": "Region"
  },
  {
    "countryCode": "NZ",
    "code": "NZ-STL",
    "name": "Southland",
    "type": "Region"
  },
  {
    "countryCode": "NZ",
    "code": "NZ-TKI",
    "name": "Taranaki",
    "type": "Region"
  },
  {
    "countryCode": "NZ",
    "code": "NZ-TAS",
    "name": "Tasman",
    "type": "Region"
  },
  {
    "countryCode": "NZ",
    "code": "NZ-WKO",
    "name": "Waikato",
    "type": "Region"
  },
  {
    "countryCode": "NZ",
    "code": "NZ-WTC",
    "name": "West Coast",
    "type": "Region"
  },
  {
    "countryCode": "OM",
    "code": "OM-DA",
    "name": "Ad Dākhilīyah",
    "type": "Governorate"
  },
  {
    "countryCode": "OM",
    "code": "OM-BU",
    "name": "Al Buraymī",
    "type": "Governorate"
  },
  {
    "countryCode": "OM",
    "code": "OM-WU",
    "name": "Al Wusţá",
    "type": "Governorate"
  },
  {
    "countryCode": "OM",
    "code": "OM-ZA",
    "name": "Az̧ Z̧āhirah",
    "type": "Governorate"
  },
  {
    "countryCode": "OM",
    "code": "OM-BJ",
    "name": "Janūb al Bāţinah",
    "type": "Governorate"
  },
  {
    "countryCode": "OM",
    "code": "OM-SJ",
    "name": "Janūb ash Sharqīyah",
    "type": "Governorate"
  },
  {
    "countryCode": "OM",
    "code": "OM-MA",
    "name": "Masqaţ",
    "type": "Governorate"
  },
  {
    "countryCode": "OM",
    "code": "OM-MU",
    "name": "Musandam",
    "type": "Governorate"
  },
  {
    "countryCode": "OM",
    "code": "OM-BS",
    "name": "Shamāl al Bāţinah",
    "type": "Governorate"
  },
  {
    "countryCode": "OM",
    "code": "OM-SS",
    "name": "Shamāl ash Sharqīyah",
    "type": "Governorate"
  },
  {
    "countryCode": "OM",
    "code": "OM-ZU",
    "name": "Z̧ufār",
    "type": "Governorate"
  },
  {
    "countryCode": "PA",
    "code": "PA-1",
    "name": "Bocas del Toro",
    "type": "Province"
  },
  {
    "countryCode": "PA",
    "code": "PA-4",
    "name": "Chiriquí",
    "type": "Province"
  },
  {
    "countryCode": "PA",
    "code": "PA-2",
    "name": "Coclé",
    "type": "Province"
  },
  {
    "countryCode": "PA",
    "code": "PA-3",
    "name": "Colón",
    "type": "Province"
  },
  {
    "countryCode": "PA",
    "code": "PA-5",
    "name": "Darién",
    "type": "Province"
  },
  {
    "countryCode": "PA",
    "code": "PA-EM",
    "name": "Emberá",
    "type": "Indigenous region"
  },
  {
    "countryCode": "PA",
    "code": "PA-KY",
    "name": "Guna Yala",
    "type": "Indigenous region"
  },
  {
    "countryCode": "PA",
    "code": "PA-6",
    "name": "Herrera",
    "type": "Province"
  },
  {
    "countryCode": "PA",
    "code": "PA-7",
    "name": "Los Santos",
    "type": "Province"
  },
  {
    "countryCode": "PA",
    "code": "PA-NT",
    "name": "Naso Tjër Di",
    "type": "Indigenous region"
  },
  {
    "countryCode": "PA",
    "code": "PA-NB",
    "name": "Ngäbe-Buglé",
    "type": "Indigenous region"
  },
  {
    "countryCode": "PA",
    "code": "PA-8",
    "name": "Panamá",
    "type": "Province"
  },
  {
    "countryCode": "PA",
    "code": "PA-10",
    "name": "Panamá Oeste",
    "type": "Province"
  },
  {
    "countryCode": "PA",
    "code": "PA-9",
    "name": "Veraguas",
    "type": "Province"
  },
  {
    "countryCode": "PE",
    "code": "PE-AMA",
    "name": "Amarumayu",
    "type": "Region"
  },
  {
    "countryCode": "PE",
    "code": "PE-ANC",
    "name": "Ancash",
    "type": "Region"
  },
  {
    "countryCode": "PE",
    "code": "PE-APU",
    "name": "Apurimaq",
    "type": "Region"
  },
  {
    "countryCode": "PE",
    "code": "PE-ARE",
    "name": "Arequipa",
    "type": "Region"
  },
  {
    "countryCode": "PE",
    "code": "PE-AYA",
    "name": "Ayacucho",
    "type": "Region"
  },
  {
    "countryCode": "PE",
    "code": "PE-CAJ",
    "name": "Cajamarca",
    "type": "Region"
  },
  {
    "countryCode": "PE",
    "code": "PE-CUS",
    "name": "Cusco",
    "type": "Region"
  },
  {
    "countryCode": "PE",
    "code": "PE-CAL",
    "name": "El Callao",
    "type": "Region"
  },
  {
    "countryCode": "PE",
    "code": "PE-HUV",
    "name": "Huancavelica",
    "type": "Region"
  },
  {
    "countryCode": "PE",
    "code": "PE-JUN",
    "name": "Hunin",
    "type": "Region"
  },
  {
    "countryCode": "PE",
    "code": "PE-HUC",
    "name": "Huánuco",
    "type": "Region"
  },
  {
    "countryCode": "PE",
    "code": "PE-ICA",
    "name": "Ica",
    "type": "Region"
  },
  {
    "countryCode": "PE",
    "code": "PE-LAL",
    "name": "La Libertad",
    "type": "Region"
  },
  {
    "countryCode": "PE",
    "code": "PE-LAM",
    "name": "Lambayeque",
    "type": "Region"
  },
  {
    "countryCode": "PE",
    "code": "PE-LIM",
    "name": "Lima",
    "type": "Region"
  },
  {
    "countryCode": "PE",
    "code": "PE-LMA",
    "name": "Lima hatun llaqta",
    "type": "Municipality"
  },
  {
    "countryCode": "PE",
    "code": "PE-LOR",
    "name": "Loreto",
    "type": "Region"
  },
  {
    "countryCode": "PE",
    "code": "PE-MDD",
    "name": "Madre de Dios",
    "type": "Region"
  },
  {
    "countryCode": "PE",
    "code": "PE-MOQ",
    "name": "Moquegua",
    "type": "Region"
  },
  {
    "countryCode": "PE",
    "code": "PE-PAS",
    "name": "Pasco",
    "type": "Region"
  },
  {
    "countryCode": "PE",
    "code": "PE-PIU",
    "name": "Piura",
    "type": "Region"
  },
  {
    "countryCode": "PE",
    "code": "PE-PUN",
    "name": "Puno",
    "type": "Region"
  },
  {
    "countryCode": "PE",
    "code": "PE-SAM",
    "name": "San Martin",
    "type": "Region"
  },
  {
    "countryCode": "PE",
    "code": "PE-TAC",
    "name": "Tacna",
    "type": "Region"
  },
  {
    "countryCode": "PE",
    "code": "PE-TUM",
    "name": "Tumbes",
    "type": "Region"
  },
  {
    "countryCode": "PE",
    "code": "PE-UCA",
    "name": "Ucayali",
    "type": "Region"
  },
  {
    "countryCode": "PG",
    "code": "PG-NSB",
    "name": "Bougainville",
    "type": "Autonomous region"
  },
  {
    "countryCode": "PG",
    "code": "PG-CPM",
    "name": "Central",
    "type": "Province"
  },
  {
    "countryCode": "PG",
    "code": "PG-CPK",
    "name": "Chimbu",
    "type": "Province"
  },
  {
    "countryCode": "PG",
    "code": "PG-EBR",
    "name": "East New Britain",
    "type": "Province"
  },
  {
    "countryCode": "PG",
    "code": "PG-ESW",
    "name": "East Sepik",
    "type": "Province"
  },
  {
    "countryCode": "PG",
    "code": "PG-EHG",
    "name": "Eastern Highlands",
    "type": "Province"
  },
  {
    "countryCode": "PG",
    "code": "PG-EPW",
    "name": "Enga",
    "type": "Province"
  },
  {
    "countryCode": "PG",
    "code": "PG-GPK",
    "name": "Gulf",
    "type": "Province"
  },
  {
    "countryCode": "PG",
    "code": "PG-HLA",
    "name": "Hela",
    "type": "Province"
  },
  {
    "countryCode": "PG",
    "code": "PG-JWK",
    "name": "Jiwaka",
    "type": "Province"
  },
  {
    "countryCode": "PG",
    "code": "PG-MPM",
    "name": "Madang",
    "type": "Province"
  },
  {
    "countryCode": "PG",
    "code": "PG-MRL",
    "name": "Manus",
    "type": "Province"
  },
  {
    "countryCode": "PG",
    "code": "PG-MBA",
    "name": "Milne Bay",
    "type": "Province"
  },
  {
    "countryCode": "PG",
    "code": "PG-MPL",
    "name": "Morobe",
    "type": "Province"
  },
  {
    "countryCode": "PG",
    "code": "PG-NCD",
    "name": "National Capital District (Port Moresby)",
    "type": "District"
  },
  {
    "countryCode": "PG",
    "code": "PG-NIK",
    "name": "New Ireland",
    "type": "Province"
  },
  {
    "countryCode": "PG",
    "code": "PG-NPP",
    "name": "Northern",
    "type": "Province"
  },
  {
    "countryCode": "PG",
    "code": "PG-SHM",
    "name": "Southern Highlands",
    "type": "Province"
  },
  {
    "countryCode": "PG",
    "code": "PG-WBK",
    "name": "West New Britain",
    "type": "Province"
  },
  {
    "countryCode": "PG",
    "code": "PG-SAN",
    "name": "West Sepik",
    "type": "Province"
  },
  {
    "countryCode": "PG",
    "code": "PG-WPD",
    "name": "Western",
    "type": "Province"
  },
  {
    "countryCode": "PG",
    "code": "PG-WHM",
    "name": "Western Highlands",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-ABR",
    "name": "Abra",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-AGN",
    "name": "Agusan del Norte",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-AGS",
    "name": "Agusan del Sur",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-AKL",
    "name": "Aklan",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-ALB",
    "name": "Albay",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-ANT",
    "name": "Antique",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-APA",
    "name": "Apayao",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-AUR",
    "name": "Aurora",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-14",
    "name": "Autonomous Region in Muslim Mindanao (ARMM)",
    "type": "Region"
  },
  {
    "countryCode": "PH",
    "code": "PH-BAS",
    "name": "Basilan",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-BAN",
    "name": "Bataan",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-BTN",
    "name": "Batanes",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-BTG",
    "name": "Batangas",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-BEN",
    "name": "Benguet",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-05",
    "name": "Bicol (Region V)",
    "type": "Region"
  },
  {
    "countryCode": "PH",
    "code": "PH-BIL",
    "name": "Biliran",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-BOH",
    "name": "Bohol",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-BUK",
    "name": "Bukidnon",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-BUL",
    "name": "Bulacan",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-CAG",
    "name": "Cagayan",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-02",
    "name": "Cagayan Valley (Region II)",
    "type": "Region"
  },
  {
    "countryCode": "PH",
    "code": "PH-40",
    "name": "Calabarzon (Region IV-A)",
    "type": "Region"
  },
  {
    "countryCode": "PH",
    "code": "PH-CAN",
    "name": "Camarines Norte",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-CAS",
    "name": "Camarines Sur",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-CAM",
    "name": "Camiguin",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-CAP",
    "name": "Capiz",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-13",
    "name": "Caraga (Region XIII)",
    "type": "Region"
  },
  {
    "countryCode": "PH",
    "code": "PH-CAT",
    "name": "Catanduanes",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-CAV",
    "name": "Cavite",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-CEB",
    "name": "Cebu",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-03",
    "name": "Central Luzon (Region III)",
    "type": "Region"
  },
  {
    "countryCode": "PH",
    "code": "PH-07",
    "name": "Central Visayas (Region VII)",
    "type": "Region"
  },
  {
    "countryCode": "PH",
    "code": "PH-15",
    "name": "Cordillera Administrative Region (CAR)",
    "type": "Region"
  },
  {
    "countryCode": "PH",
    "code": "PH-NCO",
    "name": "Cotabato",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-11",
    "name": "Davao (Region XI)",
    "type": "Region"
  },
  {
    "countryCode": "PH",
    "code": "PH-COM",
    "name": "Davao de Oro",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-DAV",
    "name": "Davao del Norte",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-DAS",
    "name": "Davao del Sur",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-DVO",
    "name": "Davao Occidental",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-DAO",
    "name": "Davao Oriental",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-DIN",
    "name": "Dinagat Islands",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-EAS",
    "name": "Eastern Samar",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-08",
    "name": "Eastern Visayas (Region VIII)",
    "type": "Region"
  },
  {
    "countryCode": "PH",
    "code": "PH-GUI",
    "name": "Guimaras",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-IFU",
    "name": "Ifugao",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-01",
    "name": "Ilocos (Region I)",
    "type": "Region"
  },
  {
    "countryCode": "PH",
    "code": "PH-ILN",
    "name": "Ilocos Norte",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-ILS",
    "name": "Ilocos Sur",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-ILI",
    "name": "Iloilo",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-ISA",
    "name": "Isabela",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-KAL",
    "name": "Kalinga",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-LUN",
    "name": "La Union",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-LAG",
    "name": "Laguna",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-LAN",
    "name": "Lanao del Norte",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-LAS",
    "name": "Lanao del Sur",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-LEY",
    "name": "Leyte",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-MGN",
    "name": "Maguindanao del Norte",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-MGS",
    "name": "Maguindanao del Sur",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-MAD",
    "name": "Marinduque",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-MAS",
    "name": "Masbate",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-41",
    "name": "Mimaropa (Region IV-B)",
    "type": "Region"
  },
  {
    "countryCode": "PH",
    "code": "PH-MDC",
    "name": "Mindoro Occidental",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-MDR",
    "name": "Mindoro Oriental",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-MSC",
    "name": "Misamis Occidental",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-MSR",
    "name": "Misamis Oriental",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-MOU",
    "name": "Mountain Province",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-00",
    "name": "National Capital Region",
    "type": "Region"
  },
  {
    "countryCode": "PH",
    "code": "PH-NEC",
    "name": "Negros Occidental",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-NER",
    "name": "Negros Oriental",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-10",
    "name": "Northern Mindanao (Region X)",
    "type": "Region"
  },
  {
    "countryCode": "PH",
    "code": "PH-NSA",
    "name": "Northern Samar",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-NUE",
    "name": "Nueva Ecija",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-NUV",
    "name": "Nueva Vizcaya",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-PLW",
    "name": "Palawan",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-PAM",
    "name": "Pampanga",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-PAN",
    "name": "Pangasinan",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-QUE",
    "name": "Quezon",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-QUI",
    "name": "Quirino",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-RIZ",
    "name": "Rizal",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-ROM",
    "name": "Romblon",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-WSA",
    "name": "Samar",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-SAR",
    "name": "Sarangani",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-SIG",
    "name": "Siquijor",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-12",
    "name": "Soccsksargen (Region XII)",
    "type": "Region"
  },
  {
    "countryCode": "PH",
    "code": "PH-SOR",
    "name": "Sorsogon",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-SCO",
    "name": "South Cotabato",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-SLE",
    "name": "Southern Leyte",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-SUK",
    "name": "Sultan Kudarat",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-SLU",
    "name": "Sulu",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-SUN",
    "name": "Surigao del Norte",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-SUR",
    "name": "Surigao del Sur",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-TAR",
    "name": "Tarlac",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-TAW",
    "name": "Tawi-Tawi",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-06",
    "name": "Western Visayas (Region VI)",
    "type": "Region"
  },
  {
    "countryCode": "PH",
    "code": "PH-ZMB",
    "name": "Zambales",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-ZAN",
    "name": "Zamboanga del Norte",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-ZAS",
    "name": "Zamboanga del Sur",
    "type": "Province"
  },
  {
    "countryCode": "PH",
    "code": "PH-09",
    "name": "Zamboanga Peninsula (Region IX)",
    "type": "Region"
  },
  {
    "countryCode": "PH",
    "code": "PH-ZSI",
    "name": "Zamboanga Sibugay",
    "type": "Province"
  },
  {
    "countryCode": "PK",
    "code": "PK-JK",
    "name": "Azad Jammu and Kashmir",
    "type": "Pakistan administered area"
  },
  {
    "countryCode": "PK",
    "code": "PK-BA",
    "name": "Balochistan",
    "type": "Province"
  },
  {
    "countryCode": "PK",
    "code": "PK-GB",
    "name": "Gilgit-Baltistan",
    "type": "Pakistan administered area"
  },
  {
    "countryCode": "PK",
    "code": "PK-IS",
    "name": "Islamabad",
    "type": "Federal capital territory"
  },
  {
    "countryCode": "PK",
    "code": "PK-KP",
    "name": "Khyber Pakhtunkhwa",
    "type": "Province"
  },
  {
    "countryCode": "PK",
    "code": "PK-PB",
    "name": "Punjab",
    "type": "Province"
  },
  {
    "countryCode": "PK",
    "code": "PK-SD",
    "name": "Sindh",
    "type": "Province"
  },
  {
    "countryCode": "PL",
    "code": "PL-02",
    "name": "Dolnośląskie",
    "type": "Voivodship"
  },
  {
    "countryCode": "PL",
    "code": "PL-04",
    "name": "Kujawsko-Pomorskie",
    "type": "Voivodship"
  },
  {
    "countryCode": "PL",
    "code": "PL-06",
    "name": "Lubelskie",
    "type": "Voivodship"
  },
  {
    "countryCode": "PL",
    "code": "PL-08",
    "name": "Lubuskie",
    "type": "Voivodship"
  },
  {
    "countryCode": "PL",
    "code": "PL-14",
    "name": "Mazowieckie",
    "type": "Voivodship"
  },
  {
    "countryCode": "PL",
    "code": "PL-12",
    "name": "Małopolskie",
    "type": "Voivodship"
  },
  {
    "countryCode": "PL",
    "code": "PL-16",
    "name": "Opolskie",
    "type": "Voivodship"
  },
  {
    "countryCode": "PL",
    "code": "PL-18",
    "name": "Podkarpackie",
    "type": "Voivodship"
  },
  {
    "countryCode": "PL",
    "code": "PL-20",
    "name": "Podlaskie",
    "type": "Voivodship"
  },
  {
    "countryCode": "PL",
    "code": "PL-22",
    "name": "Pomorskie",
    "type": "Voivodship"
  },
  {
    "countryCode": "PL",
    "code": "PL-28",
    "name": "Warmińsko-Mazurskie",
    "type": "Voivodship"
  },
  {
    "countryCode": "PL",
    "code": "PL-30",
    "name": "Wielkopolskie",
    "type": "Voivodship"
  },
  {
    "countryCode": "PL",
    "code": "PL-32",
    "name": "Zachodniopomorskie",
    "type": "Voivodship"
  },
  {
    "countryCode": "PL",
    "code": "PL-10",
    "name": "Łódzkie",
    "type": "Voivodship"
  },
  {
    "countryCode": "PL",
    "code": "PL-24",
    "name": "Śląskie",
    "type": "Voivodship"
  },
  {
    "countryCode": "PL",
    "code": "PL-26",
    "name": "Świętokrzyskie",
    "type": "Voivodship"
  },
  {
    "countryCode": "PS",
    "code": "PS-BTH",
    "name": "Bethlehem",
    "type": "Governorate"
  },
  {
    "countryCode": "PS",
    "code": "PS-DEB",
    "name": "Deir El Balah",
    "type": "Governorate"
  },
  {
    "countryCode": "PS",
    "code": "PS-GZA",
    "name": "Gaza",
    "type": "Governorate"
  },
  {
    "countryCode": "PS",
    "code": "PS-HBN",
    "name": "Hebron",
    "type": "Governorate"
  },
  {
    "countryCode": "PS",
    "code": "PS-JEN",
    "name": "Jenin",
    "type": "Governorate"
  },
  {
    "countryCode": "PS",
    "code": "PS-JRH",
    "name": "Jericho and Al Aghwar",
    "type": "Governorate"
  },
  {
    "countryCode": "PS",
    "code": "PS-JEM",
    "name": "Jerusalem",
    "type": "Governorate"
  },
  {
    "countryCode": "PS",
    "code": "PS-KYS",
    "name": "Khan Yunis",
    "type": "Governorate"
  },
  {
    "countryCode": "PS",
    "code": "PS-NBS",
    "name": "Nablus",
    "type": "Governorate"
  },
  {
    "countryCode": "PS",
    "code": "PS-NGZ",
    "name": "North Gaza",
    "type": "Governorate"
  },
  {
    "countryCode": "PS",
    "code": "PS-QQA",
    "name": "Qalqilya",
    "type": "Governorate"
  },
  {
    "countryCode": "PS",
    "code": "PS-RFH",
    "name": "Rafah",
    "type": "Governorate"
  },
  {
    "countryCode": "PS",
    "code": "PS-RBH",
    "name": "Ramallah",
    "type": "Governorate"
  },
  {
    "countryCode": "PS",
    "code": "PS-SLT",
    "name": "Salfit",
    "type": "Governorate"
  },
  {
    "countryCode": "PS",
    "code": "PS-TBS",
    "name": "Tubas",
    "type": "Governorate"
  },
  {
    "countryCode": "PS",
    "code": "PS-TKM",
    "name": "Tulkarm",
    "type": "Governorate"
  },
  {
    "countryCode": "PT",
    "code": "PT-01",
    "name": "Aveiro",
    "type": "District"
  },
  {
    "countryCode": "PT",
    "code": "PT-02",
    "name": "Beja",
    "type": "District"
  },
  {
    "countryCode": "PT",
    "code": "PT-03",
    "name": "Braga",
    "type": "District"
  },
  {
    "countryCode": "PT",
    "code": "PT-04",
    "name": "Bragança",
    "type": "District"
  },
  {
    "countryCode": "PT",
    "code": "PT-05",
    "name": "Castelo Branco",
    "type": "District"
  },
  {
    "countryCode": "PT",
    "code": "PT-06",
    "name": "Coimbra",
    "type": "District"
  },
  {
    "countryCode": "PT",
    "code": "PT-08",
    "name": "Faro",
    "type": "District"
  },
  {
    "countryCode": "PT",
    "code": "PT-09",
    "name": "Guarda",
    "type": "District"
  },
  {
    "countryCode": "PT",
    "code": "PT-10",
    "name": "Leiria",
    "type": "District"
  },
  {
    "countryCode": "PT",
    "code": "PT-11",
    "name": "Lisboa",
    "type": "District"
  },
  {
    "countryCode": "PT",
    "code": "PT-12",
    "name": "Portalegre",
    "type": "District"
  },
  {
    "countryCode": "PT",
    "code": "PT-13",
    "name": "Porto",
    "type": "District"
  },
  {
    "countryCode": "PT",
    "code": "PT-30",
    "name": "Região Autónoma da Madeira",
    "type": "Autonomous region"
  },
  {
    "countryCode": "PT",
    "code": "PT-20",
    "name": "Região Autónoma dos Açores",
    "type": "Autonomous region"
  },
  {
    "countryCode": "PT",
    "code": "PT-14",
    "name": "Santarém",
    "type": "District"
  },
  {
    "countryCode": "PT",
    "code": "PT-15",
    "name": "Setúbal",
    "type": "District"
  },
  {
    "countryCode": "PT",
    "code": "PT-16",
    "name": "Viana do Castelo",
    "type": "District"
  },
  {
    "countryCode": "PT",
    "code": "PT-17",
    "name": "Vila Real",
    "type": "District"
  },
  {
    "countryCode": "PT",
    "code": "PT-18",
    "name": "Viseu",
    "type": "District"
  },
  {
    "countryCode": "PT",
    "code": "PT-07",
    "name": "Évora",
    "type": "District"
  },
  {
    "countryCode": "PW",
    "code": "PW-002",
    "name": "Aimeliik",
    "type": "State"
  },
  {
    "countryCode": "PW",
    "code": "PW-004",
    "name": "Airai",
    "type": "State"
  },
  {
    "countryCode": "PW",
    "code": "PW-010",
    "name": "Angaur",
    "type": "State"
  },
  {
    "countryCode": "PW",
    "code": "PW-050",
    "name": "Hatohobei",
    "type": "State"
  },
  {
    "countryCode": "PW",
    "code": "PW-100",
    "name": "Kayangel",
    "type": "State"
  },
  {
    "countryCode": "PW",
    "code": "PW-150",
    "name": "Koror",
    "type": "State"
  },
  {
    "countryCode": "PW",
    "code": "PW-212",
    "name": "Melekeok",
    "type": "State"
  },
  {
    "countryCode": "PW",
    "code": "PW-214",
    "name": "Ngaraard",
    "type": "State"
  },
  {
    "countryCode": "PW",
    "code": "PW-218",
    "name": "Ngarchelong",
    "type": "State"
  },
  {
    "countryCode": "PW",
    "code": "PW-222",
    "name": "Ngardmau",
    "type": "State"
  },
  {
    "countryCode": "PW",
    "code": "PW-224",
    "name": "Ngatpang",
    "type": "State"
  },
  {
    "countryCode": "PW",
    "code": "PW-226",
    "name": "Ngchesar",
    "type": "State"
  },
  {
    "countryCode": "PW",
    "code": "PW-227",
    "name": "Ngeremlengui",
    "type": "State"
  },
  {
    "countryCode": "PW",
    "code": "PW-228",
    "name": "Ngiwal",
    "type": "State"
  },
  {
    "countryCode": "PW",
    "code": "PW-350",
    "name": "Peleliu",
    "type": "State"
  },
  {
    "countryCode": "PW",
    "code": "PW-370",
    "name": "Sonsorol",
    "type": "State"
  },
  {
    "countryCode": "PY",
    "code": "PY-16",
    "name": "Alto Paraguay",
    "type": "Department"
  },
  {
    "countryCode": "PY",
    "code": "PY-10",
    "name": "Alto Paraná",
    "type": "Department"
  },
  {
    "countryCode": "PY",
    "code": "PY-13",
    "name": "Amambay",
    "type": "Department"
  },
  {
    "countryCode": "PY",
    "code": "PY-ASU",
    "name": "Asunción",
    "type": "Capital"
  },
  {
    "countryCode": "PY",
    "code": "PY-19",
    "name": "Boquerón",
    "type": "Department"
  },
  {
    "countryCode": "PY",
    "code": "PY-5",
    "name": "Caaguazú",
    "type": "Department"
  },
  {
    "countryCode": "PY",
    "code": "PY-6",
    "name": "Caazapá",
    "type": "Department"
  },
  {
    "countryCode": "PY",
    "code": "PY-14",
    "name": "Canindeyú",
    "type": "Department"
  },
  {
    "countryCode": "PY",
    "code": "PY-11",
    "name": "Central",
    "type": "Department"
  },
  {
    "countryCode": "PY",
    "code": "PY-1",
    "name": "Concepción",
    "type": "Department"
  },
  {
    "countryCode": "PY",
    "code": "PY-3",
    "name": "Cordillera",
    "type": "Department"
  },
  {
    "countryCode": "PY",
    "code": "PY-4",
    "name": "Guairá",
    "type": "Department"
  },
  {
    "countryCode": "PY",
    "code": "PY-7",
    "name": "Itapúa",
    "type": "Department"
  },
  {
    "countryCode": "PY",
    "code": "PY-8",
    "name": "Misiones",
    "type": "Department"
  },
  {
    "countryCode": "PY",
    "code": "PY-9",
    "name": "Paraguarí",
    "type": "Department"
  },
  {
    "countryCode": "PY",
    "code": "PY-15",
    "name": "Presidente Hayes",
    "type": "Department"
  },
  {
    "countryCode": "PY",
    "code": "PY-2",
    "name": "San Pedro",
    "type": "Department"
  },
  {
    "countryCode": "PY",
    "code": "PY-12",
    "name": "Ñeembucú",
    "type": "Department"
  },
  {
    "countryCode": "QA",
    "code": "QA-DA",
    "name": "Ad Dawḩah",
    "type": "Municipality"
  },
  {
    "countryCode": "QA",
    "code": "QA-KH",
    "name": "Al Khawr wa adh Dhakhīrah",
    "type": "Municipality"
  },
  {
    "countryCode": "QA",
    "code": "QA-WA",
    "name": "Al Wakrah",
    "type": "Municipality"
  },
  {
    "countryCode": "QA",
    "code": "QA-RA",
    "name": "Ar Rayyān",
    "type": "Municipality"
  },
  {
    "countryCode": "QA",
    "code": "QA-MS",
    "name": "Ash Shamāl",
    "type": "Municipality"
  },
  {
    "countryCode": "QA",
    "code": "QA-SH",
    "name": "Ash Shīḩānīyah",
    "type": "Municipality"
  },
  {
    "countryCode": "QA",
    "code": "QA-ZA",
    "name": "Az̧ Z̧a‘āyin",
    "type": "Municipality"
  },
  {
    "countryCode": "QA",
    "code": "QA-US",
    "name": "Umm Şalāl",
    "type": "Municipality"
  },
  {
    "countryCode": "RO",
    "code": "RO-AB",
    "name": "Alba",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-AR",
    "name": "Arad",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-AG",
    "name": "Argeș",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-BC",
    "name": "Bacău",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-BH",
    "name": "Bihor",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-BN",
    "name": "Bistrița-Năsăud",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-BT",
    "name": "Botoșani",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-BV",
    "name": "Brașov",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-BR",
    "name": "Brăila",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-B",
    "name": "București",
    "type": "Municipality"
  },
  {
    "countryCode": "RO",
    "code": "RO-BZ",
    "name": "Buzău",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-CS",
    "name": "Caraș-Severin",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-CJ",
    "name": "Cluj",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-CT",
    "name": "Constanța",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-CV",
    "name": "Covasna",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-CL",
    "name": "Călărași",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-DJ",
    "name": "Dolj",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-DB",
    "name": "Dâmbovița",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-GL",
    "name": "Galați",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-GR",
    "name": "Giurgiu",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-GJ",
    "name": "Gorj",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-HR",
    "name": "Harghita",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-HD",
    "name": "Hunedoara",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-IL",
    "name": "Ialomița",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-IS",
    "name": "Iași",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-IF",
    "name": "Ilfov",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-MM",
    "name": "Maramureș",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-MH",
    "name": "Mehedinți",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-MS",
    "name": "Mureș",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-NT",
    "name": "Neamț",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-OT",
    "name": "Olt",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-PH",
    "name": "Prahova",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-SM",
    "name": "Satu Mare",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-SB",
    "name": "Sibiu",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-SV",
    "name": "Suceava",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-SJ",
    "name": "Sălaj",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-TR",
    "name": "Teleorman",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-TM",
    "name": "Timiș",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-TL",
    "name": "Tulcea",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-VS",
    "name": "Vaslui",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-VN",
    "name": "Vrancea",
    "type": "Department"
  },
  {
    "countryCode": "RO",
    "code": "RO-VL",
    "name": "Vâlcea",
    "type": "Department"
  },
  {
    "countryCode": "RS",
    "code": "RS-00",
    "name": "Beograd",
    "type": "City"
  },
  {
    "countryCode": "RS",
    "code": "RS-14",
    "name": "Borski okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-11",
    "name": "Braničevski okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-23",
    "name": "Jablanički okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-04",
    "name": "Južnobanatski okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-06",
    "name": "Južnobački okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-09",
    "name": "Kolubarski okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-KM",
    "name": "Kosovo-Metohija",
    "type": "Autonomous province"
  },
  {
    "countryCode": "RS",
    "code": "RS-25",
    "name": "Kosovski okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-28",
    "name": "Kosovsko-Mitrovački okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-29",
    "name": "Kosovsko-Pomoravski okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-08",
    "name": "Mačvanski okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-17",
    "name": "Moravički okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-20",
    "name": "Nišavski okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-26",
    "name": "Pećki okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-22",
    "name": "Pirotski okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-10",
    "name": "Podunavski okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-13",
    "name": "Pomoravski okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-27",
    "name": "Prizrenski okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-24",
    "name": "Pčinjski okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-19",
    "name": "Rasinski okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-18",
    "name": "Raški okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-03",
    "name": "Severnobanatski okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-01",
    "name": "Severnobački okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-02",
    "name": "Srednjebanatski okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-07",
    "name": "Sremski okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-21",
    "name": "Toplički okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-VO",
    "name": "Vojvodina",
    "type": "Autonomous province"
  },
  {
    "countryCode": "RS",
    "code": "RS-15",
    "name": "Zaječarski okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-05",
    "name": "Zapadnobački okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-16",
    "name": "Zlatiborski okrug",
    "type": "District"
  },
  {
    "countryCode": "RS",
    "code": "RS-12",
    "name": "Šumadijski okrug",
    "type": "District"
  },
  {
    "countryCode": "RU",
    "code": "RU-AD",
    "name": "Adygeja, Respublika",
    "type": "Republic"
  },
  {
    "countryCode": "RU",
    "code": "RU-AL",
    "name": "Altaj, Respublika",
    "type": "Republic"
  },
  {
    "countryCode": "RU",
    "code": "RU-ALT",
    "name": "Altajskij kraj",
    "type": "Administrative territory"
  },
  {
    "countryCode": "RU",
    "code": "RU-AMU",
    "name": "Amurskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-ARK",
    "name": "Arhangel'skaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-AST",
    "name": "Astrahanskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-BA",
    "name": "Bashkortostan, Respublika",
    "type": "Republic"
  },
  {
    "countryCode": "RU",
    "code": "RU-BEL",
    "name": "Belgorodskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-BRY",
    "name": "Brjanskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-BU",
    "name": "Burjatija, Respublika",
    "type": "Republic"
  },
  {
    "countryCode": "RU",
    "code": "RU-CE",
    "name": "Chechenskaya Respublika",
    "type": "Republic"
  },
  {
    "countryCode": "RU",
    "code": "RU-CHE",
    "name": "Chelyabinskaya oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-CHU",
    "name": "Chukotskiy avtonomnyy okrug",
    "type": "Autonomous district"
  },
  {
    "countryCode": "RU",
    "code": "RU-CU",
    "name": "Chuvashskaya Respublika",
    "type": "Republic"
  },
  {
    "countryCode": "RU",
    "code": "RU-DA",
    "name": "Dagestan, Respublika",
    "type": "Republic"
  },
  {
    "countryCode": "RU",
    "code": "RU-YEV",
    "name": "Evrejskaja avtonomnaja oblast'",
    "type": "Autonomous region"
  },
  {
    "countryCode": "RU",
    "code": "RU-KHA",
    "name": "Habarovskij kraj",
    "type": "Administrative territory"
  },
  {
    "countryCode": "RU",
    "code": "RU-KK",
    "name": "Hakasija, Respublika",
    "type": "Republic"
  },
  {
    "countryCode": "RU",
    "code": "RU-KHM",
    "name": "Hanty-Mansijskij avtonomnyj okrug",
    "type": "Autonomous district"
  },
  {
    "countryCode": "RU",
    "code": "RU-IN",
    "name": "Ingushetiya, Respublika",
    "type": "Republic"
  },
  {
    "countryCode": "RU",
    "code": "RU-IRK",
    "name": "Irkutskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-IVA",
    "name": "Ivanovskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-YAN",
    "name": "Jamalo-Neneckij avtonomnyj okrug",
    "type": "Autonomous district"
  },
  {
    "countryCode": "RU",
    "code": "RU-YAR",
    "name": "Jaroslavskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-KB",
    "name": "Kabardino-Balkarskaja Respublika",
    "type": "Republic"
  },
  {
    "countryCode": "RU",
    "code": "RU-KGD",
    "name": "Kaliningradskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-KL",
    "name": "Kalmykija, Respublika",
    "type": "Republic"
  },
  {
    "countryCode": "RU",
    "code": "RU-KLU",
    "name": "Kaluzhskaya oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-KAM",
    "name": "Kamchatskiy kray",
    "type": "Administrative territory"
  },
  {
    "countryCode": "RU",
    "code": "RU-KC",
    "name": "Karachayevo-Cherkesskaya Respublika",
    "type": "Republic"
  },
  {
    "countryCode": "RU",
    "code": "RU-KR",
    "name": "Karelija, Respublika",
    "type": "Republic"
  },
  {
    "countryCode": "RU",
    "code": "RU-KEM",
    "name": "Kemerovskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-KIR",
    "name": "Kirovskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-KO",
    "name": "Komi, Respublika",
    "type": "Republic"
  },
  {
    "countryCode": "RU",
    "code": "RU-KOS",
    "name": "Kostromskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-KDA",
    "name": "Krasnodarskij kraj",
    "type": "Administrative territory"
  },
  {
    "countryCode": "RU",
    "code": "RU-KYA",
    "name": "Krasnojarskij kraj",
    "type": "Administrative territory"
  },
  {
    "countryCode": "RU",
    "code": "RU-KGN",
    "name": "Kurganskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-KRS",
    "name": "Kurskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-LEN",
    "name": "Leningradskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-LIP",
    "name": "Lipeckaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-MAG",
    "name": "Magadanskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-ME",
    "name": "Marij Èl, Respublika",
    "type": "Republic"
  },
  {
    "countryCode": "RU",
    "code": "RU-MO",
    "name": "Mordovija, Respublika",
    "type": "Republic"
  },
  {
    "countryCode": "RU",
    "code": "RU-MOS",
    "name": "Moskovskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-MOW",
    "name": "Moskva",
    "type": "Autonomous city"
  },
  {
    "countryCode": "RU",
    "code": "RU-MUR",
    "name": "Murmanskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-NEN",
    "name": "Neneckij avtonomnyj okrug",
    "type": "Autonomous district"
  },
  {
    "countryCode": "RU",
    "code": "RU-NIZ",
    "name": "Nizhegorodskaya oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-NGR",
    "name": "Novgorodskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-NVS",
    "name": "Novosibirskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-OMS",
    "name": "Omskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-ORE",
    "name": "Orenburgskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-ORL",
    "name": "Orlovskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-PNZ",
    "name": "Penzenskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-PER",
    "name": "Permskij kraj",
    "type": "Administrative territory"
  },
  {
    "countryCode": "RU",
    "code": "RU-PRI",
    "name": "Primorskij kraj",
    "type": "Administrative territory"
  },
  {
    "countryCode": "RU",
    "code": "RU-PSK",
    "name": "Pskovskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-RYA",
    "name": "Rjazanskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-ROS",
    "name": "Rostovskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-SA",
    "name": "Saha, Respublika",
    "type": "Republic"
  },
  {
    "countryCode": "RU",
    "code": "RU-SAK",
    "name": "Sahalinskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-SAM",
    "name": "Samarskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-SPE",
    "name": "Sankt-Peterburg",
    "type": "Autonomous city"
  },
  {
    "countryCode": "RU",
    "code": "RU-SAR",
    "name": "Saratovskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-SE",
    "name": "Severnaja Osetija, Respublika",
    "type": "Republic"
  },
  {
    "countryCode": "RU",
    "code": "RU-SMO",
    "name": "Smolenskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-STA",
    "name": "Stavropol'skij kraj",
    "type": "Administrative territory"
  },
  {
    "countryCode": "RU",
    "code": "RU-SVE",
    "name": "Sverdlovskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-TAM",
    "name": "Tambovskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-TA",
    "name": "Tatarstan, Respublika",
    "type": "Republic"
  },
  {
    "countryCode": "RU",
    "code": "RU-TYU",
    "name": "Tjumenskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-TOM",
    "name": "Tomskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-TUL",
    "name": "Tul'skaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-TVE",
    "name": "Tverskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-TY",
    "name": "Tyva, Respublika",
    "type": "Republic"
  },
  {
    "countryCode": "RU",
    "code": "RU-UD",
    "name": "Udmurtskaja Respublika",
    "type": "Republic"
  },
  {
    "countryCode": "RU",
    "code": "RU-ULY",
    "name": "Ul'janovskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-VLA",
    "name": "Vladimirskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-VGG",
    "name": "Volgogradskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-VLG",
    "name": "Vologodskaja oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-VOR",
    "name": "Voronezhskaya oblast'",
    "type": "Administrative region"
  },
  {
    "countryCode": "RU",
    "code": "RU-ZAB",
    "name": "Zabajkal'skij kraj",
    "type": "Administrative territory"
  },
  {
    "countryCode": "RW",
    "code": "RW-01",
    "name": "City of Kigali",
    "type": "City"
  },
  {
    "countryCode": "RW",
    "code": "RW-02",
    "name": "Eastern",
    "type": "Province"
  },
  {
    "countryCode": "RW",
    "code": "RW-03",
    "name": "Northern",
    "type": "Province"
  },
  {
    "countryCode": "RW",
    "code": "RW-05",
    "name": "Southern",
    "type": "Province"
  },
  {
    "countryCode": "RW",
    "code": "RW-04",
    "name": "Western",
    "type": "Province"
  },
  {
    "countryCode": "SA",
    "code": "SA-14",
    "name": "'Asīr",
    "type": "Region"
  },
  {
    "countryCode": "SA",
    "code": "SA-11",
    "name": "Al Bāḩah",
    "type": "Region"
  },
  {
    "countryCode": "SA",
    "code": "SA-12",
    "name": "Al Jawf",
    "type": "Region"
  },
  {
    "countryCode": "SA",
    "code": "SA-03",
    "name": "Al Madīnah al Munawwarah",
    "type": "Region"
  },
  {
    "countryCode": "SA",
    "code": "SA-05",
    "name": "Al Qaşīm",
    "type": "Region"
  },
  {
    "countryCode": "SA",
    "code": "SA-08",
    "name": "Al Ḩudūd ash Shamālīyah",
    "type": "Region"
  },
  {
    "countryCode": "SA",
    "code": "SA-01",
    "name": "Ar Riyāḑ",
    "type": "Region"
  },
  {
    "countryCode": "SA",
    "code": "SA-04",
    "name": "Ash Sharqīyah",
    "type": "Region"
  },
  {
    "countryCode": "SA",
    "code": "SA-09",
    "name": "Jāzān",
    "type": "Region"
  },
  {
    "countryCode": "SA",
    "code": "SA-02",
    "name": "Makkah al Mukarramah",
    "type": "Region"
  },
  {
    "countryCode": "SA",
    "code": "SA-10",
    "name": "Najrān",
    "type": "Region"
  },
  {
    "countryCode": "SA",
    "code": "SA-07",
    "name": "Tabūk",
    "type": "Region"
  },
  {
    "countryCode": "SA",
    "code": "SA-06",
    "name": "Ḩā'il",
    "type": "Region"
  },
  {
    "countryCode": "SB",
    "code": "SB-CT",
    "name": "Capital Territory (Honiara)",
    "type": "Capital territory"
  },
  {
    "countryCode": "SB",
    "code": "SB-CE",
    "name": "Central",
    "type": "Province"
  },
  {
    "countryCode": "SB",
    "code": "SB-CH",
    "name": "Choiseul",
    "type": "Province"
  },
  {
    "countryCode": "SB",
    "code": "SB-GU",
    "name": "Guadalcanal",
    "type": "Province"
  },
  {
    "countryCode": "SB",
    "code": "SB-IS",
    "name": "Isabel",
    "type": "Province"
  },
  {
    "countryCode": "SB",
    "code": "SB-MK",
    "name": "Makira-Ulawa",
    "type": "Province"
  },
  {
    "countryCode": "SB",
    "code": "SB-ML",
    "name": "Malaita",
    "type": "Province"
  },
  {
    "countryCode": "SB",
    "code": "SB-RB",
    "name": "Rennell and Bellona",
    "type": "Province"
  },
  {
    "countryCode": "SB",
    "code": "SB-TE",
    "name": "Temotu",
    "type": "Province"
  },
  {
    "countryCode": "SB",
    "code": "SB-WE",
    "name": "Western",
    "type": "Province"
  },
  {
    "countryCode": "SC",
    "code": "SC-01",
    "name": "Anse aux Pins",
    "type": "District"
  },
  {
    "countryCode": "SC",
    "code": "SC-02",
    "name": "Anse Boileau",
    "type": "District"
  },
  {
    "countryCode": "SC",
    "code": "SC-03",
    "name": "Anse Etoile",
    "type": "District"
  },
  {
    "countryCode": "SC",
    "code": "SC-05",
    "name": "Anse Royale",
    "type": "District"
  },
  {
    "countryCode": "SC",
    "code": "SC-04",
    "name": "Au Cap",
    "type": "District"
  },
  {
    "countryCode": "SC",
    "code": "SC-06",
    "name": "Baie Lazare",
    "type": "District"
  },
  {
    "countryCode": "SC",
    "code": "SC-07",
    "name": "Baie Sainte Anne",
    "type": "District"
  },
  {
    "countryCode": "SC",
    "code": "SC-08",
    "name": "Beau Vallon",
    "type": "District"
  },
  {
    "countryCode": "SC",
    "code": "SC-09",
    "name": "Bel Air",
    "type": "District"
  },
  {
    "countryCode": "SC",
    "code": "SC-10",
    "name": "Bel Ombre",
    "type": "District"
  },
  {
    "countryCode": "SC",
    "code": "SC-11",
    "name": "Cascade",
    "type": "District"
  },
  {
    "countryCode": "SC",
    "code": "SC-16",
    "name": "English River",
    "type": "District"
  },
  {
    "countryCode": "SC",
    "code": "SC-12",
    "name": "Glacis",
    "type": "District"
  },
  {
    "countryCode": "SC",
    "code": "SC-13",
    "name": "Grand Anse Mahe",
    "type": "District"
  },
  {
    "countryCode": "SC",
    "code": "SC-14",
    "name": "Grand Anse Praslin",
    "type": "District"
  },
  {
    "countryCode": "SC",
    "code": "SC-26",
    "name": "Ile Perseverance I",
    "type": "District"
  },
  {
    "countryCode": "SC",
    "code": "SC-27",
    "name": "Ile Perseverance II",
    "type": "District"
  },
  {
    "countryCode": "SC",
    "code": "SC-15",
    "name": "La Digue",
    "type": "District"
  },
  {
    "countryCode": "SC",
    "code": "SC-24",
    "name": "Les Mamelles",
    "type": "District"
  },
  {
    "countryCode": "SC",
    "code": "SC-17",
    "name": "Mont Buxton",
    "type": "District"
  },
  {
    "countryCode": "SC",
    "code": "SC-18",
    "name": "Mont Fleuri",
    "type": "District"
  },
  {
    "countryCode": "SC",
    "code": "SC-19",
    "name": "Plaisance",
    "type": "District"
  },
  {
    "countryCode": "SC",
    "code": "SC-20",
    "name": "Pointe Larue",
    "type": "District"
  },
  {
    "countryCode": "SC",
    "code": "SC-21",
    "name": "Port Glaud",
    "type": "District"
  },
  {
    "countryCode": "SC",
    "code": "SC-25",
    "name": "Roche Caiman",
    "type": "District"
  },
  {
    "countryCode": "SC",
    "code": "SC-22",
    "name": "Saint Louis",
    "type": "District"
  },
  {
    "countryCode": "SC",
    "code": "SC-23",
    "name": "Takamaka",
    "type": "District"
  },
  {
    "countryCode": "SD",
    "code": "SD-NB",
    "name": "Blue Nile",
    "type": "State"
  },
  {
    "countryCode": "SD",
    "code": "SD-DC",
    "name": "Central Darfur",
    "type": "State"
  },
  {
    "countryCode": "SD",
    "code": "SD-DE",
    "name": "East Darfur",
    "type": "State"
  },
  {
    "countryCode": "SD",
    "code": "SD-GD",
    "name": "Gedaref",
    "type": "State"
  },
  {
    "countryCode": "SD",
    "code": "SD-GZ",
    "name": "Gezira",
    "type": "State"
  },
  {
    "countryCode": "SD",
    "code": "SD-KA",
    "name": "Kassala",
    "type": "State"
  },
  {
    "countryCode": "SD",
    "code": "SD-KH",
    "name": "Khartoum",
    "type": "State"
  },
  {
    "countryCode": "SD",
    "code": "SD-DN",
    "name": "North Darfur",
    "type": "State"
  },
  {
    "countryCode": "SD",
    "code": "SD-KN",
    "name": "North Kordofan",
    "type": "State"
  },
  {
    "countryCode": "SD",
    "code": "SD-NO",
    "name": "Northern",
    "type": "State"
  },
  {
    "countryCode": "SD",
    "code": "SD-RS",
    "name": "Red Sea",
    "type": "State"
  },
  {
    "countryCode": "SD",
    "code": "SD-NR",
    "name": "River Nile",
    "type": "State"
  },
  {
    "countryCode": "SD",
    "code": "SD-SI",
    "name": "Sennar",
    "type": "State"
  },
  {
    "countryCode": "SD",
    "code": "SD-DS",
    "name": "South Darfur",
    "type": "State"
  },
  {
    "countryCode": "SD",
    "code": "SD-KS",
    "name": "South Kordofan",
    "type": "State"
  },
  {
    "countryCode": "SD",
    "code": "SD-DW",
    "name": "West Darfur",
    "type": "State"
  },
  {
    "countryCode": "SD",
    "code": "SD-GK",
    "name": "West Kordofan",
    "type": "State"
  },
  {
    "countryCode": "SD",
    "code": "SD-NW",
    "name": "White Nile",
    "type": "State"
  },
  {
    "countryCode": "SE",
    "code": "SE-K",
    "name": "Blekinge län [SE-10]",
    "type": "County"
  },
  {
    "countryCode": "SE",
    "code": "SE-W",
    "name": "Dalarnas län [SE-20]",
    "type": "County"
  },
  {
    "countryCode": "SE",
    "code": "SE-I",
    "name": "Gotlands län [SE-09]",
    "type": "County"
  },
  {
    "countryCode": "SE",
    "code": "SE-X",
    "name": "Gävleborgs län [SE-21]",
    "type": "County"
  },
  {
    "countryCode": "SE",
    "code": "SE-N",
    "name": "Hallands län [SE-13]",
    "type": "County"
  },
  {
    "countryCode": "SE",
    "code": "SE-Z",
    "name": "Jämtlands län [SE-23]",
    "type": "County"
  },
  {
    "countryCode": "SE",
    "code": "SE-F",
    "name": "Jönköpings län [SE-06]",
    "type": "County"
  },
  {
    "countryCode": "SE",
    "code": "SE-H",
    "name": "Kalmar län [SE-08]",
    "type": "County"
  },
  {
    "countryCode": "SE",
    "code": "SE-G",
    "name": "Kronobergs län [SE-07]",
    "type": "County"
  },
  {
    "countryCode": "SE",
    "code": "SE-BD",
    "name": "Norrbottens län [SE-25]",
    "type": "County"
  },
  {
    "countryCode": "SE",
    "code": "SE-M",
    "name": "Skåne län [SE-12]",
    "type": "County"
  },
  {
    "countryCode": "SE",
    "code": "SE-AB",
    "name": "Stockholms län [SE-01]",
    "type": "County"
  },
  {
    "countryCode": "SE",
    "code": "SE-D",
    "name": "Södermanlands län [SE-04]",
    "type": "County"
  },
  {
    "countryCode": "SE",
    "code": "SE-C",
    "name": "Uppsala län [SE-03]",
    "type": "County"
  },
  {
    "countryCode": "SE",
    "code": "SE-S",
    "name": "Värmlands län [SE-17]",
    "type": "County"
  },
  {
    "countryCode": "SE",
    "code": "SE-AC",
    "name": "Västerbottens län [SE-24]",
    "type": "County"
  },
  {
    "countryCode": "SE",
    "code": "SE-Y",
    "name": "Västernorrlands län [SE-22]",
    "type": "County"
  },
  {
    "countryCode": "SE",
    "code": "SE-U",
    "name": "Västmanlands län [SE-19]",
    "type": "County"
  },
  {
    "countryCode": "SE",
    "code": "SE-O",
    "name": "Västra Götalands län [SE-14]",
    "type": "County"
  },
  {
    "countryCode": "SE",
    "code": "SE-T",
    "name": "Örebro län [SE-18]",
    "type": "County"
  },
  {
    "countryCode": "SE",
    "code": "SE-E",
    "name": "Östergötlands län [SE-05]",
    "type": "County"
  },
  {
    "countryCode": "SG",
    "code": "SG-01",
    "name": "Central Singapore",
    "type": "District"
  },
  {
    "countryCode": "SG",
    "code": "SG-02",
    "name": "North East",
    "type": "District"
  },
  {
    "countryCode": "SG",
    "code": "SG-03",
    "name": "North West",
    "type": "District"
  },
  {
    "countryCode": "SG",
    "code": "SG-04",
    "name": "South East",
    "type": "District"
  },
  {
    "countryCode": "SG",
    "code": "SG-05",
    "name": "South West",
    "type": "District"
  },
  {
    "countryCode": "SH",
    "code": "SH-AC",
    "name": "Ascension",
    "type": "Geographical entity"
  },
  {
    "countryCode": "SH",
    "code": "SH-HL",
    "name": "Saint Helena",
    "type": "Geographical entity"
  },
  {
    "countryCode": "SH",
    "code": "SH-TA",
    "name": "Tristan da Cunha",
    "type": "Geographical entity"
  },
  {
    "countryCode": "SI",
    "code": "SI-001",
    "name": "Ajdovščina",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-213",
    "name": "Ankaran",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-195",
    "name": "Apače",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-002",
    "name": "Beltinci",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-148",
    "name": "Benedikt",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-149",
    "name": "Bistrica ob Sotli",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-003",
    "name": "Bled",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-150",
    "name": "Bloke",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-004",
    "name": "Bohinj",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-005",
    "name": "Borovnica",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-006",
    "name": "Bovec",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-151",
    "name": "Braslovče",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-007",
    "name": "Brda",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-008",
    "name": "Brezovica",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-009",
    "name": "Brežice",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-152",
    "name": "Cankova",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-011",
    "name": "Celje",
    "type": "Urban municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-012",
    "name": "Cerklje na Gorenjskem",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-013",
    "name": "Cerknica",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-014",
    "name": "Cerkno",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-153",
    "name": "Cerkvenjak",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-196",
    "name": "Cirkulane",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-018",
    "name": "Destrnik",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-019",
    "name": "Divača",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-154",
    "name": "Dobje",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-020",
    "name": "Dobrepolje",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-155",
    "name": "Dobrna",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-021",
    "name": "Dobrova-Polhov Gradec",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-156",
    "name": "Dobrovnik",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-022",
    "name": "Dol pri Ljubljani",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-157",
    "name": "Dolenjske Toplice",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-023",
    "name": "Domžale",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-024",
    "name": "Dornava",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-025",
    "name": "Dravograd",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-026",
    "name": "Duplek",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-027",
    "name": "Gorenja vas-Poljane",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-028",
    "name": "Gorišnica",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-207",
    "name": "Gorje",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-029",
    "name": "Gornja Radgona",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-030",
    "name": "Gornji Grad",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-031",
    "name": "Gornji Petrovci",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-158",
    "name": "Grad",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-032",
    "name": "Grosuplje",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-159",
    "name": "Hajdina",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-161",
    "name": "Hodoš",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-162",
    "name": "Horjul",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-160",
    "name": "Hoče-Slivnica",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-034",
    "name": "Hrastnik",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-035",
    "name": "Hrpelje-Kozina",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-036",
    "name": "Idrija",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-037",
    "name": "Ig",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-038",
    "name": "Ilirska Bistrica",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-039",
    "name": "Ivančna Gorica",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-040",
    "name": "Izola",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-041",
    "name": "Jesenice",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-163",
    "name": "Jezersko",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-042",
    "name": "Juršinci",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-043",
    "name": "Kamnik",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-044",
    "name": "Kanal ob Soči",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-045",
    "name": "Kidričevo",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-046",
    "name": "Kobarid",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-047",
    "name": "Kobilje",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-049",
    "name": "Komen",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-164",
    "name": "Komenda",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-050",
    "name": "Koper",
    "type": "Urban municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-197",
    "name": "Kostanjevica na Krki",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-165",
    "name": "Kostel",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-051",
    "name": "Kozje",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-048",
    "name": "Kočevje",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-052",
    "name": "Kranj",
    "type": "Urban municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-053",
    "name": "Kranjska Gora",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-166",
    "name": "Križevci",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-054",
    "name": "Krško",
    "type": "Urban municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-055",
    "name": "Kungota",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-056",
    "name": "Kuzma",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-057",
    "name": "Laško",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-058",
    "name": "Lenart",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-059",
    "name": "Lendava",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-060",
    "name": "Litija",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-061",
    "name": "Ljubljana",
    "type": "Urban municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-062",
    "name": "Ljubno",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-063",
    "name": "Ljutomer",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-208",
    "name": "Log-Dragomer",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-064",
    "name": "Logatec",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-167",
    "name": "Lovrenc na Pohorju",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-065",
    "name": "Loška dolina",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-066",
    "name": "Loški Potok",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-068",
    "name": "Lukovica",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-067",
    "name": "Luče",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-069",
    "name": "Majšperk",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-198",
    "name": "Makole",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-070",
    "name": "Maribor",
    "type": "Urban municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-168",
    "name": "Markovci",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-071",
    "name": "Medvode",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-072",
    "name": "Mengeš",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-073",
    "name": "Metlika",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-074",
    "name": "Mežica",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-169",
    "name": "Miklavž na Dravskem polju",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-075",
    "name": "Miren-Kostanjevica",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-212",
    "name": "Mirna",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-170",
    "name": "Mirna Peč",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-076",
    "name": "Mislinja",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-199",
    "name": "Mokronog-Trebelno",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-078",
    "name": "Moravske Toplice",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-077",
    "name": "Moravče",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-079",
    "name": "Mozirje",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-080",
    "name": "Murska Sobota",
    "type": "Urban municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-081",
    "name": "Muta",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-082",
    "name": "Naklo",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-083",
    "name": "Nazarje",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-084",
    "name": "Nova Gorica",
    "type": "Urban municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-085",
    "name": "Novo Mesto",
    "type": "Urban municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-086",
    "name": "Odranci",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-171",
    "name": "Oplotnica",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-087",
    "name": "Ormož",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-088",
    "name": "Osilnica",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-089",
    "name": "Pesnica",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-090",
    "name": "Piran",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-091",
    "name": "Pivka",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-172",
    "name": "Podlehnik",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-093",
    "name": "Podvelka",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-092",
    "name": "Podčetrtek",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-200",
    "name": "Poljčane",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-173",
    "name": "Polzela",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-094",
    "name": "Postojna",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-174",
    "name": "Prebold",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-095",
    "name": "Preddvor",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-175",
    "name": "Prevalje",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-096",
    "name": "Ptuj",
    "type": "Urban municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-097",
    "name": "Puconci",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-100",
    "name": "Radenci",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-099",
    "name": "Radeče",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-101",
    "name": "Radlje ob Dravi",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-102",
    "name": "Radovljica",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-103",
    "name": "Ravne na Koroškem",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-176",
    "name": "Razkrižje",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-098",
    "name": "Rače-Fram",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-201",
    "name": "Renče-Vogrsko",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-209",
    "name": "Rečica ob Savinji",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-104",
    "name": "Ribnica",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-177",
    "name": "Ribnica na Pohorju",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-107",
    "name": "Rogatec",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-106",
    "name": "Rogaška Slatina",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-105",
    "name": "Rogašovci",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-108",
    "name": "Ruše",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-178",
    "name": "Selnica ob Dravi",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-109",
    "name": "Semič",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-110",
    "name": "Sevnica",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-111",
    "name": "Sežana",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-112",
    "name": "Slovenj Gradec",
    "type": "Urban municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-113",
    "name": "Slovenska Bistrica",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-114",
    "name": "Slovenske Konjice",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-179",
    "name": "Sodražica",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-180",
    "name": "Solčava",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-202",
    "name": "Središče ob Dravi",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-115",
    "name": "Starše",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-203",
    "name": "Straža",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-181",
    "name": "Sveta Ana",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-204",
    "name": "Sveta Trojica v Slovenskih goricah",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-182",
    "name": "Sveti Andraž v Slovenskih goricah",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-116",
    "name": "Sveti Jurij ob Ščavnici",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-210",
    "name": "Sveti Jurij v Slovenskih goricah",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-205",
    "name": "Sveti Tomaž",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-184",
    "name": "Tabor",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-010",
    "name": "Tišina",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-128",
    "name": "Tolmin",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-129",
    "name": "Trbovlje",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-130",
    "name": "Trebnje",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-185",
    "name": "Trnovska Vas",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-186",
    "name": "Trzin",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-131",
    "name": "Tržič",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-132",
    "name": "Turnišče",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-133",
    "name": "Velenje",
    "type": "Urban municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-187",
    "name": "Velika Polana",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-134",
    "name": "Velike Lašče",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-188",
    "name": "Veržej",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-135",
    "name": "Videm",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-136",
    "name": "Vipava",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-137",
    "name": "Vitanje",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-138",
    "name": "Vodice",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-139",
    "name": "Vojnik",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-189",
    "name": "Vransko",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-140",
    "name": "Vrhnika",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-141",
    "name": "Vuzenica",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-142",
    "name": "Zagorje ob Savi",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-143",
    "name": "Zavrč",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-144",
    "name": "Zreče",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-015",
    "name": "Črenšovci",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-016",
    "name": "Črna na Koroškem",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-017",
    "name": "Črnomelj",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-033",
    "name": "Šalovci",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-183",
    "name": "Šempeter-Vrtojba",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-118",
    "name": "Šentilj",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-119",
    "name": "Šentjernej",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-120",
    "name": "Šentjur",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-211",
    "name": "Šentrupert",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-117",
    "name": "Šenčur",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-121",
    "name": "Škocjan",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-122",
    "name": "Škofja Loka",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-123",
    "name": "Škofljica",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-124",
    "name": "Šmarje pri Jelšah",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-206",
    "name": "Šmarješke Toplice",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-125",
    "name": "Šmartno ob Paki",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-194",
    "name": "Šmartno pri Litiji",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-126",
    "name": "Šoštanj",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-127",
    "name": "Štore",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-190",
    "name": "Žalec",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-146",
    "name": "Železniki",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-191",
    "name": "Žetale",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-147",
    "name": "Žiri",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-192",
    "name": "Žirovnica",
    "type": "Municipality"
  },
  {
    "countryCode": "SI",
    "code": "SI-193",
    "name": "Žužemberk",
    "type": "Municipality"
  },
  {
    "countryCode": "SK",
    "code": "SK-BC",
    "name": "Banskobystrický kraj",
    "type": "Region"
  },
  {
    "countryCode": "SK",
    "code": "SK-BL",
    "name": "Bratislavský kraj",
    "type": "Region"
  },
  {
    "countryCode": "SK",
    "code": "SK-KI",
    "name": "Košický kraj",
    "type": "Region"
  },
  {
    "countryCode": "SK",
    "code": "SK-NI",
    "name": "Nitriansky kraj",
    "type": "Region"
  },
  {
    "countryCode": "SK",
    "code": "SK-PV",
    "name": "Prešovský kraj",
    "type": "Region"
  },
  {
    "countryCode": "SK",
    "code": "SK-TC",
    "name": "Trenčiansky kraj",
    "type": "Region"
  },
  {
    "countryCode": "SK",
    "code": "SK-TA",
    "name": "Trnavský kraj",
    "type": "Region"
  },
  {
    "countryCode": "SK",
    "code": "SK-ZI",
    "name": "Žilinský kraj",
    "type": "Region"
  },
  {
    "countryCode": "SL",
    "code": "SL-E",
    "name": "Eastern",
    "type": "Province"
  },
  {
    "countryCode": "SL",
    "code": "SL-NW",
    "name": "North Western",
    "type": "Province"
  },
  {
    "countryCode": "SL",
    "code": "SL-N",
    "name": "Northern",
    "type": "Province"
  },
  {
    "countryCode": "SL",
    "code": "SL-S",
    "name": "Southern",
    "type": "Province"
  },
  {
    "countryCode": "SL",
    "code": "SL-W",
    "name": "Western Area (Freetown)",
    "type": "Area"
  },
  {
    "countryCode": "SM",
    "code": "SM-01",
    "name": "Acquaviva",
    "type": "Municipality"
  },
  {
    "countryCode": "SM",
    "code": "SM-06",
    "name": "Borgo Maggiore",
    "type": "Municipality"
  },
  {
    "countryCode": "SM",
    "code": "SM-02",
    "name": "Chiesanuova",
    "type": "Municipality"
  },
  {
    "countryCode": "SM",
    "code": "SM-07",
    "name": "Città di San Marino",
    "type": "Municipality"
  },
  {
    "countryCode": "SM",
    "code": "SM-03",
    "name": "Domagnano",
    "type": "Municipality"
  },
  {
    "countryCode": "SM",
    "code": "SM-04",
    "name": "Faetano",
    "type": "Municipality"
  },
  {
    "countryCode": "SM",
    "code": "SM-05",
    "name": "Fiorentino",
    "type": "Municipality"
  },
  {
    "countryCode": "SM",
    "code": "SM-08",
    "name": "Montegiardino",
    "type": "Municipality"
  },
  {
    "countryCode": "SM",
    "code": "SM-09",
    "name": "Serravalle",
    "type": "Municipality"
  },
  {
    "countryCode": "SN",
    "code": "SN-DK",
    "name": "Dakar",
    "type": "Region"
  },
  {
    "countryCode": "SN",
    "code": "SN-DB",
    "name": "Diourbel",
    "type": "Region"
  },
  {
    "countryCode": "SN",
    "code": "SN-FK",
    "name": "Fatick",
    "type": "Region"
  },
  {
    "countryCode": "SN",
    "code": "SN-KA",
    "name": "Kaffrine",
    "type": "Region"
  },
  {
    "countryCode": "SN",
    "code": "SN-KL",
    "name": "Kaolack",
    "type": "Region"
  },
  {
    "countryCode": "SN",
    "code": "SN-KD",
    "name": "Kolda",
    "type": "Region"
  },
  {
    "countryCode": "SN",
    "code": "SN-KE",
    "name": "Kédougou",
    "type": "Region"
  },
  {
    "countryCode": "SN",
    "code": "SN-LG",
    "name": "Louga",
    "type": "Region"
  },
  {
    "countryCode": "SN",
    "code": "SN-MT",
    "name": "Matam",
    "type": "Region"
  },
  {
    "countryCode": "SN",
    "code": "SN-SL",
    "name": "Saint-Louis",
    "type": "Region"
  },
  {
    "countryCode": "SN",
    "code": "SN-SE",
    "name": "Sédhiou",
    "type": "Region"
  },
  {
    "countryCode": "SN",
    "code": "SN-TC",
    "name": "Tambacounda",
    "type": "Region"
  },
  {
    "countryCode": "SN",
    "code": "SN-TH",
    "name": "Thiès",
    "type": "Region"
  },
  {
    "countryCode": "SN",
    "code": "SN-ZG",
    "name": "Ziguinchor",
    "type": "Region"
  },
  {
    "countryCode": "SO",
    "code": "SO-AW",
    "name": "Awdal",
    "type": "Region"
  },
  {
    "countryCode": "SO",
    "code": "SO-BK",
    "name": "Bakool",
    "type": "Region"
  },
  {
    "countryCode": "SO",
    "code": "SO-BN",
    "name": "Banaadir",
    "type": "Region"
  },
  {
    "countryCode": "SO",
    "code": "SO-BR",
    "name": "Bari",
    "type": "Region"
  },
  {
    "countryCode": "SO",
    "code": "SO-BY",
    "name": "Bay",
    "type": "Region"
  },
  {
    "countryCode": "SO",
    "code": "SO-GA",
    "name": "Galguduud",
    "type": "Region"
  },
  {
    "countryCode": "SO",
    "code": "SO-GE",
    "name": "Gedo",
    "type": "Region"
  },
  {
    "countryCode": "SO",
    "code": "SO-HI",
    "name": "Hiiraan",
    "type": "Region"
  },
  {
    "countryCode": "SO",
    "code": "SO-JD",
    "name": "Jubbada Dhexe",
    "type": "Region"
  },
  {
    "countryCode": "SO",
    "code": "SO-JH",
    "name": "Jubbada Hoose",
    "type": "Region"
  },
  {
    "countryCode": "SO",
    "code": "SO-MU",
    "name": "Mudug",
    "type": "Region"
  },
  {
    "countryCode": "SO",
    "code": "SO-NU",
    "name": "Nugaal",
    "type": "Region"
  },
  {
    "countryCode": "SO",
    "code": "SO-SA",
    "name": "Sanaag",
    "type": "Region"
  },
  {
    "countryCode": "SO",
    "code": "SO-SD",
    "name": "Shabeellaha Dhexe",
    "type": "Region"
  },
  {
    "countryCode": "SO",
    "code": "SO-SH",
    "name": "Shabeellaha Hoose",
    "type": "Region"
  },
  {
    "countryCode": "SO",
    "code": "SO-SO",
    "name": "Sool",
    "type": "Region"
  },
  {
    "countryCode": "SO",
    "code": "SO-TO",
    "name": "Togdheer",
    "type": "Region"
  },
  {
    "countryCode": "SO",
    "code": "SO-WO",
    "name": "Woqooyi Galbeed",
    "type": "Region"
  },
  {
    "countryCode": "SR",
    "code": "SR-BR",
    "name": "Brokopondo",
    "type": "District"
  },
  {
    "countryCode": "SR",
    "code": "SR-CM",
    "name": "Commewijne",
    "type": "District"
  },
  {
    "countryCode": "SR",
    "code": "SR-CR",
    "name": "Coronie",
    "type": "District"
  },
  {
    "countryCode": "SR",
    "code": "SR-MA",
    "name": "Marowijne",
    "type": "District"
  },
  {
    "countryCode": "SR",
    "code": "SR-NI",
    "name": "Nickerie",
    "type": "District"
  },
  {
    "countryCode": "SR",
    "code": "SR-PR",
    "name": "Para",
    "type": "District"
  },
  {
    "countryCode": "SR",
    "code": "SR-PM",
    "name": "Paramaribo",
    "type": "District"
  },
  {
    "countryCode": "SR",
    "code": "SR-SA",
    "name": "Saramacca",
    "type": "District"
  },
  {
    "countryCode": "SR",
    "code": "SR-SI",
    "name": "Sipaliwini",
    "type": "District"
  },
  {
    "countryCode": "SR",
    "code": "SR-WA",
    "name": "Wanica",
    "type": "District"
  },
  {
    "countryCode": "SS",
    "code": "SS-EC",
    "name": "Central Equatoria",
    "type": "State"
  },
  {
    "countryCode": "SS",
    "code": "SS-EE",
    "name": "Eastern Equatoria",
    "type": "State"
  },
  {
    "countryCode": "SS",
    "code": "SS-JG",
    "name": "Jonglei",
    "type": "State"
  },
  {
    "countryCode": "SS",
    "code": "SS-LK",
    "name": "Lakes",
    "type": "State"
  },
  {
    "countryCode": "SS",
    "code": "SS-BN",
    "name": "Northern Bahr el Ghazal",
    "type": "State"
  },
  {
    "countryCode": "SS",
    "code": "SS-UY",
    "name": "Unity",
    "type": "State"
  },
  {
    "countryCode": "SS",
    "code": "SS-NU",
    "name": "Upper Nile",
    "type": "State"
  },
  {
    "countryCode": "SS",
    "code": "SS-WR",
    "name": "Warrap",
    "type": "State"
  },
  {
    "countryCode": "SS",
    "code": "SS-BW",
    "name": "Western Bahr el Ghazal",
    "type": "State"
  },
  {
    "countryCode": "SS",
    "code": "SS-EW",
    "name": "Western Equatoria",
    "type": "State"
  },
  {
    "countryCode": "ST",
    "code": "ST-02",
    "name": "Cantagalo",
    "type": "District"
  },
  {
    "countryCode": "ST",
    "code": "ST-03",
    "name": "Caué",
    "type": "District"
  },
  {
    "countryCode": "ST",
    "code": "ST-04",
    "name": "Lembá",
    "type": "District"
  },
  {
    "countryCode": "ST",
    "code": "ST-05",
    "name": "Lobata",
    "type": "District"
  },
  {
    "countryCode": "ST",
    "code": "ST-06",
    "name": "Mé-Zóchi",
    "type": "District"
  },
  {
    "countryCode": "ST",
    "code": "ST-P",
    "name": "Príncipe",
    "type": "Autonomous region"
  },
  {
    "countryCode": "ST",
    "code": "ST-01",
    "name": "Água Grande",
    "type": "District"
  },
  {
    "countryCode": "SV",
    "code": "SV-AH",
    "name": "Ahuachapán",
    "type": "Department"
  },
  {
    "countryCode": "SV",
    "code": "SV-CA",
    "name": "Cabañas",
    "type": "Department"
  },
  {
    "countryCode": "SV",
    "code": "SV-CH",
    "name": "Chalatenango",
    "type": "Department"
  },
  {
    "countryCode": "SV",
    "code": "SV-CU",
    "name": "Cuscatlán",
    "type": "Department"
  },
  {
    "countryCode": "SV",
    "code": "SV-LI",
    "name": "La Libertad",
    "type": "Department"
  },
  {
    "countryCode": "SV",
    "code": "SV-PA",
    "name": "La Paz",
    "type": "Department"
  },
  {
    "countryCode": "SV",
    "code": "SV-UN",
    "name": "La Unión",
    "type": "Department"
  },
  {
    "countryCode": "SV",
    "code": "SV-MO",
    "name": "Morazán",
    "type": "Department"
  },
  {
    "countryCode": "SV",
    "code": "SV-SM",
    "name": "San Miguel",
    "type": "Department"
  },
  {
    "countryCode": "SV",
    "code": "SV-SS",
    "name": "San Salvador",
    "type": "Department"
  },
  {
    "countryCode": "SV",
    "code": "SV-SV",
    "name": "San Vicente",
    "type": "Department"
  },
  {
    "countryCode": "SV",
    "code": "SV-SA",
    "name": "Santa Ana",
    "type": "Department"
  },
  {
    "countryCode": "SV",
    "code": "SV-SO",
    "name": "Sonsonate",
    "type": "Department"
  },
  {
    "countryCode": "SV",
    "code": "SV-US",
    "name": "Usulután",
    "type": "Department"
  },
  {
    "countryCode": "SY",
    "code": "SY-LA",
    "name": "Al Lādhiqīyah",
    "type": "Province"
  },
  {
    "countryCode": "SY",
    "code": "SY-QU",
    "name": "Al Qunayţirah",
    "type": "Province"
  },
  {
    "countryCode": "SY",
    "code": "SY-HA",
    "name": "Al Ḩasakah",
    "type": "Province"
  },
  {
    "countryCode": "SY",
    "code": "SY-RA",
    "name": "Ar Raqqah",
    "type": "Province"
  },
  {
    "countryCode": "SY",
    "code": "SY-SU",
    "name": "As Suwaydā'",
    "type": "Province"
  },
  {
    "countryCode": "SY",
    "code": "SY-DR",
    "name": "Dar'ā",
    "type": "Province"
  },
  {
    "countryCode": "SY",
    "code": "SY-DY",
    "name": "Dayr az Zawr",
    "type": "Province"
  },
  {
    "countryCode": "SY",
    "code": "SY-DI",
    "name": "Dimashq",
    "type": "Province"
  },
  {
    "countryCode": "SY",
    "code": "SY-ID",
    "name": "Idlib",
    "type": "Province"
  },
  {
    "countryCode": "SY",
    "code": "SY-RD",
    "name": "Rīf Dimashq",
    "type": "Province"
  },
  {
    "countryCode": "SY",
    "code": "SY-TA",
    "name": "Ţarţūs",
    "type": "Province"
  },
  {
    "countryCode": "SY",
    "code": "SY-HL",
    "name": "Ḩalab",
    "type": "Province"
  },
  {
    "countryCode": "SY",
    "code": "SY-HM",
    "name": "Ḩamāh",
    "type": "Province"
  },
  {
    "countryCode": "SY",
    "code": "SY-HI",
    "name": "Ḩimş",
    "type": "Province"
  },
  {
    "countryCode": "SZ",
    "code": "SZ-HH",
    "name": "Hhohho",
    "type": "Region"
  },
  {
    "countryCode": "SZ",
    "code": "SZ-LU",
    "name": "Lubombo",
    "type": "Region"
  },
  {
    "countryCode": "SZ",
    "code": "SZ-MA",
    "name": "Manzini",
    "type": "Region"
  },
  {
    "countryCode": "SZ",
    "code": "SZ-SH",
    "name": "Shiselweni",
    "type": "Region"
  },
  {
    "countryCode": "TD",
    "code": "TD-BG",
    "name": "Bahr el Ghazal",
    "type": "Province"
  },
  {
    "countryCode": "TD",
    "code": "TD-BA",
    "name": "Batha",
    "type": "Province"
  },
  {
    "countryCode": "TD",
    "code": "TD-BO",
    "name": "Borkou",
    "type": "Province"
  },
  {
    "countryCode": "TD",
    "code": "TD-CB",
    "name": "Chari-Baguirmi",
    "type": "Province"
  },
  {
    "countryCode": "TD",
    "code": "TD-EE",
    "name": "Ennedi-Est",
    "type": "Province"
  },
  {
    "countryCode": "TD",
    "code": "TD-EO",
    "name": "Ennedi-Ouest",
    "type": "Province"
  },
  {
    "countryCode": "TD",
    "code": "TD-GR",
    "name": "Guéra",
    "type": "Province"
  },
  {
    "countryCode": "TD",
    "code": "TD-HL",
    "name": "Hadjer Lamis",
    "type": "Province"
  },
  {
    "countryCode": "TD",
    "code": "TD-KA",
    "name": "Kanem",
    "type": "Province"
  },
  {
    "countryCode": "TD",
    "code": "TD-LC",
    "name": "Lac",
    "type": "Province"
  },
  {
    "countryCode": "TD",
    "code": "TD-LO",
    "name": "Logone-Occidental",
    "type": "Province"
  },
  {
    "countryCode": "TD",
    "code": "TD-LR",
    "name": "Logone-Oriental",
    "type": "Province"
  },
  {
    "countryCode": "TD",
    "code": "TD-MA",
    "name": "Mandoul",
    "type": "Province"
  },
  {
    "countryCode": "TD",
    "code": "TD-ME",
    "name": "Mayo-Kebbi-Est",
    "type": "Province"
  },
  {
    "countryCode": "TD",
    "code": "TD-MO",
    "name": "Mayo-Kebbi-Ouest",
    "type": "Province"
  },
  {
    "countryCode": "TD",
    "code": "TD-MC",
    "name": "Moyen-Chari",
    "type": "Province"
  },
  {
    "countryCode": "TD",
    "code": "TD-OD",
    "name": "Ouaddaï",
    "type": "Province"
  },
  {
    "countryCode": "TD",
    "code": "TD-SA",
    "name": "Salamat",
    "type": "Province"
  },
  {
    "countryCode": "TD",
    "code": "TD-SI",
    "name": "Sila",
    "type": "Province"
  },
  {
    "countryCode": "TD",
    "code": "TD-TA",
    "name": "Tandjilé",
    "type": "Province"
  },
  {
    "countryCode": "TD",
    "code": "TD-TI",
    "name": "Tibesti",
    "type": "Province"
  },
  {
    "countryCode": "TD",
    "code": "TD-ND",
    "name": "Ville de Ndjamena",
    "type": "Province"
  },
  {
    "countryCode": "TD",
    "code": "TD-WF",
    "name": "Wadi Fira",
    "type": "Province"
  },
  {
    "countryCode": "TG",
    "code": "TG-C",
    "name": "Centrale",
    "type": "Region"
  },
  {
    "countryCode": "TG",
    "code": "TG-K",
    "name": "Kara",
    "type": "Region"
  },
  {
    "countryCode": "TG",
    "code": "TG-M",
    "name": "Maritime (Région)",
    "type": "Region"
  },
  {
    "countryCode": "TG",
    "code": "TG-P",
    "name": "Plateaux",
    "type": "Region"
  },
  {
    "countryCode": "TG",
    "code": "TG-S",
    "name": "Savanes",
    "type": "Region"
  },
  {
    "countryCode": "TH",
    "code": "TH-37",
    "name": "Amnat Charoen",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-15",
    "name": "Ang Thong",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-38",
    "name": "Bueng Kan",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-31",
    "name": "Buri Ram",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-24",
    "name": "Chachoengsao",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-18",
    "name": "Chai Nat",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-36",
    "name": "Chaiyaphum",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-22",
    "name": "Chanthaburi",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-50",
    "name": "Chiang Mai",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-57",
    "name": "Chiang Rai",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-20",
    "name": "Chon Buri",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-86",
    "name": "Chumphon",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-46",
    "name": "Kalasin",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-62",
    "name": "Kamphaeng Phet",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-71",
    "name": "Kanchanaburi",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-40",
    "name": "Khon Kaen",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-81",
    "name": "Krabi",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-10",
    "name": "Krung Thep Maha Nakhon",
    "type": "Metropolitan administration"
  },
  {
    "countryCode": "TH",
    "code": "TH-52",
    "name": "Lampang",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-51",
    "name": "Lamphun",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-42",
    "name": "Loei",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-16",
    "name": "Lop Buri",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-58",
    "name": "Mae Hong Son",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-44",
    "name": "Maha Sarakham",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-49",
    "name": "Mukdahan",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-26",
    "name": "Nakhon Nayok",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-73",
    "name": "Nakhon Pathom",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-48",
    "name": "Nakhon Phanom",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-30",
    "name": "Nakhon Ratchasima",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-60",
    "name": "Nakhon Sawan",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-80",
    "name": "Nakhon Si Thammarat",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-55",
    "name": "Nan",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-96",
    "name": "Narathiwat",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-39",
    "name": "Nong Bua Lam Phu",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-43",
    "name": "Nong Khai",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-12",
    "name": "Nonthaburi",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-13",
    "name": "Pathum Thani",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-94",
    "name": "Pattani",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-82",
    "name": "Phangnga",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-93",
    "name": "Phatthalung",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-S",
    "name": "Phatthaya",
    "type": "Special administrative city"
  },
  {
    "countryCode": "TH",
    "code": "TH-56",
    "name": "Phayao",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-67",
    "name": "Phetchabun",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-76",
    "name": "Phetchaburi",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-66",
    "name": "Phichit",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-65",
    "name": "Phitsanulok",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-14",
    "name": "Phra Nakhon Si Ayutthaya",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-54",
    "name": "Phrae",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-83",
    "name": "Phuket",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-25",
    "name": "Prachin Buri",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-77",
    "name": "Prachuap Khiri Khan",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-85",
    "name": "Ranong",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-70",
    "name": "Ratchaburi",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-21",
    "name": "Rayong",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-45",
    "name": "Roi Et",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-27",
    "name": "Sa Kaeo",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-47",
    "name": "Sakon Nakhon",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-11",
    "name": "Samut Prakan",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-74",
    "name": "Samut Sakhon",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-75",
    "name": "Samut Songkhram",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-19",
    "name": "Saraburi",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-91",
    "name": "Satun",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-33",
    "name": "Si Sa Ket",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-17",
    "name": "Sing Buri",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-90",
    "name": "Songkhla",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-64",
    "name": "Sukhothai",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-72",
    "name": "Suphan Buri",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-84",
    "name": "Surat Thani",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-32",
    "name": "Surin",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-63",
    "name": "Tak",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-92",
    "name": "Trang",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-23",
    "name": "Trat",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-34",
    "name": "Ubon Ratchathani",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-41",
    "name": "Udon Thani",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-61",
    "name": "Uthai Thani",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-53",
    "name": "Uttaradit",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-95",
    "name": "Yala",
    "type": "Province"
  },
  {
    "countryCode": "TH",
    "code": "TH-35",
    "name": "Yasothon",
    "type": "Province"
  },
  {
    "countryCode": "TJ",
    "code": "TJ-DU",
    "name": "Dushanbe",
    "type": "Capital territory"
  },
  {
    "countryCode": "TJ",
    "code": "TJ-KT",
    "name": "Khatlon",
    "type": "Region"
  },
  {
    "countryCode": "TJ",
    "code": "TJ-GB",
    "name": "Kŭhistoni Badakhshon",
    "type": "Autonomous region"
  },
  {
    "countryCode": "TJ",
    "code": "TJ-RA",
    "name": "nohiyahoi tobei jumhurí",
    "type": "Districts under republic administration"
  },
  {
    "countryCode": "TJ",
    "code": "TJ-SU",
    "name": "Sughd",
    "type": "Region"
  },
  {
    "countryCode": "TL",
    "code": "TL-AL",
    "name": "Aileu",
    "type": "Municipality"
  },
  {
    "countryCode": "TL",
    "code": "TL-AN",
    "name": "Ainaro",
    "type": "Municipality"
  },
  {
    "countryCode": "TL",
    "code": "TL-BA",
    "name": "Baucau",
    "type": "Municipality"
  },
  {
    "countryCode": "TL",
    "code": "TL-BO",
    "name": "Bobonaro",
    "type": "Municipality"
  },
  {
    "countryCode": "TL",
    "code": "TL-CO",
    "name": "Cova Lima",
    "type": "Municipality"
  },
  {
    "countryCode": "TL",
    "code": "TL-DI",
    "name": "Díli",
    "type": "Municipality"
  },
  {
    "countryCode": "TL",
    "code": "TL-ER",
    "name": "Ermera",
    "type": "Municipality"
  },
  {
    "countryCode": "TL",
    "code": "TL-LA",
    "name": "Lautein",
    "type": "Municipality"
  },
  {
    "countryCode": "TL",
    "code": "TL-LI",
    "name": "Likisá",
    "type": "Municipality"
  },
  {
    "countryCode": "TL",
    "code": "TL-MT",
    "name": "Manatuto",
    "type": "Municipality"
  },
  {
    "countryCode": "TL",
    "code": "TL-MF",
    "name": "Manufahi",
    "type": "Municipality"
  },
  {
    "countryCode": "TL",
    "code": "TL-OE",
    "name": "Oekusi-Ambenu",
    "type": "Special administrative region"
  },
  {
    "countryCode": "TL",
    "code": "TL-VI",
    "name": "Vikeke",
    "type": "Municipality"
  },
  {
    "countryCode": "TM",
    "code": "TM-A",
    "name": "Ahal",
    "type": "Region"
  },
  {
    "countryCode": "TM",
    "code": "TM-S",
    "name": "Aşgabat",
    "type": "City"
  },
  {
    "countryCode": "TM",
    "code": "TM-B",
    "name": "Balkan",
    "type": "Region"
  },
  {
    "countryCode": "TM",
    "code": "TM-D",
    "name": "Daşoguz",
    "type": "Region"
  },
  {
    "countryCode": "TM",
    "code": "TM-L",
    "name": "Lebap",
    "type": "Region"
  },
  {
    "countryCode": "TM",
    "code": "TM-M",
    "name": "Mary",
    "type": "Region"
  },
  {
    "countryCode": "TN",
    "code": "TN-13",
    "name": "Ben Arous",
    "type": "Governorate"
  },
  {
    "countryCode": "TN",
    "code": "TN-23",
    "name": "Bizerte",
    "type": "Governorate"
  },
  {
    "countryCode": "TN",
    "code": "TN-31",
    "name": "Béja",
    "type": "Governorate"
  },
  {
    "countryCode": "TN",
    "code": "TN-81",
    "name": "Gabès",
    "type": "Governorate"
  },
  {
    "countryCode": "TN",
    "code": "TN-71",
    "name": "Gafsa",
    "type": "Governorate"
  },
  {
    "countryCode": "TN",
    "code": "TN-32",
    "name": "Jendouba",
    "type": "Governorate"
  },
  {
    "countryCode": "TN",
    "code": "TN-41",
    "name": "Kairouan",
    "type": "Governorate"
  },
  {
    "countryCode": "TN",
    "code": "TN-42",
    "name": "Kasserine",
    "type": "Governorate"
  },
  {
    "countryCode": "TN",
    "code": "TN-73",
    "name": "Kébili",
    "type": "Governorate"
  },
  {
    "countryCode": "TN",
    "code": "TN-12",
    "name": "L'Ariana",
    "type": "Governorate"
  },
  {
    "countryCode": "TN",
    "code": "TN-14",
    "name": "La Manouba",
    "type": "Governorate"
  },
  {
    "countryCode": "TN",
    "code": "TN-33",
    "name": "Le Kef",
    "type": "Governorate"
  },
  {
    "countryCode": "TN",
    "code": "TN-53",
    "name": "Mahdia",
    "type": "Governorate"
  },
  {
    "countryCode": "TN",
    "code": "TN-52",
    "name": "Monastir",
    "type": "Governorate"
  },
  {
    "countryCode": "TN",
    "code": "TN-82",
    "name": "Médenine",
    "type": "Governorate"
  },
  {
    "countryCode": "TN",
    "code": "TN-21",
    "name": "Nabeul",
    "type": "Governorate"
  },
  {
    "countryCode": "TN",
    "code": "TN-61",
    "name": "Sfax",
    "type": "Governorate"
  },
  {
    "countryCode": "TN",
    "code": "TN-43",
    "name": "Sidi Bouzid",
    "type": "Governorate"
  },
  {
    "countryCode": "TN",
    "code": "TN-34",
    "name": "Siliana",
    "type": "Governorate"
  },
  {
    "countryCode": "TN",
    "code": "TN-51",
    "name": "Sousse",
    "type": "Governorate"
  },
  {
    "countryCode": "TN",
    "code": "TN-83",
    "name": "Tataouine",
    "type": "Governorate"
  },
  {
    "countryCode": "TN",
    "code": "TN-72",
    "name": "Tozeur",
    "type": "Governorate"
  },
  {
    "countryCode": "TN",
    "code": "TN-11",
    "name": "Tunis",
    "type": "Governorate"
  },
  {
    "countryCode": "TN",
    "code": "TN-22",
    "name": "Zaghouan",
    "type": "Governorate"
  },
  {
    "countryCode": "TO",
    "code": "TO-01",
    "name": "'Eua",
    "type": "Division"
  },
  {
    "countryCode": "TO",
    "code": "TO-02",
    "name": "Ha'apai",
    "type": "Division"
  },
  {
    "countryCode": "TO",
    "code": "TO-03",
    "name": "Niuas",
    "type": "Division"
  },
  {
    "countryCode": "TO",
    "code": "TO-04",
    "name": "Tongatapu",
    "type": "Division"
  },
  {
    "countryCode": "TO",
    "code": "TO-05",
    "name": "Vava'u",
    "type": "Division"
  },
  {
    "countryCode": "TR",
    "code": "TR-01",
    "name": "Adana",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-02",
    "name": "Adıyaman",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-03",
    "name": "Afyonkarahisar",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-68",
    "name": "Aksaray",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-05",
    "name": "Amasya",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-06",
    "name": "Ankara",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-07",
    "name": "Antalya",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-75",
    "name": "Ardahan",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-08",
    "name": "Artvin",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-09",
    "name": "Aydın",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-04",
    "name": "Ağrı",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-10",
    "name": "Balıkesir",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-74",
    "name": "Bartın",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-72",
    "name": "Batman",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-69",
    "name": "Bayburt",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-11",
    "name": "Bilecik",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-12",
    "name": "Bingöl",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-13",
    "name": "Bitlis",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-14",
    "name": "Bolu",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-15",
    "name": "Burdur",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-16",
    "name": "Bursa",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-20",
    "name": "Denizli",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-21",
    "name": "Diyarbakır",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-81",
    "name": "Düzce",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-22",
    "name": "Edirne",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-23",
    "name": "Elazığ",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-24",
    "name": "Erzincan",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-25",
    "name": "Erzurum",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-26",
    "name": "Eskişehir",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-27",
    "name": "Gaziantep",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-28",
    "name": "Giresun",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-29",
    "name": "Gümüşhane",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-30",
    "name": "Hakkâri",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-31",
    "name": "Hatay",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-32",
    "name": "Isparta",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-76",
    "name": "Iğdır",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-34",
    "name": "İstanbul",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-35",
    "name": "İzmir",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-46",
    "name": "Kahramanmaraş",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-78",
    "name": "Karabük",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-70",
    "name": "Karaman",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-36",
    "name": "Kars",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-37",
    "name": "Kastamonu",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-38",
    "name": "Kayseri",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-79",
    "name": "Kilis",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-41",
    "name": "Kocaeli",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-42",
    "name": "Konya",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-43",
    "name": "Kütahya",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-39",
    "name": "Kırklareli",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-71",
    "name": "Kırıkkale",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-40",
    "name": "Kırşehir",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-44",
    "name": "Malatya",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-45",
    "name": "Manisa",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-47",
    "name": "Mardin",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-33",
    "name": "Mersin",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-48",
    "name": "Muğla",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-49",
    "name": "Muş",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-50",
    "name": "Nevşehir",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-51",
    "name": "Niğde",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-52",
    "name": "Ordu",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-80",
    "name": "Osmaniye",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-53",
    "name": "Rize",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-54",
    "name": "Sakarya",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-55",
    "name": "Samsun",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-56",
    "name": "Siirt",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-57",
    "name": "Sinop",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-58",
    "name": "Sivas",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-59",
    "name": "Tekirdağ",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-60",
    "name": "Tokat",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-61",
    "name": "Trabzon",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-62",
    "name": "Tunceli",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-64",
    "name": "Uşak",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-65",
    "name": "Van",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-77",
    "name": "Yalova",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-66",
    "name": "Yozgat",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-67",
    "name": "Zonguldak",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-17",
    "name": "Çanakkale",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-18",
    "name": "Çankırı",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-19",
    "name": "Çorum",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-63",
    "name": "Şanlıurfa",
    "type": "Province"
  },
  {
    "countryCode": "TR",
    "code": "TR-73",
    "name": "Şırnak",
    "type": "Province"
  },
  {
    "countryCode": "TT",
    "code": "TT-ARI",
    "name": "Arima",
    "type": "Borough"
  },
  {
    "countryCode": "TT",
    "code": "TT-CHA",
    "name": "Chaguanas",
    "type": "Borough"
  },
  {
    "countryCode": "TT",
    "code": "TT-CTT",
    "name": "Couva-Tabaquite-Talparo",
    "type": "Region"
  },
  {
    "countryCode": "TT",
    "code": "TT-DMN",
    "name": "Diego Martin",
    "type": "Region"
  },
  {
    "countryCode": "TT",
    "code": "TT-MRC",
    "name": "Mayaro-Rio Claro",
    "type": "Region"
  },
  {
    "countryCode": "TT",
    "code": "TT-PED",
    "name": "Penal-Debe",
    "type": "Region"
  },
  {
    "countryCode": "TT",
    "code": "TT-PTF",
    "name": "Point Fortin",
    "type": "Borough"
  },
  {
    "countryCode": "TT",
    "code": "TT-POS",
    "name": "Port of Spain",
    "type": "City"
  },
  {
    "countryCode": "TT",
    "code": "TT-PRT",
    "name": "Princes Town",
    "type": "Region"
  },
  {
    "countryCode": "TT",
    "code": "TT-SFO",
    "name": "San Fernando",
    "type": "City"
  },
  {
    "countryCode": "TT",
    "code": "TT-SJL",
    "name": "San Juan-Laventille",
    "type": "Region"
  },
  {
    "countryCode": "TT",
    "code": "TT-SGE",
    "name": "Sangre Grande",
    "type": "Region"
  },
  {
    "countryCode": "TT",
    "code": "TT-SIP",
    "name": "Siparia",
    "type": "Region"
  },
  {
    "countryCode": "TT",
    "code": "TT-TOB",
    "name": "Tobago",
    "type": "Ward"
  },
  {
    "countryCode": "TT",
    "code": "TT-TUP",
    "name": "Tunapuna-Piarco",
    "type": "Region"
  },
  {
    "countryCode": "TV",
    "code": "TV-FUN",
    "name": "Funafuti",
    "type": "Town council"
  },
  {
    "countryCode": "TV",
    "code": "TV-NMG",
    "name": "Nanumaga",
    "type": "Island council"
  },
  {
    "countryCode": "TV",
    "code": "TV-NMA",
    "name": "Nanumea",
    "type": "Island council"
  },
  {
    "countryCode": "TV",
    "code": "TV-NIT",
    "name": "Niutao",
    "type": "Island council"
  },
  {
    "countryCode": "TV",
    "code": "TV-NUI",
    "name": "Nui",
    "type": "Island council"
  },
  {
    "countryCode": "TV",
    "code": "TV-NKF",
    "name": "Nukufetau",
    "type": "Island council"
  },
  {
    "countryCode": "TV",
    "code": "TV-NKL",
    "name": "Nukulaelae",
    "type": "Island council"
  },
  {
    "countryCode": "TV",
    "code": "TV-VAI",
    "name": "Vaitupu",
    "type": "Island council"
  },
  {
    "countryCode": "TW",
    "code": "TW-CHA",
    "name": "Changhua",
    "type": "County"
  },
  {
    "countryCode": "TW",
    "code": "TW-CYI",
    "name": "Chiayi",
    "type": "City"
  },
  {
    "countryCode": "TW",
    "code": "TW-CYQ",
    "name": "Chiayi",
    "type": "County"
  },
  {
    "countryCode": "TW",
    "code": "TW-HSQ",
    "name": "Hsinchu",
    "type": "County"
  },
  {
    "countryCode": "TW",
    "code": "TW-HSZ",
    "name": "Hsinchu",
    "type": "City"
  },
  {
    "countryCode": "TW",
    "code": "TW-HUA",
    "name": "Hualien",
    "type": "County"
  },
  {
    "countryCode": "TW",
    "code": "TW-KHH",
    "name": "Kaohsiung",
    "type": "Special municipality"
  },
  {
    "countryCode": "TW",
    "code": "TW-KEE",
    "name": "Keelung",
    "type": "City"
  },
  {
    "countryCode": "TW",
    "code": "TW-KIN",
    "name": "Kinmen",
    "type": "County"
  },
  {
    "countryCode": "TW",
    "code": "TW-LIE",
    "name": "Lienchiang",
    "type": "County"
  },
  {
    "countryCode": "TW",
    "code": "TW-MIA",
    "name": "Miaoli",
    "type": "County"
  },
  {
    "countryCode": "TW",
    "code": "TW-NAN",
    "name": "Nantou",
    "type": "County"
  },
  {
    "countryCode": "TW",
    "code": "TW-NWT",
    "name": "New Taipei",
    "type": "Special municipality"
  },
  {
    "countryCode": "TW",
    "code": "TW-PEN",
    "name": "Penghu",
    "type": "County"
  },
  {
    "countryCode": "TW",
    "code": "TW-PIF",
    "name": "Pingtung",
    "type": "County"
  },
  {
    "countryCode": "TW",
    "code": "TW-TXG",
    "name": "Taichung",
    "type": "Special municipality"
  },
  {
    "countryCode": "TW",
    "code": "TW-TNN",
    "name": "Tainan",
    "type": "Special municipality"
  },
  {
    "countryCode": "TW",
    "code": "TW-TPE",
    "name": "Taipei",
    "type": "Special municipality"
  },
  {
    "countryCode": "TW",
    "code": "TW-TTT",
    "name": "Taitung",
    "type": "County"
  },
  {
    "countryCode": "TW",
    "code": "TW-TAO",
    "name": "Taoyuan",
    "type": "Special municipality"
  },
  {
    "countryCode": "TW",
    "code": "TW-ILA",
    "name": "Yilan",
    "type": "County"
  },
  {
    "countryCode": "TW",
    "code": "TW-YUN",
    "name": "Yunlin",
    "type": "County"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-01",
    "name": "Arusha",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-19",
    "name": "Coast",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-02",
    "name": "Dar es Salaam",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-03",
    "name": "Dodoma",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-27",
    "name": "Geita",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-04",
    "name": "Iringa",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-05",
    "name": "Kagera",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-28",
    "name": "Katavi",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-08",
    "name": "Kigoma",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-09",
    "name": "Kilimanjaro",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-12",
    "name": "Lindi",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-26",
    "name": "Manyara",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-13",
    "name": "Mara",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-14",
    "name": "Mbeya",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-16",
    "name": "Morogoro",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-17",
    "name": "Mtwara",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-18",
    "name": "Mwanza",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-29",
    "name": "Njombe",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-06",
    "name": "Pemba North",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-10",
    "name": "Pemba South",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-20",
    "name": "Rukwa",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-21",
    "name": "Ruvuma",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-22",
    "name": "Shinyanga",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-30",
    "name": "Simiyu",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-23",
    "name": "Singida",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-31",
    "name": "Songwe",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-24",
    "name": "Tabora",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-25",
    "name": "Tanga",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-07",
    "name": "Zanzibar North",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-11",
    "name": "Zanzibar South",
    "type": "Region"
  },
  {
    "countryCode": "TZ",
    "code": "TZ-15",
    "name": "Zanzibar West",
    "type": "Region"
  },
  {
    "countryCode": "UA",
    "code": "UA-43",
    "name": "Avtonomna Respublika Krym",
    "type": "Republic"
  },
  {
    "countryCode": "UA",
    "code": "UA-71",
    "name": "Cherkaska oblast",
    "type": "Region"
  },
  {
    "countryCode": "UA",
    "code": "UA-74",
    "name": "Chernihivska oblast",
    "type": "Region"
  },
  {
    "countryCode": "UA",
    "code": "UA-77",
    "name": "Chernivetska oblast",
    "type": "Region"
  },
  {
    "countryCode": "UA",
    "code": "UA-12",
    "name": "Dnipropetrovska oblast",
    "type": "Region"
  },
  {
    "countryCode": "UA",
    "code": "UA-14",
    "name": "Donetska oblast",
    "type": "Region"
  },
  {
    "countryCode": "UA",
    "code": "UA-26",
    "name": "Ivano-Frankivska oblast",
    "type": "Region"
  },
  {
    "countryCode": "UA",
    "code": "UA-63",
    "name": "Kharkivska oblast",
    "type": "Region"
  },
  {
    "countryCode": "UA",
    "code": "UA-65",
    "name": "Khersonska oblast",
    "type": "Region"
  },
  {
    "countryCode": "UA",
    "code": "UA-68",
    "name": "Khmelnytska oblast",
    "type": "Region"
  },
  {
    "countryCode": "UA",
    "code": "UA-35",
    "name": "Kirovohradska oblast",
    "type": "Region"
  },
  {
    "countryCode": "UA",
    "code": "UA-30",
    "name": "Kyiv",
    "type": "City"
  },
  {
    "countryCode": "UA",
    "code": "UA-32",
    "name": "Kyivska oblast",
    "type": "Region"
  },
  {
    "countryCode": "UA",
    "code": "UA-09",
    "name": "Luhanska oblast",
    "type": "Region"
  },
  {
    "countryCode": "UA",
    "code": "UA-46",
    "name": "Lvivska oblast",
    "type": "Region"
  },
  {
    "countryCode": "UA",
    "code": "UA-48",
    "name": "Mykolaivska oblast",
    "type": "Region"
  },
  {
    "countryCode": "UA",
    "code": "UA-51",
    "name": "Odeska oblast",
    "type": "Region"
  },
  {
    "countryCode": "UA",
    "code": "UA-53",
    "name": "Poltavska oblast",
    "type": "Region"
  },
  {
    "countryCode": "UA",
    "code": "UA-56",
    "name": "Rivnenska oblast",
    "type": "Region"
  },
  {
    "countryCode": "UA",
    "code": "UA-40",
    "name": "Sevastopol",
    "type": "City"
  },
  {
    "countryCode": "UA",
    "code": "UA-59",
    "name": "Sumska oblast",
    "type": "Region"
  },
  {
    "countryCode": "UA",
    "code": "UA-61",
    "name": "Ternopilska oblast",
    "type": "Region"
  },
  {
    "countryCode": "UA",
    "code": "UA-05",
    "name": "Vinnytska oblast",
    "type": "Region"
  },
  {
    "countryCode": "UA",
    "code": "UA-07",
    "name": "Volynska oblast",
    "type": "Region"
  },
  {
    "countryCode": "UA",
    "code": "UA-21",
    "name": "Zakarpatska oblast",
    "type": "Region"
  },
  {
    "countryCode": "UA",
    "code": "UA-23",
    "name": "Zaporizka oblast",
    "type": "Region"
  },
  {
    "countryCode": "UA",
    "code": "UA-18",
    "name": "Zhytomyrska oblast",
    "type": "Region"
  },
  {
    "countryCode": "UG",
    "code": "UG-314",
    "name": "Abim",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-301",
    "name": "Adjumani",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-322",
    "name": "Agago",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-323",
    "name": "Alebtong",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-315",
    "name": "Amolatar",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-324",
    "name": "Amudat",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-216",
    "name": "Amuria",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-316",
    "name": "Amuru",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-302",
    "name": "Apac",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-303",
    "name": "Arua",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-217",
    "name": "Budaka",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-218",
    "name": "Bududa",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-201",
    "name": "Bugiri",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-235",
    "name": "Bugweri",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-420",
    "name": "Buhweju",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-117",
    "name": "Buikwe",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-219",
    "name": "Bukedea",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-118",
    "name": "Bukomansibi",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-220",
    "name": "Bukwo",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-225",
    "name": "Bulambuli",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-416",
    "name": "Buliisa",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-401",
    "name": "Bundibugyo",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-430",
    "name": "Bunyangabu",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-402",
    "name": "Bushenyi",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-202",
    "name": "Busia",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-221",
    "name": "Butaleja",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-119",
    "name": "Butambala",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-233",
    "name": "Butebo",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-120",
    "name": "Buvuma",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-226",
    "name": "Buyende",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-C",
    "name": "Central",
    "type": "Geographical region"
  },
  {
    "countryCode": "UG",
    "code": "UG-317",
    "name": "Dokolo",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-E",
    "name": "Eastern",
    "type": "Geographical region"
  },
  {
    "countryCode": "UG",
    "code": "UG-121",
    "name": "Gomba",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-304",
    "name": "Gulu",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-403",
    "name": "Hoima",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-417",
    "name": "Ibanda",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-203",
    "name": "Iganga",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-418",
    "name": "Isingiro",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-204",
    "name": "Jinja",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-318",
    "name": "Kaabong",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-404",
    "name": "Kabale",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-405",
    "name": "Kabarole",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-213",
    "name": "Kaberamaido",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-427",
    "name": "Kagadi",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-428",
    "name": "Kakumiro",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-237",
    "name": "Kalaki",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-101",
    "name": "Kalangala",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-222",
    "name": "Kaliro",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-122",
    "name": "Kalungu",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-102",
    "name": "Kampala",
    "type": "City"
  },
  {
    "countryCode": "UG",
    "code": "UG-205",
    "name": "Kamuli",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-413",
    "name": "Kamwenge",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-414",
    "name": "Kanungu",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-206",
    "name": "Kapchorwa",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-236",
    "name": "Kapelebyong",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-335",
    "name": "Karenga",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-126",
    "name": "Kasanda",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-406",
    "name": "Kasese",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-207",
    "name": "Katakwi",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-112",
    "name": "Kayunga",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-433",
    "name": "Kazo",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-407",
    "name": "Kibaale",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-103",
    "name": "Kiboga",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-227",
    "name": "Kibuku",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-432",
    "name": "Kikuube",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-419",
    "name": "Kiruhura",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-421",
    "name": "Kiryandongo",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-408",
    "name": "Kisoro",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-434",
    "name": "Kitagwenda",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-305",
    "name": "Kitgum",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-319",
    "name": "Koboko",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-325",
    "name": "Kole",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-306",
    "name": "Kotido",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-208",
    "name": "Kumi",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-333",
    "name": "Kwania",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-228",
    "name": "Kween",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-123",
    "name": "Kyankwanzi",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-422",
    "name": "Kyegegwa",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-415",
    "name": "Kyenjojo",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-125",
    "name": "Kyotera",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-326",
    "name": "Lamwo",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-307",
    "name": "Lira",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-229",
    "name": "Luuka",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-104",
    "name": "Luwero",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-124",
    "name": "Lwengo",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-114",
    "name": "Lyantonde",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-336",
    "name": "Madi-Okollo",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-223",
    "name": "Manafwa",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-320",
    "name": "Maracha",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-105",
    "name": "Masaka",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-409",
    "name": "Masindi",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-214",
    "name": "Mayuge",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-209",
    "name": "Mbale",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-410",
    "name": "Mbarara",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-423",
    "name": "Mitooma",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-115",
    "name": "Mityana",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-308",
    "name": "Moroto",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-309",
    "name": "Moyo",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-106",
    "name": "Mpigi",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-107",
    "name": "Mubende",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-108",
    "name": "Mukono",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-334",
    "name": "Nabilatuk",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-311",
    "name": "Nakapiripirit",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-116",
    "name": "Nakaseke",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-109",
    "name": "Nakasongola",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-230",
    "name": "Namayingo",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-234",
    "name": "Namisindwa",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-224",
    "name": "Namutumba",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-327",
    "name": "Napak",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-310",
    "name": "Nebbi",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-231",
    "name": "Ngora",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-N",
    "name": "Northern",
    "type": "Geographical region"
  },
  {
    "countryCode": "UG",
    "code": "UG-424",
    "name": "Ntoroko",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-411",
    "name": "Ntungamo",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-328",
    "name": "Nwoya",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-337",
    "name": "Obongi",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-331",
    "name": "Omoro",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-329",
    "name": "Otuke",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-321",
    "name": "Oyam",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-312",
    "name": "Pader",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-332",
    "name": "Pakwach",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-210",
    "name": "Pallisa",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-110",
    "name": "Rakai",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-429",
    "name": "Rubanda",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-425",
    "name": "Rubirizi",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-431",
    "name": "Rukiga",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-412",
    "name": "Rukungiri",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-435",
    "name": "Rwampara",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-111",
    "name": "Sembabule",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-232",
    "name": "Serere",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-426",
    "name": "Sheema",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-215",
    "name": "Sironko",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-211",
    "name": "Soroti",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-212",
    "name": "Tororo",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-113",
    "name": "Wakiso",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-W",
    "name": "Western",
    "type": "Geographical region"
  },
  {
    "countryCode": "UG",
    "code": "UG-313",
    "name": "Yumbe",
    "type": "District"
  },
  {
    "countryCode": "UG",
    "code": "UG-330",
    "name": "Zombo",
    "type": "District"
  },
  {
    "countryCode": "UM",
    "code": "UM-81",
    "name": "Baker Island",
    "type": "Islands, groups of islands"
  },
  {
    "countryCode": "UM",
    "code": "UM-84",
    "name": "Howland Island",
    "type": "Islands, groups of islands"
  },
  {
    "countryCode": "UM",
    "code": "UM-86",
    "name": "Jarvis Island",
    "type": "Islands, groups of islands"
  },
  {
    "countryCode": "UM",
    "code": "UM-67",
    "name": "Johnston Atoll",
    "type": "Islands, groups of islands"
  },
  {
    "countryCode": "UM",
    "code": "UM-89",
    "name": "Kingman Reef",
    "type": "Islands, groups of islands"
  },
  {
    "countryCode": "UM",
    "code": "UM-71",
    "name": "Midway Islands",
    "type": "Islands, groups of islands"
  },
  {
    "countryCode": "UM",
    "code": "UM-76",
    "name": "Navassa Island",
    "type": "Islands, groups of islands"
  },
  {
    "countryCode": "UM",
    "code": "UM-95",
    "name": "Palmyra Atoll",
    "type": "Islands, groups of islands"
  },
  {
    "countryCode": "UM",
    "code": "UM-79",
    "name": "Wake Island",
    "type": "Islands, groups of islands"
  },
  {
    "countryCode": "US",
    "code": "US-AL",
    "name": "Alabama",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-AK",
    "name": "Alaska",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-AS",
    "name": "American Samoa",
    "type": "Outlying area"
  },
  {
    "countryCode": "US",
    "code": "US-AZ",
    "name": "Arizona",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-AR",
    "name": "Arkansas",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-CA",
    "name": "California",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-CO",
    "name": "Colorado",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-CT",
    "name": "Connecticut",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-DE",
    "name": "Delaware",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-DC",
    "name": "District of Columbia",
    "type": "District"
  },
  {
    "countryCode": "US",
    "code": "US-FL",
    "name": "Florida",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-GA",
    "name": "Georgia",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-GU",
    "name": "Guam",
    "type": "Outlying area"
  },
  {
    "countryCode": "US",
    "code": "US-HI",
    "name": "Hawaii",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-ID",
    "name": "Idaho",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-IL",
    "name": "Illinois",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-IN",
    "name": "Indiana",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-IA",
    "name": "Iowa",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-KS",
    "name": "Kansas",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-KY",
    "name": "Kentucky",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-LA",
    "name": "Louisiana",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-ME",
    "name": "Maine",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-MD",
    "name": "Maryland",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-MA",
    "name": "Massachusetts",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-MI",
    "name": "Michigan",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-MN",
    "name": "Minnesota",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-MS",
    "name": "Mississippi",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-MO",
    "name": "Missouri",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-MT",
    "name": "Montana",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-NE",
    "name": "Nebraska",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-NV",
    "name": "Nevada",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-NH",
    "name": "New Hampshire",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-NJ",
    "name": "New Jersey",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-NM",
    "name": "New Mexico",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-NY",
    "name": "New York",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-NC",
    "name": "North Carolina",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-ND",
    "name": "North Dakota",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-MP",
    "name": "Northern Mariana Islands",
    "type": "Outlying area"
  },
  {
    "countryCode": "US",
    "code": "US-OH",
    "name": "Ohio",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-OK",
    "name": "Oklahoma",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-OR",
    "name": "Oregon",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-PA",
    "name": "Pennsylvania",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-PR",
    "name": "Puerto Rico",
    "type": "Outlying area"
  },
  {
    "countryCode": "US",
    "code": "US-RI",
    "name": "Rhode Island",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-SC",
    "name": "South Carolina",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-SD",
    "name": "South Dakota",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-TN",
    "name": "Tennessee",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-TX",
    "name": "Texas",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-UM",
    "name": "United States Minor Outlying Islands",
    "type": "Outlying area"
  },
  {
    "countryCode": "US",
    "code": "US-UT",
    "name": "Utah",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-VT",
    "name": "Vermont",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-VI",
    "name": "Virgin Islands, U.S.",
    "type": "Outlying area"
  },
  {
    "countryCode": "US",
    "code": "US-VA",
    "name": "Virginia",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-WA",
    "name": "Washington",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-WV",
    "name": "West Virginia",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-WI",
    "name": "Wisconsin",
    "type": "State"
  },
  {
    "countryCode": "US",
    "code": "US-WY",
    "name": "Wyoming",
    "type": "State"
  },
  {
    "countryCode": "UY",
    "code": "UY-AR",
    "name": "Artigas",
    "type": "Department"
  },
  {
    "countryCode": "UY",
    "code": "UY-CA",
    "name": "Canelones",
    "type": "Department"
  },
  {
    "countryCode": "UY",
    "code": "UY-CL",
    "name": "Cerro Largo",
    "type": "Department"
  },
  {
    "countryCode": "UY",
    "code": "UY-CO",
    "name": "Colonia",
    "type": "Department"
  },
  {
    "countryCode": "UY",
    "code": "UY-DU",
    "name": "Durazno",
    "type": "Department"
  },
  {
    "countryCode": "UY",
    "code": "UY-FS",
    "name": "Flores",
    "type": "Department"
  },
  {
    "countryCode": "UY",
    "code": "UY-FD",
    "name": "Florida",
    "type": "Department"
  },
  {
    "countryCode": "UY",
    "code": "UY-LA",
    "name": "Lavalleja",
    "type": "Department"
  },
  {
    "countryCode": "UY",
    "code": "UY-MA",
    "name": "Maldonado",
    "type": "Department"
  },
  {
    "countryCode": "UY",
    "code": "UY-MO",
    "name": "Montevideo",
    "type": "Department"
  },
  {
    "countryCode": "UY",
    "code": "UY-PA",
    "name": "Paysandú",
    "type": "Department"
  },
  {
    "countryCode": "UY",
    "code": "UY-RV",
    "name": "Rivera",
    "type": "Department"
  },
  {
    "countryCode": "UY",
    "code": "UY-RO",
    "name": "Rocha",
    "type": "Department"
  },
  {
    "countryCode": "UY",
    "code": "UY-RN",
    "name": "Río Negro",
    "type": "Department"
  },
  {
    "countryCode": "UY",
    "code": "UY-SA",
    "name": "Salto",
    "type": "Department"
  },
  {
    "countryCode": "UY",
    "code": "UY-SJ",
    "name": "San José",
    "type": "Department"
  },
  {
    "countryCode": "UY",
    "code": "UY-SO",
    "name": "Soriano",
    "type": "Department"
  },
  {
    "countryCode": "UY",
    "code": "UY-TA",
    "name": "Tacuarembó",
    "type": "Department"
  },
  {
    "countryCode": "UY",
    "code": "UY-TT",
    "name": "Treinta y Tres",
    "type": "Department"
  },
  {
    "countryCode": "UZ",
    "code": "UZ-AN",
    "name": "Andijon",
    "type": "Region"
  },
  {
    "countryCode": "UZ",
    "code": "UZ-BU",
    "name": "Buxoro",
    "type": "Region"
  },
  {
    "countryCode": "UZ",
    "code": "UZ-FA",
    "name": "Farg‘ona",
    "type": "Region"
  },
  {
    "countryCode": "UZ",
    "code": "UZ-JI",
    "name": "Jizzax",
    "type": "Region"
  },
  {
    "countryCode": "UZ",
    "code": "UZ-NG",
    "name": "Namangan",
    "type": "Region"
  },
  {
    "countryCode": "UZ",
    "code": "UZ-NW",
    "name": "Navoiy",
    "type": "Region"
  },
  {
    "countryCode": "UZ",
    "code": "UZ-QA",
    "name": "Qashqadaryo",
    "type": "Region"
  },
  {
    "countryCode": "UZ",
    "code": "UZ-QR",
    "name": "Qoraqalpog‘iston Respublikasi",
    "type": "Republic"
  },
  {
    "countryCode": "UZ",
    "code": "UZ-SA",
    "name": "Samarqand",
    "type": "Region"
  },
  {
    "countryCode": "UZ",
    "code": "UZ-SI",
    "name": "Sirdaryo",
    "type": "Region"
  },
  {
    "countryCode": "UZ",
    "code": "UZ-SU",
    "name": "Surxondaryo",
    "type": "Region"
  },
  {
    "countryCode": "UZ",
    "code": "UZ-TK",
    "name": "Toshkent",
    "type": "City"
  },
  {
    "countryCode": "UZ",
    "code": "UZ-TO",
    "name": "Toshkent",
    "type": "Region"
  },
  {
    "countryCode": "UZ",
    "code": "UZ-XO",
    "name": "Xorazm",
    "type": "Region"
  },
  {
    "countryCode": "VC",
    "code": "VC-01",
    "name": "Charlotte",
    "type": "Parish"
  },
  {
    "countryCode": "VC",
    "code": "VC-06",
    "name": "Grenadines",
    "type": "Parish"
  },
  {
    "countryCode": "VC",
    "code": "VC-02",
    "name": "Saint Andrew",
    "type": "Parish"
  },
  {
    "countryCode": "VC",
    "code": "VC-03",
    "name": "Saint David",
    "type": "Parish"
  },
  {
    "countryCode": "VC",
    "code": "VC-04",
    "name": "Saint George",
    "type": "Parish"
  },
  {
    "countryCode": "VC",
    "code": "VC-05",
    "name": "Saint Patrick",
    "type": "Parish"
  },
  {
    "countryCode": "VE",
    "code": "VE-Z",
    "name": "Amazonas",
    "type": "State"
  },
  {
    "countryCode": "VE",
    "code": "VE-B",
    "name": "Anzoátegui",
    "type": "State"
  },
  {
    "countryCode": "VE",
    "code": "VE-C",
    "name": "Apure",
    "type": "State"
  },
  {
    "countryCode": "VE",
    "code": "VE-D",
    "name": "Aragua",
    "type": "State"
  },
  {
    "countryCode": "VE",
    "code": "VE-E",
    "name": "Barinas",
    "type": "State"
  },
  {
    "countryCode": "VE",
    "code": "VE-F",
    "name": "Bolívar",
    "type": "State"
  },
  {
    "countryCode": "VE",
    "code": "VE-G",
    "name": "Carabobo",
    "type": "State"
  },
  {
    "countryCode": "VE",
    "code": "VE-H",
    "name": "Cojedes",
    "type": "State"
  },
  {
    "countryCode": "VE",
    "code": "VE-Y",
    "name": "Delta Amacuro",
    "type": "State"
  },
  {
    "countryCode": "VE",
    "code": "VE-W",
    "name": "Dependencias Federales",
    "type": "Federal dependency"
  },
  {
    "countryCode": "VE",
    "code": "VE-A",
    "name": "Distrito Capital",
    "type": "Capital district"
  },
  {
    "countryCode": "VE",
    "code": "VE-I",
    "name": "Falcón",
    "type": "State"
  },
  {
    "countryCode": "VE",
    "code": "VE-J",
    "name": "Guárico",
    "type": "State"
  },
  {
    "countryCode": "VE",
    "code": "VE-X",
    "name": "La Guaira",
    "type": "State"
  },
  {
    "countryCode": "VE",
    "code": "VE-K",
    "name": "Lara",
    "type": "State"
  },
  {
    "countryCode": "VE",
    "code": "VE-M",
    "name": "Miranda",
    "type": "State"
  },
  {
    "countryCode": "VE",
    "code": "VE-N",
    "name": "Monagas",
    "type": "State"
  },
  {
    "countryCode": "VE",
    "code": "VE-L",
    "name": "Mérida",
    "type": "State"
  },
  {
    "countryCode": "VE",
    "code": "VE-O",
    "name": "Nueva Esparta",
    "type": "State"
  },
  {
    "countryCode": "VE",
    "code": "VE-P",
    "name": "Portuguesa",
    "type": "State"
  },
  {
    "countryCode": "VE",
    "code": "VE-R",
    "name": "Sucre",
    "type": "State"
  },
  {
    "countryCode": "VE",
    "code": "VE-T",
    "name": "Trujillo",
    "type": "State"
  },
  {
    "countryCode": "VE",
    "code": "VE-S",
    "name": "Táchira",
    "type": "State"
  },
  {
    "countryCode": "VE",
    "code": "VE-U",
    "name": "Yaracuy",
    "type": "State"
  },
  {
    "countryCode": "VE",
    "code": "VE-V",
    "name": "Zulia",
    "type": "State"
  },
  {
    "countryCode": "VN",
    "code": "VN-44",
    "name": "An Giang",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-43",
    "name": "Bà Rịa - Vũng Tàu",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-57",
    "name": "Bình Dương",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-58",
    "name": "Bình Phước",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-40",
    "name": "Bình Thuận",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-31",
    "name": "Bình Định",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-55",
    "name": "Bạc Liêu",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-54",
    "name": "Bắc Giang",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-53",
    "name": "Bắc Kạn",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-56",
    "name": "Bắc Ninh",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-50",
    "name": "Bến Tre",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-04",
    "name": "Cao Bằng",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-59",
    "name": "Cà Mau",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-CT",
    "name": "Cần Thơ",
    "type": "Municipality"
  },
  {
    "countryCode": "VN",
    "code": "VN-30",
    "name": "Gia Lai",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-03",
    "name": "Hà Giang",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-63",
    "name": "Hà Nam",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-HN",
    "name": "Hà Nội",
    "type": "Municipality"
  },
  {
    "countryCode": "VN",
    "code": "VN-23",
    "name": "Hà Tĩnh",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-14",
    "name": "Hòa Bình",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-66",
    "name": "Hưng Yên",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-61",
    "name": "Hải Dương",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-HP",
    "name": "Hải Phòng",
    "type": "Municipality"
  },
  {
    "countryCode": "VN",
    "code": "VN-73",
    "name": "Hậu Giang",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-SG",
    "name": "Hồ Chí Minh",
    "type": "Municipality"
  },
  {
    "countryCode": "VN",
    "code": "VN-34",
    "name": "Khánh Hòa",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-47",
    "name": "Kiến Giang",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-28",
    "name": "Kon Tum",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-01",
    "name": "Lai Châu",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-41",
    "name": "Long An",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-02",
    "name": "Lào Cai",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-35",
    "name": "Lâm Đồng",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-09",
    "name": "Lạng Sơn",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-67",
    "name": "Nam Định",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-22",
    "name": "Nghệ An",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-18",
    "name": "Ninh Bình",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-36",
    "name": "Ninh Thuận",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-68",
    "name": "Phú Thọ",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-32",
    "name": "Phú Yên",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-24",
    "name": "Quảng Bình",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-27",
    "name": "Quảng Nam",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-29",
    "name": "Quảng Ngãi",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-13",
    "name": "Quảng Ninh",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-25",
    "name": "Quảng Trị",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-52",
    "name": "Sóc Trăng",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-05",
    "name": "Sơn La",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-21",
    "name": "Thanh Hóa",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-20",
    "name": "Thái Bình",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-69",
    "name": "Thái Nguyên",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-26",
    "name": "Thừa Thiên-Huế",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-46",
    "name": "Tiền Giang",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-51",
    "name": "Trà Vinh",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-07",
    "name": "Tuyên Quang",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-37",
    "name": "Tây Ninh",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-49",
    "name": "Vĩnh Long",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-70",
    "name": "Vĩnh Phúc",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-06",
    "name": "Yên Bái",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-71",
    "name": "Điện Biên",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-DN",
    "name": "Đà Nẵng",
    "type": "Municipality"
  },
  {
    "countryCode": "VN",
    "code": "VN-33",
    "name": "Đắk Lắk",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-72",
    "name": "Đắk Nông",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-39",
    "name": "Đồng Nai",
    "type": "Province"
  },
  {
    "countryCode": "VN",
    "code": "VN-45",
    "name": "Đồng Tháp",
    "type": "Province"
  },
  {
    "countryCode": "VU",
    "code": "VU-MAP",
    "name": "Malampa",
    "type": "Province"
  },
  {
    "countryCode": "VU",
    "code": "VU-PAM",
    "name": "Pénama",
    "type": "Province"
  },
  {
    "countryCode": "VU",
    "code": "VU-SAM",
    "name": "Sanma",
    "type": "Province"
  },
  {
    "countryCode": "VU",
    "code": "VU-SEE",
    "name": "Shéfa",
    "type": "Province"
  },
  {
    "countryCode": "VU",
    "code": "VU-TAE",
    "name": "Taféa",
    "type": "Province"
  },
  {
    "countryCode": "VU",
    "code": "VU-TOB",
    "name": "Torba",
    "type": "Province"
  },
  {
    "countryCode": "WF",
    "code": "WF-AL",
    "name": "Alo",
    "type": "Administrative precinct"
  },
  {
    "countryCode": "WF",
    "code": "WF-SG",
    "name": "Sigave",
    "type": "Administrative precinct"
  },
  {
    "countryCode": "WF",
    "code": "WF-UV",
    "name": "Uvea",
    "type": "Administrative precinct"
  },
  {
    "countryCode": "WS",
    "code": "WS-AA",
    "name": "A'ana",
    "type": "District"
  },
  {
    "countryCode": "WS",
    "code": "WS-AL",
    "name": "Aiga-i-le-Tai",
    "type": "District"
  },
  {
    "countryCode": "WS",
    "code": "WS-AT",
    "name": "Atua",
    "type": "District"
  },
  {
    "countryCode": "WS",
    "code": "WS-FA",
    "name": "Fa'asaleleaga",
    "type": "District"
  },
  {
    "countryCode": "WS",
    "code": "WS-GE",
    "name": "Gaga'emauga",
    "type": "District"
  },
  {
    "countryCode": "WS",
    "code": "WS-GI",
    "name": "Gagaifomauga",
    "type": "District"
  },
  {
    "countryCode": "WS",
    "code": "WS-PA",
    "name": "Palauli",
    "type": "District"
  },
  {
    "countryCode": "WS",
    "code": "WS-SA",
    "name": "Satupa'itea",
    "type": "District"
  },
  {
    "countryCode": "WS",
    "code": "WS-TU",
    "name": "Tuamasaga",
    "type": "District"
  },
  {
    "countryCode": "WS",
    "code": "WS-VF",
    "name": "Va'a-o-Fonoti",
    "type": "District"
  },
  {
    "countryCode": "WS",
    "code": "WS-VS",
    "name": "Vaisigano",
    "type": "District"
  },
  {
    "countryCode": "YE",
    "code": "YE-AB",
    "name": "Abyan",
    "type": "Governorate"
  },
  {
    "countryCode": "YE",
    "code": "YE-BA",
    "name": "Al Bayḑā’",
    "type": "Governorate"
  },
  {
    "countryCode": "YE",
    "code": "YE-JA",
    "name": "Al Jawf",
    "type": "Governorate"
  },
  {
    "countryCode": "YE",
    "code": "YE-MR",
    "name": "Al Mahrah",
    "type": "Governorate"
  },
  {
    "countryCode": "YE",
    "code": "YE-MW",
    "name": "Al Maḩwīt",
    "type": "Governorate"
  },
  {
    "countryCode": "YE",
    "code": "YE-HU",
    "name": "Al Ḩudaydah",
    "type": "Governorate"
  },
  {
    "countryCode": "YE",
    "code": "YE-SA",
    "name": "Amānat al ‘Āşimah [city]",
    "type": "Municipality"
  },
  {
    "countryCode": "YE",
    "code": "YE-SU",
    "name": "Arkhabīl Suquţrá",
    "type": "Governorate"
  },
  {
    "countryCode": "YE",
    "code": "YE-DA",
    "name": "Aḑ Ḑāli‘",
    "type": "Governorate"
  },
  {
    "countryCode": "YE",
    "code": "YE-DH",
    "name": "Dhamār",
    "type": "Governorate"
  },
  {
    "countryCode": "YE",
    "code": "YE-IB",
    "name": "Ibb",
    "type": "Governorate"
  },
  {
    "countryCode": "YE",
    "code": "YE-LA",
    "name": "Laḩij",
    "type": "Governorate"
  },
  {
    "countryCode": "YE",
    "code": "YE-MA",
    "name": "Ma’rib",
    "type": "Governorate"
  },
  {
    "countryCode": "YE",
    "code": "YE-RA",
    "name": "Raymah",
    "type": "Governorate"
  },
  {
    "countryCode": "YE",
    "code": "YE-SH",
    "name": "Shabwah",
    "type": "Governorate"
  },
  {
    "countryCode": "YE",
    "code": "YE-TA",
    "name": "Tāʻizz",
    "type": "Governorate"
  },
  {
    "countryCode": "YE",
    "code": "YE-SN",
    "name": "Şanʻā’",
    "type": "Governorate"
  },
  {
    "countryCode": "YE",
    "code": "YE-SD",
    "name": "Şāʻdah",
    "type": "Governorate"
  },
  {
    "countryCode": "YE",
    "code": "YE-HJ",
    "name": "Ḩajjah",
    "type": "Governorate"
  },
  {
    "countryCode": "YE",
    "code": "YE-HD",
    "name": "Ḩaḑramawt",
    "type": "Governorate"
  },
  {
    "countryCode": "YE",
    "code": "YE-AD",
    "name": "‘Adan",
    "type": "Governorate"
  },
  {
    "countryCode": "YE",
    "code": "YE-AM",
    "name": "‘Amrān",
    "type": "Governorate"
  },
  {
    "countryCode": "ZA",
    "code": "ZA-EC",
    "name": "Eastern Cape",
    "type": "Province"
  },
  {
    "countryCode": "ZA",
    "code": "ZA-FS",
    "name": "Free State",
    "type": "Province"
  },
  {
    "countryCode": "ZA",
    "code": "ZA-GP",
    "name": "Gauteng",
    "type": "Province"
  },
  {
    "countryCode": "ZA",
    "code": "ZA-KZN",
    "name": "Kwazulu-Natal",
    "type": "Province"
  },
  {
    "countryCode": "ZA",
    "code": "ZA-LP",
    "name": "Limpopo",
    "type": "Province"
  },
  {
    "countryCode": "ZA",
    "code": "ZA-MP",
    "name": "Mpumalanga",
    "type": "Province"
  },
  {
    "countryCode": "ZA",
    "code": "ZA-NW",
    "name": "North-West",
    "type": "Province"
  },
  {
    "countryCode": "ZA",
    "code": "ZA-NC",
    "name": "Northern Cape",
    "type": "Province"
  },
  {
    "countryCode": "ZA",
    "code": "ZA-WC",
    "name": "Western Cape",
    "type": "Province"
  },
  {
    "countryCode": "ZM",
    "code": "ZM-02",
    "name": "Central",
    "type": "Province"
  },
  {
    "countryCode": "ZM",
    "code": "ZM-08",
    "name": "Copperbelt",
    "type": "Province"
  },
  {
    "countryCode": "ZM",
    "code": "ZM-03",
    "name": "Eastern",
    "type": "Province"
  },
  {
    "countryCode": "ZM",
    "code": "ZM-04",
    "name": "Luapula",
    "type": "Province"
  },
  {
    "countryCode": "ZM",
    "code": "ZM-09",
    "name": "Lusaka",
    "type": "Province"
  },
  {
    "countryCode": "ZM",
    "code": "ZM-10",
    "name": "Muchinga",
    "type": "Province"
  },
  {
    "countryCode": "ZM",
    "code": "ZM-06",
    "name": "North-Western",
    "type": "Province"
  },
  {
    "countryCode": "ZM",
    "code": "ZM-05",
    "name": "Northern",
    "type": "Province"
  },
  {
    "countryCode": "ZM",
    "code": "ZM-07",
    "name": "Southern",
    "type": "Province"
  },
  {
    "countryCode": "ZM",
    "code": "ZM-01",
    "name": "Western",
    "type": "Province"
  },
  {
    "countryCode": "ZW",
    "code": "ZW-BU",
    "name": "Bulawayo",
    "type": "Province"
  },
  {
    "countryCode": "ZW",
    "code": "ZW-HA",
    "name": "Harare",
    "type": "Province"
  },
  {
    "countryCode": "ZW",
    "code": "ZW-MA",
    "name": "Manicaland",
    "type": "Province"
  },
  {
    "countryCode": "ZW",
    "code": "ZW-MC",
    "name": "Mashonaland Central",
    "type": "Province"
  },
  {
    "countryCode": "ZW",
    "code": "ZW-ME",
    "name": "Mashonaland East",
    "type": "Province"
  },
  {
    "countryCode": "ZW",
    "code": "ZW-MW",
    "name": "Mashonaland West",
    "type": "Province"
  },
  {
    "countryCode": "ZW",
    "code": "ZW-MV",
    "name": "Masvingo",
    "type": "Province"
  },
  {
    "countryCode": "ZW",
    "code": "ZW-MN",
    "name": "Matabeleland North",
    "type": "Province"
  },
  {
    "countryCode": "ZW",
    "code": "ZW-MS",
    "name": "Matabeleland South",
    "type": "Province"
  },
  {
    "countryCode": "ZW",
    "code": "ZW-MI",
    "name": "Midlands",
    "type": "Province"
  }
];
const TAXEZ_CURRENCIES = [
  "AED",
  "AFN",
  "ALL",
  "AMD",
  "ANG",
  "AOA",
  "ARS",
  "AUD",
  "AWG",
  "AZN",
  "BAM",
  "BBD",
  "BDT",
  "BGN",
  "BHD",
  "BIF",
  "BMD",
  "BND",
  "BOB",
  "BOV",
  "BRL",
  "BSD",
  "BTN",
  "BWP",
  "BYN",
  "BZD",
  "CAD",
  "CDF",
  "CHE",
  "CHF",
  "CHW",
  "CLF",
  "CLP",
  "CNY",
  "COP",
  "COU",
  "CRC",
  "CUC",
  "CUP",
  "CVE",
  "CZK",
  "DJF",
  "DKK",
  "DOP",
  "DZD",
  "EGP",
  "ERN",
  "ETB",
  "EUR",
  "FJD",
  "FKP",
  "GBP",
  "GEL",
  "GHS",
  "GIP",
  "GMD",
  "GNF",
  "GTQ",
  "GYD",
  "HKD",
  "HNL",
  "HRK",
  "HTG",
  "HUF",
  "IDR",
  "ILS",
  "INR",
  "IQD",
  "IRR",
  "ISK",
  "JMD",
  "JOD",
  "JPY",
  "KES",
  "KGS",
  "KHR",
  "KMF",
  "KPW",
  "KRW",
  "KWD",
  "KYD",
  "KZT",
  "LAK",
  "LBP",
  "LKR",
  "LRD",
  "LSL",
  "LYD",
  "MAD",
  "MDL",
  "MGA",
  "MKD",
  "MMK",
  "MNT",
  "MOP",
  "MRU",
  "MUR",
  "MVR",
  "MWK",
  "MXN",
  "MXV",
  "MYR",
  "MZN",
  "NAD",
  "NGN",
  "NIO",
  "NOK",
  "NPR",
  "NZD",
  "OMR",
  "PAB",
  "PEN",
  "PGK",
  "PHP",
  "PKR",
  "PLN",
  "PYG",
  "QAR",
  "RON",
  "RSD",
  "RUB",
  "RWF",
  "SAR",
  "SBD",
  "SCR",
  "SDG",
  "SEK",
  "SGD",
  "SHP",
  "SLE",
  "SLL",
  "SOS",
  "SRD",
  "SSP",
  "STN",
  "SVC",
  "SYP",
  "SZL",
  "THB",
  "TJS",
  "TMT",
  "TND",
  "TOP",
  "TRY",
  "TTD",
  "TWD",
  "TZS",
  "UAH",
  "UGX",
  "USD",
  "USN",
  "UYI",
  "UYU",
  "UYW",
  "UZS",
  "VED",
  "VES",
  "VND",
  "VUV",
  "WST",
  "XAF",
  "XAG",
  "XAU",
  "XBA",
  "XBB",
  "XBC",
  "XBD",
  "XCD",
  "XDR",
  "XOF",
  "XPD",
  "XPF",
  "XPT",
  "XSU",
  "XTS",
  "XUA",
  "XXX",
  "YER",
  "ZAR",
  "ZMW",
  "ZWL"
];

if (typeof window !== "undefined") {
  window.TAXEZ_COUNTRIES = TAXEZ_COUNTRIES;
  window.TAXEZ_REGIONS = TAXEZ_REGIONS;
  window.TAXEZ_CURRENCIES = TAXEZ_CURRENCIES;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { TAXEZ_COUNTRIES, TAXEZ_REGIONS, TAXEZ_CURRENCIES };
}
