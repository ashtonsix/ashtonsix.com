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

// https://en.wikipedia.org/wiki/List_of_female_scientists_before_the_20th_century
const scientistsBefore1900 = [
  {
    prettyName: 'Abrotelia',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Abrotelia'
  },
  {
    prettyName: 'Aemilia',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Aemilia_(physician)'
  },
  {
    prettyName: 'Aesara',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Aesara'
  },
  {
    prettyName: 'Agamede',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Agamede'
  },
  {
    prettyName: 'Aglaonike',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Aglaonike'
  },
  {
    prettyName: 'Agnodike',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Agnodike'
  },
  {
    prettyName: 'Amyte',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Anyte_of_Tegea'
  },
  {
    prettyName: 'Arete of Cyrene',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Arete_of_Cyrene'
  },
  {
    prettyName: 'Artemisia of Caria',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Artemisia_II_of_Caria'
  },
  {
    prettyName: 'Asclepigenia',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Asclepigenia'
  },
  {
    prettyName: 'Aspasia',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Aspasia'
  },
  {
    prettyName: 'Aspasia the Physician',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Aspasia_the_Physician'
  },
  {
    prettyName: 'Axiothea of Phlius',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Axiothea_of_Phlius'
  },
  {
    prettyName: 'Caerellia',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Caerellia'
  },
  {
    prettyName: 'Cleopatra the Alchemist',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Cleopatra_the_Alchemist'
  },
  {
    prettyName: 'Damo',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Damo_(philosopher)'
  },
  {
    prettyName: 'Diotima of Mantinea',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Diotima_of_Mantinea'
  },
  {
    prettyName: 'Elephantis',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Elephantis'
  },
  {
    prettyName: 'Enheduanna',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Enheduanna'
  },
  {
    prettyName: 'Fabiola',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Saint_Fabiola'
  },
  {
    prettyName: 'Gargi Vachaknavi',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Gargi_Vachaknavi'
  },
  {
    prettyName: 'Hypatia',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Hypatia'
  },
  {
    prettyName: 'Laïs',
    prettyNameLink: 'https://en.wikipedia.org/wiki/La%C3%AFs_(physician)'
  },
  {
    prettyName: 'Lastheneia of Mantinea',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Lastheneia_of_Mantinea'
  },
  {
    prettyName: 'Leontium',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Leontion'
  },
  {
    prettyName: 'Leoparda',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Leoparda'
  },
  {
    prettyName: 'Macrina',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Macrina_the_Younger'
  },
  {
    prettyName: 'Marcella',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Saint_Marcella'
  },
  {
    prettyName: 'Mary the Jewess',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mary_the_Jewess'
  },
  {
    prettyName: 'Melissa',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Melissa_(philosopher)'
  },
  {
    prettyName: 'Merit Ptah',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Merit_Ptah'
  },
  {
    prettyName: 'Metrodora',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Metrodora'
  },
  {
    prettyName: 'Myia',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Myia'
  },
  {
    prettyName: 'Nicerata',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Nicarete'
  },
  {
    prettyName: 'Paphnutia the Virgin',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Paphnutia_the_Virgin'
  },
  {
    prettyName: 'Perictione',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Perictione'
  },
  {
    prettyName: 'Peseshet',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Peseshet'
  },
  {
    prettyName: 'Pulcheria',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Pulcheria'
  },
  {
    prettyName: 'Pythias of Assos',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Pythias'
  },
  {
    prettyName: 'Salpe',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Salpe'
  },
  {
    prettyName: 'Tapputi-Belatekallim',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Tapputi'
  },
  {
    prettyName: 'Theano',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Theano_(philosopher)'
  },
  {
    prettyName: 'Theosebeia',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Theosebia'
  },
  {
    prettyName: 'Abella',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Abella'
  },
  {
    prettyName: 'Adelle of the Saracens',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Adelle_of_the_Saracens'
  },
  {
    prettyName: 'Adelmota of Carrara',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Adelmota_of_Carrara'
  },
  {
    prettyName: 'Rufaida Al-Aslamia',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Rufaida_Al-Aslamia'
  },
  {
    prettyName: "Zulema L'Astròloga",
    prettyNameLink: 'https://en.wikipedia.org/wiki/Zulema_L%27Astr%C3%B2loga'
  },
  {
    prettyName: 'Hildegard of Bingen',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Hildegard_of_Bingen'
  },
  {
    prettyName: 'Dobrodeia of Kiev',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Dobrodeia_of_Kiev'
  },
  {
    prettyName: 'Dorotea Bucca',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Dorotea_Bucca'
  },
  {
    prettyName: 'Constance Calenda',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Constance_Calenda'
  },
  {
    prettyName: 'Clarice di Durisio',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Clarice_di_Durisio'
  },
  {
    prettyName: 'Jacobina Félicie',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Jacobina_F%C3%A9licie'
  },
  {
    prettyName: 'Alessandra Giliani',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Alessandra_Giliani'
  },
  {
    prettyName: 'Rebecca de Guarna',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Rebecca_de_Guarna'
  },
  {
    prettyName: 'Magistra Hersend',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Magistra_Hersend'
  },
  {
    prettyName: 'Guillemette du Luys',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Guillemette_du_Luys'
  },
  {
    prettyName: 'Mercuriade',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mercuriade'
  },
  {
    prettyName: 'Dame Péronelle',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Dame_P%C3%A9ronelle'
  },
  {
    prettyName: 'Trota of Salerno',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Trota_of_Salerno'
  },
  {
    prettyName: 'Sara de Sancto Aegidio',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Sara_de_Sancto_Aegidio'
  },
  {
    prettyName: 'Sophia Brahe',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Sophia_Brahe'
  },
  {
    prettyName: 'Isabella Cortese',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Isabella_Cortese'
  },
  {
    prettyName: 'Loredana Marcello',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Loredana_Marcello'
  },
  {
    prettyName: 'Tarquinia Molza',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Tarquinia_Molza'
  },
  {
    prettyName: 'Catherine de Parthenay',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Catherine_de_Parthenay'
  },
  {
    prettyName: 'Elinor Sneshell',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Elinor_Sneshell'
  },
  {
    prettyName: 'Caterina Vitale',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Caterina_Vitale'
  },
  {
    prettyName: 'Tan Yunxian',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Tan_Yunxian'
  },
  {
    prettyName: 'Anna Åkerhjelm',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Anna_%C3%85kerhjelm'
  },
  {
    prettyName: 'Ann Baynard',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Ann_Baynard'
  },
  {
    prettyName: 'Aphra Behn',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Aphra_Behn'
  },
  {
    prettyName: 'Martine Bertereau',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Martine_Bertereau'
  },
  {
    prettyName: 'Agnes Block',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Agnes_Block'
  },
  {
    prettyName: 'Elisabeth of Bohemia, Princess Palatine',
    prettyNameLink:
      'https://en.wikipedia.org/wiki/Elisabeth_of_Bohemia,_Princess_Palatine'
  },
  {
    prettyName: 'Louise Bourgeois Boursier',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Louise_Bourgeois_Boursier'
  },
  {
    prettyName: 'Titia Brongersma',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Titia_Brongersma'
  },
  {
    prettyName: 'Margaret Cavendish',
    prettyNameLink:
      'https://en.wikipedia.org/wiki/Margaret_Cavendish,_Duchess_of_Newcastle-upon-Tyne'
  },
  {
    prettyName: 'Marie Crous',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Marie_Crous'
  },
  {
    prettyName: 'Maria Cunitz',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Maria_Cunitz'
  },
  {
    prettyName: 'Jeanne Dumée',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Jeanne_Dum%C3%A9e'
  },
  {
    prettyName: 'Maria Clara Eimmart',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Maria_Clara_Eimmart'
  },
  {
    prettyName: 'Marie Fouquet',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Marie_Fouquet'
  },
  {
    prettyName: 'Eleanor Glanville',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Eleanor_Glanville'
  },
  {
    prettyName: 'Elisabeth Hevelius',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Elisabeth_Hevelius'
  },
  {
    prettyName: 'Maria Sibylla Merian',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Maria_Sibylla_Merian'
  },
  {
    prettyName: 'Marie Meurdrac',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Marie_Meurdrac'
  },
  {
    prettyName: 'Elena Cornaro Piscopia',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Elena_Cornaro_Piscopia'
  },
  {
    prettyName: 'Marguerite de la Sablière',
    prettyNameLink:
      'https://en.wikipedia.org/wiki/Marguerite_de_la_Sabli%C3%A8re'
  },
  {
    prettyName: 'Jane Sharp',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Jane_Sharp'
  },
  {
    prettyName: 'Justine Siegemund',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Justine_Siegemund'
  },
  {
    prettyName: 'Mary Somerset, Duchess of Beaufort',
    prettyNameLink:
      'https://en.wikipedia.org/wiki/Mary_Somerset,_Duchess_of_Beaufort_(1630%E2%80%931715)'
  },
  {
    prettyName: 'Elizabeth Walker',
    prettyNameLink:
      'https://en.wikipedia.org/wiki/Elizabeth_Walker_(pharmacist)'
  },
  {
    prettyName: "Geneviève Charlotte d'Arconville",
    prettyNameLink:
      'https://en.wikipedia.org/wiki/Genevi%C3%A8ve_Charlotte_d%27Arconville'
  },
  {
    prettyName: 'Émilie du Châtelet',
    prettyNameLink: 'https://en.wikipedia.org/wiki/%C3%89milie_du_Ch%C3%A2telet'
  },
  {
    prettyName: 'Maurice Quentin de La Tour',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Maurice_Quentin_de_La_Tour'
  },
  {
    prettyName: 'Maria Gaetana Agnesi',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Maria_Gaetana_Agnesi'
  },
  {
    prettyName: "Geneviève Charlotte d'Arconville",
    prettyNameLink:
      'https://en.wikipedia.org/wiki/Genevi%C3%A8ve_Charlotte_d%27Arconville'
  },
  {
    prettyName: 'Princess Charlotte of Saxe-Meiningen',
    prettyNameLink:
      'https://en.wikipedia.org/wiki/Princess_Charlotte_of_Saxe-Meiningen'
  },
  {
    prettyName: 'Maria Angela Ardinghelli',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Maria_Angela_Ardinghelli'
  },
  {
    prettyName: 'Sarah Sophia Banks',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Sarah_Sophia_Banks'
  },
  {
    prettyName: 'Giuseppa Barbapiccola',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Giuseppa_Barbapiccola'
  },
  {
    prettyName: 'Laura Bassi',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Laura_Bassi'
  },
  {
    prettyName: 'Marie Marguerite Bihéron',
    prettyNameLink:
      'https://en.wikipedia.org/wiki/Marie_Marguerite_Bih%C3%A9ron'
  },
  {
    prettyName: 'Celia Grillo Borromeo',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Celia_Grillo_Borromeo'
  },
  {
    prettyName: 'Jacoba van den Brande',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Jacoba_van_den_Brande'
  },
  {
    prettyName: 'Maria Christina Bruhn',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Maria_Christina_Bruhn'
  },
  {
    prettyName: 'Margaret Bryan',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Margaret_Bryan_(philosopher)'
  },
  {
    prettyName: 'Elsa Beata Bunge',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Elsa_Beata_Bunge'
  },
  {
    prettyName: 'María Andrea Casamayor',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mar%C3%ADa_Andrea_Casamayor'
  },
  {
    prettyName: 'Émilie du Châtelet',
    prettyNameLink: 'https://en.wikipedia.org/wiki/%C3%89milie_du_Ch%C3%A2telet'
  },
  {
    prettyName: 'Maria Medina Coeli',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Maria_Medina_Coeli'
  },
  {
    prettyName: 'Jane Colden',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Jane_Colden'
  },
  {
    prettyName: 'Rosalie de Constant',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Rosalie_de_Constant'
  },
  {
    prettyName: 'Angélique du Coudray',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Ang%C3%A9lique_du_Coudray'
  },
  {
    prettyName: 'Maria Dalle Donne',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Maria_Dalle_Donne'
  },
  {
    prettyName: 'Eva Ekeblad',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Eva_Ekeblad'
  },
  {
    prettyName: 'Dorothea Erxleben',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Dorothea_Erxleben'
  },
  {
    prettyName: 'Charlotta Frölich',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Charlotta_Fr%C3%B6lich'
  },
  {
    prettyName: 'Elizabeth Fulhame',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Elizabeth_Fulhame'
  },
  {
    prettyName: 'Lucia Galeazzi Galvani',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Lucia_Galeazzi_Galvani'
  },
  {
    prettyName: 'Sophie Germain',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Sophie_Germain'
  },
  {
    prettyName: 'Clelia Durazzo Grimaldi',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Clelia_Durazzo_Grimaldi'
  },
  {
    prettyName: 'Catherine Littlefield Greene',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Catherine_Littlefield_Greene'
  },
  {
    prettyName: 'Salomée Halpir',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Salom%C3%A9e_Halpir'
  },
  {
    prettyName: 'Caroline Herschel',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Caroline_Herschel'
  },
  {
    prettyName: 'Catherine Jérémie',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Catherine_J%C3%A9r%C3%A9mie'
  },
  {
    prettyName: 'Christine Kirch',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Christine_Kirch'
  },
  {
    prettyName: 'Margaretha Kirch',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Margaretha_Kirch'
  },
  {
    prettyName: 'Maria Margarethe Kirch',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Maria_Margarethe_Kirch'
  },
  {
    prettyName: 'Marie Lachapelle',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Marie_Lachapelle'
  },
  {
    prettyName: 'Marie-Jeanne de Lalande',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Marie-Jeanne_de_Lalande'
  },
  {
    prettyName: 'Marie Paulze Lavoisier',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Marie-Anne_Pierrette_Paulze'
  },
  {
    prettyName: 'Nicole-Reine Lepaute',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Nicole-Reine_Lepaute'
  },
  {
    prettyName: 'Elisabeth Christina von Linné',
    prettyNameLink:
      'https://en.wikipedia.org/wiki/Elisabeth_Christina_von_Linn%C3%A9'
  },
  {
    prettyName: 'Martha Daniell Logan',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Martha_Daniell_Logan'
  },
  {
    prettyName: 'Eliza Lucas',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Eliza_Lucas'
  },
  {
    prettyName: 'Maria Lullin',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Maria_Lullin'
  },
  {
    prettyName: 'Catharine Macaulay',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Catharine_Macaulay'
  },
  {
    prettyName: 'Anna Morandi Manzolini',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Anna_Morandi_Manzolini'
  },
  {
    prettyName: 'Marie Le Masson Le Golft',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Marie_Le_Masson_Le_Golft'
  },
  {
    prettyName: 'Sybilla Masters',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Sybilla_Masters'
  },
  {
    prettyName: 'Lady Anne Monson',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Lady_Anne_Monson'
  },
  {
    prettyName: 'Maria Petraccini',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Maria_Petraccini'
  },
  {
    prettyName: 'Zaffira Peretti',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Zaffira_Peretti'
  },
  {
    prettyName: 'Louise du Pierry',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Louise_du_Pierry'
  },
  {
    prettyName: 'Marie Anne Victoire Pigeon',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Marie_Anne_Victoire_Pigeon'
  },
  {
    prettyName: 'Faustina Pignatelli',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Faustina_Pignatelli'
  },
  {
    prettyName: 'Anna Barbara Reinhart',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Anna_Barbara_Reinhart'
  },
  {
    prettyName: 'Cristina Roccati',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Cristina_Roccati'
  },
  {
    prettyName: 'Clotilde Tambroni',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Clotilde_Tambroni'
  },
  {
    prettyName: 'Petronella Johanna de Timmerman',
    prettyNameLink:
      'https://en.wikipedia.org/wiki/Petronella_Johanna_de_Timmerman'
  },
  {
    prettyName: 'Wang Zhenyi',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Wang_Zhenyi_(astronomer)'
  },
  {
    prettyName: 'Maria Czaplicka',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Maria_Czaplicka'
  },
  {
    prettyName: 'Alice Cunningham Fletcher',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Alice_Cunningham_Fletcher'
  },
  {
    prettyName: 'Johanna Mestorf',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Johanna_Mestorf'
  },
  {
    prettyName: 'Margaret Murray',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Margaret_Murray'
  },
  {
    prettyName: 'Clémence Royer',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Cl%C3%A9mence_Royer'
  },
  {
    prettyName: 'Ellen Churchill Semple',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Ellen_Churchill_Semple'
  },
  {
    prettyName: 'Praskovja Uvarova',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Praskovja_Uvarova'
  },
  {
    prettyName: 'Cornelia Horsford',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Cornelia_Horsford'
  },
  {
    prettyName: 'Lady Hester Stanhope',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Lady_Hester_Stanhope'
  },
  {
    prettyName: 'Zsófia Torma',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Zs%C3%B3fia_Torma'
  },
  {
    prettyName: 'Mary Albertson',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mary_Albertson'
  },
  {
    prettyName: 'Annie Jump Cannon',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Annie_Jump_Cannon'
  },
  {
    prettyName: 'Agnes Mary Clerke',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Agnes_Mary_Clerke'
  },
  {
    prettyName: 'Florence Cushman',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Florence_Cushman'
  },
  {
    prettyName: 'Williamina Fleming',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Williamina_Fleming'
  },
  {
    prettyName: 'Margaret Lindsay Murray Huggins',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Margaret_Lindsay_Huggins'
  },
  {
    prettyName: 'Henrietta Swan Leavitt',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Henrietta_Swan_Leavitt'
  },
  {
    prettyName: 'Annie Russell Maunder',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Annie_Scott_Dill_Maunder'
  },
  {
    prettyName: 'Antonia Caetana Maury',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Antonia_Maury'
  },
  {
    prettyName: 'Maria Mitchell',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Maria_Mitchell'
  },
  {
    prettyName: 'Isis Pogson',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Isis_Pogson'
  },
  {
    prettyName: 'Caterina Scarpellini',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Caterina_Scarpellini'
  },
  {
    prettyName: 'Sarah Frances Whiting',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Sarah_Frances_Whiting'
  },
  {
    prettyName: 'Mary Watson Whitney',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mary_Watson_Whitney'
  },
  {
    prettyName: 'Anna Winlock',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Anna_Winlock'
  },
  {
    prettyName: 'Frances Acton',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Frances_Acton'
  },
  {
    prettyName: 'Elizabeth Cary Agassiz',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Elizabeth_Cary_Agassiz'
  },
  {
    prettyName: 'Mary Albertson',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mary_Albertson'
  },
  {
    prettyName: 'Mary Anning',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mary_Anning'
  },
  {
    prettyName: 'Emily Arnesen',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Emily_Arnesen'
  },
  {
    prettyName: 'Anna Atkins',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Anna_Atkins'
  },
  {
    prettyName: 'Harriet Henrietta Beaufort',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Harriet_Henrietta_Beaufort'
  },
  {
    prettyName: 'Isabella Bird',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Isabella_Bird'
  },
  {
    prettyName: 'Priscilla Susan Bury',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Priscilla_Susan_Bury'
  },
  {
    prettyName: 'Albertina Carlsson',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Albertina_Carlsson'
  },
  {
    prettyName: 'Mary Agnes Meara Chase',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mary_Agnes_Meara_Chase'
  },
  {
    prettyName: 'Cornelia Clapp',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Cornelia_Clapp'
  },
  {
    prettyName: 'Anna Botsford Comstock',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Anna_Botsford_Comstock'
  },
  {
    prettyName: 'Clara Eaton Cummings',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Clara_Eaton_Cummings'
  },
  {
    prettyName: 'Lydia Maria Adams DeWitt',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Lydia_Maria_Adams_DeWitt'
  },
  {
    prettyName: 'Mary Cynthia Dickerson',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mary_Cynthia_Dickerson'
  },
  {
    prettyName: 'Amalie Dietrich',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Amalie_Dietrich'
  },
  {
    prettyName: 'Alice Eastwood',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Alice_Eastwood'
  },
  {
    prettyName: 'Rosa Smith Eigenmann',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Rosa_Smith_Eigenmann'
  },
  {
    prettyName: 'Olga Fedtschenko',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Olga_Fedtschenko'
  },
  {
    prettyName: 'Maria Elizabeth Fernald',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Maria_Elizabeth_Fernald'
  },
  {
    prettyName: 'Elisabetta Fiorini Mazzanti',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Elisabetta_Fiorini_Mazzanti'
  },
  {
    prettyName: 'Susanna Phelps Gage',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Susanna_Phelps_Gage'
  },
  {
    prettyName: 'Lilian Jane Gould',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Lilian_Jane_Gould'
  },
  {
    prettyName: 'Amelia Griffiths',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Amelia_Griffiths'
  },
  {
    prettyName: 'Marian E. Hubbard',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Marian_E._Hubbard'
  },
  {
    prettyName: 'Agnes Ibbetson',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Agnes_Ibbetson'
  },
  {
    prettyName: 'Susan Hallowell',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Susan_Hallowell'
  },
  {
    prettyName: 'Gabrielle Howard',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Gabrielle_Howard'
  },
  {
    prettyName: 'Ellen Hutchins',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Ellen_Hutchins'
  },
  {
    prettyName: 'Ida Henrietta Hyde',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Ida_Henrietta_Hyde'
  },
  {
    prettyName: 'Maria Elizabetha Jacson',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Maria_Elizabetha_Jacson'
  },
  {
    prettyName: 'Alice Johnson',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Alice_Johnson_(zoologist)'
  },
  {
    prettyName: 'Josephine Kablick',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Josephine_Kablick'
  },
  {
    prettyName: 'Helen Dean King',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Helen_Dean_King'
  },
  {
    prettyName: 'Phoebe Lankester',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Phoebe_Lankester'
  },
  {
    prettyName: 'Marie-Anne Libert',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Marie-Anne_Libert'
  },
  {
    prettyName: 'Friederike Lienig',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Friederike_Lienig'
  },
  {
    prettyName: 'Katharine Murray Lyell',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Katharine_Murray_Lyell'
  },
  {
    prettyName: 'Helen Abbott Michael',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Helen_Abbott_Michael'
  },
  {
    prettyName: 'Olive Thorne Miller',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Olive_Thorne_Miller'
  },
  {
    prettyName: 'Maria Gugelberg von Moos',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Maria_Gugelberg_von_Moos'
  },
  {
    prettyName: 'Margaretta Morris',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Margaretta_Morris'
  },
  {
    prettyName: 'Mary Murtfeldt',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mary_Murtfeldt'
  },
  {
    prettyName: 'Eleanor Anne Ormerod',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Eleanor_Anne_Ormerod'
  },
  {
    prettyName: 'Edith Marion Patch',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Edith_Marion_Patch'
  },
  {
    prettyName: 'Beatrix Potter',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Beatrix_Potter'
  },
  {
    prettyName: 'Mary Jane Rathbun',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mary_Rathbun'
  },
  {
    prettyName: 'Margaretta Riley',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Margaretta_Riley'
  },
  {
    prettyName: 'Ethel Sargant',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Ethel_Sargant'
  },
  {
    prettyName: 'Hazel Schmoll',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Hazel_Schmoll'
  },
  {
    prettyName: 'Lilian Sheldon',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Lilian_Sheldon'
  },
  {
    prettyName: 'Alexandra Smirnoff',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Alexandra_Smirnoff'
  },
  {
    prettyName: 'Annie Lorrain Smith',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Annie_Lorrain_Smith'
  },
  {
    prettyName: 'Emilie Snethlage',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Emilie_Snethlage'
  },
  {
    prettyName: 'Nettie Stevens',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Nettie_Stevens'
  },
  {
    prettyName: 'Jantina Tammes',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Jantina_Tammes'
  },
  {
    prettyName: 'Charlotte De Bernier Taylor',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Charlotte_De_Bernier_Taylor'
  },
  {
    prettyName: 'Mary Treat',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mary_Lua_Adelia_Davis_Treat'
  },
  {
    prettyName: 'Anna Vickers',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Anna_Vickers'
  },
  {
    prettyName: 'Jeanne Villepreux-Power',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Jeanne_Villepreux-Power'
  },
  {
    prettyName: 'Anna Maria Walker',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Anna_Maria_Walker'
  },
  {
    prettyName: 'Elizabeth Andrew Warren',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Elizabeth_Andrew_Warren'
  },
  {
    prettyName: 'Mary Anne Whitby',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mary_Anne_Whitby'
  },
  {
    prettyName: 'Vera Bogdanovskaia',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Vera_Bogdanovskaia'
  },
  {
    prettyName: 'Ida Freund',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Ida_Freund'
  },
  {
    prettyName: 'Louise Hammarström',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Louise_Hammarstr%C3%B6m'
  },
  {
    prettyName: 'Edith Humphrey',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Edith_Humphrey'
  },
  {
    prettyName: 'Julia Lermontova',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Julia_Lermontova'
  },
  {
    prettyName: 'Laura Linton',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Laura_Linton'
  },
  {
    prettyName: 'Rachel Lloyd',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Rachel_Lloyd_(chemist)'
  },
  {
    prettyName: 'Adelaida Lukanina',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Adelaida_Lukanina'
  },
  {
    prettyName: 'Helen Abbott Michael',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Helen_Abbott_Michael'
  },
  {
    prettyName: 'Frances Micklethwait',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Frances_Micklethwait'
  },
  {
    prettyName: 'Muriel Wheldale Onslow',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Muriel_Wheldale_Onslow'
  },
  {
    prettyName: 'Marie Pasteur',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Marie_Pasteur'
  },
  {
    prettyName: 'Mary Engle Pennington',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mary_Engle_Pennington'
  },
  {
    prettyName: 'Agnes Pockels',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Agnes_Pockels'
  },
  {
    prettyName: 'Vera Popova',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Vera_Popova'
  },
  {
    prettyName: 'Anna Sundström',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Anna_Sundstr%C3%B6m'
  },
  {
    prettyName: 'Ellen Swallow Richards',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Ellen_Swallow_Richards'
  },
  {
    prettyName: 'Anna Volkova',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Anna_Volkova'
  },
  {
    prettyName: 'Nadezhda Olimpievna Ziber-Shumova',
    prettyNameLink:
      'https://en.wikipedia.org/wiki/Nadezhda_Olimpievna_Ziber-Shumova'
  },
  {
    prettyName: 'Emily Roebling',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Emily_Roebling'
  },
  {
    prettyName: 'Lanying Lin',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Lanying_Lin'
  },
  {
    prettyName: 'Florence Bascom',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Florence_Bascom'
  },
  {
    prettyName: 'Etheldred Benett',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Etheldred_Benett'
  },
  {
    prettyName: 'Mary Buckland',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mary_Buckland'
  },
  {
    prettyName: 'Margaret Crosfield',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Margaret_Crosfield'
  },
  {
    prettyName: 'Maria Gordon',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Maria_Gordon'
  },
  {
    prettyName: 'Mary Emilie Holmes',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mary_Emilie_Holmes'
  },
  {
    prettyName: 'Charlotte Murchison',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Charlotte_Murchison'
  },
  {
    prettyName: 'Elizabeth Philpot',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Elizabeth_Philpot'
  },
  {
    prettyName: 'Mary Brush',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mary_Brush'
  },
  {
    prettyName: 'Ellen Eglin',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Ellen_Eglin'
  },
  {
    prettyName: 'Hanna Hammarström',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Hanna_Hammarstr%C3%B6m'
  },
  {
    prettyName: 'Mary Kies',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mary_Kies'
  },
  {
    prettyName: 'Huang Lü',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Huang_L%C3%BC'
  },
  {
    prettyName: 'Sofia Kovalevskaya',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Sofia_Kovalevskaya'
  },
  {
    prettyName: 'Augusta Ada Byron Lovelace',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Ada_Lovelace'
  },
  {
    prettyName: 'Emilie Martin',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Emilie_Martin'
  },
  {
    prettyName: 'Florence Nightingale',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Florence_Nightingale'
  },
  {
    prettyName: 'Emmy Noether',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Emmy_Noether'
  },
  {
    prettyName: 'Alice Catherine Evans',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Alice_Catherine_Evans'
  },
  {
    prettyName: 'Elizabeth Garrett Anderson',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Elizabeth_Garrett_Anderson'
  },
  {
    prettyName: 'Hedda Andersson',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Hedda_Andersson'
  },
  {
    prettyName: 'Lovisa Årberg',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Lovisa_%C3%85rberg'
  },
  {
    prettyName: 'Amalia Assur',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Amalia_Assur'
  },
  {
    prettyName: 'Sara Josephine Baker',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Sara_Josephine_Baker'
  },
  {
    prettyName: 'Elizabeth Blackwell',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Elizabeth_Blackwell_(doctor)'
  },
  {
    prettyName: 'Emily Blackwell',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Emily_Blackwell'
  },
  {
    prettyName: 'Marie Boivin',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Marie_Boivin'
  },
  {
    prettyName: 'Elizabeth D. A. Cohen',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Elizabeth_D._A._Cohen'
  },
  {
    prettyName: 'Rebecca Cole',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Rebecca_Cole'
  },
  {
    prettyName: 'Rebecca Lee Crumpler',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Rebecca_Lee_Crumpler'
  },
  {
    prettyName: 'Maria Dalle Donne',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Maria_Dalle_Donne'
  },
  {
    prettyName: 'Marie Durocher',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Marie_Durocher'
  },
  {
    prettyName: 'Enriqueta Favez',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Enriqueta_Favez'
  },
  {
    prettyName: 'Rosalie Fougelberg',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Rosalie_Fougelberg'
  },
  {
    prettyName: 'Johanna Hedén',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Johanna_Hed%C3%A9n'
  },
  {
    prettyName: 'Aletta Jacobs',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Aletta_Jacobs'
  },
  {
    prettyName: 'Maria Jansson',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Kisamor'
  },
  {
    prettyName: 'Sophia Jex-Blake',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Sophia_Jex-Blake'
  },
  {
    prettyName: 'Varvara Kashevarova Rudneva',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Varvara_Kashevarova_Rudneva'
  },
  {
    prettyName: 'Emmy Rappe',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Emmy_Rappe'
  },
  {
    prettyName: 'Martha Ripley',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Martha_Ripley'
  },
  {
    prettyName: 'Florence R. Sabin',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Florence_R._Sabin'
  },
  {
    prettyName: 'Regina von Siebold',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Regina_von_Siebold'
  },
  {
    prettyName: 'Charlotte von Siebold',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Charlotte_von_Siebold'
  },
  {
    prettyName: 'Anna Stecksén',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Anna_Stecks%C3%A9n'
  },
  {
    prettyName: 'Lucy Hobbs Taylor',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Lucy_Hobbs_Taylor'
  },
  {
    prettyName: 'Isala Van Diest',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Isala_Van_Diest'
  },
  {
    prettyName: 'Catharine van Tussenbroek',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Catharine_van_Tussenbroek'
  },
  {
    prettyName: 'Mary Walker',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mary_Edwards_Walker'
  },
  {
    prettyName: 'Karolina Widerström',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Karolina_Widerstr%C3%B6m'
  },
  {
    prettyName: 'Rachel Alcock',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Rachel_Alcock'
  },
  {
    prettyName: 'Lise Meitner',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Lise_Meitner'
  },
  {
    prettyName: 'Hertha Marks Ayrton',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Hertha_Marks_Ayrton'
  },
  {
    prettyName: 'Mileva Einstein-Maric',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mileva_Einstein-Maric'
  },
  {
    prettyName: 'Margaret Eliza Maltby',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Margaret_Eliza_Maltby'
  },
  {
    prettyName: 'Mary Somerville',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mary_Somerville'
  },
  {
    prettyName: 'Mary Whiton Calkins',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mary_Whiton_Calkins'
  },
  {
    prettyName: 'Christine Ladd-Franklin',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Christine_Ladd-Franklin'
  },
  {
    prettyName: 'Margaret Floy Washburn',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Margaret_Floy_Washburn'
  },
  {
    prettyName: 'Jane Webb Loudon',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Jane_C._Loudon'
  },
  {
    prettyName: 'Jane Marcet',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Jane_Marcet'
  },
  {
    prettyName: 'Almira Hart Lincoln Phelps',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Almira_Hart_Lincoln_Phelps'
  },
  {
    prettyName: 'Josephine Silone Yates',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Josephine_Silone_Yates'
  },
  {
    prettyName: 'Jane Addams',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Jane_Addams'
  },
  {
    prettyName: 'Charlotte Perkins Gilman',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Charlotte_Perkins_Gilman'
  },
  {
    prettyName: 'Beatrice Webb',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Beatrice_Webb'
  }
]

module.exports = scientistsBefore1900
