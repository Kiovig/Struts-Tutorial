/**
 * Created by Vigi on 02/08/2016.
 */
$(function(){
    $('#sumNrs').click(function () {
        var nrString = $("#Nrs").val();
        var intArr = nrString.split(',');
        var sum = 0;
        var arrLen = intArr.length;
        for (var i = 0; i < arrLen; i++) {
            sum += parseInt(intArr[i]);
        }
        $('#outSum').val(sum);
    });
})