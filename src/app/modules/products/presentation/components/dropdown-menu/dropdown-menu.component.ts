import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css',
})
export class DropdownMenuComponent {
  @Output() updateEmitter: EventEmitter<void>;
  @Output() deleteEmitter: EventEmitter<void>;

  constructor() {
    this.updateEmitter = new EventEmitter<void>();
    this.deleteEmitter = new EventEmitter<void>();
  }

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  emitUpdateClick(): void {
    this.updateEmitter.emit();
  }

  emitDeleteClick(): void {
    this.toggleDropdown();
    this.deleteEmitter.emit();
  }
}
