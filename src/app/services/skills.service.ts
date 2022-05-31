import { Injectable } from "@angular/core";
import { Skill } from "../models/skill.model";

@Injectable({
    providedIn: 'root'
})

export class SkillService {
    skill: Skill[] = [
        {
            id: 1,
            language: "HTML",
            level: "70%",
            logo: "assets/logo/HTML.svg"
        },
        {
            id: 2,
            language: "CSS",
            level: "80%",
            logo: "assets/logo/CSS.svg"
        },
        {
            id: 3,
            language: "SASS",
            level: "50%",
            logo: "assets/logo/SASS.svg"
        },
        {
            id: 4,
            language: 'JScript',
            level: '50%',
            logo: 'assets/logo/JSCRIPT.svg'
        },
        {
            id: 5,
            language: 'JQuery',
            level: '20%',
            logo: 'assets/logo/JQUERY.svg'
        },
        {
            id: 6,
            language: 'Angular',
            level: '40%',
            logo: 'assets/logo/ANGULAR.svg'
        },
        // PHP
        {
            id: 7,
            language: 'PHP',
            level: '20%',
            logo: 'assets/logo/PHP.svg'
        },
        // MySQL
        {
            id: 8,
            language: 'MySQL',
            level: '35%',
            logo: 'assets/logo/MYSQL.svg'
        }


    ]
    getAllSkill(): Skill[] {
        return this.skill;
    }
}