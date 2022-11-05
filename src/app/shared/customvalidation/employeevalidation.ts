import { AbstractControl, ValidationErrors } from "@angular/forms";



 export  function gtrs20(Conts:AbstractControl):ValidationErrors|null{
    let validation = Conts.value;

    if (validation <=20){
        return{'gtrs20' :false}
    }
    else{
        return null
    }
}