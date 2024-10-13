import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  selectedService: string | null = null;

  toggleServiceDescription(service: string) {
    this.selectedService = this.selectedService === service ? null : service;
  }
}
