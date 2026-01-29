import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-leave-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './leave-modal.component.html',
  styleUrls: ['./leave-modal.component.scss']
})
export class LeaveModalComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  isSuccess = false;
  successMessage = '';
  submittedData: any = null;

  formData = {
    name: '',
    rollNo: '',
    class: '',
    parentTeacherNameId: '',
    email: '',
    startingDate: '',
    endingDate: '',
    leaveReason: '',
    file: null as File | null
  };

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.formData.file = file;
    }
  }

  submit() {
    if (
      this.formData.name &&
      this.formData.rollNo &&
      this.formData.class &&
      this.formData.parentTeacherNameId &&
      this.formData.email &&
      this.formData.startingDate &&
      this.formData.endingDate &&
      this.formData.leaveReason &&
      this.formData.file
    ) {
      this.submittedData = { ...this.formData };
      this.isSuccess = true;
      this.successMessage = 'Leave application submitted successfully!';
      console.log('Leave submitted:', this.formData);

      // Close modal after 2.5 seconds
      setTimeout(() => {
        this.resetForm();
        this.isSuccess = false;
        this.submittedData = null;
        this.close.emit();
      }, 2500);
    } else {
      alert('Please fill all fields');
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      rollNo: '',
      class: '',
      parentTeacherNameId: '',
      email: '',
      startingDate: '',
      endingDate: '',
      leaveReason: '',
      file: null
    };
  }

  closeModal() {
    this.close.emit();
  }
}
