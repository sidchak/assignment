class LoginPage 
{
   getstarthere()
   {
    return cy.get('#nav-signin-tooltip > div > a');
 
    }
    getname()
    {
     return  cy.get('#ap_customer_name');
  
     }
    
     getemail()
     {
      return cy.get('#ap_email');
   
      }
      getpwd()
      {
       return cy.get('#ap_password');
    
       }
       getreenterpwd()
       {
        return cy.get('#ap_password_check');
     
        }
        getcreateaccount()
        {
         return cy.get('#continue');
      
         }
    }

export default LoginPage