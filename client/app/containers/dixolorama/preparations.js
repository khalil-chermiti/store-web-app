const preparations = [
  {
    name: 'Migraine',
    oils: [
      'HE Camomille',
      'HE menthe poivrée (sauf femme enceinte)',
      'HE Eucalyptus citroné*',
      'Pas d’HE de khella*',
      'HE de lavande*',
      'Huile essentielle de Basilic doux à linalol',
      'Huile essentielle de Gaulthérie couchée*',
      'Huile essentielle de Gaulthérie odorante*',
      'Huile essentielle de Lavande aspic*',
      'Huile essentielle de Lavandin*',
      'Huile essentielle de Menthe des champs',
      'Huile essentielle de Menthe poivrée* ',
      '30 ml d’huile d’amande douce et 12 gouttes de lavande aspic et 12  de menthe poivré'
    ],
    image: 'migraine.jpg'
  },

  {
    name: 'Chute des cheveux',
    oils: [
      'HE de mandarine*',
      'HE d’orange',
      'HE de Palmarosa (chute de cheveux gras et pellicules)',
      'HE de pamplemousse',
      'HE de romarin',
      'HE de géranium Rosat (dans l’huile de bourrache)',
      'Huile essentielle de Bay Saint Thomas',
      "Huile essentielle de Cèdre de l'Atlas",
      'Huile essentielle de Nard jatamansi',
      'Huile essentielle de Pamplemousse',
      'Huile essentielle de Pomelo de Corse BIO',
      'Huile essentielle de Sauge sclarée*',
      'Huile de ricin 30 ml et 12 HE de mandarine et Palmorosa'
    ],
    image: 'chutedecheveux.jpg'
  },

  {
    name: 'Acné',
    oils: [
      'HE de sauge sclarée*',
      'HE de Tea Tree*',
      'HE de Ravintsara*',
      'HE Basilic sacré*',
      'HE Bois de Hô Bio',
      'HE Bois de Rose',
      'HE Eucalyptus mentholé',
      'HE Lavande Aspic*',
      '30 ml de gel neutre ou de gel d’aloé vera et 12 gouttes e tea trea et 12 gouttes  de ravintsara'
    ],
    image: 'acne.jpg'
  },

  {
    name: 'Rides',
    oils: [
      'HE de Bois de Hô',
      'HE de bois de Rose (et vergetures)',
      'HE de Carotte*',
      'HE de ciste*',
      'HE d’Encens*',
      'HE lavandin',
      'HE Hélichryse*',
      'HE Rose de Damas',
      'HE Santal*',
      'Gel neutre ou aloe vera 30 ml et 12 gouttes d’hélichryse et 12 gouttes de ciste'
    ],
    image: 'rides.jpg'
  },

  {
    name: 'Taches',
    oils: [
      'HE carotte',
      'HE de ciste (taches rouges)',
      '30 ml d’aloe vera et 12 gouttes d’HE de carotte et de ciste'
    ],
    image: 'taches.jpg'
  },

  {
    name: 'Vitiligo',
    oils: [
      'HE Bergamote',
      'HE de khella',
      '30ml de gel et 12 gouttes de khella et bergamote'
    ],
    image: 'vitiligo.jpg'
  },

  {
    name: 'Ulcère',
    oils: [
      'HE Aneth',
      'HE de Cannelle',
      '30 ml d’huile d’olive et 12 gouttes de HE de cannelle et Aneth'
    ],
    image: 'ulcere.jpg'
  },

  {
    name: 'Aphtes',
    oils: [
      'HE de Tea  Tree*',
      'HE Thym à Thujanol',
      'HE millepertuis',
      'HE girofle*',
      'HE de Lavande*',
      '30 ml de gel d’aloe vera et 12 gouttes de tea tree et de clou de girofle'
    ],
    image: 'aphtes.jpg'
  },

  {
    name: 'Gengivite',
    oils: [
      'HE d’Encens',
      'HE de Manuka',
      'HE de Ravintsara',
      'Gingivite : bain de bouche d’huile d’amande douce et 12 gouttes d’encens et de Ravintsara'
    ],
    image: 'gengivite.jpg'
  },

  {
    name: 'Carie dentaire',
    oils: [
      'HE de clou de Girofle*',
      'HE d’Encens*',
      'Bain de bouche d’huile d’amande douce et 12 gouttes d’HE de clou de girofle et d’encens'
    ],
    image: 'cariedentaire.jpg'
  },

  {
    name: 'Arthrose',
    oils: [
      'HE d’Eucalyptus citronné*',
      'HE de Lavande Aspic*',
      'HE de Gaulthérie*',
      'HE de Palmarosa*',
      'Huile essentielle de Baies roses',
      'Huile essentielle Baume de Copahu',
      'Huile essentielle de Bay Saint Thomas',
      'Huile essentielle de Citronnelle',
      'Huile essentielle de Combawa',
      "Huile essentielle d'Epinette noire",
      "Huile essentielle d'Eucalyptus staigeriana",
      'Huile essentielle de Gaulthérie odorante',
      'Huile essentielle de Genévrier',
      "Huile essentielle d'Hélichryse italienne (Immortelle)*",
      'Huile essentielle de Laurier noble*',
      'Huile essentielle de Litsée citronnée ',
      'Huile essentielle de Marjolaine à coquilles',
      'Huile essentielle de Menthe des champs',
      'Huile essentielle de Menthe poivrée* ',
      'Huile essentielle de Poivre noir ',
      'Huile essentielle de Rhododendron',
      'Huile essentielle de Romarin à camphre*',
      '30ml de gel et 12 gouttes d’HE de Gaulthérie couchée et Palamarosa'
    ],
    image: 'arthrose.jpg'
  },

  {
    name: 'Mycose',
    oils: [
      'HE de Palmarosa*',
      'HE de Sauge sclarée',
      'HE de Tea Tree*',
      'Thym à linalol* (mycose vaginale, mycose buccale)',
      '30 ml d’huile de noix de coco  et 12 gouttes d’HE de Palmarosa et Teau Tree (et acide salicylique), Bain au bicarbonate de soude'
    ],
    image: 'mycose.jpg'
  },

  {
    name: 'Troubles du sommeil  et stress',
    oils: [
      'HE de Ylang Ylang*',
      'HE de marjolaine',
      'HE de basilic*',
      'HE de Camomille Noble*',
      "Huile essentielle d'Angélique",
      'Huile essentielle de Basilic doux à linalol',
      'Huile essentielle de Bergamote',
      'Huile essentielle Camomille romaine',
      'Huile essentielle de Citron vert BIO',
      'Huile essentielle de Clémentine',
      'Huile essentielle de Combawa',
      'Huile essentielle d’Orange douce BIO',
      "Huile essentielle d'Eucalyptus staigeriana",
      'Huile essentielle de Gingembre papillon',
      'Huile essentielle de Lavande* ',
      'Huile essentielle de Lavandin* ',
      'Huile essentielle de Linaloe baies',
      'Huile essentielle de Magnolia',
      'Huile essentielle de Mandarine ',
      'Huile essentielle de Maniguette fine*',
      'Huile essentielle de Marjolaine à coquilles',
      'Huile essentielle de Mélisse*',
      'Huile essentielle de Mélisse*',
      'Huile essentielle de Myrrhe*',
      "Huile essentielle d'Orange douce",
      'Huile essentielle de Petitgrain bigarade',
      'Huile essentielle de Petitgrain clémentinier',
      'Huile essentielle de Ravintsara (Ravintsare)*',
      'Huile essentielle de Verveine odorante',
      'Huile essentielle de Yuzu',
      '30 ml d’huile végétale et 12 gouttes d’HE d’ylang Ylang et Camomille romaine'
    ],
    image: 'sommeil.jpg'
  },

  {
    name: 'Digestion',
    oils: [
      'HE de Camomille*',
      'HE de Cannelle*',
      'HE de Cardamome*',
      'HE de Carvi*',
      "Huile essentielle d'Aneth*",
      "Huile essentielle d'Anis*",
      'Huile essentielle de Baies roses',
      'Huile essentielle de Basilic* ',
      'Huile essentielle de Bergamote*',
      'Huile essentielle de Camomille allemande* ',
      'Huile essentielle de Céleri*',
      'Huile essentielle de Clémentine',
      'Huile essentielle de Coriandre*',
      'Huile essentielle de Cumin',
      'Huile essentielle de Curcuma*',
      "Huile essentielle d'Estragon",
      'Huile essentielle de Gingembre*',
      'Huile essentielle de Menthe citronnée',
      'Huile essentielle de Menthe* ',
      'Huile essentielle de Menthe poivrée* ',
      'Huile essentielle de Menthe verte',
      'Huile essentielle de Poivre noir BIO',
      '30 ml d’huile végétale et 12 gouttes d’He de menthe poivrée, Cannelle et gingembre'
    ],
    image: 'digestion.jpg'
  },

  {
    name: 'Infection',
    oils: [
      'HE de Carvi (bronchique)',
      'HE de Girofle',
      'HE de Coriandre (digestif )',
      'HE Eucalyptus citronné',
      'HE Ravintsara',
      'HE Tea Tree',
      'Huile végétale et 12 gouttes d’huile de giroffle, Ravintsara et Tea Tree'
    ],
    image: 'infection.jpg'
  },

  {
    name: 'Eczéma',
    oils: [
      'HE de Katafray',
      'HE de Lavande Aspic (et psoriasis)',
      'HE de Manuka*',
      'HE de Myrrhe (cicatrice)',
      'HE de Niaouli*',
      'HE Achillée millefeuille',
      'HE Ajowan',
      'HE Aneth*',
      'HE Angélique*',
      'HE Anis*',
      'HE Basilic à Linalol et tropicale*',
      'HE Bergamote*',
      'HE Bois de Rose*',
      'HE Cade*',
      'HE Camomille*',
      'HE Camphrier*',
      '30 ml de gel et 12 gouttes de Camomille, anis et Basilic'
    ],
    image: 'eczema.jpg'
  },

  {
    name: 'Prostate',
    oils: [
      'HE de Pin sylvestre',
      'HE Lentisque (massage à 20%)',
      '30 ml d’huile végétale et 12 gouttes d’HE de pin sylvestre, et lentisque'
    ],
    image: 'prostate.jpg'
  },

  {
    name: 'ORL',
    oils: [
      'HE de menthe poivrée*',
      'HE de Myrte*',
      'HE de Niaouli*',
      'HE de Pin sylvestre*',
      'HE Ravintsara*',
      'HE de Tea Tree*',
      'Huile essentielle de Cajeput*',
      "Huile essentielle d'Eucalyptus globulus",
      "Huile essentielle d'Eucalyptus mentholé*",
      "Huile essentielle d'Eucalyptus radié*",
      "Huile essentielle d'Eucalyptus smithii",
      'Huile essentielle de Marjolaine à coquilles',
      'Huile essentielle de Menthe verte*',
      'Huile essentielle de Niaouli*',
      'Huile essentielle de Thym à thujanol*',
      '30 ml d’huile végétale et 12 gouttes d’HE de Ravintsara,Tea Tree et Eucalyptus mentholé'
    ],
    image: 'orl.jpg'
  },

  {
    name: 'Varices',
    oils: [
      'HE de lentisque*',
      'HE de Sauge Sclarée*',
      'HE de Cyprès*',
      "Huile essentielle d'Amyris*",
      'Huile essentielle de Bois de Gaïac',
      "Huile essentielle de Cèdre de l'Atlas*",
      "Huile essentielle d'Hélichryse italienne (Immortelle)*",
      'Huile essentielle de Myrte rouge*',
      'Huile essentielle de Niaouli*',
      'Huile essentielle de Patchouli*',
      'Huile essentielle de Santal alba*',
      'Huile essentielle de Sauge sclarée*',
      "Huile essentielle de Vétiver d'Haïti",
      '30 ml de gel et 12 gouttes d’HE de Cyprès, Hélichrise et, Patchouli'
    ],
    image: 'varices.jpg'
  },

  {
    name: 'Cellulite',
    oils: [
      'HE de lentisque*',
      'HE de Myrte*',
      'HE d’Hélichryse*',
      'HE de Palmarosa*',
      'HE de Laurier Noble*',
      "Huile essentielle de Cèdre de l'Atlas*",
      'Huile essentielle de Cèdre de Virginie',
      'Huile essentielle de Christe marine',
      "Huile essentielle d'Eucalyptus mentholé*",
      'Huile essentielle de Genévrier*',
      'Huile essentielle de Pamplemousse',
      'Huile essentielle de Pomelo de Corse BIO',
      '30 ml de gel et 12 gouttes de Laurier noble, Hélichryse et, Palmarosa'
    ],
    image: 'cellulite.jpg'
  },

  {
    name: 'Psoriasis',
    oils: [
      'HE de Palmarosa',
      'HE de Pin Sylvestre',
      'HE de Romarin à Verbénone ou cinéole',
      'HE de Camomille Romaine',
      'HE de Tanaisie (avec huile végétale de nigelle et de',
      'bourrache)',
      'HE de Bergamote',
      'Voir crème de Bio Algues',
      '30 ml de gel Aloe Vera et 12 gouttes de Palmarosa, Camomille romaine et pin sylvestre (acide salicylique)'
    ],
    image: 'psoriasis.jpg'
  },

  {
    name: 'Gerçure Crevasse',
    oils: [
      "Huile essentielle d'Achillée millefeuille",
      'Huile essentielle de Géranium Bourbon',
      'Huile essentielle de Géranium rosat Egypte',
      'Huile essentielle de Lavande aspic*',
      'Huile essentielle de Lavande fine Altitude',
      "Huile essentielle d'Achillée millefeuille*",
      'Huile essentielle de Géranium Bourbon',
      'Huile essentielle de Géranium rosat Egypte',
      'Huile essentielle de Lavande aspic*',
      'Huile essentielle de Lavande fine Altitude',
      'Huile essentielle de Lavande fine de Provence',
      'Huile essentielle de Lavande vraie',
      'Huile essentielle de Myrrhe*',
      '30 ml de gel et 12 gouttes d’HE de lavande, Myrrhe et Achillée millefeuille (et acide salicylique) Coupero'
    ],
    image: 'gercure.jpg'
  },

  {
    name: 'Couperose Rosacée',
    oils: [
      'Huile essentielle de Camomille allemande',
      'Huile essentielle de Ciste ladanifère',
      'Huile essentielle de Cyprès de Provence',
      'Huile essentielle de Géranium Egypte',
      "Huile essentielle d'Hélichryse italienne (Immortelle)",
      'Huile essentielle de Lentisque Pistachier',
      '30 ml de gel aloe vera et 12 gouttes d’HE de camomille romaine, hélichryse et lentisque pistachier'
    ],
    image: 'couperose.jpg'
  },

  {
    name: 'Pellicules',
    oils: [
      'Huile essentielle de Cade*',
      "Huile essentielle de Cèdre de l'Atlas*",
      'Huile essentielle de Laurier noble*',
      'Huile essentielle de Patchouli*',
      '30 ml d’huile végétale et 12 gouttes d’He de Cèdre, laurier noble et Cade'
    ],
    image: 'pellicules.jpg'
  },
  {
    name: 'Cicatrice',
    oils: [
      'Huile essentielle de Ciste *',
      "Huile essentielle d'Hélichryse italienne (Immortelle)*",
      'Huile essentielle de Lavande aspic*',
      'Huile essentielle de Linaloe baies',
      'Huile essentielle de Petitgrain bigarade',
      '30 ml de gel ou aloe vera et 12 gouttes d’HE d’Hélichryse, Lavande aspic et ciste'
    ]
  },

  {
    name: 'Poux',
    oils: [
      'Huile essentielle de Cryptoméria',
      'Huile essentielle de Lavandin',
      '30 ml d’huile végétale et 12 gouttes de Lavandin et Tea tree'
    ]
  },

  {
    name: 'Transpiration',
    oils: [
      'Huile essentielle de Cyprès de Provence',
      'Huile essentielle de Sauge sclarée BIO de Provence'
    ]
  },

  {
    name: 'Taches Brunes',
    oils: [
      'Huile essentielle de Carotte',
      'Huile essentielle de Céleri',
      '30 ml de gel aloe vera et 12 gouttes d’He de Céleri et carotte'
    ]
  },

  {
    name: 'Démangeaisons',
    oils: [
      'Huile essentielle de Camomille allemande',
      'Huile essentielle de Menthe des champs'
    ]
  },
  {
    name: 'Angoisse panique',
    oils: [
      "Huile essentielle d'Angélique",
      'Huile essentielle de Bois de rose',
      'Huile essentielle Camomille romaine',
      "Huile essentielle d'Encens oliban",
      'Huile essentielle de Lavande',
      'Huile essentielle de Marjolaine à coquilles',
      'Huile essentielle de Palo Santo',
      'Huile essentielle de Petitgrain clémentinier BIO'
    ]
  },
  {
    name: 'Piqure d’insecte',
    oils: [
      'Huile essentielle de Citron de Sicile',
      'Huile essentielle de Citronnelle',
      'Huile essentielle de Cyprès bleu',
      "Huile essentielle d'Eucalyptus citronné",
      'Huile essentielle de Feuilles de Girofle',
      'Huile essentielle de Géranium Egypte',
      'Huile essentielle de Lavande aspic',
      'Huile essentielle de Mandarine'
    ]
  },

  {
    name: 'Fatigue et épuisement',
    oils: [
      'Huile essentielle de Basilic sacré',
      'Huile essentielle de Bois de rose',
      'Huile essentielle de Citron',
      "Huile essentielle d'Epinette noire",
      'Huile essentielle de Feuilles de Girofle',
      'Huile essentielle de Menthe poivrée',
      'Huile essentielle de Muscade',
      'Huile essentielle de Pin sylvestre'
    ]
  },

  {
    name: 'Ecorchures, Bobos',
    oils: [
      "Huile essentielle d'Achillée millefeuille*",
      'Huile essentielle Baume de Copahu',
      'Huile essentielle de Ciste',
      'Huile essentielle de Lavande fine Altitude',
      'Huile essentielle de Lavande*',
      'Huile essentielle de Lavandin*',
      'Huile essentielle de Myrrhe*',
      '30ml de gel et 12 gouttes de myrrhe et lavande'
    ]
  },
  {
    name: 'Diarrhée',
    oils: [
      "Huile essentielle d'Ajowan BIO",
      'Huile essentielle de Laurier noble',
      "Huile essentielle d'Origan",
      'Huile essentielle de Sarriette',
      'Huile essentielle de Thym à thymol'
    ]
  },
  {
    name: 'Crampes',
    oils: [
      'Huile essentielle de Basilic C*',
      'Huile essentielle de Chanvre',
      "Huile essentielle d'Estragon",
      'Huile essentielle de Lavande aspic*',
      'Huile essentielle de Lavandin*',
      'Huile essentielle de Petitgrain Bigarade',
      'Huile essentielle de Romarin à camphre*',
      '30 ml de gel et 12 gouttes de romarin à camphre, lavande et lavandin'
    ]
  },

  {
    name: 'Vergetures',
    oils: [
      'Huile essentielle de Géranium Bourbon',
      'Huile essentielle de Géranium rosat Egypte',
      "Huile essentielle d'Hélichryse italienne (Immortelle)",
      'Huile essentielle de Mandarine',
      'Huile essentielle de Myrrhe',
      'Huile essentielle de Romarin à verbénone',
      '30ml de gel d’aloe vera et 12 gouttes d’HE d’Hélichryse, myrrhe et géranium rosat'
    ]
  },

  {
    name: 'Toux Grasse',
    oils: [
      'Huile essentielle de Baies roses',
      'Huile essentielle de Cardamome',
      'Huile essentielle de Carvi',
      "Huile essentielle d'Eucalyptus globulus",
      "Huile essentielle d'Eucalyptus mentholé",
      "Huile essentielle d'Inule odorante",
      'HE de Tea Tree',
      'HE de Ravintsara',
      '30 ml d’huile végétale et 12 gouttes d’HE de Ravintsara, Eucalyptus mentholé et Tea tree. Si bronchodilatation Khella'
    ]
  },

  {
    name: 'Règles',
    oils: [
      "Huile essentielle d'Aneth",
      "Huile essentielle d'Anis",
      "Huile essentielle d'Anis",
      'Huile essentielle de Basilic tropical BIO',
      'Huile essentielle de Camomille allemande',
      "Huile essentielle d'Estragon",
      'Huile essentielle de Petitgrain bigarade',
      'Huile essentielle de Sauge sclarée BIO de Provence',
      '30 ml d’huile végétale et 12 gouttes d’HE d’anis, sauge et camomille romaine'
    ]
  },

  {
    name: 'Torticolis',
    oils: [
      'Huile essentielle Camomille romaine',
      "Huile essentielle d'Eucalyptus citronné",
      'Huile essentielle de Gaulthérie couchée',
      'Huile essentielle de Gaulthérie odorante',
      'Huile essentielle de Romarin à camphre',
      '30 ml de gel et 12 gouttes d’HE de Gaulthérie couchée, Romarin à camphre et camomille romaine'
    ]
  },
  {
    name: 'Mal de dos',
    oils: [
      "Huile essentielle d'Elémi",
      "Huile essentielle d'Eucalyptus citronné*",
      'Huile essentielle de Gaulthérie couchée*',
      'Huile essentielle de Gaulthérie odorante',
      'Huile essentielle de Katrafay (ou Katafray)',
      'Huile essentielle de Poivre noir BIO*',
      '30 ml de gel et 12 gouttes d’HE de gaulthérie couchée et de poivre noir'
    ]
  },

  {
    name: 'Verrues',
    oils: [
      "Huile essentielle d'Ail",
      'Huile essentielle de Mandarine verte',
      "Huile essentielle d'Origan",
      '30 ml de gel et 12 gouttes d’HE d’ail, mandarine verte, origan et tea tree'
    ]
  },

  {
    name: 'Ménopause',
    oils: [
      "Huile essentielle d'Anis",
      'Huile essentielle de Cyprès de Provence',
      'Huile essentielle de Rose de Damas',
      'Huile essentielle de Sauge sclarée',
      '30 ml d’huile végétale et 12 gouttes d’HE de Cyprès, sauge sclarée et Anis'
    ]
  },

  {
    name: 'Baisse de libido',
    oils: [
      'Huile essentielle de Bois de Siam',
      'Huile essentielle de Gingembre*',
      'Huile essentielle de Menthe citronnée*',
      'Huile essentielle de Santal alba*',
      'Huile essentielle de Sauge sclarée',
      '30 ml d’huile végétale et 12 gouttes d’HE de gingembre, menthe citronnée et Santal'
    ]
  },

  {
    name: 'Obésité',
    oils: [
      'Huile essentielle de Citron',
      'Huile essentielle de Pamplemousse',
      'Huile essentielle de Pomelo de Corse BIO'
    ]
  },

  {
    name: 'Bleus et hématomes',
    oils: [
      "Huile essentielle d'Hélichryse italienne (Immortelle)",
      'Huile essentielle de Menthe poivrée',
      'Huile essentielle de Millepertuis',
      '30 ml de gel et 12 gouttes d’HE de Menthe poivrée, millepertuis et Hélichryse'
    ]
  },

  {
    name: 'Mal de transports',
    oils: [
      'Huile essentielle de Gingembre',
      'Huile essentielle de Menthe poivrée'
    ]
  },

  {
    name: 'Impuissance masculine',
    oils: [
      'Huile essentielle de Bois de Siam',
      'Huile essentielle de Gingembre',
      'Huile essentielle Santal alba',
      'Huile essentielle de Sarriette',
      'Huile essentielle de Bergamote',
      '30 ml d’huile végétale et 12 gouttes d’HE de gingembre, santal et Bergamote'
    ]
  },

  {
    name: 'Pour Parfumer',
    oils: [
      'HE Bois de Rose*',
      'HE Ciste*',
      'Myrrhe*',
      'HE Eucalyptus*',
      'HE Lavande*'
    ]
  },
  {
    name: 'Hoquet',
    oils: ['Huile essentielle de Basilic', "Huile essentielle d'Estragon"]
  },

  {
    name: 'Concentration',
    oils: [
      'Huile essentielle de Laurier noble',
      'Huile essentielle de Menthe poivrée',
      'Romarin à Cinéole',
      '30 ml d’huile végétale et 12 gouttes d’HE de Laurier noble, Menthe poivrée et Romarin à cinéole +++'
    ]
  },
  {
    name: 'Mauvaise haleine',
    oils: ['Huile essentielle de Menthe poivrée']
  },

  {
    name: 'Impatiences, jambes sans repos',
    oils: ['Huile essentielle de Romarin à camphre']
  },
  {
    name: 'Détente',
    oils: ['Huile essentielle de Chanvre BIO']
  },
  {
    name: 'Colère et irritabilité',
    oils: ['Huile essentielle de Chanvre BIO']
  },

  {
    name: 'Arrêter de fumer',
    oils: ['Huile essentielle Santal alba']
  }
];

export default preparations;
