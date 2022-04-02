import classes from './Navbar.module.css'

const Navbar = () => {

   const studentLoginClickHandler = () => {
       
   

   }

    return (

 <div className={classes.wrapper}>

        <div className={classes.logo}>
           <p>Somaiya | <span>Alumni</span></p> 
        </div>



    <div className={classes.wrap}>
   
   
    <div className={classes.login}>

<button onClick={studentLoginClickHandler}> Student Login </button>
<button> Faculty Login </button>

    </div>


  <div className={classes.items}>
        

             <li className={classes.dropdown}>
                Events
              
             </li>

            <li className={classes.dropdown}> Services 
               <div class={classes.dropdownContent}>
                  <a href="#">Retrieve Marksheet</a>
                  <a href="#">Retrieve Transcript</a>
                </div>
           </li>

          <li className={classes.dropdown}> Opportunities 
               <div class={classes.dropdownContent}>
                  <a href="#">Internship Opportunities</a>
                  <a href="#">Job Referrals</a>
               </div>
          </li>

        
         <li className={classes.dropdown}> 
          Connect 
          <div class={classes.dropdownContent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
          </li>

        <li className={classes.dropdown}> 
        Programmes 
         <div class={classes.dropdownContent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
         </div>
       </li>

</div>
</div>
        

        </div>
    )

}

export default Navbar;