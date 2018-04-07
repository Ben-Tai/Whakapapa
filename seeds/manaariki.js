exports.seed = function (knex, Promise) {
    return knex('manaariki').del()
      .then(function () {
        return knex('manaariki').insert([
          {id: 01, profile_id:101, gen:01, parent_id:'', gender:'m', partner_name:'Ake Tongareau',  name:'Mana Ariki'},

          {id: 02, profile_id:102, gen:02, parent_id:01, gender:'m', partner_name:'', name:'Marukoi'},
          {id: 03, profile_id:103, gen:02, parent_id:01, gender:'m', partner_name:'', name:'Tarangariki'},

          {id: 04, profile_id:104, gen:03, parent_id:02, gender:'m', partner_name:'', name:'Tapai'},
          {id: 05, profile_id:105, gen:03, parent_id:03, gender:'m', partner_name:'Tera-E-Nuku Ariki', name:'Mataiapo', },

          {id: 06, profile_id:106, gen:04, parent_id:04, gender:'m', partner_name:'', name:'Teveta'},
          {id: 07, profile_id:107, gen:04, parent_id:04, gender:'m', partner_name:'Aketukuariki', name:'Opua'},
          {id: 08, profile_id:108, gen:04, parent_id:04, gender:'f', partner_name:'', name:'Ngaropi'},

          {id: 09, profile_id:109, gen:04, parent_id:05, gender:'m', partner_name:'Aketoa', name:'Vaipunu',},
          {id: 10, profile_id:110, gen:04, parent_id:05, gender:'m', partner_name:'Kuraau', name:'Pipirangi'},

          {id: 11, profile_id:111, gen:05, parent_id:06, gender:'f', partner_name:'', name:'Uriatua'},
          {id: 12, profile_id:112, gen:05, parent_id:06, gender:'m', partner_name:'', name:'Mareva'},

          {id: 13, profile_id:113, gen:05, parent_id:07, gender:'m', partner_name:'', name:'Vouvou Kana'},
          {id: 14, profile_id:114, gen:05, parent_id:07, gender:'m', partner_name:'', name:'Tairea'},
          {id: 15, profile_id:115, gen:05, parent_id:07, gender:'m', partner_name:'', name:'Tamea', },

          {id: 16, profile_id:116, gen:05, parent_id:09, gender:'m', partner_name:'Teurarii', name:'Tairea'},

          {id: 17, profile_id:117, gen:06, parent_id:11, gender:'', partner_name:'', name:'Putu'},

          {id: 18, profile_id:118, gen:06, parent_id:12, gender:'f', partner_name:'', name:'Pirire'},
          {id: 19, profile_id:119, gen:06, parent_id:12, gender:'m', partner_name:'', name:'Samuela',},

          {id: 20, profile_id:120, gen:06, parent_id:16, gender:'m', partner_name:'', name:'Tara'},
          {id: 21, profile_id:121, gen:06, parent_id:16, gender:'m', partner_name:'', name:'Auru'},
          {id: 22, profile_id:122, gen:06, parent_id:16, gender:'f', partner_name:'', name:'Taunga'},
          {id: 23, profile_id:123, gen:06, parent_id:16, gender:'m', partner_name:'', name:'Piri',},
          {id: 24, profile_id:124, gen:06, parent_id:16, gender:'f', partner_name:'', name:'Pipirangi'},
          {id: 25, profile_id:125, gen:06, parent_id:16, gender:'f', partner_name:'', name:'Tuaauri',},
          {id: 26, profile_id:126, gen:06, parent_id:16, gender:'m', partner_name:'', name:'Ta'},
          {id: 27, profile_id:127, gen:06, parent_id:16, gender:'m', partner_name:'', name:'Tangatakere'},
          {id: 28, profile_id:128, gen:06, parent_id:16, gender:'m', partner_name:'', name:'Manaariki'},
          {id: 29, profile_id:129, gen:06, parent_id:16, gender:'m', partner_name:'', name:'Tariu',},
          {id: 30, profile_id:130, gen:06, parent_id:16, gender:'m', partner_name:'', name:'Vai'},
          {id: 31, profile_id:131, gen:06, parent_id:16, gender:'m', partner_name:'', name:'Ina'},
          {id: 32, profile_id:132, gen:06, parent_id:16, gender:'m', partner_name:'', name:'Rouruina',},
          
        ])
    })
  }