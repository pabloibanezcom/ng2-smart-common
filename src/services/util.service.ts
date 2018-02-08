import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }

  resolveComplexProperty(obj, property) {
    return property.split('.').reduce(function (prev, curr) {
      return prev ? prev[curr] : null;
    }, obj || self);
  }

}
