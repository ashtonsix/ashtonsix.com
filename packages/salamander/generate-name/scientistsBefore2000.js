// JSON.stringify(
//   Array.from(document.querySelectorAll('a'), i => ({
//     prettyName: i.innerText,
//     prettyNameLink: i.href
//   }))
//     .filter(i => !/\d/.test(i.prettyName))
//     .filter(i => /[A-Z]/.test(i.prettyName)),
//   null,
//   2
// )

// https://en.wikipedia.org/wiki/List_of_female_scientists_in_the_20th_century
const scientistsBefore2000 = [
  {
    "prettyName": "Katharine Bartlett",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Katharine_Bartlett"
  },
  {
    "prettyName": "Ruth Benedict",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ruth_Benedict"
  },
  {
    "prettyName": "Alicia Dussán de Reichel",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Alicia_Duss%C3%A1n_de_Reichel"
  },
  {
    "prettyName": "Dina Dahbany-Miraglia",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Dina_Dahbany-Miraglia"
  },
  {
    "prettyName": "Zora Neale Hurston",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Zora_Neale_Hurston"
  },
  {
    "prettyName": "Marjorie F. Lambert",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Marjorie_F._Lambert"
  },
  {
    "prettyName": "Dorothea Leighton",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Dorothea_Leighton"
  },
  {
    "prettyName": "Katharine Luomala",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Katharine_Luomala"
  },
  {
    "prettyName": "Margaret Mead",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Margaret_Mead"
  },
  {
    "prettyName": "Grete Mostny",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Grete_Mostny"
  },
  {
    "prettyName": "Miriam Tildesley",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Miriam_Tildesley"
  },
  {
    "prettyName": "Mildred Trotter",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Mildred_Trotter"
  },
  {
    "prettyName": "Camilla Wedgwood",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Camilla_Wedgwood"
  },
  {
    "prettyName": "Alba Zaluar",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Alba_Zaluar"
  },
  {
    "prettyName": "Sonia Alconini",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Sonia_Alconini"
  },
  {
    "prettyName": "Birgit Arrhenius",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Birgit_Arrhenius"
  },
  {
    "prettyName": "Dorothea Bate",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Dorothea_Bate"
  },
  {
    "prettyName": "Alex Bayliss",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Alex_Bayliss"
  },
  {
    "prettyName": "Crystal Bennett",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Crystal_Bennett"
  },
  {
    "prettyName": "Zeineb Benzina",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Zeineb_Benzina"
  },
  {
    "prettyName": "Jole Bovio Marconi",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Jole_Bovio_Marconi"
  },
  {
    "prettyName": "Juliet Clutton-Brock",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Juliet_Clutton-Brock"
  },
  {
    "prettyName": "Dorothy Charlesworth",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Dorothy_Charlesworth"
  },
  {
    "prettyName": "Lily Chitty",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Lily_Chitty"
  },
  {
    "prettyName": "Mary Kitson Clark",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Mary_Kitson_Clark"
  },
  {
    "prettyName": "Bryony Coles",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Bryony_Coles"
  },
  {
    "prettyName": "Alana Cordy-Collins",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Alana_Cordy-Collins"
  },
  {
    "prettyName": "Rosemary Cramp",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Rosemary_Cramp"
  },
  {
    "prettyName": "Joan Breton Connelly",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Joan_Breton_Connelly"
  },
  {
    "prettyName": "Margaret Conkey",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Margaret_Conkey"
  },
  {
    "prettyName": "Hester A. Davis",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Hester_A._Davis"
  },
  {
    "prettyName": "Frederica de Laguna",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Frederica_de_Laguna"
  },
  {
    "prettyName": "Kelly Dixon",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Kelly_Dixon"
  },
  {
    "prettyName": "Janette Deacon",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Janette_Deacon"
  },
  {
    "prettyName": "Elizabeth Eames",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Elizabeth_Eames"
  },
  {
    "prettyName": "Anabel Ford",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Anabel_Ford"
  },
  {
    "prettyName": "Aileen Fox",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Aileen_Fox"
  },
  {
    "prettyName": "Alison Frantz",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Alison_Frantz"
  },
  {
    "prettyName": "Honor Frost",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Honor_Frost"
  },
  {
    "prettyName": "Perla Fuscaldo",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Perla_Fuscaldo"
  },
  {
    "prettyName": "Elizabeth Baldwin Garland",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Elizabeth_Baldwin_Garland"
  },
  {
    "prettyName": "Kathleen K. Gilmore",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Kathleen_K._Gilmore"
  },
  {
    "prettyName": "Dorothy Garrod",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Dorothy_Garrod"
  },
  {
    "prettyName": "Roberta Gilchrist",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Roberta_Gilchrist"
  },
  {
    "prettyName": "Marija Gimbutas",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Marija_Gimbutas"
  },
  {
    "prettyName": "Kurgan hypothesis",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Kurgan_hypothesis"
  },
  {
    "prettyName": "Hetty Goldman",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Hetty_Goldman"
  },
  {
    "prettyName": "Anna Maria Groot",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Anna_Maria_Groot"
  },
  {
    "prettyName": "Audrey Henshall",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Audrey_Henshall"
  },
  {
    "prettyName": "Corinne Hofman",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Corinne_Hofman"
  },
  {
    "prettyName": "Cynthia Irwin-Williams",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Cynthia_Irwin-Williams"
  },
  {
    "prettyName": "Wilhelmina Feemster Jashemski",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Wilhelmina_Feemster_Jashemski"
  },
  {
    "prettyName": "Margaret Ursula Jones",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Margaret_Ursula_Jones"
  },
  {
    "prettyName": "Mucking",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Mucking"
  },
  {
    "prettyName": "Essex",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Essex"
  },
  {
    "prettyName": "Rosemary Joyce",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Rosemary_Joyce"
  },
  {
    "prettyName": "Kathleen Kenyon",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Kathleen_Kenyon"
  },
  {
    "prettyName": "Alice Kober",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Alice_Kober"
  },
  {
    "prettyName": "Kristina Killgrove",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Kristina_Killgrove"
  },
  {
    "prettyName": "Winifred Lamb",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Winifred_Lamb"
  },
  {
    "prettyName": "Mary Leakey",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Mary_Leakey"
  },
  {
    "prettyName": "Li Liu (archaeologist)",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Li_Liu_(archaeologist)"
  },
  {
    "prettyName": "Anna Marguerite McCann",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Anna_Marguerite_McCann"
  },
  {
    "prettyName": "Isabel McBryde",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Isabel_McBryde"
  },
  {
    "prettyName": "Betty Meehan",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Betty_Meehan"
  },
  {
    "prettyName": "Audrey Meaney",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Audrey_Meaney"
  },
  {
    "prettyName": "Margaret Murray",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Margaret_Murray"
  },
  {
    "prettyName": "Bertha Parker Pallan",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Bertha_Parker_Pallan"
  },
  {
    "prettyName": "Charlotte Roberts",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Charlotte_Roberts"
  },
  {
    "prettyName": "Margaret Rule",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Margaret_Rule"
  },
  {
    "prettyName": "Elisabeth Ruttkay",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Elisabeth_Ruttkay"
  },
  {
    "prettyName": "Hanna Rydh",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Hanna_Rydh"
  },
  {
    "prettyName": "Elizabeth Slater",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Elizabeth_Slater"
  },
  {
    "prettyName": "Julie K. Stein",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Julie_K._Stein"
  },
  {
    "prettyName": "Hoang Thi Than",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Hoang_Thi_Than"
  },
  {
    "prettyName": "Birgitta Wallace",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Birgitta_Wallace"
  },
  {
    "prettyName": "Zheng Zhenxiang",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Zheng_Zhenxiang"
  },
  {
    "prettyName": "Claudia Alexander",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Claudia_Alexander"
  },
  {
    "prettyName": "Mary Adela Blagg",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Mary_Adela_Blagg"
  },
  {
    "prettyName": "Margaret Burbidge",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Margaret_Burbidge"
  },
  {
    "prettyName": "Jocelyn Bell Burnell",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Jocelyn_Bell_Burnell"
  },
  {
    "prettyName": "Annie Jump Cannon",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Annie_Jump_Cannon"
  },
  {
    "prettyName": "Janine Connes",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Janine_Connes"
  },
  {
    "prettyName": "A. Grace Cook",
    "prettyNameLink": "https://en.wikipedia.org/wiki/A._Grace_Cook"
  },
  {
    "prettyName": "Heather Couper",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Heather_Couper"
  },
  {
    "prettyName": "Joy Crisp",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Joy_Crisp"
  },
  {
    "prettyName": "Sandra Faber",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Sandra_Faber"
  },
  {
    "prettyName": "Pamela Gay",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Pamela_Gay"
  },
  {
    "prettyName": "Vera Fedorovna Gaze",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Vera_Fedorovna_Gaze"
  },
  {
    "prettyName": "Julie Vinter Hansen",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Julie_Vinter_Hansen"
  },
  {
    "prettyName": "Martha Haynes",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Martha_Haynes"
  },
  {
    "prettyName": "Lisa Kaltenegger",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Lisa_Kaltenegger"
  },
  {
    "prettyName": "Dorothea Klumpke",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Dorothea_Klumpke"
  },
  {
    "prettyName": "Henrietta Leavitt",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Henrietta_Leavitt"
  },
  {
    "prettyName": "Evelyn Leland",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Evelyn_Leland"
  },
  {
    "prettyName": "Priyamvada Natarajan",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Priyamvada_Natarajan"
  },
  {
    "prettyName": "Carolyn Porco",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Carolyn_Porco"
  },
  {
    "prettyName": "Cecilia Payne-Gaposchkin",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Cecilia_Payne-Gaposchkin"
  },
  {
    "prettyName": "Ruby Payne-Scott",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ruby_Payne-Scott"
  },
  {
    "prettyName": "Vera Rubin",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Vera_Rubin"
  },
  {
    "prettyName": "Charlotte Moore Sitterly",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Charlotte_Moore_Sitterly"
  },
  {
    "prettyName": "Jill Tarter",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Jill_Tarter"
  },
  {
    "prettyName": "Beatrice Tinsley",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Beatrice_Tinsley"
  },
  {
    "prettyName": "Nora Lilian Alcock",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Nora_Lilian_Alcock"
  },
  {
    "prettyName": "Alice Alldredge",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Alice_Alldredge"
  },
  {
    "prettyName": "June Almeida",
    "prettyNameLink": "https://en.wikipedia.org/wiki/June_Almeida"
  },
  {
    "prettyName": "E. K. Janaki Ammal",
    "prettyNameLink": "https://en.wikipedia.org/wiki/EK_Janaki_Ammal"
  },
  {
    "prettyName": "Vandika Ervandovna Avetisyan",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Vandika_Ervandovna_Avetisyan"
  },
  {
    "prettyName": "Denise P. Barlow",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Denise_P._Barlow"
  },
  {
    "prettyName": "Yvonne Barr",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Yvonne_Barr"
  },
  {
    "prettyName": "Lela Viola Barton",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Lela_Viola_Barton"
  },
  {
    "prettyName": "Kathleen Basford",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Kathleen_Basford"
  },
  {
    "prettyName": "Gillian Bates",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Gillian_Bates"
  },
  {
    "prettyName": "Val Beral",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Val_Beral"
  },
  {
    "prettyName": "Grace Berlin",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Grace_Berlin"
  },
  {
    "prettyName": "Agathe L. van Beverwijk",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Agathe_L._van_Beverwijk"
  },
  {
    "prettyName": "Gladys Black",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Gladys_Black"
  },
  {
    "prettyName": "Idelisa Bonnelly",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Idelisa_Bonnelly"
  },
  {
    "prettyName": "Alice Middleton Boring",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Alice_Middleton_Boring"
  },
  {
    "prettyName": "Annette Frances Braun",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Annette_Frances_Braun"
  },
  {
    "prettyName": "Linda B. Buck",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Linda_B._Buck"
  },
  {
    "prettyName": "Hildred Mary Butler",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Hildred_Mary_Butler"
  },
  {
    "prettyName": "Esther Byrnes",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Esther_Byrnes"
  },
  {
    "prettyName": "Bertha Cady",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Bertha_Cady"
  },
  {
    "prettyName": "Audrey Cahn",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Audrey_Cahn"
  },
  {
    "prettyName": "Eleanor Carothers",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Eleanor_Carothers"
  },
  {
    "prettyName": "Rachel Carson",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Rachel_Carson"
  },
  {
    "prettyName": "Edith Katherine Cash",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Edith_Katherine_Cash"
  },
  {
    "prettyName": "Ann Chapman",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ann_Chapman"
  },
  {
    "prettyName": "Martha Chase",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Martha_Chase"
  },
  {
    "prettyName": "Mary-Dell Chilton",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Mary-Dell_Chilton"
  },
  {
    "prettyName": "Theresa Clay",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Theresa_Clay"
  },
  {
    "prettyName": "Edith Clements",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Edith_Clements"
  },
  {
    "prettyName": "Elzada Clover",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Elzada_Clover"
  },
  {
    "prettyName": "Ursula M. Cowgill",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ursula_Cowgill"
  },
  {
    "prettyName": "Gerty Theresa Cori",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Gerty_Theresa_Cori"
  },
  {
    "prettyName": "Suzanne Cory",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Suzanne_Cory"
  },
  {
    "prettyName": "Janet Darbyshire",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Janet_Darbyshire"
  },
  {
    "prettyName": "Gertrude Crotty Davenport",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Gertrude_Crotty_Davenport"
  },
  {
    "prettyName": "Sophie Charlotte Ducker",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Sophie_Charlotte_Ducker"
  },
  {
    "prettyName": "Sophia Eckerson",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Sophia_Eckerson"
  },
  {
    "prettyName": "Sylvia Edlund",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Sylvia_Edlund"
  },
  {
    "prettyName": "Charlotte Elliott",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Charlotte_Elliott"
  },
  {
    "prettyName": "Charlotte Cortlandt Ellis",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Charlotte_Cortlandt_Ellis"
  },
  {
    "prettyName": "Vera Danchakoff",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Vera_Danchakoff"
  },
  {
    "prettyName": "Rhoda Erdmann",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Rhoda_Erdmann"
  },
  {
    "prettyName": "Katherine Esau",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Katherine_Esau"
  },
  {
    "prettyName": "Edna H. Fawcett",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Edna_H._Fawcett"
  },
  {
    "prettyName": "Catherine Feuillet",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Catherine_Feuillet"
  },
  {
    "prettyName": "Dian Fossey",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Dian_Fossey"
  },
  {
    "prettyName": "Birutė Galdikas",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Birut%C4%97_Galdikas"
  },
  {
    "prettyName": "Margaret Sylvia Gilliland",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Margaret_Sylvia_Gilliland"
  },
  {
    "prettyName": "Jane Goodall",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Jane_Goodall"
  },
  {
    "prettyName": "Isabella Gordon",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Isabella_Gordon"
  },
  {
    "prettyName": "Susan Greenfield",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Susan_Greenfield"
  },
  {
    "prettyName": "Charlotte Elliott",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Charlotte_Elliott_(botanist)"
  },
  {
    "prettyName": "Constance Endicott Hartt",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Constance_Endicott_Hartt"
  },
  {
    "prettyName": "Eliza Amy Hodgson",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Eliza_Amy_Hodgson"
  },
  {
    "prettyName": "Lena B. Smithers Hughes",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Lena_B._Smithers_Hughes"
  },
  {
    "prettyName": "Eva Jablonka",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Eva_Jablonka"
  },
  {
    "prettyName": "Marian Koshland",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Marian_Koshland"
  },
  {
    "prettyName": "Frances Adams Le Sueur",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Frances_Adams_Le_Sueur"
  },
  {
    "prettyName": "Margaret Reed Lewis",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Margaret_Reed_Lewis"
  },
  {
    "prettyName": "Maria Carmelo Lico",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Maria_Carmelo_Lico"
  },
  {
    "prettyName": "Gloria Lim",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Gloria_Lim"
  },
  {
    "prettyName": "University of Singapore",
    "prettyNameLink": "https://en.wikipedia.org/wiki/National_University_of_Singapore"
  },
  {
    "prettyName": "Liliana Lubinska",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Liliana_Lubinska"
  },
  {
    "prettyName": "Misha Mahowald",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Misha_Mahowald"
  },
  {
    "prettyName": "Lynn Margulis",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Lynn_Margulis"
  },
  {
    "prettyName": "Deborah Martin-Downs",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Deborah_Martin-Downs"
  },
  {
    "prettyName": "Sara Branham Matthews",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Sara_Branham_Matthews"
  },
  {
    "prettyName": "Barbara McClintock",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Barbara_McClintock"
  },
  {
    "prettyName": "Eileen McCracken",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Eileen_McCracken"
  },
  {
    "prettyName": "Ruth Colvin Starrett McGuire",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ruth_Colvin_Starrett_McGuire"
  },
  {
    "prettyName": "Anne McLaren",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Anne_McLaren"
  },
  {
    "prettyName": "Ethel Irene McLennan",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ethel_Irene_McLennan"
  },
  {
    "prettyName": "Eunice Thomas Miner",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Eunice_Thomas_Miner"
  },
  {
    "prettyName": "Rita Levi-Montalcini",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Rita_Levi-Montalcini"
  },
  {
    "prettyName": "Marianne V. Moore",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Marianne_V._Moore"
  },
  {
    "prettyName": "Ann Haven Morgan",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ann_Haven_Morgan"
  },
  {
    "prettyName": "Christiane Nüsslein-Volhard",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Christiane_N%C3%BCsslein-Volhard"
  },
  {
    "prettyName": "Ida Shepard Oldroyd",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ida_Shepard_Oldroyd"
  },
  {
    "prettyName": "Daphne Osborne",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Daphne_Osborne"
  },
  {
    "prettyName": "Mary Parke",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Mary_Parke"
  },
  {
    "prettyName": "Jane E. Parker",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Jane_E._Parker"
  },
  {
    "prettyName": "Eva J. Pell",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Eva_J._Pell"
  },
  {
    "prettyName": "Theodora Lisle Prankerd",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Theodora_Lisle_Prankerd"
  },
  {
    "prettyName": "Joan Beauchamp Procter",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Joan_Beauchamp_Procter"
  },
  {
    "prettyName": "F. Gwendolen Rees",
    "prettyNameLink": "https://en.wikipedia.org/wiki/F._Gwendolen_Rees"
  },
  {
    "prettyName": "Anita Roberts",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Anita_Roberts"
  },
  {
    "prettyName": "Edith A. Roberts",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Edith_A._Roberts"
  },
  {
    "prettyName": "Gudrun Ruud",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Gudrun_Ruud"
  },
  {
    "prettyName": "Hazel Schmoll",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Hazel_Schmoll"
  },
  {
    "prettyName": "Eva Schönbeck-Temesy",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Eva_Sch%C3%B6nbeck-Temesy"
  },
  {
    "prettyName": "Idah Sithole-Niang",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Idah_Sithole-Niang"
  },
  {
    "prettyName": "Margaret A. Stanley",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Margaret_Stanley_(virologist)"
  },
  {
    "prettyName": "Phyllis Starkey",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Phyllis_Starkey"
  },
  {
    "prettyName": "Magda Staudinger",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Magda_Staudinger"
  },
  {
    "prettyName": "Latvian",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Latvian_language"
  },
  {
    "prettyName": "Sarah Stewart",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Sarah_Stewart_(cancer_researcher)"
  },
  {
    "prettyName": "Ragnhild Sundby",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ragnhild_Sundby"
  },
  {
    "prettyName": "Maria Telkes",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Maria_Telkes"
  },
  {
    "prettyName": "Lois H. Tiffany",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Lois_H._Tiffany"
  },
  {
    "prettyName": "Lydia Villa-Komaroff",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Lydia_Villa-Komaroff"
  },
  {
    "prettyName": "Karen Vousden",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Karen_Vousden"
  },
  {
    "prettyName": "Elisabeth Vrba",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Elisabeth_Vrba"
  },
  {
    "prettyName": "Marvalee Wake",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Marvalee_Wake"
  },
  {
    "prettyName": "Jane C. Wright",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Jane_C._Wright"
  },
  {
    "prettyName": "Kono Yasui",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Kono_Yasui"
  },
  {
    "prettyName": "Eleanor Anne Young",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Eleanor_Anne_Young"
  },
  {
    "prettyName": "Maria Abbracchio",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Maria_Abbracchio"
  },
  {
    "prettyName": "Barbara Askins",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Barbara_Askins"
  },
  {
    "prettyName": "Alice Ball",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Alice_Ball"
  },
  {
    "prettyName": "Ulrike Beisiegel",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ulrike_Beisiegel"
  },
  {
    "prettyName": "Anne Beloff-Chain",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Anne_Beloff-Chain"
  },
  {
    "prettyName": "Jeannette Brown",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Jeannette_Brown"
  },
  {
    "prettyName": "Astrid Cleve",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Astrid_Cleve"
  },
  {
    "prettyName": "Seetha Coleman-Kammula",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Seetha_Coleman-Kammula"
  },
  {
    "prettyName": "Maria Skłodowska-Curie",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Marie_Curie"
  },
  {
    "prettyName": "Mary Campbell Dawbarn",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Mary_Campbell_Dawbarn"
  },
  {
    "prettyName": "Moira Lenore Dynon",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Moira_Lenore_Dynon"
  },
  {
    "prettyName": "Gertrude B. Elion",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Gertrude_B._Elion"
  },
  {
    "prettyName": "Gwendolyn Wilson Fowler",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Gwendolyn_Wilson_Fowler"
  },
  {
    "prettyName": "Rosalind Franklin",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Rosalind_Franklin"
  },
  {
    "prettyName": "Ellen Gleditsch",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ellen_Gleditsch"
  },
  {
    "prettyName": "Jenny Glusker",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Jenny_Glusker"
  },
  {
    "prettyName": "Emīlija Gudriniece",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Em%C4%ABlija_Gudriniece"
  },
  {
    "prettyName": "Anna J. Harrison",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Anna_J._Harrison"
  },
  {
    "prettyName": "Dorothy Crowfoot Hodgkin",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Dorothy_Crowfoot_Hodgkin"
  },
  {
    "prettyName": "Clara Immerwahr",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Clara_Immerwahr"
  },
  {
    "prettyName": "Irène Joliot-Curie",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ir%C3%A8ne_Joliot-Curie"
  },
  {
    "prettyName": "Chika Kuroda",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Chika_Kuroda"
  },
  {
    "prettyName": "Stephanie Kwolek",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Stephanie_Kwolek"
  },
  {
    "prettyName": "Kevlar",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Kevlar"
  },
  {
    "prettyName": "Lidija Liepiņa",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Lidija_Liepi%C5%86a"
  },
  {
    "prettyName": "Kathleen Lonsdale",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Kathleen_Lonsdale"
  },
  {
    "prettyName": "Grace Medes",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Grace_Medes"
  },
  {
    "prettyName": "Maud Menten",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Maud_Menten"
  },
  {
    "prettyName": "Muriel Wheldale Onslow",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Muriel_Wheldale_Onslow"
  },
  {
    "prettyName": "Helen T. Parsons",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Helen_T._Parsons"
  },
  {
    "prettyName": "Nellie M. Payne",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Nellie_M._Payne"
  },
  {
    "prettyName": "Eva Philbin",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Eva_Philbin"
  },
  {
    "prettyName": "Darshan Ranganathan",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Darshan_Ranganathan"
  },
  {
    "prettyName": "Mildred Rebstock",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Mildred_Rebstock"
  },
  {
    "prettyName": "Elizabeth Rona",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Elizabeth_Rona"
  },
  {
    "prettyName": "Patsy Sherman",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Patsy_Sherman"
  },
  {
    "prettyName": "Scotchgard",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Scotchgard"
  },
  {
    "prettyName": "Marija Šimanska",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Marija_%C5%A0imanska"
  },
  {
    "prettyName": "Ida Noddack Tacke",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ida_Noddack"
  },
  {
    "prettyName": "Grace Oladunni Taylor",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Grace_Oladunni_Taylor"
  },
  {
    "prettyName": "Jean Thomas",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Jean_Thomas_(academic)"
  },
  {
    "prettyName": "Michiyo Tsujimura",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Michiyo_Tsujimura"
  },
  {
    "prettyName": "Joanna Maria Vandenberg",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Joanna_Maria_Vandenberg"
  },
  {
    "prettyName": "Elizabeth Williamson",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Elizabeth_Williamson"
  },
  {
    "prettyName": "Ada Yonath",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ada_Yonath"
  },
  {
    "prettyName": "Christina Miller",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Christina_Miller"
  },
  {
    "prettyName": "Zonia Baber",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Zonia_Baber"
  },
  {
    "prettyName": "Inés Cifuentes",
    "prettyNameLink": "https://en.wikipedia.org/wiki/In%C3%A9s_Cifuentes"
  },
  {
    "prettyName": "Moira Dunbar",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Moira_Dunbar"
  },
  {
    "prettyName": "Elizabeth F. Fisher",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Elizabeth_F._Fisher"
  },
  {
    "prettyName": "Regina Fleszarowa",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Regina_Fleszarowa"
  },
  {
    "prettyName": "Winifred Goldring",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Winifred_Goldring"
  },
  {
    "prettyName": "Eileen Hendriks",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Eileen_Hendriks"
  },
  {
    "prettyName": "Dorothée Le Maître",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Doroth%C3%A9e_Le_Ma%C3%AEtre"
  },
  {
    "prettyName": "Karen Cook McNally",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Karen_Cook_McNally"
  },
  {
    "prettyName": "Inge Lehmann",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Inge_Lehmann"
  },
  {
    "prettyName": "Marcia McNutt",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Marcia_McNutt"
  },
  {
    "prettyName": "Ellen Louise Mertz",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ellen_Louise_Mertz"
  },
  {
    "prettyName": "Ruth Schmidt",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ruth_Schmidt"
  },
  {
    "prettyName": "Ethel Shakespear",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ethel_Shakespear"
  },
  {
    "prettyName": "Kathleen Sherrard",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Kathleen_Sherrard"
  },
  {
    "prettyName": "Ethel Skeat",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ethel_Skeat"
  },
  {
    "prettyName": "Marjorie Sweeting",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Marjorie_Sweeting"
  },
  {
    "prettyName": "Marie Tharp",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Marie_Tharp"
  },
  {
    "prettyName": "Elsa G. Vilmundardóttir",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Elsa_G._Vilmundard%C3%B3ttir"
  },
  {
    "prettyName": "Marguerite Williams",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Marguerite_Williams"
  },
  {
    "prettyName": "Alice Wilson",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Alice_Wilson"
  },
  {
    "prettyName": "Elizabeth A. Wood",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Elizabeth_A._Wood"
  },
  {
    "prettyName": "Hertha Marks Ayrton",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Hertha_Marks_Ayrton"
  },
  {
    "prettyName": "Anita Borg",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Anita_Borg"
  },
  {
    "prettyName": "Mary L. Cartwright",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Mary_L._Cartwright"
  },
  {
    "prettyName": "Amanda Chessell",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Amanda_Chessell"
  },
  {
    "prettyName": "Ingrid Daubechies",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ingrid_Daubechies"
  },
  {
    "prettyName": "Tatjana Ehrenfest-Afanassjewa",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Tatyana_Afanasyeva"
  },
  {
    "prettyName": "Deborah Estrin",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Deborah_Estrin"
  },
  {
    "prettyName": "Vera Faddeeva",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Vera_Faddeeva"
  },
  {
    "prettyName": "Russian",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Russian_language"
  },
  {
    "prettyName": "Shafi Goldwasser",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Shafi_Goldwasser"
  },
  {
    "prettyName": "Evelyn Boyd Granville",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Evelyn_Boyd_Granville"
  },
  {
    "prettyName": "Marion Cameron Gray",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Marion_Cameron_Gray"
  },
  {
    "prettyName": "Barbara Grosz",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Barbara_Grosz"
  },
  {
    "prettyName": "Bryna Kra",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Bryna_Kra"
  },
  {
    "prettyName": "Frances Hardcastle",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Frances_Hardcastle"
  },
  {
    "prettyName": "Julia Hirschberg",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Julia_Hirschberg"
  },
  {
    "prettyName": "Grace Hopper",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Grace_Hopper"
  },
  {
    "prettyName": "Margarete Kahn",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Margarete_Kahn"
  },
  {
    "prettyName": "Lyudmila Keldysh",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Lyudmila_Keldysh"
  },
  {
    "prettyName": "Marta Kwiatkowska",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Marta_Kwiatkowska"
  },
  {
    "prettyName": "Marguerite Lehr",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Marguerite_Lehr"
  },
  {
    "prettyName": "Margaret Anne LeMone",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Margaret_Anne_LeMone"
  },
  {
    "prettyName": "Barbara Liskov",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Barbara_Liskov"
  },
  {
    "prettyName": "Liskov substitution principle",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Liskov_substitution_principle"
  },
  {
    "prettyName": "Margaret Millington",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Margaret_Millington"
  },
  {
    "prettyName": "Mangala Narlikar",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Mangala_Narlikar"
  },
  {
    "prettyName": "Rózsa Péter",
    "prettyNameLink": "https://en.wikipedia.org/wiki/R%C3%B3zsa_P%C3%A9ter"
  },
  {
    "prettyName": "Karen Sparck Jones",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Karen_Sparck_Jones"
  },
  {
    "prettyName": "Dorothy Vaughan",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Dorothy_Vaughan"
  },
  {
    "prettyName": "Dorothy Maud Wrinch",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Dorothy_Maud_Wrinch"
  },
  {
    "prettyName": "Jeannette Wing",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Jeannette_Wing"
  },
  {
    "prettyName": "Kathleen Jannette Anderson",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Kathleen_Jannette_Anderson"
  },
  {
    "prettyName": "Susan Blackmore",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Susan_Blackmore"
  },
  {
    "prettyName": "Florence Annie Yeldham",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Florence_Annie_Yeldham"
  },
  {
    "prettyName": "Kate Gleason",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Kate_Gleason"
  },
  {
    "prettyName": "Laura Anne Willson",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Laura_Annie_Willson"
  },
  {
    "prettyName": "Florence Violet McKenzie",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Florence_Violet_McKenzie"
  },
  {
    "prettyName": "Frances Bradfield",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Frances_Bradfield"
  },
  {
    "prettyName": "Elsie MacGill",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Elsie_MacGill"
  },
  {
    "prettyName": "Frances Hugle",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Frances_Hugle"
  },
  {
    "prettyName": "Ida Holz",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ida_Holz"
  },
  {
    "prettyName": "Maria Tereza Jorge Pádua",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Maria_Tereza_Jorge_P%C3%A1dua"
  },
  {
    "prettyName": "Nance Dicciani",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Nance_Dicciani"
  },
  {
    "prettyName": "Ana María Flores",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ana_Mar%C3%ADa_Flores"
  },
  {
    "prettyName": "Julia King, Baroness Brown of Cambridge",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Julia_King,_Baroness_Brown_of_Cambridge"
  },
  {
    "prettyName": "Zhenan Bao",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Zhenan_Bao"
  },
  {
    "prettyName": "Jayne Bryant",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Jayne_Bryant"
  },
  {
    "prettyName": "Molly Shoichet",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Molly_Shoichet"
  },
  {
    "prettyName": "Phyllis Margery Anderson",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Phyllis_Margery_Anderson"
  },
  {
    "prettyName": "Virginia Apgar",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Virginia_Apgar"
  },
  {
    "prettyName": "Apgar score",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Apgar_score"
  },
  {
    "prettyName": "Anna Baetjer",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Anna_Baetjer"
  },
  {
    "prettyName": "Roberta Bondar",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Roberta_Bondar"
  },
  {
    "prettyName": "Dorothy Lavinia Brown",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Dorothy_Lavinia_Brown"
  },
  {
    "prettyName": "Audrey Cahn",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Audrey_Cahn"
  },
  {
    "prettyName": "Margaret Chan",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Margaret_Chan"
  },
  {
    "prettyName": "Evelyn Stocking Crosslin",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Evelyn_Stocking_Crosslin"
  },
  {
    "prettyName": "Eleanor Davies-Colley",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Eleanor_Davies-Colley"
  },
  {
    "prettyName": "Claire Fagin",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Claire_Fagin"
  },
  {
    "prettyName": "Esther Greisheimer",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Esther_Greisheimer"
  },
  {
    "prettyName": "L. Ruth Guy",
    "prettyNameLink": "https://en.wikipedia.org/wiki/L._Ruth_Guy"
  },
  {
    "prettyName": "Karen C. Johnson",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Karen_C._Johnson"
  },
  {
    "prettyName": "Krista Kostial-Šimonović",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Krista_Kostial-%C5%A0imonovi%C4%87"
  },
  {
    "prettyName": "Mary Jeanne Kreek",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Mary_Jeanne_Kreek"
  },
  {
    "prettyName": "Elise L'Esperance",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Elise_L%27Esperance"
  },
  {
    "prettyName": "Elaine Marjory Little",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Elaine_Marjory_Little"
  },
  {
    "prettyName": "Anna Suk-Fong Lok",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Anna_Suk-Fong_Lok"
  },
  {
    "prettyName": "Eleanor Josephine Macdonald",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Eleanor_Josephine_Macdonald"
  },
  {
    "prettyName": "Catharine Macfarlane",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Catharine_Macfarlane"
  },
  {
    "prettyName": "Charlotte E. Maguire",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Charlotte_E._Maguire"
  },
  {
    "prettyName": "Louisa Martindale",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Louisa_Martindale"
  },
  {
    "prettyName": "Helen Mayo",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Helen_Mayo"
  },
  {
    "prettyName": "Frances Gertrude McGill",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Frances_Gertrude_McGill"
  },
  {
    "prettyName": "Eleanor Montague",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Eleanor_Montague"
  },
  {
    "prettyName": "Anne B. Newman",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Anne_B._Newman"
  },
  {
    "prettyName": "Antonia Novello",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Antonia_Novello"
  },
  {
    "prettyName": "Dorothea Orem",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Dorothea_Orem"
  },
  {
    "prettyName": "Ida Ørskov",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ida_%C3%98rskov"
  },
  {
    "prettyName": "May Owen",
    "prettyNameLink": "https://en.wikipedia.org/wiki/May_Owen"
  },
  {
    "prettyName": "Angeliki Panajiotatou",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Angeliki_Panajiotatou"
  },
  {
    "prettyName": "Kathleen I. Pritchard",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Kathleen_I._Pritchard"
  },
  {
    "prettyName": "Frieda Robscheit-Robbins",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Frieda_Robscheit-Robbins"
  },
  {
    "prettyName": "Ora Mendelsohn Rosen",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ora_Mendelsohn_Rosen"
  },
  {
    "prettyName": "Una Ryan",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Una_Ryan"
  },
  {
    "prettyName": "Una M. Ryan",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Una_M._Ryan"
  },
  {
    "prettyName": "Velma Scantlebury",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Velma_Scantlebury"
  },
  {
    "prettyName": "Lise Thiry",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Lise_Thiry"
  },
  {
    "prettyName": "Helen Rodríguez Trías",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Helen_Rodr%C3%ADguez_Tr%C3%ADas"
  },
  {
    "prettyName": "Marie Stopes",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Marie_Stopes"
  },
  {
    "prettyName": "Elizabeth M. Ward",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Elizabeth_M._Ward"
  },
  {
    "prettyName": "Elsie Widdowson",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Elsie_Widdowson"
  },
  {
    "prettyName": "Fiona Wood",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Fiona_Wood"
  },
  {
    "prettyName": "Mary Leakey",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Mary_Leakey"
  },
  {
    "prettyName": "Suzanne LeClercq",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Suzanne_LeClercq"
  },
  {
    "prettyName": "Betty Kellett Nadeau",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Betty_Kellett_Nadeau"
  },
  {
    "prettyName": "Faye Ajzenberg-Selove",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Faye_Ajzenberg-Selove"
  },
  {
    "prettyName": "Betsy Ancker-Johnson",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Betsy_Ancker-Johnson"
  },
  {
    "prettyName": "Milla Baldo-Ceolin",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Milla_Baldo-Ceolin"
  },
  {
    "prettyName": "Marietta Blau",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Marietta_Blau"
  },
  {
    "prettyName": "Lili Bleeker",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Lili_Bleeker"
  },
  {
    "prettyName": "Katharine Blodgett",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Katharine_Blodgett"
  },
  {
    "prettyName": "Christiane Bonnelle",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Christiane_Bonnelle"
  },
  {
    "prettyName": "Sonja Ashauer",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Sonja_Ashauer"
  },
  {
    "prettyName": "Tatiana Birshtein",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Tatiana_Birshtein"
  },
  {
    "prettyName": "Margrete Heiberg Bose",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Margrete_Heiberg_Bose"
  },
  {
    "prettyName": "Jenny Rosenthal Bramley",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Jenny_Rosenthal_Bramley"
  },
  {
    "prettyName": "Harriet Brooks",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Harriet_Brooks"
  },
  {
    "prettyName": "A. Catrina Bryce",
    "prettyNameLink": "https://en.wikipedia.org/wiki/A._Catrina_Bryce"
  },
  {
    "prettyName": "Nina Byers",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Nina_Byers"
  },
  {
    "prettyName": "Yvette Cauchois",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Yvette_Cauchois"
  },
  {
    "prettyName": "Yvonne Choquet-Bruhat",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Yvonne_Choquet-Bruhat"
  },
  {
    "prettyName": "Patricia Cladis",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Patricia_Cladis"
  },
  {
    "prettyName": "Esther Conwell",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Esther_Conwell"
  },
  {
    "prettyName": "Cécile DeWitt-Morette",
    "prettyNameLink": "https://en.wikipedia.org/wiki/C%C3%A9cile_DeWitt-Morette"
  },
  {
    "prettyName": "Louise Dolan",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Louise_Dolan"
  },
  {
    "prettyName": "Nancy M. Dowdy",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Nancy_M._Dowdy"
  },
  {
    "prettyName": "Mildred Dresselhaus",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Mildred_Dresselhaus"
  },
  {
    "prettyName": "Helen T. Edwards",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Helen_T._Edwards"
  },
  {
    "prettyName": "Tevatron",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Tevatron"
  },
  {
    "prettyName": "Magda Ericson",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Magda_Ericson"
  },
  {
    "prettyName": "Edith Farkas",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Edith_Farkas"
  },
  {
    "prettyName": "Joan Feynman",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Joan_Feynman"
  },
  {
    "prettyName": "Ursula Franklin",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ursula_Franklin"
  },
  {
    "prettyName": "Judy Franz",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Judy_Franz"
  },
  {
    "prettyName": "Joan Maie Freeman",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Joan_Maie_Freeman"
  },
  {
    "prettyName": "Phyllis S. Freier",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Phyllis_S._Freier"
  },
  {
    "prettyName": "Mary K. Gaillard",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Mary_K._Gaillard"
  },
  {
    "prettyName": "Fanny Gates",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Fanny_Gates"
  },
  {
    "prettyName": "Claire F. Gmachl",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Claire_F._Gmachl"
  },
  {
    "prettyName": "Maria Goeppert-Mayer",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Maria_Goeppert-Mayer"
  },
  {
    "prettyName": "Gertrude Scharff Goldhaber",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Gertrude_Scharff_Goldhaber"
  },
  {
    "prettyName": "Sulamith Goldhaber",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Sulamith_Goldhaber"
  },
  {
    "prettyName": "Gail Hanson",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Gail_Hanson"
  },
  {
    "prettyName": "Margrete Heiberg Bose",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Margrete_Heiberg_Bose"
  },
  {
    "prettyName": "Evans Hayward",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Evans_Hayward"
  },
  {
    "prettyName": "Caroline Herzenberg",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Caroline_Herzenberg"
  },
  {
    "prettyName": "Hanna von Hoerner",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Hanna_von_Hoerner"
  },
  {
    "prettyName": "Shirley Jackson",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Shirley_Jackson_(physicist)"
  },
  {
    "prettyName": "Rensselaer Polytechnic Institute",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Rensselaer_Polytechnic_Institute"
  },
  {
    "prettyName": "Bertha Swirles Jeffreys",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Bertha_Swirles"
  },
  {
    "prettyName": "Lorella M. Jones",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Lorella_M._Jones"
  },
  {
    "prettyName": "Carole Jordan",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Carole_Jordan"
  },
  {
    "prettyName": "Renata Kallosh",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Renata_Kallosh"
  },
  {
    "prettyName": "Berta Karlik",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Berta_Karlik"
  },
  {
    "prettyName": "Bruria Kaufman",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Bruria_Kaufman"
  },
  {
    "prettyName": "Elizaveta Karamihailova",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Elizaveta_Karamihailova"
  },
  {
    "prettyName": "Marcia Keith",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Marcia_Keith"
  },
  {
    "prettyName": "Ann Kiessling",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ann_Kiessling"
  },
  {
    "prettyName": "Margaret G. Kivelson",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Margaret_G._Kivelson"
  },
  {
    "prettyName": "Noemie Benczer Koller",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Noemie_Benczer_Koller"
  },
  {
    "prettyName": "Ninni Kronberg",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ninni_Kronberg"
  },
  {
    "prettyName": "Doris Kuhlmann-Wilsdorf",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Doris_Kuhlmann-Wilsdorf"
  },
  {
    "prettyName": "Elizabeth Laird (physicist)",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Elizabeth_Laird_(physicist)"
  },
  {
    "prettyName": "Juliet Lee-Franzini",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Juliet_Lee-Franzini"
  },
  {
    "prettyName": "Inge Lehmann",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Inge_Lehmann"
  },
  {
    "prettyName": "Kathleen Lonsdale",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Kathleen_Lonsdale"
  },
  {
    "prettyName": "Margaret Eliza Maltby",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Margaret_Eliza_Maltby"
  },
  {
    "prettyName": "Nina Marković",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Nina_Markovi%C4%87"
  },
  {
    "prettyName": "Helen Megaw",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Helen_Megaw"
  },
  {
    "prettyName": "Mileva Maric",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Mileva_Maric"
  },
  {
    "prettyName": "Lise Meitner",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Lise_Meitner"
  },
  {
    "prettyName": "Kirstine Meyer",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Kirstine_Meyer"
  },
  {
    "prettyName": "Luise Meyer-Schutzmeister",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Luise_Meyer-Schutzmeister"
  },
  {
    "prettyName": "Anna Nagurney",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Anna_Nagurney"
  },
  {
    "prettyName": "Chiara Nappi",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Chiara_Nappi"
  },
  {
    "prettyName": "Ann Nelson",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ann_Nelson"
  },
  {
    "prettyName": "Marcia Neugebauer",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Marcia_Neugebauer"
  },
  {
    "prettyName": "Gertrude Neumark",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Gertrude_Neumark"
  },
  {
    "prettyName": "Ida Tacke Noddack",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ida_Tacke_Noddack"
  },
  {
    "prettyName": "Emmy Noether",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Emmy_Noether"
  },
  {
    "prettyName": "Marguerite Perey",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Marguerite_Perey"
  },
  {
    "prettyName": "Melba Phillips",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Melba_Phillips"
  },
  {
    "prettyName": "Agnes Pockels",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Agnes_Pockels"
  },
  {
    "prettyName": "Pelageya Polubarinova-Kochina",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Pelageya_Polubarinova-Kochina"
  },
  {
    "prettyName": "Edith Quimby",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Edith_Quimby"
  },
  {
    "prettyName": "Helen Quinn",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Helen_Quinn"
  },
  {
    "prettyName": "Lisa Randall",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Lisa_Randall"
  },
  {
    "prettyName": "Myriam Sarachik",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Myriam_Sarachik"
  },
  {
    "prettyName": "Bice Sechi-Zorn",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Bice_Sechi-Zorn"
  },
  {
    "prettyName": "Anneke Levelt Sengers",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Anneke_Levelt_Sengers"
  },
  {
    "prettyName": "Johanna Levelt Sengers",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Johanna_Levelt_Sengers"
  },
  {
    "prettyName": "Hertha Sponer",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Hertha_Sponer"
  },
  {
    "prettyName": "Isabelle Stone",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Isabelle_Stone"
  },
  {
    "prettyName": "Edith Anne Stoney",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Edith_Anne_Stoney"
  },
  {
    "prettyName": "Nina Vedeneyeva",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Nina_Vedeneyeva"
  },
  {
    "prettyName": "Katharine Way",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Katharine_Way"
  },
  {
    "prettyName": "Mariana Weissmann",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Mariana_Weissmann"
  },
  {
    "prettyName": "Lucy Wilson",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Lucy_Wilson"
  },
  {
    "prettyName": "Leona Woods",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Leona_Woods"
  },
  {
    "prettyName": "Chien-Shiung Wu",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Chien-Shiung_Wu"
  },
  {
    "prettyName": "Sau Lan Wu",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Sau_Lan_Wu"
  },
  {
    "prettyName": "Xide Xie",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Xide_Xie"
  },
  {
    "prettyName": "Hsi-teh Hsieh",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Hsi-teh_Hsieh"
  },
  {
    "prettyName": "Rosalyn Sussman Yalow",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Rosalyn_Sussman_Yalow"
  },
  {
    "prettyName": "Fumiko Yonezawa",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Fumiko_Yonezawa"
  },
  {
    "prettyName": "Toshiko Yuasa",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Toshiko_Yuasa"
  },
  {
    "prettyName": "Mary Ainsworth",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Mary_Ainsworth"
  },
  {
    "prettyName": "Martha E. Bernal",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Martha_E._Bernal"
  },
  {
    "prettyName": "Lera Boroditsky",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Lera_Boroditsky"
  },
  {
    "prettyName": "Ludmilla A.Chistovich",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Ludmilla_A.Chistovich"
  },
  {
    "prettyName": "Mamie Clark",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Mamie_Clark"
  },
  {
    "prettyName": "Helen Flanders Dunbar",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Helen_Flanders_Dunbar"
  },
  {
    "prettyName": "Tsuruko Haraguchi",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Tsuruko_Haraguchi"
  },
  {
    "prettyName": "Margaret Kennard",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Margaret_Kennard"
  },
  {
    "prettyName": "Grace Manson",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Grace_Manson"
  },
  {
    "prettyName": "Rosalie Rayner",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Rosalie_Rayner"
  },
  {
    "prettyName": "Marianne Simmel",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Marianne_Simmel"
  },
  {
    "prettyName": "Davida Teller",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Davida_Teller"
  },
  {
    "prettyName": "Nora Volkow",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Nora_Volkow"
  },
  {
    "prettyName": "National Institute on Drug Abuse",
    "prettyNameLink": "https://en.wikipedia.org/wiki/National_Institute_on_Drug_Abuse"
  },
  {
    "prettyName": "Margo Wilson",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Margo_Wilson"
  },
  {
    "prettyName": "Catherine G. Wolf",
    "prettyNameLink": "https://en.wikipedia.org/wiki/Catherine_G._Wolf"
  }
]

module.exports = scientistsBefore2000
