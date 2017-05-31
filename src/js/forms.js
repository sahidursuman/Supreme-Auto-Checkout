const countries = [{"text": "UK", "value": "GB"}, {"text": "UK (N. IRELAND)", "value": "NB"}, {
    "text": "-",
    "value": ""
}, {"text": "AUSTRIA", "value": "AT"}, {"text": "BELARUS", "value": "BY"}, {
    "text": "BELGIUM",
    "value": "BE"
}, {"text": "BULGARIA", "value": "BG"}, {"text": "CROATIA", "value": "HR"}, {
    "text": "CZECH REPUBLIC",
    "value": "CZ"
}, {"text": "DENMARK", "value": "DK"}, {"text": "ESTONIA", "value": "EE"}, {
    "text": "FINLAND",
    "value": "FI"
}, {"text": "FRANCE", "value": "FR"}, {"text": "GERMANY", "value": "DE"}, {
    "text": "GREECE",
    "value": "GR"
}, {"text": "HUNGARY", "value": "HU"}, {"text": "ICELAND", "value": "IS"}, {
    "text": "IRELAND",
    "value": "IE"
}, {"text": "ITALY", "value": "IT"}, {"text": "LATVIA", "value": "LV"}, {
    "text": "LITHUANIA",
    "value": "LT"
}, {"text": "LUXEMBOURG", "value": "LU"}, {"text": "MONACO", "value": "MC"}, {
    "text": "NETHERLANDS",
    "value": "NL"
}, {"text": "NORWAY", "value": "NO"}, {"text": "POLAND", "value": "PL"}, {
    "text": "PORTUGAL",
    "value": "PT"
}, {"text": "ROMANIA", "value": "RO"}, {"text": "RUSSIA", "value": "RU"}, {
    "text": "SLOVAKIA",
    "value": "SK"
}, {"text": "SLOVENIA", "value": "SI"}, {"text": "SPAIN", "value": "ES"}, {
    "text": "SWEDEN",
    "value": "SE"
}, {"text": "SWITZERLAND", "value": "CH"}, {"text": "TURKEY", "value": "TR"}];

const countries_palace = [{"text":"United Kingdom","value":"United Kingdom"},{"text":"Germany","value":"Germany"},{"text":"Denmark","value":"Denmark"},{"text":"Russia","value":"Russia"},{"text":"---","value":"---"},{"text":"Australia","value":"Australia"},{"text":"Austria","value":"Austria"},{"text":"Belgium","value":"Belgium"},{"text":"Bosnia & Herzegovina","value":"Bosnia And Herzegovina"},{"text":"Croatia","value":"Croatia"},{"text":"Czech Republic","value":"Czech Republic"},{"text":"Denmark","value":"Denmark"},{"text":"Estonia","value":"Estonia"},{"text":"Finland","value":"Finland"},{"text":"France","value":"France"},{"text":"Germany","value":"Germany"},{"text":"Greece","value":"Greece"},{"text":"Hungary","value":"Hungary"},{"text":"Iceland","value":"Iceland"},{"text":"Ireland","value":"Ireland"},{"text":"Italy","value":"Italy"},{"text":"Japan","value":"Japan"},{"text":"Latvia","value":"Latvia"},{"text":"Lithuania","value":"Lithuania"},{"text":"Luxembourg","value":"Luxembourg"},{"text":"Monaco","value":"Monaco"},{"text":"Netherlands","value":"Netherlands"},{"text":"Norway","value":"Norway"},{"text":"Poland","value":"Poland"},{"text":"Portugal","value":"Portugal"},{"text":"Romania","value":"Romania"},{"text":"Russia","value":"Russia"},{"text":"Slovakia","value":"Slovakia"},{"text":"Slovenia","value":"Slovenia"},{"text":"Spain","value":"Spain"},{"text":"Sweden","value":"Sweden"},{"text":"Switzerland","value":"Switzerland"},{"text":"United Kingdom","value":"United Kingdom"}];


const cards = [{
    "text": "Visa",
    "value": "visa"
}, {
    "text": "American Express",
    "value": "american_express"
}, {
    "text": "Mastercard",
    "value": "master"
}, {
    "text": "Solo",
    "value": "solo"
}, {
    "text": "PayPal",
    "value": "paypal"
}];

const sizes = ["Small", "Medium", "Large", "XLarge"];
const sizesPants = ["28", "30", "32", "34", "36", "38", "40"];
const shoeSizes = ["4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14", "14.5"];
const currentYear = new Date().getFullYear();

const _preferences = {
    "autoCheckout": {
        "type": "boolean",
        "title": "Auto Checkout",
        "description": "If enabled, the product will be automatically added to your cart and will proceed to the checkout page",
        "default": false,
        "required": true,
    },
    "autoPay": {
        "type": "boolean",
        "title": "Auto Payment",
        "description": "Will automatically submit the checkout form when on the checkout page",
        "default": false,
        "required": true,
    },
    "strictSize": {
        "type": "boolean",
        "title": "Strict size choice",
        "description": "If enabled, the bot will NOT add a product to the cart if your desired size isn't available",
        "default": false,
        "required": true,
    },
    "captchaBypass": {
        "type": "boolean",
        "title": "Bypass Captcha (beta)",
        "description": "If enabled, the bot will try to bypass the captcha by removing it from the checkout page, not guaranteed to work",
        "default": false,
        "required": true,
    },
    "hideSoldOut": {
        "type": "boolean",
        "title": "Hide sold out products",
        "description": "If enabled, the sold out products won't be shown on the product list",
        "default": false,
        "required": true,
    },
    "addToCartDelay": {
        "type": "integer",
        "title": "Add to cart delay (ms)",
        "description": "Delay before adding the product to the cart if autocheckout is enabled",
        "minimum": 1,
        "default": 300,
        "required": true,
    },
    "goToCheckoutDelay": {
        "type": "integer",
        "title": "Proceed to checkout delay (ms)",
        "description": "Delay before going to checkout once the product is added to the cart",
        "minimum": 1,
        "default": 200,
        "required": true,
    },
    "checkoutDelay": {
        "type": "integer",
        "title": "Checkout delay (ms)",
        "description": "Delay before submitting the payment once on the payment page",
        "minimum": 1,
        "default": 1500,
        "required": true,
    },
    "maxPrice": {
        "type": "integer",
        "title": "Maximum product price",
        "description": "Maximum product price, the product will not be added to the cart if it is higher than this price",
        "minimum": 0,
        "required": false,
    },
    "minPrice": {
        "type": "integer",
        "title": "Minimum product price",
        "description": "Minimum product price, the product will not be added to the cart if it is lower than this price",
        "minimum": 0,
        "required": false,
    },
};

const _sizings = {
    "accessories": {
        "type": "string",
        "title": "Accessories",
        "required": true,
        "minLength": 1,
        "enum": sizes
    },
    "t-shirts": {
        "type": "string",
        "title": "T-Shirts",
        "required": true,
        "minLength": 1,
        "enum": sizes
    },
    "pants": {
        "type": "string",
        "title": "Pants",
        "required": true,
        "minLength": 1,
        "enum": sizesPants
    },
    "shorts": {
        "type": "string",
        "title": "Shorts",
        "required": true,
        "minLength": 1,
        "enum": sizesPants
    },
    "sweatshirts": {
        "type": "string",
        "title": "Sweatshirts",
        "required": true,
        "minLength": 1,
        "enum": sizes
    },
    "tops": {
        "type": "string",
        "title": "Tops/Sweaters",
        "required": true,
        "minLength": 1,
        "enum": sizes
    },
    "shirts": {
        "type": "string",
        "title": "Shirts",
        "required": true,
        "minLength": 1,
        "enum": sizes
    },
    "jackets": {
        "type": "string",
        "title": "Jackets",
        "required": true,
        "minLength": 1,
        "enum": sizes
    },
    "shoes": {
        "type": "string",
        "title": "Shoes",
        "required": true,
        "minLength": 1,
        "enum": shoeSizes
    }
};

const _forms = [
    {
        "category": "Supreme",
        "type": "object",
        "name": "preferences",
        "properties": _preferences
    },
    {
        "category": "Supreme",
        "type": "object",
        "name": "billing",
        "properties": {
            "order_billing_name": {
                "type": "string",
                "title": "Firstname and Lastname",
                "description": "Firstname and Lastname separated by a space",
                "required": true,
                "minLength": 1,
                "pattern": /(\w+)(\s)(\w+)/
            },
            "order_email": {
                "type": "string",
                "format": "email",
                "title": "Email",
                "required": true,
                "minLength": 1
            },
            "order_tel": {
                "type": "string",
                "format": "tel",
                "title": "Phone",
                "required": true,
                "minLength": 1
            },
            "bo": {
                "type": "string",
                "title": "Address",
                "required": true,
                "minLength": 1
            },
            "order_billing_city": {
                "type": "string",
                "title": "City",
                "required": true,
                "minLength": 1
            },
            "order_billing_country": {
                "type": "string",
                "title": "Country",
                "required": true,
                "enum": countries
            },
            "order_billing_zip": {
                "type": "string",
                "title": "Zip",
                "required": true,
                "minLength": 1
            },
            "credit_card_type": {
                "type": "string",
                "title": "Card Type",
                "required": true,
                "minLength": 1,
                "enum": cards
            },
            "cnb": {
                "type": "string",
                "title": "Credit Card Number",
                "required": true,
                "minLength": 1
            },
            "credit_card_month": {
                "type": "string",
                "title": "Expiry month",
                "required": true,
                "minLength": 1,
                "enum": Array.apply(null, new Array(12)).map((x, i) => ++i < 10 ? `0${i}` : i),
            },
            "credit_card_year": {
                "type": "string",
                "title": "Expiry year",
                "required": true,
                "minLength": 1,
                "enum": Array.apply(null, new Array(5)).map((x, i) => currentYear + i),
            },
            "vval": {
                "type": "string",
                "title": "CCV",
                "required": true,
                "minLength": 1,
                "maxLength": 4
            },
        }
    },
    {
        "category": "Supreme",
        "type": "object",
        "name": "sizings",
        "properties": _sizings,
    },
    {
        "category": "Palace",
        "type": "object",
        "name": "preferences",
        "properties": _preferences,
    },
    {
        "category": "Palace",
        "type": "object",
        "name": "billing",
        "properties": {
            "checkout_email": {
                "type": "string",
                "format": "email",
                "title": "Email",
                "required": true,
                "minLength": 1,
            },
            "checkout_shipping_address_first_name": {
                "type": "string",
                "title": "First name",
                "required": true,
                "minLength": 1,
            },
            "checkout_shipping_address_last_name": {
                "type": "string",
                "title": "Last name",
                "required": true,
                "minLength": 1,
            },
            "checkout_shipping_address_address1": {
                "type": "string",
                "title": "address ",
                "required": true,
                "minLength": 1,
            },
            "checkout_shipping_address_address2": {
                "type": "string",
                "title": "Apt, suite, etc",
                "required": true,
                "minLength": 1,
            },
            "checkout_shipping_address_city": {
                "type": "string",
                "title": "City",
                "required": true,
                "minLength": 1,
            },
            "checkout_shipping_address_country": {
                "type": "string",
                "title": "Country",
                "required": true,
                "minLength": 1,
                "enum": countries_palace,
            },
            "checkout_shipping_address_zip": {
                "type": "string",
                "title": "Zip code",
                "required": true,
                "minLength": 1,
            },
            "checkout_shipping_address_phone": {
                "type": "string",
                "title": "Phone",
                "required": true,
                "minLength": 1,
            },
        }
    },

    {
        "category": "Palace",
        "type": "object",
        "name": "sizings",
        "properties": _sizings,
    }
];

function getForms() {
    return _forms;
}