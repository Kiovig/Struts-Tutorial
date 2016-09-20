/**
 * Created by Vigi on 04/08/2016.
 */
$(function(){
    $("#grid").jqGrid({
        colModel: [
            { name: "emailId", label: "Mail", width: 53 },
            { name: "firstName", label: "PreNume", width: 75, align: "center" },
            { name: "lastName", label: "Nume", width: 65 },
            { name: "password", label: "Pass", width: 41 },
            { name: "userId", label: "User", width: 51 }
        ],
        data: [
            {"emailId":"-","firstName":"-","lastName":"-","password":"-","userId":-1}
        ],
        iconSet: "fontAwesome",
        idPrefix: "g1_",
        rownumbers: true, // creates additional column with the row numbers
        sortname: "invdate", // data will be sorted by the invdate column
        sortorder: "desc",  //
        threeStateSort: true, //third click on column header - no sort
        headertitles: true,
        caption: "The grid, which uses predefined formatters and templates", //defines the text on the title of the grid
        pager: '#pager',        // disable page size dropdown
        //pgbuttons: true,
        rowNum: '6',
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
                /*$('#showusr').val(data.vser);
                console.log(data.vser);*/
                $("#grid").jqGrid('setGridParam', {data: data.vser}).trigger('reloadGrid');
            }
        });
    });
});