import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-wacap',
  templateUrl: './wacap.component.html',
  styleUrls: ['./wacap.component.css']
})
export class WacapComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            Name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['',Validators.required,],
            Street_address:['', Validators.required],
            city:['', Validators.required],
            state:['', Validators.required],
            zip:['', Validators.required],
            address_length:[''],
            primary_home:[''],
            about_wcap:[''],
            choose_wcap:[''],            
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }

}
