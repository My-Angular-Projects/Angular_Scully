import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'scully-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  public readonly currentDate = new Date();
}
