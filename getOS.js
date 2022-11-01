function  download_chamasoft()
{

   
        var userAgent = window.navigator.userAgent,
            platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = null;
      
        if (macosPlatforms.indexOf(platform) !== -1) {
          os = 'Mac OS';
          window.location.href = "https://chamasoft.com/technology/web-application/";
        } 
        else if (iosPlatforms.indexOf(platform) !== -1) {
          os = 'iOS';
          window.location.href = "https://apps.apple.com/ke/app/chamasoft/id1489712788";
        } 
        
        else if (windowsPlatforms.indexOf(platform) !== -1) {
          os = 'Windows';
          window.location.href = "https://chamasoft.com/technology/web-application/";
        }
        
        else if (/Android/.test(userAgent)) {
          os = 'Android';

          window.location.href = "https://play.google.com/store/apps/details?id=chamasoft.app"; 

        } 
        else if (/Linux/.test(platform)) {
          os = 'Linux';
          window.location.href = "https://chamasoft.com/technology/web-application/";
        }
  // document.getElementById('OS').innerHTML = os;

}