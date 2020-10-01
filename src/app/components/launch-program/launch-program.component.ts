import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-launch-program',
  templateUrl: './launch-program.component.html',
  styleUrls: ['./launch-program.component.scss']
})
export class LaunchProgramComponent implements OnInit {

  public results
  constructor( private appService : AppService) { }

  ngOnInit(): void {
  }

  applyFilter(params){
    this.appService.getData(params)
      .subscribe((response : ILaunchProgram[])=> this.results = response && response.length > 0 ? response : defaultLaunchProgram)
    console.log(params)

  }





}



export interface ILaunchProgram{
  launch_landing : String;
  launch_success : String,
  launch_year : String,
  mission_id : String[],
  mission_name : String,
  links : {mission_patch_small : string}
}

export const defaultLaunchProgram : ILaunchProgram[] = [{
  launch_landing : "No Data",
  launch_success : "No Data",
  launch_year : "No Data",
  mission_id : ["No Data"],
  mission_name : "No Data",
  links : {mission_patch_small : ""}

}]