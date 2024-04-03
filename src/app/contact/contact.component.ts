import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'scully-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {}
