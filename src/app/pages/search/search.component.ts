import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { SearchInputComponent } from '../search-input/search-input.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [AsyncPipe, SearchInputComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  // location$: Observable<any[]> = new Observable<any[]>;
  location$: Observable<{ locationId: number; locationName: string }[]> = of([
    { locationId: 1, locationName: 'New York' },
    { locationId: 2, locationName: 'Los Angeles' },
    { locationId: 3, locationName: 'Chicago' },
    { locationId: 4, locationName: 'Houston' },
  ]);


  masterSrv = inject(MasterService)

  ngOnInit(): void {
    this.getLocation()
  }

  getLocation(): any {
    this.location$ = this.masterSrv.getLocations()
  }



  /////

  locations: { locationId: number; locationName: string }[] = [];

  constructor() {
    this.location$.subscribe((data) => {
      this.locations = data; // Store the locations for the datalist
    });}

}
