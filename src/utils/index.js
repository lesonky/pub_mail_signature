const resource = {
  logoUrl: 'http://ww1.sinaimg.cn/large/92197466gy1fzt1ion1w6j20b40b4aeq.jpg',
  borderUrl: 'http://ww1.sinaimg.cn/large/92197466gy1fznhqdr2aaj200s050741.jpg'
};

export function genHtml(person) {
  person = { ...resource, ...person };
  return `<table style="width: 430px; font-size: 9pt; font-family: Arial,sans-serif; line-height:normal;" cellpadding="0" cellspacing="0"> <tbody> <tr> <td style="width:86px; vertical-align:top;" valign="top"> <img border="0" alt="Logo" height="86" width="86" style="width:86px; height:86px; border:0;" src="${
    person.logoUrl
  }"> </td> <td style="width:44px; ; text-align:center; vertical-align:top;" valign="top"> <img border="0" alt="Logo" width="13" style="width:13px; height:86px; border:0;" src="${
    person.borderUrl
  }"> </td> <td style="width:300px; vertical-align:middle; text-align:left;" valign="top"> <table cellpadding="0" cellspacing="0"> <tbody> <tr> <td style="font-size:10pt; font-family: Arial, sans-serif; font-weight: bold; color: #3d3c3f; padding-bottom:5px;"><span style="font-family: Arial, sans-serif; color:#000000;">${
    person.name
  } ${person.enName}<span style="font-weight: normal;"> | ${
    person.department
  }</span></span></td> </tr> <tr> <td style="font-size:9pt; font-family: Arial, sans-serif; color: #9b9b9b; padding-bottom:1px;"> <span style="font-family: Arial, sans-serif; color:#3c3c3b;"><span>Phone: </span>${
    person.phone
  }</span> <span style="font-family: Arial, sans-serif; color:#3c3c3b"> | </span> <span style="font-family: Arial, sans-serif; color:#3c3c3b;"><span>${person.socialType}: </span>${
    person.social
  }</span> </td> </tr> <tr> <td style="font-size:9pt; font-family: Arial, sans-serif; color: #9b9b9b; padding-bottom:1px;white-space: nowrap;"><span style="font-family: Arial, sans-serif; color:#3c3c3b;"><span>Email: </span>${
    person.email
  }</span><span style="font-family: Arial, sans-serif; color:#3c3c3b"> | </span> <span><a href="http://www.webeyemob.com" target="_blank"><span style="font-family: Arial, sans-serif; color:#3bb5e3">www.webeyemob.com</span></a></span> </td> </tr> </tbody> </table> </td> </tr>  </tbody> </table>
  <span style="display:block;text-align:left;color:#929292;font-size:8px;"> Disclaimer: This email message together with any attachment(s) are confidential and may be legally privileged and are intended solely for the use of the intended recipient. If you are not the intended recipient, please notify the sender immediately and then delete the message from your computer. You should not copy it or disclose its contents to any other person. </span>`;
}

export function copyToClip(str) {
  function listener(e) {
    e.clipboardData.setData('text/html', str);
    e.clipboardData.setData('text/xml', str);
    e.preventDefault();
  }
  document.addEventListener('copy', listener);
  document.execCommand('copy');
  document.removeEventListener('copy', listener);
}
