function sendEmail(){
    Email.send({
      SecureToken: "4e4afce3-519a-487b-b00a-ec0991ca8fce",
      // Host : "smtp.elasticemail.com",
      //   Username : "akshatggggg@gmail.com",
      //   Password : "62B2182A7ACACC289BD41780BF64C98E0F06",
        To : document.getElementById("emails").value,
        From :"akshatggggg@gmail.com",
        Subject : document.getElementById("subject").value,
        Body : document.getElementById("largeinput").value,
    }).then(
      message => {
        if(message=='OK'){
          swal("Successfull", "Your Data Successfull Received", "success");
        }
        else{
          swal("Something wrong", "Your Data not Successfull Received" ,"error");
        }
      }
    );
}