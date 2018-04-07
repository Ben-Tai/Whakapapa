exports.seed = function (knex, Promise) {
    return knex('people').del()
      .then(function () {
        return knex('people').insert([
          {id: 01, gen:01, profile_id:101, parent_id:'', gender:'m', partner_name:'Ake Tongareau',  user_name:'Mana Ariki'},

          {id: 02, gen:02, profile_id:102, parent_id:01, gender:'m', partner_name:'', user_name:'Marukoi'},
          {id: 03, gen:02, profile_id:103, parent_id:01, gender:'m', partner_name:'', user_name:'Tarangariki'},

          {id: 04, gen:03, profile_id:104, parent_id:02, gender:'m', partner_name:'', user_name:'Tapai'},
          {id: 05, gen:03, profile_id:105, parent_id:03, gender:'m', partner_name:'Tera-E-Nuku Ariki', user_name:'Mataiapo', },

          {id: 06, gen:04, profile_id:106, parent_id:04, gender:'m', partner_name:'', user_name:'Teveta'},
          {id: 07, gen:04, profile_id:107, parent_id:04, gender:'m', partner_name:'Aketukuariki', user_name:'Opua'},
          {id: 08, gen:04, profile_id:108, parent_id:04, gender:'f', partner_name:'', user_name:'Ngaropi'},

          {id: 09, gen:04, profile_id:109, parent_id:05, gender:'m', partner_name:'Aketoa', user_name:'Vaipunu',},
          {id: 10, gen:04, profile_id:110, parent_id:05, gender:'m', partner_name:'Kuraau', user_name:'Pipirangi'},

          {id: 11, gen:05, profile_id:111, parent_id:06, gender:'f', partner_name:'', user_name:'Uriatua'},
          {id: 12, gen:05, profile_id:112, parent_id:06, gender:'m', partner_name:'', user_name:'Mareva'},

          {id: 13, gen:05, profile_id:113, parent_id:07, gender:'m', partner_name:'', user_name:'Vouvou Kana'},
          {id: 14, gen:05, profile_id:114, parent_id:07, gender:'m', partner_name:'', user_name:'Tairea'},
          {id: 15, gen:05, profile_id:115, parent_id:07, gender:'m', partner_name:'', user_name:'Tamea', },

          {id: 16, gen:05, profile_id:116, parent_id:09, gender:'m', partner_name:'Teurarii', user_name:'Tairea'},

          {id: 17, gen:06, profile_id:117, parent_id:11, gender:'', partner_name:'', user_name:'Putu'},

          {id: 18, gen:06, profile_id:118, parent_id:12, gender:'f', partner_name:'', user_name:'Pirire'},
          {id: 19, gen:06, profile_id:119, parent_id:12, gender:'m', partner_name:'', user_name:'Samuela',},

          {id: 20, gen:06, profile_id:120, parent_id:16, gender:'m', partner_name:'', user_name:'Tara'},
          {id: 21, gen:06, profile_id:121, parent_id:16, gender:'m', partner_name:'', user_name:'Auru'},
          {id: 22, gen:06, profile_id:122, parent_id:16, gender:'f', partner_name:'', user_name:'Taunga'},
          {id: 23, gen:06, profile_id:123, parent_id:16, gender:'m', partner_name:'', user_name:'Piri',},
          {id: 24, gen:06, profile_id:124, parent_id:16, gender:'f', partner_name:'', user_name:'Pipirangi'},
          {id: 25, gen:06, profile_id:125, parent_id:16, gender:'f', partner_name:'', user_name:'Tuaauri',},
          {id: 26, gen:06, profile_id:126, parent_id:16, gender:'m', partner_name:'', user_name:'Ta'},
          {id: 27, gen:06, profile_id:127, parent_id:16, gender:'m', partner_name:'', user_name:'Tangatakere'},
          {id: 28, gen:06, profile_id:128, parent_id:16, gender:'m', partner_name:'', user_name:'Manaariki'},
          {id: 29, gen:06, profile_id:129, parent_id:16, gender:'m', partner_name:'', user_name:'Tariu',},
          {id: 30, gen:06, profile_id:130, parent_id:16, gender:'m', partner_name:'', user_name:'Vai'},
          {id: 31, gen:06, profile_id:131, parent_id:16, gender:'m', partner_name:'', user_name:'Ina'},
          {id: 32, gen:06, profile_id:132, parent_id:16, gender:'m', partner_name:'', user_name:'Rouruoina',},
          
        ])
    })
  }