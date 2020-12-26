import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const movies = () => {
  return [{
    "id": 1,
    "title": "Strangers with Candy",
    "description": "Unspecified open wound, right hip",
    "available": true
  }, {
    "id": 2,
    "title": "Indiana Jones and the Kingdom of the Crystal Skull",
    "description": "Burn of esophagus",
    "available": false
  }, {
    "id": 3,
    "title": "Torrente 5: Operación Eurovegas",
    "description": "Malignant neoplasm of upper respiratory tract, part unsp",
    "available": false
  }, {
    "id": 4,
    "title": "Girl Walk: All Day",
    "description": "Pathological fracture in neoplastic disease, left foot, init",
    "available": true
  }, {
    "id": 5,
    "title": "Happily N'Ever After",
    "description": "Oth fx shaft of r fibula, 7thE",
    "available": false
  }, {
    "id": 6,
    "title": "Local Color",
    "description": "Other abnormal products of conception",
    "available": true
  }, {
    "id": 7,
    "title": "Out to Sea",
    "description": "Unspecified dislocation of left little finger, sequela",
    "available": false
  }, {
    "id": 8,
    "title": "Singles",
    "description": "ABO incompat reaction due to transfuse of bld/bld prod, unsp",
    "available": true
  }, {
    "id": 9,
    "title": "Sunset",
    "description": "Terrorism involving unspecified means, sequela",
    "available": false
  }, {
    "id": 10,
    "title": "Verboten!",
    "description": "Posterior dislocation of left radial head, sequela",
    "available": true
  }, {
    "id": 11,
    "title": "Ator, the Fighting Eagle (Ator l'invincibile)",
    "description": "Injury of other nerves at forearm level, left arm, sequela",
    "available": true
  }, {
    "id": 12,
    "title": "Little Miss Sunshine",
    "description": "Cicatricial lagophthalmos left lower eyelid",
    "available": true
  }, {
    "id": 13,
    "title": "Blame (6 Films to Keep You Awake) (Películas para no dormir: La culpa)",
    "description": "Nondisp seg fx shaft of unsp femr, 7thM",
    "available": false
  }, {
    "id": 14,
    "title": "Babette Goes to War",
    "description": "Maternal care for fetal problem, unsp, second tri, fetus 5",
    "available": true
  }, {
    "id": 15,
    "title": "Leopard Man, The",
    "description": "Disorders of tyrosine metabolism",
    "available": true
  }, {
    "id": 16,
    "title": "Superpower",
    "description": "Other anterior subluxation of right hip, sequela",
    "available": false
  }, {
    "id": 17,
    "title": "I Want You",
    "description": "Car driver injured in clsn w pick-up truck nontraf, init",
    "available": false
  }, {
    "id": 18,
    "title": "Prey, The (La proie)",
    "description": "Other acquired stenosis of left external ear canal",
    "available": true
  }, {
    "id": 19,
    "title": "Prison of the Dead",
    "description": "Unsp inj unsp msl/tnd at ank/ft level, left foot, sequela",
    "available": false
  }, {
    "id": 20,
    "title": "The Dependent",
    "description": "Injury of accessory nerve, left side, sequela",
    "available": true
  }, {
    "id": 21,
    "title": "Capricorn One",
    "description": "Crushing injury of left great toe, subsequent encounter",
    "available": true
  }, {
    "id": 22,
    "title": "Trial of the Road (Check-up on the Roads) (Checkpoint) (Proverka na dorogakh)",
    "description": "Underdosing of unspecified hormone antagonists, init encntr",
    "available": true
  }, {
    "id": 23,
    "title": "Bring It On: In It To Win It",
    "description": "Corrosion of first degree of unsp thumb (nail), init encntr",
    "available": false
  }, {
    "id": 24,
    "title": "Crooked Arrows",
    "description": "Pneumothorax, unspecified",
    "available": false
  }, {
    "id": 25,
    "title": "Fantomas Unleashed",
    "description": "Unsp superficial injury of left lesser toe(s), subs encntr",
    "available": false
  }, {
    "id": 26,
    "title": "Sweeney Todd: The Demon Barber of Fleet Street",
    "description": "Unsp injury of musc/tend the rotator cuff of shoulder",
    "available": false
  }, {
    "id": 27,
    "title": "Study in Terror, A",
    "description": "Toxic effect of corrosive organic compounds, accidental",
    "available": false
  }, {
    "id": 28,
    "title": "Chang: A Drama of the Wilderness",
    "description": "Other foreign object in larynx causing asphyxiation",
    "available": false
  }, {
    "id": 29,
    "title": "Don's Plum",
    "description": "Sltr-haris Type II physl fx upr end l tibia, 7thD",
    "available": true
  }, {
    "id": 30,
    "title": "Cannibal Women in the Avocado Jungle of Death",
    "description": "Dislocation of metacarpophalangeal joint of left ring finger",
    "available": true
  }, {
    "id": 31,
    "title": "Nothing But Trouble",
    "description": "Toxic effect of carb monx from mtr veh exhaust, undetermined",
    "available": true
  }, {
    "id": 32,
    "title": "Resurrecting the Champ",
    "description": "Displ oblique fx shaft of l rad, 7thF",
    "available": true
  }, {
    "id": 33,
    "title": "Abraham Lincoln",
    "description": "Strain of musc/fasc/tend at thigh level, left thigh",
    "available": true
  }, {
    "id": 34,
    "title": "C.O.G.",
    "description": "Nondisp fx of dist phalanx of r lit fngr, 7thD",
    "available": false
  }, {
    "id": 35,
    "title": "Cahill U.S. Marshal (Cahill: United States Marshal) (Wednesday Morning)",
    "description": "Laceration with foreign body of unsp breast, subs encntr",
    "available": true
  }, {
    "id": 36,
    "title": "Dark Woods (Villmark)",
    "description": "Unspecified symptoms and signs involving the nervous system",
    "available": false
  }, {
    "id": 37,
    "title": "In Country",
    "description": "Nondisp fx of greater tuberosity of unsp humer, 7thG",
    "available": false
  }, {
    "id": 38,
    "title": "Lasa y Zabala",
    "description": "Pain disorder exclusively related to psychological factors",
    "available": false
  }, {
    "id": 39,
    "title": "Bill Burr: I'm Sorry You Feel That Way",
    "description": "Sltr-haris Type I physl fx upr end unsp tibia, 7thD",
    "available": false
  }, {
    "id": 40,
    "title": "From Beginning to End (Do Começo ao Fim)",
    "description": "Other specified injuries of unspecified hip, subs encntr",
    "available": true
  }, {
    "id": 41,
    "title": "Ghidorah, the Three-Headed Monster (San daikaijû: Chikyû saidai no kessen)",
    "description": "Insect bite (nonvenomous), right lower leg, sequela",
    "available": true
  }, {
    "id": 42,
    "title": "Sherlock Holmes in Washington",
    "description": "Tox eff of corrosv alkalis and alk-like substnc, undet, subs",
    "available": false
  }, {
    "id": 43,
    "title": "7 Dwarves: The Forest Is Not Enough",
    "description": "Unsp malignant neoplasm skin/ right eyelid, inc canthus",
    "available": true
  }, {
    "id": 44,
    "title": "Frisk",
    "description": "Unsp effects of drowning and nonfatal submersion, init",
    "available": true
  }, {
    "id": 45,
    "title": "XX/XY",
    "description": "Nondisp fx of nk of 3rd MC bone, r hand, 7thK",
    "available": false
  }, {
    "id": 46,
    "title": "Wuthering Heights",
    "description": "Dislocation of other parts of right shoulder girdle",
    "available": false
  }, {
    "id": 47,
    "title": "Transcendent Man",
    "description": "Nonopioid analges/antipyret, not elsewhere classified",
    "available": false
  }, {
    "id": 48,
    "title": "King of Jazz",
    "description": "Other specified disorders of left ear",
    "available": false
  }, {
    "id": 49,
    "title": "Hipsters (Stilyagi)",
    "description": "Poisoning by unsp drug/meds/biol subst, accidental, sequela",
    "available": false
  }, {
    "id": 50,
    "title": "I Dreamed of Africa",
    "description": "Disp fx of greater trochanter of unsp femr, 7thE",
    "available": true
  }, {
    "id": 51,
    "title": "Girasoli, I (Sunflower)",
    "description": "Subluxation of interphaln joint of right lesser toe(s), subs",
    "available": false
  }, {
    "id": 52,
    "title": "Jean-Michel Basquiat: The Radiant Child",
    "description": "Other specified disorders of synovium, left ankle and foot",
    "available": true
  }, {
    "id": 53,
    "title": "Absentia",
    "description": "Disp fx of greater trochanter of l femr, 7thH",
    "available": false
  }, {
    "id": 54,
    "title": "Sex and the Single Girl",
    "description": "Retained (old) magnetic fb in posterior wall of globe, bi",
    "available": true
  }, {
    "id": 55,
    "title": "Great Debaters, The",
    "description": "Genitl trct and pelvic infection fol incmpl spon abortion",
    "available": true
  }, {
    "id": 56,
    "title": "Beverly Hills Cop II",
    "description": "4-part fracture of surgical neck of right humerus",
    "available": false
  }, {
    "id": 57,
    "title": "Touki Bouki",
    "description": "Displ seg fx shaft of r femur, init for opn fx type 3A/B/C",
    "available": true
  }, {
    "id": 58,
    "title": "Hot Dog Program, A",
    "description": "Person outside 3-whl mv inj pick-up truck, pk-up/van nontraf",
    "available": true
  }, {
    "id": 59,
    "title": "Source Family, The",
    "description": "Angioneurotic edema",
    "available": false
  }, {
    "id": 60,
    "title": "Canyons, The",
    "description": "Poisoning by predom beta-adrenocpt agonists, acc, init",
    "available": true
  }, {
    "id": 61,
    "title": "Soul Food",
    "description": "Torus fx lower end of unsp fibula, subs for fx w routn heal",
    "available": false
  }, {
    "id": 62,
    "title": "Ward, The",
    "description": "Mechanical lagophthalmos left upper eyelid",
    "available": true
  }, {
    "id": 63,
    "title": "Kiss of Death",
    "description": "Nondisp transverse fx shaft of unsp rad, 7thE",
    "available": true
  }, {
    "id": 64,
    "title": "Island, The",
    "description": "Fb in oth and multiple parts of external eye, left eye",
    "available": false
  }, {
    "id": 65,
    "title": "Butchered",
    "description": "Adverse effect of tricyclic antidepressants, init encntr",
    "available": true
  }, {
    "id": 66,
    "title": "I Married a Monster from Outer Space",
    "description": "Other osteoporosis with pathological fracture, shoulder",
    "available": true
  }, {
    "id": 67,
    "title": "Last Days, The (Últimos días, Los)",
    "description": "Other specified injury of anterior tibial artery",
    "available": true
  }, {
    "id": 68,
    "title": "Jodorowsky Constellation, The (La constellation Jodorowsky)",
    "description": "Penetrating wound of orbit w or w/o fb, left eye, subs",
    "available": false
  }, {
    "id": 69,
    "title": "Already Dead",
    "description": "Unspecified subluxation of left middle finger, sequela",
    "available": true
  }, {
    "id": 70,
    "title": "Hallelujah!",
    "description": "Labor and del comp by oth cord entangle, w/o comprsn, fts1",
    "available": true
  }, {
    "id": 71,
    "title": "Heat's On, The",
    "description": "Superficial foreign body, unspecified great toe, sequela",
    "available": true
  }, {
    "id": 72,
    "title": "Gorko!",
    "description": "Reiter's disease, elbow",
    "available": true
  }, {
    "id": 73,
    "title": "American Werewolf in London, An",
    "description": "Necrosis of amputation stump, unspecified extremity",
    "available": false
  }, {
    "id": 74,
    "title": "Slaughter",
    "description": "Drown due to merchant ship overturning, subs",
    "available": true
  }, {
    "id": 75,
    "title": "World, the Flesh and the Devil, The",
    "description": "Fracture of unspecified part of right clavicle",
    "available": false
  }, {
    "id": 76,
    "title": "Andy Hardy's Double Life",
    "description": "Maternal care for malpresentation of fetus, unsp, fetus 4",
    "available": true
  }, {
    "id": 77,
    "title": "Terms and Conditions May Apply",
    "description": "Twin preg, unsp num plcnta & amnio sacs, first trimester",
    "available": false
  }, {
    "id": 78,
    "title": "Lift, De",
    "description": "Displaced fracture of base of neck of unspecified femur",
    "available": true
  }, {
    "id": 79,
    "title": "St Trinian's 2: The Legend of Fritton's Gold",
    "description": "Unsp inj msl/tnd lng flxr msl toe at ank/ft lev,unsp ft,init",
    "available": true
  }, {
    "id": 80,
    "title": "Barbie: A Fashion Fairytale",
    "description": "Major laceration of femoral vein at hip and thigh level",
    "available": true
  }, {
    "id": 81,
    "title": "Torch Song",
    "description": "Nondisp osteochon fx unsp patella, 7thJ",
    "available": true
  }, {
    "id": 82,
    "title": "Hulk",
    "description": "Other hereditary choroidal dystrophy",
    "available": false
  }, {
    "id": 83,
    "title": "En på miljonen",
    "description": "Nondisplaced Zone III fracture of sacrum, init for clos fx",
    "available": true
  }, {
    "id": 84,
    "title": "Hercules",
    "description": "Other forms of blastomycosis",
    "available": false
  }, {
    "id": 85,
    "title": "Bruna Surfistinha",
    "description": "Neuromuscular scoliosis",
    "available": false
  }, {
    "id": 86,
    "title": "Forsaking All Others",
    "description": "Unspecified open wound, unspecified foot",
    "available": false
  }, {
    "id": 87,
    "title": "Wild Bill",
    "description": "Osteitis deformans of left lower leg",
    "available": true
  }, {
    "id": 88,
    "title": "Clown and the Kid, The",
    "description": "Unsp streptococcus as the cause of diseases classd elswhr",
    "available": false
  }, {
    "id": 89,
    "title": "After Last Season",
    "description": "Sltr-haris Type II physeal fx upper end of humerus, unsp arm",
    "available": false
  }, {
    "id": 90,
    "title": "Keoma",
    "description": "Unspecified injury of left external jugular vein",
    "available": false
  }, {
    "id": 91,
    "title": "Alien from L.A.",
    "description": "Unspecified injury of plantar artery of foot",
    "available": false
  }, {
    "id": 92,
    "title": "Slaughter of the Innocents",
    "description": "Toxic effect of mercury and its compounds, undet, sequela",
    "available": true
  }, {
    "id": 93,
    "title": "Big Sleep, The",
    "description": "Abnormal innervation syndrome right upper eyelid",
    "available": false
  }, {
    "id": 94,
    "title": "Starving Games, The",
    "description": "Unspecified injury of ovary, unspecified, subs encntr",
    "available": true
  }, {
    "id": 95,
    "title": "Friends at the Margherita Cafe, The (Gli amici del bar Margherita)",
    "description": "Occup of 3-whl mv injured in nonclsn trnsp accident in traf",
    "available": false
  }, {
    "id": 96,
    "title": "Day I Became a Woman, The (Roozi khe zan shodam)",
    "description": "Focal chorioretin inflam, macular or paramacular, left eye",
    "available": false
  }, {
    "id": 97,
    "title": "Substitute, The",
    "description": "Other secondary gout, unspecified elbow",
    "available": false
  }, {
    "id": 98,
    "title": "K-19: The Widowmaker",
    "description": "Pre-eclampsia",
    "available": true
  }, {
    "id": 99,
    "title": "Naked Lunch",
    "description": "Other ovarian cysts",
    "available": true
  }, {
    "id": 100,
    "title": "Sidestreet",
    "description": "Complete traumatic amputation of scrotum and testis, init",
    "available": false
  }]
}

export default new Vuex.Store({
  state: {
    movies: movies(),
    filter: {
      query: '',
      available: true
    }
  },
  mutations: {
    SET_QUERY(state, query){
      state.filter.query = query
    },
    SET_AVAILABLE(state){
      state.filter.available = !state.filter.available
    }
  },
  getters: {
    filteredMovies(state){
      let movies = state.movies.filter(movie => movie.available === state.filter.available);
      if(state.filter.query.length > 2){
        return movies.filter(movie => movie.title.toLocaleLowerCase().includes(state.filter.query.toLocaleLowerCase()));
      }
      return movies;
    }
  }
})
