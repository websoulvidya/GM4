import React from 'react';
import Dashboard from '../../components/header/Dashboard';
import Footer from '../../components/footer/Footer';
import './Tournamenlist.css';
function Addtournamentslist(){
    return(
        <div class="dailybody">
            <div>
      <Dashboard/>

      </div>
        <div>


        <h1 class="slotlistheader">Tournament TeamList</h1>
        <table class="uk-table uk-table-hover uk-table-divider slottable">
    <thead>
        <tr>
            <th class="tableheader">Slot Number</th>
            <th class="tableheader">Team Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Bot Barbarians</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Smash Toons</td>
            </tr> 
            <tr>
            <td>3</td>
            <td>Bot Barbarians</td>
            </tr>
            <tr>
            <td>4</td>
            <td>Invisible Kill</td>
            </tr>
            <tr>
            <td>5</td>
            <td>Bot Barbarians</td>
            </tr>
             <tr>
            <td>6</td>
            <td>Alpha Death</td>
            </tr>
            <tr>
            <td>7</td>
            <td>Hellmarish</td>
            </tr>
            <tr>
            <td>8</td>
            <td>Spree Enigma</td>
            </tr>
            <tr>
            <td>9</td>
            <td>Radical Death</td>
            </tr>
            <tr>
            <td>10</td>
            <td>Wreck Slash</td>
        </tr>
    </tbody>
</table>
</div>
      <br/>
      
      </div>
    )
}
export default Addtournamentslist;
