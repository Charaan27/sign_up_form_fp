function function1()
      {
	var a = document.getElementById("fname");
	var b = document.getElementById("lanme");
	var c = document.getElementById("email");
	var d = document.getElementById("password");
   
         if(allLetter(a))
	 {
		if(allLetters(b))
		{
		 	if(ValidateEmail(c))
			{ 
				if(passid_validation(d))
                                 {
			         }
			 }
   		 }
	 }
         return false;
       }
	
	function allLetter(a)
	{ 
		var letters = /^[A-Za-z]+$/;
		if(a.value.match(letters))
		{
			return true;
		}
		else
		{
			alert('Firstname must have alphabet characters only');
			a.focus();
			return false;
		}
	 }
	
	function allLetters(b)
	{ 
		var letters1 = /^[A-Za-z]+$/;
		if(b.value.match(letters1))
		{
			return true;
		}
		else
		{
			alert('Lastname must have alphabet characters only');
			b.focus();
			return false;
		}
	 }
         function ValidateEmail(c)
	 {
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(c.value.match(mailformat))
		{
			return true;
		}
		else
		{
			alert("You have entered an invalid email address!");
			c.focus();
			return false;
		}
	 }

	function passid_validation(d)
	{
		var passid_len = d.value.length;
		if (passid_len == 0 )
		{
			alert("Password should not be empty");
			d.focus();
			return false;
		}
		alert('Form Successfully Submitted');
		window.location.reload();
		return true;
	}
