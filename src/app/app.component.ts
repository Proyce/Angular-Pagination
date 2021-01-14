import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1538964173425-93884d739596?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Torquoise Beaches',
      url: 'https://images.unsplash.com/photo-1508313157893-34fe6176c189?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Bahamas Beaches',
      url: 'https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'I love beaches',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Scenic beaches',
      url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1538964173425-93884d739596?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Torquoise Beaches',
      url: 'https://images.unsplash.com/photo-1508313157893-34fe6176c189?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Bahamas Beaches',
      url: 'https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'I love beaches',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Scenic beaches',
      url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1538964173425-93884d739596?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Torquoise Beaches',
      url: 'https://images.unsplash.com/photo-1508313157893-34fe6176c189?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Bahamas Beaches',
      url: 'https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'I love beaches',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Scenic beaches',
      url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1538964173425-93884d739596?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Torquoise Beaches',
      url: 'https://images.unsplash.com/photo-1508313157893-34fe6176c189?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Bahamas Beaches',
      url: 'https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'I love beaches',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Scenic beaches',
      url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1538964173425-93884d739596?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Torquoise Beaches',
      url: 'https://images.unsplash.com/photo-1508313157893-34fe6176c189?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Bahamas Beaches',
      url: 'https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'I love beaches',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Scenic beaches',
      url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1538964173425-93884d739596?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Torquoise Beaches',
      url: 'https://images.unsplash.com/photo-1508313157893-34fe6176c189?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Bahamas Beaches',
      url: 'https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'I love beaches',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Scenic beaches',
      url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
  ]
}
