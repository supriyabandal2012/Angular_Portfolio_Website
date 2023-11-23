import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
isEducationOpen: boolean= false; 
isWorkExperinceOpen: boolean= false; 
isSkillOpen: boolean= false; 
isProjectOpen: boolean= false; 

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Supriya Bandal - Resume');
  }
DownloadFile(){
  const link = this.renderer.createElement('a');
  link.setAttribute('target','_blank');
  link.setAttribute('href', '../../assets/resume.pdf');
  link.setAttribute('download', 'resume.pdf');
  link.click();
  link.remove();

}
}
