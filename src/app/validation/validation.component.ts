import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.css'
})
export class ValidationComponent implements OnInit{

  validationForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void{
    this.validationForm=this.fb.group({
      code: [null, [Validators.required]],

    })
  }

  onSubmit(): void{
    const code = this. validationForm.get('code')?.value;

    this.authService.validation(this.validationForm.value).subscribe(
      (response)=>{
        this.snackBar.open('Votre Inscription a réussi !', 'Fermer', {duration: 5000});
        this.router.navigateByUrl("/login");
      },
      (error)=>{
        this.snackBar.open('Votre Inscription a échoué!. Veuillez réessayer.', 'Fermer', {duration: 5000, panelClass: 'error-snackBar'})
      }
    )
  }

}
