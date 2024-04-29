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
                <p>Drops & Wins</p>
                <span>Conjunto de premios R$150.000.000</span>
            </div>
            <div class="conteudo-premiacao-torneio">
                <p id="titulo-1-torneio">Torneio De Cassino</p>
                <p>Dê as boas-vindas ao emocionante mundo dos torneios diários! A cada dia oferecemos uma chance única para os entusiastas de jogos demonstrarem suas habilidades e concorrerem a prêmios espetaculares.</p>
                <p>A participação é simples: os jogadores devem se inscrever ativamente no torneio e realizar pelo menos um giro com dinheiro real para serem considerados a concorrer aos prêmios diários.</p>
                <p>Além disso, em nossos Torneios Diários, cada giro conta! Os pontos são acumulados com base na soma dos multiplicadores de vitórias. Além disso, os prêmios são generosamente distribuídos de acordo com a classificação dos jogadores no ranking. Não perca a chance de girar, ganhar e subir ao topo!</p>
            </div>
            <details class="conteudo-regras-torneio">
                <summary><p>Regras do Torneio <strong>⮟</strong></p></summary>
                <ul>
                    <li>Lista de premiados e as regras: as regras e a lista de premiados estarão acessíveis nos jogos participantes;</li>
                    <li>Elegibilidade para torneios: apenas as primeiras 5.000 apostas qualificadas por dia são elegíveis para participar dos torneios diários;</li>
                    <li>Fases da promoção: a segunda fase da promoção acontece de 03/04 até 01/05, com prêmios de bônus de giros grátis instantâneos no jogo Sugar Rush 1.000.</li>
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
            <span>Conjunto de premios R$1.500.000</span>
        </div>
        <div class="conteudo-premiacao-torneio">
        <p>Apresentamos a emocionante promoção Crash & Win, uma oportunidade única para jogadores apaixonados e ávidos por adrenalina! Esse torneio desafia os participantes a mergulhar em uma experiência de jogo intensa e com a chance de ganhar prêmios diários.</p>
        <p>Com 364 drops diários garantidos, a dinâmica da promoção oferece surpresas constantes. Para participar, os jogadores devem ativar a opção de participação diretamente nos jogos elegíveis.</p>
        <p>É fundamental que todas as apostas sejam feitas com dinheiro real. Além disso, todos os dias, as primeiras 800 apostas qualificadas têm a chance de ganhar prêmios em dinheiro, distribuídos aleatoriamente de acordo com nossa detalhada tabela de prêmios.</p>
        <p>Então, não perca a chance de ser um dos grandes ganhadores na promoção Crash & Win!</p>
        
        </div>
        <details class="conteudo-regras-torneio">
            <summary><p>Regras do Torneio <strong>⮟</strong></p></summary>
            <ul>
                <li>Regras e ranking: as regras e o ranking da promoção são exibidos nos jogos participantes;</li>
                <li>Elegibilidade: apenas as primeiras 800 apostas qualificadas diariamente nos jogos participantes são válidas para ganhar prêmios;</li>
                <li>Valor mínimo de aposta: as apostas devem ser de, no mínimo R$1,00, para serem consideradas qualificadas para a promoção.</li>
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
    <div class="game-card-torneio secao-extra">
    <a href="URL_DE_DESTINO">
        <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/13183.jpg" alt="">
         </a>
        <p>Big Bass Bonanza</p>
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
                
                <p>Prepare-se para entrar no frenesi do Mega Wheel Madness, uma promoção diária, repleta de emoção e oportunidades de ganhar prêmios surpreendentes! Além disso, a dinâmica do jogo é simples e envolvente. Vem conferir!</p>
                <p>Drops Diários: para concorrer, os jogadores devem aceitar participar ativamente do torneio e fazer uma aposta mínima específica do jogo. As apostas podem desencadear um prêmio aleatório, distribuído de acordo com a nossa detalhada tabela de prêmios. Então, cada giro pode ser a chave para uma recompensa incrível!</p>
                <p>Megatorneios de sexta-feira: elevando a emoção a outro nível, os megatorneios acontecem todas as sextas-feiras. Os jogadores devem entrar no torneio fazendo uma aposta mínima, que não só aumentam suas chances de ganhar, mas acumulam pontos que definem a posição no ranking do torneio. Os prêmios são generosos e distribuídos de acordo com a classificação dos participantes.</p>
                <p>Além disso, não perca a chance de girar a roda da fortuna no Mega Wheel Madness e ganhar prêmios todos os dias!</p>
            </div>
            <details class="conteudo-regras-torneio">
                <summary><p>Regras do Torneio <strong>⮟</strong></p></summary>
                <ul>
                    <li>Frequência dos eventos: são realizados 312 drops diários e 52 megatorneios nas sextas-feiras;</li>
                    <li>Participação e apostas: é preciso aceitar a participação nas atividades promocionais e cumprir com o requisito de aposta mínima do jogo;</li>
                    <li>Premiação: os prêmios nos drops e torneios são determinados pela tabela de prêmios e pela classificação no ranking, respectivamente.</li>
                </ul>
            </details>
            <div class="div-jogos-participantes-do-torneio">
            <div class="div-jogos-participantes-do-torneio">
            <div class="game-card-torneio secao-extra jogo-unico">
     <a href="https://go.aff.upbet.com/zs49baos">
    
    
            <img src="https://static.sportingtech.com/common/assets/images/livecasino/300x200/11370.jpg" alt="Mega Wheel" title="Mega Wheel">
             </a>
            <p>Mega Wheel</p>
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
<p>Ganhe grande no Torneio dos Campeões Wazdan! 🎉</p>
<p>De 29/04 a 29/09, aposte nos seus jogos favoritos de cassino da Wazdan e dispute uma parte espetacular de 5 milhões de euros (que serão pagos em BRL) em prêmios. Cada aposta pode ser a chave para desbloquear uma das 100.000 Caixas Misteriosas! Sabe o mais legal? Não tem aposta mínima. Então, cada jogada conta!</p>
<p>Não fique de fora, seus prêmios em dinheiro esperam por você e são creditados instantaneamente! Entre nessa agora e transforme suas apostas em vitórias extraordinárias! ✨</p>

    </div>
            
            <details class="conteudo-regras-torneio">
            <summary><p>Regras do Torneio <strong>⮟</strong></p></summary>
<ul>
    <li>A promoção acontece do dia 29/04/24 até 29/09/24;</li>
    <li>A oferta é válida para todos os jogos de Cassino da Wazdan durante o período promocional;</li>
    <li>Os jogadores se qualificam para participar da promoção fazendo uma aposta nos jogos participantes durante o período da campanha. Não há custo adicional;</li>
    <li>Os jogadores podem ganhar mais de um prêmio aleatório durante a campanha. O valor máximo total dos prêmios em dinheiro é de 5.000.000 Euros divididos em 100.000 Caixas Misteriosas;</li>
    <li>Qualquer aposta qualificada nos jogos participantes durante o período da campanha pode concorrer a um prêmio;</li>
    <li>Uma aposta qualificada pode ganhar apenas um prêmio. Eles serão concedidos aleatoriamente ao longo do período da campanha;</li>
    <li>Sem requisito mínimo de aposta. Todas as apostas são qualificadas para participar da campanha;</li>
    <li>O número de prêmios disponíveis é atualizado instantaneamente;</li>
    <li>Os prêmios serão creditados imediatamente na conta do cassino do jogador ao receber a notificação de vitória e serão pagos conforme a tabela de pool de prêmios;</li>
    <li>Os prêmios em dinheiro não têm NENHUM requisito de aposta;</li>
    <li>Prêmios creditados durante o uso de saldo de bônus serão pagos em saldo de bônus.</li>
</ul>

            
        
        </details>
     
            
        
        </details>
        <div class="div-jogos-participantes-do-torneio">
        <div class="div-jogos-participantes-do-torneio">
        <div class="game-card-torneio secao-extra">
        <a href="https://m.upbet.com/ptb/games/casino/detail/normal/4574">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/4574.jpg" alt="Valhalla">
        </a>
        <p>Valhalla</p>
        <p>Wazdan</p>
    </div>
    
    <div class="game-card-torneio secao-extra">
        <a href="https://m.upbet.com/ptb/games/casino/detail/normal/4501">
            <img src="//static.sportingtech.com/common/assets/images/casino/300x200/4501.jpg" alt="Draculas Castle">
        </a>
        <p>Draculas Castle</p>
        <p>Wazdan</p>
    </div>
    
    <div class="game-card-torneio secao-extra">
        <a href="https://m.upbet.com/ptb/games/casino/detail/normal/21331">
            <img src="//static.sportingtech.com/common/assets/images/casino/300x200/21331.jpg" alt="Power of Gods: Hades World Cup">
        </a>
        <p>Power of Gods: Hades World Cup</p>
        <p>Wazdan</p>
    </div>
    
    <div class="game-card-torneio secao-extra">
        <a href="https://m.upbet.com/ptb/games/casino/detail/normal/26847">
            <img src="//static.sportingtech.com/common/assets/images/casino/300x200/26847.jpg" alt="30 Coins">
        </a>
        <p>30 Coins</p>
        <p>Wazdan</p>
    </div>
    
    <div class="game-card-torneio secao-extra">
        <a href="https://m.upbet.com/ptb/games/casino/detail/normal/4534">
            <img src="//static.sportingtech.com/common/assets/images/casino/300x200/4534.jpg" alt="Jumping Fruits">
        </a>
        <p>Jumping Fruits</p>
        <p>Wazdan</p>
    </div>
    
    <div class="game-card-torneio secao-extra">
        <a href="https://m.upbet.com/ptb/games/casino/detail/normal/25890">
            <img src="//static.sportingtech.com/common/assets/images/casino/300x200/25890.jpg" alt="12 Coins Grand Gold Edition">
        </a>
        <p>12 Coins Grand Gold Edition</p>
        <p>Wazdan</p>
    </div>
    
    <div class="game-card-torneio secao-extra">
        <a href="https://m.upbet.com/ptb/games/casino/detail/normal/4565">
            <img src="//static.sportingtech.com/common/assets/images/casino/300x200/4565.jpg" alt="Space Gem">
        </a>
        <p>Space Gem</p>
        <p>Wazdan</p>
    </div>
    
    <div class="game-card-torneio secao-extra">
        <a href="https://m.upbet.com/ptb/games/casino/detail/normal/4509">
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
