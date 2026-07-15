// Central contact configuration — edit here to update site-wide.
export const WHATSAPP_NUMBER = "351910000000"; // international format, no + or spaces
export const PHONE_NUMBER = {
  display: "+351 910 000 000",
  tel: "+351910000000",
};
export const EMAIL = "geral@innovatequest.pt";
export const INSTAGRAM = "https://instagram.com/innovatequest";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
