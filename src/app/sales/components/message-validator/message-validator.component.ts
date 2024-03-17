import { Component, Input } from '@angular/core';
import { IError } from '../../interfaces/i-error';

@Component({
  selector: 'app-message-validator',
  templateUrl: './message-validator.component.html',
  styleUrls: ['./message-validator.component.css']
})
export class MessageValidatorComponent {
  @Input() error: IError;

  constructor() {
    this.error = {detail: ""}
  }
}
