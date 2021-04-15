exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('user').del()
      .then(function () {
        // Inserts seed entries
        return knex('user').insert([
            {
              id: '32',
              username: 'veronica',
              password: '$2a$08$CT0TdReWwyeOhLQ14WkBS.qtE4pmnPqKm1PuWe8hV/88n9T7Jl2Mm',
              firstname: 'Vikki',
              lastname: 'Casias'
            },
            {
              id: '31',
              username: 'basil',
              password: '$2a$08$XPFXFqAh.FdohEISjaCnjeaJrom.zsbj.7U.Ml5VacO.IyNFrexDa',
              firstname: 'Sage',
              lastname: 'Casias'
            },
            {
              id: '12',
              username: 'x',
              password: '$2a$08$.3Ztvdn1KHDbsjzSwY2Li.Bv2eAqQkOUn.qccYaXUmNiKE7LHde/q',
              firstname: 'Xavier',
              lastname: 'Fernandez'
            },
            {
              id: '30',
              username: 'rodolpho',
              password: '$2a$08$5DkTKgZ8oImdHOtLJlK19eiee1Jnl1UC38ca/LxP0mdYtdFRalH4m',
              firstname: 'Rodolpho',
              lastname: 'Casias'
            },
            {
              id: '29',
              username: 'brent',
              password: '$2a$08$TX3LAfhjiRlN8kAQoksCKugjO1szsAI8Tp25wnnaxExuRkx1TQPdK',
              firstname: 'Brent',
              lastname: 'Agnew'
            },
            {
              id: '28',
              username: 'j2',
              password: '$2a$08$HgCURV6qSIzog2ysrWavLOFXyIueJcShBV250TEMUId2UT.FGnjZG',
              firstname: 'John',
              lastname: 'Agnew'
            },
            {
              id: '27',
              username: 'megan',
              password: '$2a$08$UMTpPYkdgSUVtUp2nuQGseQG0hu9v1zpb4knedVV6gxFZjzAcaLcm',
              firstname: 'Megan',
              lastname: 'Agnew'
            },
            {
              id: '25',
              username: 'nathalie',
              password: '$2a$08$yPxCf.wiX21Cq3jPbUP96.I7aWPsFlpIttLCZZvn8hYGrhMPaj2PS',
              firstname: 'Nathalie',
              lastname: 'Agnew'
            },
            {
              id: '24',
              username: 'dcasias',
              password: '$2a$08$vQQv2eFCzY0/tbywP2kDmOe4RzvlsdFwYkhX.CjesDnMgEYu20f5i',
              firstname: 'David',
              lastname: 'Casias'
            },
            {
              id: '23',
              username: 'lcasias',
              password: '$2a$08$/0ubMNoqHF.0rjryanrIPukJFUs4UJs5mE2VwE2arzYSxgVB/mj9K',
              firstname: 'Lilia',
              lastname: 'Casias'
            },
            {
              id: '22',
              username: 'tabitha',
              password: '$2a$08$w3lz7qWngxCgO.AOPOyEiOoKD7kTsR3yy2kaDslZUf0bekfMLfm.6',
              firstname: 'Tabitha',
              lastname: 'Ramirez'
            },
            {
              id: '21',
              username: 'wil',
              password: '$2a$08$QgIvZ7nJbbuuh93H6P4tpuuBkHFGPjQwEEik77KgA2j.jyC3mLUCi',
              firstname: 'Wil',
              lastname: 'Ramirez'
            },
            {
              id: '20',
              username: 'dlcasias',
              password: '$2a$08$t2nwc7Tp1jBquCM6xyjn3uWJJh6P3JmYnPMqRPCJG1Pu0KkIx/HbK',
              firstname: 'Alex',
              lastname: 'Casias'
            },
            {
              id: '19',
              username: 'carly',
              password: '$2a$08$btLGYLh1MVeMdnXChJMCSuf4iH4wHvgAA1t4jvQSkRE3EIGOxpZNu',
              firstname: 'Carly',
              lastname: 'Haskins'
            },
            {
              id: '18',
              username: 'nick',
              password: '$2a$08$2PyoMmi.UW7xArsI9XcVBeCuzj9cppP.EG9kvDy1rEXJh0uHb.q0e',
              firstname: 'Nick',
              lastname: 'Haskins'
            },
            {
              id: '17',
              username: 'mikeh',
              password: '$2a$08$S5rht5U0BcuRlYiRMKun4um1m1hpxpwS1Qj//1J4TlG5R.eW7oPs6',
              firstname: 'Mike',
              lastname: 'Haskins'
            },
            {
              id: '16',
              username: 'zevkat',
              password: '$2a$08$6lpMBS1E2aYurDZHbK6hqO7mbti7Rx5Pbiw/ZeoLktOV93YOnCv5i',
              firstname: 'John',
              lastname: 'Agnew'
            },
            {
              id: '15',
              username: 'agnewcrew',
              password: '$2a$08$jXzIBvF6kb3p.SxIHzQJuuxjQf7TYeZKe6CFL9yGu9ChnC9q8UluO',
              firstname: 'Kathy',
              lastname: 'Agnew'
            },
            {
              id: '14',
              username: 'rhonda',
              password: '$2a$08$b9klioEofC4CwlsBVuQVNOKUlwN7RMlF/aZMk5NQivNe35FnXx70S',
              firstname: 'Rhonda',
              lastname: 'Haskins'
            },
            {
              id: '13',
              username: 'jfcasias',
              password: '$2a$08$3uZg//MJ/lrFGFKUDw.QMOy7j3woaDPMC77mim3YQrf3jXbsnMzOW',
              firstname: 'Juan',
              lastname: 'Casias'
            },
            {
              id: '11',
              username: 'kfujino',
              password: '$2a$08$DSeao27RG/llznQeWjFPrOOUIBVTAqq52kvdZtVoVa/Q0nAkUZzvS',
              firstname: 'Katsuya',
              lastname: 'Fujino'
            },
            {
              id: '10',
              username: 'becasias',
              password: '$2a$08$q6GzFjbX0GE43/dWBiW6ce9yWfSuGw2/8Zj9rCVrQNpsiQZSdTGMa',
              firstname: 'Breanna',
              lastname: 'Casias'
            },
            {
              id: '9',
              username: 'sacasias',
              password: '$2a$08$NYfopzE7CE3e5u2LECbHeOMnh8bCJKsY8IjJYmlO09t15d1QrpJaC',
              firstname: 'Sarah',
              lastname: 'Casias'
            },
            {
              id: '8',
              username: 'chinton',
              password: '$2a$08$RK1qPmbZ0lT5Msd64KS4VOCF7vbDcpVqMt6tbx79GkJHpzXW4g43S',
              firstname: 'Cheryl',
              lastname: 'Hinton'
            },
            {
              id: '7',
              username: 'bobster33',
              password: '$2a$08$9i8cXy5/yVL/XkHvw1Pz5.oO8iTQ2QIbmsbw.5reVlFNMY2dKQrWW',
              firstname: 'Robert',
              lastname: 'Agnew'
            },
            {
              id: '6',
              username: 'jjbscasias',
              password: '$2a$08$uIyZ5F3v6a0.sdZTO/Ex4uKedSFBrfDTwbUcZbvmHSZzAPwS7DwX.',
              firstname: 'Jennifer',
              lastname: 'Casias'
            },
            {
              id: '5',
              username: 'mae',
              password: '$2a$08$/YwYNk8njGUk0sxTZYaxR.o0.Hyq1gxgYr4vjFBsRBgWIrCS0P1DW',
              firstname: 'Mae',
              lastname: 'Casias'
            },
            {
              id: '4',
              username: 'gabe',
              password: '$2a$08$12zYZVwEzq6tXceXAfv4f.jEleaoN0uUhkB8OB3MCDuI.duesy25u',
              firstname: 'Gabriel',
              lastname: 'Fernandez'
            },
            {
              id: '3',
              username: 'fantmdragn',
              password: '$2a$08$/C4Eo8xtCHlvNuPsYlfYo.QEMxSTWBelVgbdHjozSpakuRaLve81K',
              firstname: 'Michael',
              lastname: 'Fernandez'
            },
            {
              id: '2',
              username: 'felicia',
              password: '$2a$08$bdCVj9DNDMOazneLUeTyeuA0TA8uctzS3GAFfKUr0uyI/NjwT7fZC',
              firstname: 'Felicia',
              lastname: 'Fernandez'
            },
            {
              id: '1',
              username: 'munch',
              password: '$2a$08$BGbDGjIjmO0A4BuQ8jVtjuaK1LC.7jlxBXcwib1figv10AonFsRue',
              firstname: 'Marcellino',
              lastname: 'Fernandez'
            }
          ]);
      });
  };