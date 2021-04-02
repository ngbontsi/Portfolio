import { Component, OnInit } from '@angular/core';
import { scrollAnimation } from '../shared/animations';
import { ScrollAnimationComponent } from '../shared/scroll-animation.component';

// @ts-ignore
// @ts-ignore
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  animations: [
    scrollAnimation
  ]
})
export class SkillComponent extends ScrollAnimationComponent implements OnInit {


  title: string = "TECHNICAL SKILLS";
  paragraph: string = "I've worked with a wide variety of programming languages. For web applications I use Angular and Node."+
    "Whenever I need the most performance possible I obviously go with Java and finally when I am building prototypes or working on my hobby projects I fall back on Android ";

 skills: {styleClass: string, name: string}[] = [
    {styleClass: ' ' , name: 'Angular '},
    {styleClass: ' ' , name: 'Node'},
    {styleClass: ' ' , name: 'Java'} ,
    {styleClass: ' ' , name: 'MySQL'} ,
    {styleClass: ' ' , name: 'Android'} ];
frameworks: {styleClass: string, name: string}[] = [{styleClass: ' ' , name: 'Jhipster '},
    {styleClass: ' ' , name: 'SpringBoot'},
    {styleClass: ' ' , name: 'JPA'} ,
    {styleClass: ' ' , name: 'Hibernate '} ,
    {styleClass: ' ' , name: 'Android'} ];
 softwares: {styleClass: string, name: string}[] = [{styleClass: ' ' , name: 'Windows & Linux '},
    {styleClass: ' ' , name: 'Git'},
    {styleClass: ' ' , name: 'AWS' },
    {styleClass: ' ' , name: 'MySQL'} ,
    {styleClass: ' ' , name: 'Android'} ];
managementTools: {styleClass: string, name: string}[] = [{styleClass: ' ' , name: 'Maven'},
    {styleClass: ' ' , name: 'Ant'},
    {styleClass: ' ' , name: 'gradle'} ,
    {styleClass: ' ' , name: 'SVN'}];
  ngOnInit(): void {
      throw new Error('Method not implemented.');
  }
}
