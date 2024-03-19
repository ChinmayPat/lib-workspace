import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import Keyboard from 'simple-keyboard';
import { layoutType } from './models';

@Component({
  selector: 'lib-keyboard',
  standalone: true,
  imports: [],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css',
  encapsulation: ViewEncapsulation.None
})

export class KeyboardComponent implements AfterViewInit, OnChanges {
  keyboard!: Keyboard;
  @Input({ required: true }) layout!: layoutType;
  @Output() keyPressEvent = new EventEmitter<string>();

  ngAfterViewInit(): void {
    this.keyboard = new Keyboard({
      onKeyPress: (input: string) => this.sendKeyPress(input),
      layout: {
        default: [
          '{tab} q w e r t y u i o p [ ] \\',
          "{lock} a s d f g h j k l ; ' {enter}",
          '{shift} z x c v b n m , . / {shift}',
          '.com @ {space}',
        ],
        numpad: ['7 8 9', '4 5 6', '1 2 3', '0 {bksp}'],
      },
    });
    this.setLayout(this.layout);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.keyboard) {
      this.setLayout(changes['layout'].currentValue);
    }
  }

  private sendKeyPress(input: string) {
    console.log(input)
    this.keyPressEvent.emit(input);
  }

  private setLayout(layoutType: string) {
    this.keyboard.setOptions({
      layoutName: layoutType,
    });
  }
}
