var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada-sem-pessoa",
      "name": "Laboratorio de Integração e Testes - Área Limpa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 1.036659090063548,
        "pitch": 0.18475886318536894,
        "fov": 1.3992298435268462
      },
      "linkHotspots": [
        {
          "yaw": 0.9352187580744928,
          "pitch": 0.41380713491042975,
          "rotation": 0,
          "target": "1-entrada-com-pessoas"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.0067915893762844,
          "pitch": -0.15772685174664502,
          "title": "Camaras vácuo-térmico",
          "text": "Aqui são realizados ensaios de Vácuo-Térmico, que simulam as condições do espaço para garantir o funcionamento dos satélites em órbita. <a href='https://www.gov.br/inpe/pt-br/area-conhecimento/montagem-integracao-e-testes/laboratorio-vacuo-termico' target='_blank'> Clique aqui para saber mais</a>"
        }
      ]
    },
    {
      "id": "1-entrada-com-pessoas",
      "name": "Entrada com pessoas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1884602859077589,
          "pitch": 0.17770529586636385,
          "rotation": 0,
          "target": "4-frente-camera-maior"
        },
        {
          "yaw": 1.6908581251510242,
          "pitch": 0.14073734488066592,
          "rotation": 0.7853981633974483,
          "target": "3-lateral-termicas"
        },
        {
          "yaw": 0.8201871129034437,
          "pitch": 0.18212419982698513,
          "rotation": 5.497787143782138,
          "target": "5-grades-termicas"
        },
        {
          "yaw": -1.071347406189016,
          "pitch": 0.31148985827885056,
          "rotation": 0,
          "target": "0-entrada-sem-pessoa"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.5388826791679833,
          "pitch": -0.22663801205303002,
          "title": "Laboratório Vácuo-Térmico (Teste de Vácuo-Térmico)",
          "text": "O Teste de Vácuo-Térmico é específico para satélites, pois reproduz as condições de vácuo e de variações extremas de temperatura que existem no espaço. O espaço é um ambiente muito crítico para dispositivos que são lançados em órbita. Por isso, antes de colocar um sistema, um satélite ou qualquer dispositivo em órbita, é preciso simular o ambiente do espaço. Assim, será possível garantir que ele funcione mesmo no ambiente mais crítico que existe.<a href='https://www.gov.br/inpe/pt-br/area-conhecimento/montagem-integracao-e-testes' target='_blank'> Clique aqui para saber mais</a>"
        },
        {
          "yaw": -0.29327728909636264,
          "pitch": -0.10234467224897337,
          "title": "Área de Teste de Vibração",
          "text": "Os ensaios de vibração respondem às preocupações dos projetistas, que avaliam se os equipamentos embarcados suportam os esforços, durante o voo com o foguete. <a href='https://www.gov.br/inpe/pt-br/area-conhecimento/montagem-integracao-e-testes' target='_blank'> <b> Clique aqui para saber mais.<b> </a>"
        }
      ]
    },
    {
      "id": "2-entrada-lateral-com-pessoas",
      "name": "Entrada lateral com pessoas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.313795302332096,
          "pitch": 0.314418487409009,
          "rotation": 0,
          "target": "1-entrada-com-pessoas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-lateral-termicas",
      "name": "Lateral Termicas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.512904915023249,
          "pitch": 0.3033320377687829,
          "rotation": 0,
          "target": "2-entrada-lateral-com-pessoas"
        },
        {
          "yaw": -0.004959729287101311,
          "pitch": 0.22044348068509656,
          "rotation": 0,
          "target": "1-entrada-com-pessoas"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.106506494213612,
          "pitch": -0.3312684529391561,
          "title": "Camera de termo vácuo 03",
          "text": "Camera para teste&nbsp;"
        },
        {
          "yaw": -0.6181058255971408,
          "pitch": 0.4118411735483747,
          "title": "Área de testes de vácuo-térmico",
          "text": "Diversos testes podem ser feitos simultaneamente. O ítem em teste definirá o tamanho da camara utilizada. O INPE atualmente possui 5 camaras. <br> <a href='https://www.gov.br/inpe/pt-br/area-conhecimento/montagem-integracao-e-testes' target='_blank'> Saiba mais sobre o LIT</a>"
        }
      ]
    },
    {
      "id": "4-frente-camera-maior",
      "name": "Frente camera maior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.245444090149011,
          "pitch": 0.18871437991367657,
          "rotation": 0,
          "target": "1-entrada-com-pessoas"
        },
        {
          "yaw": -0.10540984332594583,
          "pitch": 0.2745927679186657,
          "rotation": 0,
          "target": "5-grades-termicas"
        },
        {
          "yaw": -1.8135734449319418,
          "pitch": 0.20380868020757603,
          "rotation": 5.497787143782138,
          "target": "3-lateral-termicas"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0913614399801297,
          "pitch": -0.16882919305393784,
          "title": "Camara de Teste de Vácuo-Térmico Maior",
          "text": "Camera maior para teste de simulação de ambiente controlado. Os satélites CBERS e Amazonia foram testados nessa camara."
        }
      ]
    },
    {
      "id": "5-grades-termicas",
      "name": "Grades termicas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0748259421843542,
          "pitch": 0.2181218388374937,
          "rotation": 5.497787143782138,
          "target": "4-frente-camera-maior"
        },
        {
          "yaw": -2.946894204898948,
          "pitch": 0.178022180191741,
          "rotation": 0.7853981633974483,
          "target": "1-entrada-com-pessoas"
        },
        {
          "yaw": -0.7526865673938463,
          "pitch": 0.29311841505797176,
          "rotation": 0,
          "target": "6-frente-camera-media"
        },
        {
          "yaw": -1.3011558077620897,
          "pitch": 0.19799519765171958,
          "rotation": 0.7853981633974483,
          "target": "7-shaker-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.940834911723659,
          "pitch": -0.2338370772984142,
          "title": "Grades de aquecedores",
          "text": "Grades de aquecimento para ciclagem térmica. Elas \"vestem\"o satélite durante o teste térmico e servem de apoio para simular a variação de temperatura dentro das câmaras."
        }
      ]
    },
    {
      "id": "6-frente-camera-media",
      "name": "Frente camera media",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3679942953788515,
          "pitch": 0.27416138920218636,
          "rotation": 0,
          "target": "5-grades-termicas"
        },
        {
          "yaw": 1.6016935871294402,
          "pitch": 0.2153385905913474,
          "rotation": 0,
          "target": "19-satelites"
        },
        {
          "yaw": 0.3931324494800421,
          "pitch": 0.27968612040925755,
          "rotation": 0,
          "target": "7-shaker-1"
        },
        {
          "yaw": -0.5622209576699895,
          "pitch": 0.2330720962824575,
          "rotation": 5.497787143782138,
          "target": "1-entrada-com-pessoas"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.030561610941982,
          "pitch": -0.32397705684604006,
          "title": "Camara de teste de Vácuo-Térmico",
          "text": "Camara média para teste de vácuo-térmico."
        }
      ]
    },
    {
      "id": "7-shaker-1",
      "name": "Shaker 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1612238798520238,
          "pitch": 0.22865264656076079,
          "rotation": 0,
          "target": "19-satelites"
        },
        {
          "yaw": 0.6053060294800954,
          "pitch": 0.2480685204358899,
          "rotation": 0,
          "target": "6-frente-camera-media"
        },
        {
          "yaw": -1.6708429684604305,
          "pitch": 0.17532659516104232,
          "rotation": 0,
          "target": "8-shaker-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.9517572218160755,
          "pitch": 0.2271058215550319,
          "title": "Ensaios Dinâmicos: Vibração e Choque (Teste de Vibração)",
          "text": "Simulam as vibrações e impactos que o satélite enfrentará durante o transporte e, principalmente, no lançamento. Estes testes ajudam a identificar a qualidade dos elementos mecânicos e validar modelos de engenharia."
        }
      ]
    },
    {
      "id": "8-shaker-2",
      "name": "Shaker 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6138714848090938,
          "pitch": 0.27821500702906654,
          "rotation": 0,
          "target": "7-shaker-1"
        },
        {
          "yaw": 0.9986099170918941,
          "pitch": 0.1694301455566034,
          "rotation": 5.497787143782138,
          "target": "19-satelites"
        },
        {
          "yaw": -1.5513579883149156,
          "pitch": 0.18923369067695006,
          "rotation": 0,
          "target": "9-painel-solar"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.9486780734897433,
          "pitch": -0.21343542252549597,
          "title": "Shaker para teste de vibração",
          "text": "A infraestrutura do shaker é isolada do prédio para evitar riscos de danos a estrutura."
        }
      ]
    },
    {
      "id": "9-painel-solar",
      "name": "Painel Solar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6042495360421167,
          "pitch": 0.19960457239221796,
          "rotation": 0,
          "target": "8-shaker-2"
        },
        {
          "yaw": -0.6757297589277584,
          "pitch": 0.2674412917662039,
          "rotation": 0.7853981633974483,
          "target": "11-entrada-camera-anecoica-1"
        },
        {
          "yaw": -1.61373542587884,
          "pitch": 0.2883206282285258,
          "rotation": 0,
          "target": "36-passagem-area-limpa"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0417694215490823,
          "pitch": -0.43235281995194086,
          "title": "Modelo de painel Solar",
          "text": "Área de teste de abertura do painel solar. O painel solar vai fechado dentro do foguete durante o voo, abrindo apenas quando chega no espaço. Para testar sua abertura, o painel é acoplado no satélite, e suspenso nos trilhos para simular o ambiente de microgravidade.&nbsp; Durante o teste, os sistemas de abertura são acionados para garantir seu funcionamento em órbita."
        }
      ]
    },
    {
      "id": "10-ilha-de-teste",
      "name": "Ilha de teste",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6807946701693206,
          "pitch": 0.2315943790967836,
          "rotation": 0,
          "target": "11-entrada-camera-anecoica-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-entrada-camera-anecoica-1",
      "name": "Entrada Camera Anecoica 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1970123830032797,
          "pitch": 0.16484078987039652,
          "rotation": 5.497787143782138,
          "target": "9-painel-solar"
        },
        {
          "yaw": 2.7051087773481655,
          "pitch": 0.28389525013694694,
          "rotation": 0,
          "target": "10-ilha-de-teste"
        },
        {
          "yaw": 0.07878720717535259,
          "pitch": 0.28260686597535134,
          "rotation": 0.7853981633974483,
          "target": "13-antessala-camera-anecoica"
        },
        {
          "yaw": 1.3875743955869897,
          "pitch": 0.22247537718249788,
          "rotation": 0,
          "target": "17-externo-camera-anecoica-1"
        },
        {
          "yaw": -0.22193769817255493,
          "pitch": 0.28364956106475603,
          "rotation": 0,
          "target": "12-corredor-camera-anecoica-1"
        },
        {
          "yaw": -1.4328850547542693,
          "pitch": 0.3173562373552521,
          "rotation": 0.7853981633974483,
          "target": "36-passagem-area-limpa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-corredor-camera-anecoica-1",
      "name": "Corredor Camera Anecoica 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5996285321001649,
          "pitch": 0.27955045946195156,
          "rotation": 0,
          "target": "11-entrada-camera-anecoica-1"
        },
        {
          "yaw": 3.088540882886776,
          "pitch": 0.24110715599916333,
          "rotation": 0,
          "target": "36-passagem-area-limpa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-antessala-camera-anecoica",
      "name": "Antessala Camera Anecoica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1838817295782693,
          "pitch": 0.3399382470699237,
          "rotation": 0,
          "target": "14-camera-anecoica-condutor"
        },
        {
          "yaw": -0.41391383392149095,
          "pitch": 0.3523792551665075,
          "rotation": 0,
          "target": "11-entrada-camera-anecoica-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-camera-anecoica-condutor",
      "name": "Camera Anecoica Condutor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.682605994196237,
          "pitch": 0.241267490515078,
          "rotation": 0,
          "target": "13-antessala-camera-anecoica"
        },
        {
          "yaw": 3.030303658312608,
          "pitch": 0.3040900348790725,
          "rotation": 0,
          "target": "17-externo-camera-anecoica-1"
        },
        {
          "yaw": 0.09742984096496343,
          "pitch": 0.3037369912387238,
          "rotation": 0,
          "target": "15-camera-anecoica-antena"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.06881108518815893,
          "pitch": -0.14920991261046979,
          "title": "Laboratório de Compatibilidade Eletromagnética (Testes de EMI e EMC)",
          "text": "Os Ensaios de Compatibilidade Eletromagnética garantem que um equipamento, como um satélite, um carro ou qualquer sistema eletrônico, não sofra interferências eletromagnéticas, de maneira a garantir seu perfeito funcionamento. No LIT, isso é feito em câmaras anecóicas, ambientes projetados para absorver completamente as ondas sonoras e eletromagnéticas, eliminando reflexões e isolando o espaço do ruído externo."
        }
      ]
    },
    {
      "id": "15-camera-anecoica-antena",
      "name": "Camera Anecoica Antena",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.39643951086491924,
          "pitch": 0.24661014319159236,
          "rotation": 0,
          "target": "16-camera-anecoica-parede"
        },
        {
          "yaw": -3.057598447465308,
          "pitch": 0.22578000334255677,
          "rotation": 0,
          "target": "14-camera-anecoica-condutor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-camera-anecoica-parede",
      "name": "Camera Anecoica Parede",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6997314005843114,
          "pitch": 0.3141208119574763,
          "rotation": 0.7853981633974483,
          "target": "15-camera-anecoica-antena"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-externo-camera-anecoica-1",
      "name": "Externo Camera Anecoica 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.010126928898365861,
          "pitch": 0.3176602032279199,
          "rotation": 0,
          "target": "14-camera-anecoica-condutor"
        },
        {
          "yaw": -1.5945803617729517,
          "pitch": 0.210750273395524,
          "rotation": 0,
          "target": "11-entrada-camera-anecoica-1"
        },
        {
          "yaw": 2.3740678760462153,
          "pitch": 0.20793618125381208,
          "rotation": 0,
          "target": "21-passagem-camera-acustica"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "title": "Camara Anecóica Menor",
          "text": "O INPE possui 3 camaras de teste de compatibilidade eletromagnética.&nbsp;"
        }
      ]
    },
    {
      "id": "18-corredor-fundo",
      "name": "Corredor fundo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.999921754550094,
          "pitch": 0.15379306759414213,
          "rotation": 0,
          "target": "19-satelites"
        },
        {
          "yaw": -0.2131677166119026,
          "pitch": 0.2094458118912712,
          "rotation": 0,
          "target": "21-passagem-camera-acustica"
        },
        {
          "yaw": -2.3869157110777977,
          "pitch": 0.2075901255743542,
          "rotation": 0,
          "target": "1-entrada-com-pessoas"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.9872727873100207,
          "pitch": -0.1544504522018748,
          "title": "Área de teste&nbsp;",
          "text": "Área de teste de propriedade de massa dos satélites.&nbsp;"
        },
        {
          "yaw": -2.81827037447518,
          "pitch": -0.8825878808703393,
          "title": "Ponte rolante",
          "text": "Ponte rolante serve como um guindaste para equipamentos pesados facilitando o transporte dentro de todo o laboratorio."
        }
      ]
    },
    {
      "id": "19-satelites",
      "name": "Satelites",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9683328923488776,
          "pitch": 0.20645104621355692,
          "rotation": 0,
          "target": "6-frente-camera-media"
        },
        {
          "yaw": 1.5940518641305186,
          "pitch": 0.18391992746187746,
          "rotation": 0,
          "target": "18-corredor-fundo"
        },
        {
          "yaw": -1.5059778648907702,
          "pitch": 0.2207632408923299,
          "rotation": 0,
          "target": "7-shaker-1"
        },
        {
          "yaw": -0.898901904723644,
          "pitch": 0.18637990540775817,
          "rotation": 5.497787143782138,
          "target": "8-shaker-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.40556998372507813,
          "pitch": -0.20455655909412052,
          "title": "Modelo de teste do CBERS04",
          "text": "Modelo de teste do satélite CBERS04 em tamanho real."
        },
        {
          "yaw": 0.5388166339393159,
          "pitch": -0.27026571698298163,
          "title": "Modelo de teste do Amazonia1",
          "text": "Modelo de teste do satélite Amazonia1"
        }
      ]
    },
    {
      "id": "20-area-de-teste-eixos",
      "name": "Area de teste Eixos",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3970465016445566,
          "pitch": 0.2657450298824138,
          "rotation": 0,
          "target": "18-corredor-fundo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-passagem-camera-acustica",
      "name": "Passagem Camera Acustica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.566009861606675,
          "pitch": 0.14683354681041472,
          "rotation": 0,
          "target": "22-frente-camera-acustica"
        },
        {
          "yaw": -1.718842134205122,
          "pitch": 0.2165911589887788,
          "rotation": 0,
          "target": "18-corredor-fundo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-frente-camera-acustica",
      "name": "Frente Camera Acustica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 3.095388214707386,
        "pitch": -0.10618889711237856,
        "fov": 1.3992298435268462
      },
      "linkHotspots": [
        {
          "yaw": 1.9785982512936515,
          "pitch": 0.132527093481265,
          "rotation": 7.0685834705770345,
          "target": "23-camera-acustica"
        },
        {
          "yaw": -1.5373781977605017,
          "pitch": 0.22581287751972923,
          "rotation": 0,
          "target": "21-passagem-camera-acustica"
        },
        {
          "yaw": 1.5519574712657773,
          "pitch": 0.14124477281233894,
          "rotation": 0,
          "target": "24-frente-camera-anecoica-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.6223080200876634,
          "pitch": -0.24685522448771735,
          "title": "Camara de teste acústico",
          "text": "Entre para saber mais."
        }
      ]
    },
    {
      "id": "23-camera-acustica",
      "name": "Camera Acustica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1614590039544321,
          "pitch": 0.2630375805053671,
          "rotation": 0,
          "target": "22-frente-camera-acustica"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4818551225324388,
          "pitch": -0.33153194246696494,
          "title": "Ensaios Vibro Acústicos (Câmara Acústica Reverberante)",
          "text": "Reproduz o ambiente extremamente ruidoso do lançamento de um foguete. Mesmo protegido por uma coifa ou ogiva, o satélite é exposto a pressões acústicas muito altas. A câmara usa cornetas especiais, que se parecem com grandes caixas de som, para gerar ondas sonoras de até 156,5 dB, nível superior ao de turbinas de avião (120 a 130dB) "
        }
      ]
    },
    {
      "id": "24-frente-camera-anecoica-2",
      "name": "Frente Camera Anecoica 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.608811428268842,
          "pitch": 0.20496887999154367,
          "rotation": 0,
          "target": "22-frente-camera-acustica"
        },
        {
          "yaw": -2.1940927474712915,
          "pitch": 0.13529468316820825,
          "rotation": 4.71238898038469,
          "target": "23-camera-acustica"
        },
        {
          "yaw": -0.07608751119463619,
          "pitch": 0.2299808569943984,
          "rotation": 0,
          "target": "25-camera-anecoica-2"
        },
        {
          "yaw": 1.4030914914890662,
          "pitch": 0.17434105923184617,
          "rotation": 0,
          "target": "30-entrada-area-nova"
        },
        {
          "yaw": 2.8216612401644197,
          "pitch": 0.19442426742337027,
          "rotation": 0,
          "target": "29-jogo-de-antenas-de-teste"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.28796954973495126,
          "pitch": -0.11406869845800571,
          "title": "Camara anecóica 2",
          "text": "Essa camara anecóica maior pode ser utilizada para testar grandes objetos como carros, ônibus e satélites grandes."
        }
      ]
    },
    {
      "id": "25-camera-anecoica-2",
      "name": "Camera Anecoica 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.091862597437947,
          "pitch": 0.24173325334999518,
          "rotation": 0,
          "target": "24-frente-camera-anecoica-2"
        },
        {
          "yaw": -0.014680395405394009,
          "pitch": 0.2706816320331491,
          "rotation": 0,
          "target": "26-camera-anecoica-2-antena"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.20846466174682554,
          "pitch": -0.07363061025001372,
          "title": "Camara anecóica 2",
          "text": "As paredes das camaras anecóicas são revestidas de&nbsp; material isolante acústico para evitar a interferência de som externo e também testar a reverberação dos sinais durante o funcionamento do equipamento testado."
        }
      ]
    },
    {
      "id": "26-camera-anecoica-2-antena",
      "name": "Camera Anecoica 2 Antena",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.858425124458434,
          "pitch": 0.05810161750600429,
          "rotation": 0,
          "target": "25-camera-anecoica-2"
        },
        {
          "yaw": -2.7497235289206863,
          "pitch": 0.12523281117057472,
          "rotation": 7.0685834705770345,
          "target": "27-camera-anecoica-2-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-camera-anecoica-2-entrada",
      "name": "Camera Anecoica 2 Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6165514240555616,
          "pitch": 0.09026751452870307,
          "rotation": 0,
          "target": "25-camera-anecoica-2"
        },
        {
          "yaw": 0.051350674949031117,
          "pitch": 0.2678806535018001,
          "rotation": 0,
          "target": "26-camera-anecoica-2-antena"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-antessala-camera-anecoica-2",
      "name": "Antessala Camera Anecoica 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2225680505101284,
          "pitch": 0.4267829069221776,
          "rotation": 0,
          "target": "27-camera-anecoica-2-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-jogo-de-antenas-de-teste",
      "name": "Jogo de antenas de teste",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9453346347407354,
          "pitch": 0.23714633756453907,
          "rotation": 0,
          "target": "24-frente-camera-anecoica-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-entrada-area-nova",
      "name": "Entrada Area Nova",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.25287334801850747,
          "pitch": 0.24551344852783075,
          "rotation": 0,
          "target": "24-frente-camera-anecoica-2"
        },
        {
          "yaw": -1.8667970005372592,
          "pitch": 0.1545722173087185,
          "rotation": 0,
          "target": "33-caixa-de-transporte-de-satelites"
        },
        {
          "yaw": 1.5282489470308436,
          "pitch": 0.2037307893716438,
          "rotation": 0,
          "target": "31-area-nova-corredor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.742723712657643,
          "pitch": -0.22240177358446545,
          "title": "Área de expansão do LIT",
          "text": "Esta área foi projetada para acomodar a expansão do Laboratório de Integração e Teste."
        }
      ]
    },
    {
      "id": "31-area-nova-corredor",
      "name": "Area Nova Corredor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.33307846835087673,
          "pitch": 0.21076003719230485,
          "rotation": 0,
          "target": "30-entrada-area-nova"
        },
        {
          "yaw": 2.8878067063888526,
          "pitch": 0.100079394105137,
          "rotation": 0.7853981633974483,
          "target": "32-area-nova-fundo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-area-nova-fundo",
      "name": "Area Nova Fundo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7819957173345333,
          "pitch": 0.11998829037581515,
          "rotation": 5.497787143782138,
          "target": "31-area-nova-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-caixa-de-transporte-de-satelites",
      "name": "Caixa de transporte de satelites",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.641438302373416,
          "pitch": 0.30893873856238585,
          "rotation": 0,
          "target": "34-caixa-de-transporte-cbers"
        },
        {
          "yaw": 1.5689911085366992,
          "pitch": 0.34653809588524354,
          "rotation": 0,
          "target": "35-caixa-de-transporte-painel-solar"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2909274959313102,
          "pitch": -0.08791625603318032,
          "title": "Container de transporte de satélites.",
          "text": "Esses containers são utilizados para transportar os satélites para outros locais, inclusive para o local de lançamento. Eles possuem sistemas de controle de temperatura, contaminação e vibração para evitar que o satélite seja prejudicado durante o transporte.&nbsp;"
        }
      ]
    },
    {
      "id": "34-caixa-de-transporte-cbers",
      "name": "Caixa de transporte CBERS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.456015183789404,
          "pitch": 0.328651140326393,
          "rotation": 0,
          "target": "33-caixa-de-transporte-de-satelites"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2816936473953362,
          "pitch": -0.7885189254332214,
          "title": "Container do CBERS",
          "text": "Container que carregou o satélite CBERS para a base de lançamento.&nbsp;"
        }
      ]
    },
    {
      "id": "35-caixa-de-transporte-painel-solar",
      "name": "Caixa de transporte painel solar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9508197337096078,
          "pitch": 0.20928113939636006,
          "rotation": 0,
          "target": "30-entrada-area-nova"
        },
        {
          "yaw": -2.2786249482181997,
          "pitch": 0.28724528677497574,
          "rotation": 5.497787143782138,
          "target": "33-caixa-de-transporte-de-satelites"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.17531387942927168,
          "pitch": -0.15306444604014757,
          "title": "Container de transporte",
          "text": "Container de transporte do painel solar da plataforma multi missão do satélite Amazonia"
        }
      ]
    },
    {
      "id": "36-passagem-area-limpa",
      "name": "Passagem Area Limpa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5907912359337422,
          "pitch": 0.3238069093948326,
          "rotation": 0,
          "target": "9-painel-solar"
        },
        {
          "yaw": 3.0520887920867494,
          "pitch": 0.29596463195249,
          "rotation": 0,
          "target": "37-entrada-area-limpa"
        },
        {
          "yaw": -0.331223174986528,
          "pitch": 0.35112099789792595,
          "rotation": 0,
          "target": "12-corredor-camera-anecoica-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-entrada-area-limpa",
      "name": "Entrada Area Limpa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4588369510636756,
          "pitch": 0.30710800821800355,
          "rotation": 0,
          "target": "36-passagem-area-limpa"
        },
        {
          "yaw": -2.1454831412893824,
          "pitch": 0.1401727310385681,
          "rotation": 0,
          "target": "38-lateral-direita-area-limpa"
        },
        {
          "yaw": 2.651716945744118,
          "pitch": 0.24172061590769367,
          "rotation": 0,
          "target": "42-area-de-teste-area-limpa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-lateral-direita-area-limpa",
      "name": "Lateral direita Area Limpa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0761141460290533,
          "pitch": 0.20839387219079697,
          "rotation": 0,
          "target": "37-entrada-area-limpa"
        },
        {
          "yaw": -0.8813166192641368,
          "pitch": 0.31948269615147495,
          "rotation": 5.497787143782138,
          "target": "39-teste-solar-area-limpa"
        },
        {
          "yaw": -2.534836133871929,
          "pitch": 0.11356804028525502,
          "rotation": 5.497787143782138,
          "target": "41-hacks-de-teste-area-limpa"
        },
        {
          "yaw": -2.199068761370924,
          "pitch": 0.14157087864785822,
          "rotation": 7.0685834705770345,
          "target": "40-area-de-trabalho-area-limpa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-teste-solar-area-limpa",
      "name": "Teste solar Area Limpa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.532902440514963,
          "pitch": 0.3332162609991869,
          "rotation": 0,
          "target": "38-lateral-direita-area-limpa"
        },
        {
          "yaw": -0.1422788775120285,
          "pitch": 0.35605060412941647,
          "rotation": 0,
          "target": "40-area-de-trabalho-area-limpa"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.3509665524721086,
          "pitch": -0.15109245768392654,
          "title": "Camara de teste solar",
          "text": "Camara escura utilizada para testar eficiência das células solares que serão utilizadas no satélite."
        }
      ]
    },
    {
      "id": "40-area-de-trabalho-area-limpa",
      "name": "Area de trabalho Area Limpa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7572921086838171,
          "pitch": 0.2453608488755723,
          "rotation": 0,
          "target": "39-teste-solar-area-limpa"
        },
        {
          "yaw": 1.513174340068244,
          "pitch": 0.2756889340152622,
          "rotation": 7.0685834705770345,
          "target": "41-hacks-de-teste-area-limpa"
        },
        {
          "yaw": 0.7960687480603248,
          "pitch": 0.2561280386774243,
          "rotation": 5.497787143782138,
          "target": "38-lateral-direita-area-limpa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-hacks-de-teste-area-limpa",
      "name": "Hacks de Teste Area Limpa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6484027419074359,
          "pitch": 0.35111306916327223,
          "rotation": 0.7853981633974483,
          "target": "40-area-de-trabalho-area-limpa"
        },
        {
          "yaw": 2.399768480402458,
          "pitch": 0.24980771623351394,
          "rotation": 0,
          "target": "42-area-de-teste-area-limpa"
        },
        {
          "yaw": 1.3639564083794617,
          "pitch": 0.3187944667132001,
          "rotation": 0,
          "target": "43-teste-amazonia-1b"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.7394139721119277,
          "pitch": -0.011141103393089935,
          "title": "Área de teste de comunicação&nbsp;",
          "text": "Teste de comunicação do satélite. Nessa área, o satélite integrado passa por um simulador de operação em bordo. São enviados informações para o satélite para verificar se o computador de bordo e todos os sistemas estão operando da forma correta antes do lançamento."
        }
      ]
    },
    {
      "id": "42-area-de-teste-area-limpa",
      "name": "Area de Teste Area Limpa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4586684814462458,
          "pitch": 0.19096552538405476,
          "rotation": 0,
          "target": "37-entrada-area-limpa"
        },
        {
          "yaw": 1.4906311212228776,
          "pitch": 0.19354204899313032,
          "rotation": 0,
          "target": "0-entrada-sem-pessoa"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.1368712364640112,
          "pitch": -0.09288638834480167,
          "title": "Área de integração do satélite",
          "text": "O satélite é inteiramente montado e testado antes de ser enviado para a base de lançamento. <a href='https://www.gov.br/inpe/pt-br/area-conhecimento/montagem-integracao-e-testes' target='_blank'> Clique aqui para saber mais</a> "  
        }
      ]
    },
    {
      "id": "43-teste-amazonia-1b",
      "name": "Teste Amazonia 1B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1428473543275057,
          "pitch": 0.2888807992369866,
          "rotation": 5.497787143782138,
          "target": "2-entrada-lateral-com-pessoas"
        },
        {
          "yaw": 2.8735099887176414,
          "pitch": 0.301661586064089,
          "rotation": 0,
          "target": "37-entrada-area-limpa"
        },
        {
          "yaw": -2.2417953787323697,
          "pitch": 0.30328616654480456,
          "rotation": 0.7853981633974483,
          "target": "42-area-de-teste-area-limpa"
        },
        {
          "yaw": -0.7346584796646649,
          "pitch": 0.298530895956727,
          "rotation": 0,
          "target": "41-hacks-de-teste-area-limpa"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
