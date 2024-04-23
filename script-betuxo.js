document.addEventListener("DOMContentLoaded", function() {
  // Supondo que você tenha o objeto JSON como uma variável chamada config
  var config = {
    "pageTitle": "Fortune Dragon: Multiplicadores Mágicos | Aposta Mínima de R$0,40 na UPBET",
    "metaDescription": {
      "name": "description",
      "content": "Junte-se à aventura épica com Fortune Dragon na UPBET. Com uma aposta mínima de apenas R$0,40, mergulhe em um mundo onde dragões simbolizam sorte e prosperidade, multiplicando suas apostas de forma espetacular. Desfrute de um RTP impressionante de 96,74% em uma configuração de bobinas 3×3, repleta de ação com recursos como a Funcionalidade do Dragão da Fortuna, Modo “Wild” e Bobina Multiplicadora. Experimente uma jogabilidade dinâmica com 5 possibilidades de vitória e uma volatilidade média. Busque a fortuna máxima de 2.500x e torne-se o próximo grande vencedor!"
    }
  };

  // Definindo o título da página
  document.title = config.pageTitle;

  // Criando e configurando a meta tag de descrição
  var metaDescription = document.createElement('meta');
  metaDescription.name = config.metaDescription.name;
  metaDescription.content = config.metaDescription.content;
  document.getElementsByTagName('head')[0].appendChild(metaDescription);
});