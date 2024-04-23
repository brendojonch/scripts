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
     <a href="https://m.upbet.com/ptb/games/detail/casino/normal/13485">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/13485.jpg" alt="Gates of Olympus">
             </a>
            <p>Gates of Olympus</p>
            <p>Pragmatic Play</p>
    </div>

        <div class="game-card-torneio secao-extra">
        <a href="https://upbet.com/ptb/games/detail/casino/normal/13183">
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
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/16624.jpg" alt="">
             </a>
            <p>Bigger Bass Bonanza</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/19982.jpg" alt="">
             </a>
            <p>Big Bass Splash</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/26610.jpg" alt="">
             </a>
            <p>Gears of Horus</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/16667.jpg" alt="">
             </a>
            <p>Starlight Princess</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/15212.jpg" alt="">
             </a>
            <p>5 Lions Megaways</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/26565.jpg" alt="">
             </a>
            <p>Mighty Munching Melons</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/8890.jpg" alt="">
             </a>
            <p>The Dog House</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/8877.jpg" alt="">
             </a>
            <p>John Hunter and the Tomb of the Scarab Queen</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/26514.jpg" alt="">
             </a>
            <p>Red Hot Luck</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/17170.jpg" alt="">
             </a>
            <p>Big Bass Bonanza Megaways</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/25627.jpg" alt="">
             </a>
            <p>Starlight Princess 1000</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/25674.jpg" alt="">
             </a>
            <p>Sugar Supreme Powernudge</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/23493.jpg" alt="">
             </a>
            <p>Wisdom of Athena</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/9576.jpg" alt="">
             </a>
            <p>John Hunter and the Book of Tut</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/23342.jpg" alt="">
             </a>
            <p>Big Bass Amazon Xtreme</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/10717.jpg" alt="">
             </a>
            <p>Wild Wild Riches</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/9453.jpg" alt="">
             </a>
            <p>Great Rhino Megaways</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/8897.jpg" alt="">
             </a>
            <p>Mustang Gold</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/26398.jpg" alt="">
             </a>
            <p>Lokis Riches</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/26521.jpg" alt="">
             </a>
            <p>Trees of Treasure</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/26555.jpg" alt="">
             </a>
            <p>Strawberry Cocktail</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/26508.jpg" alt="">
             </a>
            <p>Big Bass - Floats My Boat</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/26579.jpg" alt="">
             </a>
            <p>Wheel Oâ€™Gold</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/9633.jpg" alt="">
             </a>
            <p>Wild West Gold</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/24199.jpg" alt="">
             </a>
            <p>Candy Blitz</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/17225.jpg" alt="">
             </a>
            <p>Book of Fallen</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/26130.jpg" alt="">
             </a>
            <p>Candy Jar Clusters</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/26512.jpg" alt="">
             </a>
            <p>Pompeii Megareels Megaways</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/22629.jpg" alt="">
             </a>
            <p>The Dog House Multihold</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/14391.jpg" alt="">
             </a>
            <p>Buffalo King Megaways</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/21001.jpg" alt="">
             </a>
            <p>Big Bass Keeping it Reel</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/9632.jpg" alt="">
             </a>
            <p>Fruit Party</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/26515.jpg" alt="">
             </a>
            <p>The Alter-Ego</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/8866.jpg" alt="">
             </a>
            <p>Buffalo King</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/13940.jpg" alt="">
             </a>
            <p>Juicy Fruits</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/26179.jpg" alt="">
             </a>
            <p>Gates of Olympus 1000</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/25857.jpg" alt="">
             </a>
            <p>The Wild Gang</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/22717.jpg" alt="">
             </a>
            <p>Big Bass - Hold  Spinner</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/11247.jpg" alt="">
             </a>
            <p>Gems Bonanza</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/19807.jpg" alt="">
             </a>
            <p>Cleocatra</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/13179.jpg" alt="">
             </a>
            <p>Madame Destiny Megaways</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/23003.jpg" alt="">
             </a>
            <p>Zeus vs Hades - Gods of War</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/22541.jpg" alt="">
             </a>
            <p>Wild Wild Riches Megaways</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/26149.jpg" alt="">
             </a>
            <p>Fire Stampede</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/8925.jpg" alt="">
             </a>
            <p>Chilli Heat</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/19829.jpg" alt="">
             </a>
            <p>Wild West Gold Megaways</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/10228.jpg" alt="">
             </a>
            <p>The Dog House Megaways</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/26186.jpg" alt="">
             </a>
            <p>Juicy Fruits Multihold</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/8941.jpg" alt="">
             </a>
            <p>Wolf Gold</p>
            <p>Pragmatic Play</p>
        </div>  
        <div class="game-card-torneio secao-extra">
        <a href="URL_DE_DESTINO">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/13366.jpg" alt="">
             </a>
            <p>The Hand of Midas</p>
            <p>Pragmatic Play</p>
        </div>  
            </div>
            <button class="botao-torneio-informacoes-carregar" id="btnMostrarMais">Mostrar Mais</button>
        </div>`;
    
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
            <p>Mega Wheel Madness</p>
            <span>Conjunto de prÃªmios R$5.000.000</span>
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
            
            // Seleciona o conteÃºdo baseado na classe do botÃ£o
            var selectedHtmlContent;
            if (this.classList.contains('torneio1')) {
                selectedHtmlContent = htmlContent1;
            } else if (this.classList.contains('torneio2')) {
                selectedHtmlContent = htmlContent2;
            } else if (this.classList.contains('torneio3')) {
                selectedHtmlContent = htmlContent3;
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

        function mostrarProximas4SeÃ§Ãµes() {
            const maxIndex = atualIndex + 4;
            for (let i = atualIndex; i < maxIndex && i < secoes.length; i++) {
                secoes[i].style.display = 'block';
            }
            atualIndex += 4;
        }

        mostrarProximas4SeÃ§Ãµes();

        const btnMostrarMais = container.querySelector('#btnMostrarMais');
        if (btnMostrarMais) {
            btnMostrarMais.addEventListener('click', mostrarProximas4SeÃ§Ãµes);
        }
    }

})();
