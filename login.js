async function load() {
       const response = await fetch(
         "https://script.google.com/macros/s/AKfycbzDLFRvOkBW_JndvTR8_2jLP8CHg3oeYsV_fbua0sre4T-E0s70GpHFuLVXXvDGrfKX/exec"
       );
       //   console.log(response);
       const events = await response.json();
       console.log({ events });
       let user = events.user;
       var change = document.createTextNode(events.user);
       if(change == "kumar") {
              console.log("right")
       }
       else{
              console.log("false")
       }
     }
     
     load();
















// var options =
// {
//   "method" : "post",
//   "payload" : payload,
//   "followRedirects" : true,
//    muteHttpExceptions: true
// };

// var login = UrlFetchApp.fetch("https://script.google.com/macros/s/AKfycbx_ysRAewwr_3y95hZ7WrHXZRGdQeStu31DNSAGJ-F8KKhjjB6IGa-7fSFLC54teOKZ/exec", options);
// //var sessionDetails = login.getAllHeaders()['Set-Cookie'];
// Logger.log(login);  

