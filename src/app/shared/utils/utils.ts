import { Injectable } from '@angular/core';

@Injectable()
export class Utils {

  processData(data) {
    const filesList = [];
    const foldersList = [];
    const sitesList = [];
    data.list.entries.forEach(element => {
      if (element.entry.target.file) {
        filesList.push(element);
      } else if (element.entry.target.folder) {
        foldersList.push(element);
      } else if (element.entry.target.site) {
        sitesList.push(element);
      }
    });
    const obj = {
      'files': filesList,
      'folders': foldersList,
      'sites': sitesList,
    }
    return obj;
  }
}
