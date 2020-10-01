
export enum FilterID{
    Landing_Year = "years",
    Successful_Launch = "successLaunch",
    Successful_Landing = "successLanding"
  }
  
  
  export interface FilterButtonType {
    value : string | boolean;
    checked : boolean
  }
  
  export interface Filter{
    [key : string] : FilterType
  }
  
  export interface FilterType{
    title : String, 
    data : FilterButtonType[], 
    order : Number,
    selection : any
  }