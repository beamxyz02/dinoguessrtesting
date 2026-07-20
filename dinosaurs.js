 const DINOSAURS = [
{
      name: "Spinosaurus aegyptiacus",
      period: "Cretaceous",
      difficulty: "Easy",
      diet: "Carnivore",
      continent: "Africa",
      group: "Spinosauridae",
      subgroup: "Spinosaurini",
      length: 15,
      wiki: "Spinosaurus",
      hints: [
        "It had tall spines on its back forming a distinctive sail-like structure.",
        "It is thought to be the largest carnivorous dinosaur known, even bigger than T. rex.",
        "Evidence suggests it was well-adapted to a semi-aquatic lifestyle, hunting fish."
      ]
    },
    {
      name: "Allosaurus fragilis",
      period: "Jurassic",
      difficulty: "Easy",
      diet: "Carnivore",
      continent: "North America",
      group: "Carnosauria",
      subgroup: "Allosauridae",
      length: 9,
      wiki: "Allosaurus",
      hints: [
        "It was one of the top predators of the Late Jurassic, well before T. rex existed.",
        "It had distinctive bony ridges above its eyes.",
        "It likely hunted large herbivores like Stegosaurus and sauropods."
      ]
    },
    {
      name: "Parasaurolophus walkeri",
      period: "Cretaceous",
      difficulty: "Easy",
      diet: "Herbivore",
      continent: "North America",
      group: "Hadrosauridae",
      subgroup: "Lambeosaurinae",
      length: 9,
      wiki: "Parasaurolophus",
      hints: [
        "It had a long, curved bony crest extending backward from its skull.",
        "Scientists believe the crest may have been used to make sound, like a trombone.",
        "It walked on both two and four legs depending on its speed."
      ]
    },
    {
      name: "Diplodocus longus",
      period: "Jurassic",
      difficulty: "Medium",
      diet: "Herbivore",
      continent: "North America",
      group: "Eusauropoda",
      subgroup: "Diplodocoidea",
      length: 25,
      wiki: "Diplodocus",
      hints: [
        "Its tail may have been long enough to crack like a whip.",
        "It had an extremely long neck but a surprisingly small head.",
        "It is one of the longest dinosaurs known from a fairly complete skeleton."
      ]
    },
    {
      name: "Iguanodon bernissartensis",
      period: "Cretaceous",
      difficulty: "Medium",
      diet: "Herbivore",
      continent: "Europe",
      group: "Ornithopoda",
      subgroup: "Iguanodontidae",
      length: 10,
      wiki: "Iguanodon",
      hints: [
        "It was one of the very first dinosaurs ever formally named and described.",
        "It had a distinctive conical spike on each thumb.",
        "It could walk on either two or four legs."
      ]
    },
    {
      name: "Compsognathus ellioti",
      period: "Jurassic",
      difficulty: "Easy",
      diet: "Carnivore",
      continent: "Europe",
      group: "Theropod",
      subgroup: "Compsognathidae",
      length: 1,
      wiki: "Compsognathus",
      hints: [
        "It was one of the smallest known dinosaurs, roughly the size of a chicken.",
        "Fossil evidence shows at least one specimen had eaten a small lizard.",
        "It ran quickly on two long, slender legs."
      ]
    },
    {
      name: "Carnotaurus sastrei",
      period: "Cretaceous",
      difficulty: "Medium",
      diet: "Carnivore",
      continent: "South America",
      group: "Abelisauridae",
      subgroup: "Brachyrostra",
      length: 8,
      wiki: "Carnotaurus",
      hints: [
        "Its name means 'meat-eating bull', referencing the horns above its eyes.",
        "It had unusually short, stubby arms even compared to T. rex.",
        "Its skin impressions show rows of bumpy scales, rare for dinosaur fossils."
      ]
    },
    {
      name: "Plateosaurus trossingensis",
      period: "Triassic",
      difficulty: "Hard",
      diet: "Herbivore",
      continent: "Europe",
      group: "Sauropodomorph",
      subgroup: "Plateosauridae",
      length: 8,
      wiki: "Plateosaurus",
      hints: [
        "It is one of the most common dinosaurs known from the Triassic period.",
        "Hundreds of skeletons of this dinosaur have been found in mass bonebeds.",
        "It was an early relative of the giant sauropods that came later."
      ]
    },
    {
      name: "Giganotosaurus carolini",
      period: "Cretaceous",
      difficulty: "Easy",
      diet: "Carnivore",
      continent: "South America",
      group: "Carcharodontosauria",
      subgroup: "Carcharodontosaurinae",
      length: 13,
      wiki: "Giganotosaurus",
      hints: [
        "It was one of the largest terrestrial carnivores to ever live, outsizing T. rex in length.",
        "Its teeth were thin and serrated like steak knives, adapted for slicing flesh rather than crushing bone.",
        "It lived alongside and likely hunted massive sauropods like Argentinosaurus."
      ]
    },
    {
      name: "Coelophysis bauri",
      period: "Triassic",
      difficulty: "Hard",
      diet: "Carnivore",
      continent: "North America",
      group: "Theropod",
      subgroup: "Coelophysidae",
      length: 3,
      wiki: "Coelophysis",
      hints: [
        "It was an agile, early predatory dinosaur that lived during the Late Triassic.",
        "Hundreds of skeletons were discovered crammed together at Ghost Ranch, New Mexico.",
        "Early paleontologists mistakenly believed it was a cannibal due to reptile bones found inside its rib cage."
      ]
    },
    {
      name: "Dilophosaurus wetherilli",
      period: "Jurassic",
      difficulty: "Medium",
      diet: "Carnivore",
      continent: "North America",
      group: "Neotheropoda",
      subgroup: "Averostriformes",
      length: 7,
      wiki: "Dilophosaurus",
      hints: [
        "It possessed a pair of thin, semi-circular bony crests running down the top of its skull.",
        "Contrary to popular movie depictions, there is zero evidence it spit venom or had a neck frill.",
        "It was the largest known land apex predator of the Early Jurassic period."
      ]
    },
    {
      name: "Therizinosaurus cheloniformis",
      period: "Cretaceous",
      difficulty: "Easy",
      diet: "Herbivore",
      continent: "Asia",
      group: "Maniraptora",
      subgroup: "Therizinosauridae",
      length: 10,
      wiki: "Therizinosaurus",
      hints: [
        "It possessed the longest claws of any animal in history, measuring up to 1 meter.",
        "Despite belonging to the mostly meat-eating theropod family, it was adapted to eating plants.",
        "Its initial fossil claw discovery led scientists to think it belonged to a giant ancient turtle."
      ]
    },
    {
      name: "Baryonyx walkeri",
      period: "Cretaceous",
      difficulty: "Easy",
      diet: "Carnivore",
      continent: "Europe",
      group: "Spinosauridae",
      subgroup: "Baryonychinae",
      length: 9,
      wiki: "Baryonyx",
      hints: [
        "One of Englands most famous dinosaurs, on display at the Natural History Museum in London.",
        "Its skull shape mimics a modern gharial crocodile, perfectly suited for snapping up fish.",
        "Fossilized stomach contents revealed scaled fish bones and the remains of a young Iguanodon."
      ]
    },
    {
      name: "Deinocheirus mirificus",
      period: "Cretaceous",
      difficulty: "Hard",
      diet: "Omnivore",
      continent: "Asia",
      group: "Ornithomimosauria",
      subgroup: "Deinocheiridae",
      length: 11,
      wiki: "Deinocheirus",
      hints: [
        "For decades it was known only from a pair of gargantuan 2.4-meter-long arms.",
        "When a full skeleton was finally found, it revealed a bizarre humpback and a duck-like bill.",
        "Fish scales and polished gizzard stones found in its body prove it was an omnivorous wetland forager."
      ]
    },
    {
      name: "Pachycephalosaurus wyomingensis",
      period: "Cretaceous",
      difficulty: "Easy",
      diet: "Herbivore",
      continent: "North America",
      group: "Marginocephalian",
      subgroup: "Pachycephalosaurinae",
      length: 4.5,
      wiki: "Pachycephalosaurus",
      hints: [
        "The roof of its skull formed a massive, solid dome of bone up to 25 centimeters thick.",
        "Scientists debate whether it used its thick skull to headbutt rivals or just for display.",
        "Its young had spikes on their heads that flattened out as they grew into adults."
      ]
    },
    {
      name: "Styracosaurus albertensis",
      period: "Cretaceous",
      difficulty: "Medium",
      diet: "Herbivore",
      continent: "North America",
      group: "Marginocephalian",
      subgroup: "Centrosaurinae",
      length: 5.5,
      wiki: "Styracosaurus",
      hints: [
        "Its spectacular neck frill was armed with four to six long, menacing spikes.",
        "It sported a single, massive horn protruding straight out of its nose.",
        "It lived during the Late Cretaceous alongside herds of duck-billed dinosaurs."
      ]
    },
    {
      name: "Tyrannosaurus rex",
      period: "Cretaceous",
      difficulty: "Easy",
      diet: "Carnivore",
      continent: "North America",
      group: "Tyrannosauridae",
      subgroup: "Tyrannosaurini",
      length: 12,
      wiki: "Tyrannosaurus",
      hints: [
        "It had one of the most powerful bite forces ever measured in a land animal.",
        "Its forelimbs were tiny compared to its massive skull.",
        "It was among the very last dinosaurs to exist before the mass extinction."
      ]
    },
    {
      name: "Protoceratops andrewsi",
      period: "Cretaceous",
      difficulty: "Hard",
      diet: "Herbivore",
      continent: "Asia",
      group: "Marginocephalian",
      subgroup: "Protoceratopsidae",
      length: 2,
      wiki: "Protoceratops",
      hints: [
        "It was a small sheep-sized relative of Triceratops that entirely lacked horns.",
        "A famous fossil captures this creature locked in a death struggle with a Velociraptor.",
        "Its skull structure may have inspired the ancient mythological legend of the Griffin."
      ]
    },
    {
      name: "Maiasaura peeblesorum",
      period: "Cretaceous",
      difficulty: "Medium",
      diet: "Herbivore",
      continent: "North America",
      group: "Hadrosauridae",
      subgroup: "Saurolophinae",
      length: 9,
      wiki: "Maiasaura",
      hints: [
        "Its name translates to 'good mother lizard' due to extensive nesting site discoveries.",
        "Fossils prove they cared for their helpless hatchlings inside complex mud nests.",
        "It was the very first dinosaur to travel into outer space as a fossil fragment in 1985."
      ]
    },
    {
      name: "Corythosaurus casuarius",
      period: "Cretaceous",
      difficulty: "Easy",
      diet: "Herbivore",
      continent: "North America",
      group: "Hadrosauridae",
      subgroup: "Lambeosaurinae",
      length: 9,
      wiki: "Corythosaurus",
      hints: [
        "It carried a high, circular crest on its head shaped exactly like a Corinthian soldier helmet.",
        "The hollow nasal passages inside its head crest acted as a natural acoustic amplifier.",
        "Beautifully preserved skin impressions reveal it was covered in fine, non-overlapping scales."
      ]
    },
    {
      name: "Edmontosaurus annectens",
      period: "Cretaceous",
      difficulty: "Easy",
      diet: "Herbivore",
      continent: "North America",
      group: "Hadrosauridae",
      subgroup: "Saurolophinae",
      length: 12,
      wiki: "Edmontosaurus",
      hints: [
        "It is one of the few dinosaurs that has yielded completely mummified skin and tissue fossils.",
        "Mummies show it possessed a fleshy, rooster-like comb on top of its head.",
        "Its jaws contained dense batteries composed of thousands of teeth to grind tough leaves."
      ]
    },
    {
      name: "Apatosaurus ajax",
      period: "Jurassic",
      difficulty: "Easy",
      diet: "Herbivore",
      continent: "North America",
      group: "Eusauropoda",
      subgroup: "Diplodocoidea",
      length: 22,
      wiki: "Apatosaurus",
      hints: [
        "It is famously confused with Brontosaurus for generations.",
        "It had a thicker, stockier build and a much lower neck posture compared to Brachiosaurus.",
        "Like other diplodocids, it had pencil-like teeth limited only to the front of its mouth."
      ]
    },
    {
      name: "Kentrosaurus aethiopicus",
      period: "Jurassic",
      difficulty: "Medium",
      diet: "Herbivore",
      continent: "Africa",
      group: "Stegosauria",
      subgroup: "Stegosauridae",
      length: 4.5,
      wiki: "Kentrosaurus",
      hints: [
        "It is a close African relative of Stegosaurus but significantly smaller.",
        "While its front back had plates, its lower back and tail were armed with long spikes.",
        "It possessed long, sharp spikes pointing outward from its shoulders for lateral defense."
      ]
    },
    {
      name: "Herrerasaurus ischigualastensis",
      period: "Triassic",
      difficulty: "Hard",
      diet: "Carnivore",
      continent: "South America",
      group: "Saurischia",
      subgroup: "Herrerasauridae",
      length: 6,
      wiki: "Herrerasaurus",
      hints: [
        "It is one of the absolute earliest known true dinosaurs, appearing in the Late Triassic.",
        "It possessed a flexible joint in its lower jaw, allowing it to wrap its mouth tightly around struggling prey.",
        "It had a long tail and walked entirely on its long hind legs, leaving three-toed footprints."
      ]
    },
    {
      name: "Ceratosaurus nasicornis",
      period: "Jurassic",
      difficulty: "Medium",
      diet: "Carnivore",
      continent: "North America",
      group: "Ceratosauria",
      subgroup: "Ceratosauridae",
      length: 6,
      wiki: "Ceratosaurus",
      hints: [
        "It sported a prominent, blade-like horn right on the top of its snout.",
        "Uniquely among theropods, it had a row of small armor osteoderms running along its back spine.",
        "It possessed exceptionally long, blade-like teeth that stuck out even when its mouth closed."
      ]
    },
    {
      name: "Troodon formosus",
      period: "Cretaceous",
      difficulty: "Medium",
      diet: "Omnivore",
      continent: "North America",
      group: "Troodontidae",
      subgroup: "Troodontinae",
      length: 2.5,
      wiki: "Troodon",
      hints: [
        "It possessed the largest brain-to-body mass ratio of any non-avian dinosaur.",
        "Its forward-facing eyes gave it superb stereoscopic depth perception for night hunting.",
        "Its asymmetrical ears suggest it could pinpoint the sound of small rustling mammals easily."
      ]
    },
    {
      name: "Carcharodontosaurus saharicus",
      period: "Cretaceous",
      difficulty: "Medium",
      diet: "Carnivore",
      continent: "Africa",
      group: "Carcharodontosauria",
      subgroup: "Carcharodontosaurinae",
      length: 12.5,
      wiki: "Carcharodontosaurus",
      hints: [
        "Its name translates to 'shark-toothed lizard' due to the serrated edge design of its teeth.",
        "It was an absolute giant, comparable in size to Giganotosaurus and Tyrannosaurus.",
        "It lived in the dangerous Cretaceous waterways of Africa alongside Spinosaurus."
      ]
    },
    {
      name: "Utahraptor ostrommaysi",
      period: "Cretaceous",
      difficulty: "Medium",
      diet: "Carnivore",
      continent: "North America",
      group: "Dromaeosauridae",
      subgroup: "Dromaeosaurinae",
      length: 6,
      wiki: "Utahraptor",
      hints: [
        "It is the largest known member of the raptor family, weighing up to 500 kilograms.",
        "The curved killing claws on its feet were massive, reaching lengths of 22 centimeters.",
        "Unlike smaller raptors, its heavy bone build made it an ambush hunter rather than a fast sprinter."
      ]
    },
    {
      name: "Oviraptor philoceratops",
      period: "Cretaceous",
      difficulty: "Medium",
      diet: "Omnivore",
      continent: "Asia",
      group: "Oviraptorosauria",
      subgroup: "Oviraptoridae",
      length: 1.6,
      wiki: "Oviraptor",
      hints: [
        "Its name unfairly translates to 'egg thief' because its first fossil was found near a nest.",
        "Later discoveries proved the nests actually belonged to Oviraptor itself, which died brooding its own eggs.",
        "It possessed a short, deep toothless beak that operated like a modern parrot jaw."
      ]
    },
    {
      name: "Gorgosaurus libratus",
      period: "Cretaceous",
      difficulty: "Medium",
      diet: "Carnivore",
      continent: "North America",
      group: "Tyrannosauridae",
      subgroup: "Albertosaurinae",
      length: 8,
      wiki: "Gorgosaurus",
      hints: [
        "It was a sleek, long-legged tyrannosaur that lived millions of years before T. rex.",
        "Its leg proportions indicate it was likely among the fastest large theropods.",
        "It coexisted with Daspletosaurus, sharing the apex predator niche by targeting different prey."
      ]
      },
      {
      name: "Yutyrannus huali",
      period: "Cretaceous",
      difficulty: "Medium",
      diet: "Carnivore",
      continent: "Asia",
      group: "Tyrannosauroidae",
      subgroup: "Proceratosauridae",
      length: 9,
      wiki: "Yutyrannus",
      hints: [
        "It was a large, early relative of Tyrannosaurus rex that lived in a surprisingly chilly, semi-forested environment in what is now China.",
        "It is currently the largest known dinosaur to be discovered with direct, unmistakable fossil evidence of a full coat of feathers.",
        "its SUPEEERRRR NICHE bro"
      ]
      },
      {
      name: "Oxalaia quilombensis",
      period: "Cretaceous",
      difficulty: "Hard",
      diet: "Carnivore",
      continent: "South America",
      group: "Spinosauridae",
      subgroup: "Spinosaurini",
      length: 13,
      wiki: "Oxalaia",
      hints: [
        "It was a massive, fish-eating theropod that inhabited the mangrove swamps of Late Cretaceous Brazil.",
        "It possessed a long, crocodile-like snout filled with conical teeth and a distinct neural spine sail along its back.",
        "Its js a bloody synonym of spinosaurus lad"
      ]
      },
      {
    name: "Torvosaurus tanneri",
    period: "Jurassic",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "North America",
    group: "Megalosauridae",
    subgroup: "Megalosaurinae",
    length: 10,
    wiki: "Torvosaurus",
    hints: [
      "A massive, heavily-built tetanuran from the Late Jurassic Morrison Formation.",
      "Apex predator that competed with Allosaurus, sporting short but robust arms with massive first-digit claws.",
      "The European species (T. gurneyi) is currently one of the largest known Jurassic theropods."
    ]
  },
  {
    name: "Nanuqsaurus hoglundii",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "North America",
    group: "Tyrannosauridae",
    subgroup: "Tyrannosaurinae",
    length: 5,
    wiki: "Nanuqsaurus",
    hints: [
      "A specialized tyrannosaurid recovered from the Late Cretaceous Prince Creek Formation of northern Alaska.",
      "Its name translates to 'polar bear lizard,' as it evolved inside the extreme arctic conditions of the ancient North Slope.",
      "Exhibited a diminished, small adult layout compared to its giant lower-latitude relatives, an adaptation to seasonal food resource drops."
    ]
  },
  {
    name: "Rajasaurus narmadensis",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "Asia",
    group: "Abelisauridae",
    subgroup: "Majungasaurinae",
    length: 9,
    wiki: "Rajasaurus",
    hints: [
      "An apex predator discovered in the Late Cretaceous Lameta Formation along the Narmada River valley of India.",
      "Possessed a unique, low, rounded horn configuration directly on its skull roof, formed by the fusion of its nasal and frontal bones.",
      "Closely related to South American and African abelisaurids, tracing the ancient tectonic breakup history of Gondwana."
    ]
  },
  {
    name: "Majungasaurus crenatissimus",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "Africa",
    group: "Abelisauridae",
    subgroup: "Majungasaurinae",
    length: 7,
    wiki: "Majungasaurus",
    hints: [
      "An apex predator from the Late Cretaceous Maevarano Formation of Madagascar.",
      "Characterized by an extremely broad, short skull, a single rounded horn on its frontal bones, and short stubby arms.",
      "Known from exceptional fossil preservation showing definitive pathologies indicating cannibalistic behavior."
    ]
  },
  {
    name: "Cryolophosaurus ellioti",
    period: "Jurassic",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "Antarctica",
    group: "Neotheropoda",
    subgroup: "Averostriformes",
    length: 6,
    wiki: "Cryolophosaurus",
    hints: [
      "Excavated from the Early Jurassic Hanson Formation on Mount Kirkpatrick.",
      "Informally nicknamed 'Elvisaurus' due to a unique, pompadour-like nasal crest that runs transversely across its skull.",
      "The first carnivorous dinosaur discovered and named from the frozen continent."
    ]
  },
  {
    name: "Tarbosaurus bataar",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Carnivore",
    continent: "Asia",
    group: "Tyrannosauridae",
    subgroup: "Tyrannosaurini",
    length: 10,
    wiki: "Tarbosaurus",
    hints: [
      "The apex predator of the Late Cretaceous Nemegt Formation in Mongolia.",
      "An Asian relative of T. rex, but built slightly more lightly with an even more reduced, rigid skull mechanism.",
      "Its jaw mechanics suggest it specialized in hunting large sauropods like Nemegtosaurus."
    ]
  },
  {
    name: "Masiakasaurus knopfleri",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "Africa",
    group: "Ceratosauria",
    subgroup: "Noasauridae",
    length: 2,
    wiki: "Masiakasaurus",
    hints: [
      "A small-bodied, bizarrely specialized noasaurid from the Maevarano Formation of Madagascar.",
      "Unique for its extreme 'procumbent' lower dentition, meaning its front teeth projected directly forward.",
      "Its forward-facing teeth were an adaptation likely specialized for gripping small, fast prey like fish or lizards."
    ]
  },
  {
    name: "Acrocanthosaurus atokensis",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Carnivore",
    continent: "North America",
    group: "Carcharodontosauria",
    subgroup: "Carcharodontosauridae",
    length: 11,
    wiki: "Acrocanthosaurus",
    hints: [
      "An Early Cretaceous apex predator whose remains span across Oklahoma, Texas, and Wyoming.",
      "Possessed greatly elongated neural spines along its spine, supporting a high ridge or hump of muscle.",
      "Famous for fossilized trackways in the Paluxy Riverbed showing it pursuing a sauropod dinosaur."
    ]
  },
  {
    name: "Concavenator corcovatus",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Carnivore",
    continent: "Europe",
    group: "Carcharodontosauria",
    subgroup: "Carcharodontosauridae",
    length: 6,
    wiki: "Concavenator",
    hints: [
      "Uncovered from the Konservat-Lagerstätte Las Hoyas formation of Spain.",
      "Features a bizarre, pointed hump formed by two highly elongated vertebrae directly over its pelvis.",
      "Preserved with small bumps on its ulna that many paleontologists interpret as quill knobs for proto-feathers."
    ]
  },
  {
    name: "Metriacanthosaurus parkeri",
    period: "Jurassic",
    difficulty: "Medium",
    diet: "Carnivore",
    continent: "Europe",
    group: "Metriacanthosauridae",
    subgroup: "Metriacanthosaurinae",
    length: 8,
    wiki: "Metriacanthosaurus",
    hints: [
      "A Late Jurassic allosauroid recovered from the Oxford Clay Formation of England.",
      "Its name means 'moderately-spined lizard,' representing a distinct branch outside of true allosaurids.",
      "Historically fell victim to the early 'wastebasket taxon' practice, originally named as a species of Megalosaurus."
    ]
  },
  {
    name: "Irritator challengeri",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Carnivore",
    continent: "South America",
    group: "Spinosauridae",
    subgroup: "Spinosaurinae",
    length: 8,
    wiki: "Irritator",
    hints: [
      "An Early Cretaceous spinosaurid from the Romualdo Formation of Brazil.",
      "Its name stems from the frustration of paleontologists dealing with artificial plaster additions made by commercial fossil dealers.",
      "Possessed a unique sagittal crest on its skull and a highly adapted lower jaw suited for rapid, piscivorous snapping."
    ]
  },
  {
    name: "Ichthyovenator laosensis",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "Asia",
    group: "Spinosauridae",
    subgroup: "Spinosaurinae",
    length: 8,
    wiki: "Ichthyovenator",
    hints: [
      "An unusual Early Cretaceous spinosaurid found in the Grès supérieurs Formation of Laos.",
      "Characterized by a unique 'sinuous' or wavy double-sail, split by a deep notch directly above its hips.",
      "Provides definitive proof that specialized semiaquatic spinosaurids successfully radiated into Asia."
    ]
  },
  {
    name: "Suchomimus tenerensis",
    period: "Cretaceous",
    difficulty: "Easy",
    diet: "Carnivore",
    continent: "Africa",
    group: "Spinosauridae",
    subgroup: "Ceratosuchopsini",
    length: 11,
    wiki: "Suchomimus",
    hints: [
      "Famous piscivorous dinosaur discovered in Niger by a team led by Paul Sereno.",
      "Features a long, low, crocodile-like skull snout and a low dorsal ridge instead of a tall sail.",
      "Equipped with a massive, sickle-like thumb claw (ungual) used to hook giant prehistoric fish from river systems."
    ]
  },
  {
    name: "Nanotyrannus lancensis",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "North America",
    group: "Tyrannosauroidae",
    subgroup: "Eutyrannosauria",
    length: 5,
    wiki: "Nanotyrannus",
    hints: [
      "A highly controversial taxon discovered in the Late Cretaceous Hell Creek Formation.",
      "Characterized by more blade-like teeth and longer arms than its famous contemporary, Tyrannosaurus.",
      "The vast majority of modern paleontologists view this specimen as a juvenile growth stage (ontogimorph) of T. rex."
    ]
  },
  {
    name: "Qianzhousaurus sinensis",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "Asia",
    group: "Tyrannosauridae",
    subgroup: "Alioramini",
    length: 9,
    wiki: "Qianzhousaurus",
    hints: [
      "A Late Cretaceous predator belonging to the long-snouted Alioramini tribe, found in southern China.",
      "Earning the famous public nickname 'Pinocchio rex' due to its exceptionally elongated, slender snout.",
      "Coexisted with larger tyrannosaurids, filling a distinct ecological niche as a fast, agile pursuit predator."
    ]
  },
  {
    name: "Albertosaurus sarcophagus",
    period: "Cretaceous",
    difficulty: "Easy",
    diet: "Carnivore",
    continent: "North America",
    group: "Tyrannosauridae",
    subgroup: "Albertosaurinae",
    length: 9,
    wiki: "Albertosaurus",
    hints: [
      "A Late Cretaceous tyrannosaurid native to the Horseshoe Canyon Formation of Alberta, Canada.",
      "Slightly smaller, sleeker, and faster than Tyrannosaurus rex, showing distinct small bony crests in front of its eyes.",
      "A famous bonebed containing over 20 individuals suggests this predator may have lived or hunted in packs."
    ]
    },
    {
    name: "Velociraptor mongoliensis",
    period: "Cretaceous",
    difficulty: "Easy",
    diet: "Carnivore",
    continent: "Asia",
    group: "Dromaeosauridae",
    subgroup: "Velociraptorinae",
    length: 2,
    wiki: "Velociraptor",
    hints: [
      "A small, heavily feathered dromaeosaurid discovered in the Late Cretaceous Djadochta Formation of Mongolia.",
      "Features a long, low skull with an upturned snout and a remarkably stiffened tail supported by bony rod-like extensions.",
      "Famously preserved in the 'Fighting Dinosaurs' specimen, permanently locked in combat with a Protoceratops."
    ]
  },
  {
    name: "Dakotaraptor steini",
    period: "Cretaceous",
    difficulty: "Easy",
    diet: "Carnivore",
    continent: "North America",
    group: "Maniraptoriform",
    subgroup: "Unenlagiinae",
    length: 5,
    wiki: "Dakotaraptor",
    hints: [
      "A large-bodied, giant dromaeosaurid discovered in the Late Cretaceous Hell Creek Formation.",
      "Coexisted with Tyrannosaurus rex, likely filling the ecological niche of an agile, mid-sized pursuit predator.",
      "The ulna bone reveals definitive evidence of prominent quill knobs, proving this giant dromaeosaur possessed long vaned feathers."
    ]
  },
  {
    name: "Dromaeosaurus albertensis",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Carnivore",
    continent: "North America",
    group: "Dromaeosauridae",
    subgroup: "Dromaeosaurinae",
    length: 2,
    wiki: "Dromaeosaurus",
    hints: [
      "The type genus of its family, recovered from the Late Cretaceous Dinosaur Park Formation of Alberta.",
      "Distinct from sleeker raptors due to its remarkably robust, deep skull and thick, heavy jaw mechanics.",
      "Its jaw engineering suggests a reliance on crushing power to dispatch prey, rather than relying solely on sickle-claw slashing."
    ]
  },
  {
    name: "Deinonychus antirrhopus",
    period: "Cretaceous",
    difficulty: "Easy",
    diet: "Carnivore",
    continent: "North America",
    group: "Dromaeosauridae",
    subgroup: "Eudromaeosauria",
    length: 3,
    wiki: "Deinonychus",
    hints: [
      "The dromaeosaurid that inspired the modern conception of raptors in popular culture, including Jurassic Park.",
      "Its description by John Ostrom in 1969 ignited the 'Dinosaur Renaissance,' shifting the public perception of dinosaurs into active, warm-blooded animals.",
      "Fossil associations with Tenontosaurus skeletons heavily support the hypothesis that this raptor may have engaged in cooperative pack hunting."
    ]
  },
  {
    name: "Atrociraptor marshalli",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Carnivore",
    continent: "North America",
    group: "Dromaeosauridae",
    subgroup: "Saurornitholestinae",
    length: 2,
    wiki: "Atrociraptor",
    hints: [
      "A small raptor known from partial jaw specimens found in the Late Cretaceous Horseshoe Canyon Formation.",
      "Possessed an unusually short, deep snout containing specialized teeth that angled drastically backward.",
      "Unlike its contemporary Saurornitholestes, its dental morphology indicates adaptations for forcefully biting larger, struggling prey."
    ]
  },
  {
    name: "Austroraptor cabazai",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "South America",
    group: "Dromaeosauridae",
    subgroup: "Unenlagiinae",
    length: 5,
    wiki: "Austroraptor",
    hints: [
      "A giant dromaeosaurid belonging to the Unenlagiinae subfamily, found in the Late Cretaceous Allen Formation of Argentina.",
      "Highly unusual for its family due to its extremely elongated, low snout and short, stubby forelimbs.",
      "Equipped with small, conical teeth lacked serrations, indicating a specialized diet likely consisting of fish or small aquatic prey."
    ]
  },
  {
    name: "Pyroraptor olympius",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Carnivore",
    continent: "Europe",
    group: "Dromaeosauridae",
    subgroup: "incertae sedis",
    length: 2,
    wiki: "Pyroraptor",
    hints: [
      "A small European raptor discovered in the Late Cretaceous Second Rouge Formation of southern France.",
      "Its generic name means 'fire thief,' earned because its scarce elements were salvaged directly following a massive forest fire.",
      "Provides vital evidence of dromaeosaurid radiation across the European archipelago during the twilight of the Cretaceous."
    ]
  },
  {
    name: "Imperobator antarcticus",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "Antarctica",
    group: "Paraves",
    subgroup: "incertae sedis",
    length: 2,
    wiki: "Imperobator",
    hints: [
      "A non-avian paravian apex predator discovered in the Late Cretaceous Snow Hill Island Formation of the Antarctic Peninsula.",
      "Its genus name translates to 'imperial warrior,' reflecting its role as a top carnivore in its high-latitude ecosystem.",
      "Unlike standard dromaeosaurids, its foot morphology indicates it lacked a highly specialized, hyperextensible 'sickle-claw' on the second digit."
    ]
  },
  {
    name: "Edmontonia longiceps",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "North America",
    group: "Ankylosauria",
    subgroup: "Nodosauridae",
    length: 6,
    wiki: "Edmontonia",
    hints: [
      "A large nodosaurid from the Late Cretaceous Horseshoe Canyon Formation of Alberta.",
      "Lacked a tail club, but featured massive, forward-pointing spikes projecting from its shoulders to deter predators.",
      "Its skull armor consists of a single, fused central plate between the eyes, distinct from Panoplosaurus."
    ]
  },
  {
    name: "Ankylosaurus magniventris",
    period: "Cretaceous",
    difficulty: "Easy",
    diet: "Herbivore",
    continent: "North America",
    group: "Ankylosauria",
    subgroup: "Ankylosauridae",
    length: 8,
    wiki: "Ankylosaurus",
    hints: [
      "The largest known armored dinosaur, discovered in the Late Cretaceous Hell Creek Formation.",
      "Features a massive tail club composed of fused osteoderms and deeply reinforced, air-chambered skull bones.",
      "Its extremely wide, boxy body allowed for a massive digestive fermentation vat to process tough low-lying vegetation."
    ]
  },
  {
    name: "Euoplocephalus tutus",
    period: "Cretaceous",
    difficulty: "Easy",
    diet: "Herbivore",
    continent: "North America",
    group: "Ankylosauria",
    subgroup: "Ankylosauridae",
    length: 6,
    wiki: "Euoplocephalus",
    hints: [
      "One of the most frequently recovered ankylosaurids from the Late Cretaceous Dinosaur Park Formation.",
      "Its name means 'well-armored head', possessing complex bony shutters that could fold over its eyelids for protection.",
      "Its skeleton features broad, plate-like osteoderms and a heavy, transverse-bladed tail club."
    ]
  },
  {
    name: "Nodosaurus textilis",
    period: "Cretaceous",
    difficulty: "Easy",
    diet: "Herbivore",
    continent: "North America",
    group: "Ankylosauria",
    subgroup: "Nodosauridae",
    length: 5,
    wiki: "Nodosaurus",
    hints: [
      "Resembles Ankylosaurus, yet lacks a tail club.",
      "Its body was covered in rectangular, pebble-like dermal plates arranged in neat, fabric-like rows.",
      "Lacked heavy shoulder spikes or a tail club, relying purely on low-profile, carpet-like armor matrices."
    ]
  },
  {
    name: "Borealopelta markmitchelli",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "North America",
    group: "Ankylosauria",
    subgroup: "Nodosauridae",
    length: 6,
    wiki: "Borealopelta",
    hints: [
      "An Early Cretaceous nodosaurid discovered in a marine oil sands mine in Alberta, Canada.",
      "Represented by an exceptionally well-preserved 3D 'mummy' complete with intact skin, osteoderms, and stomach contents.",
      "Mass spectrometry of its organic compounds revealed countershading camouflage, hinting at intense apex predator pressure."
    ]
  },
  {
    name: "Antarctopelta oliveroi",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Antarctica",
    group: "Ankylosauria",
    subgroup: "Nodosauridae",
    length: 4,
    wiki: "Antarctopelta",
    hints: [
      "The first dinosaur genus ever discovered in Antarctica, excavated from the Late Cretaceous Santa Marta Formation.",
      "A small, stocky nodosaurid displaying highly variable osteoderm shapes, including leaf-like structures.",
      "Survives in a high-latitude ecosystem that experienced months of complete winter darkness."
    ]
  },
  {
    name: "Gastonia burgei",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "North America",
    group: "Ankylosauria",
    subgroup: "Nodosauridae",
    length: 5,
    wiki: "Gastonia_(dinosaur)",
    hints: [
      "An Early Cretaceous ankylosaur from the Cedar Mountain Formation of Utah, often found alongside Utahraptor.",
      "Features a continuous pelvic shield of fused armor plates and a tail flanked by blade-like osteoderms that sheared like scissors.",
      "A basal member of its group, displaying a transitionary form with traits shared by both nodosaurs and ankylosaurs."
    ]
  },
  {
    name: "Sauropelta edwardsorum",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "North America",
    group: "Ankylosauria",
    subgroup: "Nodosauridae",
    length: 5,
    wiki: "Sauropelta",
    hints: [
      "An Early Cretaceous nodosaurid commonly found across the Cloverly Formation of Montana and Wyoming.",
      "Possessed an exceptionally long tail comprising half its total body length and massive spikes projecting outward from its neck.",
      "Its footprint trackways suggest it was a highly stable, quadrupedal walker adapted to flat floodplain environments."
    ]
  },
  {
    name: "Minmi paravertebra",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Australia",
    group: "Ankylosauria",
    subgroup: "Ankylosauridae",
    length: 3,
    wiki: "Minmi_(dinosaur)",
    hints: [
      "A small, primitive ankylosaur recovered from the Early Cretaceous Bungil Formation of Queensland.",
      "Named after Minmi Crossing, it features unique 'paravertebrae'—bony tendons running along its spine to reinforce its back.",
      "Its small size and long hind limbs indicate it was significantly more agile than its giant Late Cretaceous relatives."
    ]
  },
  {
    name: "Triceratops horridus",
    period: "Cretaceous",
    difficulty: "Easy",
    diet: "Herbivore",
    continent: "North America",
    group: "Marginocephalian",
    subgroup: "Chasmosaurinae",
    length: 9,
    wiki: "Triceratops",
    hints: [
      "A massive, iconic ceratopsid from the Late Cretaceous Hell Creek Formation.",
      "Possessed three large facial horns and a solid, bone-filled neck frill entirely lacking open windows (fenestrae).",
      "The final and largest of its lineage, locked in a well-documented predatory dynamic with Tyrannosaurus rex."
    ]
  },
  {
    name: "Pachyrhinosaurus lakustai",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "North America",
    group: "Marginocephalian",
    subgroup: "Centrosaurinae",
    length: 6,
    wiki: "Pachyrhinosaurus",
    hints: [
      "A Late Cretaceous centrosaurine known from dense mass-mortality bonebeds in Alberta and Alaska.",
      "Lacked long facial horns, replacing them with a massive, flat, rough bony boss covering its nose and forehead.",
      "The back of its frill displays highly ornate ornamentation, including a central pair of curved hornlets."
    ]
  },
  {
    name: "Diabloceratops eatoni",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "North America",
    group: "Marginocephalian",
    subgroup: "Centrosaurinae",
    length: 5,
    wiki: "Diabloceratops",
    hints: [
      "A basal centrosaurine discovered in the Late Cretaceous Wahweap Formation of Utah.",
      "Its name translates to 'devil-horned face', earned due to a pair of long spikes curving upward from the top of its frill.",
      "Features a relatively long snout and short brow horns, helping paleontologists trace the early evolution of ceratopsid frills."
    ]
  },
  {
    name: "Chasmosaurus belli",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "North America",
    group: "Marginocephalian",
    subgroup: "Chasmosaurinae",
    length: 5,
    wiki: "Chasmosaurus",
    hints: [
      "A classic long-frilled ceratopsid from the Late Cretaceous Dinosaur Park Formation of Alberta.",
      "Its name means 'opening lizard', referencing the exceptionally large, window-like holes (fenestrae) in its frill skeleton.",
      "Features short brow horns and a broad, heart-shaped frill margin trimmed with tiny osteoderms."
    ]
  },
  {
    name: "Aquilops americanus",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "North America",
    group: "Marginocephalian",
    subgroup: "Neoceratopsia",
    length: 1,
    wiki: "Aquilops",
    hints: [
      "A tiny, primitive early ceratopsian recovered from the Early Cretaceous Cloverly Formation of Montana.",
      "Its name means 'eagle face', showcasing a sharply hooked rostral bone that forms a beak-like profile.",
      "Closely related to Asian forms, providing critical evidence of early dinosaur migration across Beringia."
    ]
  },
  {
    name: "Pentaceratops sternbergii",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "North America",
    group: "Marginocephalian",
    subgroup: "Chasmosaurinae",
    length: 6,
    wiki: "Pentaceratops",
    hints: [
      "A large chasmosaurine from the Late Cretaceous Kirtland Formation of New Mexico.",
      "Its name means 'five-horned face', counting its three true horns alongside prominent, pointed jugal bones on its cheeks.",
      "Once held the record for the largest skull of any land animal, featuring an elongated, rectangular frill structure."
    ]
  },
  {
    name: "Torosaurus latus",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "North America",
    group: "Marginocephalian",
    subgroup: "Chasmosaurinae",
    length: 8,
    wiki: "Torosaurus",
    hints: [
      "A giant Late Cretaceous chasmosaurine that shared its environment with Triceratops.",
      "Possessed an enormous, elongated frill containing two large circular openings, distinct from its contemporary relatives.",
      "At the center of an intense scientific debate regarding whether it represents an independent genus or a fully mature adult Triceratops."
    ]
  },
  {
    name: "Lokiceratops rangiformis",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "North America",
    group: "Marginocephalian",
    subgroup: "Centrosaurinae",
    length: 7,
    wiki: "Lokiceratops",
    hints: [
      "A massive centrosaurine ceratopsid discovered in the Late Cretaceous Judith River Formation of Montana.",
      "Named after the Norse god Loki due to a set of giant, curved, blade-like horns along the upper edge of its frill.",
      "Lacked a nasal horn entirely, demonstrating high levels of regional frill variation among contemporary horned dinosaurs."
    ]
  },
  {
    name: "Microceratus gobiensis",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "Asia",
    group: "Marginocephalian",
    subgroup: "Neoceratopsia",
    length: 1,
    wiki: "Microceratus",
    hints: [
      "A tiny, highly primitive neoceratopsian from the Late Cretaceous sediments of the Gobi Desert.",
      "Walked primarily on two legs (bipedal) and possessed sharp teeth adapted for shearing tough desert shrubbery.",
      "One of the smallest known ceratopsians, retaining a minuscule frill ridge at the back of its skull."
    ]
  },
  {
    name: "Nasutoceratops titusi",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "North America",
    group: "Marginocephalian",
    subgroup: "Centrosaurinae",
    length: 5,
    wiki: "Nasutoceratops",
    hints: [
      "A unique centrosaurine from the Late Cretaceous Kaiparowits Formation of Utah.",
      "Possessed an unusually short, deep snout with an oversized nasal cavity and long brow horns that curved forward like cattle horns.",
      "Its unique skull design required the creation of a distinct, early-diverging branch of the centrosaurine family tree."
    ]
  },
  {
    name: "Sinoceratops zhuchengensis",
    period: "Cretaceous",
    difficulty: "Easy",
    diet: "Herbivore",
    continent: "Asia",
    group: "Marginocephalian",
    subgroup: "Centrosaurinae",
    length: 6,
    wiki: "Sinoceratops",
    hints: [
      "First large ceratopsid discovered in Asia.",
      "A member of the centrosaurine family, featuring a series of forward-curving, hook-like hornlets crowning its frill.",
      "Significantly larger than its North American centrosaurine relatives, filling the dominant herbivore niche in its ecosystem."
    ]
  },
  {
    name: "Psittacosaurus mongoliensis",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Asia",
    group: "Marginocephalian",
    subgroup: "Ceratopsia",
    length: 2,
    wiki: "Psittacosaurus",
    hints: [
      "A highly successful, primitive early ceratopsian recovered across the Early Cretaceous Yixian Formation.",
      "Nicknamed the 'parrot lizard' due to its tall, deep beak; exceptional specimens preserve long, quill-like bristles on its tail.",
      "Known from hundreds of specimens tracking every age bracket, making it one of the most thoroughly understood dinosaurs."
    ]
  },
  {
    name: "Stegosaurus stenops",
    period: "Jurassic",
    difficulty: "Easy",
    diet: "Herbivore",
    continent: "North America",
    group: "Stegosauria",
    subgroup: "Stegosauridae",
    length: 9,
    wiki: "Stegosaurus",
    hints: [
      "The quintessential plated dinosaur from the Late Jurassic Morrison Formation.",
      "Features an alternating arrangement of large, leaf-shaped dermal plates along its back and a four-spiked 'thagomizer' on its tail.",
      "Fossil evidence shows a tiny skull housing a brain often compared to the size of a walnut."
    ]
  },
  {
    name: "Gigantspinosaurus sichuanensis",
    period: "Jurassic",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Asia",
    group: "Stegosauria",
    subgroup: "Huayangosauridae",
    length: 4,
    wiki: "Gigantspinosaurus",
    hints: [
      "A primitive stegosaur unearthed from the Late Jurassic Upper Shaximiao Formation of China.",
      "Despite its giant-sounding name, it was relatively small but sported disproportionately massive shoulder spikes (parascapular spines).",
      "Its back features small plates, proving it relied primarily on active spike-slashing defense rather than passive plate shielding."
    ]
  },
  {
    name: "Wuerhosaurus homheni",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Asia",
    group: "Stegosauria",
    subgroup: "Stegosauridae",
    length: 7,
    wiki: "Wuerhosaurus",
    hints: [
      "One of the last surviving stegosaurs, discovered in the Early Cretaceous Tugulu Group of China.",
      "Distinctly features unusually low, wide, rectangular plates rather than the tall, pointed shapes seen in typical stegosaurs.",
      "Its low profile and downward-sloping pelvis suggest it specialized in feeding entirely on ground-level Cretaceous flora."
    ]
  },
  {
    name: "Huayangosaurus taibaii",
    period: "Jurassic",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Asia",
    group: "Stegosauria",
    subgroup: "Huayangosauridae",
    length: 4,
    wiki: "Huayangosaurus",
    hints: [
      "A highly basal Middle Jurassic stegosaur from the Lower Shaximiao Formation of Sichuan, China.",
      "Serves as the type genus for its own family, possessing a wider skull and retaining primitive premaxillary teeth lost in later stegosaurs.",
      "Features spike-like plates running down its dorsal side and a pair of long, curved shoulder spines."
    ]
  },
  {
    name: "Chungkingosaurus jiangbeiensis",
    period: "Jurassic",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Asia",
    group: "Stegosauria",
    subgroup: "Huayangosauridae",
    length: 4,
    wiki: "Chungkingosaurus",
    hints: [
      "A small-bodied stegosaur found within the Late Jurassic Upper Shaximiao Formation of China.",
      "Possessed a highly compressed, deep skull and unique thick tail spikes that projected upward and outward like fan blades.",
      "Coexisted alongside larger sauropods and theropods, occupying a specialized ecological niche for low-tier browsing."
    ]
  },
  {
    name: "Argentinosaurus huinculensis",
    period: "Cretaceous",
    difficulty: "Easy",
    diet: "Herbivore",
    continent: "South America",
    group: "Eusauropoda",
    subgroup: "Titanosauria",
    length: 35,
    wiki: "Argentinosaurus",
    hints: [
      "Discovered in the Late Cretaceous Huincul Formation, it is widely considered one of the largest land animals of all time.",
      "Known from massive partial remains, including a single backbone vertebra measuring over 1.5 meters tall.",
      "Its immense weight required specialized, inter-locking vertebral connections (hyposphene-hypantrum) to support its spine."
    ]
  },
  {
    name: "Brachiosaurus altithorax",
    period: "Jurassic",
    difficulty: "Easy",
    diet: "Herbivore",
    continent: "North America",
    group: "Eusauropoda",
    subgroup: "Brachiosauridae",
    length: 22,
    wiki: "Brachiosaurus",
    hints: [
      "A famous, towering sauropod recovered from the Late Jurassic Morrison Formation of Colorado.",
      "Highly unusual among sauropods due to its front legs being significantly longer than its hind legs, creating a giraffe-like profile.",
      "Possessed a highly vaulted, domed skull skull with upward-facing nasal structures optimized for high-canopy browsing."
    ]
  },
  {
    name: "Magyarosaurus dacus",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Europe",
    group: "Eusauropoda",
    subgroup: "Titanosauria",
    length: 6,
    wiki: "Magyarosaurus",
    hints: [
      "A famous, remarkably small titanosaurian sauropod recovered from the Late Cretaceous Sânpetru Formation of Romania.",
      "Serves as a classic textbook example of 'insular dwarfism,' adapting to a smaller body layout due to the limited food resources of Hațeg Island.",
      "Histological bone structure analysis confirmed that the small fossils belonged to fully mature adults, not juveniles."
    ]
  },
  {
    name: "Europasaurus holgeri",
    period: "Jurassic",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "Europe",
    group: "Eusauropoda",
    subgroup: "Brachiosauridae",
    length: 6,
    wiki: "Europasaurus",
    hints: [
      "An extraordinary macronarian sauropod excavated from the Late Jurassic marine carbonate beds of Lower Saxony, Germany.",
      "An early example of island dwarfism, resulting from the isolation of a sauropod population on an ancient European landmass archipelago.",
      "Its dwarfed adult dimensions evolved via 'progenesis,' meaning it rapidly halted its physical growth early in its developmental cycle."
    ]
  },
  {
    name: "Lusotitan atalaiensis",
    period: "Jurassic",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Europe",
    group: "Eusauropoda",
    subgroup: "Brachiosauridae",
    length: 22,
    wiki: "Lusotitan",
    hints: [
      "A massive brachiosaurid sauropod recovered from the Late Jurassic Lourinhã Formation of Portugal.",
      "Originally described as a species of Brachiosaurus before anatomical differences in its vertebrae and forelimbs led to its own genus assignment.",
      "One of the largest known European dinosaurs, using its highly elevated posture to browse high-canopy gymnosperm forests."
    ]
  },
  {
    name: "Amargasaurus cazaui",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "South America",
    group: "Eusauropoda",
    subgroup: "Dicraeosauridae",
    length: 10,
    wiki: "Amargasaurus",
    hints: [
      "A highly unique, relatively small sauropod from the Early Cretaceous La Amarga Formation of Argentina.",
      "Characterized by two parallel rows of extremely tall, backward-pointing spines running along its neck and back.",
      "Paleontologists debate whether these elongated neck spines supported a skin sail or were covered in horn sheets for defense."
    ]
  },
  {
    name: "Mamenchisaurus constructus",
    period: "Jurassic",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "Asia",
    group: "Eusauropoda",
    subgroup: "Mamenchisauridae",
    length: 22,
    wiki: "Mamenchisaurus",
    hints: [
      "A spectacular Chinese sauropod known for possessing one of the longest necks relative to body size in evolutionary history.",
      "Its neck was composed of up to 19 elongated vertebrae, making up nearly half of the animal's entire total length.",
      "The neck bones were heavily reinforced with overlapping rod-like ribs, keeping the neck rigid but stable."
    ]
  },
  {
    name: "Camarasaurus supremus",
    period: "Jurassic",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "North America",
    group: "Eusauropoda",
    subgroup: "Camarasauridae",
    length: 18,
    wiki: "Camarasaurus",
    hints: [
      "The most common and abundant sauropod skull material recovered from the Late Jurassic Morrison Formation.",
      "Its name means 'chambered lizard', referencing the large, hollow spaces inside its vertebrae to decrease mass.",
      "Possessed tough, spoon-shaped (spatulate) teeth throughout its jaws, allowing it to chew much tougher vegetation than Diplodocus."
    ]
  },
  {
    name: "Dreadnoughtus schrani",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "South America",
    group: "Eusauropoda",
    subgroup: "Titanosauria",
    length: 26,
    wiki: "Dreadnoughtus",
    hints: [
      "A giant titanosaur from the Late Cretaceous Cerro Fortaleza Formation of Argentina, known from remarkably complete skeletal remains.",
      "Named after dreadnought battleships because its immense size made adult individuals virtually immune to predator attacks.",
      "Its highly preserved limb bone dimensions allow scientists to calculate its massive body weight with high accuracy."
    ]
  },
  {
    name: "Nigersaurus taqueti",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "Africa",
    group: "Eusauropoda",
    subgroup: "Rebbachisauridae",
    length: 9,
    wiki: "Nigersaurus",
    hints: [
      "A bizarre, specialized low-level browser discovered in the Early Cretaceous Elrhaz Formation of Niger.",
      "Features a wide, straight, shovel-shaped mouth containing more than 500 teeth arranged in tightly packed, replaceable batteries.",
      "Its skull bones were so thin and translucent that its head adapted strictly to point downward like a lawnmower."
    ]
  },
  {
    name: "Titanosaurus indicus",
    period: "Cretaceous",
    difficulty: "Easy",
    diet: "Herbivore",
    continent: "Asia",
    group: "Eusauropoda",
    subgroup: "Titanosauria",
    length: 12,
    wiki: "Titanosaurus",
    hints: [
      "The historical type genus of its massive family, originally described from Late Cretaceous sediments in India.",
      "Historically suffered as a 'wastebasket taxon', with many separate, fragmentary sauropod bones incorrectly assigned to it.",
      "Possessed tiny, armor-like bony plates (osteoderms) embedded in its skin, a trait unique to its specific sauropod group."
    ]
  },
  {
    name: "Ouranosaurus nigeriensis",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "Africa",
    group: "Styracosterna",
    subgroup: "N/A",
    length: 7,
    wiki: "Ouranosaurus",
    hints: [
      "An unusual Early Cretaceous Hadrosaur recovered from the Elrhaz Formation of Niger.",
      "Possessed highly elongated neural spines along its backbone, forming a distinctive, tall ridge or sail across its body.",
      "Features a long, flat snout and a unique bony bump between its eyes, coexisting with the giant spinosaur Suchomimus."
    ]
  },
  {
    name: "Shantungosaurus giganteus",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "Asia",
    group: "Hadrosauridae",
    subgroup: "Saurolophinae",
    length: 15,
    wiki: "Shantungosaurus",
    hints: [
      "An absolute giant from the Late Cretaceous Wangshi Group of China, recognized as the largest non-sauropod dinosaur known.",
      "A flat-headed (saurolophine) duck-billed dinosaur with a massive, heavy beak and hundreds of tightly packed chewing teeth.",
      "Its sheer structural mass allowed it to grow larger than many contemporary theropods, relying on size for protection."
    ]
  },
  {
    name: "Muttaburrasaurus langdoni",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Australia",
    group: "Ornithopoda",
    subgroup: "incertae sedis",
    length: 8,
    wiki: "Muttaburrasaurus",
    hints: [
      "A large, robust potential Iguanodontian from the Early Cretaceous Mackunda Formation of Queensland.",
      "Features a distinctively hollow, bulbous upward inflation on its snout, likely used as a resonating chamber for vocal communication.",
      "Its specialized jaw mechanics show shearing teeth rather than grinding batteries, a unique trait among advanced ornithopods."
    ]
  },
  {
    name: "Olorotitan arharensis",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "Asia",
    group: "Hadrosauridae",
    subgroup: "Lambeosaurinae",
    length: 8,
    wiki: "Olorotitan",
    hints: [
      "A beautifully complete lambeosaurine duck-bill discovered in the Late Cretaceous Kundur Formation of Russia.",
      "Possessed a massive, hollow, fan-shaped bony crest on its head that pointed backward like a hatchet blade.",
      "Its skeleton displays an unusually high number of neck vertebrae, giving it an elongated, swan-like posture."
    ]
  },
  {
    name: "Tethyshadros insularis",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Europe",
    group: "Hadrosauromorpha",
    subgroup: "Telmatosauridae",
    length: 4,
    wiki: "Tethyshadros",
    hints: [
      "A primitive, dwarfed hadrosauromorph discovered in the Late Cretaceous Liburnia Formation of northeastern Italy.",
      "Lived on a small island within the ancient Tethys Ocean, developing specialized elongated fingers and unique foot scaling for traversing rocky terrain.",
      "The exceptionally preserved type specimen, nicknamed 'Antonio,' is one of the most complete dinosaur skeletons ever found in Europe."
    ]
  },
  {
    name: "Tsintaosaurus spinorhinus",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "Asia",
    group: "Hadrosauridae",
    subgroup: "Lambeosaurinae",
    length: 8,
    wiki: "Tsintaosaurus",
    hints: [
      "A Late Cretaceous Chinese lambeosaurine hadrosaur that was historically reconstructued with a bizarre, forward-pointing horn.",
      "Modern skull re-examinations proved that this 'horn' was actually the broken back-support wall of a much larger, hollow crest.",
      "Possessed a highly complex network of nasal passages inside its head, used to project distinct warning sounds to its herd."
    ]
  },
  {
    name: "Dryosaurus altus",
    period: "Jurassic",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "North America",
    group: "Ornithopoda",
    subgroup: "Dryosauridae",
    length: 3,
    wiki: "Dryosaurus",
    hints: [
      "A small, lightweight, fast-running ornithopod discovered throughout the Late Jurassic Morrison Formation.",
      "Possessed large orbits (eye sockets), a horn-covered beak, and completely lacked teeth in the very front of its mouth.",
      "Depended entirely on long, slender hind legs and an agile build to outrun faster Morrison predators like Ceratosaurus."
    ]
  },
  {
    name: "Hypsilophodon foxii",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Europe",
    group: "Ornithopoda",
    subgroup: "Hypsilophodontidae",
    length: 2,
    wiki: "Hypsilophodon",
    hints: [
      "A small, classic Early Cretaceous herbivore recovered from the Wessex Formation of the Isle of Wight, England.",
      "Early paleontological interpretations incorrectly claimed it lived in trees; modern studies prove it was a strictly ground-dwelling runner.",
      "Retained primitive traits lost in later iguanodontians, including a row of small teeth inside its upper premaxilla beak."
    ]
  },
 {
    name: "Daspletosaurus torosus",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Carnivore",
    continent: "North America",
    group: "Tyrannosauridae",
    subgroup: "Daspletosaurini",
    length: 9,
    wiki: "Daspletosaurus",
    hints: [
      "A heavily-built apex predator recovered from the Late Cretaceous Oldman and Dinosaur Park Formations.",
      "Coexisted with the more gracile tyrannosaurid Albertosaurus, representing a classic case of ecological niche partitioning.",
      "Possessed unique, massive bony crests over its eyes and extremely thick, bone-crushing teeth."
    ]
  },
  {
    name: "Megalosaurus bucklandii",
    period: "Jurassic",
    difficulty: "Easy",
    diet: "Carnivore",
    continent: "Europe",
    group: "Megalosauridae",
    subgroup: "Megalosaurinae",
    length: 6,
    wiki: "Megalosaurus",
    hints: [
      "Discovered in the Middle Jurassic Taynton Limestone Formation of England, this is the first non-avian dinosaur genus ever scientifically named.",
    "Historically reconstructed as a giant quadrupedal lizard before modern science understood bipedal theropod stance.",
      "A robust, basal tetanuran equipped with powerful arms armed with large claws and blade-like, serrated teeth."
    ]
  },{
    name: "Mapusaurus roseae",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Carnivore",
    continent: "South America",
    group: "Carcharodontosauria",
    subgroup: "Carcharodontosaurinae",
    length: 12,
    wiki: "Mapusaurus",
    hints: [
      "A colossal apex predator excavated from the Late Cretaceous Huincul Formation of Argentina.",
      "Discovered in a massive monospecific bonebed containing multiple individuals, suggesting potential pack-hunting behavior targeting giant sauropods like Argentinosaurus.",
      "Closely related to Giganotosaurus, but distinguished by subtle narrowings in its skull roof and lower jaw structures."
    ]
  },
  {
    name: "Alioramus remotus",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "Asia",
    group: "Tyrannosauridae",
    subgroup: "Alioramini",
    length: 6,
    wiki: "Alioramus",
    hints: [
      "A long-snouted, gracile tyrannosaurid from the Late Cretaceous Nemegt Formation of Mongolia.",
      "Features a distinct row of five small, bony bumps or crestlets running along the top of its nasal bones.",
      "Coexisted with the much larger Tarbosaurus, filling a specialized niche for fast, agile pursuit of smaller prey."
    ]
  },
  {
    name: "Rugops primus",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "Africa",
    group: "Abelisauridae",
    subgroup: "N/A",
    length: 6,
    wiki: "Rugops",
    hints: [
      "Discovered in the Late Cretaceous Echkar Formation of Niger by Paul Sereno's team.",
      "Its name means 'wrinkled face,' due to a heavily grooved and blood vessel-mapped skull surface.",
      "Possessed a highly delicate, weak skull structure with two rows of small holes along its snout, suggesting it was primarily a scavenger."
    ]
  },
  {
    name: "Yangchuanosaurus shangyouensis",
    period: "Jurassic",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "Asia",
    group: "Carnosauria",
    subgroup: "Metriacanthosauridae",
    length: 8,
    wiki: "Yangchuanosaurus",
    hints: [
      "A dominant apex predator excavated from the Late Jurassic Upper Shaximiao Formation of China.",
      "Possessed a deep, massive skull equipped with rugose bony ridges over its snout and a highly muscular neck.",
      "Represented by exceptionally complete skeletal material showing it was the primary hunter of contemporary sauropods like Mamenchisaurus."
    ]
  },
  {
    name: "Moros intrepidus",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "North America",
    group: "Tyrannosauroidae",
    subgroup: "Pantyrannosauria",
    length: 2,
    wiki: "Moros_intrepidus",
    hints: [
      "A minuscule, cursorial early tyrannosauroid discovered in the Late Cretaceous Cedar Mountain Formation of Utah.",
      "Its genus name translates to 'harbinger of doom,' bridging a massive 70-million-year gap in North American tyrannosaur evolution.",
      "Demonstrates that the ancestors of giant apex predators started out as highly agile, lightweight, wall-running hunters."
    ]
  },
  {
    name: "Raptorex kriegsteini",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "Asia",
    group: "Tyrannosauroidae",
    subgroup: "Eutyrannosauria",
    length: 3,
    wiki: "Raptorex",
    hints: [
      "A small-bodied tyrannosauroid that caused major scientific debate regarding its exact geologic age and location.",
      "Features an exact miniature blueprint of a giant tyrannosaurid, including an oversized skull and highly reduced two-fingered arms.",
      "Widely considered by modern cladistic analyses to represent a juvenile specimen of Tarbosaurus, rather than a unique adult genus."
    ]
  },
  {
    name: "Teratophoneus curriei",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "North America",
    group: "Tyrannosauridae",
    subgroup: "Teratophoneini",
    length: 6,
    wiki: "Teratophoneus",
    hints: [
      "A southern tyrannosaurid recovered from the Late Cretaceous Kaiparowits Formation of Utah.",
      "Distinct from northern forms due to its unusually short, deep skull and fewer teeth, suggesting unique jaw-loading mechanics.",
      "Provides crucial evidence for regional endemism, proving southern Laramidian dinosaurs evolved separately from northern ones."
    ]
  },
  {
    name: "Eustreptospondylus oxoniensis",
    period: "Jurassic",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "Europe",
    group: "Megalosauridae",
    subgroup: "Eustreptospondylinae",
    length: 6,
    wiki: "Eustreptospondylus",
    hints: [
      "A Middle Jurassic megalosaurid known from an exceptionally complete juvenile skeleton found in the Oxford Clay Formation of England.",
      "Its fossils were recovered from marine sediments, indicating it likely combed ancient European island shorelines looking for carcasses or marine prey.",
      "Possessed highly primitive, elongated vertebrae architectures that link early theropods to advanced tetanurans."
    ]
  },
  {
    name: "Neovenator salerii",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "Europe",
    group: "Carnosauria",
    subgroup: "Carcharodontosauria",
    length: 8,
    wiki: "Neovenator",
    hints: [
      "An Early Cretaceous carcharodontosaur unearthed from the Wessex Formation of the Isle of Wight, England.",
      "Its name means 'new hunter,' serving as the type genus for a distinct lineage of slender, long-legged predators.",
      "Exceptional skull fossils show a highly complex network of neurovascular cavities in its snout, likely used as tactile sensory organs."
    ]
  },
  {
    name: "Monolophosaurus jiangi",
    period: "Jurassic",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "Asia",
    group: "Averostra",
    subgroup: "Tetanurae",
    length: 5,
    wiki: "Monolophosaurus",
    hints: [
      "A unique Middle Jurassic basal tetanuran discovered in the Shishugou Formation of Xinjiang, China.",
      "Characterized by a prominent, hollow bony crest running down the center of its skull from the snout all the way to its eyes.",
      "The delicate, thin-walled nature of its midline skull crest proves it was used strictly for species recognition or mating displays."
    ]
  },
  {
    name: "Sinraptor dongi",
    period: "Jurassic",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "Asia",
    group: "Metriacanthosauridae",
    subgroup: "Metriacanthosaurinae",
    length: 8,
    wiki: "Sinraptor",
    hints: [
      "A large Late Jurassic theropod discovered in the Shishugou Formation of China by a joint Chinese-Canadian expedition.",
      "Despite its name containing 'raptor', it is not a dromaeosaurid, but rather an early, advanced allosauroid.",
      "Possessed a highly pneumatic, lightened skull structure and shared its environment with early tyrannosauroids and massive sauropods."
    ]
  },
  {
    name: "Ornithomimus edmontonicus",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Omnivore",
    continent: "North America",
    group: "Ornithomimosauria",
    subgroup: "Ornithomimidae",
    length: 4,
    wiki: "Ornithomimus",
    hints: [
      "A fast, bird-like theropod found throughout the Late Cretaceous Horseshoe Canyon Formation of Alberta.",
      "Exceptional mummified specimens preserve detailed feather impressions, confirming adults developed long wing-like plumes on their arms.",
      "Possessed thin, hollow limb bones that allowed it to reach high acceleration speeds to escape large tyrannosaurids."
    ]
  },
  {
    name: "Gallimimus bullatus",
    period: "Cretaceous",
    difficulty: "Easy",
    diet: "Omnivore",
    continent: "Asia",
    group: "Ornithomimosauria",
    subgroup: "Ornithomimidae",
    length: 6,
    wiki: "Gallimimus",
    hints: [
      "The largest known true ornithomimid, discovered in the Late Cretaceous Nemegt Formation of Mongolia.",
      "Built exactly like a modern ostrich, possessing a toothless beak, large eyes, long slender arms, and powerful running legs.",
      "Its beak preserves fine internal ridges that suggest it may have been a filter feeder or opportunistic omnivore in wetland systems."
    ]
  },
  {
    name: "Archaeornithomimus asiaticus",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Omnivore",
    continent: "Asia",
    group: "Ornithomimosauria",
    subgroup: "Ornithomimidae",
    length: 3,
    wiki: "Archaeornithomimus",
    hints: [
      "An early, primitive ornithomimid recovered from the Late Cretaceous Iren Dabasu Formation of Inner Mongolia.",
      "Its name means 'ancient bird mimic', displaying transitionary foot and hand structures that link early coelurosaurs to later raptors.",
      "Inhabited arid, seasonal environments, foraging for a mix of plants, insects, and small vertebrate prey."
    ]
  },
  {
    name: "Pelecanimimus polyodon",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Omnivore",
    continent: "Europe",
    group: "Ornithomimosauria",
    subgroup: "Macrocheiriformes",
    length: 2.5,
    wiki: "Pelecanimimus",
    hints: [
      "A highly primitive, basal ornithomimosaur excavated from the Early Cretaceous Las Hoyas Lagerstätte of Spain.",
      "Bizarrely unique for its lineage because it was not toothless; it possessed approximately 220 tiny, unserrated teeth.",
      "Soft-tissue impressions preserve a small gular pouch beneath its throat, highly reminiscent of a modern pelican."
    ]
  },
  {
    name: "Sinornithomimus dongi",
    difficulty: "Hard",
    period: "Cretaceous",
    diet: "Herbivore",
    continent: "Asia",
    group: "Ornithomimosauria",
    subgroup: "Ornithomimidae",
    length: 2.5,
    wiki: "Sinornithomimus",
    hints: [
      "A small ornithomimid discovered in the Late Cretaceous Ulansuhai Formation of Inner Mongolia.",
      "Famous for a monospecific bonebed containing a herd of juvenile individuals trapped and preserved together in a prehistoric mud trap.",
      "The presence of numerous gastroliths (stomach stones) inside its ribcage provides definitive proof of an strictly herbivorous diet."
    ]
  },
  {
    name: "Struthiomimus altus",
    period: "Cretaceous",
    difficulty: "Easy",
    diet: "Omnivore",
    continent: "North America",
    group: "Ornithomimosauria",
    subgroup: "Ornithomimidae",
    length: 4,
    wiki: "Struthiomimus",
    hints: [
      "A common ostrich-mimic dinosaur excavated from the Late Cretaceous Dinosaur Park Formation of Alberta.",
      "Distinguished from Ornithomimus by its slightly longer hands and a more robustly built curved neck structure.",
      "Its claw mechanics indicate its hands were adapted for hooking and pulling down high branches to access fruits or leaves."
    ]
  },
  {
    name: "Iberospinus natarioi",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "Europe",
    group: "Spinosauridae",
    subgroup: "incertae sedis",
    length: 8,
    wiki: "Iberospinus",
    hints: [
      "A mid-sized debated baryonychine spinosaurid discovered in the Early Cretaceous Papo Seco Formation of Portugal.",
      "Its description features unique neurovascular patterns in the lower jaw, highly adapted for sensing underwater vibrations.",
      "Provides concrete evidence of intense spinosaurid diversification and specialization across the Western European archipelago."
    ]
  },
  {
    name: "Ceratosuchops infernalis",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "Europe",
    group: "Spinosauridae",
    subgroup: "Ceratosuchopsini",
    length: 8.5,
    wiki: "Ceratosuchops",
    hints: [
      "An Early Cretaceous baryonychine unearthed from the Wessex Formation of the Isle of Wight, England.",
      "Its name translates to 'horned crocodile-faced hell heron,' referencing its specialized lifestyle and bumpy brow region.",
      "Coexisted alongside its close relative Riparovenator, showcasing ecological niche partitioning among specialized fish-eaters."
    ]
  },
  {
    name: "Siamosaurus suteethorni",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Carnivore",
    continent: "Asia",
    group: "Spinosauridae",
    subgroup: "Spinosaurinae",
    length: 9,
    wiki: "Siamosaurus",
    hints: [
      "The first spinosaurid reported from Asia, known primarily from distinctive teeth found in the Early Cretaceous Sao Khua Formation of Thailand.",
      "Possessed highly diagnostic, straight, conical teeth with fine vertical ridges, perfectly adapted for gripping slippery aquatic prey.",
      "Oxygen isotope studies on its tooth enamel confirm a highly semi-aquatic lifestyle, comparable to modern hippopotamuses."
    ]
  },
  {
    name: "Sigilmassasaurus brevicollis",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Carnivore",
    continent: "Africa",
    group: "Spinosauridae",
    subgroup: "Spinosaurini",
    length: 10,
    wiki: "Sigilmassasaurus",
    hints: [
      "A massive, highly controversial spinosaurid recovered from the Late Cretaceous Kem Kem Beds of Morocco.",
      "Characterized by extremely broad, short neck vertebrae that indicate a highly muscular, power-loaded neck structure.",
      "At the center of an intense scientific debate regarding whether it represents an independent genus or a junior synonym of Spinosaurus."
    ]
  },
  {
    name: "Tuojiangosaurus multispinus",
    period: "Jurassic",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Asia",
    group: "Stegosauria",
    subgroup: "Stegosauridae",
    length: 7,
    wiki: "Tuojiangosaurus",
    hints: [
      "A classic, well-known stegosaur excavated from the Late Jurassic Upper Shaximiao Formation of Sichuan, China.",
      "Possessed narrow, tall, pear-shaped plates along its back that transitioned into long, spiked arrangements down its tail.",
      "Features a highly specialized, wedge-shaped head positioned low to the ground to forage entirely on ferns and cycads."
    ]
  },
  {
    name: "Miragaia longicollum",
    period: "Jurassic",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Europe",
    group: "Stegosauria",
    subgroup: "Stegosauridae",
    length: 6.5,
    wiki: "Miragaia_(dinosaur)",
    hints: [
      "An extraordinary stegosaurid stegosaur recovered from the Late Jurassic Lourinhã Formation of Portugal.",
      "Highly unusual for its family due to its incredibly elongated neck, boasting at least 17 neck vertebrae (more than most sauropods).",
      "Its long neck represents a unique case of convergent evolution, allowing it to access medium-tier tree canopy browsing."
    ]
  },
  {
    name: "Thyreosaurus atlasicus",
    period: "Jurassic",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Africa",
    group: "Stegosauria",
    subgroup: "Stegosauridae",
    length: 4.5,
    wiki: "Thyreosaurus",
    hints: [
      "A highly unusual, recently described dacentrurine stegosaur from the Middle Jurassic strata of the High Atlas Mountains of Morocco.",
      "Its name means 'shield lizard,' unique due to its asymmetrical dermal armor consisting of thick, flat, oval osteoderms.",
      "Instead of vertical standing plates, its armor appears to have laid flat or slanted across its body flanks like a coat of mail."
    ]
  },
  {
    name: "Yingshanosaurus jichuanensis",
    period: "Jurassic",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Asia",
    group: "Stegosauria",
    subgroup: "Stegosauridae",
    length: 5,
    wiki: "Yingshanosaurus",
    hints: [
      "A Late Jurassic stegosaur discovered in the Upper Shaximiao Formation of Sichuan, China.",
      "Notably characterized by possessing a pair of massive, flat-bladed parascapular spines projecting outward directly from its shoulders.",
      "Known from a partial skeleton whose skull elements display highly primitive traits linking early thyreophorans to advanced stegosaurs."
    ]
  },
  {
    name: "Wannanosaurus yansiensis",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Omnivore",
    continent: "Asia",
    group: "Marginocephalian",
    subgroup: "Pachycephalosauria",
    length: 1,
    wiki: "Wannanosaurus",
    hints: [
      "An exceptionally small, primitive pachycephalosaur discovered in the Late Cretaceous Xiaoxiong Formation of Anhui, China.",
      "Possessed a flat, tabular skull roof with large open supratemporal fenestrae rather than a fully developed dome.",
      "Its jaw morphology retains very primitive, hand-shaped teeth, indicating a highly opportunistic omnivorous diet."
    ]
  },
  {
    name: "Zavacephale rinpoche",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Omnivore",
    continent: "Asia",
    group: "Marginocephalian",
    subgroup: "Pachycephalosauria",
    length: 1,
    wiki: "Zavacephale",
    hints: [
      "Described in late 2025 from the Khuren Dukh Formation of Mongolia, it is the geologically oldest definitive pachycephalosaur known.",
      "The most skeletally complete member of its group ever discovered, preserving the clade's first record of intact hand bones and an articulated tail.",
      "Preserves a distinct mass of gastroliths (stomach stones) and curved canine-like teeth, reshaping assumptions about early omnivory in dome-heads."
    ]
  },
  {
    name: "Stegoceras validum",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "North America",
    group: "Marginocephalian",
    subgroup: "Pachycephalosauridae",
    length: 2,
    wiki: "Stegoceras",
    hints: [
      "A small, quintessential dome-headed dinosaur from the Late Cretaceous Dinosaur Park Formation.",
      "Features a strongly thickened, smooth skull dome flanked by a narrow shelf of small bony knobs around the back.",
      "CT scanning of its skull dome shows rigid structural columns designed to withstand heavy impact or flank-shoving behaviors."
    ]
  },
  {
    name: "Homalocephale calathocercos",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Asia",
    group: "Marginocephalian",
    subgroup: "Pachycephalosaurinae",
    length: 2,
    wiki: "Homalocephale",
    hints: [
      "A small pachycephalosaur discovered in the Late Cretaceous Nemegt Formation of Mongolia.",
      "Unlike its fully-domed relatives, it possessed a flat, wedge-shaped skull roof covered in large pitting and open holes.",
      "Features an unusually wide pelvis structure, leading paleontologists to hypothesize it had broad display organs or unique hip-shoving combat behaviors."
    ]
  },
  {
    name: "Brachylophosaurus canadensis",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "North America",
    group: "Hadrosauridae",
    subgroup: "Saurolophinae",
    length: 9,
    wiki: "Brachylophosaurus",
    hints: [
      "A flat-headed hadrosaurid excavated from the Late Cretaceous Judith River Formation of Montana and Alberta.",
      "Possessed a unique, paddle-like bony crest that sat completely flat on top of its skull roof.",
      "Famous for exceptionally well-preserved mummies like 'Leonardo,' which retain mineralized muscles, skin scales, and a completely intact final meal of leaves."
    ]
  },
  {
    name: "Hadrosaurus foulkii",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "North America",
    group: "Hadrosauridae",
    subgroup: "N/A",
    length: 8,
    wiki: "Hadrosaurus",
    hints: [
      "The historic type genus of the duck-billed dinosaur family, excavated from the Late Cretaceous Woodbury Formation of New Jersey.",
      "The first non-avian dinosaur skeleton ever found in North America and the first to be fully mounted in a museum.",
      "A medium-sized, facultatively bipedal herbivore that lacked a hollow head crest, placing it within the saurolophine lineage."
    ]
  },
  {
    name: "Lambeosaurus lambei",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "North America",
    group: "Hadrosauridae",
    subgroup: "Lambeosaurinae",
    length: 9,
    wiki: "Lambeosaurus",
    hints: [
      "A prominent hollow-crested duck-billed dinosaur recovered from the Late Cretaceous Dinosaur Park Formation of Alberta.",
      "Features a large, forward-pointing, hatchet-shaped skull crest accompanied by a backward-projecting bony spine.",
      "Its skull crest was fully hollow and directly linked to its nasal passages, acting as a powerful acoustic speaker to broadcast calls."
    ]
  },
  {
    name: "Nipponosaurus sachalinensis",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Asia",
    group: "Hadrosauridae",
    subgroup: "Lambeosaurinae",
    length: 7,
    wiki: "Nipponosaurus",
    hints: [
      "A rare lambeosaurine duck-bill discovered on the island of Sakhalin, which was historically part of Japan when excavated in 1934.",
      "Represented by a single partial juvenile skeleton that displays early developmental stages of a hollow cranial crest.",
      "One of the few diagnostic hadrosaurid specimens found in high-latitude East Asian marine-marginal deposits."
    ]
  },
  {
    name: "Eolambia caroljonesa",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "North America",
    group: "Hadrosauromorpha",
    subgroup: "N/A",
    length: 6,
    wiki: "Eolambia",
    hints: [
      "A primitive, early-diverging hadrosauromorph discovered in the Late Cretaceous Cedar Mountain Formation of Utah.",
      "Its name means 'dawn Lambeosaurus,' bridging the evolutionary gap between primitive iguanodontians and true duck-billed dinosaurs.",
      "Possessed robust, specialized grinding teeth but lacked the massive, complex dental batteries found in later Cretaceous forms."
    ]
  },
  {
    name: "Jaxartosaurus aralensis",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Asia",
    group: "Hadrosauridae",
    subgroup: "Lambeosaurinae",
    length: 6,
    wiki: "Jaxartasaurus",
    hints: [
      "A primitive lambeosaurine hadrosaurid excavated from the Late Cretaceous Syuksyuk Formation of Kazakhstan.",
      "Named after the nearby Jaxartes River, its skull features a small, backward-projecting helmet-like crest.",
      "Provides valuable geographic data mapping out the early trans-Eurasian migration paths of crested ornithopods."
    ]
  },
  {
    name: "Saurolophus osborni",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "North America",
    group: "Hadrosauridae",
    subgroup: "Saurolophinae",
    length: 9,
    wiki: "Saurolophus",
    hints: [
      "A large, highly successful duck-billed dinosaur from the Late Cretaceous Horseshoe Canyon Formation.",
      "Characterized by a unique, solid, spike-like bony crest that projected straight backward from the top of its skull.",
      "Closely related species are found in both North America and Mongolia, indicating highly fluid faunal exchanges across Beringia."
    ]
  },
  {
    name: "Fukuisaurus tetoriensis",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Asia",
    group: "Styracosterna",
    subgroup: "N/A",
    length: 4.5,
    wiki: "Fukuisaurus",
    hints: [
      "A small, relatively primitive iguanodontian dinosaur unearthed from the Early Cretaceous Kitadani Formation of Japan.",
      "Unlike advanced hadrosaurids, its skull bones were rigidly fused together, preventing the jaw elements from flexing sideways while chewing.",
      "Coexisted with a highly diverse river-valley ecosystem alongside primitive theropods and armored nodosaurs."
    ]
  },
{
    name: "Koreaceratops hwaseongensis",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Asia",
    group: "Marginocephalian",
    subgroup: "Neoceratopsia",
    length: 2,
    wiki: "Koreaceratops",
    hints: [
      "A primitive, early neoceratopsian discovered in the Early Cretaceous Tando Beds of South Korea.",
      "Characterized by highly elongated neural spines on its tail vertebrae, forming a tall, paddle-like tail structure.",
      "Its unique tail architecture has led some paleontologists to hypothesize it was an adaptation for swimming or sexual display."
    ]
  },
  {
    name: "Centrosaurus apertus",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "North America",
    group: "Marginocephalian",
    subgroup: "Centrosaurinae",
    length: 6,
    wiki: "Centrosaurus",
    hints: [
      "A classic centrosaurine ceratopsid found in massive bonebeds within the Late Cretaceous Dinosaur Park Formation.",
      "Possessed a single, large horn curving forward over its nose, combined with a pair of hook-like hornlets curling over the top of its frill.",
      "The presence of hundreds of individuals buried together points to a highly social, herd-dwelling lifestyle prone to catastrophic river crossings."
    ]
  },
  {
    name: "Einiosaurus procurvicornis",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "North America",
    group: "Marginocephalian",
    subgroup: "Centrosaurinae",
    length: 4.5,
    wiki: "Einiosaurus",
    hints: [
      "A highly distinctive centrosaurine ceratopsid from the Late Cretaceous Two Medicine Formation of Montana.",
      "Possessed a bizarre nasal horn that curved sharply forward and down, resembling a giant can opener or a bottle opener.",
      "Its neck frill features a pair of long, straight spikes pointing directly backward, framing a smooth, low-profile collar."
    ]
  },
  {
    name: "Fukuiraptor kitadaniensis",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Carnivore",
    continent: "Asia",
    group: "Megaraptora",
    subgroup: "N/A",
    length: 4.2,
    wiki: "Fukuiraptor",
    hints: [
      "A mid-sized, agile megaraptoran predator discovered in the Early Cretaceous Kitadani Formation of Fukui, Japan.",
      "Initially misclassified as a dromaeosaurid due to a massive curved claw that was mistakenly thought to belong on its foot instead of its hand.",
      "Possessed long, slender hind limbs and gracile, three-clawed forelimbs optimized for slicing open small-to-medium ornithopods."
    ]
  },
  {
    name: "Megaraptor namunhuaiquii",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Carnivore",
    continent: "South America",
    group: "Megaraptora",
    subgroup: "Megaraptoridae",
    length: 8,
    wiki: "Megaraptor",
    hints: [
      "A large, highly specialized theropod recovered from the Late Cretaceous Portezuelo Formation of Argentina.",
      "Famous for possessing an enormous, compressed, sickle-like hand claw measuring over 30 centimeters in length.",
      "Unlike classic tyrannosaurids that relied on bone-crushing jaws, this predator weaponized its heavily extended, powerful arms to dispatch prey."
    ]
  },
  {
    name: "Maip macrothorax",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Carnivore",
    continent: "South America",
    group: "Megaraptora",
    subgroup: "Megaraptoridae",
    length: 10,
    wiki: "Maip",
    hints: [
      "The largest known megaraptoran theropod discovered to date, excavated from the Late Cretaceous Chorrillo Formation of Patagonia.",
      "Named after a malicious mythological spirit from Tehuelche culture associated with freezing death winds.",
      "Possessed a massive, heavily built ribcage layout and broad muscle attachments across its spine to support its devastating slashing arm mechanics."
    ]
  },
  {
    name: "Australovenator wintonensis",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "Australia",
    group: "Megaraptora",
    subgroup: "Megaraptoridae",
    length: 6,
    wiki: "Australovenator",
    hints: [
      "A lightweight, exceptionally agile megaraptoran discovered in the Late Cretaceous Winton Formation of Queensland.",
      "Nicknamed 'Banjo' after the famous Australian poet Banjo Paterson, who penned 'Waltzing Matilda' at the fossil site.",
      "Served as the undisputed apex cheetah-like pursuit predator of its ecosystem, utilizing hyper-extended arm claws to grasp running prey."
    ]
  },
  {
    name: "Fukuivenator shimizuensis",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Omnivore",
    continent: "Asia",
    group: "Maniraptora",
    subgroup: "N/A",
    length: 2.5,
    wiki: "Fukuivenator",
    hints: [
      "A highly unusual, early maniraptoriform unearthed from the Early Cretaceous Kitadani Formation of Japan.",
      "Possesses a unique mosaic of primitive and advanced traits, bridging the gap between coelurosaurs and specialized raptors.",
      "Its heterodont dentition and skull morphology strongly suggest an omnivorous or opportunistic lifestyle rather than strict carnivory."
    ]
  },
  {
    name: "Segnosaurus galbinensis",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Asia",
    group: "Maniraptora",
    subgroup: "Therizinosauridae",
    length: 6,
    wiki: "Segnosaurus",
    hints: [
      "A large, early-diverging therizinosaur recovered from the Late Cretaceous Bayan Shireh Formation of Mongolia.",
      "Features highly unusual, tightly packed, serrated teeth and a specialized down-turned lower jaw adapted for stripping foliage.",
      "Possessed a remarkably broad, massive pelvis and stocky limbs, supporting a massive gut structure for plant fermentation."
    ]
  },
  {
    name: "Nothronychus mckinleyi",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "North America",
    group: "Maniraptora",
    subgroup: "Therizinosauridae",
    length: 5,
    wiki: "Nothronychus",
    hints: [
      "A North American therizinosaur discovered in the Late Cretaceous Moreno Hill Formation of New Mexico.",
      "Nicknamed the 'sloth dinosaur' due to its convergent evolution with giant ground sloths, featuring large, curved hand claws.",
      "Provides definitive proof that specialized herbivorous therizinosaurs migrated out of Asia and into ancient Laramidia."
    ]
  },
  {
    name: "Erlikosaurus andrewsi",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "Asia",
    group: "Maniraptora",
    subgroup: "Therizinosauridae",
    length: 4.5,
    wiki: "Erlikosaurus",
    hints: [
      "A mid-sized therizinosaur from the Late Cretaceous Bayan Shireh Formation, known from an exceptionally complete fossil skull.",
      "Possessed a completely toothless, horn-covered beak (rhamphotheca) at the front of its jaws, paired with small leaf-like teeth in the back.",
      "Digital brain reconstructions show advanced equilibrium and hearing mechanisms, likely used for complex foraging behaviors."
    ]
  },
  {
    name: "Duonychus tsogtbaatari",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Asia",
    group: "Maniraptora",
    subgroup: "Therizinosauridae",
    length: 3,
    wiki: "Duonychus",
    hints: [
      "A highly unusual therizinosaurid discovered in the Late Cretaceous Bayanshiree Formation of the Gobi Desert.",
      "Unique among its family for being didactyl, possessing only two functional fingers per hand instead of the typical three.",
      "Preserves an exceptionally rare, nearly complete three-dimensional keratinous sheath extending over 30 centimeters past its hand claws."
    ]
  },
 {
    name: "Giraffatitan brancai",
    period: "Jurassic",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "Africa",
    group: "Eusauropoda",
    subgroup: "Brachiosauridae",
    length: 23,
    wiki: "Giraffatitan",
    hints: [
      "A towering, iconic brachiosaurid recovered from the Late Jurassic Tendaguru Beds of Tanzania.",
      "Highly distinct for its extreme vertical posture, elongated forelimbs, and a massive bony nasal arch crown between its eyes.",
      "Historically cataloged as a species of Brachiosaurus before anatomical distinctions established it as its own independent African genus."
    ]
  },
  {
    name: "Shunosaurus lii",
    period: "Jurassic",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Asia",
    group: "Eusauropoda",
    subgroup: "N/A",
    length: 10,
    wiki: "Shunosaurus",
    hints: [
      "A common, well-preserved basal sauropod excavated from the Middle Jurassic Lower Shaximiao Formation of Sichuan, China.",
      "Highly unusual among sauropods due to possessing a heavy, bony club structure flanking the end of its tail, armed with two pairs of small spikes.",
      "Features primitive cylindrical teeth throughout its entire jaw margins, adapted for targeting low-to-medium forest brush."
    ]
  },
  {
    name: "Fukuititan nipponensis",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Asia",
    group: "Eusauropoda",
    subgroup: "Titanosauriformes",
    length: 10,
    wiki: "Fukuititan",
    hints: [
      "A primitive titanosauriform sauropod unearthed from the Early Cretaceous Kitadani Formation of Japan.",
      "The first relatively complete sauropod skeleton scientifically described from Japan, bridging early macronarian evolution in East Asia.",
      "Possessed asymmetrical, elongated finger structures and distinctively slender, lightened hip bones."
    ]
  },
  {
    name: "Brontosaurus excelsus",
    period: "Jurassic",
    difficulty: "Easy",
    diet: "Herbivore",
    continent: "North America",
    group: "Eusauropoda",
    subgroup: "Diplodocoidea",
    length: 22,
    wiki: "Brontosaurus",
    hints: [
      "Famous sauropod, its generic validity was famously debated for decades.",
      "Features an incredibly dense, robust neck architecture compared to its longer-slung relative Diplodocus.",
      "Its name translates to 'thunder lizard,' capturing the massive weight distributions of its column-like skeleton configuration."
    ]
  },
  {
    name: "Supersaurus vivianae",
    period: "Jurassic",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "North America",
    group: "Eusauropoda",
    subgroup: "Diplodocoidea",
    length: 39,
    wiki: "Supersaurus",
    hints: [
      "An absolute titan from the Late Jurassic Morrison Formation, currently competing for the title of longest known dinosaur genus.",
      "Skeletal re-evaluations indicate it easily achieved lengths approaching 39 to 42 meters from its snout to its whip-like tail.",
      "Features exceptionally elongated, pneumatic neck vertebrae structures designed to minimize physical weight constraints."
    ]
  },
  {
    name: "Tapuiasaurus macedoi",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "South America",
    group: "Eusauropoda",
    subgroup: "Titanosauria",
    length: 13,
    wiki: "Tapuiasaurus",
    hints: [
      "An advanced titanosaur from the Early Cretaceous Quiricó Formation of Brazil, unique for preserving a nearly complete skull.",
      "Features an elongated, diplodocid-like skull shape combined with highly advanced, narrow peg-like teeth concentrated at its snout.",
      "Provides critical evolutionary evidence mapping out how the skulls of giant South American herbivores adapted before the Late Cretaceous."
    ]
  },
  {
    name: "Isisaurus colberti",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Asia",
    group: "Eusauropoda",
    subgroup: "Titanosauria",
    length: 18,
    wiki: "Isisaurus",
    hints: [
      "A highly unusual, robust titanosaur recovered from the Late Cretaceous Lameta Formation of India.",
      "Characterized by bizarrely long, heavy forelimbs and a short, muscular neck, giving it a somewhat hyena-like profile.",
      "Fossilized dung (coprolites) associated with this genus reveals a specialized diet consisting entirely of fungus-infected tree leaves."
    ]
  },
  {
    name: "Rapetosaurus krausei",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Africa",
    group: "Eusauropoda",
    subgroup: "Titanosauria",
    length: 15,
    wiki: "Rapetosaurus",
    hints: [
      "A classic saltasaurid titanosaur excavated from the Late Cretaceous Maevarano Formation of Madagascar.",
      "Known from exceptional life-stage specimens ranging from tiny juveniles to fully grown mature adults.",
      "Possessed small, bony armor studs (osteoderms) embedded in its hide, a common defensive adaptation among specialized southern hemisphere sauropods."
    ]
  },
  {
    name: "Gondwanatitan faustoi",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "South America",
    group: "Eusauropoda",
    subgroup: "Titanosauria",
    length: 8,
    wiki: "Gondwanatitan",
    hints: [
      "A relatively small, lightly built titanosaur discovered in the Late Cretaceous Adamantina Formation of Brazil.",
      "Characterized by highly forward-slanted neural spines on its tail vertebrae, suggesting a highly flexible, active tail movement mechanism.",
      "Occupied a mid-tier browser niche, thriving during a period of extensive titanosaur radiation across ancient South America."
    ]
  },
  {
    name: "Patagotitan mayorum",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "South America",
    group: "Eusauropoda",
    subgroup: "Titanosauria",
    length: 37,
    wiki: "Patagotitan",
    hints: [
      "A colossal lognkosaurian titanosaur discovered in the Early Cretaceous Cerro Barcino Formation of Patagonia, Argentina.",
      "One of the largest land creatures ever calculated, with skeletal reconstructions scaling out to an immense 37-meter length.",
      "Fossils represent a mass assemblage of multiple individuals, indicating giant sauropods returned to specific nesting areas over generations."
    ]
  },
{
    name: "Unaysaurus tolentinoi",
    period: "Triassic",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "South America",
    group: "Sauropodomorph",
    subgroup: "Unaysauridae",
    length: 2.5,
    wiki: "Unaysaurus",
    hints: [
      "A highly primitive, early sauropomorph unearthed from the Late Triassic Caturrita Formation of Brazil.",
      "One of the oldest definitive dinosaurs known, walking primarily on two legs (bipedal) with small, lightened forelimbs.",
      "Closely related to early European forms like Plateosaurus, proving rapid Pangean dinosaur distribution during the Triassic."
    ]
  },
  {
    name: "Massospondylus carinatus",
    period: "Jurassic",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Africa",
    group: "Sauropodomorph",
    subgroup: "Massopoda",
    length: 4,
    wiki: "Massospondylus",
    hints: [
      "A highly successful, early sauropomorph from the Early Jurassic Elliot Formation of South Africa.",
      "Famous for pristine fossilized nesting sites preserving unhatched clutches of eggs containing intact, toothless embryonic skeletons.",
      "Skeletal growth studies confirm that hatchlings started out as crawling quadrupeds before transitioning into bipedal adults as they matured."
    ]
  },
{
    name: "Heterodontosaurus tucki",
    period: "Jurassic",
    difficulty: "Medium",
    diet: "Omnivore",
    continent: "Africa",
    group: "Ornithischia",
    subgroup: "Heterodontosauridae",
    length: 1,
    wiki: "Heterodontosaurus",
    hints: [
      "A small, primitive ornithischian from the Early Jurassic Elliot Formation of South Africa.",
      "The type genus of its family, displaying an extreme example of differentiated teeth including a sharp beak, grinding molars, and prominent canine tusks.",
      "Its jaw mechanics allowed the lower tooth rows to slide backward relative to the upper row, effortlessly shearing tough plant material or insects."
    ]
  },
  {
    name: "Pegomastax africanus",
    period: "Jurassic",
    difficulty: "Medium",
    diet: "Omnivore",
    continent: "Africa",
    group: "Ornithischia",
    subgroup: "Heterodontosauridae",
    length: 1,
    wiki: "Pegomastax",
    hints: [
      "An incredibly small, primitive ornithischian from the Early Jurassic Elliot Formation of South Africa.",
      "Features a short, parrot-like beak combined with a pair of enlarged, sharp, tusk-like canine teeth in both jaws.",
      "Its body was likely covered in bristle-like filaments, using its sharp tusks for self-defense or fighting over foraging boundaries."
    ]
  },
  {
    name: "Stenonychus inequalis",
    period: "Cretaceous",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "North America",
    group: "Troodontidae",
    subgroup: "Troodontinae",
    length: 2,
    wiki: "Stenonychus",
    hints: [
      "A highly intelligent, bird-like troodontid from the Late Cretaceous Dinosaur Park Formation of Alberta.",
      "Possessed exceptionally large, forward-facing eyes optimized for nocturnal hunting and stereoscopic vision.",
      "Many fossils historically labeled as 'Troodon' in North America have been re-assigned to this valid genus."
    ]
  },
  {
    name: "Archaeopteryx lithographica",
    period: "Jurassic",
    difficulty: "Easy",
    diet: "Carnivore",
    continent: "Europe",
    group: "Paraves",
    subgroup: "Archaeopterygidae",
    length: 0.5,
    wiki: "Archaeopteryx",
    hints: [
      "Known for being the transitional fossil between dinosaurs and modern birds.",
      "Preserves a mosaic of primitive reptilian traits like a long bony tail and teeth, alongside advanced avian traits like asymmetrical flight feathers.",
      "Its discovery in 1861 provided major contemporary support for Charles Darwin's newly published theory of evolution."
    ]
  },
  {
    name: "Sinosauropteryx prima",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Carnivore",
    continent: "Asia",
    group: "Theropod",
    subgroup: "Compsognathidae",
    length: 1,
    wiki: "Sinosauropteryx",
    hints: [
      "A small compsognathid from the Early Cretaceous Yixian Formation of China, famous as the first non-avialan dinosaur discovered with feathers.",
      "Preserved filaments provide definitive evidence of simple, downy proto-feathers covering its neck, back, and long tail.",
      "Fossilized pigment cells (melanosomes) allowed scientists to map its true life coloration, revealing a bandit-masked face and a ginger-and-white striped tail."
    ]
  },
  {
    name: "Polacanthus foxii",
    period: "Cretaceous",
    difficulty: "Medium", 
    diet: "Herbivore",
    continent: "Europe",
    group: "Ankylosauria",
    subgroup: "Nodosauridae",
    length: 5,
    wiki: "Polacanthus",
    hints: [
      "An Early Cretaceous armored ankylosaurian excavated from the Wessex Formation of the Isle of Wight, England.",
      "Characterized by a solid, heavy bony shield covering its pelvis and two rows of sharp spikes projecting from its neck and shoulders.",
      "Lacked a heavy tail club, placing it within the early lineage of European nodosaurids."
    ]
  },
  {
    name: "Crichtonsaurus bohlini",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "Asia",
    group: "Ankylosauria",
    subgroup: "Ankylosauridae",
    length: 3.5,
    wiki: "Crichtonsaurus",
    hints: [
      "A small, heavily armored ankylosaurid discovered in the Late Cretaceous Sunjiawan Formation of Liaoning, China.",
      "Its genus name directly honors author Michael Crichton, who wrote the iconic 1990 sci-fi novel Jurassic Park.",
      "Possessed a broad, heavily armored skull roof and small, spoon-shaped teeth adapted for cropping low-lying Cretaceous vegetation."
    ]
  },
  {
    name: "Yuxisaurus kopchicki",
    period: "Jurassic",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Asia",
    group: "Stegosauria",
    subgroup: "incertae sedis",
    length: 3,
    wiki: "Yuxisaurus",
    hints: [
      "A highly basal, early-diverging armored thyreophoran discovered in the Early Jurassic Fengjiahe Formation of Yunnan, China.",
      "Recognized as the oldest definitive armored dinosaur found in Asia, showing the early global spread of plated lineages.",
      "Equipped with a robust skeleton covered in heavy rows of spiked osteoderms, preceding the split between stegosaurs and ankylosaurs."
    ]
  },
  {
    name: "Scelidosaurus harrisonii",
    period: "Jurassic",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Europe",
    group: "Thyreophora",
    subgroup: "N/A",
    length: 4,
    wiki: "Scelidosaurus",
    hints: [
      "A foundational, early armored dinosaur recovered from the Early Jurassic marine Lias Group of Dorset, England.",
      "One of the earliest and most complete anatomically understood ornithischians, serving as an ancestral link for all later Thyreophora.",
      "Its quadrupedal body was interspersed with lines of small, multi-faceted bony studs, and its jaws contained small leaf-like teeth."
    ]
  },
  {
    name: "Gigantoraptor erlianensis",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Omnivore",
    continent: "Asia",
    group: "Oviraptorosauria",
    subgroup: "Caenagnathidae",
    length: 8,
    wiki: "Gigantoraptor",
    hints: [
      "An absolute giant among oviraptorosaurs, discovered in the Late Cretaceous Iren Dabasu Formation of Inner Mongolia.",
      "Scaled to the size of a tyrannosaurid while retaining a completely toothless beak, slender bird-like legs, and heavily feathered arms.",
      "Its massive size indicates that some lineages of bird-like, brooding dinosaurs evolved giantism while keeping their specialized diets."
    ]
  },
  {
    name: "Guanlong wucaii",
    period: "Jurassic",
    difficulty: "Medium",
    diet: "Carnivore",
    continent: "Asia",
    group: "Tyrannosauroidae",
    subgroup: "Proceratosauridae",
    length: 3,
    wiki: "Guanlong",
    hints: [
      "A primitive, early tyrannosauroid discovered in the Late Jurassic Shishugou Formation of Xinjiang, China.",
      "Its name translates to 'crowned dragon,' referencing a highly prominent, fragile, air-filled bony crest riding along its midline snout.",
      "Provides vital evolutionary context proving that the terrifying ancestors of Tyrannosaurus rex started out as small, crested, three-fingered hunters."
    ]
  },
  {
    name: "Yi qi",
    period: "Jurassic",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "Asia",
    group: "Scansoriopterygidae",
    subgroup: "N/A",
    length: 0.6,
    wiki: "Yi_(dinosaur)",
    hints: [
      "A tiny, bizarre scansoriopterygid theropod discovered in the Middle Jurassic Tiaojishan Formation of Hebei, China.",
      "Possessed a unique, elongated rod-like wrist bone (styliform element) that supported a membranous skin wing, much like a modern bat.",
      "Holds the record for the shortest valid generic name of any dinosaur, translating from Mandarin simply to 'strange wing.'"
    ]
  },
  {
    name: "Microraptor zhaoianus",
    period: "Cretaceous",
    difficulty: "Medium",
    diet: "Carnivore",
    continent: "Asia",
    group: "Dromaeosauridae",
    subgroup: "Microraptoria",
    length: 0.8,
    wiki: "Microraptor",
    hints: [
      "A famous, tree-dwelling dromaeosaurid recovered from the Early Cretaceous Jiufotang Formation of Liaoning, China.",
      "Bizarrely evolved as a 'four-winged' dinosaur, possessing long vaned flight feathers on both its forelimbs and its hind legs.",
      "Analysis of fossilized melanosomes proves its feathers exhibited a striking, glossy iridescent black sheen, much like a modern crow or raven."
    ]
  },
  {
    name: "Denversaurus schlessmani",
    period: "Late Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "North America",
    group: "Ankylosauria",
    subgroup: "Nodosauridae",
    length: 6,
    wiki: "Denversaurus",
    hints: [
      "A heavily armored, squat nodosaurid discovered in the famous Hell Creek Formation.",
      "Lacked a tail club, relying instead on broad shoulder spines and thick dermal armor plates for defense.",
      "Named in honor of the Denver Museum of Nature & Science where its primary fossils are kept."
    ]
  },
  {
    name: "Proceratosaurus bradleyi",
    period: "Middle Jurassic",
    difficulty: "Medium",
    diet: "Carnivore",
    continent: "Europe",
    group: "Tyrannosauroidae",
    subgroup: "Proceratosauridae",
    length: 3,
    wiki: "Proceratosaurus",
    hints: [
      "Initially thought to be a direct ancestor of Ceratosaurus due to its small nasal crest.",
      "Later analysis proved it to be one of the earliest known members of the tyrannosauroid lineage.",
      "Known primarily from a single, well-preserved fossil skull discovered in England."
    ]
  },
  {
    name: "Futalognkosaurus dukei",
    period: "Late Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "South America",
    group: "Eusauropoda",
    subgroup: "Titanosauria",
    length: 26,
    wiki: "Futalognkosaurus",
    hints: [
      "A gigantic titanosaur whose Mapudungun name translates to 'Giant Chief Lizard'.",
      "Known from one of the most complete gigantic sauropod skeletons ever excavated in Patagonia.",
      "Had an exceptionally broad, massive neck and deep hips supporting a colossal torso."
    ]
  },
  {
    name: "Puertosaurus reuili",
    period: "Late Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "South America",
    group: "Eusauropoda",
    subgroup: "Titanosauria",
    length: 30,
    wiki: "Puertosaurus",
    hints: [
      "An enormous titanosaurian sauropod that coexisted alongside other giant South American herbivores.",
      "Possessed extraordinarily wide dorsal vertebrae measuring nearly 5 feet across.",
      "Named after the Puerto Yrigoyen locality in Santa Cruz Province, Argentina."
    ]
  },
  {
    name: "Antarctosaurus wichmannianus",
    period: "Late Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "South America",
    group: "Eusauropoda",
    subgroup: "Titanosauria",
    length: 18,
    wiki: "Antarctosaurus",
    hints: [
      "Despite its name meaning 'Southern Lizard', it was not discovered in Antarctica, but in Argentina.",
      "Possessed a surprisingly broad, square-shaped lower jaw with teeth concentrated at the very front.",
      "One of the first giant South American titanosaurs described in the early 20th century."
    ]
  },
  {
    name: "Corythoraptor jacobsi",
    period: "Late Cretaceous",
    difficulty: "Hard",
    diet: "Omnivore",
    continent: "Asia",
    group: "Oviraptorsauria",
    subgroup: "Oviraptoridae",
    length: 1.5,
    wiki: "Corythoraptor",
    hints: [
      "Possessed a high, helmet-like bony crest atop its skull remarkably similar to modern cassowaries.",
      "Discovered in the Nanxiong Formation of Ganzhou, China.",
      "A toothless, bird-like theropod that used a sharp, keratinous beak to feed."
    ]
  },
  {
    name: "Abelisaurus comahuensis",
    period: "Late Cretaceous",
    difficulty: "Medium",
    diet: "Carnivore",
    continent: "South America",
    group: "Abelisauridae",
    subgroup: "Brachyrostra",
    length: 7.5,
    wiki: "Abelisaurus",
    hints: [
      "The type genus of the Abelisauridae family, named after its discoverer Roberto Abel.",
      "Possessed a tall, deep skull with large openings (fenestrae) to reduce weight.",
      "A top predator of Cretaceous Argentina with short, blunt snout features."
    ]
  },
  {
    name: "Yandusaurus hongheensis",
    period: "Middle Jurassic",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Asia",
    group: "Neornithischia",
    subgroup: "incertae sedis",
    length: 3,
    wiki: "Yandusaurus",
    hints: [
      "A fast-running, bipedal herbivore discovered during construction work at a salt factory in Zigong, China.",
      "Possessed large eyes and five-fingered hands suited for foraging low-lying vegetation.",
      "Its genus name derives from 'Yandu', the ancient name for Zigong meaning 'Salt Capital'."
    ]
  },
  {
    name: "Gasosaurus constructus",
    period: "Middle Jurassic",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "Asia",
    group: "Averostra",
    subgroup: "Tetanurae",
    length: 3.5,
    wiki: "Gasosaurus",
    hints: [
      "Given its unusual name because its fossils were discovered during petroleum company gas field excavations.",
      "A relatively small, early tetanuran theropod found in the Dashanpu Formation of Sichuan, China.",
      "Possessed strong legs and sharp, serrated teeth for hunting smaller herbivorous dinosaurs."
    ]
  },
  {
    name: "Rinchenia mongoliensis",
    period: "Late Cretaceous",
    difficulty: "Hard",
    diet: "Omnivore",
    continent: "Asia",
    group: "Oviraptorosauria",
    subgroup: "Oviraptoridae",
    length: 1.5,
    wiki: "Rinchenia",
    hints: [
      "Named in honor of the famed Mongolian paleontologist Rinchen Barsbold.",
      "Originally classified as a species of Oviraptor before being assigned its own distinct genus.",
      "Sported a prominent, dome-like skull crest formed by its nasal and frontal bones."
    ]
  },
  {
    name: "Prenocephale prenes",
    period: "Late Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "Asia",
    group: "Marginocephalia",
    subgroup: "Pachycephalosaurinae",
    length: 2.5,
    wiki: "Prenocephale",
    hints: [
      "A thick-skulled dome-headed dinosaur discovered in the Gobi Desert of Mongolia.",
      "Unlike its relative Pachycephalosaurus, its skull dome was surrounded by a row of small bony spikes and knobs.",
      "Its name translates to 'Slanting Head', referring to the rounded shape of its skull dome."
    ]
  },
  {
    name: "Australotitan cooperensis",
    period: "Early Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "Australia",
    group: "Eusauropoda",
    subgroup: "Titanosauria",
    length: 28,
    wiki: "Australotitan",
    hints: [
      "Nicknamed 'Buster', it is officially the largest dinosaur ever discovered in Australia.",
      "Discovered in the Eromanga Basin of Queensland.",
      "A massive titanosaur that stood over 5 meters tall at the hip."
    ]
  },
  {
    name: "Ratchasimasaurus suranyeei",
    period: "Early Cretaceous",
    difficulty: "Hard",
    diet: "Herbivore",
    continent: "Asia",
    group: "Ornithischia",
    subgroup: "Iguanodontia",
    length: 5,
    wiki: "Ratchasimasaurus",
    hints: [
      "An iguanodontian dinosaur discovered in the Khok Kruat Formation of Thailand.",
      "Named after Nakhon Ratchasima Province where its fossils were excavated.",
      "Recognized by its distinctively flat and elongated lower jaw bone (dentary)."
    ]
  },
  {
    name: "Chirostenotes pergracilis",
    period: "Late Cretaceous",
    difficulty: "Medium",
    diet: "Omnivore",
    continent: "North America",
    group: "Oviraptorosauria",
    subgroup: "Caenagnathidae",
    length: 2,
    wiki: "Chirostenotes",
    hints: [
      "Its name means 'slender-handed', referencing its long, dexterous three-fingered claws.",
      "A bird-like theropod with a toothless beak and long, slender legs designed for fast running.",
      "Discovered in the Dinosaur Park Formation of Alberta, Canada."
    ]
  },
  {
    name: "Mononykus olecranus",
    period: "Late Cretaceous",
    difficulty: "Medium",
    diet: "Carnivore",
    continent: "Asia",
    group: "Maniraptora",
    subgroup: "Alvarezsauridae",
    length: 1,
    wiki: "Mononykus",
    hints: [
      "A small nocturnal theropod with extremely reduced, stubby arms ending in a single large claw.",
      "Used its specialized claw to tear open insect mounds and rotting wood in ancient Mongolia.",
      "Had long, bird-like legs indicating it was an exceptionally fast runner."
    ]
  },
  {
    name: "Scutellosaurus lawleri",
    period: "Early Jurassic",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "North America",
    group: "Thyreophora",
    subgroup: "N/A",
    length: 1.5,
    wiki: "Scutellosaurus",
    hints: [
      "One of the earliest known armored dinosaurs (thyreophorans), covered in hundreds of small bony scutes.",
      "Unlike later armored dinosaurs like Stegosaurus or Ankylosaurus, it was lightweight and bipedal.",
      "Discovered in the Kayenta Formation of Arizona."
    ]
  },
  {
    name: "Tenontosaurus tilletti",
    period: "Early Cretaceous",
    difficulty: "Easy",
    diet: "Herbivore",
    continent: "North America",
    group: "Ornithischia",
    subgroup: "Iguanodontia",
    length: 6.5,
    wiki: "Tenontosaurus",
    hints: [
      "A medium-to-large herbivore with an extremely long, stiffened tail supported by ossified tendons.",
      "Famous for often being found preserved alongside teeth and fossils of the predator Deinonychus.",
      "Switched between walking on two legs and four legs while grazing."
    ]
  },
  {
    name: "Bajadasaurus pronuspinax",
    period: "Early Cretaceous",
    difficulty: "Medium",
    diet: "Herbivore",
    continent: "South America",
    group: "Eusauropoda",
    subgroup: "Dicraeosauridae",
    length: 9,
    wiki: "Bajadasaurus",
    hints: [
      "Famous for possessing extremely long, forward-pointing bony spines extending from its neck vertebrae.",
      "Its dramatic neck spines were likely covered in keratin sheaths to deter predators while grazing.",
      "Discovered in the Bajada Colorada Formation of Patagonia, Argentina."
    ]
  },
  {
    name: "Dracovenator regenti",
    period: "Early Jurassic",
    difficulty: "Hard",
    diet: "Carnivore",
    continent: "Africa",
    group: "Neotheropoda",
    subgroup: "Averostriformes",
    length: 5.5,
    wiki: "Dracovenator",
    hints: [
      "Its name translates to 'Dragon Hunter', discovered in the Elliot Formation of South Africa.",
      "A close relative of Dilophosaurus that likely possessed paired bony crests on its head.",
      "One of the largest apex predators of the Early Jurassic in southern Africa."
    ]
  },
  {
    name: "Saurornitholestes langstoni",
    period: "Late Cretaceous",
    difficulty: "Medium",
    diet: "Carnivore",
    continent: "North America",
    group: "Dromaeosauridae",
    subgroup: "Saurornitholestinae",
    length: 2,
    wiki: "Saurornitholestes",
    hints: [
      "A small, agile dromaeosaurid predator with a keen sense of smell and large sickled foot claws.",
      "One specimen preserves teeth marks from a young tyrannosaurid that fed on its skull.",
      "Its genus name means 'Lizard-Bird Robber'."
    ]
  },
  {
    name: "Skorpiovenator bustingorryi",
    period: "Late Cretaceous",
    difficulty: "Medium",
    diet: "Carnivore",
    continent: "South America",
    group: "Abelisauridae",
    subgroup: "Brachyrostra",
    length: 6,
    wiki: "Skorpiovenator",
    hints: [
      "Named 'Scorpion Hunter' due to the high concentration of scorpions present during its excavation.",
      "Possessed extremely reduced, stubby arms and a short, deep skull covered in bony bumps.",
      "Discovered in the Huincul Formation of Argentina."
    ]
  },
  {
    name: "Procompsognathus triassicus",
    period: "Late Triassic",
    difficulty: "Medium",
    diet: "Carnivore",
    continent: "Europe",
    group: "Theropoda",
    subgroup: "Coelophysidae",
    length: 1,
    wiki: "Procompsognathus",
    hints: [
      "A tiny, lightweight Triassic predator with slender legs designed for chasing fast prey.",
      "Discovered in the Löwenstein Formation of Germany.",
      "Gained pop-culture fame through Michael Crichton's *Jurassic Park* novel as 'compies'."
    ]
  }


 ]
