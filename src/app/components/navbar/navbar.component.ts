import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs';
import { 
  ghostStyles, 
  grassStyles, 
  primaryStyles, 
  skyStyles 
} from 'src/app/theme/theme';
import { css } from '../../../styles';
import { ThemeService } from '../../services/theme.service';
import { classNames } from '../../utility/class-names';

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
      map((option) => $navbar({ color: option }))
    ),
  });

  changeTheme() {
    this.themeService.setTheme(this.themeSelector.value || 'primary');
  }
}

const $navbar: any = css({
  variants: {
    color: {
      primary: {
        ...primaryStyles
      },
      sky: {
        ...skyStyles
      },
      ghost: {
        ...ghostStyles
      },
      grass: {
        ...grassStyles
      }
    }
  },
  height: "$4",
  padding: "$10"
});
