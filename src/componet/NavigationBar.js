import React from 'react'

export default class ValiationForm extends React.Component{
  render () {
      return ( 
        <div className="nav_menu" id="nav-menu">
        <h2>Seedy</h2>
            <ul class="nav_list ">
                
                <li class="nav_item active"><a href="#home" class="nav_link active">Home</a></li>
                <li class="nav_item"><a href="#aboutus" class="nav_link ">AboutUs</a></li>
                <li class="nav_item"><a href="#footer" class="nav_link">Form</a></li>
                <li class="nav_item"><a href="#footer" class="nav_link">footer</a></li>
            </ul>
        </div> 
      );
  }
}