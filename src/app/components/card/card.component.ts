import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';
import { ghostStyles, grassStyles, primaryStyles, skyStyles } from 'src/app/theme/theme';
import { classNames } from 'src/app/utility/class-names';
import { css } from 'src/styles';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  constructor(private themeService: ThemeService) { }

  theme = classNames({
    card$: this.themeService.getTheme().pipe(
      map((option) => {console.log(option); return $card({ color: option })})
    ),
  });
}

const $card: any = css({
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
  }
});
