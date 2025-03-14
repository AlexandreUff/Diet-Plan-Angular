import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-macro-content',
  standalone: true,
  imports: [],
  templateUrl: './macro-content.component.html',
  styleUrl: './macro-content.component.scss',
})
export class MacroContentComponent {
  @Input() macroEmojies: string = '';

  @Input() macroresultMin: string = '';

  @Input() macroresultMax: string = '';

  @Input() macroName: string = '';
}
