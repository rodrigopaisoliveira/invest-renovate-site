// Central contact configuration — edit here to update site-wide.
export const WHATSAPP_NUMBER = "351924240781"; // international format, no + or spaces
export const PHONE_NUMBER = {
  display: "+351 924 240 781",
  tel: "+351924240781",
};
export const EMAIL = "innovatequestlda@gmail.com";
export const INSTAGRAM = "https://www.instagram.com/innovate_quest/";
export const LOCATION = "Grande Lisboa";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
