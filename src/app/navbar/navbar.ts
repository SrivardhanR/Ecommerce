import { Component, HostListener } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { NavContent } from './nav-content/nav-content';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  imports: [MatButtonModule,MatIconModule , MatMenuModule , NavContent , CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  currentSection:any;
  isNavbarContentOpen:any;

  // constructor(){
  //   this.isNavbarContentOpen = false;
  //   this.currentSection = "";
  // }



  openNavbarContent(section:any){
    this.isNavbarContentOpen = true;
    this.currentSection = section;
  }

  closeNavbarContent(){
    this.isNavbarContentOpen = false;
  }

  navigateTo(path:any){

  }

  @HostListener('document:click',[`$event`])
  onDocumentClick(event:MouseEvent){
    const modalContainer = document.querySelector(".modal-container");
    const openButtons = document.querySelectorAll(".open-button");

    let clickInsideButton = false;

    openButtons.forEach((button:Element) => {
      if(button.contains(event.target as Node)){
        clickInsideButton = true;
      }
    })

    if(modalContainer && !clickInsideButton &&this.isNavbarContentOpen){
      this.closeNavbarContent();
    }
  }

}
