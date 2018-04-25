import { URL_IMAGENES } from './../../config/url';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(codigo: string) {
    return URL_IMAGENES + codigo + ".jpg";
  }
}
