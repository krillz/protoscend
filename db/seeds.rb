# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

User.create! first_name: 'Donald',      last_name: 'Trump',     email: 'racist@gop.com',             password: 'keyboardcat', role: 1
User.create! first_name: 'Chris',       last_name: 'Sharma',    email: 'chris.sharma@mail.com',      password: 'keyboardcat', role: 1
User.create! first_name: 'Steve',       last_name: 'Jobs',      email: 'steve.jobs@me.com',          password: 'keyboardcat', role: 1
User.create! first_name: 'Bear',        last_name: 'Grylls',    email: 'peejoke@mail.com',           password: 'keyboardcat', role: 1
User.create! first_name: 'Waka Flocka', last_name: 'Flame',     email: 'waka.f.flame@mail.com',      password: 'keyboardcat', role: 2
User.create! first_name: 'Barbara',     last_name: 'Streisand', email: 'b.streisand@live.com',       password: 'keyboardcat', role: 2
User.create! first_name: 'Red',         last_name: 'Teletubby', email: 'red.teletubby@mail.com',     password: 'keyboardcat', role: 3
User.create! first_name: 'Obi Wan',     last_name: 'Kenobi',    email: 'bigballer69@aol.com',        password: 'keyboardcat', role: 3
User.create! first_name: 'Optimus',     last_name: 'Prime',     email: 'autobots.rollout@spark.com', password: 'keyboardcat', role: 5
User.create! first_name: 'Jonah',       last_name: 'George',    email: 'jonah.george@me.com',        password: 'keyboardcat', role: 5
User.create! first_name: 'Ty',          last_name: 'Skelton',   email: 'tyskelton118@gmail.com',     password: 'keyboardcat', role: 5

Route.create! name: 'Metalocalypse', user_id: 1, \
              location: 'Dixon', tape_color: 'Blue', grade: '5.9', \
              route_set_date: '2015-01-01', expiration_date: '2015-04-01'

Route.create! name: 'Best Route', user_id: 2, \
              location: 'Dixon', tape_color: 'Red', grade: '5.10', \
              route_set_date: '2015-05-05', expiration_date: '2015-08-05'

Rating.create! route_id: 1, user_id: 1, rating: 5
Rating.create! route_id: 2, user_id: 2, rating: 4
Rating.create! route_id: 1, user_id: 4, rating: 3

Announcement.create! body: 'hey look everybody, i\'m announcing this!!1', \
                     created_at: '2015-05-05', updated_at: '2015-05-05', expires_at: '2016-03-29', \
                     subject: 'First announcement', user_id: 1, reveal_date: '2016-03-25'
Announcement.create! body: 'testpenis', \
                    created_at: '2015-05-23', updated_at: '2015-05-23', expires_at: '2016-04-11', \
                    subject: 'Second announcement', user_id: 1, reveal_date: '2016-03-26'

MaintenanceRequest.create! route_id: 1, user_id: 1, reason: 'spinner in the middle', status: 0, priority: 1, issue: 3

Comment.create! route_id: 1, user_id: 1, comment: 'excellent route, brochacho'

SupportTicket.create! user_id: 1, ticket: 'i had a bad experience with the site and I choose to not elaborate.'
