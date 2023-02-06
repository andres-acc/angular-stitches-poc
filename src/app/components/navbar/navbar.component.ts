import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  themeColor = 'bg-grass';
  themeSelector = new FormControl('grass');

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.getTheme().subscribe((theme) => this.themeColor = `bg-${theme}`);
  }

  changeTheme() {
    this.themeService.setTheme(this.themeSelector.value || 'grass')
  }
}
