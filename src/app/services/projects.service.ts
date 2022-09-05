import { Injectable } from "@angular/core";
import { Project } from "../models/project.model";
import { SkillService } from "./skills.service";

@Injectable({
    providedIn: 'root'
})

export class ProjectService {
    project: Project[] = [
        {
            id: 1,
            title: 'Union Skateboard',
            description: `Site créé pour l'association Union Skateboard basée sur Dijon`,
            techno: [
                'assets/logo/ANGULAR.svg', 
                "assets/logo/SASS.svg", 
                ],
            imageUrl: 'assets/thumbnail/USB.jpg',
            link: `https://unionskateboard.fr/`,
            github: `https://github.com/BonelessGod/unionskateboard-new`,
        },
        {
            id: 2,
            title: 'Portfolio',
            description: `Mon portfolio, vous êtes dessus`,
            techno: [
                'assets/logo/ANGULAR.svg',
                "assets/logo/SASS.svg",
                ],
            imageUrl: 'assets/thumbnail/portfolio.jpg',
            link: `https://kilianduclos.com/`,
            github: `https://github.com/BonelessGod/BonelessGod.github.io`,
        },
        /*{
            id: 2,
            title: 'Sydionys',
            description: 'Site réalisée pour le musicien/cosplayer Sydionys.',
            imageUrl: 'assets/thumbnail/sydionys.png',
            techno: [
                "assets/logo/HTML.svg", 
                "assets/logo/CSS.svg", 
                'assets/logo/JSCRIPT.svg'
                    ],
            link: 'https://bonelessgod.github.io/sydionys'
        }*/
    ]
    getAllProject(): Project[] {
        return this.project;
    }
}