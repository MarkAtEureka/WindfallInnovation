/*  TextMagicTest
*   Can we concatenate two fields on a 123FormBuilder form?
*   https://raw.githubusercontent.com/MarkAtEureka/WindfallInnovation/master/TextMagicTest.js
*
*/
$(document).ready(function() {
    var mobileNumber = '';
    var smsDomain = '';

    mobileNumber =  $('#form > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > div > input[type="text"]').vlaue;
    alert(mobileNumber);
}
