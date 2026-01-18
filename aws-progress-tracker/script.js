// ============================
// LISTAS COM DATAS (MANTIDAS)
// ============================

const kcs = [
    { title: "KC 5 – O que é computação em nuvem?", deadline: "expirado" },
    { title: "KC 208 - Vantagens da computação em nuvem", deadline: "expirado" },
    { title: "KC 6 – O que é a Amazon Web Services?", deadline: "expirado" },
    { title: "KC 7 – Fundamentos da definição de preço da AWS", deadline: "expirado" },
    { title: "KC 8 – Visão geral da infraestrutura da AWS", deadline: "expirado" },
    { title: "KC 209 – Serviços e categorias da AWS", deadline: "expirado" },
    { title: "KC 9 – Modelo de responsabilidade compartilhada", deadline: "expirado" },
    { title: "KC 10 – Introdução ao Amazon S3", deadline: "expirado" },
    { title: "KC 12 – Introdução ao Amazon EC2", deadline: "expirado" },
    { title: "KC 282 – Introdução à segurança", deadline: "expirado" },
    { title: "KC 288 – Prevenção: Gerenciamento de identidades", deadline: "expirado" },
    { title: "KC 291 – AWS CloudTrail", deadline: "expirado" },
    { title: "KC 292 – AWS Config", deadline: "expirado" },
    { title: "KC 295 – Trusted Advisor", deadline: "expirado" },
    { title: "KC 296 – Práticas recomendadas de segurança para a criação de conta", deadline: "expirado" },
    { title: "KC 297 – Programa de conformidade de segurança da AWS", deadline: "expirado" },
    { title: "KC 298 – Recursos de segurança da AWS", deadline: "expirado" },
    { title: "KC 309 – Amazon DynamoDB", deadline: "expirado" },
    { title: "KC 308 – Amazon RDS", deadline: "expirado" },
    { title: "KC 167 - JAWS - KC - Well-Architected Framework", deadline: "expirado" },
    { title: "KC 210 - JAWS - KC - Visão geral das operações do sistema", deadline: "expirado" },
    { title: "KC 211 - JAWS - KC - Ferramentas e automação", deadline: "-" },
    { title: "KC 212 - JAWS - KC - Computação (servidores)", deadline: "20/01/2026" },
    { title: "KC 213 - JAWS - KC - Computação (dimensionamento e resolução de nomes)", deadline: "26/01/2025" },
    { title: "KC 214 - JAWS - KC - Computação (contêineres)", deadline: "26/01/2025" },
    { title: "KC 215 - JAWS - KC - Computação (bancos de dados)", deadline: "-" },
    { title: "KC 216 - Serviços de rede AWS", deadline: "-" },
    { title: "KC 217 - JAWS - KC - Armazenamento e arquivamento", deadline: "-" },
    { title: "KC 218 - JAWS - KC - Monitoramento e segurança", deadline: "-" },
    { title: "KC 219 - JAWS - KC - Gerenciando o consumo de recursos", deadline: "-" },
    { title: "KC 220 - JAWS - KC - Criando implantações repetíveis automatizadas", deadline: "-" },
    { title: "KC 195 - CERT - KC - Preparação da Certificação do Cenário de Avaliação", deadline: "-" },
    { title: "KC 196 - CERT - KC - Prática de estratégia de teste de cenário", deadline: "-" },
    { title: "KC 197 - CERT - KC - Computação em nuvem", deadline: "20/01/2026" },
    { title: "KC 198 - CERT - KC - Economia da nuvem", deadline: "26/01/2025" },
    { title: "KC 199 - CERT - KC - Infraestrutura global da AWS", deadline: "26/01/2025" },
    { title: "KC 200 - CERT - KC - Compute", deadline: "26/01/2025" },
    { title: "KC 201 - CERT - KC - Gerenciamento de identidade e acesso [IAM]", deadline: "-" },
    { title: "KC 202 - CERT - KC - Amazon Virtual Private Cloud [VPC]", deadline: "26/01/2025" },
    { title: "KC 203 - CERT - KC - Armazenamento", deadline: "-" },
    { title: "KC 204 - CERT - KC - Bancos de dados", deadline: "26/01/2025" },
    { title: "KC 205 - CERT - KC - Cobrança e suporte", deadline: "-" },
    { title: "KC 206 - CERT - KC - Arquitetura em nuvem", deadline: "-" },
    { title: "KC 207 - CERT - KC - Balanceamento - Dimensionamento - Monitoramento", deadline: "26/01/2026" }
];

const labs = [
    { title: "Lab 11 - Introdução ao Amazon EC2", deadline: "expirado" },
    { title: "Lab 267 - Criar a sua VPC e iniciar um servidor Web", deadline: "expirado" },
    { title: "Lab 279 - Introdução ao gerenciamento de identidade e acesso (IAM)", deadline: "expirado" },
    { title: "Lab 160 - Crie seu servidor de banco de dados...", deadline: "expirado" },
    { title: "Lab 168 - Instalar e configurar a CLI da AWS", deadline: "expirado" },
    { title: "Lab 169 - Usar o AWS Systems Manager", deadline: "expirado" },
    { title: "Lab 170 - Criar um site no S3", deadline: "20/01/2026" },
    { title: "Lab 171 - Criando instâncias do Amazon EC2", deadline: "20/01/2026" },
    { title: "Lab 172 - [Desafio] Exercício de instância do EC2", deadline: "-" },
    { title: "Lab 173 - Solucionar problemas para criar uma instância", deadline: "-" },
    { title: "Lab 174 - Dimensionar e balancear a carga da arquitetura", deadline: "26/01/2025" },
    { title: "Lab 175 - Usar o Auto Scaling na AWS (Linux)", deadline: "26/01/2025" },
    { title: "Lab 176 - Roteamento de failover do Route 53", deadline: "26/01/2025" },
    { title: "Lab 178 - Trabalhar com o AWS Lambda", deadline: "26/01/2025" },
    { title: "Lab 177 - [Desafio] Exercício do AWS Lambda", deadline: "-" },
    { title: "Lab 179 - Migrar para o Amazon RDS", deadline: "26/01/2025" },
    { title: "Lab 180 - Configurar uma Amazon VPC", deadline: "-" },
    { title: "Lab 181 - Solucionar problemas de uma VPC", deadline: "-" },
    { title: "Lab 182 - Trabalhar com o Amazon EBS", deadline: "-" },
    { title: "Lab 183 - Gerenciar o armazenamento", deadline: "-" },
    { title: "Lab 184 - [Desafio] Exercício de S3", deadline: "-" },
    { title: "Lab 185 - Trabalhar com o Amazon S3", deadline: "-" },
    { title: "Lab 186 - Monitorar a infraestrutura", deadline: "-" },
    { title: "Lab 187 - Trabalhar com o AWS CloudTrail", deadline: "-" },
    { title: "Lab 188 - Gerenciar recursos com marcação", deadline: "-" },
    { title: "Lab 189 - Otimizar a utilização", deadline: "-" },
    { title: "Lab 190 - Automatização de implantações com o AWS CloudFormation", deadline: "-" },
    { title: "Lab 191 - Solucionar problemas de implantações do AWS CloudFormation", deadline: "-" },
    { title: "Lab 192 - [Desafio] CloudFormation", deadline: "-" },
    { title: "Lab 316 - [AI] Amazon SageMaker - Training", deadline: "-" },
];

const cps = [
    { title: "Lifelong Learning e PDI", deadline: "expirado" },
    { title: "Atividade de CV", deadline: "expirado" },
    { title: "Atividade de LinkedIn", deadline: "21/01/2026" },
    { title: "Atividade de Vídeo Apresentação", deadline: "27/01/2026" }
];

// ============================
// RENDERIZAÇÃO DAS LISTAS
// ============================

function renderList(items, div, prefix, saved) {
    div.innerHTML = "";

    items.forEach((item, idx) => {
        const id = prefix + "_" + idx;
        const done = saved[id] === true;

        const divTask = document.createElement("div");
        divTask.className = "task" + (done ? " done" : "");
        divTask.onclick = () => toggle(id);

        divTask.innerHTML = `
            <div>${item.title}</div>
            <div class="deadline">Prazo de envio: ${item.deadline}</div>
        `;

        div.appendChild(divTask);
    });
}

function carregar() {
    const saved = JSON.parse(localStorage.getItem("progress")) || {};
    const kcsDiv = document.getElementById("kcs");
    const labsDiv = document.getElementById("labs");
    const cpsDiv = document.getElementById("cps");

    renderList(kcs, kcsDiv, "kc", saved);
    renderList(labs, labsDiv, "lab", saved);
    renderList(cps, cpsDiv, "cps", saved);

    atualizarProgresso();
    atualizarIconeTema();
}

// ============================
// TOGGLE CONCLUIR
// ============================

function toggle(id) {
    const saved = JSON.parse(localStorage.getItem("progress")) || {};
    saved[id] = !saved[id];
    localStorage.setItem("progress", JSON.stringify(saved));
    carregar();
}

// ============================
// BARRA DE PROGRESSO + PARABÉNS (MODAL RESTAURADO)
// ============================

function atualizarProgresso() {
    const saved = JSON.parse(localStorage.getItem("progress")) || {};
    const total = kcs.length + labs.length + cps.length;
    let concluidos = Object.values(saved).filter(v => v).length;
    concluidos = Math.min(concluidos, total);

    let porcentagem = Math.round((concluidos / total) * 100);
    porcentagem = Math.min(porcentagem, 100);

    document.getElementById("progress-bar").style.width = porcentagem + "%";
    document.getElementById("progressText").innerText = porcentagem + "%";

    // ---- MENSAGEM DE PARABÉNS ----
    const modal = document.getElementById("congratsModal");
    const typingText = document.getElementById("typingText");
    const closeBtn = document.getElementById("closeCongrats");

    // Função de digitação (typeWriter) RESTAURADA
    function typeWriter(text, element, speed = 50) {
        element.innerHTML = "";
        let i = 0;
        function typing() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            }
        }
        typing();
    }

    if (concluidos === total && total > 0) {
        if (!localStorage.getItem("allCompletedShown")) {
            // Confete 🎉
            if (typeof confetti === 'function') {
                confetti({ particleCount: 250, spread: 90, origin: { y: 0.6 } });
            }

            if (modal) {
                modal.classList.add("show");
                if (typingText) {
                    typeWriter("🎉Parabéns! Você concluiu tudo!🎉", typingText);
                }
            }
            localStorage.setItem("allCompletedShown", "yes");
        }
    } else {
        if (modal) {
            modal.classList.remove("show");
        }
        localStorage.removeItem("allCompletedShown");
    }

    if (closeBtn) {
        closeBtn.onclick = () => {
            if (modal) {
                modal.classList.remove("show");
            }
        };
    }
}


// ---------------------------
// TEMA ESCURO/CLARO (SVG REFINE)
// ---------------------------
const themeToggle = document.getElementById("themeToggle");

const sunIcon = `
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
</svg>`;

const moonIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path></svg>`;

function atualizarIconeTema() {
    if (themeToggle) {
        if (document.body.classList.contains("dark")) {
            themeToggle.innerHTML = sunIcon;
        } else {
            themeToggle.innerHTML = moonIcon;
        }
    }
}

if (themeToggle) {
    themeToggle.onclick = () => {
        document.body.classList.toggle("dark");
        localStorage.setItem("temaEscuro", document.body.classList.contains("dark"));
        atualizarIconeTema();
    };
}

if (localStorage.getItem("temaEscuro") === "true") {
    document.body.classList.add("dark");
}

// ---------------------------
// RESET REMOVIDO
// ---------------------------

// --- SINCRONIZAR LOCALSTORAGE COM LISTA ATUAL --- //
function limparLocalStorageAntigo() {
    const saved = JSON.parse(localStorage.getItem("progress")) || {};
    const idsAtuais = [
        ...kcs.map((_, i) => `kc_${i}`),
        ...labs.map((_, i) => `lab_${i}`),
        ...cps.map((_, i) => `cps_${i}`)
    ];
    let mudou = false;
    let novoSaved = {};
    for (const key of Object.keys(saved)) {
        if (idsAtuais.includes(key) || key === "allCompletedShown") {
            novoSaved[key] = saved[key];
        } else {
            mudou = true;
        }
    }
    if (mudou) {
        localStorage.setItem("progress", JSON.stringify(novoSaved));
    }
}

// ---------------------------
// NAVEGAÇÃO MOBILE (REFINE)
// ---------------------------
window.addEventListener("DOMContentLoaded", () => {
    limparLocalStorageAntigo();

    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const navButtons = document.querySelectorAll('.nav-btn');
    const columns = document.querySelectorAll('.column');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('open');
            mobileNav.classList.toggle('open');
        });
    }

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');

            // Não fechar o menu ao selecionar — só atualiza a aba.
            // O menu só fecha quando o usuário clicar no botão hambúrguer/X.

            // Atualizar botões
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Atualizar colunas
            columns.forEach(col => {
                col.classList.remove('active-mobile');
                if (col.id === targetId) {
                    col.classList.add('active-mobile');
                }
            });
        });
    });

    // Fechar o menu ao clicar fora (overlay) — respeita cliques dentro do menu e no botão
    document.addEventListener('click', (e) => {
        if (!menuToggle || !mobileNav) return;
        if (!mobileNav.classList.contains('open')) return;

        // Use composedPath para detectar corretamente o local do clique mesmo
        // se o elemento alvo for removido/re-renderizado pelos handlers (ex: toggle -> carregar()).
        const path = (typeof e.composedPath === 'function') ? e.composedPath() : (e.path || []);

        const clickedInsideNav = path.some(node => node && node.id === 'mobileNav');
        const clickedToggle = path.some(node => node && node.id === 'menuToggle');
        const clickedInsideColumn = path.some(node => node && node.classList && node.classList.contains('column'));

        // Não fechar ao clicar dentro do menu nem ao interagir com as colunas/atividades.
        if (!clickedInsideNav && !clickedToggle && !clickedInsideColumn) {
            menuToggle.classList.remove('open');
            mobileNav.classList.remove('open');
        }
    });
});

carregar();