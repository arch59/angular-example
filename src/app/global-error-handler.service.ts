import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor() { }
  handleError(error) {
    console.error("Check error occured", error.message);
    console.error(error);
    alert(error);
  }

}
