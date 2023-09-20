import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit {
  @Input() modalTitle: string = '';
  @Input() showModal: boolean = false;
  @Output() closeModalEvent = new EventEmitter();

  closeModal() {
    this.showModal = false;
    this.closeModalEvent.emit();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
