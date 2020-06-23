
exports.up = function(knex) {
    return knex.schema.dropTableIfExists("gift")  
    .createTable("gift",tbl=>{
        tbl.increments();
        
        tbl.string("name",255)
          .notNullable();
        
        tbl.string("description", 255)
          .notNullable();
        
        tbl.string("gift_url", 500)
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
