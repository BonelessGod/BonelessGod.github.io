import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/skill.model';
import { SkillService } from 'src/app/services/skills.service';


@Component({
  selector: 'app-skill-obj',
  templateUrl: './skill-obj.component.html',
  styleUrls: ['./skill-obj.component.scss']
})
export class SkillObjComponent implements OnInit {
  @Input() skill!: Skill;

  constructor(private skillService: SkillService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollAnime);

    this.scrollAnime();
  }

  scrollAnime() {
    let reveal = document.querySelectorAll('.reveal');
    let i: number;

    for (i = 0; i < reveal.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveal[i].getBoundingClientRect().top;
      let elementVisible = 10;

       if (elementTop < windowHeight - elementVisible) {
          reveal[i].classList.add('active');
        }
    }
    
  }
}
