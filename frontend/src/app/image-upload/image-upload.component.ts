import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { FileUploadService } from 'src/app/services/file-upload.service';


@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})

export class ImageUploadComponent implements OnInit {

  file: any = null;
  imageURL: string;
  uploadForm: FormGroup;

  constructor(private uploadService: FileUploadService, public fb: FormBuilder) {
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: ['']
    }),
    this.imageURL = '';
  }
  ngOnInit(): void {
  }

  onFilechange(event: any) {
    console.log(event.target.files[0])
    this.file = event.target.files[0]

    const avatarControl = this.uploadForm.get('avatar');
    if (avatarControl) {
      avatarControl.updateValueAndValidity();
    }
    
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(this.file)
  }

  upload() {
    if (this.file) {
      this.uploadService.uploadfile(this.file).subscribe(resp => {
        alert("Uploaded")
      })
    } else {
      alert("Please select a file first")
    }
  }

  submit() {
    console.log(this.uploadForm.value)
  }

}