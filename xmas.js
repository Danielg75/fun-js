const secret = " 🕍🕥👲👲🕹🤠🥘👭👡🕳".split('');
const first_xmas_day = '\x25';
const xmas_days = 2;

ಠ_ಠ = secret.reduce((message,hohoho,emoji) => 
message + (emoji % xmas_days ? '' : first_xmas_day + escape(secret[emoji]).slice(-xmas_days)));
console.log(unescape(ಠ_ಠ));