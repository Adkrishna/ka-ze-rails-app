# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Account.create!(first_name:'Integration', last_name: 'User', phone: '416-357-9321', email: 'admin@integration.com', password:'int3grat3', password_confirmation:'int3grat3', viewAllIncidents: true)
