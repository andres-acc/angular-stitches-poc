import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs';
import { css } from '../../../styles';
import { ThemeService } from '../../services/theme.service';
import { classNames } from '../../utility/class-names';

// const $theme = css({
//   width: "$10"
// });

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  themeSelector = new FormControl('primary');

  constructor(private themeService: ThemeService) {}

  theme = classNames({
    nav$: this.themeService.getTheme().pipe(
      map((option) => {
        console.log(option);
        return $navbar({ color: option })
      })
    )
  });

  changeTheme() {
    console.log(this.themeSelector);
    console.log(this.themeSelector.value);
    this.themeService.setTheme(this.themeSelector.value || 'primary');
  }
}

const $navbar: any = css({
  variants: {
    color: {
      primary: {
        backgroundColor: "$primary"
      },
      text: {
        backgroundColor: "$text",
      }
    }
  },
  height: "$4",
  padding: "$10"
});
