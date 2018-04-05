exports.seed = function (knex, Promise) {
    return knex('profiles').del()
      .then(function () {
        return knex('profiles').insert([
          {id: 01, gen:01, profile_id:01, parent_id:'',  user_name:'Auru Tairea'},
          {id: 02, gen:02, profile_id:02, parent_id:01, user_name:'Waipuni Tairea'},
          {id: 03, gen:02, profile_id:03, parent_id:01, user_name:'Tinokura Tairea'},
          {id: 04, gen:02, profile_id:04, parent_id:01, user_name:'Maka Tairea'},
          {id: 05, gen:02, profile_id:05, parent_id:01, user_name:'Mara Tairea'},
          {id: 06, gen:02, profile_id:06, parent_id:01, user_name:'Nani Tairea'},
          {id: 07, gen:03, profile_id:07, parent_id:02, user_name:'Benjamin Tairea'},
          {id: 08, gen:03, profile_id:08, parent_id:02, user_name:'Waipuna Tairea'},
          {id: 09, gen:03, profile_id:09, parent_id:02, user_name:'Sara Tairea'},
          {id: 10, gen:03, profile_id:10, parent_id:02, user_name:'Samuel Tairea'},
        ]
      )})
  }
  