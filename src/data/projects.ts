import projectYou from "../assets/img/projects/project_you.png"
import projectMemory from "../assets/img/projects/project_memory_complete.png"
import projectDipiri from "../assets/img/projects/project_dipiri_complete.png"
import projectQuicky from "../assets/img/projects/project_quicky.png"
import projectFlash from "../assets/img/projects/project_flash.png"
import projectSolorush1 from "../assets/img/projects/project_solorush1.png"
import projectMdb from "../assets/img/projects/project_mdb_complete.png"
import projectPortefolio from "../assets/img/projects/project_portefolio.jpg"



export const portefolio = [
    {
        section:"Professionnel",
        toParam:"pro",
        desc:"Voici la section professionnelle qui est pour l'instant vide",
        projects: [
            {
                name:"Votre projet",
                 toParam:"yourproject",
                img:projectYou,
                alt:"We need you picture",
                link:"",
                technos:"HTML, CSS, JavaScript, TypeScript, ReactJS, ExpressJS, MySQL, NestJS",
                duration:"3 mois à partir de début décembre 2025",
                desc:["Je n'ai pas encore de projet professionnel dans mon portefolio, mais je suis en recherche active de stage.", "Contactez-moi et travaillons ensemble ! (enfin, surtout moi pour vous...)"]
            }
        ]
    },
    {
        section:"En groupe",
         toParam:"groupe",
         desc:"Voici tous les projets que j'ai réalisé en groupe à la Wild Code School",
        projects: [
            {
                name:"Memory",
                toParam:"memory",
                img:projectMemory,
                alt:"image du site Memory",
                link:"https://laurentkatsessandalman.github.io/memoryCard/",
                technos:"HTML Vanilla, CSS, JavaScript",
                duration:"3 mois à partir de début décembre 2025",
                desc:["Mon deuxième projet, cette fois-ci en duo (sur approximativement 7 journées de travail)",
"Je me suis occupé du JavaScript (initialisation, gestion de la partie, sauvegarde et affichage des records...) ainsi que des animations de cartes (apparition, retournement, disparition).",
"Il s'agit toujours d'un projet AI-free !",
"Note: confetti.js est un module npm, nous ne l'avons pas codé"
                ]
            },
            {
                name:"DiPiRi",
                toParam:"dipiri",
                img:projectDipiri,
                alt:"image du site DiPiRi",
                link:"",
                technos:"HTML, CSS, JavaScript, TypeScript, ReactJS, ExpressJS, MySQL, NestJS",
                duration:"3 mois à partir de début décembre 2025",
                desc:["Je n'ai pas encore de projet professionnel dans mon portefolio, mais je suis en recherche active de stage. Contactez-moi et travaillons ensemble ! (enfin, surtout moi pour vous...)"]
            },
            {
                name:"Quicky",
                toParam:"quicky",
                img:projectQuicky,
                alt:"image du site Quicky",
                link:"",
                technos:"HTML, CSS, JavaScript, TypeScript, ReactJS, ExpressJS, MySQL, NestJS",
                duration:"3 mois à partir de début décembre 2025",
                desc:["Je n'ai pas encore de projet professionnel dans mon portefolio, mais je suis en recherche active de stage. Contactez-moi et travaillons ensemble ! (enfin, surtout moi pour vous...)"]
            },
            {
                name:"MémoFlash",
                toParam:"flash",
                img:projectFlash,
                alt:"image du site MémoFlash",
                link:"",
                technos:"HTML, CSS, JavaScript, TypeScript, ReactJS, ExpressJS, MySQL, NestJS",
                duration:"3 mois à partir de début décembre 2025",
                desc:["Je n'ai pas encore de projet professionnel dans mon portefolio, mais je suis en recherche active de stage. Contactez-moi et travaillons ensemble ! (enfin, surtout moi pour vous...)"]
            },
        ]
    },
    {
        section:"En solo",
         toParam:"solo",
         desc:"Voici quelques projets que j'ai réalisé en solo, que ce soit en formation ou sur mon temps libre",
        projects: [
            {
                name:"SoloRush1 : Sandalman",
                toParam:"solorush1",
                img:projectSolorush1,
                alt:"image du site Qui est Sandalman ?",
                link:"",
                technos:"HTML, CSS, JavaScript, TypeScript, ReactJS, ExpressJS, MySQL, NestJS",
                duration:"3 mois à partir de début décembre 2025",
                desc:["Je n'ai pas encore de projet professionnel dans mon portefolio, mais je suis en recherche active de stage. Contactez-moi et travaillons ensemble ! (enfin, surtout moi pour vous...)"]
            },
            {
                name:"SoloRush2 : RETRO MdB",
                toParam:"solorush2",
                img:projectMdb,
                alt:"image du site RETRO MdB",
                link:"",
                technos:"HTML, CSS, JavaScript, TypeScript, ReactJS, ExpressJS, MySQL, NestJS",
                duration:"3 mois à partir de début décembre 2025",
                desc:["Je n'ai pas encore de projet professionnel dans mon portefolio, mais je suis en recherche active de stage. Contactez-moi et travaillons ensemble ! (enfin, surtout moi pour vous...)"]
            },
            {
                name:"Portefolio",
                toParam:"portefolio",
                img:projectPortefolio,
                alt:"image de la home du site où vous vous trouvez",
                link:"",
                technos:"HTML, CSS, JavaScript, TypeScript, ReactJS, ExpressJS, MySQL, NestJS",
                duration:"3 mois à partir de début décembre 2025",
                desc:["Je n'ai pas encore de projet professionnel dans mon portefolio, mais je suis en recherche active de stage. Contactez-moi et travaillons ensemble ! (enfin, surtout moi pour vous...)"]
            },
        ]
    },
]