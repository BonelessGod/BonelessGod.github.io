import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/projects.service';


@Component({
  selector: 'app-project-obj',
  templateUrl: './project-obj.component.html',
  styleUrls: ['./project-obj.component.scss']
})
export class ProjectObjComponent implements OnInit {
  @Input() project!: Project;

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }

}
