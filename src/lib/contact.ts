// Central contact configuration — edit here to update site-wide.
export const WHATSAPP_NUMBER = "351924240781"; // international format, no + or spaces

export const PHONE_NUMBERS = [
  {
    name: "André Moreira",
    display: "924 240 781",
    tel: "+351924240781",
    whatsapp: "351924240781",
  },
  {
    name: "Bernardo Moreira",
    display: "918 181 582",
    tel: "+351918181582",
    whatsapp: "351918181582",
  },
];

// Main contact kept for components that only need one number.
export const PHONE_NUMBER = PHONE_NUMBERS[0];

export const EMAIL = "innovatequestlda@gmail.com";
export const INSTAGRAM = "https://www.instagram.com/innovate_quest/";
export const LOCATION = "Grande Lisboa";

export function whatsappUrl(message: string, number: string = WHATSAPP_NUMBER) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
