// Este arquivo estÃ¡ codificado em UTF-8

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
            
            // ConteÃƒÂºdo HTML
            var htmlContent1 =  `<meta charset="UTF-8">
            <div class="cointainer-principal-informacoes-torneio">
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
                <p>DÃª as boas-vindas ao emocionante mundo dos torneios diÃ¡rios! A cada dia oferecemos uma chance Ãºnica para os entusiastas de jogos demonstrarem suas habilidades e concorrerem a prÃªmios espetaculares.</p>
                <p>A participaÃ§Ã£o Ã© simples: os jogadores devem se inscrever ativamente no torneio e realizar pelo menos um giro com dinheiro real para serem considerados a concorrer aos prÃªmios diÃ¡rios.</p>
                <p>AlÃ©m disso, em nossos Torneios DiÃ¡rios, cada giro conta! Os pontos sÃ£o acumulados com base na soma dos multiplicadores de vitÃ³rias. AlÃ©m disso, os prÃªmios sÃ£o generosamente distribuÃ­dos de acordo com a classificaÃ§Ã£o dos jogadores no ranking. NÃ£o perca a chance de girar, ganhar e subir ao topo!</p>
            </div>
            <details class="conteudo-regras-torneio">
                <summary><p>Regras do Torneio <strong><i class="fa fa-caret-down right"></i></strong></p></summary>

                <ul>
                    <li>Lista de premiados e as regras: as regras e a lista de premiados estarÃ£o acessÃ­veis nos jogos participantes;</li>
                    <li>Elegibilidade para torneios: apenas as primeiras 5.000 apostas qualificadas por dia sÃ£o elegÃ­veis para participar dos torneios diÃ¡rios;</li>
                    <li>Fases da promoÃ§Ã£o: a segunda fase da promoÃ§Ã£o acontece de 03/04 atÃ© 01/05, com prÃªmios de bÃ´nus de giros grÃ¡tis instantÃ¢neos no jogo Sugar Rush 1.000.</li>
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
        <p>Apresentamos a emocionante promoÃ§Ã£o Crash & Win, uma oportunidade Ãºnica para jogadores apaixonados e Ã¡vidos por adrenalina! Esse torneio desafia os participantes a mergulhar em uma experiÃªncia de jogo intensa e com a chance de ganhar prÃªmios diÃ¡rios.</p>
        <p>Com 364 drops diÃ¡rios garantidos, a dinÃ¢mica da promoÃ§Ã£o oferece surpresas constantes. Para participar, os jogadores devem ativar a opÃ§Ã£o de participaÃ§Ã£o diretamente nos jogos elegÃ­veis.</p>
        <p>Ã‰ fundamental que todas as apostas sejam feitas com dinheiro real. AlÃ©m disso, todos os dias, as primeiras 800 apostas qualificadas tÃªm a chance de ganhar prÃªmios em dinheiro, distribuÃ­dos aleatoriamente de acordo com nossa detalhada tabela de prÃªmios.</p>
        <p>EntÃ£o, nÃ£o perca a chance de ser um dos grandes ganhadores na promoÃ§Ã£o Crash & Win!</p>
        
        </div>
        <details class="conteudo-regras-torneio">
            <summary><p>Regras do Torneio <strong><i class="fa fa-caret-down right"></i></strong></p></summary>

            <ul>
                <li>Regras e ranking: as regras e o ranking da promoÃ§Ã£o sÃ£o exibidos nos jogos participantes;</li>
                <li>Elegibilidade: apenas as primeiras 800 apostas qualificadas diariamente nos jogos participantes sÃ£o vÃ¡lidas para ganhar prÃªmios;</li>
                <li>Valor mÃ­nimo de aposta: as apostas devem ser de, no mÃ­nimo R$1,00, para serem consideradas qualificadas para a promoÃ§Ã£o.</li>
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
                
                <p>Prepare-se para entrar no frenesi do Mega Wheel Madness, uma promoÃ§Ã£o diÃ¡ria, repleta de emoÃ§Ã£o e oportunidades de ganhar prÃªmios surpreendentes! AlÃ©m disso, a dinÃ¢mica do jogo Ã© simples e envolvente. Vem conferir!</p>
                <p>Drops DiÃ¡rios: para concorrer, os jogadores devem aceitar participar ativamente do torneio e fazer uma aposta mÃ­nima especÃ­fica do jogo. As apostas podem desencadear um prÃªmio aleatÃ³rio, distribuÃ­do de acordo com a nossa detalhada tabela de prÃªmios. EntÃ£o, cada giro pode ser a chave para uma recompensa incrÃ­vel!</p>
                <p>Megatorneios de sexta-feira: elevando a emoÃ§Ã£o a outro nÃ­vel, os megatorneios acontecem todas as sextas-feiras. Os jogadores devem entrar no torneio fazendo uma aposta mÃ­nima, que nÃ£o sÃ³ aumentam suas chances de ganhar, mas acumulam pontos que definem a posiÃ§Ã£o no ranking do torneio. Os prÃªmios sÃ£o generosos e distribuÃ­dos de acordo com a classificaÃ§Ã£o dos participantes.</p>
                <p>AlÃ©m disso, nÃ£o perca a chance de girar a roda da fortuna no Mega Wheel Madness e ganhar prÃªmios todos os dias!</p>
            </div>
            <details class="conteudo-regras-torneio">
                <summary><p>Regras do Torneio <strong><i class="fa fa-caret-down right"></i></strong></p></summary>

                <ul>
                    <li>FrequÃªncia dos eventos: sÃ£o realizados 312 drops diÃ¡rios e 52 megatorneios nas sextas-feiras;</li>
                    <li>ParticipaÃ§Ã£o e apostas: Ã© preciso aceitar a participaÃ§Ã£o nas atividades promocionais e cumprir com o requisito de aposta mÃ­nima do jogo;</li>
                    <li>PremiaÃ§Ã£o: os prÃªmios nos drops e torneios sÃ£o determinados pela tabela de prÃªmios e pela classificaÃ§Ã£o no ranking, respectivamente.</li>
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
<p>Ganhe grande no Torneio dos CampeÃµes Wazdan! ðŸŽ‰</p>
<p>De 29/04 a 29/09, aposte nos seus jogos favoritos de cassino da Wazdan e dispute uma parte espetacular de 5 milhÃµes de euros (que serÃ£o pagos em BRL) em prÃªmios. Cada aposta pode ser a chave para desbloquear uma das 100.000 Caixas Misteriosas! Sabe o mais legal? NÃ£o tem aposta mÃ­nima. EntÃ£o, cada jogada conta!</p>
<p>NÃ£o fique de fora, seus prÃªmios em dinheiro esperam por vocÃª e sÃ£o creditados instantaneamente! Entre nessa agora e transforme suas apostas em vitÃ³rias extraordinÃ¡rias! âœ¨</p>

    </div>
            
            <details class="conteudo-regras-torneio">
            <summary><p>Regras do Torneio <strong><i class="fa fa-caret-down right"></i></strong></p></summary>

<ul>
    <li>A promoÃ§Ã£o acontece do dia 29/04/24 atÃ© 29/09/24;</li>
    <li>A oferta Ã© vÃ¡lida para todos os jogos de Cassino da Wazdan durante o perÃ­odo promocional;</li>
    <li>Os jogadores se qualificam para participar da promoÃ§Ã£o fazendo uma aposta nos jogos participantes durante o perÃ­odo da campanha. NÃ£o hÃ¡ custo adicional;</li>
    <li>Os jogadores podem ganhar mais de um prÃªmio aleatÃ³rio durante a campanha. O valor mÃ¡ximo total dos prÃªmios em dinheiro Ã© de 5.000.000 Euros divididos em 100.000 Caixas Misteriosas;</li>
    <li>Qualquer aposta qualificada nos jogos participantes durante o perÃ­odo da campanha pode concorrer a um prÃªmio;</li>
    <li>Uma aposta qualificada pode ganhar apenas um prÃªmio. Eles serÃ£o concedidos aleatoriamente ao longo do perÃ­odo da campanha;</li>
    <li>Sem requisito mÃ­nimo de aposta. Todas as apostas sÃ£o qualificadas para participar da campanha;</li>
    <li>O nÃºmero de prÃªmios disponÃ­veis Ã© atualizado instantaneamente;</li>
    <li>Os prÃªmios serÃ£o creditados imediatamente na conta do cassino do jogador ao receber a notificaÃ§Ã£o de vitÃ³ria e serÃ£o pagos conforme a tabela de pool de prÃªmios;</li>
    <li>Os prÃªmios em dinheiro nÃ£o tÃªm NENHUM requisito de aposta;</li>
    <li>PrÃªmios creditados durante o uso de saldo de bÃ´nus serÃ£o pagos em saldo de bÃ´nus.</li>
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
 
            var htmlContent5 =  `<div class="cointainer-principal-informacoes-torneio">
        <div class="imagem-banner-informacoes-torneio">
            <img src="https://blog.upbet.com/wp-content/uploads/2024/04/7e668b9e-50c4-4cbf-934d-2db94773e999.jpg" alt="">
            <span id="torneio-em-andamento">Em Andamento</span>
        </div>
        <div class="titulo-e-premiacao-torneio">
            <p>Pragmatic</p>
            <span>Conjunto de premios R$25.000.000</span>
        </div>
        <div class="conteudo-premiacao-torneio">
   
        <p id="titulo-1-torneio">Torneio De Cassino</p>
        <p>Descubra a emocionante mecÃ¢nica dos torneios em nossa plataforma! Com Drops Semanais que oferecem multiplicadores incrÃ­veis e o desafio do Goal Prize Drop durante o Craques da AmÃ©rica, cada rodada Ã© uma oportunidade Ãºnica de vitÃ³ria. Prepare-se para colecionar palavras, conquistar prÃªmios e entrar na corrida pelos maiores multiplicadores. </p>
        <p>Viva a adrenalina dos jogos selecionados e torne-se um campeÃ£o em nossa comunidade de jogadores!</p>
    </div>
            
            <details class="conteudo-regras-torneio">
            <summary><p>Regras do Torneio <strong><i class="fa fa-caret-down right"></i></strong></p></summary>

            <ul>
            <li><strong>Drops Semanais:</strong>
                <ul>
                    <li>Drop de prÃªmios semanal com multiplicadores de atÃ© x500.</li>
                    <li>CÃ¡lculo de vitÃ³ria: ganho do multiplicador vezes a aposta da rodada vencedora.</li>
                    <li>Toda semana os jogadores serÃ£o premiados aleatoriamente com um multiplicador nos Jogos Selecionados.</li>
                    <li>Multiplicadores podem ser aplicados atÃ© uma aposta mÃ¡xima de 10 BRL.</li>
                </ul>
            </li>
            <li><strong>Goal Prize Drop (Durante os Craques da AmÃ©rica - Contagem regressiva de 30 de abril a 3 de junho):</strong>
                <ul>
                    <li>Os jogadores devem coletar todas as palavras qualificadas (Goleiro, Atacante, Defensor, Goal).</li>
                    <li>Cada vez que o jogador completar a ColeÃ§Ã£o, o jogador serÃ¡ elegÃ­vel a um prÃªmio.</li>
                    <li>Jogos participantes: Auto Mega Roleta, Auto Roleta, Roleta Brasileira, Super Trunfo (NOVO), Roleta Espanhola, Boom City, Dragon Tiger, Lucky 6 Roulette, Mega Roulette, Mega Sic Bo, PowerUP Roulette, English Roulette, Roulette Azure, Roulette Verde, Sweet Bonanza CandyLand e Vegas Ball Bonanza.</li>
                    <li>AtÃ© 5 jogadores por semana podem ganhar um prÃªmio de â‚¬ 300 (R$ 1.500).</li>
                    <li>Os jogadores podem ganhar mais de 1 prÃªmio se completarem a ColeÃ§Ã£o vÃ¡rias vezes.</li>
                </ul>
            </li>
        </ul>
        

            
        
        </details>
     
            
        
        </details>


        <div class="div-jogos-participantes-do-torneio">
        <div class="div-jogos-participantes-do-torneio">
        <div class="game-card-torneio secao-extra">
    <a href="https://upbet.com/ptb/games/livecasino/detail/normal/20164/1401-BRL">
        <img src="//static.sportingtech.com/common/assets/images/livecasino/300x200/20164.jpg" alt="Boom City">
    </a>
    <p>Boom City</p>
    <p>Pragmatic</p>
</div>

<div class="game-card-torneio secao-extra">
    <a href="https://upbet.com/ptb/games/livecasino/detail/normal/18024/1001-BRL">
        <img src="//static.sportingtech.com/common/assets/images/livecasino/300x200/18024.jpg" alt="Dragon Tiger">
    </a>
    <p>Dragon Tiger</p>
    <p>Pragmatic</p>
</div>

<div class="game-card-torneio secao-extra">
    <a href="https://upbet.com/ptb/games/livecasino/detail/normal/23973/210-BRL">
        <img src="//static.sportingtech.com/common/assets/images/livecasino/300x200/23973.jpg" alt="Mega Roulette">
    </a>
    <p>Mega Roulette</p>
    <p>Pragmatic</p>
</div>

<div class="game-card-torneio secao-extra">
    <a href="https://upbet.com/ptb/games/livecasino/detail/normal/11371/701-BRL">
        <img src="//static.sportingtech.com/common/assets/images/livecasino/300x200/11371.jpg" alt="Mega Sic Bo">
    </a>
    <p>Mega Sic Bo</p>
    <p>Pragmatic</p>
</div>

<div class="game-card-torneio secao-extra">
    <a href="https://upbet.com/ptb/games/livecasino/detail/normal/20803/240-BRL">
        <img src="//static.sportingtech.com/common/assets/images/livecasino/300x200/20803.jpg" alt="PowerUP Roulette">
    </a>
    <p>PowerUP Roulette</p>
    <p>Pragmatic</p>
</div>

<div class="game-card-torneio secao-extra">
    <a href="https://upbet.com/ptb/games/livecasino/detail/normal/17448/1101-BRL">
        <img src="//static.sportingtech.com/common/assets/images/livecasino/300x200/17448.jpg" alt="Sweet Bonanza CandyLand">
    </a>
    <p>Sweet Bonanza CandyLand</p>
    <p>Pragmatic</p>
</div>

<div class="game-card-torneio secao-extra">
    <a href="https://upbet.com/ptb/games/livecasino/detail/normal/23985/1501-BRL">
        <img src="//static.sportingtech.com/common/assets/images/livecasino/300x200/23985.jpg" alt="Vegas Ball Bonanza">
    </a>
    <p>Vegas Ball Bonanza</p>
    <p>Wazdan</p>
</div>

    </div>
    <div>
    <button class="botao-torneio-informacoes-carregar" id="btnMostrarMais">Mostrar Mais</button>
</div>
 `;
            
            // Seleciona o conteÃƒÂºdo baseado na classe do botÃƒÂ£o
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
             else if (this.classList.contains('torneio5')) {
                selectedHtmlContent = htmlContent5;  // Adicionando o caso para torneio4
            }
            

            var bodyElement = document.body;
            if (bodyElement) {
                bodyElement.style.overflow = 'hidden'; // Ajusta overflow
            }

            containerDiv.innerHTML = selectedHtmlContent;
            document.body.appendChild(containerDiv);

            // Cria o botÃƒÂ£o de fechar
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
