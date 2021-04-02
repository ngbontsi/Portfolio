import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  title: string = "HI, It's me! ";
  paragraph: string = "I like building awesome software. I've built websites, mobile applications, "+
   "corporate software and even inhouse frameworks!";

  paragraph2: string = "When I am not building any of the above, I do system analysis, database design,"+
    "or learning new tolls in the IT industry! If you are interested, you can view some of my favorite projects in my portfolio down below.";

  closing: string = "Need something built or simply want to have chat? Reach out to me on social media or send me an email. ";

  ngOnInit() {}

}
