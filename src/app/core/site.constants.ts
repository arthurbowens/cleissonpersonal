/**
 * Conteúdo e links do site. Ajuste WhatsApp, Instagram e e-mail antes de publicar.
 */
export const SITE = {
  brand: 'Cleisson Personal',
  title:
    'Recupere mobilidade e autonomia — personal trainer em domicílio e presencial | Cleisson Personal',
  description:
    'Acompanhamento para idosos, limitações de mobilidade, hipertensão e diabetes. Atendimento em casa ou presencial. Fale no WhatsApp.',
  whatsappPhoneDigits: '5511999999999',
  whatsappPrefillMessage:
    'Olá, Cleisson! Quero me movimentar com mais segurança e gostaria de conversar sobre acompanhamento.',
  /** Troque pelo @ real (ex.: https://www.instagram.com/cleissonpersonal/) */
  instagramProfileUrl: 'https://www.instagram.com/',
} as const;

export const COPY = {
  heroHeadline:
    'Recupere sua mobilidade, reduza dores e volte a ter autonomia com segurança — mesmo com limitações ou idade avançada.',
  heroSub:
    'Atendimento personalizado em casa ou presencial, com foco em saúde, reabilitação e qualidade de vida.',
  ctaPrimary: 'Quero voltar a me movimentar sem dor',
  ctaSecondary: 'Falar com o personal agora',
  /** Texto curto no topo (cabe em telas pequenas) */
  ctaHeader: 'WhatsApp',
  familyBanner: 'Cuide de quem você ama com acompanhamento profissional seguro.',
  familySub:
    'Muitas famílias procuram ajuda para pai, mãe ou avós: alguém que respeite limitações, medo de cair e o ritmo do dia a dia. Esse é um dos focos do trabalho.',
  aboutHeading: 'Mais autonomia, menos dor e mais segurança no dia a dia',
  ctaMidTitle1: 'Sem compromisso: conte seu caso no WhatsApp e receba orientação.',
  ctaAfterSobre:
    'Quem cuida da família também precisa de apoio. Um passo no WhatsApp pode esclarecer tudo.',
  ctaMidTitle2: 'Resposta direta, sem formulário longo — fale agora.',
  ctaFinalTitle: 'Um passo hoje pode mudar o amanhã de quem você ama.',
  ctaFinalSub:
    'Chame no WhatsApp. Se preferir, acompanhe o dia a dia no Instagram.',
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
