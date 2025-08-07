import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { navigation } from './nav-contentData';

@Component({
  selector: 'app-nav-content',
  imports: [CommonModule],
  templateUrl: './nav-content.html',
  styleUrl: './nav-content.scss'
})
export class NavContent {
 category:any;
 ngOnInit(){
    this.category = navigation;
  }
 @Input() selectedSection:any;
}
