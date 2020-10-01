import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ILaunchProgram, defaultLaunchProgram } from '../launch-program/launch-program.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  
  @Input('data') LaunchPrograms : ILaunchProgram[]

  constructor() { }

  ngOnInit(): void {
    this.LaunchPrograms = defaultLaunchProgram
  }

}

