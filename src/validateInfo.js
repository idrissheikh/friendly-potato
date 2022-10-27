export default function validateInfo(values){
    let errors = {};
    /*if(!values.fristName.trim()){
        errors.fristName ='Fristname required!'
     }
     if(!values.lastName.trim()){
        errors.lastName ='Lastname required!'
     }
*/
     if(!values.username.trim()){
        errors.username ='Username required!'
     }

     if(!values.email.trim()){
        errors.email ='Email required!';
     }
     else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid!';
     }
     if(!values.password){
        errors.password='Password is required!'
     }else if(values.password.length < 6){
        errors.password='Password have to be 8 characters or more!'
     }

     if(!values.password2){
        errors.password2='Password is required!'
     }else if(values.password2 !=values.password){
        errors.password2='Password do not match!'}
      return errors;
}