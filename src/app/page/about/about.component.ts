import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';
import { SkillService } from 'src/app/services/skills.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  skill!: Skill[];

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.skill = this.skillService.getAllSkill();
  }

}
