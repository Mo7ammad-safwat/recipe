import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-headar',
  templateUrl: './headar.component.html',
  styleUrl: './headar.component.scss',
})
export class HeadarComponent {
  @Output() slectFeature = new EventEmitter<string>();
  onslect(feature: string) {
    this.slectFeature.emit(feature);
    console.log(feature)
  }
}
