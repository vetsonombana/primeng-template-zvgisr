import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/primeng';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'fa-basketball-ball',
        items: [
          {
            label: 'New',
            icon: 'fa-plus',
            items: [
              { label: 'Project', icon: 'fa-lock' },
              { label: 'Other', icon: 'fa-list' }
            ]
          },
          { label: 'Open', icon: 'fa-external-link' },
          { separator: true },
          { label: 'Quit', icon: 'fa-close' }
        ]
      },
      {
        label: 'Edit',
        icon: 'fa-edit',
        items: [
          { label: 'Undo', icon: 'fa-mail-forward' },
          { label: 'Redo', icon: 'fa-mail-reply' }
        ]
      },
      {
        label: 'Help',
        icon: 'fa-question',
        items: [
          {
            label: 'Contents',
            icon: 'fa-bars'
          },
          {
            label: 'Search',
            icon: 'fa-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ]
              },
              {
                label: 'File',
                icon: 'fa-file'
              }
            ]
          }
        ]
      },
      {
        label: 'Actions',
        icon: 'fa-gear',
        items: [
          {
            label: 'Edit',
            icon: 'fa-refresh',
            items: [
              { label: 'Save', icon: 'fa-save' },
              { label: 'Update', icon: 'fa-save' }
            ]
          },
          {
            label: 'Other',
            icon: 'fa-phone',
            items: [{ label: 'Delete', icon: 'fa-minus' }]
          }
        ]
      }
    ];
  }
}
