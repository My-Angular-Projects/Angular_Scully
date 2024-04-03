import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'scully-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  //
}
