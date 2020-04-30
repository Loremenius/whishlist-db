exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('user').del()
      .then(function () {
        // Inserts seed entries
        return knex('user').insert([
            {
                username: "munch",
                password: "$2a$08$BGbDGjIjmO0A4BuQ8jVtjuaK1LC.7jlxBXcwib1figv10AonFsRue",
                firstname: "Marcellino",
                lastname: "Fernandez"
            },
            {
                username: "felicia",
                password: "$2a$08$bdCVj9DNDMOazneLUeTyeuA0TA8uctzS3GAFfKUr0uyI/NjwT7fZC",
                firstname: "Felicia",
                lastname: "Fernandez"
            },
            {
                username: "fantmdragn",
                password: "$2a$08$/C4Eo8xtCHlvNuPsYlfYo.QEMxSTWBelVgbdHjozSpakuRaLve81K",
                firstname: "Michael",
                lastname: "Fernandez"
            },
            {
                username: "gabe",
                password: "$2a$08$12zYZVwEzq6tXceXAfv4f.jEleaoN0uUhkB8OB3MCDuI.duesy25u",
                firstname: "Gabriel",
                lastname: "Fernandez"
            },
            {
                username: "mae",
                password: "$2a$08$/YwYNk8njGUk0sxTZYaxR.o0.Hyq1gxgYr4vjFBsRBgWIrCS0P1DW",
                firstname: "Mae",
                lastname: "Casias"
            },
            {
                "username": "jjbscasias",
                "password": "$2a$08$uIyZ5F3v6a0.sdZTO/Ex4uKedSFBrfDTwbUcZbvmHSZzAPwS7DwX.",
                "firstname": "Jennifer",
                "lastname": "Casias"
            },
            {
                "username": "bobster33",
                "password": "$2a$08$9i8cXy5/yVL/XkHvw1Pz5.oO8iTQ2QIbmsbw.5reVlFNMY2dKQrWW",
                "firstname": "Robert",
                "lastname": "Agnew"
            },
            {
                "username": "chinton",
                "password": "$2a$08$RK1qPmbZ0lT5Msd64KS4VOCF7vbDcpVqMt6tbx79GkJHpzXW4g43S",
                "firstname": "Cheryl",
                "lastname": "Hinton"
            },
            {
                "username": "sacasias",
                "password": "$2a$08$NYfopzE7CE3e5u2LECbHeOMnh8bCJKsY8IjJYmlO09t15d1QrpJaC",
                "firstname": "Sarah",
                "lastname": "Casias"
            },
            {
                "username": "becasias",
                "password": "$2a$08$q6GzFjbX0GE43/dWBiW6ce9yWfSuGw2/8Zj9rCVrQNpsiQZSdTGMa",
                "firstname": "Breanna",
                "lastname": "Casias"
            },
            {
                "username": "kfujino",
                "password": "$2a$08$DSeao27RG/llznQeWjFPrOOUIBVTAqq52kvdZtVoVa/Q0nAkUZzvS",
                "firstname": "Katsuya",
                "lastname": "Fujino"
            },
            {
                "username": "x",
                "password": "$2a$08$kKmIz/4HsrRnmaO6KnxW6O05u9yLInnkT2YBMTnfAGzAxIMzAVBgO",
                "firstname": "Xavier",
                "lastname": "Fernandez"
            },
            {
                "username": "jfcasias",
                "password": "$2a$08$3uZg//MJ/lrFGFKUDw.QMOy7j3woaDPMC77mim3YQrf3jXbsnMzOW",
                "firstname": "Juan",
                "lastname": "Casias"
            },
            {
                "username": "rhonda",
                "password": "$2a$08$b9klioEofC4CwlsBVuQVNOKUlwN7RMlF/aZMk5NQivNe35FnXx70S",
                "firstname": "Rhonda",
                "lastname": "Haskins"
            },
            {
                "username": "agnewcrew",
                "password": "$2a$08$jXzIBvF6kb3p.SxIHzQJuuxjQf7TYeZKe6CFL9yGu9ChnC9q8UluO",
                "firstname": "Kathy",
                "lastname": "Agnew"
            },
            {
                "username": "zevkat",
                "password": "$2a$08$6lpMBS1E2aYurDZHbK6hqO7mbti7Rx5Pbiw/ZeoLktOV93YOnCv5i",
                "firstname": "John",
                "lastname": "Agnew"
            },
            {
                "username": "mikeh",
                "password": "$2a$08$S5rht5U0BcuRlYiRMKun4um1m1hpxpwS1Qj//1J4TlG5R.eW7oPs6",
                "firstname": "Mike",
                "lastname": "Haskins"
            },
            {
                "username": "nick",
                "password": "$2a$08$2PyoMmi.UW7xArsI9XcVBeCuzj9cppP.EG9kvDy1rEXJh0uHb.q0e",
                "firstname": "Nick",
                "lastname": "Haskins"
            },
            {
                "username": "carly",
                "password": "$2a$08$btLGYLh1MVeMdnXChJMCSuf4iH4wHvgAA1t4jvQSkRE3EIGOxpZNu",
                "firstname": "Carly",
                "lastname": "Haskins"
            },
            {
                "username": "dlcasias",
                "password": "$2a$08$t2nwc7Tp1jBquCM6xyjn3uWJJh6P3JmYnPMqRPCJG1Pu0KkIx/HbK",
                "firstname": "Alex",
                "lastname": "Casias"
            },
            {
                "username": "wil",
                "password": "$2a$08$QgIvZ7nJbbuuh93H6P4tpuuBkHFGPjQwEEik77KgA2j.jyC3mLUCi",
                "firstname": "Wil",
                "lastname": "Ramirez"
            },
            {
                "username": "tabitha",
                "password": "$2a$08$w3lz7qWngxCgO.AOPOyEiOoKD7kTsR3yy2kaDslZUf0bekfMLfm.6",
                "firstname": "Tabitha",
                "lastname": "Ramirez"
            },
            {
                "username": "lcasias",
                "password": "$2a$08$/0ubMNoqHF.0rjryanrIPukJFUs4UJs5mE2VwE2arzYSxgVB/mj9K",
                "firstname": "Lilia",
                "lastname": "Casias"
            },
            {
                "username": "dcasias",
                "password": "$2a$08$vQQv2eFCzY0/tbywP2kDmOe4RzvlsdFwYkhX.CjesDnMgEYu20f5i",
                "firstname": "David",
                "lastname": "Casias"
            },
            {
                "username": "nathalie",
                "password": "$2a$08$yPxCf.wiX21Cq3jPbUP96.I7aWPsFlpIttLCZZvn8hYGrhMPaj2PS",
                "firstname": "Nathalie",
                "lastname": "Agnew"
            },
            {
                "username": "timothy",
                "password": "$2a$08$N3LrWhJX8mJYIEKVwMu0I.mb6d2wlXFqjQsyUS6l.wCNzfLEh/KCe",
                "firstname": "Timothy",
                "lastname": "Agnew"
            },
            {
                "username": "megan",
                "password": "$2a$08$UMTpPYkdgSUVtUp2nuQGseQG0hu9v1zpb4knedVV6gxFZjzAcaLcm",
                "firstname": "Megan",
                "lastname": "Agnew"
            },
            {
                "username": "j2",
                "password": "$2a$08$HgCURV6qSIzog2ysrWavLOFXyIueJcShBV250TEMUId2UT.FGnjZG",
                "firstname": "John",
                "lastname": "Agnew"
            },
            {
                "username": "brent",
                "password": "$2a$08$TX3LAfhjiRlN8kAQoksCKugjO1szsAI8Tp25wnnaxExuRkx1TQPdK",
                "firstname": "Brent",
                "lastname": "Agnew"
            },
            {
                "username": "rodolpho",
                "password": "$2a$08$5DkTKgZ8oImdHOtLJlK19eiee1Jnl1UC38ca/LxP0mdYtdFRalH4m",
                "firstname": "Rodolpho",
                "lastname": "Casias"
            }
        ]);
      });
  };