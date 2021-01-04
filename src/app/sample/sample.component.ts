import { Component, OnInit, SystemJsNgModuleLoader ,Output, Input, EventEmitter } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { headersToString } from 'selenium-webdriver/http';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  public name1 = "Sohail" ;
  public flag = false;
  public siteurl = window.location.href;
  public message1 = "";
  public message2 = "";
  public message3 = "Welcome to CodeEvolution";
  public successClass = "text-success";
  temp1: string;
  constructor() { }
  public myId = "1344411";
  public hasError = false ; 
  public isSpecial = true;
  public highlightColor = "Violet";
  public eventName = "";
  public eventType = "";
  public name2 = "";
  public displayName = true;
  public displayName2 = false;
  public color1 = "rwed";
  public colors = ["red","blue","green","yellow"];
  public date = new Date();

  // @Input public parentData;
  @Input('parentData') public pName;
  //we need to inform the sample component heyy this is not a normal property 
  //Input decorator is used to get a property from app component

  @Output() public childEvent = new EventEmitter();
  // the way child component sends data to the parent component is by using events

  public fireEvent()
  {
  //  console.log(event);
    this.childEvent.emit('Ji Boliye');
  }


  public titleStyles = {
    color : "blue",
    fontStyle : "italic"
  }
//  Remember we cant use - hyphen here 
//  we have to use camelCase here

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger" : this.hasError,
    "text-special": this.isSpecial
  }

  public isDisable(){
    return this.flag;
  }
  public greet(){
    this.message1="Welcome ABCD ";
  }
  public onClick(event){
    console.log(event); 
    this.eventName=event.type;
    this.eventType = event;
  }
  public logMessage(inputValue){
    console.log(inputValue);
  }
  public onSubmit(){
    console.log(this.name2);
    this.temp1 = "Entered Value : ";
  }
  ngOnInit() {
  }

}
