import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    ProjectsComponent,
    ContactsComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
