import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  selectedService: string | null = null;

  // @ViewChild('webSection') webSection!: ElementRef;
  // @ViewChild('uiuxSection') uiuxSection!: ElementRef;
  // @ViewChild('apiSection') apiSection!: ElementRef;

  // toggleServiceDescription(service: string) {
  //   if (this.selectedService === service) {
  //     this.selectedService = null; // Collapse the section
  //   } else {
  //     this.selectedService = service; // Expand the section
  //     this.scrollToSection(service); // Scroll to the corresponding section
  //   }
  // }

  // scrollToSection(service: string) {
  //   let section: ElementRef;

  //   switch (service) {
  //     case 'web':
  //       section = this.webSection;
  //       break;
  //     case 'uiux':
  //       section = this.uiuxSection;
  //       break;
  //     case 'api':
  //       section = this.apiSection;
  //       break;
  //     default:
  //       return;
  //   }

  //   section.nativeElement.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start',
  //   });
  // }

  toggleServiceDescription(service: string) {
    this.selectedService = this.selectedService === service ? null : service;
  }
}
