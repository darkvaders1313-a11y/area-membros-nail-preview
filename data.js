/**
 * Formação Completa Nail Design
 * Cada aula com link individual do Google Drive
 */

const PHASES = [
  {
    "id": 1,
    "key": "1",
    "title": "Base profissional",
    "subtitle": "Fundamentos que ninguém te ensina direito",
    "color": "#c45c8a",
    "goal": "Sair daqui sabendo atender com higiene, manicure limpa e cutilagem confiante.",
    "order": "Comece aqui se é iniciante ou quer reforçar a base.",
    "modules": [
      25,
      16,
      1,
      22,
      13
    ]
  },
  {
    "id": 2,
    "key": "2",
    "title": "Formatos de unha",
    "subtitle": "Desenho, simetria e encaixe no cliente",
    "color": "#9b6b9e",
    "goal": "Dominar square, bailarina e unhas largas com proporção profissional.",
    "order": "Depois da base. Formato errado estraga qualquer técnica bonita.",
    "modules": [
      18,
      19,
      21
    ]
  },
  {
    "id": 3,
    "key": "3",
    "title": "Esmaltação e gel",
    "subtitle": "Acabamento que parece europeu",
    "color": "#6b7fd7",
    "goal": "Esmaltação em gel limpa + francesinhas em mais de um método.",
    "order": "Com a base e o formato ok, agora vem o acabamento de salão.",
    "modules": [
      4,
      3,
      2
    ]
  },
  {
    "id": 4,
    "key": "4",
    "title": "Alongamentos",
    "subtitle": "Estrutura, molde, gel-x, fibra e polygel",
    "color": "#3d9b8f",
    "goal": "Escolher a técnica certa para cada cliente e fazer manutenção segura.",
    "order": "Só avance quando a esmaltação em gel estiver firme.",
    "modules": [
      7,
      8,
      6,
      11
    ]
  },
  {
    "id": 5,
    "key": "5",
    "title": "Nail art & efeitos",
    "subtitle": "Detalhes que elevam o ticket",
    "color": "#d4a017",
    "goal": "Aplicar baby boomer, glitter e pó cromado com resultado de vitrine.",
    "order": "Com estrutura pronta, as artes ficam fáceis e vendem sozinhas.",
    "modules": [
      5,
      12,
      20
    ]
  },
  {
    "id": 6,
    "key": "6",
    "title": "Negócio & presença",
    "subtitle": "Cobrar bem, atrair e fidelizar",
    "color": "#e07a3d",
    "goal": "Precificar, fotografar, criar stories e comprar dos fornecedores certos.",
    "order": "Pode estudar em paralelo às técnicas — mas não deixe para o fim.",
    "modules": [
      24,
      17,
      10,
      9
    ]
  }
];

const BONUS_PHASE = {
  "id": "bonus",
  "key": "bonus",
  "title": "Bônus & extras",
  "subtitle": "Serviços extras para aumentar o faturamento",
  "color": "#8b5cf6",
  "goal": "Spa dos pés, público masculino e maquiagem de noivas.",
  "order": "Faça quando a trilha principal já estiver andando.",
  "modules": [
    15,
    14,
    23
  ]
};

const CILIOS = {
  "title": "Extensão de Cílios",
  "folder": "https://drive.google.com/drive/folders/1qcoxhpwGe5ili9skUZF6Kx5HN5e8d6dh?usp=sharing",
  "sessions": [
    {
      "n": 1,
      "title": "Boas Vindas e Download",
      "focus": "Técnica: Clássico Fio a Fio",
      "link": "https://drive.google.com/file/d/1v_324Yz9fQ00P5TG0rWZihQbdzE8dqHX/view?usp=drive_link",
      "section": "Clássico Fio a Fio"
    },
    {
      "n": 2,
      "title": "Prática Boneca",
      "focus": "Técnica: Clássico Fio a Fio",
      "link": "https://drive.google.com/file/d/11WC1Y7hzBbkzs-EerJJ2K0J91tMTsfRE/view?usp=drive_link",
      "section": "Clássico Fio a Fio"
    },
    {
      "n": 3,
      "title": "Materiais e Ferramentas",
      "focus": "Técnica: Clássico Fio a Fio",
      "link": "https://drive.google.com/file/d/1OtAMmyaaZKKNLMV8-buN3tFJZI77KhhV/view?usp=drive_link",
      "section": "Clássico Fio a Fio"
    },
    {
      "n": 4,
      "title": "Aplicação de Cílios na Boneca",
      "focus": "Técnica: Clássico Fio a Fio",
      "link": "https://drive.google.com/file/d/1E2W1BP44L6j5tLoIcnwqdsf6KkXH6RGj/view?usp=drive_link",
      "section": "Clássico Fio a Fio"
    },
    {
      "n": 5,
      "title": "Finalizando a Boneca",
      "focus": "Técnica: Clássico Fio a Fio",
      "link": "https://drive.google.com/file/d/1o9p9SMpdjnKvgfpttnUlhJqy1NMk9ZTO/view?usp=drive_link",
      "section": "Clássico Fio a Fio"
    },
    {
      "n": 6,
      "title": "Higienização e Preparação",
      "focus": "Técnica: Clássico Fio a Fio",
      "link": "https://drive.google.com/file/d/1Hr_0F9dmF3K7UOjlpoB2kXRf4wbVFMD1/view?usp=drive_link",
      "section": "Clássico Fio a Fio"
    },
    {
      "n": 7,
      "title": "Mapping e Aplicação dos Cílios",
      "focus": "Técnica: Clássico Fio a Fio",
      "link": "https://drive.google.com/file/d/1U3RXUguS3fUX0Fi1BYZnqjJtfAySAoNZ/view?usp=drive_link",
      "section": "Clássico Fio a Fio"
    },
    {
      "n": 8,
      "title": "Preenchimento Interno Total",
      "focus": "Técnica: Clássico Fio a Fio",
      "link": "https://drive.google.com/file/d/1bOjPfVUYa7tgjYmVxIhLRs4_SZpM1dzh/view?usp=drive_link",
      "section": "Clássico Fio a Fio"
    },
    {
      "n": 9,
      "title": "Preenchimento Central",
      "focus": "Técnica: Clássico Fio a Fio",
      "link": "https://drive.google.com/file/d/1m2E4DydFUdeU7YrMWReWYl-e5AxyEsIi/view?usp=drive_link",
      "section": "Clássico Fio a Fio"
    },
    {
      "n": 10,
      "title": "Finalização e Resultados",
      "focus": "Técnica: Clássico Fio a Fio",
      "link": "https://drive.google.com/file/d/1HEvSRBNVcZ3DU0LwEYB0ylRe6Sz2w3k0/view?usp=drive_link",
      "section": "Clássico Fio a Fio"
    },
    {
      "n": 11,
      "title": "Higienização e Preparação",
      "focus": "Técnica: Europeu 4D",
      "link": "https://drive.google.com/file/d/1_fOuhJPlRs1Muzz63nXKXw_Jn9vGk2h1/view?usp=drive_link",
      "section": "Europeu 4D"
    },
    {
      "n": 12,
      "title": "Mapping",
      "focus": "Técnica: Europeu 4D",
      "link": "https://drive.google.com/file/d/11F41DE4-E0M1T4wJqnJcxPuLGQTkESTX/view?usp=drive_link",
      "section": "Europeu 4D"
    },
    {
      "n": 13,
      "title": "Aplicação dos Cílios Europeu 4D",
      "focus": "Técnica: Europeu 4D",
      "link": "https://drive.google.com/file/d/1AHymoMNpPfwCHzbvHA5gmXMkud8uln8D/view?usp=drive_link",
      "section": "Europeu 4D"
    },
    {
      "n": 14,
      "title": "Finalização e Resultado",
      "focus": "Técnica: Europeu 4D",
      "link": "https://drive.google.com/file/d/18mBk59hClGknwf32LI1MaMbYmZg7L4zT/view?usp=drive_link",
      "section": "Europeu 4D"
    },
    {
      "n": 15,
      "title": "Higienização e Mapping",
      "focus": "Técnica: Volume Brasileiro",
      "link": "https://drive.google.com/file/d/135kBowM_2RlRhV05vTxMrV5I5-z46qbz/view?usp=drive_link",
      "section": "Volume Brasileiro"
    },
    {
      "n": 16,
      "title": "Aplicação Volume Brasileiro",
      "focus": "Técnica: Volume Brasileiro",
      "link": "https://drive.google.com/file/d/1FrD__gRnbdiOaNwNNRsOYxKIcvKGCy0_/view?usp=drive_link",
      "section": "Volume Brasileiro"
    },
    {
      "n": 17,
      "title": "Removendo os Cílios Pt1",
      "focus": "Técnica: Remoção de Cílios",
      "link": "https://drive.google.com/file/d/1tRxnZ_3crt2gPNr1QJtMK5D8Dk_PC08U/view?usp=drive_link",
      "section": "Remoção de Cílios"
    },
    {
      "n": 18,
      "title": "Removendo os Cílios Pt2",
      "focus": "Técnica: Remoção de Cílios",
      "link": "https://drive.google.com/file/d/1STYOz2wkGvFqlyUmj3EX9To3C-3XQbIz/view?usp=drive_link",
      "section": "Remoção de Cílios"
    },
    {
      "n": 19,
      "title": "Removendo os Cílios Pt3",
      "focus": "Técnica: Remoção de Cílios",
      "link": "https://drive.google.com/file/d/1aU2pBi-QNMh1BJDDK7A3HwLwcjHgsFGF/view?usp=drive_link",
      "section": "Remoção de Cílios"
    }
  ],
  "modules": [
    {
      "title": "Clássico Fio a Fio",
      "sessions": [
        {
          "n": 1,
          "title": "Boas Vindas e Download",
          "focus": "Técnica: Clássico Fio a Fio",
          "link": "https://drive.google.com/file/d/1v_324Yz9fQ00P5TG0rWZihQbdzE8dqHX/view?usp=drive_link",
          "section": "Clássico Fio a Fio"
        },
        {
          "n": 2,
          "title": "Prática Boneca",
          "focus": "Técnica: Clássico Fio a Fio",
          "link": "https://drive.google.com/file/d/11WC1Y7hzBbkzs-EerJJ2K0J91tMTsfRE/view?usp=drive_link",
          "section": "Clássico Fio a Fio"
        },
        {
          "n": 3,
          "title": "Materiais e Ferramentas",
          "focus": "Técnica: Clássico Fio a Fio",
          "link": "https://drive.google.com/file/d/1OtAMmyaaZKKNLMV8-buN3tFJZI77KhhV/view?usp=drive_link",
          "section": "Clássico Fio a Fio"
        },
        {
          "n": 4,
          "title": "Aplicação de Cílios na Boneca",
          "focus": "Técnica: Clássico Fio a Fio",
          "link": "https://drive.google.com/file/d/1E2W1BP44L6j5tLoIcnwqdsf6KkXH6RGj/view?usp=drive_link",
          "section": "Clássico Fio a Fio"
        },
        {
          "n": 5,
          "title": "Finalizando a Boneca",
          "focus": "Técnica: Clássico Fio a Fio",
          "link": "https://drive.google.com/file/d/1o9p9SMpdjnKvgfpttnUlhJqy1NMk9ZTO/view?usp=drive_link",
          "section": "Clássico Fio a Fio"
        },
        {
          "n": 6,
          "title": "Higienização e Preparação",
          "focus": "Técnica: Clássico Fio a Fio",
          "link": "https://drive.google.com/file/d/1Hr_0F9dmF3K7UOjlpoB2kXRf4wbVFMD1/view?usp=drive_link",
          "section": "Clássico Fio a Fio"
        },
        {
          "n": 7,
          "title": "Mapping e Aplicação dos Cílios",
          "focus": "Técnica: Clássico Fio a Fio",
          "link": "https://drive.google.com/file/d/1U3RXUguS3fUX0Fi1BYZnqjJtfAySAoNZ/view?usp=drive_link",
          "section": "Clássico Fio a Fio"
        },
        {
          "n": 8,
          "title": "Preenchimento Interno Total",
          "focus": "Técnica: Clássico Fio a Fio",
          "link": "https://drive.google.com/file/d/1bOjPfVUYa7tgjYmVxIhLRs4_SZpM1dzh/view?usp=drive_link",
          "section": "Clássico Fio a Fio"
        },
        {
          "n": 9,
          "title": "Preenchimento Central",
          "focus": "Técnica: Clássico Fio a Fio",
          "link": "https://drive.google.com/file/d/1m2E4DydFUdeU7YrMWReWYl-e5AxyEsIi/view?usp=drive_link",
          "section": "Clássico Fio a Fio"
        },
        {
          "n": 10,
          "title": "Finalização e Resultados",
          "focus": "Técnica: Clássico Fio a Fio",
          "link": "https://drive.google.com/file/d/1HEvSRBNVcZ3DU0LwEYB0ylRe6Sz2w3k0/view?usp=drive_link",
          "section": "Clássico Fio a Fio"
        }
      ]
    },
    {
      "title": "Europeu 4D",
      "sessions": [
        {
          "n": 11,
          "title": "Higienização e Preparação",
          "focus": "Técnica: Europeu 4D",
          "link": "https://drive.google.com/file/d/1_fOuhJPlRs1Muzz63nXKXw_Jn9vGk2h1/view?usp=drive_link",
          "section": "Europeu 4D"
        },
        {
          "n": 12,
          "title": "Mapping",
          "focus": "Técnica: Europeu 4D",
          "link": "https://drive.google.com/file/d/11F41DE4-E0M1T4wJqnJcxPuLGQTkESTX/view?usp=drive_link",
          "section": "Europeu 4D"
        },
        {
          "n": 13,
          "title": "Aplicação dos Cílios Europeu 4D",
          "focus": "Técnica: Europeu 4D",
          "link": "https://drive.google.com/file/d/1AHymoMNpPfwCHzbvHA5gmXMkud8uln8D/view?usp=drive_link",
          "section": "Europeu 4D"
        },
        {
          "n": 14,
          "title": "Finalização e Resultado",
          "focus": "Técnica: Europeu 4D",
          "link": "https://drive.google.com/file/d/18mBk59hClGknwf32LI1MaMbYmZg7L4zT/view?usp=drive_link",
          "section": "Europeu 4D"
        }
      ]
    },
    {
      "title": "Volume Brasileiro",
      "sessions": [
        {
          "n": 15,
          "title": "Higienização e Mapping",
          "focus": "Técnica: Volume Brasileiro",
          "link": "https://drive.google.com/file/d/135kBowM_2RlRhV05vTxMrV5I5-z46qbz/view?usp=drive_link",
          "section": "Volume Brasileiro"
        },
        {
          "n": 16,
          "title": "Aplicação Volume Brasileiro",
          "focus": "Técnica: Volume Brasileiro",
          "link": "https://drive.google.com/file/d/1FrD__gRnbdiOaNwNNRsOYxKIcvKGCy0_/view?usp=drive_link",
          "section": "Volume Brasileiro"
        }
      ]
    },
    {
      "title": "Remoção de Cílios",
      "sessions": [
        {
          "n": 17,
          "title": "Removendo os Cílios Pt1",
          "focus": "Técnica: Remoção de Cílios",
          "link": "https://drive.google.com/file/d/1tRxnZ_3crt2gPNr1QJtMK5D8Dk_PC08U/view?usp=drive_link",
          "section": "Remoção de Cílios"
        },
        {
          "n": 18,
          "title": "Removendo os Cílios Pt2",
          "focus": "Técnica: Remoção de Cílios",
          "link": "https://drive.google.com/file/d/1STYOz2wkGvFqlyUmj3EX9To3C-3XQbIz/view?usp=drive_link",
          "section": "Remoção de Cílios"
        },
        {
          "n": 19,
          "title": "Removendo os Cílios Pt3",
          "focus": "Técnica: Remoção de Cílios",
          "link": "https://drive.google.com/file/d/1aU2pBi-QNMh1BJDDK7A3HwLwcjHgsFGF/view?usp=drive_link",
          "section": "Remoção de Cílios"
        }
      ]
    }
  ]
};


const TOOLS = [
  {
    "id": "cert",
    "title": "Certificado",
    "desc": "Gere e emita certificado da formação.",
    "link": "https://certificadooficial.lovable.app/",
    "icon": "📜"
  },
  {
    "id": "preco",
    "title": "Calculadora de Preços",
    "desc": "Defina valores justos por serviço em minutos.",
    "link": "https://rainhadasunhas.shop/precificacao",
    "icon": "💰"
  },
  {
    "id": "legendas",
    "title": "Gerador de Legendas",
    "desc": "Legendas prontas para posts e stories.",
    "link": "https://rainhadasunhas.shop/gerador",
    "icon": "✍️"
  },
  {
    "id": "brocas",
    "title": "Sequência de Brocas",
    "desc": "Guia da ordem certa na cutilagem russa.",
    "link": "https://russian-mani-guide.lovable.app",
    "icon": "🔧"
  },
  {
    "id": "sim",
    "title": "Simulador de Atendimento",
    "desc": "Treine conversa e condução com a cliente.",
    "link": "https://simuladordeatendimentomento.lovable.app",
    "icon": "💬"
  }
];

const MODULES = {
  1: {
    "id": 1,
    "title": "Curso de Cutilagem Russa – Completo",
    "tag": "Base",
    "phase": 1,
    "level": "Essencial",
    "time": "4 aulas",
    "startHere": "Comece por 'Erros na manicure com lixa elétrica'. Depois pratique em si mesma, em cliente e a combinação com alicate e francesinha.",
    "link": "https://drive.google.com/drive/folders/1ZZtcDyetubNQaEpbNLE9_Pk_1gceTVyc?usp=drive_link",
    "whatYouGet": "Cutilagem limpa, cutícula saudável e acabamento premium.",
    "sessions": [
      {
        "n": 1,
        "title": "Erros na manicure com lixa elétrica seca",
        "focus": "Lixamento e formato.",
        "link": "https://drive.google.com/file/d/1D5R2Cdc1XLPhnwD-ohqTHBBcOoURW4lY/view?usp=drive_link"
      },
      {
        "n": 2,
        "title": "Como fazer em si mesma",
        "focus": "Prática guiada de treino.",
        "link": "https://drive.google.com/file/d/1ru5mNtFRbK3TJgOXOPPyzRPFlFn_SC4r/view?usp=drive_link"
      },
      {
        "n": 3,
        "title": "Fazendo em cliente",
        "focus": "Aplicação em cliente real.",
        "link": "https://drive.google.com/file/d/1W7sO4ftCABxveiXOGi6O4G0FSHuPj3zY/view?usp=drive_link"
      },
      {
        "n": 4,
        "title": "Cutilagem Russa combina com alicate e francesinha",
        "focus": "Combinação de técnicas: cutilagem russa, alicate e francesinha.",
        "link": "videos/cutilagem-russa-alicate-francesinha.mp4",
        "local": true
      }
    ]
  },
  2: {
    "id": 2,
    "title": "Francesinha com Polygel / Carimbo",
    "tag": "Gel",
    "phase": 3,
    "level": "Intermediário",
    "time": "2 aulas",
    "startHere": "Comece pelo carimbo de silicone. Depois a francesinha com polygel.",
    "link": "https://drive.google.com/drive/folders/1NG4bn6NW9THsPFDtUdQQuYUbEkaDRg3o?usp=drive_link",
    "whatYouGet": "Francesinha express com carimbo e versão com polygel.",
    "sessions": [
      {
        "n": 1,
        "title": "Como usar um carimbo de silicone para francesinhas",
        "focus": "Técnica de francesinha.",
        "link": "https://drive.google.com/file/d/15QaDxkLHzZAKxc32y1PXfoPXtAPViYUi/view?usp=drive_link"
      },
      {
        "n": 2,
        "title": "Curso francesinhas com polygel",
        "focus": "Técnica de francesinha.",
        "link": "https://drive.google.com/file/d/1SdrNMHU1Bbwsmi1SbkrHviRsWcWHzrJW/view?usp=drive_link"
      }
    ]
  },
  3: {
    "id": 3,
    "title": "Técnica Completa de Francesinhas",
    "tag": "Gel",
    "phase": 3,
    "level": "Intermediário",
    "time": "3 aulas",
    "startHere": "Comece pela Francesinha Reta. Depois bilateral e reversa.",
    "link": "https://drive.google.com/drive/folders/1NLjkr2LjLpEFdeQU2pyepX99qRT5OJKB?usp=drive_link",
    "whatYouGet": "Francesinha reta, bilateral e reversa.",
    "sessions": [
      {
        "n": 1,
        "title": "Francesinha Reta",
        "focus": "Técnica de francesinha.",
        "link": "https://drive.google.com/file/d/1xxuumXWEkrXOyQ-a-b_eh2CbWyvS05ay/view?usp=drive_link"
      },
      {
        "n": 2,
        "title": "BILATERAL",
        "focus": "Técnica de francesinha.",
        "link": "https://drive.google.com/file/d/1889qo32USUfN8n-fofw03FX-KygKvQOC/view?usp=drive_link"
      },
      {
        "n": 3,
        "title": "Francesinha Reversa",
        "focus": "Técnica de francesinha.",
        "link": "https://drive.google.com/file/d/1ooAHKmhrsrIJ0oySN5WNDmbQ0g6d6NGl/view?usp=drive_link"
      }
    ]
  },
  4: {
    "id": 4,
    "title": "Esmaltação em Gel com Acabamento Europeu",
    "tag": "Gel",
    "phase": 3,
    "level": "Essencial",
    "time": "5 aulas",
    "startHere": "Siga a ordem numerada das aulas (01 → 05).",
    "link": "https://drive.google.com/drive/folders/1UV8EAoG9Wej4JEFA8-7_L73VUDVJIaoz?usp=sharing",
    "whatYouGet": "Esmaltação em gel com acabamento europeu, do lixamento ao resultado.",
    "sessions": [
      {
        "n": 1,
        "title": "Lixamento, Gel e Secagem",
        "focus": "Lixamento e formato.",
        "link": "https://drive.google.com/file/d/1SuYf88emY4C2DSrZy4W43xLZmqUEoivP/view?usp=drive_link"
      },
      {
        "n": 2,
        "title": "Acabamento e Esmalte",
        "focus": "Acabamento e resultado final.",
        "link": "https://drive.google.com/file/d/1cKbj_w8-wS-yZ_t-bQucAmbDmDDsjLiQ/view?usp=drive_link"
      },
      {
        "n": 3,
        "title": "Finalização",
        "focus": "Acabamento e resultado final.",
        "link": "https://drive.google.com/file/d/1j3r5PE5wQlsTcfrlHLPKTcmU5gAOI6mT/view?usp=drive_link"
      },
      {
        "n": 4,
        "title": "Esmaltação Em Gel",
        "focus": "Esmaltação e cor.",
        "link": "https://drive.google.com/file/d/181AW4zEKHvB9PV8zK21Xuh_MvqAKDHNt/view?usp=drive_link"
      },
      {
        "n": 5,
        "title": "Resultados",
        "focus": "Assista com atenção e repita na prática.",
        "link": "https://drive.google.com/file/d/1PWWjTnwNx45md79lk30vkfW5sRNHZi8f/view?usp=drive_link"
      }
    ]
  },
  5: {
    "id": 5,
    "title": "Baby Boomer (Técnica Express)",
    "tag": "Art",
    "phase": 5,
    "level": "Intermediário",
    "time": "1 aula",
    "startHere": "Assista a aula e pratique o esfumado no treino antes da cliente.",
    "link": "https://drive.google.com/drive/folders/1dHiTgwu3PO0NZF0YhmuXzEs1lt65btm2?usp=drive_link",
    "whatYouGet": "Baby boomer express com degradê suave.",
    "sessions": [
      {
        "n": 1,
        "title": "Baby boomer",
        "focus": "Efeito decorativo e nail art.",
        "link": "https://drive.google.com/file/d/1CAklL_CKR9OxZ_Z2b4810g02W8lDthNk/view?usp=drive_link"
      }
    ]
  },
  6: {
    "id": 6,
    "title": "Alongamento com Molde F1",
    "tag": "Alongamento",
    "phase": 4,
    "level": "Avançado",
    "time": "8 aulas",
    "startHere": "Comece na aula Preparação e siga a ordem até Finalização.",
    "link": "https://drive.google.com/drive/folders/1LHly0jGdzcBhvvV3cDoSTEei_0PDrZam?usp=sharing",
    "whatYouGet": "Alongamento com molde F1: preparação, aplicação, remoção e finalização.",
    "sessions": [
      {
        "n": 1,
        "title": "Preparação",
        "focus": "Preparação da unha/ambiente antes da técnica.",
        "link": "https://drive.google.com/file/d/15PGpC9za0pAVkD_vyI-BlhyPitWo5VyS/view?usp=drive_link"
      },
      {
        "n": 2,
        "title": "Decoração",
        "focus": "Efeito decorativo e nail art.",
        "link": "https://drive.google.com/file/d/1sbi7WK3hw62UKbPJ8EWI7FWFalQlk7eg/view?usp=drive_link"
      },
      {
        "n": 3,
        "title": "Decoração parte 2",
        "focus": "Efeito decorativo e nail art.",
        "link": "https://drive.google.com/file/d/1tNyoJyG8JiICvmn6YZt0fq7mPHxd3ESP/view?usp=drive_link"
      },
      {
        "n": 4,
        "title": "Aplicação E Acabamento",
        "focus": "Aplicação passo a passo na prática.",
        "link": "https://drive.google.com/file/d/1gcsmA-kOKKlokF8ESdgZ3LHQb6XWBLSL/view?usp=drive_link"
      },
      {
        "n": 5,
        "title": "Aplicação parte 2",
        "focus": "Aplicação passo a passo na prática.",
        "link": "https://drive.google.com/file/d/1K4E2FH6hyE_DTlFQIH5X10Yjk9Mf8HaF/view?usp=drive_link"
      },
      {
        "n": 6,
        "title": "Remoção",
        "focus": "Manutenção ou remoção segura.",
        "link": "https://drive.google.com/file/d/19Il6V_oyCod6bVUgFiQMDzw6u_vMgdY-/view?usp=drive_link"
      },
      {
        "n": 7,
        "title": "Acabamento",
        "focus": "Acabamento e resultado final.",
        "link": "https://drive.google.com/file/d/1vZgjiCsA9NgHPNRL09WjARX3Ivk9O5EZ/view?usp=drive_link"
      },
      {
        "n": 8,
        "title": "Finalização",
        "focus": "Acabamento e resultado final.",
        "link": "https://drive.google.com/file/d/1vQ1Z2Uw5uHIiESrVPoNcLDeP_25Ayady/view?usp=drive_link"
      }
    ]
  },
  7: {
    "id": 7,
    "title": "Técnica com Polygel",
    "tag": "Alongamento",
    "phase": 4,
    "level": "Intermediário",
    "time": "1 aula",
    "startHere": "Assista a aplicação completa e repita controlando a quantidade de produto.",
    "link": "https://drive.google.com/drive/folders/1cPI_901Oa_URs7BGgtEpswBJcRe6uulo?usp=drive_link",
    "whatYouGet": "Aplicação de polygel passo a passo.",
    "sessions": [
      {
        "n": 1,
        "title": "Como fazer aplicação polygel",
        "focus": "Aplicação passo a passo na prática.",
        "link": "https://drive.google.com/file/d/15a0pK7pr2674yqvqQXGaD8jXDuQK5vmF/view?usp=drive_link"
      }
    ]
  },
  8: {
    "id": 8,
    "title": "Técnica Unha Gel-X",
    "tag": "Alongamento",
    "phase": 4,
    "level": "Intermediário",
    "time": "1 aula",
    "startHere": "Assista a aula inteira uma vez, depois pause e faça junto no treino.",
    "link": "https://drive.google.com/drive/folders/1xjQqxvmr1FjQlub-zk_rftPH05N9tXtP?usp=drive_link",
    "whatYouGet": "Aplicação de Gel-X na prática.",
    "sessions": [
      {
        "n": 1,
        "title": "Aplicação Gel-X (aula completa)",
        "focus": "Assista com atenção e repita na prática.",
        "link": "https://drive.google.com/file/d/1WI3M3XX0Z5c1UPj1gnvRl32urx3ffOsf/view?usp=drive_link"
      }
    ]
  },
  9: {
    "id": 9,
    "title": "Figurinhas Exclusivas para Stories",
    "tag": "Negócio",
    "phase": 6,
    "level": "Rápido",
    "link": "https://drive.google.com/drive/folders/1QyN3I6-pNBrGV-8ACNh33rphPrENZsIY?usp=drive_link",
    "whatYouGet": "Pacote de figurinhas prontas para Instagram Stories.",
    "startHere": "Abra a pasta, baixe as figurinhas no celular e use nos stories do salão.",
    "sessions": [
      {
        "n": 1,
        "title": "Baixar pacote de figurinhas (pasta completa)",
        "focus": "Abra a pasta do Drive e salve as figurinhas no celular.",
        "link": "https://drive.google.com/drive/folders/1QyN3I6-pNBrGV-8ACNh33rphPrENZsIY?usp=drive_link"
      }
    ],
    "time": "1 aula"
  },
  10: {
    "id": 10,
    "title": "Fotografia que Vende",
    "tag": "Negócio",
    "phase": 6,
    "level": "Essencial",
    "time": "3 aulas",
    "startHere": "Comece pelo vídeo de fotos. Depois leia os PDFs de fundos e passo a passo.",
    "link": "https://drive.google.com/drive/folders/1J07J_Tf3jPPEMy0g5qFTnMNBCD916OHx?usp=drive_link",
    "whatYouGet": "Como fotografar unhas e materiais de apoio (PDFs).",
    "sessions": [
      {
        "n": 1,
        "title": "Como tirar as fotos das unhas",
        "focus": "Fotografia e apresentação do trabalho.",
        "link": "https://drive.google.com/file/d/15eLafMEf6Swwh5hQWybaJtPZXr96TC0Z/view?usp=drive_link"
      },
      {
        "n": 2,
        "title": "Ideias de Fundos para as suas fotos",
        "focus": "Fotografia e apresentação do trabalho.",
        "link": "https://drive.google.com/file/d/1HFPNXvVkk_4MURJQIlr3ZTaLWWM5CLqU/view?usp=drive_link",
        "type": "pdf"
      },
      {
        "n": 3,
        "title": "Passo a passo como tirar fotos lindas",
        "focus": "Fotografia e apresentação do trabalho.",
        "link": "https://drive.google.com/file/d/1wPBVzcHay0rS48LCWNCvbSXgpB5pWByQ/view?usp=drive_link",
        "type": "pdf"
      }
    ]
  },
  11: {
    "id": 11,
    "title": "Alongamento na Fibra e Manutenção",
    "tag": "Alongamento",
    "phase": 4,
    "level": "Avançado",
    "time": "17 aulas",
    "startHere": "Siga a ordem das aulas. Manutenção só no final.",
    "link": "https://drive.google.com/drive/folders/1vtvpLBkOveI06_cIjQtymcZMhURv6N9i?usp=drive_link",
    "whatYouGet": "Fibra do material à manutenção, com formatos e acabamentos.",
    "sessions": [
      {
        "n": 1,
        "title": "Materiais",
        "focus": "Materiais necessários e organização.",
        "link": "https://drive.google.com/file/d/1NT0_xzN697qUVyxVY5h-DwSOaC3xo7Xx/view?usp=drive_link"
      },
      {
        "n": 2,
        "title": "Preparação da Fibra",
        "focus": "Preparação da unha/ambiente antes da técnica.",
        "link": "https://drive.google.com/file/d/1tE3Lh9dGQULQKdX_ESiCccFjazWV8qxe/view?usp=drive_link"
      },
      {
        "n": 3,
        "title": "Preparação das Unhas",
        "focus": "Preparação da unha/ambiente antes da técnica.",
        "link": "https://drive.google.com/file/d/1zj81Koqwi8DXnJEOUSmYyu6Mj-RclRLr/view?usp=drive_link"
      },
      {
        "n": 4,
        "title": "Lixamento",
        "focus": "Lixamento e formato.",
        "link": "https://drive.google.com/file/d/1kNoCz93qnL4JGAWTtkyLUVVbwgRAEAGq/view?usp=drive_link"
      },
      {
        "n": 5,
        "title": "Aplicando Os Primes",
        "focus": "Aplicação passo a passo na prática.",
        "link": "https://drive.google.com/file/d/1P2_7wZq5bTAvpulhQSbTD3gIH81jelEb/view?usp=drive_link"
      },
      {
        "n": 6,
        "title": "Aplicação da Fibra, Nivelamento e Curvatura",
        "focus": "Aplicação passo a passo na prática.",
        "link": "https://drive.google.com/file/d/17GZm54YaZsdXVOI-DtnjTLcLaslBMQK7/view?usp=drive_link"
      },
      {
        "n": 7,
        "title": "Acabamento",
        "focus": "Acabamento e resultado final.",
        "link": "https://drive.google.com/file/d/1AIr4OCWXNmrjOxJj_AyNlSL-FkggZe6V/view?usp=drive_link"
      },
      {
        "n": 8,
        "title": "Finalizador",
        "focus": "Acabamento e resultado final.",
        "link": "https://drive.google.com/file/d/1UMjpwkIuAoaBEmk5UF7HUDfHxf-eRhsJ/view?usp=drive_link"
      },
      {
        "n": 9,
        "title": "Formatos Mais Pedidos",
        "focus": "Formato e proporção da unha.",
        "link": "https://drive.google.com/file/d/1Z0KQgxuPFU-IWU2GI3tLmRoTw-9rFj66/view?usp=drive_link"
      },
      {
        "n": 10,
        "title": "Unha Almond",
        "focus": "Formato e proporção da unha.",
        "link": "https://drive.google.com/file/d/1gsMoYE6K6kDYsm_DjzhUwILzCWKHRk4I/view?usp=drive_link"
      },
      {
        "n": 11,
        "title": "Unha Bailarina",
        "focus": "Formato e proporção da unha.",
        "link": "https://drive.google.com/file/d/1S5Fc7VDhIR-Ga4blruuxoDg48e29KJgY/view?usp=drive_link"
      },
      {
        "n": 12,
        "title": "Unha Estiletto",
        "focus": "Formato e proporção da unha.",
        "link": "https://drive.google.com/file/d/1VLuY1-uevoqZE7IZGYTOzyjRkwfZVrqT/view?usp=drive_link"
      },
      {
        "n": 13,
        "title": "Acabamentos",
        "focus": "Acabamento e resultado final.",
        "link": "https://drive.google.com/file/d/17l0Ge6yvFsNMydQcYRg8EvijSP7gtC0J/view?usp=drive_link"
      },
      {
        "n": 14,
        "title": "Acabamentos Pt2",
        "focus": "Acabamento e resultado final.",
        "link": "https://drive.google.com/file/d/19bjyicuiIjppzUZanyYXdUABpi5hJKvh/view?usp=drive_link"
      },
      {
        "n": 15,
        "title": "Acabamentos Pt3",
        "focus": "Acabamento e resultado final.",
        "link": "https://drive.google.com/file/d/1lAWDyzHvOSvbxuOMahxwOHEcA_l_YpBe/view?usp=drive_link"
      },
      {
        "n": 16,
        "title": "Manutenção Natural",
        "focus": "Manutenção ou remoção segura.",
        "link": "https://drive.google.com/file/d/1rkjiJk7KLPx-k4G-loiYoD1c29x2iy-o/view?usp=drive_link"
      },
      {
        "n": 17,
        "title": "Manutenção Com Reposição De Fibra",
        "focus": "Manutenção ou remoção segura.",
        "link": "https://drive.google.com/file/d/1U0RJTOHhn0P3RNUpPqkjgNQ4qqUAPRY1/view?usp=drive_link"
      }
    ]
  },
  12: {
    "id": 12,
    "title": "Curso Cascata de Glitter",
    "tag": "Art",
    "phase": 5,
    "level": "Intermediário",
    "time": "3 aulas",
    "startHere": "Comece por Aplicação do Gel e Glíter → Encapsulando → Acabamento.",
    "link": "https://drive.google.com/drive/folders/1f4k5MN8Y7kv9wr7NlwwjbgyGVoBSsrLJ?usp=sharing",
    "whatYouGet": "Aplicação, encapsulamento e acabamento do glitter em cascata.",
    "sessions": [
      {
        "n": 1,
        "title": "Aplicação do Gel e Glíter",
        "focus": "Aplicação passo a passo na prática.",
        "link": "https://drive.google.com/file/d/1bGL9u-h4CkbIsvCs7ckm-D_FJP0yV871/view?usp=drive_link"
      },
      {
        "n": 2,
        "title": "Encapsulando o Glíter",
        "focus": "Efeito decorativo e nail art.",
        "link": "https://drive.google.com/file/d/1Z8UlcbboHv3vx0pYFzPPv-XsnOBeFyg9/view?usp=drive_link"
      },
      {
        "n": 3,
        "title": "Acabamento",
        "focus": "Acabamento e resultado final.",
        "link": "https://drive.google.com/file/d/1dpwE5m_ak96vrmsas_YY8UWh1GmuHfga/view?usp=drive_link"
      }
    ]
  },
  13: {
    "id": 13,
    "title": "Ficha de Anamnese para Nail Designer",
    "tag": "Base",
    "phase": 1,
    "level": "Rápido",
    "link": "https://drive.google.com/file/d/1PhqldldHPKjlSHK3Vamlo0v22Ixlthcd/view?usp=drive_link",
        "type": "pdf",
    "whatYouGet": "Modelo de ficha de anamnese para atendimento.",
    "startHere": "Abra o arquivo e use no próximo atendimento.",
    "sessions": [
      {
        "n": 1,
        "title": "Ficha de Anamnese",
        "focus": "Preencha com a cliente: alergias, histórico e observações.",
        "link": "https://drive.google.com/file/d/1PhqldldHPKjlSHK3Vamlo0v22Ixlthcd/view?usp=drive_link",
        "type": "pdf"
      }
    ],
    "time": "1 aula"
  },
  14: {
    "id": 14,
    "title": "Manicure e Pedicure Masculino",
    "tag": "Bônus",
    "phase": "bonus",
    "level": "Complementar",
    "time": "6 aulas",
    "startHere": "Comece pelos materiais, depois manicure e por último pedicure.",
    "link": "https://drive.google.com/drive/folders/12tv1zhz5s-kzdO-mcnc__k5KPcS9EpBG?usp=drive_link",
    "whatYouGet": "Protocolo de manicure e pedicure masculino.",
    "sessions": [
      {
        "n": 1,
        "title": "Materiais — Materiais",
        "focus": "Materiais necessários e organização.",
        "link": "https://drive.google.com/file/d/1DGYEExJVgViCkzJTl8HGVRt3sCnmHSYE/view?usp=drive_link"
      },
      {
        "n": 2,
        "title": "Manicure Masculina — Removendo a Cutícula",
        "focus": "Remoção e cuidado com a cutícula.",
        "link": "https://drive.google.com/file/d/1GcMbYYuFR9sQxArYWwv9FKoeC7BfBxQK/view?usp=drive_link"
      },
      {
        "n": 3,
        "title": "Manicure Masculina — Base",
        "focus": "Assista com atenção e repita na prática.",
        "link": "https://drive.google.com/file/d/1R8LNWSAhM8dpTqHDr1yrxaEhEHQ47Ee0/view?usp=drive_link"
      },
      {
        "n": 4,
        "title": "Manicure Masculina — Resultado",
        "focus": "Assista com atenção e repita na prática.",
        "link": "https://drive.google.com/file/d/1amEpgXRlSDSXGCm6-Kwn44EisSBBiyQg/view?usp=drive_link"
      },
      {
        "n": 5,
        "title": "Pedicure Masculina — Remoção da Cutícula",
        "focus": "Manutenção ou remoção segura.",
        "link": "https://drive.google.com/file/d/1NpHcasc8L7dhiyujxq0K0x2NS7vIEO7g/view?usp=drive_link"
      },
      {
        "n": 6,
        "title": "Pedicure Masculina — Resultado",
        "focus": "Assista com atenção e repita na prática.",
        "link": "https://drive.google.com/file/d/1lbNkwftOIohp8EtDZVp1pRPblh9mJtnh/view?usp=drive_link"
      }
    ]
  },
  15: {
    "id": 15,
    "title": "Curso Spa dos Pés",
    "tag": "Bônus",
    "phase": "bonus",
    "level": "Complementar",
    "time": "9 aulas",
    "startHere": "Siga a ordem das aulas do início ao fim.",
    "link": "https://drive.google.com/drive/folders/1mej9v-89LKTcsPAr2XQDLM7U0usXyOsp?usp=drive_link",
    "whatYouGet": "Protocolo completo de spa dos pés, da água à finalização.",
    "sessions": [
      {
        "n": 1,
        "title": "Preparando a Água",
        "focus": "Preparação da unha/ambiente antes da técnica.",
        "link": "https://drive.google.com/file/d/1Tj-JAytfuX5zitXXfBlZ7s1rhsvo02SK/view?usp=drive_link"
      },
      {
        "n": 2,
        "title": "Lixamento e Esfoliação",
        "focus": "Lixamento e formato.",
        "link": "https://drive.google.com/file/d/14C4XokS8DD5d6cPve3x0HJfIGQaLlx53/view?usp=drive_link"
      },
      {
        "n": 3,
        "title": "Aplicação do Amaciante",
        "focus": "Aplicação passo a passo na prática.",
        "link": "https://drive.google.com/file/d/1bD8UZXxifNJklycMPVo8J38G9eM4XKsg/view?usp=drive_link"
      },
      {
        "n": 4,
        "title": "Remoção dos Calos",
        "focus": "Manutenção ou remoção segura.",
        "link": "https://drive.google.com/file/d/1uXYQBNVaoI3WF4qVZYur10vGKVhUyaLe/view?usp=drive_link"
      },
      {
        "n": 5,
        "title": "Cutilagem",
        "focus": "Assista com atenção e repita na prática.",
        "link": "https://drive.google.com/file/d/1FmyMm8fF_y7mzTSm7RQZW7Cwm3k2d4S_/view?usp=drive_link"
      },
      {
        "n": 6,
        "title": "Finalizando a Cutilagem e Lixando",
        "focus": "Acabamento e resultado final.",
        "link": "https://drive.google.com/file/d/1ZQ7jyT7-7ExyRqDapSt_CkYpIqrZoLcW/view?usp=drive_link"
      },
      {
        "n": 7,
        "title": "Esmaltação",
        "focus": "Esmaltação e cor.",
        "link": "https://drive.google.com/file/d/12XfMQLXzya_E7YMRPCYTRK7JPOQJOXHU/view?usp=drive_link"
      },
      {
        "n": 8,
        "title": "Esmaltação Pt2",
        "focus": "Esmaltação e cor.",
        "link": "https://drive.google.com/file/d/1YUKuL7JUFWPxMDWWd4SNSAg_3xT5SnI5/view?usp=drive_link"
      },
      {
        "n": 9,
        "title": "Limpeza E Finalização",
        "focus": "Higiene, esterilização e ambiente seguro.",
        "link": "https://drive.google.com/file/d/1xoELZw--o8wyKEN4ohtn2H6nskm7M2DK/view?usp=drive_link"
      }
    ]
  },
  16: {
    "id": 16,
    "title": "Curso Manicure Completo",
    "tag": "Base",
    "phase": 1,
    "level": "Essencial",
    "time": "10 aulas",
    "startHere": "Comece na aula Boas Vindas e siga até Finalizando.",
    "link": "https://drive.google.com/drive/folders/1FMWABobhmQUgcOrKCYl0zgVPr_wbh4w4?usp=drive_link",
    "whatYouGet": "Manicure do zero: boas-vindas, esterilização, cutícula, esmaltação e finalização.",
    "sessions": [
      {
        "n": 1,
        "title": "Boas Vindas",
        "focus": "Atendimento, comunicação e fidelização.",
        "link": "https://drive.google.com/file/d/1RxKintrtPSl8blTX_ixh4xHxybR3dJDe/view?usp=drive_link"
      },
      {
        "n": 2,
        "title": "Materiais",
        "focus": "Materiais necessários e organização.",
        "link": "https://drive.google.com/file/d/1ZM32PwZl3xSZnPr8-dNX_znBuE7rB6fk/view?usp=drive_link"
      },
      {
        "n": 3,
        "title": "Treinamento Essencial",
        "focus": "Assista com atenção e repita na prática.",
        "link": "https://drive.google.com/file/d/1YbAo-4qiBi5j3w8kCkEcgXeUQTE694ef/view?usp=drive_link"
      },
      {
        "n": 4,
        "title": "Esterilização",
        "focus": "Higiene, esterilização e ambiente seguro.",
        "link": "https://drive.google.com/file/d/1T5CQlwKiQxhnerSpO6Sv1rM1zM0wz4Il/view?usp=drive_link"
      },
      {
        "n": 5,
        "title": "Remoção da Cutícula",
        "focus": "Manutenção ou remoção segura.",
        "link": "https://drive.google.com/file/d/1Ee7mlDUp9BfIKQApj7yxsyaqiodZz0yS/view?usp=drive_link"
      },
      {
        "n": 6,
        "title": "Dando Vida A Unha",
        "focus": "Assista com atenção e repita na prática.",
        "link": "https://drive.google.com/file/d/1vzHBtVaxlTUj1YrXl3TU7c4E3xe4BuZ4/view?usp=drive_link"
      },
      {
        "n": 7,
        "title": "Esmaltação Decorada",
        "focus": "Esmaltação e cor.",
        "link": "https://drive.google.com/file/d/1Qrih0SCq8JZCoDFWXqxCeimYeApVihwP/view?usp=drive_link"
      },
      {
        "n": 8,
        "title": "Toque Especial",
        "focus": "Assista com atenção e repita na prática.",
        "link": "https://drive.google.com/file/d/1xFzWPqChncXRliY_e9RAAd80832mUKCb/view?usp=drive_link"
      },
      {
        "n": 9,
        "title": "Adesivo",
        "focus": "Assista com atenção e repita na prática.",
        "link": "https://drive.google.com/file/d/1I3eF6omuEVf8BDN4swfZ4keSeBR7IrZ5/view?usp=drive_link"
      },
      {
        "n": 10,
        "title": "Finalizando E Resultado",
        "focus": "Acabamento e resultado final.",
        "link": "https://drive.google.com/file/d/1uQNro712d7UCDSrPoWTSsyOH7veSKInI/view?usp=drive_link"
      }
    ]
  },
  17: {
    "id": 17,
    "title": "Fornecedores para Nail Designer",
    "tag": "Negócio",
    "phase": 6,
    "level": "Rápido",
    "time": "1 aula",
    "startHere": "Abra o PDF e marque os fornecedores que vai testar primeiro.",
    "link": "https://drive.google.com/drive/folders/1F3hk-KoYjav5VYVzexzWL2K6ncviPilE?usp=drive_link",
    "whatYouGet": "Lista de fornecedores em PDF.",
    "sessions": [
      {
        "n": 1,
        "title": "Fornecedores Nail Designer",
        "focus": "Negócio, preço e custos.",
        "link": "https://drive.google.com/file/d/19im_DSWK0QT6CPEAYoCyHnpaabOEb5o1/view?usp=drive_link",
        "type": "pdf"
      }
    ]
  },
  18: {
    "id": 18,
    "title": "Square Quadrada",
    "tag": "Formato",
    "phase": 2,
    "level": "Essencial",
    "link": "https://drive.google.com/file/d/1ypXHyQzW37VXqbL0V1uZHNkxerHFPT3L/view?usp=drive_link",
    "whatYouGet": "Formato square profissional.",
    "startHere": "Pause a cada etapa de lixa e repita até as laterais ficarem simétricas.",
    "sessions": [
      {
        "n": 1,
        "title": "Square Quadrada",
        "focus": "Lixamento square: ângulos, ponta reta e laterais paralelas.",
        "link": "https://drive.google.com/file/d/1ypXHyQzW37VXqbL0V1uZHNkxerHFPT3L/view?usp=drive_link"
      }
    ],
    "time": "1 aula"
  },
  19: {
    "id": 19,
    "title": "Bailarina",
    "tag": "Formato",
    "phase": 2,
    "level": "Essencial",
    "link": "https://drive.google.com/file/d/1l5QmYeFFWreNuEOwoy7dLlMsYK40foFa/view?usp=drive_link",
    "whatYouGet": "Formato bailarina elegante.",
    "startHere": "Observe a proporção da ponta antes de lixar a mão real.",
    "sessions": [
      {
        "n": 1,
        "title": "Bailarina",
        "focus": "Afilamento gradual e equilíbrio da ponta.",
        "link": "https://drive.google.com/file/d/1l5QmYeFFWreNuEOwoy7dLlMsYK40foFa/view?usp=drive_link"
      }
    ],
    "time": "1 aula"
  },
  20: {
    "id": 20,
    "title": "3 Técnicas de Nail Art com Pó Cromado",
    "tag": "Art",
    "phase": 5,
    "level": "Intermediário",
    "link": "https://drive.google.com/file/d/1SA10zGuVoquyQnXQ-ZaPcq3SqhDO5w6J/view?usp=drive_link",
    "whatYouGet": "Três efeitos com pó cromado.",
    "startHere": "Treine o ponto sticky do gel + transferência do pó.",
    "sessions": [
      {
        "n": 1,
        "title": "3 técnicas com pó cromado",
        "focus": "Base sticky, aplicação do pó e 3 variações.",
        "link": "https://drive.google.com/file/d/1SA10zGuVoquyQnXQ-ZaPcq3SqhDO5w6J/view?usp=drive_link"
      }
    ],
    "time": "1 aula"
  },
  21: {
    "id": 21,
    "title": "Melhor formato para unhas ultralargas",
    "tag": "Formato",
    "phase": 2,
    "level": "Intermediário",
    "time": "1 aula",
    "startHere": "Assista e anote quais formatos valorizam unhas largas no seu público.",
    "link": "https://drive.google.com/drive/folders/11gI1qkwRYhidzSgSWWcqTIhWb2M5KJVd?usp=drive_link",
    "whatYouGet": "Como escolher o formato ideal para leito largo.",
    "sessions": [
      {
        "n": 1,
        "title": "Melhor formato para unhas ultralargas",
        "focus": "Formato e proporção da unha.",
        "link": "https://drive.google.com/file/d/1123fKfTouYmGRsL5pDcfripA7beclnJl/view?usp=drive_link"
      }
    ]
  },
  22: {
    "id": 22,
    "title": "Treino de Cutilagem com Alicate",
    "tag": "Base",
    "phase": 1,
    "level": "Essencial",
    "link": "https://drive.google.com/file/d/1WYmuE3re057wSv6-du3vpb7PkJ2ofrzb/view?usp=drive_link",
    "whatYouGet": "Cutilagem com alicate com segurança.",
    "startHere": "Treine devagar. Segurança primeiro, velocidade depois.",
    "sessions": [
      {
        "n": 1,
        "title": "Treino de cutilagem com alicate",
        "focus": "Pegada, ângulo do alicate e quanto remover sem trauma.",
        "link": "https://drive.google.com/file/d/1WYmuE3re057wSv6-du3vpb7PkJ2ofrzb/view?usp=drive_link"
      }
    ],
    "time": "1 aula"
  },
  23: {
    "id": 23,
    "title": "Aprenda a maquiar noivas",
    "tag": "Bônus",
    "phase": "bonus",
    "level": "Extra",
    "link": "https://docs.google.com/document/d/1dtN_AJsiU4X4j8WtftD3UUmwsTLUPOPh/edit?usp=drive_link",
    "whatYouGet": "Material escrito de maquiagem para noivas.",
    "startHere": "Leia o documento na ordem: pele → olhos → finalização.",
    "sessions": [
      {
        "n": 1,
        "title": "Material: maquiagem para noivas",
        "focus": "Guia em documento Google — siga a sequência do texto.",
        "link": "https://docs.google.com/document/d/1dtN_AJsiU4X4j8WtftD3UUmwsTLUPOPh/edit?usp=drive_link"
      }
    ],
    "time": "1 aula"
  },
  24: {
    "id": 24,
    "title": "Quanto cobrar",
    "tag": "Negócio",
    "phase": 6,
    "level": "Essencial",
    "link": "https://drive.google.com/file/d/11hcqRPsaDVj8okic5uztvqzAxqYTc9RM/view?usp=drive_link",
    "whatYouGet": "Como precificar seus serviços.",
    "startHere": "Anote seus custos antes de assistir e saia com 3 faixas de preço.",
    "sessions": [
      {
        "n": 1,
        "title": "Quanto cobrar",
        "focus": "Custo, lucro e tabela de preços por serviço.",
        "link": "https://drive.google.com/file/d/11hcqRPsaDVj8okic5uztvqzAxqYTc9RM/view?usp=drive_link"
      }
    ],
    "time": "1 aula"
  },
  25: {
    "id": 25,
    "title": "Atendimento, Higiene e Profissionalismo",
    "tag": "Base",
    "phase": 1,
    "level": "Essencial",
    "time": "12 aulas",
    "startHere": "Comece por 'Higiene com os equipamentos' e 'Como se portar'. Depois as de fidelização.",
    "link": "https://drive.google.com/drive/folders/18zfTy8ly8tHoAN3ihjEwH-N_3XGMmyAD?usp=drive_link",
    "whatYouGet": "Higiene, postura, fidelização e dicas de negócio do salão.",
    "sessions": [
      {
        "n": 1,
        "title": "Higiene com os equipamentos",
        "focus": "Higiene, esterilização e ambiente seguro.",
        "link": "https://drive.google.com/file/d/1IecvhN1PXlt6_HOakaFYSa7w3HqgZqsj/view?usp=drive_link"
      },
      {
        "n": 2,
        "title": "Kit pessoal do Cliente",
        "focus": "Materiais necessários e organização.",
        "link": "https://drive.google.com/file/d/1eiyhmeUdV2aiQBaYxzxomWFe_vUxwTzW/view?usp=drive_link"
      },
      {
        "n": 3,
        "title": "A saúde das unhas - dicas para manter a unha saudável",
        "focus": "Assista com atenção e repita na prática.",
        "link": "https://drive.google.com/file/d/1-6DTNaeeFmoSyOqSOPQh0E9r7zLZGn4i/view?usp=drive_link"
      },
      {
        "n": 4,
        "title": "Como se portar",
        "focus": "Atendimento, comunicação e fidelização.",
        "link": "https://drive.google.com/file/d/1DpP41SVcyS379kDYwq6MOg_Px5MXvm_W/view?usp=drive_link"
      },
      {
        "n": 5,
        "title": "Como Fidelizar Clientes - Ouça o Cliente",
        "focus": "Atendimento, comunicação e fidelização.",
        "link": "https://drive.google.com/file/d/1wu5fAXBEpUkn4ob0CpzS8J-80O1EITIO/view?usp=drive_link"
      },
      {
        "n": 6,
        "title": "Como Fidelizar Clientes - Oferta",
        "focus": "Atendimento, comunicação e fidelização.",
        "link": "https://drive.google.com/file/d/1EaO_c3DaZ_HsGssrWz5pjGGDdr7ruE_T/view?usp=drive_link"
      },
      {
        "n": 7,
        "title": "Tipos de esmalte",
        "focus": "Assista com atenção e repita na prática.",
        "link": "https://drive.google.com/file/d/1C-bRIKBBkQbMqIwKRl-19zjdoRmbMkBE/view?usp=drive_link"
      },
      {
        "n": 8,
        "title": "Aplicação de película na prática",
        "focus": "Aplicação passo a passo na prática.",
        "link": "https://drive.google.com/file/d/1FjposzPT4t7VW9ysur0-NIuxDhBxwB5Q/view?usp=drive_link"
      },
      {
        "n": 9,
        "title": "Como economizar nos materiais",
        "focus": "Materiais necessários e organização.",
        "link": "https://drive.google.com/file/d/1IfqQE9-4uCwyDRMyZiDYeOpib0SMeYr6/view?usp=drive_link"
      },
      {
        "n": 10,
        "title": "Como receber dinheiro",
        "focus": "Negócio, preço e custos.",
        "link": "https://drive.google.com/file/d/1ZdVwF-BqQYUxvj_AGbAKT68WetnoBJKZ/view?usp=drive_link"
      },
      {
        "n": 11,
        "title": "Quanto Cobrar",
        "focus": "Negócio, preço e custos.",
        "link": "https://drive.google.com/file/d/15VOpJgGPjhI_O3iaFahApo2RQ5wOOuki/view?usp=drive_link"
      },
      {
        "n": 12,
        "title": "Use a internet a seu favor",
        "focus": "Marketing e presença digital.",
        "link": "https://drive.google.com/file/d/1beET4MZ352kGkuPTXf9jXi_yt8hFi28U/view?usp=drive_link"
      }
    ]
  },
};
