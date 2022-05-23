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
        }

    ]
    getAllSkill(): Skill[] {
        return this.skill;
    }
}