import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';
import { ProjectsService } from '../_services/projects.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  python: Boolean = false;
  csharp: Boolean = false;
  angular: Boolean = false;
  java: Boolean = false;
  nodejs: Boolean = false;
  elixir: Boolean = false;
  javascript: Boolean = false;
  react: Boolean = false;

  filtering: Boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Supriya Bandal - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }

    if (this.python) {
      filterTags.push(Tag.PYTHON);
    }
    if (this.csharp) {
      filterTags.push(Tag.CSHARP);
    }
    if (this.java) {
      filterTags.push(Tag.JAVA);
    }
    if (this.nodejs) {
      filterTags.push(Tag.NODEJS);
    }
    if (this.elixir) {
      filterTags.push(Tag.ELIXIR);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.react) {
      filterTags.push(Tag.REACT);
    }
    if (this.python || this.typescript || this.csharp || this.angular || this.java || this.nodejs || this.elixir || this.javascript || this.react) {
      this.filtering = true;
    }
    else {
      this.filtering = false;
    }
    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters() {
    this.typescript = false;
    this.python = false;
    this.csharp = false;
    this.angular = false;
    this.java = false;
    this.nodejs = false;
    this.elixir = false;
    this.javascript = false;
    this.react = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();

  }
}


