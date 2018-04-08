exports.seed = function (knex, Promise) {
    return knex('manaariki').del()
      .then(function () {
        return knex('manaariki').insert([
          {id: 01, profile_id:101, gen:01, parent_id:'',  gender:'m', partner_name:'Ake Tongareau',  name:'Mana Ariki',image:'https://upload.wikimedia.org/wikipedia/commons/b/b2/Patepou.jpg'},

          {id: 02, profile_id:102, gen:02, parent_id:01,  gender:'m', partner_name:'', name:'Marukoi',image:''},
          {id: 03, profile_id:103, gen:02, parent_id:01,  gender:'m', partner_name:'', name:'Tarangariki',image:''},

          {id: 04, profile_id:104, gen:03, parent_id:02,  gender:'m', partner_name:'', name:'Tapai',image:''},
          {id: 05, profile_id:105, gen:03, parent_id:03,  gender:'m', partner_name:'Tera-E-Nuku Ariki', name:'Mataiapo', image:''},

          {id: 06, profile_id:106, gen:04, parent_id:04,  gender:'m', partner_name:'', name:'Teveta',image:''},
          {id: 07, profile_id:107, gen:04, parent_id:04,  gender:'m', partner_name:'Aketukuariki', name:'Opua',image:''},
          {id: 08, profile_id:108, gen:04, parent_id:04,  gender:'f', partner_name:'', name:'Ngaropi',image:''},

          {id: 09, profile_id:109, gen:04, parent_id:05,  gender:'m', partner_name:'Aketoa', name:'Vaipunu',image:''},
          {id: 10, profile_id:110, gen:04, parent_id:05,  gender:'m', partner_name:'Kuraau', name:'Pipirangi',image:''},

          {id: 11, profile_id:111, gen:05, parent_id:06,  gender:'f', partner_name:'', name:'Uriatua',image:''},
          {id: 12, profile_id:112, gen:05, parent_id:06,  gender:'m', partner_name:'', name:'Mareva',image:''},

          {id: 13, profile_id:113, gen:05, parent_id:07,  gender:'m', partner_name:'', name:'Vouvou Kana',image:''},
          {id: 14, profile_id:114, gen:05, parent_id:07,  gender:'m', partner_name:'', name:'Tairea',image:''},
          {id: 15, profile_id:115, gen:05, parent_id:07,  gender:'m', partner_name:'', name:'Tamea', image:''},

          {id: 16, profile_id:116, gen:05, parent_id:09,  gender:'m', partner_name:'Teurarii', name:'Tairea',image:''},

          {id: 17, profile_id:117, gen:06, parent_id:11,  gender:'', partner_name:'', name:'Putu',image:''},

          {id: 18, profile_id:118, gen:06, parent_id:12,  gender:'f', partner_name:'', name:'Pirire',image:''},
          {id: 19, profile_id:119, gen:06, parent_id:12,  gender:'m', partner_name:'', name:'Samuela',image:''},

          {id: 20, profile_id:120, gen:06, parent_id:16,  gender:'m', partner_name:'', name:'Tara',image:''},
          {id: 21, profile_id:121, gen:06, parent_id:16,  gender:'m', partner_name:'', name:'Auru',image:''},
          {id: 22, profile_id:122, gen:06, parent_id:16,  gender:'f', partner_name:'', name:'Taunga',image:''},
          {id: 23, profile_id:123, gen:06, parent_id:16,  gender:'m', partner_name:'', name:'Piri',image:''},
          {id: 24, profile_id:124, gen:06, parent_id:16,  gender:'f', partner_name:'', name:'Pipirangi',image:''},
          {id: 25, profile_id:125, gen:06, parent_id:16,  gender:'f', partner_name:'', name:'Tuaauri',image:''},
          {id: 26, profile_id:126, gen:06, parent_id:16,  gender:'m', partner_name:'', name:'Ta',image:''},
          {id: 27, profile_id:127, gen:06, parent_id:16,  gender:'m', partner_name:'', name:'Tangatakere',image:''},
          {id: 28, profile_id:128, gen:06, parent_id:16,  gender:'m', partner_name:'', name:'Manaariki',image:''},
          {id: 29, profile_id:129, gen:06, parent_id:16,  gender:'m', partner_name:'', name:'Tariu',image:''},
          {id: 30, profile_id:130, gen:06, parent_id:16,  gender:'m', partner_name:'', name:'Vai',image:''},
          {id: 31, profile_id:131, gen:06, parent_id:16,  gender:'m', partner_name:'', name:'Ina',image:''},
          {id: 32, profile_id:132, gen:06, parent_id:16,  gender:'m', partner_name:'', name:'Rouruina',image:''},
          
        ])
    })
  }