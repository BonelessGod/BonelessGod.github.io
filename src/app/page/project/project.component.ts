import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
  project!: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.project = this.projectService.getAllProject();
  }

}
