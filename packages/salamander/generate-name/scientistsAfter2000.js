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

// https://en.wikipedia.org/wiki/List_of_21st-century_women_scientists
const scientistsAfter2000 = [
  {
    prettyName: 'Sonia Álvarez Leguizamón',
    prettyNameLink:
      'https://en.wikipedia.org/wiki/Sonia_%C3%81lvarez_Leguizam%C3%B3n'
  },
  {
    prettyName: 'Zulma Brandoni de Gasparini',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Zulma_Brandoni_de_Gasparini'
  },
  {
    prettyName: 'Constanza Ceruti',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Constanza_Ceruti'
  },
  {
    prettyName: 'Rachel Chan',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Rachel_Chan'
  },
  {
    prettyName: 'Perla Fuscaldo',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Perla_Fuscaldo'
  },
  {
    prettyName: 'Vandika Ervandovna Avetisyan',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Vandika_Ervandovna_Avetisyan'
  },
  {
    prettyName: 'Anne Astin',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Anne_Astin'
  },
  {
    prettyName: 'Katherine Belov',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Katherine_Belov'
  },
  {
    prettyName: 'Suzanne Cory',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Suzanne_Cory'
  },
  {
    prettyName: 'Jean Finnegan',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Jean_Finnegan'
  },
  {
    prettyName: 'Naomi McClure-Griffiths',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Naomi_McClure-Griffiths'
  },
  {
    prettyName: 'Jessica Melbourne-Thomas',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Jessica_Melbourne-Thomas'
  },
  {
    prettyName: "Sue O'Connor",
    prettyNameLink: 'https://en.wikipedia.org/wiki/Sue_O%27Connor'
  },
  {
    prettyName: 'Una M. Ryan',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Una_M._Ryan'
  },
  {
    prettyName: 'Helen Alma Newton Turner',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Helen_Alma_Newton_Turner'
  },
  {
    prettyName: 'Carden Wallace',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Carden_Wallace'
  },
  {
    prettyName: 'Rachel Webster',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Rachel_Webster'
  },
  {
    prettyName: 'Mary E. White',
    prettyNameLink:
      'https://en.wikipedia.org/wiki/Mary_E._White_(palaeobotanist)'
  },
  {
    prettyName: 'Elisabeth Binder',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Elisabeth_Binder'
  },
  {
    prettyName: 'Claire F. Gmachl',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Claire_F._Gmachl'
  },
  {
    prettyName: 'Lisa Kaltenegger',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Lisa_Kaltenegger'
  },
  {
    prettyName: 'Christine Mannhalter',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Christine_Mannhalter'
  },
  {
    prettyName: 'Elisabeth Ruttkay',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Elisabeth_Ruttkay'
  },
  {
    prettyName: 'Eva Schönbeck-Temesy',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Eva_Sch%C3%B6nbeck-Temesy'
  },
  {
    prettyName: 'Velma Scantlebury',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Velma_Scantlebury'
  },
  {
    prettyName: 'Ingrid Daubechies',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Ingrid_Daubechies'
  },
  {
    prettyName: 'Véronique Gouverneur',
    prettyNameLink: 'https://en.wikipedia.org/wiki/V%C3%A9ronique_Gouverneur'
  },
  {
    prettyName: 'Yaël Nazé',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Ya%C3%ABl_Naz%C3%A9'
  },
  {
    prettyName: 'Sonia Alconini',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Sonia_Alconini'
  },
  {
    prettyName: 'Kathrin Barboza Marquez',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Kathrin_Barboza_Marquez'
  },
  {
    prettyName: 'Mariza Corrêa',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mariza_Corr%C3%AAa'
  },
  {
    prettyName: 'Fátima Ferreira',
    prettyNameLink: 'https://en.wikipedia.org/wiki/F%C3%A1tima_Ferreira'
  },
  {
    prettyName: 'Dorath Pinto Uchôa',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Dorath_Pinto_Uch%C3%B4a'
  },
  {
    prettyName: 'Lúcia Mendonça Previato',
    prettyNameLink:
      'https://en.wikipedia.org/wiki/L%C3%BAcia_Mendon%C3%A7a_Previato'
  },
  {
    prettyName: 'Alba Zaluar',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Alba_Zaluar'
  },
  {
    prettyName: 'Karen Bailey',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Karen_Bailey'
  },
  {
    prettyName: 'Karen Beauchemin',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Karen_Beauchemin'
  },
  {
    prettyName: 'Roberta Bondar',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Roberta_Bondar'
  },
  {
    prettyName: 'Martine Dorais',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Martine_Dorais'
  },
  {
    prettyName: 'Laura Ferrarese',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Laura_Ferrarese'
  },
  {
    prettyName: 'Roberta Gilchrist',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Roberta_Gilchrist'
  },
  {
    prettyName: 'Julia Levy',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Julia_Levy'
  },
  {
    prettyName: 'Mary MacArthur',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mary_MacArthur'
  },
  {
    prettyName: 'Deborah Martin-Downs',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Deborah_Martin-Downs'
  },
  {
    prettyName: 'Diane Massam',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Diane_Massam'
  },
  {
    prettyName: 'Elizabeth Pattey',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Elizabeth_Pattey'
  },
  {
    prettyName: 'Isabella Preston',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Isabella_Preston'
  },
  {
    prettyName: 'Heather Pringle',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Heather_Pringle'
  },
  {
    prettyName: 'Kathleen I. Pritchard',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Kathleen_I._Pritchard'
  },
  {
    prettyName: 'Line Rochefort',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Line_Rochefort'
  },
  {
    prettyName: 'Francine Saillant',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Francine_Saillant'
  },
  {
    prettyName: 'Sandra Schmid',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Sandra_Schmid'
  },
  {
    prettyName: 'Karen Schwartzkopf-Genswein',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Karen_Schwartzkopf-Genswein'
  },
  {
    prettyName: 'Felicitas Svejda',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Felicitas_Svejda'
  },
  {
    prettyName: 'Sandra Witelson',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Sandra_Witelson'
  },
  {
    prettyName: 'Rachel Zimmerman',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Rachel_Zimmerman'
  },
  {
    prettyName: 'Ligia Gargallo',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Ligia_Gargallo'
  },
  {
    prettyName: 'Veronica Vallejos',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Veronica_Vallejos'
  },
  {
    prettyName: 'Ana Vásquez-Bronfman',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Ana_V%C3%A1squez-Bronfman'
  },
  {
    prettyName: 'Margaret Chan',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Margaret_Chan'
  },
  {
    prettyName: 'Zeng Rong',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Zeng_Rong'
  },
  {
    prettyName: 'Jian Xu',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Jian_Xu'
  },
  {
    prettyName: 'Zhao Yufen',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Zhao_Yufen'
  },
  {
    prettyName: 'Qian Zhengying',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Qian_Zhengying'
  },
  {
    prettyName: 'Lü Zhi',
    prettyNameLink:
      'https://en.wikipedia.org/wiki/L%C3%BC_Zhi_(conservationist)'
  },
  {
    prettyName: 'Anna Maria Groot',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Anna_Maria_Groot'
  },
  {
    prettyName: 'Diana Marcela Bolaños Rodriguez',
    prettyNameLink:
      'https://en.wikipedia.org/wiki/Diana_Marcela_Bola%C3%B1os_Rodriguez'
  },
  {
    prettyName: 'Nina Marković',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Nina_Markovi%C4%87'
  },
  {
    prettyName: 'Herminia Ibarra',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Herminia_Ibarra'
  },
  {
    prettyName: 'Eva Syková',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Eva_Sykov%C3%A1'
  },
  {
    prettyName: 'Anja Cetti Andersen',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Anja_Cetti_Andersen'
  },
  {
    prettyName: 'Lene Hau',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Lene_Hau'
  },
  {
    prettyName: 'Signe Normand',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Signe_Normand'
  },
  {
    prettyName: 'Idelisa Bonnelly',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Idelisa_Bonnelly'
  },
  {
    prettyName: 'Anne Dejean-Assémat',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Anne_Dejean-Ass%C3%A9mat'
  },
  {
    prettyName: 'Mireille Bousquet-Mélou',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mireille_Bousquet-M%C3%A9lou'
  },
  {
    prettyName: 'Catherine Feuillet',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Catherine_Feuillet'
  },
  {
    prettyName: 'Françoise Gasse',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Fran%C3%A7oise_Gasse'
  },
  {
    prettyName: 'Laurence Lanfumey',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Laurence_Lanfumey'
  },
  {
    prettyName: 'Dominique Langevin',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Dominique_Langevin'
  },
  {
    prettyName: 'Claudine Rinner',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Claudine_Rinner'
  },
  {
    prettyName: 'Aurore Avarguès-Weber',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Aurore_Avargu%C3%A8s-Weber'
  },
  {
    prettyName: 'Andrea Ablasser',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Andrea_Ablasser'
  },
  {
    prettyName: 'Katrin Amunts',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Katrin_Amunts'
  },
  {
    prettyName: 'Ulrike Beisiegel',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Ulrike_Beisiegel'
  },
  {
    prettyName: 'Sibylle Günter',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Sibylle_G%C3%BCnter'
  },
  {
    prettyName: 'Hanna von Hoerner',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Hanna_von_Hoerner'
  },
  {
    prettyName: 'Eva-Maria Neher',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Eva-Maria_Neher'
  },
  {
    prettyName: 'Nina Papavasiliou',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Nina_Papavasiliou'
  },
  {
    prettyName: 'Elisabeth Piirainen',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Elisabeth_Piirainen'
  },
  {
    prettyName: 'Ilme Schlichting',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Ilme_Schlichting'
  },
  {
    prettyName: 'Brigitte Voit',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Brigitte_Voit'
  },
  {
    prettyName: 'Dany Bébel-Gisler',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Dany_B%C3%A9bel-Gisler'
  },
  {
    prettyName: 'Joyanti Chutia',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Joyanti_Chutia'
  },
  {
    prettyName: 'Seetha Coleman-Kammula',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Seetha_Coleman-Kammula'
  },
  {
    prettyName: 'Paramjit Khurana',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Paramjit_Khurana'
  },
  {
    prettyName: 'Shobhana Narasimhan',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Shobhana_Narasimhan'
  },
  {
    prettyName: 'Priyamvada Natarajan',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Priyamvada_Natarajan'
  },
  {
    prettyName: 'Manju Ray',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Manju_Ray'
  },
  {
    prettyName: 'Maryam Mirzakhani',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Maryam_Mirzakhani'
  },
  {
    prettyName: 'Saba Valadkhan',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Saba_Valadkhan'
  },
  {
    prettyName: 'Ālenush Teriān',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Alenush_Terian'
  },
  {
    prettyName: 'Mina J. Bissell',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mina_Bissell'
  },
  {
    prettyName: 'Pardis C. Sabeti',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Pardis_Sabeti'
  },
  {
    prettyName: 'Roxana Moslehi',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Roxana_Moslehi'
  },
  {
    prettyName: 'Anousheh Ansari',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Anousheh_Ansari'
  },
  {
    prettyName: 'Mashhad',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mashhad'
  },
  {
    prettyName: 'Reihaneh Safavi-Naini',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Reihaneh_Safavi-Naini'
  },
  {
    prettyName: 'Lihadh Al-Gazali',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Lihadh_Al-Gazali'
  },
  {
    prettyName: 'Osnat Penn',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Osnat_Penn'
  },
  {
    prettyName: 'Ada Yonath',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Ada_Yonath'
  },
  {
    prettyName: 'Idit Zehavi',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Idit_Zehavi'
  },
  {
    prettyName: 'Maria Abbracchio',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Maria_Abbracchio'
  },
  {
    prettyName: 'Daria Guidetti',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Daria_Guidetti'
  },
  {
    prettyName: 'Chiara Nappi',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Chiara_Nappi'
  },
  {
    prettyName: 'Elisa Oricchio',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Elisa_Oricchio'
  },
  {
    prettyName: 'Emīlija Gudriniece',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Em%C4%ABlija_Gudriniece'
  },
  {
    prettyName: 'Christiane Linster',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Christiane_Linster'
  },
  {
    prettyName: 'Rajaâ Cherkaoui El Moursli',
    prettyNameLink:
      'https://en.wikipedia.org/wiki/Raja%C3%A2_Cherkaoui_El_Moursli'
  },
  {
    prettyName: 'Higgs Boson',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Higgs_boson'
  },
  {
    prettyName: 'Corinne Hofman',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Corinne_Hofman'
  },
  {
    prettyName: 'Tine Tammes',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Tine_Tammes'
  },
  {
    prettyName: 'Johanna Westerdijk',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Johanna_Westerdijk'
  },
  {
    prettyName: 'Margaret Brimble',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Margaret_Brimble'
  },
  {
    prettyName: 'Gillian Wratt',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Gillian_Wratt'
  },
  {
    prettyName: 'Taiwo Olayemi Elufioye',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Taiwo_Olayemi_Elufioye'
  },
  {
    prettyName: 'Eucharia Oluchi Nwaichi',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Eucharia_Oluchi_Nwaichi'
  },
  {
    prettyName: 'Grace Oladunni Taylor',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Grace_Oladunni_Taylor'
  },
  {
    prettyName: 'Omowunmi Sadik',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Omowunmi_Sadik'
  },
  {
    prettyName: 'Tine Jensen',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Tine_Jensen'
  },
  {
    prettyName: 'Virginia Vargas',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Virginia_Vargas'
  },
  {
    prettyName: 'Mónica Bettencourt-Dias',
    prettyNameLink: 'https://en.wikipedia.org/wiki/M%C3%B3nica_Bettencourt-Dias'
  },
  {
    prettyName: 'Eugenia Kumacheva',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Eugenia_Kumacheva'
  },
  {
    prettyName: 'Suhad Bahajri',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Suhad_Bahajri'
  },
  {
    prettyName: 'Samira Islam',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Samira_Islam'
  },
  {
    prettyName: 'Nataša Pavlović',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Nata%C5%A1a_Pavlovi%C4%87'
  },
  {
    prettyName: 'Gloria Lim',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Gloria_Lim'
  },
  {
    prettyName: 'Lisa Ng',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Lisa_Ng'
  },
  {
    prettyName: 'Valerie Mizrahi',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Valerie_Mizrahi'
  },
  {
    prettyName: 'Tebello Nyokong',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Tebello_Nyokong'
  },
  {
    prettyName: 'Jennifer Thomson',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Jennifer_Thomson'
  },
  {
    prettyName: 'Mercedes Fernández-Martorell',
    prettyNameLink:
      'https://en.wikipedia.org/wiki/Mercedes_Fern%C3%A1ndez-Martorell'
  },
  {
    prettyName: 'María José García Borge',
    prettyNameLink:
      'https://en.wikipedia.org/wiki/Mar%C3%ADa_Jos%C3%A9_Garc%C3%ADa_Borge'
  },
  {
    prettyName: 'Carme Torras',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Carme_Torras'
  },
  {
    prettyName: 'Carmen Vela',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Carmen_Vela'
  },
  {
    prettyName: 'Ju-Lee Kim',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Ju-Lee_Kim'
  },
  {
    prettyName: 'Myeong-Hee Yu',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Myeong-Hee_Yu'
  },
  {
    prettyName: 'Anita Studer',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Anita_Studer'
  },
  {
    prettyName: 'Chung-Pei Ma',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Chung-Pei_Ma'
  },
  {
    prettyName: 'Ayşe Erzan',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Ay%C5%9Fe_Erzan'
  },
  {
    prettyName: 'Svitlana Mayboroda',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Svitlana_Mayboroda'
  },
  {
    prettyName: 'Denise P. Barlow',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Denise_P._Barlow'
  },
  {
    prettyName: 'Gillian Bates',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Gillian_Bates'
  },
  {
    prettyName: 'Alex Bayliss',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Alex_Bayliss'
  },
  {
    prettyName: 'Sue Black',
    prettyNameLink:
      'https://en.wikipedia.org/wiki/Sue_Black_(computer_scientist)'
  },
  {
    prettyName: 'A. Catrina Bryce',
    prettyNameLink: 'https://en.wikipedia.org/wiki/A._Catrina_Bryce'
  },
  {
    prettyName: 'Mandy Chessell',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mandy_Chessell'
  },
  {
    prettyName: 'Jenny Clack',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Jenny_Clack'
  },
  {
    prettyName: 'Bryony Coles',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Bryony_Coles'
  },
  {
    prettyName: 'Janet Darbyshire',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Janet_Darbyshire'
  },
  {
    prettyName: 'Shahina Farid',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Shahina_Farid'
  },
  {
    prettyName: 'Emily Grossman',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Emily_Grossman'
  },
  {
    prettyName: 'Helena Hamerow',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Helena_Hamerow'
  },
  {
    prettyName: 'Joanne Johnson',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Joanne_Johnson'
  },
  {
    prettyName: 'Rachel McKendry',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Rachel_McKendry'
  },
  {
    prettyName: 'Linda McDowell',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Linda_McDowell'
  },
  {
    prettyName: 'Jane E. Parker',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Jane_E._Parker'
  },
  {
    prettyName: 'Emma Parmee',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Emma_Parmee'
  },
  {
    prettyName: 'Margaret Stanley',
    prettyNameLink:
      'https://en.wikipedia.org/wiki/Margaret_Stanley_(virologist)'
  },
  {
    prettyName: 'Jean Thomas',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Jean_Thomas_(biochemist)'
  },
  {
    prettyName: 'Miriam Tildesley',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Miriam_Tildesley'
  },
  {
    prettyName: 'Karen Vousden',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Karen_Vousden'
  },
  {
    prettyName: 'Christine Williams',
    prettyNameLink:
      'https://en.wikipedia.org/wiki/Christine_Williams_(nutritionist)'
  },
  {
    prettyName: 'Athena Aktipis',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Athena_Aktipis'
  },
  {
    prettyName: 'Alice Alldredge',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Alice_Alldredge'
  },
  {
    prettyName: 'Lera Boroditsky',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Lera_Boroditsky'
  },
  {
    prettyName: 'Stephanie Burns',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Stephanie_Burns'
  },
  {
    prettyName: 'Joy Crisp',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Joy_Crisp'
  },
  {
    prettyName: 'Debra Elmegreen',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Debra_Elmegreen'
  },
  {
    prettyName: 'Deborah Estrin',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Deborah_Estrin'
  },
  {
    prettyName: 'Sandra Faber',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Sandra_Faber'
  },
  {
    prettyName: 'Pamela Gay',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Pamela_Gay'
  },
  {
    prettyName: 'Candace S. Greene',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Candace_S._Greene'
  },
  {
    prettyName: 'Jane Grimwood',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Jane_Grimwood'
  },
  {
    prettyName: 'Human Genome Project',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Human_Genome_Project'
  },
  {
    prettyName: 'Martha P. Haynes',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Martha_P._Haynes'
  },
  {
    prettyName: 'Gail Hanson',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Gail_Hanson'
  },
  {
    prettyName: 'Gabriele C. Hegerl',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Gabriele_C._Hegerl'
  },
  {
    prettyName: 'Patricia Hersh',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Patricia_Hersh'
  },
  {
    prettyName: 'Valerie Horsley',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Valerie_Horsley'
  },
  {
    prettyName: 'Shirley Ann Jackson',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Shirley_Ann_Jackson'
  },
  {
    prettyName: 'Alice K. Jacobs',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Alice_K._Jacobs'
  },
  {
    prettyName: 'Karen C. Johnson',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Karen_C._Johnson'
  },
  {
    prettyName: 'Rosemary Joyce',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Rosemary_Joyce'
  },
  {
    prettyName: 'Renata Kallosh',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Renata_Kallosh'
  },
  {
    prettyName: 'Dina Katabi',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Dina_Katabi'
  },
  {
    prettyName: 'Ann Kiessling',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Ann_Kiessling'
  },
  {
    prettyName: 'Maria Kovacs',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Maria_Kovacs'
  },
  {
    prettyName: 'Cynthia Larive',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Cynthia_Larive'
  },
  {
    prettyName: 'Nataša Pavlović',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Nata%C5%A1a_Pavlovi%C4%87'
  },
  {
    prettyName: 'J. Virginia Lincoln',
    prettyNameLink: 'https://en.wikipedia.org/wiki/J._Virginia_Lincoln'
  },
  {
    prettyName: 'Mariangela Lisanti',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mariangela_Lisanti'
  },
  {
    prettyName: 'Anna Suk-Fong Lok',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Anna_Suk-Fong_Lok'
  },
  {
    prettyName: 'Catherine A. Lozupone',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Catherine_A._Lozupone'
  },
  {
    prettyName: 'Silvia Maciá',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Silvia_Maci%C3%A1'
  },
  {
    prettyName: 'Carolyn M. Mazure',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Carolyn_M._Mazure'
  },
  {
    prettyName: 'Sally McBrearty',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Sally_McBrearty'
  },
  {
    prettyName: 'Lucy-Ann McFadden',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Lucy-Ann_McFadden'
  },
  {
    prettyName: 'Jill Mikucki',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Jill_Mikucki'
  },
  {
    prettyName: 'Marianne V. Moore',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Marianne_V._Moore'
  },
  {
    prettyName: 'Yolanda T. Moses',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Yolanda_T._Moses'
  },
  {
    prettyName: 'Alison Murray',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Alison_Murray_(scientist)'
  },
  {
    prettyName: 'Anna Nagurney',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Anna_Nagurney'
  },
  {
    prettyName: 'Ann Nelson',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Ann_Nelson'
  },
  {
    prettyName: 'Anne B. Newman',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Anne_B._Newman'
  },
  {
    prettyName: 'Lina Nilsson',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Lina_Nilsson_(scientist)'
  },
  {
    prettyName: 'Karen Oberhauser',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Karen_Oberhauser'
  },
  {
    prettyName: 'E. Gail de Planque',
    prettyNameLink: 'https://en.wikipedia.org/wiki/E._Gail_de_Planque'
  },
  {
    prettyName: 'Eva J. Pell',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Eva_J._Pell'
  },
  {
    prettyName: 'Carolyn Porco',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Carolyn_Porco'
  },
  {
    prettyName: 'Helen Quinn',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Helen_Quinn'
  },
  {
    prettyName: 'Lisa Randall',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Lisa_Randall'
  },
  {
    prettyName: 'Una Ryan',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Una_Ryan'
  },
  {
    prettyName: 'Omowunmi Sadik',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Omowunmi_Sadik'
  },
  {
    prettyName: 'Linda Saif',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Linda_Saif'
  },
  {
    prettyName: 'Sandra Saouaf',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Sandra_Saouaf'
  },
  {
    prettyName: 'Hazel Schmoll',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Hazel_Schmoll'
  },
  {
    prettyName: 'Christine Siddoway',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Christine_Siddoway'
  },
  {
    prettyName: 'Caroline M. Solomon',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Caroline_M._Solomon'
  },
  {
    prettyName: 'Linda Spilker',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Linda_Spilker'
  },
  {
    prettyName: 'Sharon Stocker',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Sharon_Stocker'
  },
  {
    prettyName: 'Griffin Warrior Tomb',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Griffin_Warrior_Tomb'
  },
  {
    prettyName: 'Jill Tarter',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Jill_Tarter'
  },
  {
    prettyName: 'Elizabeth C. Theil',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Elizabeth_C._Theil'
  },
  {
    prettyName: 'Kay Tye',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Kay_Tye'
  },
  {
    prettyName: 'Lydia Villa-Komaroff',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Lydia_Villa-Komaroff'
  },
  {
    prettyName: 'Elisabeth Vrba',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Elisabeth_Vrba'
  },
  {
    prettyName: 'Nora Volkow',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Nora_Volkow'
  },
  {
    prettyName: 'Elizabeth M. Ward',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Elizabeth_M._Ward'
  },
  {
    prettyName: 'Christina Warinner',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Christina_Warinner'
  },
  {
    prettyName: 'Petra Wilder-Smith',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Petra_Wilder-Smith'
  },
  {
    prettyName: 'Phyllis Wise',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Phyllis_Wise'
  },
  {
    prettyName: 'Catherine G. Wolf',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Catherine_G._Wolf'
  },
  {
    prettyName: 'Kakani Katija Young',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Kakani_Katija_Young'
  },
  {
    prettyName: 'Hua Eleanor Yu',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Hua_Eleanor_Yu'
  },
  {
    prettyName: 'Rachel Zimmerman',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Rachel_Zimmerman'
  },
  {
    prettyName: 'Maria Zuber',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Maria_Zuber'
  },
  {
    prettyName: 'Lydia Darragh',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Lydia_Darragh'
  },
  {
    prettyName: 'Mayly Sánchez',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Mayly_S%C3%A1nchez'
  },
  {
    prettyName: 'Phạm Thị Trân Châu',
    prettyNameLink:
      'https://en.wikipedia.org/wiki/Ph%E1%BA%A1m_Th%E1%BB%8B_Tr%C3%A2n_Ch%C3%A2u'
  },
  {
    prettyName: 'Hoang Thi Than',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Hoang_Thi_Than'
  },
  {
    prettyName: 'Idah Sithole-Niang',
    prettyNameLink: 'https://en.wikipedia.org/wiki/Idah_Sithole-Niang'
  }
]

module.exports = scientistsAfter2000
