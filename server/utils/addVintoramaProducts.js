const Product = require("../models/product.js");

const preparations = [
  {
    name: "Migraine",
    image: "migraine.jpg",
    description: "Soulage les douleurs et tensions liées aux migraines.",
  },
  {
    name: "Chute des cheveux",
    image: "chutedecheveux.jpg",
    description: "Favorise la croissance et renforce les cheveux.",
  },
  {
    name: "Acné",
    image: "acne.jpg",
    description: "Réduit l'inflammation et aide à purifier la peau.",
  },
  {
    name: "Rides",
    image: "rides.jpg",
    description: "Atténue les signes de l’âge pour une peau plus lisse.",
  },
  {
    name: "Taches",
    image: "taches.jpg",
    description: "Estompe les taches pigmentaires pour un teint uniforme.",
  },
  {
    name: "Vitiligo",
    image: "vitiligo.jpg",
    description: "Aide à uniformiser la pigmentation de la peau.",
  },
  {
    name: "Ulcère",
    image: "ulcere.jpg",
    description: "Favorise la cicatrisation des ulcères cutanés.",
  },
  {
    name: "Aphtes",
    image: "aphtes.jpg",
    description: "Apaise et accélère la guérison des aphtes.",
  },
  {
    name: "Gengivite",
    image: "gengivite.jpg",
    description: "Combat les inflammations des gencives.",
  },
  {
    name: "Carie dentaire",
    image: "cariedentaire.jpg",
    description: "Prévient et soulage les douleurs liées aux caries.",
  },
  {
    name: "Arthrose",
    image: "arthrose.jpg",
    description: "Réduit les douleurs articulaires et améliore la mobilité.",
  },
  {
    name: "Mycose",
    image: "mycose.jpg",
    description: "Lutte contre les infections fongiques.",
  },
  {
    name: "Troubles du sommeil  et stress",
    image: "sommeil.jpg",
    description: "Aide à calmer le stress et favorise un sommeil réparateur.",
  },
  {
    name: "Digestion",
    image: "digestion.jpg",
    description: "Facilite la digestion et apaise les inconforts.",
  },
  {
    name: "Infection",
    image: "infection.jpg",
    description: "Renforce la défense contre diverses infections.",
  },
  {
    name: "Eczéma",
    image: "eczema.jpg",
    description: "Calme les irritations et hydrate la peau sèche.",
  },
  {
    name: "Prostate",
    image: "prostate.jpg",
    description: "Aide à maintenir la santé prostatique.",
  },
  {
    name: "ORL",
    image: "orl.jpg",
    description: "Soulage les troubles des voies respiratoires supérieures.",
  },
  {
    name: "Varices",
    image: "varices.jpg",
    description: "Améliore la circulation sanguine et réduit les varices.",
  },
  {
    name: "Cellulite",
    image: "cellulite.jpg",
    description: "Lutte contre les dépôts graisseux pour une peau plus ferme.",
  },
  {
    name: "Psoriasis",
    image: "psoriasis.jpg",
    description: "Apaise les plaques et démangeaisons du psoriasis.",
  },
  {
    name: "Gerçure Crevasse",
    image: "gercure.jpg",
    description: "Hydrate et répare les crevasses et gerçures.",
  },
  {
    name: "Couperose Rosacée",
    image: "couperose.jpg",
    description: "Réduit les rougeurs et apaise la peau sensible.",
  },
  {
    name: "Pellicules",
    image: "pellicules.jpg",
    description: "Élimine les pellicules et hydrate le cuir chevelu.",
  },
  {
    name: "Cicatrice",
    description:
      "Favorise la régénération des tissus pour atténuer les cicatrices.",
  },
  {
    name: "Poux",
    description: "Élimine les poux et apaise le cuir chevelu.",
  },
  {
    name: "Transpiration",
    description: "Régule la transpiration et combat les odeurs.",
  },
  {
    name: "Taches Brunes",
    description: "Éclaircit les taches brunes pour un teint plus homogène.",
  },
  {
    name: "Démangeaisons",
    description: "Soulage rapidement les démangeaisons.",
  },
  {
    name: "Angoisse panique",
    description: "Apaise les états d’angoisse et de panique.",
  },
  {
    name: "Piqure d’insecte",
    description: "Soulage les piqûres et réduit les gonflements.",
  },
  {
    name: "Fatigue et épuisement",
    description: "Revitalise et combat la fatigue.",
  },
  {
    name: "Ecorchures, Bobos",
    description: "Favorise la cicatrisation des petites blessures.",
  },
  {
    name: "Diarrhée",
    description: "Aide à calmer les troubles digestifs.",
  },
  {
    name: "Crampes",
    description: "Soulage et prévient les crampes musculaires.",
  },
  {
    name: "Vergetures",
    description: "Réduit l’apparence des vergetures.",
  },
  {
    name: "Toux Grasse",
    description: "Aide à dégager les voies respiratoires.",
  },
  {
    name: "Règles",
    description: "Soulage les douleurs menstruelles.",
  },
  {
    name: "Torticolis",
    description: "Détend les muscles et soulage les torticolis.",
  },
  {
    name: "Mal de dos",
    description: "Soulage les tensions et douleurs lombaires.",
  },
  {
    name: "Verrues",
    description: "Aide à éliminer les verrues naturellement.",
  },
  {
    name: "Ménopause",
    description: "Apaise les désagréments liés à la ménopause.",
  },
  {
    name: "Baisse de libido",
    description: "Stimule naturellement la libido.",
  },
  {
    name: "Obésité",
    description: "Soutient la perte de poids de manière saine.",
  },
  {
    name: "Bleus et hématomes",
    description: "Réduit les bleus et favorise leur résorption.",
  },
  {
    name: "Mal de transports",
    description: "Prévient et soulage les nausées du voyage.",
  },
  {
    name: "Impuissance masculine",
    description: "Soutient la vitalité masculine.",
  },
  {
    name: "Pour Parfumer",
    description: "Apporte une touche parfumée naturelle.",
  },
  {
    name: "Hoquet",
    description: "Aide à calmer le hoquet.",
  },
  {
    name: "Concentration",
    description: "Améliore la concentration et la clarté mentale.",
  },
  {
    name: "Mauvaise haleine",
    description: "Rafraîchit l’haleine durablement.",
  },
  {
    name: "Impatiences, jambes sans repos",
    description: "Apaise les sensations d’impatience nocturne.",
  },
  {
    name: "Détente",
    description: "Favorise une relaxation profonde.",
  },
  {
    name: "Colère et irritabilité",
    description: "Aide à gérer les émotions et à apaiser l’esprit.",
  },
  {
    name: "Arrêter de fumer",
    description: "Accompagne la lutte contre les envies de fumer.",
  },
];

async function addVintoramaProducts() {
  // add product to the database sequentially
  for (let i = 0; i < preparations.length; i++) {
    const preparation = preparations[i];
    const product = new Product({
      sku:
        "vintorama_" +
        preparation.name.toLowerCase().replace(/\s/g, "_").replace(/é|è/g, "e"),
      name: "Vintorama " + preparation.name,
      description: preparation.description,
      price: 20,
      quantity: 1,
      image: preparation.image,
      isActive: true,
      brand: "6748be58fca0084ffc7275b7",
    });

    try {
      await product.save();
    } catch (err) {}
  }
}

const deleteProductsHavingNameVintorama = async () => {
  try {
    const products = await Product.find({ name: /^Vintorama/ });
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      await product.remove();
    }
  } catch (err) {
    console.log(err);
  }
};

// get all products name
function getAllProudctsNames() {
  Product.find({}, (err, products) => {
    if (err) {
      console.log(err);
    } else {
      products
        // filter proudcts that has name containing "Vintorama"
        .filter((product) => !product.name?.includes("Vintorama"));
    }
  });
}

module.exports = {};
