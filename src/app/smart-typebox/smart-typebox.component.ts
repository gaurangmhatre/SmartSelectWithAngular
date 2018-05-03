import { Component, OnInit ,ViewChild} from '@angular/core';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

const countries = ['Afghanistan','Albania','Algeria','Andorra','Angola',
'Antigua and Barbuda','Argentina','Australia','Austria','Azerbaijan'
];

@Component({
  selector: 'app-smart-typebox',
  templateUrl: './smart-typebox.component.html',
  styleUrls: ['./smart-typebox.component.css']
})
export class SmartTypeboxComponent {
  selectedCountry: any;
  selectedCountryZone:any;
  countriesZone:any =[ this.selectedCountry+"-1",this.selectedCountry+"-2", this.selectedCountry+"-3"]; 

  citiesForTypeahead: any;

  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200).distinctUntilChanged()
      .merge(this.focus$)
      .map(term => (term === '' ? countries : countries.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10));


  focusZone$ = new Subject<string>();
  clickZone$ = new Subject<string>();
  searchZone = (text$: Observable<string>) =>
  text$
    .debounceTime(200).distinctUntilChanged()
    .merge(this.focusZone$)
    .map(term => (term === '' ? this.countriesZone : this.countriesZone.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10));

  public countriesZones(event){
    console.log("inside countriesZones : "+event.value)
    this.countriesZone =[ this.selectedCountry+"-1",this.selectedCountry+"-2", this.selectedCountry+"-3"]; 
    console.log( this.countriesZone);
  }


  


}
