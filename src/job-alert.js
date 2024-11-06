module.exports = (function() {
    const nodemailer = require('nodemailer');

    const alertJobsFound = function (jobs) {
      if (jobs.length == 0) {
        return;
      }

      const transporter = nodemailer.createTransport({
        service: 'sendgrid',
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD
        }
    });

    const fullBody = getFullBody(jobs);
    
    const mailOptions = {
        from: process.env.SMTP_FROM,
        to: process.env.SMTP_TO,
        subject: jobs.length + ' new jobs found',
        html: fullBody
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            process.exit(1);
        } else {
            console.info('Email enviado com sucess');
        }
    });
    };

    function getFullBody(jobs) {
      const details = jobs.map(function (job) {
        return `<table role="presentation" class="vb-outer" width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#bfbfbf" id="ko_textBlock_1" style="background-color: #bfbfbf">
       <tbody><tr><td class="vb-outer" align="center" valign="top" style="padding-left: 9px; padding-right: 9px; font-size: 0">
       <!--[if (gte mso 9)|(lte ie 8)]><table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="570"><tr><td align="center" valign="top"><![endif]--><!--
       --><div style="margin: 0 auto; max-width: 570px; -mru-width: 0px"><table role="presentation" class="vb-row" border="0" cellpadding="0" cellspacing="9" bgcolor="#ffffff" width="570" style="border-collapse: collapse; width: 100%; background-color: #ffffff; max-width: 570px; -mru-width: 0px">
         
         <tbody><tr>
       <td align="center" valign="top" style="font-size: 0; padding: 0 9px; padding-top: 13px; padding-bottom: 13px"><div style="vertical-align: top; width: 100%; max-width: 552px; -mru-width: 0px"><!--
         --><table role="presentation" border="0" cellspacing="9" cellpadding="0" style="border-collapse: collapse; width: 100%" width="552">
           
           <tbody><tr><td class="long-text links-color" width="100%" valign="top" align="left" style="font-weight: normal; color: #3f3f3f; font-size: 13px; font-family: Arial, Helvetica, sans-serif; padding: 9px; padding-top: 5px; padding-bottom: 5px; padding: 9px; padding-top: 5px; padding-bottom: 5px; text-align: left; line-height: normal"><h2><strong>${job.company} - ${job.title}</strong></h2>
 <p style="margin: 1em 0px; margin-bottom: 0px;">${job.description}</p></td></tr>
         
         </tbody></table></div></td>
     </tr>
       
       </tbody></table></div><!--
     --><!--[if (gte mso 9)|(lte ie 8)]></td></tr></table><![endif]-->
     </td></tr>
     </tbody></table>
     `;
     });
 
     return `
 <!DOCTYPE html>
 <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
   <meta name="viewport" content="initial-scale=1.0">
   <meta name="format-detection" content="telephone=no">
   <title>MOSAICO Responsive Email Designer</title>
   
   
   <style type="text/css">
     body{ margin: 0; padding: 0; }
 
     .socialLinks{ font-size: 6px; }
     .socialLinks a{
       display: inline-block;
     }
 
     .long-text p{ margin: 1em 0px; }
     .long-text p:last-child{ margin-bottom: 0px; }
     .long-text p:first-child{ margin-top: 0px; }
 
     /* :not([data-emoji]) is like a noop to hide this rule in Gmail to workaround emojification bug in Gmail: it is not really used by Gmail and this is currently equivalent to img:not(a) */
     img:not([data-emoji]){ border: 0px; display: block; }
   </style>
   <style type="text/css">
     /* yahoo, hotmail */
     .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div{ line-height: 100%; }
     .yshortcuts a{ border-bottom: none !important; }
     .vb-outer{ min-width: 0 !important; }
     .RMsgBdy, .ExternalClass{
       width: 100%;
       background-color: #3f3f3f;
       background-color: #3f3f3f}
 
     /* outlook/office365 add buttons outside not-linked images and safari have 2px margin */
     [o365] button{ margin: 0 !important; }
 
     /* outlook */
     table{ mso-table-rspace: 0pt; mso-table-lspace: 0pt; }
     #outlook a{ padding: 0; }
     img{ outline: none; text-decoration: none; border: none; -ms-interpolation-mode: bicubic; }
     a img{ border: none; }
 
     @media screen and (max-width: 600px) {
       table.vb-row{
         width: 95% !important;
       }
 
       .mobile-hide{ display: none !important; }
       .mobile-textcenter{ text-align: center !important; }
 
       .mobile-full{ 
         width: 100% !important;
         max-width: none !important;
       }
     }
     
     /* samsung email workaround */
     @media screen and (max-width: 384px) {
       .mail-message-content{ width: 414px !important; }
     }
   </style>
   <style type="text/css">
     
     #ko_textBlock_1 .links-color a, #ko_textBlock_1 .links-color a:link, #ko_textBlock_1 .links-color a:visited, #ko_textBlock_1 .links-color a:hover{
       color: #3f3f3f;
       color: #3f3f3f;
       text-decoration: underline
     }
     
     # .links-color a, # .links-color a:link, # .links-color a:visited, # .links-color a:hover{
       color: #cccccc;
       color: #cccccc;
       text-decoration: underline
     }
     </style>
   
 </head>
 <!--[if !(gte mso 15)]-->
 <body bgcolor="#3f3f3f" text="#919191" alink="#cccccc" vlink="#cccccc" style="margin: 0; padding: 0; background-color: #3f3f3f; color: #919191;"><!--<![endif]--><center>
 
   
 
     
     <!-- preheaderBlock -->
     <table role="presentation" class="vb-outer" width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#3f3f3f" id="" style="background-color: #3f3f3f">
       <tbody><tr><td class="vb-outer" align="center" valign="top" style="padding-left: 9px; padding-right: 9px; font-size: 0">
       <div style="font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden"></div>
       <!--[if (gte mso 9)|(lte ie 8)]><table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="570"><tr><td align="center" valign="top"><![endif]--><!--
       --><div style="margin: 0 auto; max-width: 570px; -mru-width: 0px"><table role="presentation" class="vb-row" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 570px; -mru-width: 0px" width="570">
         
         <tbody><tr>
       <td align="center" valign="top" style="font-size: 0; padding: 0 9px; padding-top: 4px; padding-bottom: 4px"><div style="width: 100%; max-width: 552px; -mru-width: 0px"><!--[if (gte mso 9)|(lte ie 8)]><table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="552"><tr><![endif]--><!--
         --><!--
           --><!--[if (gte mso 9)|(lte ie 8)]><td align="left" valign="top" width="276"><![endif]--><!--
       --><div class="mobile-full" style="display: inline-block; vertical-align: top; width: 100%; max-width: 276px; -mru-width: 0px; min-width: calc(50%); max-width: calc(100%); width: calc(304704px - 55200%)"><!--
         --><table role="presentation" border="0" cellspacing="9" cellpadding="0" style="border-collapse: collapse; width: 100%; -yandex-p: calc(2px - 3%)" width="276" align="left">
           
             <tbody><tr><td width="100%" valign="top" align="left" style="font-weight: normal; color: #ffffff; font-size: 13px; font-family: Arial, Helvetica, sans-serif; text-align: left; padding: 9px; padding-top: 5px; padding-bottom: 5px; padding: 9px; padding-top: 5px; padding-bottom: 5px"><a style="color: #ffffff; text-decoration: underline" target="_new" href="[unsubscribe_link]">Unsubscribe</a></td></tr>
             
           
         </tbody></table><!--
       --></div><!--[if (gte mso 9)|(lte ie 8)]></td><![endif]--><!--
           --><!--[if (gte mso 9)|(lte ie 8)]><td align="left" valign="top" width="276" class="mobile-hide"><![endif]--><!--
       --><div class="mobile-full mobile-hide" style="display: inline-block; vertical-align: top; width: 100%; max-width: 276px; -mru-width: 0px; min-width: calc(50%); max-width: calc(100%); width: calc(304704px - 55200%)"><!--
         --><table role="presentation" border="0" cellspacing="9" cellpadding="0" style="border-collapse: collapse; width: 100%; -yandex-p: calc(2px - 3%)" width="276" align="left">
           
             <tbody><tr><td width="100%" valign="top" align="right" style="font-weight: normal; color: #ffffff; font-size: 13px; font-family: Arial, Helvetica, sans-serif; text-align: right; padding: 9px; padding-top: 5px; padding-bottom: 5px; padding: 9px; padding-top: 5px; padding-bottom: 5px"><a href="[show_link]" style="color: #ffffff; text-decoration: underline" target="_new">View in your browser</a></td></tr>
           
         </tbody></table><!--
       --></div><!--[if (gte mso 9)|(lte ie 8)]></td><![endif]--><!--
         --><!--
       --><!--[if (gte mso 9)|(lte ie 8)]></tr></table><![endif]--></div></td>
     </tr>
       
       </tbody></table></div><!--
     --><!--[if (gte mso 9)|(lte ie 8)]></td></tr></table><![endif]-->
     </td></tr>
     </tbody></table>
     <!-- /preheaderBlock -->
     
 
   
 
   <table role="presentation" class="vb-outer" width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#bfbfbf" id="ko_titleBlock2_1" style="background-color: #bfbfbf">
       <tbody><tr><td class="vb-outer" align="center" valign="top" style="padding-left: 9px; padding-right: 9px; font-size: 0">
       <!--[if (gte mso 9)|(lte ie 8)]><table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="570"><tr><td align="center" valign="top"><![endif]--><!--
       --><div style="margin: 0 auto; max-width: 570px; -mru-width: 0px"><table role="presentation" class="vb-row" border="0" cellpadding="0" cellspacing="9" bgcolor="#ffffff" width="570" style="border-collapse: collapse; width: 100%; background-color: #ffffff; max-width: 570px; -mru-width: 0px">
         
         <tbody><tr>
       <td align="center" valign="top" style="font-size: 0; padding: 0 9px; padding-top: 13px; padding-bottom: 13px"><div style="vertical-align: top; width: 100%; max-width: 552px; -mru-width: 0px"><!--
         --><table role="presentation" border="0" cellspacing="9" cellpadding="0" style="border-collapse: collapse; width: 100%" width="552">
           
           <tbody><tr>
       <td width="100%" valign="top" align="center" style="font-weight: normal; color: #3f3f3f; font-size: 22px; font-family: Arial, Helvetica, sans-serif; text-align: center; padding: 9px; padding-top: 5px; padding-bottom: 5px; padding: 9px; padding-top: 5px; padding-bottom: 5px"><span style="font-weight: normal">New Jobs found</span></td>
     </tr>
         
         </tbody></table></div></td>
     </tr>
       
       </tbody></table></div><!--
     --><!--[if (gte mso 9)|(lte ie 8)]></td></tr></table><![endif]-->
     </td></tr>
     </tbody></table>
     
     ${details}
 </center><!--[if !(gte mso 15)]--></body><!--<![endif]--></html>
     `;
    }
  

    return {
        alertJobsFound: alertJobsFound
    }
})();
