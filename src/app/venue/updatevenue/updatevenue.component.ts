import { Component, OnInit } from '@angular/core';
import { VenueService } from '../venue.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-updatevenue',
  templateUrl: './updatevenue.component.html',
  styleUrls: ['./updatevenue.component.scss']
})
export class UpdatevenueComponent implements OnInit {

  constructor(private venueService: VenueService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  // multiselect
  imageData;
  dropdownList = [];
  selectedItems = [];
  selectedItemsToBeEdited = [];
  dropdownSettings = {};
  arr = [];

  // venue form data
  venueId: any;

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
    latitude: 31.413254,
    longitude: 73.091840,
    genre: this.selectedItems,
    selectedGenre: this.selectedItemsToBeEdited
  };

  localVenueData: any;
  private genreSub: Subscription;
  private venueSub: Subscription;
  private selectedGenreSub: Subscription;

  onchoose(event) {
    this.venueData.latitude = event.coords.lat;
    this.venueData.longitude = event.coords.lng;

  }
  markerDragEnd(event) {
    this.venueData.latitude = event.coords.lat;
    this.venueData.longitude = event.coords.lng;
  }

  onLoadImage(event) {
    this.imageData = <File>event.target.files[0];
    console.log(this.imageData);
  }

  onUpdateVenue() {

    this.venueData.selectedGenre = this.selectedItems;

    if (this.imageData === undefined) {
      this.venueService.Update(this.venueId, this.venueData).subscribe((data: any) => {
        this.localVenueData = data;
        this.router.navigate(['/venue']);
      })
    } else {
      this.venueService.upLoadImage(this.imageData).subscribe((data: any) => {
        this.venueData.image = data;
        this.venueService.Update(this.venueId, this.venueData).subscribe((data: any) => {
          this.localVenueData = data;
          this.router.navigate(['/venue']);
        })
      })
    }
  }


  onItemSelect(item: any) {
    let arr = [];
    arr.push(item);
    this.arr.push(arr[0]);
    this.venueData.genre = this.arr;

    console.log(this.venueData.genre);
  }

  onItemDeSelect(deselectItem: any) {

    // const index = this.venueData.genre.indexOf(deselectItem.name);
    // this.venueData.genre.splice(index, 1);


    const indx = this.selectedItemsToBeEdited.findIndex(i => i.name === deselectItem.name);
    if (indx !== -1) {
      this.selectedItemsToBeEdited.splice(indx, 1);
      console.log(this.selectedItemsToBeEdited);
      console.log("deleted item is " + deselectItem.name);
      console.log("index of selectedItemsToBeEdited is  " + indx);
    }


    const index = this.venueData.genre.findIndex(i => i.name === deselectItem.name);
    if (index !== -1) {
      this.venueData.genre.splice(index, 1);
      console.log(this.venueData.genre);
      console.log("deleted item is " + deselectItem.name);
      console.log("index of venueData.genre is  " + index);
    }
  }


  onSelectAll(items: any) {
    items.forEach(element => {
      this.venueData.genre.push(element);
    });
    console.log(items);
  }

  ngOnInit() {
    this.venueId = this.activatedRoute.snapshot.params.venueId;


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


    // this.venueService.getByid(this.venueId).subscribe((venue: any) => {
    //   this.venueData = venue;
    // })

    this.venueService.getByid(this.venueId);
    this.venueSub = this.venueService.getUpdatedVenue().subscribe((venue: any) => {
      this.venueData = venue;
      this.venueData.latitude = parseFloat( venue.latitude);
      this.venueData.longitude = parseFloat( venue.longitude);
      console.log(venue);
    });

    this.venueService.getSelectedGenreByVenue(this.venueId);
    this.selectedGenreSub = this.venueService.getUpdatedSelectedGenreByVenue().subscribe((updatedGenre: any) => {
      this.selectedItems = updatedGenre.genres;
      this.selectedItemsToBeEdited = updatedGenre.genres;
      console.log(this.selectedItems);
    });
    // this.venueData.genre = this.selectedItems;
    // this.venueData.selectedGenre = this.selectedItemsToBeEdited;

  }

}
