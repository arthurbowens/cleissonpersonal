/**
 * Conteúdo e links do site. Ajuste WhatsApp e Instagram antes de publicar.
 */
export const SITE = {
  brand: 'Cleisson Personal',
  title:
    'Recupere mobilidade e autonomia — personal trainer em domicílio e presencial | Cleisson Personal',
  description:
    'Acompanhamento para idosos, limitações de mobilidade, hipertensão e diabetes. Atendimento em casa ou presencial.',
  whatsappPhoneDigits: '5554996474796',
  whatsappPrefillMessage:
    'Olá, Cleisson! Vi o site. Quero uma orientação: é para mim / é para alguém da minha família. Podemos falar de horários e domicílio ou presencial?',
  /** Troque pelo @ real (ex.: https://www.instagram.com/cleissonpersonal/) */
  instagramProfileUrl: 'https://www.instagram.com/cleisson_personal_trainer?igsh=am9keGN6ZjFkcjF0',
} as const;

/**
 * Uma frase de conversão para TODOS os botões verdes (sem competir com variação).
 * Microcopy: explica o "o quê" sem ser segundo CTA.
 */
export const COPY = {
  heroHeadline:
    'Recupere sua mobilidade, reduza dores e volte a ter autonomia com segurança — mesmo com limitações ou idade avançada.',
  heroSub:
    'Atendimento personalizado em casa ou presencial, com foco em saúde, reabilitação e qualidade de vida.',
  /** Botão verde (única promessa) */
  ctaWhatsapp: 'Falar com o Cleisson no WhatsApp',
  /** Uma linha de confiança debaixo do CTA (não é outro botão) */
  ctaTrust: '1ª conversa: entendemos o caso, tiramos dúvidas, sem pressa. Resposta em horário comercial.',
  ctaHeader: 'WhatsApp',
  familyBanner: 'Cuide de quem você ama com acompanhamento profissional seguro.',
  familySub:
    'Muitas famílias procuram ajuda para pai, mãe ou avós: alguém que respeite limitações, medo de cair e o ritmo do dia a dia. Esse é um dos focos do trabalho.',
  aboutHeading: 'Mais autonomia, menos dor e mais segurança no dia a dia',
  ctaMidTitle1: 'Sem compromisso: se fizer sentido, você sabe o próximo passo.',
  ctaAfterSobre: 'Cuidar de alguém cansa — com orientação, fica mais seguro decidir o que fazer.',
  ctaMidTitle2: 'Quando quiser, a conversa é com calma, olhando a rotina e as limitações.',
  ctaFinalTitle: 'Se chegou até aqui, o próximo passo é claro',
  ctaFinalSub:
    'No Instagram você vê o estilo de trabalho. No WhatsApp a gente vê o que encaixa no seu caso: rotina, limitações, casa ou outro local — sem compromisso na conversa.',
} as const;

export const PAIN_POINTS = [
  { id: 'walk', text: 'Dores ao andar ou levantar' },
  { id: 'fall', text: 'Medo de cair ou piorar uma lesão' },
  { id: 'sed', text: 'Sedentarismo por insegurança' },
  { id: 'mob', text: 'Dificuldade de mobilidade no dia a dia' },
  { id: 'age', text: 'Idade avançada e perda de autonomia' },
] as const;

export const TESTIMONIALS = [
  {
    quote: 'Hoje consigo subir escadas sem dor.',
    author: 'Aluna',
    detail: 'Acompanhamento presencial',
  },
  {
    quote: 'Minha mãe voltou a andar sozinha no quintal.',
    author: 'Filha de aluna',
    detail: 'Treinos em domicílio',
  },
  {
    quote: 'Finalmente voltamos a confiar que ela se exercita sem risco.',
    author: 'Família',
    detail: 'Idosa com limitações',
  },
] as const;

export function whatsappHref(): string {
  const text = encodeURIComponent(SITE.whatsappPrefillMessage);
  return `https://wa.me/${SITE.whatsappPhoneDigits}?text=${text}`;
}

export const NAV_LINKS = [
  { id: 'dor', label: 'Situações' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'metodo', label: 'Método' },
  { id: 'publico', label: 'Público' },
  { id: 'depoimentos', label: 'Depoimentos' },
  { id: 'contato', label: 'Contato' },
] as const;
