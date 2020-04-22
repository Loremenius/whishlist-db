
exports.up = function(knex) {
    return knex.schema.createTable("family_name",tbl=>{
        tbl.increments();
  
        tbl.string("name", 255)
          .notNullable()
          .unique();
  
    }).createTable("user", tbl=>{
        tbl.increments();
  
        tbl.string("username",255)
          .notNullable()
          .unique();
  
        tbl.string("password", 255)
          .notNullable();
  
        tbl.integer("family_name_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable('family_name')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        
    }).createTable("gift",tbl=>{
        tbl.increments();
        
        tbl.string("name",255)
          .notNullable();
        
        tbl.string("description", 255)
          .notNullable();
        
        tbl.string("gift_url", 255)
          .notNullable();
        
        tbl.boolean("purchased")
            .defaultTo(false)
            .notNullable()
      
        tbl.integer("user_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable('user')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
  
    })
};

exports.down = function(knex) {
  
};
