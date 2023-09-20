import { Component, OnInit } from '@angular/core';
import { Stay } from './model/stay.model';
import { StayService } from './service/stay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'windbnb';

  selectedCity: string = 'Helsinki';
  isModalOpen: boolean = false;
  stays: Stay[] = [];
  showCityList: boolean = false;
  showGuest: boolean = false;

  adults: number = 0; // Número predeterminado de adultos
  children: number = 0; // Número predeterminado de niños
  selectedMaxGuests: number = this.adults + this.children; // Suma inicial de adultos y niños

  constructor(private stayService: StayService) {}

  ngOnInit(): void {
    this.loadStaysByCity(this.selectedCity);
  }

  filterByCity(city: string) {
    this.selectedCity = city; // Actualiza la ciudad seleccionada
    this.loadStaysByCity(city); // Carga los alojamientos según la ciudad
  }

  // Método para cargar los alojamientos según la ciudad
  private loadStaysByCity(city: string) {
    this.stayService.getStays().subscribe((data) => {
      this.stays = data.record.filter((stay) => stay.city === city);
    });
  }

  toggleCityList() {
    this.showCityList = true; // Activa el toggle de ciudades
    this.showGuest = false; // Desactiva el toggle de huéspedes
  }

  toggleGuests() {
    this.showGuest = true; // Activa el toggle de huéspedes
    this.showCityList = false; // Desactiva el toggle de ciudades
  }


  showCustomModal() {
    this.isModalOpen = true;
  }

  searchAccommodations() {
    this.isModalOpen = false;
  }

  filterAndLoadStays() {
    this.stayService.getStays().subscribe((data) => {
      this.stays = data.record.filter(
        (stay) =>
          stay.city === this.selectedCity &&
          stay.maxGuests >= this.selectedMaxGuests
      );
    });
  }

  filterByMaxGuests() {
    this.selectedMaxGuests = this.adults + this.children; // Actualiza la cantidad de huéspedes
    this.filterAndLoadStays(); // Aplica el filtro y carga los alojamientos
  }

  // Incrementa el contador de adultos
  incrementAdults() {
    this.adults++;
    this.filterByMaxGuests();
  }

  // Decrementa el contador de adultos
  decrementAdults() {
    if (this.adults > 0) {
      this.adults--;
      this.filterByMaxGuests();
    }
  }

  // Incrementa el contador de niños
  incrementChildren() {
    this.children++;
    this.filterByMaxGuests();
  }

  // Decrementa el contador de niños
  decrementChildren() {
    if (this.children > 0) {
      this.children--;
      this.filterByMaxGuests();
    }
  }
}
