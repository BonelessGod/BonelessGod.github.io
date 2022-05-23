import { Injectable } from "@angular/core";
import { Project } from "../models/project.model";

@Injectable({
    providedIn: 'root'
})

export class ProjectService {
    project: Project[] = [
        {
            id: 1,
            title: 'Union Skateboard',
            description: `Site créé pour l'association Union Skateboard basée sur Dijon`,
            imageUrl: 'assets/thumbnail/usb.png',
            link: `https://bonelessgod.github.io/unionskateboard`
        },
        {
            id: 2,
            title: 'Sydionys',
            description: 'Site réalisée pour le musicien/cosplayer Sydionys.',
            imageUrl: 'assets/thumbnail/sydionys.png',
            link: 'https://bonelessgod.github.io/sydionys'
        },
        {
            id: 3,
            title: 'Portfolio #1',
            description: 'Site réalisée pour moi même en utilisant HTML, SCSS et JScript en natif',
            imageUrl: 'assets/thumbnail/sydionys.png',
            link: 'https://bonelessgod.github.io/portfolio'
        }
    ]
    getAllProject(): Project[] {
        return this.project;
    }
}