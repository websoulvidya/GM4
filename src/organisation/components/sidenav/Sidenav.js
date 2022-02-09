import React from 'react';
import './Sidenav.css';
function sidenav() {
    return(
        <div>
<div className='sidenav'>
 <div className='button_nav'>        
<a class="uk-button uk-button-default" id="buttons_nav" href="/orghome"><h4 className='navhead'>DashBoard</h4></a><br/>
</div> 
<div className='button_nav'>        
<a class="uk-button uk-button-default"  id="buttons_nav" href="/sendidp"><h4 className='navhead'>Send Idp</h4></a><br/>
</div> 
<div className='button_nav'>        
<a class="uk-button uk-button-default" id="buttons_nav" href="/slotlist"><h4 className='navhead'>Slot List</h4></a><br/>
</div> 
<div className='button_nav'>        
<a class="uk-button uk-button-default" id="buttons_nav"  href="/mymatches"><h4 className='navhead'>My matches</h4></a><br/>
</div> 
<div className='button_nav'>        
<a class="uk-button uk-button-default" id="buttons_nav" href="/cancellation"><h4 className='navhead'>Cancellation</h4></a><br/>
</div> 

<div className='button_nav'>        
<a class="uk-button uk-button-default" id="buttons_nav" href="/Logout"><h4 className='navhead'>Logout</h4></a><br/>
</div> 

</div>


{/**card portion */}



</div>



    );

}
export default sidenav;
