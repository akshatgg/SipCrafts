function sendEmail(){
    Email.send({
      SecureToken: "aa3d3299-8213-469d-917a-3be9d89af810",
      // Host : "smtp.elasticemail.com",
      //   Username : "akshatg9636@gmail.com",
      //   Password : "BD873DC0467BAF5F29E0DF5ADB7A842C54A1",
        To :"akshatggggg@gmail.com" ,
        From :"akshatg9636@gmail.com",
        Subject : document.getElementById("subject").value,
        Body : document.getElementById("largeinput").value,
      }).then(
        message => alert(message)
      );
      }



