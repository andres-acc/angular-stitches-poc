import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  themeColor = '';
  themeSelector = new FormControl('primary');

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.getTheme().subscribe((theme) => this.themeColor = `bg-${theme}`);
  }
}
