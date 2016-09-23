/**
 * Created by Vigi on 04/08/2016.
 */
$(function(){
    $("#grid").jqGrid({
        colModel: [
            { name: "emailId", label: "Mail", width: 77 },
            { name: "firstName", label: "PreNume", width: 98, align: "center" },
            { name: "lastName", label: "Nume", width: 98 },
            { name: "password", label: "Pass", width: 41 },
            { name: "userId", label: "User", width: 51 }
        ],
        data: [ {"emailId":"-","firstName":"-","lastName":"-","password":"-","userId":-1} ],
        iconSet: "fontAwesome",
        idPrefix: "g1_",
        rownumbers: true, // creates additional column with the row numbers
        sortname: "firstName", // data will be sorted by the invdate column
        sortorder: "desc",  //
        threeStateSort: true, //third click on column header - no sort
        headertitles: true,
        caption: "Tabela User", //defines the text on the title of the grid
        viewrecords: true
    });

    $('#sumNrs').click(function(){
        var stringArray = $('#Nrs').val();
        $.ajax({
            url: 'sumArrayNumbers.action',
            type: 'POST',
            data: {
                Str: stringArray
            },
            traditional: true,
            success: function(data){
                $('#outSum').val(data.sum);
                $("#grid").jqGrid('setGridParam', {data: data.vser}).trigger('reloadGrid');
            }
        });
    });
});