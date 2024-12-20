import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {
  // Initial list of locations
  locations: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'San Francisco'];

  // Filtered list based on search query
  filteredLocations: string[] = [...this.locations];

  // Search query
  searchQuery: string = '';

  // Dropdown visibility
  showDropdown: boolean = false;

  // Handles input focus to show the dropdown
  onInputFocus() {
    this.showDropdown = true;
    this.filterLocations(); // Ensures the dropdown is populated when input is focused
    console.log("console log. input field is clicked")
  }

  // Filter locations based on search query
  filterLocations() {
    this.filteredLocations = this.locations.filter(location =>
      location.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Select a location
  selectLocation(location: string) {
    this.searchQuery = location;
    this.showDropdown = false;
  }

  // Close dropdown when clicking outside
  closeDropdown(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      this.showDropdown = false;
    }
  }

  constructor() {
    // Close dropdown on click outside
    document.addEventListener('click', this.closeDropdown.bind(this));
  }
}
