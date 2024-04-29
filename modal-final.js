(function() {
    var linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'container-torneio-ganhadores-style.css';
    document.head.appendChild(linkElement);

    // Altera o seletor para classe
    var buttons = document.querySelectorAll('.btnInserirConteudoTorneio');
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            var containerDiv = document.createElement('div');
            containerDiv.id = 'div-principal-torneio-informacoes';
            
            // ConteÃºdo HTML
            var htmlContent1 =  `<div class="cointainer-principal-informacoes-torneio">
            <div class="imagem-banner-informacoes-torneio">
                <img src="https://static.sportingtech.com/upsports/upload_files/1310x370.png" alt="">
                <span id="torneio-em-andamento">Em Andamento</span>
            </div>
            <div class="titulo-e-premiacao-torneio">
                <p>Drops</p>
                <span>Conjunto de prÃªmios R$150.000.000</span>
            </div>
            <div class="conteudo-premiacao-torneio">
                <p id="titulo-1-torneio">Torneio De Cassino</p>
                <p>DÃª as boas-vindas ao emocionante mundo dos torneios diÃ¡rios! Neste torneio, a cada dia oferecemos uma chance Ãºnica para os entusiastas de jogos demonstrarem suas habilidades e concorrerem a prÃªmios espetaculares.</p>
                <p>A participaÃ§Ã£o Ã© simples: os jogadores devem se inscrever ativamente no torneio e realizar pelo menos um giro com dinheiro real para serem elegÃ­veis aos prÃªmios diÃ¡rios.</p>
                <p>AlÃ©m disso, em nossos Torneios DiÃ¡rios, cada giro conta! Os pontos sÃ£o acumulados com base na soma dos multiplicadores de vitÃ³rias, e os prÃªmios sÃ£o generosamente distribuÃ­dos de acordo com a classificaÃ§Ã£o dos jogadores no ranking. NÃ£o perca a chance de girar, ganhar e subir ao topo!</p>
            </div>
            <details class="conteudo-regras-torneio">
                <summary><p>Regras do Torneio <strong>â®Ÿ</strong></p></summary>
                <ul>
    <li><strong>Lista de Premiados e Regras:</strong> As regras e a lista de premiados estarÃ£o acessÃ­veis nos jogos participantes.</li>
    <li><strong>Elegibilidade para Torneios:</strong> Apenas as 5000 primeiras apostas qualificadas por dia sÃ£o elegÃ­veis para participar dos torneios diÃ¡rios.</li>
    <li><strong>Fases da PromoÃ§Ã£o:</strong> A segunda fase da promoÃ§Ã£o ocorre de 03/04 atÃ© 01/05, com prÃªmios de bÃ´nus de giros grÃ¡tis instantÃ¢neos no jogo Sugar Rush 1000.</li>
</ul>

            </details>
            <div class="div-jogos-participantes-do-torneio">
            <div class="div-jogos-participantes-do-torneio">
            <div class="game-card-torneio secao-extra">
     <a href="URL_DE_DESTINO">
    
    
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/13485.jpg" alt="Gates of Olympus">
             </a>
            <p>Gates of Olympus</p>
            <p>Pragmatic Play</p>
        
    </div>
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/13183.jpg" alt="">
             </a>
            <p>Big Bass Bonanza</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/20053.jpg" alt="">
             </a>
            <p>Sugar Rush</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/8888.jpg" alt="">
             </a>
            <p>Sweet Bonanza</p>
            <p>Pragmatic Play</p>
        </div>
        </div>
        <button class="botao-torneio-informacoes-carregar" id="btnMostrarMais">Mostrar Mais</button>
    </div>

        `;
    
        var htmlContent2 =  `<div class="cointainer-principal-informacoes-torneio">
        <div class="imagem-banner-informacoes-torneio">
            <img src="https://static.sportingtech.com//upbet/images/news/57088-large.jpeg" alt="">
            <span id="torneio-em-andamento">Em Andamento</span>
        </div>
        <div class="titulo-e-premiacao-torneio">
            <p>Crash & Win</p>
            <span>Conjunto de prÃªmios R$1.500.000</span>
        </div>
        <div class="conteudo-premiacao-torneio">
            <p id="titulo-1-torneio">Torneio De Cassino</p>
            <p>Apresentamos a emocionante promoÃ§Ã£o Crash & Win, uma oportunidade Ãºnica para jogadores apaixonados e Ã¡vidos por adrenalina! Este torneio desafia os participantes a mergulhar em uma experiÃªncia de jogo intensa com a chance de ganhar prÃªmios diÃ¡rios. </p>
            <p>Com 364 drops diÃ¡rios garantidos, a dinÃ¢mica da promoÃ§Ã£o oferece surpresas constantes. Para participar, os jogadores devem ativar a opÃ§Ã£o de participaÃ§Ã£o diretamente nos jogos elegÃ­veis. 
            <p>Ã‰ essencial que todas as apostas sejam feitas com dinheiro real. AlÃ©m disso, todos os dias, as primeiras 800 apostas qualificadas tÃªm a chance de ganhar prÃªmios em dinheiro, distribuÃ­dos aleatoriamente de acordo com nossa detalhada tabela de prÃªmios. NÃ£o perca a chance de ser um dos grandes ganhadores na promoÃ§Ã£o Crash & Win!</p>
        </div>
        <details class="conteudo-regras-torneio">
            <summary><p>Regras do Torneio <strong>â®Ÿ</strong></p></summary>
            <ul>
            <li><strong>Regras e Ranking:</strong> As regras e o ranking da promoÃ§Ã£o sÃ£o exibidos nos jogos participantes.</li>
            <li><strong>Elegibilidade:</strong> Somente as primeiras 800 apostas qualificadas diariamente nos jogos participantes sÃ£o elegÃ­veis para ganhar prÃªmios.</li>
            <li><strong>Valor MÃ­nimo de Aposta:</strong> As apostas devem ser de no mÃ­nimo R$1,00 para serem consideradas qualificadas para a promoÃ§Ã£o.</li>
        </ul>
        
        </details>
        <div class="div-jogos-participantes-do-torneio">
        <div class="div-jogos-participantes-do-torneio">
        <div class="game-card-torneio secao-extra">
 <a href="URL_DE_DESTINO">


        <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/13485.jpg" alt="Gates of Olympus">
         </a>
        <p>Gates of Olympus</p>
        <p>Pragmatic Play</p>
    
</div>
    <div class="game-card-torneio secao-extra">
    <a href="URL_DE_DESTINO">
        <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/13183.jpg" alt="">
         </a>
        <p>Big Bass Bonanza</p>
        <p>Pragmatic Play</p>
    </div>  
    <div class="game-card-torneio secao-extra">
    <a href="URL_DE_DESTINO">
        <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/20053.jpg" alt="">
         </a>
        <p>Sugar Rush</p>
        <p>Pragmatic Play</p>
    </div>  
    <div class="game-card-torneio secao-extra">
    <a href="URL_DE_DESTINO">
        <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/8888.jpg" alt="">
         </a>
        <p>Sweet Bonanza</p>
        <p>Pragmatic Play</p>
    </div>  
   `;

            var htmlContent3 =  `<div class="cointainer-principal-informacoes-torneio">
            <div class="imagem-banner-informacoes-torneio">
                <img src="https://static.sportingtech.com//upbet/images/news/57142-large.jpeg" alt="">
                <span id="torneio-em-andamento">Em Andamento</span>
            </div>
            <div class="titulo-e-premiacao-torneio">
                <p>Mega Wheel</p>
                <span>Conjunto de premios R$25.000.000</span>
            </div>
            <div class="conteudo-premiacao-torneio">
                <p id="titulo-1-torneio">Torneio De Cassino</p>
                
    <p>Prepare-se para entrar no frenesi do Mega Wheel Madness, uma promoÃ§Ã£o repleta de emoÃ§Ã£o e oportunidades de ganhar prÃªmios surpreendentes diariamente! A dinÃ¢mica do jogo Ã© simples e envolvente:</p>
    <p>Drops DiÃ¡rios: Para participar, os jogadores devem optar ativamente pelo torneio e realizar uma aposta mÃ­nima especificada. Qualquer aposta pode desencadear um prÃªmio aleatÃ³rio, distribuÃ­do de acordo com a nossa detalhada tabela de prÃªmios. Cada giro pode ser a chave para um prÃªmio incrÃ­vel!</p>
    <p>Megatorneios de Sexta-Feira: Elevando a emoÃ§Ã£o a outro nÃ­vel, os megatorneios acontecem todas as sextas-feiras. Os jogadores devem entrar no torneio fazendo uma aposta mÃ­nima. As apostas nÃ£o sÃ³ aumentam suas chances de ganhar, mas tambÃ©m acumulam pontos que definem a posiÃ§Ã£o no ranking do torneio. Os prÃªmios sÃ£o generosos e distribuÃ­dos de acordo com a classificaÃ§Ã£o dos participantes.</p>
    <p>NÃ£o perca a chance de girar a roda da fortuna no Mega Wheel Madness e ganhar prÃªmios todos os dias!</p>
            </div>
            <details class="conteudo-regras-torneio">
                <summary><p>Regras do Torneio <strong>â®Ÿ</strong></p></summary>
                <<ul>
                <li><strong>FrequÃªncia dos Eventos:</strong> SÃ£o realizados 312 drops diÃ¡rios e 52 megatorneios nas sextas-feiras.</li>
                <li><strong>ParticipaÃ§Ã£o e Apostas:</strong> Ã‰ necessÃ¡rio optar pela participaÃ§Ã£o nas atividades promocionais e cumprir com o requisito de aposta mÃ­nima.</li>
                <li><strong>PremiaÃ§Ã£o:</strong> Os prÃªmios nos drops e torneios sÃ£o determinados pela tabela de prÃªmios e pela classificaÃ§Ã£o no ranking, respectivamente.</li>
            </ul>
            
            </details>
            <div class="div-jogos-participantes-do-torneio">
            <div class="div-jogos-participantes-do-torneio">
            <div class="game-card-torneio secao-extra jogo-unico">
     <a href="URL_DE_DESTINO">
    
    
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/13485.jpg" alt="Gates of Olympus">
             </a>
            <p>Gates of Olympus</p>
            <p>Pragmatic Play</p>
        
    </div>

</div>
    </div>
     `;
            
            var htmlContent4 =  `<div class="cointainer-principal-informacoes-torneio">
        <div class="imagem-banner-informacoes-torneio">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNmFdLylNY8kLboG2sUaKs-I-BjNUI6JwxE90puD4Ew&s" alt="">
            <span id="torneio-em-andamento">Em Andamento</span>
        </div>
        <div class="titulo-e-premiacao-torneio">
            <p>Wazdan</p>
            <span>Conjunto de premios R$25.000.000</span>
        </div>
        <div class="conteudo-premiacao-torneio">
   
        <p id="titulo-1-torneio">Torneio De Cassino</p>
        <p>Ganhe Grande no Torneio dos Campeões Wazdan! 🎉 De 29/04 a 29/09, jogue seus jogos favoritos de cassino da Wazdan e dispute uma parte espetacular de 5 milhões de euros em prêmios. Cada aposta pode ser a chave para desbloquear uma das 100.000 Caixas Misteriosas! Sem aposta mínima, cada jogada conta! Não fique de fora, seus prêmios em dinheiro esperam por você e são creditados instantaneamente! ✨ Entre nessa agora e transforme suas apostas em vitórias extraordinárias!</p>
    </div>
            
            <details class="conteudo-regras-torneio">
            <summary><p>Regras do Torneio <strong>â®Ÿ</strong></p></summary>
            <ul>
                <li>A promoção ocorre do dia 29/04/24 até 29/09/24</li>
                <li>Oferta válida para todos os jogos de Cassino da Wazdan durante o período promocional.</li>
                <li>Os jogadores se qualificam para participar da promoção realizando uma aposta nos jogos participantes durante o período da campanha. Não há custo adicional.</li>
                <li>Os jogadores podem ganhar mais de um prêmio aleatório durante a campanha.O valor total máximo dos prêmios em dinheiro é de 5000000 Euros divididos em 100.000 Caixas Misteriosas.</li>
                <li>Qualquer aposta qualificada nos jogos participantes durante o período da campanha pode acionar um prêmio.</li>
                <li>Uma aposta qualificada pode ganhar apenas um prêmio. Os prêmios serão concedidos aleatoriamente ao longo do período da campanha.</li>
                <li>Sem requisito mínimo de aposta. Todas as apostas são qualificadas para participar da campanha.</li>
                <li>O número de prêmios disponíveis é atualizado instantaneamente.</li>
                <li>Os prêmios serão creditados instantaneamente na conta do cassino do jogador ao receber a notificação de vitória, e serão pagos conforme a tabela de pool de prêmios.</li>
                <li>Os prêmios em dinheiro não têm NENHUM requisito de aposta.</li>
                <li>Prêmios creditados durante o uso de saldo de bônus serão pagos em saldo de bônus.</li>
            </ul>
            
        
        </details>
     
            
        
        </details>
        <div class="div-jogos-participantes-do-torneio">
        <div class="div-jogos-participantes-do-torneio">
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="//static.sportingtech.com/common/assets/images/casino/300x200/4574.jpg" alt="Valhalla">
        </a>
        <p>Valhalla</p>
        <p>Wazdan</p>
    </div>
    
    <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="//static.sportingtech.com/common/assets/images/casino/300x200/4501.jpg" alt="Draculas Castle">
        </a>
        <p>Draculas Castle</p>
        <p>Wazdan</p>
    </div>
    
    <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="//static.sportingtech.com/common/assets/images/casino/300x200/21331.jpg" alt="Power of Gods: Hades World Cup">
        </a>
        <p>Power of Gods: Hades World Cup</p>
        <p>Wazdan</p>
    </div>
    
    <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="//static.sportingtech.com/common/assets/images/casino/300x200/26847.jpg" alt="30 Coins">
        </a>
        <p>30 Coins</p>
        <p>Wazdan</p>
    </div>
    
    <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="//static.sportingtech.com/common/assets/images/casino/300x200/4534.jpg" alt="Jumping Fruits">
        </a>
        <p>Jumping Fruits</p>
        <p>Wazdan</p>
    </div>
    
    <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="//static.sportingtech.com/common/assets/images/casino/300x200/25890.jpg" alt="12 Coins Grand Gold Edition">
        </a>
        <p>12 Coins Grand Gold Edition</p>
        <p>Wazdan</p>
    </div>
    
    <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="//static.sportingtech.com/common/assets/images/casino/300x200/4565.jpg" alt="Space Gem">
        </a>
        <p>Space Gem</p>
        <p>Wazdan</p>
    </div>
    
    <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="//static.sportingtech.com/common/assets/images/casino/300x200/4509.jpg" alt="Football Mania Deluxe">
        </a>
        <p>Football Mania Deluxe</p>
        <p>Wazdan</p>
    </div>
    
    </div>
    <div>
    <button class="botao-torneio-informacoes-carregar" id="btnMostrarMais">Mostrar Mais</button>
</div>
 `;
            
            // Seleciona o conteÃºdo baseado na classe do botÃ£o
            var selectedHtmlContent;
            if (this.classList.contains('torneio1')) {
                selectedHtmlContent = htmlContent1;
            } else if (this.classList.contains('torneio2')) {
                selectedHtmlContent = htmlContent2;
            } else if (this.classList.contains('torneio3')) {
                selectedHtmlContent = htmlContent3;
            } else if (this.classList.contains('torneio4')) {
                selectedHtmlContent = htmlContent4;  // Adicionando o caso para torneio4
            }
            

            var bodyElement = document.body;
            if (bodyElement) {
                bodyElement.style.overflow = 'hidden'; // Ajusta overflow
            }

            containerDiv.innerHTML = selectedHtmlContent;
            document.body.appendChild(containerDiv);

            // Cria o botÃ£o de fechar
            var imgIconElement = document.createElement('img');
            imgIconElement.src = 'https://static.sportingtech.com/upsports/upload_files/close-button-torneio.png';
            imgIconElement.id = 'icone-torneio-ganhadores-inner';
            imgIconElement.style.cursor = 'pointer';
            containerDiv.appendChild(imgIconElement);

            imgIconElement.addEventListener('click', function() {
                containerDiv.style.display = 'none';
                if (bodyElement) {
                    bodyElement.style.overflowY = 'scroll';
                }
            });

            inicializarMostrarMais(containerDiv);
        });
    });

    function inicializarMostrarMais(container) {
        const secoes = container.querySelectorAll('.secao-extra');
        let atualIndex = 0;

        secoes.forEach(secao => {
            secao.style.display = 'none';
        });

        function mostrarProximas4Secoes() {
            const maxIndex = atualIndex + 4;
            for (let i = atualIndex; i < maxIndex && i < secoes.length; i++) {
                secoes[i].style.display = 'block';
            }
            atualIndex += 4;
        }

        mostrarProximas4Secoes();

        const btnMostrarMais = container.querySelector('#btnMostrarMais');
        if (btnMostrarMais) {
            btnMostrarMais.addEventListener('click', mostrarProximas4Secoes);
        }
    }

})();
