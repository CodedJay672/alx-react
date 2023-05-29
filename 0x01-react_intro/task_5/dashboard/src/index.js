import $ from 'jquery';
import logo from './holberton-logo.jpg';
import './index.css';

function myLogo() {
  const myImage = new Image();
  myImage.src = logo;

  myDiv.append(myImage);

  return myImage;
}

$(document).ready(function() {
  $('body').append('<div class="App-header"><h1>School dashboard</h1></div>');
  $('.App-header').prepend(myLogo());
  $('body').append('<div class="App-body"><p>login to access full dashboard</p></div>');
  $('body').append('<div class="App-footer"><p>Copyright 2020 - holberton school</p></div>');
});