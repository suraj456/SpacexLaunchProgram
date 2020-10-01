import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FilterID, Filter, FilterButtonType } from 'src/app/interfaces/ifilter';
import { LocalStorageService } from 'src/app/services/local-storage.service';


export const _FILTER = 'filter'


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() params = new EventEmitter()
  filterSelection = { [FilterID.Landing_Year] : '2006', [FilterID.Successful_Landing] : true, [FilterID.Successful_Launch] : true  }

  filters : Filter = {
    [FilterID.Landing_Year] : { title : "Landing Year", data : [], order : 1, selection : '2006' },
    [FilterID.Successful_Launch] : {title : "Successful Launch", data : [], order : 2, selection : true}, 
    [FilterID.Successful_Landing] : { title : "Successful Landing", data : [], order : 3, selection : true}
  }
 
  constructor(private localStorageService : LocalStorageService) { }

  ngOnInit(): void {
    let prevFilter : Filter = JSON.parse(this.localStorageService.get(_FILTER))
    if(prevFilter){
      this.filters[FilterID.Landing_Year].data = prevFilter[FilterID.Landing_Year].data
      this.filters[FilterID.Successful_Landing].data = prevFilter[FilterID.Successful_Landing].data
      this.filters[FilterID.Successful_Launch].data = prevFilter[FilterID.Successful_Launch].data
      this.filterSelection[FilterID.Landing_Year] = prevFilter[FilterID.Landing_Year].selection 
      this.filterSelection[FilterID.Successful_Launch] = prevFilter[FilterID.Successful_Launch].selection
      this.filterSelection[FilterID.Successful_Landing] = prevFilter[FilterID.Successful_Landing].selection      
    }else{
      this.filters[FilterID.Landing_Year].data = this.createYearFilter();
      this.filters[FilterID.Successful_Landing].data = [
        { value : true , checked : true},
        { value : false , checked : false},
      ]
      this.filters[FilterID.Successful_Launch].data = [
        { value : true , checked : true},
        { value : false , checked : false},
      ]
    }
    this.params.emit(this.filterSelection)
  
  }


  createYearFilter(){
    let start = 2006;
    let today = new Date();
    let years = []
    while (start <= today.getFullYear() ){
      years.push({ value : start, checked : false})
      start++
    }
    years[0].checked = true
    return years
  }

  apply(selection : FilterButtonType, source : string, index : number){
    this.clearPrevSelection(source)
    this.setNewValue(selection, source, index)
    this.params.emit(this.filterSelection)
    this.localStorageService.set(_FILTER, JSON.stringify(this.filters))
  }

  clearPrevSelection(source : string){
    this.filters[source].data.find((element : FilterButtonType)=> element.checked = false )
  } 

  setNewValue(selection : FilterButtonType, source : string, index : number){
    this.filters[source].data[index].checked = true;
    this.filters[source].selection = selection.value
    this.filterSelection[source] = selection.value
  }



}
