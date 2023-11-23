import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-tour',
  templateUrl: './virtual-tour.component.html',
  styleUrls: ['./virtual-tour.component.css']
})
export class VirtualTourComponent implements OnInit {
  ngOnInit(): void {
    (window as any).pannellum.viewer('panorama', {
      "type": "equirectangular",
      "panorama": "https://cdn.vr-360-tour.com/files/email/60F1F846-D8FC-11E7-A6B7-AA2236531569.JPG",
      "autoLoad": true,
    });
}
  }
