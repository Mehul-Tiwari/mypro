import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignment-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './assignment-modal.component.html',
  styleUrls: ['./assignment-modal.component.scss']
})
export class AssignmentModalComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  isSuccess = false;
  successMessage = '';
  submittedData: any = null;

  formData = {
    name: '',
    rollNo: '',
    teacherIdOrName: '',
    assignmentNo: '',
    subject: '',
    submitDate: '',
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
      this.formData.teacherIdOrName &&
      this.formData.assignmentNo &&
      this.formData.subject &&
      this.formData.submitDate &&
      this.formData.file
    ) {
      this.submittedData = { ...this.formData };
      this.isSuccess = true;
      this.successMessage = `Assignment "${this.formData.assignmentNo}" submitted successfully!`;
      console.log('Assignment submitted:', this.formData);
      
      // Close modal after 2.5 seconds
      setTimeout(() => {
        this.resetForm();
        this.isSuccess = false;
        this.submittedData = null;
        this.close.emit();
      }, 2500);
    } else {
      alert('Please fill all fields and select a file');
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      rollNo: '',
      teacherIdOrName: '',
      assignmentNo: '',
      subject: '',
      submitDate: '',
      file: null
    };
  }

  closeModal() {
    this.close.emit();
  }
}
