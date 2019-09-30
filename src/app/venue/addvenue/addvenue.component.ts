import { Component, OnInit } from '@angular/core';
import { VenueService } from '../venue.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addvenue',
  templateUrl: './addvenue.component.html',
  styleUrls: ['./addvenue.component.scss']
})
export class AddvenueComponent implements OnInit {



  // multiselect
  imageData;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  // venue form data
  venueData = {
    name: '',
    location: '',
    age: '',
    averageCostOfEntry: '',
    averageCostOfTables: '',
    capacity: '',
    about: '',
    image: '',
    video: '',
    lat: 31.413254,
    lng: 73.091840,
    genre: this.selectedItems
  };
  localVenueData: any;
  private genreSub: Subscription;


  constructor(private venueService: VenueService,
    private router: Router, ) {
  }



  onchoose(event) {
    this.venueData.lat = event.coords.lat;
    this.venueData.lng = event.coords.lng;
    console.log(this.venueData.lng, this.venueData.lat)
  }
  markerDragEnd(event) {
    this.venueData.lat = event.coords.lat;
    this.venueData.lng = event.coords.lng;
    console.log(this.venueData.lng, this.venueData.lat)
  }

  onCreateVenue() {
    this.venueService.upLoadImage(this.imageData).subscribe((imageName: any) => {
      console.log(imageName);
      this.venueData.image = imageName;
      this.venueService.createVenue(this.venueData).subscribe((data: any) => {
        this.localVenueData = data;
        this.router.navigate(['/venue']);
      })

      console.log(this.venueData)
    });

  }

  onItemSelect(item: any) {

    this.venueData.genre.push(item);
    console.log(this.venueData.genre);
  }

  onItemDeSelect(deselectItem: any) {

    const index = this.venueData.genre.indexOf(deselectItem.name);
    this.venueData.genre.splice(index, 1);
    console.log(deselectItem.name);
  }

  onSelectAll(items: any) {
    items.forEach(element => {
      this.venueData.genre.push(element);
    });
    console.log(items);
  }

  onLoadImage(event) {
    this.imageData = <File>event.target.files[0];
    console.log(this.imageData);
  }

  ngOnInit() {

    this.venueService.getAllGenre();
    this.genreSub = this.venueService.getAllUpdatedGenre().subscribe((genres: any) => {
      this.dropdownList = genres;
    })


    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      enableCheckAll: false,
      maxHeight: 300
    };

  }

}
