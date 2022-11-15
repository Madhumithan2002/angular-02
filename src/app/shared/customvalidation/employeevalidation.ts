import { AbstractControl, ValidationErrors } from "@angular/forms";



 export  function gtr10(Conts:AbstractControl):ValidationErrors|null{
    let validation = Conts.value;

    if (validation <=10){
        return{'gtr10' :false}
    }
    else{
        return null
    }
}