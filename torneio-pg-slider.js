
$(document).ready(function() {
    var buttons = document.querySelectorAll('.btn-torneio .botao-torneios');
    var conteudoJogo2 = `
    <div>
    <a href="https://m.upbet.com/ptb/games/detail/casino/normal/19364" class="inner_table unit_panel">
        <div class="unit_image">
            <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/19364.jpg" class="el-image__inner" style="object-fit: cover;">
        </div>
        <div class="unit_cover">
            <div class="unit_name">Spaceman</div>
            <div class="unit_vendor">Pragmatic Play</div>
        </div>
    </a>            
</div>

        <div>
            <a href="https://upbet.com/ptb/games/detail/casino/normal/24442" class="inner_table unit_panel">
                <div class="unit_image">
                    <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/24442.jpg" class="el-image__inner" style="object-fit: cover;">
                </div>
                <div class="unit_cover">
                    <div class="unit_name">Big Bass Crash</div>
                    <div class="unit_vendor">Pragmatic Play</div>
                </div>
            </a>
            
        </div>
        
    `;

    var conteudoPremio2 = `
        <ul>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2023036826350	R$ 500,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2022106414589	R$ 100,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2023106350750	R$ 100,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2022117402995	R$ 100,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2024034733808	R$ 50,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2022128604664	R$ 50,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2024035502867	R$ 50,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2023025558955	R$ 50,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2023048498462	R$ 50,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2022106414589	R$ 50,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2022129938307	R$ 50,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2022117402995	R$ 50,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2023015324202	R$ 25,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2024034733808	R$ 25,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2023117247245	R$ 25,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2022106087168	R$ 25,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2023117239350	R$ 25,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2022077703755	R$ 25,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2022129054117	R$ 25,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2022077703755	R$ 25,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2023036826350	R$ 25,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2023078877759	R$ 25,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2023048498462	R$ 25,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2022118029876	R$ 25,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2023048498462	R$ 25,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2024045689523	R$ 25,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2022128622969	R$ 25,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2022077712071	R$ 25,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2022117402995	R$ 25,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2022106539596	R$ 25,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2022077712071	R$ 25,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2022117524282	R$ 25,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 2023071449873	R$ 25,00</li>
            
        </ul>
    `;

    var conteudoJogo1 = `
        <div>
            <a href="https://go.aff.upbet.com/zs49baos" class="inner_table unit_panel">
                <div class="unit_image">
                    <img src="https://d2csxpduxe849s.cloudfront.net/media/0F761720-670F-4352-9E8055C6446868B5/CA56A439-AA7A-4B06-8506AC5D258E27E0/webimage-C15F89B1-B7FE-4465-9601C5F295C9C081.png" class="el-image__inner" style="object-fit: cover;">
                </div>
                <div class="unit_cover">
                    <div class="unit_name">Mega Wheel Madness</div>
                    <div class="unit_vendor">Pragmatic Play</div>
                </div>
            </a>
      
        </div>
      
       
    `;

    var conteudoPremio1 = `
        <ul>
            <li><i class="class="pg-icons fa fa-trophy""></i> - 52370030417008 - 25,00</li>
            <li><i class="class="pg-icons fa fa-trophy""></i> - 52370030417008 - 25,00</li>
            <li><i class="class="pg-icons fa fa-trophy""></i> - 52370030417008 - 25,00</li>
            <li><i class="class="pg-icons fa fa-trophy""></i> - 52370030417008 - 25,00</li>
            <li><i class="class="pg-icons fa fa-trophy""></i> - 52370030417008 - 25,00</li>
        </ul>
    `;

    var conteudoJogo3 = `
<div>
            <a href="https://m.upbet.com/ptb/games/detail/casino/normal/13485" class="inner_table unit_panel">
                <div class="unit_image">
                    <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/13485.jpg" class="el-image__inner" style="object-fit: cover;">
                </div>
                <div class="unit_cover">
                    <div class="unit_name">Gates of Olympus</div>
                    <div class="unit_vendor">Pragmatic Play</div>
                </div>
            </a>
      
        </div>
        <div>
            <a href="https://upbet.com/ptb/games/detail/casino/normal/17170" class="inner_table unit_panel">
                <div class="unit_image">
                    <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/13183.jpg" class="el-image__inner" style="object-fit: cover;">
                </div>
                <div class="unit_cover">
                    <div class="unit_name">Big Bass Bonanza</div>
                    <div class="unit_vendor">Pragmatic Play</div>
                </div>
            </a>
      
        </div>
        <div>
            <a href="https://upbet.com/ptb/games/detail/casino/normal/20053" class="inner_table unit_panel">
               

    
    <div class="unit_image">
                    <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/8888.jpg" class="el-image__inner" style="object-fit: cover;">
                </div>
                <div class="unit_cover">
                    <div class="unit_name">Sugar Rush</div>
                    <div class="unit_vendor">Pragmatic Play</div>
                </div>
            </a>
      
        </div>
      
    `;

var conteudoPremio3 = `
<ul>
<li><i class="class="pg-icons fa fa-trophy""></i> - 52370030417008 - 25,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 52370030417008 - 25,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 52370030417008 - 25,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 52370030417008 - 25,00</li>
<li><i class="class="pg-icons fa fa-trophy""></i> - 52370030417008 - 25,00</li>
</ul>
`;
var conteudoJogo4 = `
<div>
            <a href="https://m.upbet.com/ptb/games/casino/detail/normal/4574" class="inner_table unit_panel">
                <div class="unit_image">
                    <img src="https://static.sportingtech.com/common/assets/images/casino/300x200/4574.jpg" class="el-image__inner" style="object-fit: cover;">
                </div>
                <div class="unit_cover">
                    <div class="unit_name">Valhalla</div>
                    <div class="unit_vendor">Wazdan</div>
                </div>
            </a>
            <a href="https://m.upbet.com/ptb/games/casino/detail/normal/4549" class="inner_table unit_panel">
                <div class="unit_image">
                    <img src="//static.sportingtech.com/common/assets/images/casino/300x200/4549.jpg" class="el-image__inner" style="object-fit: cover;">
                </div>
                <div class="unit_cover">
                    <div class="unit_name">Magic of the Ring</div>
                    <div class="unit_vendor">Wazdan</div>
                </div>
            </a>
            <a href="https://upbet.com/ptb/games/detail/casino/normal/19294" class="inner_table unit_panel">
                <div class="unit_image">
                    <img src="//static.sportingtech.com/common/assets/images/casino/300x200/19294.jpg" class="el-image__inner" style="object-fit: cover;">
                </div>
                <div class="unit_cover">
                    <div class="unit_name">Hot Slot: 777 Crown</div>
                    <div class="unit_vendor">Wazdan</div>
                </div>
            </a>
      
        </div>
       
        
      
    `;

var conteudoPremio4 = `
<ul>
    <li><i class="class="pg-icons fa fa-trophy""></i> - 52370030417008 - 25,00</li>
    <li><i class="class="pg-icons fa fa-trophy""></i> - 52370030417008 - 25,00</li>
    <li><i class="class="pg-icons fa fa-trophy""></i> - 52370030417008 - 25,00</li> 

  
 
</ul>
`;
var conteudoJogo5 = `
<div>
            <a href="https://upbet.com/ptb/games/livecasino/detail/normal/20164/1401-BRL" class="inner_table unit_panel">
                <div class="unit_image">
                    <img src="https://static.sportingtech.com/common/assets/images/livecasino/300x200/20164.jpg" class="el-image__inner" style="object-fit: cover;">
                </div>
                <div class="unit_cover">
                    <div class="unit_name">Boom City</div>
                    <div class="unit_vendor">Pragmatic</div>
                </div>
            </a>
            <a href="https://upbet.com/ptb/games/livecasino/detail/normal/18024/1001-BRL" class="inner_table unit_panel">
                <div class="unit_image">
                    <img src="https://static.sportingtech.com/common/assets/images/livecasino/300x200/18024.jpg" class="el-image__inner" style="object-fit: cover;">
                </div>
                <div class="unit_cover">
                    <div class="unit_name">Dragon Tiger</div>
                    <div class="unit_vendor">Pragmatic</div>
                </div>
            </a>
            <a href="https://upbet.com/ptb/games/livecasino/detail/normal/23973/210-BRL" class="inner_table unit_panel">
                <div class="unit_image">
                    <img src="https://static.sportingtech.com/common/assets/images/livecasino/300x200/23973.jpg" class="el-image__inner" style="object-fit: cover;">
                </div>
                <div class="unit_cover">
                    <div class="unit_name">Mega Roulette</div>
                    <div class="unit_vendor">Pragmatic</div>
                </div>
            </a>
      
        </div>
       
        
      
    `;

var conteudoPremio5 = `
<ul>
    <li><i class="class="pg-icons fa fa-trophy""></i> - <i class="class="pg-icons fa fa-trophy""></i>  - R$</li>
    <li><i class="class="pg-icons fa fa-trophy""></i> - <i class="class="pg-icons fa fa-trophy""></i> - R$</li>
    <li><i class="class="pg-icons fa fa-trophy""></i> - <i class="class="pg-icons fa fa-trophy""></i> - R$</li> 

  
 
</ul>
`;

  
function atualizarConteudo(conteudo) {
    document.getElementById('conteudo').innerHTML = conteudo;
}

function atualizarConteudo2(conteudo) {
    document.getElementById('conteudo2').innerHTML = conteudo;
}

function atualizarConteudo3(conteudo) {
    document.getElementById('conteudo3').innerHTML = conteudo;
}

function atualizarConteudo4(conteudo) {
    document.getElementById('conteudo4').innerHTML = conteudo;
}
function atualizarConteudo5(conteudo) {
    document.getElementById('conteudo5').innerHTML = conteudo;
}


atualizarConteudo(conteudoJogo1);
atualizarConteudo2(conteudoJogo2);
atualizarConteudo3(conteudoJogo3);
atualizarConteudo4(conteudoJogo4);
atualizarConteudo5(conteudoJogo5);

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Este cÃƒÂ³digo serÃƒÂ¡ executado quando o botÃƒÂ£o for clicado
        // Primeiro, garantir que todos os outros botÃƒÂµes na mesma div sejam inativos
        const allButtons = this.parentNode.querySelectorAll('.botao-torneios');
        allButtons.forEach(function(btn) {
            btn.classList.remove('active');
            btn.classList.add('inactive');
        });

        // Depois, ativa o botÃƒÂ£o clicado
        this.classList.remove('inactive');
        this.classList.add('active');
    });
});


document.querySelectorAll('.botao-jogos').forEach(function(btn) {
    btn.addEventListener('click', function() {
        atualizarConteudo(conteudoJogo1);
    });
});

document.querySelectorAll('.botao-premios').forEach(function(btn) {
    btn.addEventListener('click', function() {
        atualizarConteudo(conteudoPremio1);
    });
});


document.querySelectorAll('.botao-jogo2').forEach(function(btn) {
    btn.addEventListener('click', function() {
        atualizarConteudo2(conteudoJogo2);
    });
});

document.querySelectorAll('.botao-premios2').forEach(function(btn) {
    btn.addEventListener('click', function() {
        atualizarConteudo2(conteudoPremio2);
    });
});

document.querySelectorAll('.botao-jogo3').forEach(function(btn) {
    btn.addEventListener('click', function() {
        atualizarConteudo3(conteudoJogo3);
    });
});

document.querySelectorAll('.botao-premios3').forEach(function(btn) {
    btn.addEventListener('click', function() {
        atualizarConteudo3(conteudoPremio3);
    });
});

document.querySelectorAll('.botao-jogo4').forEach(function(btn) {
    btn.addEventListener('click', function() {
        atualizarConteudo4(conteudoJogo4);
    });
});

document.querySelectorAll('.botao-premios4').forEach(function(btn) {
    btn.addEventListener('click', function() {
        atualizarConteudo4(conteudoPremio4);
    });
});
document.querySelectorAll('.botao-jogo5').forEach(function(btn) {
    btn.addEventListener('click', function() {
        atualizarConteudo5(conteudoJogo5);
    });
});

document.querySelectorAll('.botao-premios5').forEach(function(btn) {
    btn.addEventListener('click', function() {
        atualizarConteudo5(conteudoPremio5);
    });
});

});

function atualizarContador(idContador, dataFinal) {
    var finalTime = new Date(dataFinal).getTime();

    var intervalo = setInterval(function() {
        var agora = new Date().getTime();
        var diferenca = finalTime - agora;

        if (diferenca < 0) {
            clearInterval(intervalo);
            document.getElementById(`dias${idContador}`).innerHTML = "00";
            document.getElementById(`horas${idContador}`).innerHTML = "00";
            document.getElementById(`minutos${idContador}`).innerHTML = "00";
            document.getElementById(`segundos${idContador}`).innerHTML = "00";
            return;
        }

        var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        document.getElementById(`dias${idContador}`).innerHTML = dias < 10 ? `0${dias}` : dias;
        document.getElementById(`horas${idContador}`).innerHTML = horas < 10 ? `0${horas}` : horas;
        document.getElementById(`minutos${idContador}`).innerHTML = minutos < 10 ? `0${minutos}` : minutos;
        document.getElementById(`segundos${idContador}`).innerHTML = segundos < 10 ? `0${segundos}` : segundos;
    }, 1000);
}


atualizarContador(1, 'june 5, 2024 23:59:59');
atualizarContador(2, 'June 30, 2024 23:59:59');
atualizarContador(3, 'March 15, 2025 23:59:59');
atualizarContador(4, 'September 29, 2024 23:59:59');
atualizarContador(5, 'September 29, 2024 23:59:59');
