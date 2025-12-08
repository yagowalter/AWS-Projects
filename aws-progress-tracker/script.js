// ============================
// LISTAS COM DATAS
// ============================

const kcs = [
    { title: "KC 5 – O que é computação em nuvem?", deadline: "expirado" },
    { title: "KC 208 - Vantagens da computação em nuvem", deadline: "expirado" },
    { title: "KC 6 – O que é a Amazon Web Services?", deadline: "expirado" },
    { title: "KC 7 – Fundamentos da definição de preço da AWS", deadline: "expirado" },
    { title: "KC 8 – Visão geral da infraestrutura da AWS", deadline: "expirado" },
    { title: "KC 209 – Serviços e categorias da AWS", deadline: "expirado" },
    { title: "KC 9 – Modelo de responsabilidade compartilhada", deadline: "expirado" },
    { title: "KC 10 – Introdução ao Amazon S3", deadline: "08/12/2025" },
    { title: "KC 12 – Introdução ao Amazon EC2", deadline: "08/12/2025" },
    { title: "KC 282 – Introdução à segurança", deadline: "08/12/2025" },
    { title: "KC 288 – Prevenção: Gerenciamento de identidades", deadline: "22/12/2025" },
    { title: "KC 291 – AWS CloudTrail", deadline: "22/12/2025" },
    { title: "KC 292 – AWS Config", deadline: "22/12/2025" },
    { title: "KC 295 – Trusted Advisor", deadline: "22/12/2025" },
    { title: "KC 296 – Práticas recomendadas de segurança para a criação de conta", deadline: "22/12/2025" },
    { title: "KC 297 – Programa de conformidade de segurança da AWS", deadline: "22/12/2025" },
    { title: "KC 298 – Recursos de segurança da AWS", deadline: "-" },
    { title: "KC 309 – Amazon DynamoDB", deadline: "05/01" },
    { title: "KC 308 – Amazon RDS", deadline: "-" },
    { title: "KC 167 - JAWS - KC - Well-Architected Framework", deadline: "-" },
    { title: "KC 210 - JAWS - KC - Visão geral das operações do sistema", deadline: "-" },
    { title: "KC 211 - JAWS - KC - Ferramentas e automação", deadline: "-" },
    { title: "KC 212 - JAWS - KC - Computação (servidores)", deadline: "-" },
    { title: "KC 213 - JAWS - KC - Computação (dimensionamento e resolução de nomes)", deadline: "-" },
    { title: "KC 214 - JAWS - KC - Computação (contêineres)", deadline: "-" },
    { title: "KC 215 - JAWS - KC - Computação (bancos de dados)", deadline: "-" },
    { title: "KC 216 - Serviços de rede AWS", deadline: "-" },
    { title: "KC 217 - JAWS - KC - Armazenamento e arquivamento", deadline: "-" },
    { title: "KC 218 - JAWS - KC - Monitoramento e segurança", deadline: "-" },
    { title: "KC 219 - JAWS - KC - Gerenciando o consumo de recursos", deadline: "-" },
    { title: "KC 220 - JAWS - KC - Criando implantações repetíveis automatizadas", deadline: "-" },
    { title: "KC 195 - CERT - KC - Preparação da Certificação do Cenário de Avaliação", deadline: "-" },
    { title: "KC 196 - CERT - KC - Prática de estratégia de teste de cenário", deadline: "-" },
    { title: "KC 197 - CERT - KC - Computação em nuvem", deadline: "-" },
    { title: "KC 198 - CERT - KC - Economia da nuvem", deadline: "-" },
    { title: "KC 199 - CERT - KC - Infraestrutura global da AWS", deadline: "-" },
    { title: "KC 200 - CERT - KC - Compute", deadline: "-" },
    { title: "KC 201 - CERT - KC - Gerenciamento de identidade e acesso [IAM]", deadline: "-" },
    { title: "KC 202 - CERT - KC - Amazon Virtual Private Cloud [VPC]", deadline: "-" },
    { title: "KC 203 - CERT - KC - Armazenamento", deadline: "-" },
    { title: "KC 204 - CERT - KC - Bancos de dados", deadline: "-" },
    { title: "KC 205 - CERT - KC - Cobrança e suporte", deadline: "-" },
    { title: "KC 206 - CERT - KC - Arquitetura em nuvem", deadline: "-" },
    { title: "KC 207 - CERT - KC - Balanceamento - Dimensionamento - Monitoramento", deadline: "-" }
];

const labs = [
    { title: "Lab 11 - Introdução ao Amazon EC2", deadline: "08/12/2025" },
    { title: "Lab 267 - Criar a sua VPC e iniciar um servidor Web", deadline: "08/12/2025" },
    { title: "Lab 279 - Introdução ao gerenciamento de identidade e acesso (IAM)", deadline: "08/12/2025" },
    { title: "Lab 160 - Crie seu servidor de banco de dados...", deadline: "22/12/2025" },
    { title: "Lab 1 - Ambiente de Sandbox", deadline: "05/01/2025" },
    { title: "Lab 168 - Instalar e configurar a CLI da AWS", deadline: "-" },
    { title: "Lab 169 - Usar o AWS Systems Manager", deadline: "-" },
    { title: "Lab 170 - Criar um site no S3", deadline: "-" },
    { title: "Lab 171 - Criando instâncias do Amazon EC2", deadline: "-" },
    { title: "Lab 172 - [Desafio] Exercício de instância do EC2", deadline: "-" },
    { title: "Lab 173 - Solucionar problemas para criar uma instância", deadline: "-" },
    { title: "Lab 174 - Dimensionar e balancear a carga da arquitetura", deadline: "-" },
    { title: "Lab 175 - Usar o Auto Scaling na AWS (Linux)", deadline: "-" },
    { title: "Lab 176 - Roteamento de failover do Route 53", deadline: "-" },
    { title: "Lab 178 - Trabalhar com o AWS Lambda", deadline: "-" },
    { title: "Lab 177 - [Desafio] Exercício do AWS Lambda", deadline: "-" },
    { title: "Lab 179 - Migrar para o Amazon RDS", deadline: "-" },
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
    { title: "Lifelong Learning e PDI", deadline: "18/12/2025" },
    { title: "Atividade de CV", deadline: "20/12/2025" },
];

// ============================
// RENDERIZAÇÃO DAS LISTAS
// ============================

function carregar() {
    const saved = JSON.parse(localStorage.getItem("progress")) || {};
    const kcsDiv = document.getElementById("kcs");
    const labsDiv = document.getElementById("labs");
    const cpsDiv = document.getElementById("cps");

    kcsDiv.innerHTML = "";
    labsDiv.innerHTML = "";
    cpsDiv.innerHTML = "";

    kcs.forEach((item, idx) => {
        const done = saved["kc_" + idx] === true;

        const div = document.createElement("div");
        div.className = "task" + (done ? " done" : "");
        div.onclick = () => toggle("kc_" + idx);

        div.innerHTML = `
            <div>${item.title}</div>
            <div class="deadline">Prazo de envio: ${item.deadline}</div>
        `;

        kcsDiv.appendChild(div);
    });

    labs.forEach((item, idx) => {
        const done = saved["lab_" + idx] === true;

        const div = document.createElement("div");
        div.className = "task" + (done ? " done" : "");
        div.onclick = () => toggle("lab_" + idx);

        div.innerHTML = `
            <div>${item.title}</div>
            <div class="deadline">Prazo de envio: ${item.deadline}</div>
        `;

        labsDiv.appendChild(div);
    });

    cps.forEach((item, idx) => {
        const done = saved["cps_" + idx] === true;

        const div = document.createElement("div");
        div.className = "task" + (done ? " done" : "");
        div.onclick = () => toggle("cps_" + idx);

        div.innerHTML = `
            <div>${item.title}</div>
            <div class="deadline">Prazo de envio: ${item.deadline}</div>
        `;

        cpsDiv.appendChild(div);
    });

    atualizarProgresso();
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
// BARRA DE PROGRESSO + PARABÉNS
// ============================

// ============================
// BARRA DE PROGRESSO + PARABÉNS
// ============================

function atualizarProgresso() {
    const saved = JSON.parse(localStorage.getItem("progress")) || {};
    // MODIFICADO: Incluindo cps.length no cálculo do total
    const total = kcs.length + labs.length + cps.length;
    let concluidos = Object.values(saved).filter(v => v).length;
    if (concluidos > total) concluidos = total;

    let porcentagem = Math.round((concluidos / total) * 100);
    if (porcentagem > 100) porcentagem = 100;


    document.getElementById("progress-bar").style.width = porcentagem + "%";
    document.getElementById("progressText").innerText = porcentagem + "%";

    // ---- MENSAGEM DE PARABÉNS ----
    const modal = document.getElementById("congratsModal");
    const typingText = document.getElementById("typingText");
    const closeBtn = document.getElementById("closeCongrats");

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

        // Impede de mostrar várias vezes se já abriu antes
        if (!localStorage.getItem("allCompletedShown")) {

            // Confete 🎉
            confetti({
                particleCount: 250,
                spread: 90,
                origin: { y: 0.6 }
            });

            // Mostra modal
            modal.classList.add("show");

            // Texto digitando
            typeWriter("🎉Parabéns! Você concluiu tudo!🎉", typingText);

            // Marca como exibido
            localStorage.setItem("allCompletedShown", "yes");
        }

    } else {
        modal.classList.remove("show");
        localStorage.removeItem("allCompletedShown");
    }

    closeBtn.onclick = () => {
        modal.classList.remove("show");
    };

}


const themeToggle = document.getElementById("themeToggle");

function atualizarIconeTema() {
    const resetBtn = document.getElementById("resetBtn");

    if (document.body.classList.contains("dark")) {
        themeToggle.src = "assets/img/sun.png";
        resetBtn.src = "assets/img/reiniciar_branco.png";
    } else {
        themeToggle.src = "assets/img/moon.png";
        resetBtn.src = "assets/img/reiniciar_preto.png";
    }
}

themeToggle.onclick = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("temaEscuro", document.body.classList.contains("dark"));
    atualizarIconeTema();
};

if (localStorage.getItem("temaEscuro") === "true") {
    document.body.classList.add("dark");
}

// ---------------------------
// RESET (botão)
// ---------------------------
const resetBtn = document.getElementById("resetBtn");
if (resetBtn) {
    resetBtn.onclick = () => {
        // remove progresso e a flag que indica que a animação já foi mostrada
        localStorage.removeItem("progress");
        localStorage.removeItem("allCompletedShown");
        // opcional: garante que o tema salvo não seja apagado aqui
        // (se quiser também resetar tema, descomente abaixo)
        // localStorage.removeItem("temaEscuro");

        // recarrega a lista na UI
        carregar();
    };
}

// --- SINCRONIZAR LOCALSTORAGE COM LISTA ATUAL --- //
function limparLocalStorageAntigo() {
    const saved = JSON.parse(localStorage.getItem("progress")) || {};

    // IDs das tarefas atuais (kc_0, kc_1, lab_0, lab_1, cps_0, cps_1, etc.)
    const idsAtuais = [
        ...kcs.map((_, i) => `kc_${i}`),
        ...labs.map((_, i) => `lab_${i}`),
        ...cps.map((_, i) => `cps_${i}`) // ADICIONADO: Incluindo IDs dos CP's
    ];

    let mudou = false;

    // Remove chaves antigas
    for (const key of Object.keys(saved)) {
        // Certifica que "allCompletedShown" não seja apagado
        if (!idsAtuais.includes(key) && key !== "allCompletedShown") {
            delete saved[key];
            mudou = true;
        }
    }

    if (mudou) {
        localStorage.setItem("progress", JSON.stringify(saved));
    }
}

// Execute assim que o JS carregar
window.addEventListener("DOMContentLoaded", limparLocalStorageAntigo);


atualizarIconeTema();
carregar();