$(function(){
    $('#sumButton').click(function(){
        var A = $('#inputA').val();
        var B = $('#inputB').val();
        console.log(A + ' + ' + B + ' = ');
        $.ajax({
            url: 'addUpNumbers.action',
            type: 'POST',
            data: {
                inputA: A,
                inputB: B
            },
            traditional: true,
            success: function(data){
                $('#outputC').val(data.theSum);
            }
        });
    });
    
});