import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'ecom-navbar',
  imports: [CommonModule, RouterLink, FaIconComponent, FooterComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
