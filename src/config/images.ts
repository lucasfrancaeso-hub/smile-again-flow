// =====================================================================
//  📸  CONFIGURAÇÃO DE IMAGENS DA SC DENTAL
// =====================================================================
//
//  Aqui você troca TODAS as fotos do site sem mexer em código.
//
//  COMO USAR (passo a passo):
//
//  OPÇÃO 1 — Mais fácil (arrastar suas fotos):
//    1. No Lovable, clique no botão "+" do chat e envie suas fotos.
//    2. Me diga: "use essa foto no hero" (ou onde quiser).
//    3. Eu coloco para você.
//
//  OPÇÃO 2 — Você mesmo, com link da internet (Instagram, Drive público, etc):
//    1. Copie o LINK direto da imagem (precisa terminar em .jpg, .png ou .webp).
//    2. Cole entre as aspas "" no campo correspondente abaixo.
//    3. Salve. Pronto, a foto aparece no site.
//
//  Se deixar "" vazio, o site mostra o placeholder bonito que já está lá.
//
// =====================================================================

export const IMAGES = {
  // 🏠 Foto principal do topo do site (paciente sorrindo, antes/depois, etc)
  hero: "",

  // 👨‍⚕️ Foto do Dr. Ornei (profissional, jaleco)
  drOrnei: "/imagens/drornei.png",

  // 😁 Casos clínicos (antes e depois) — até 3 casos
  // Se a sua foto JÁ contém o antes e depois juntos (lado a lado),
  // use o campo "combo" e deixe antes/depois vazios.
  casos: [
    { antes: "", depois: "", combo: "/imagens/antesedepois1.png" },
    { antes: "", depois: "", combo: "/imagens/antesedepois2.png" },
    { antes: "", depois: "", combo: "/imagens/antesedepois3.png" },
  ],
};
