<%--
  Created by IntelliJ IDEA.
  User: Vigi
  Date: 03/08/2016
  Time: 17:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Sum numbers</title>
    <script src="js/jquery-1.12.4.min.js" type="application/javascript"></script>
    <script src="js/sumArray.js" type="application/javascript"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/themes/redmond/jquery-ui.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/free-jqgrid/4.13.4/css/ui.jqgrid.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/free-jqgrid/4.13.4/js/jquery.jqgrid.min.js"></script>
</head>
<body>
<div>
    <label>Numbers</label>
    <input type="text" id="Nrs"/>
    <button type="button" id="sumNrs">Suma</button>
    <input type="text" disabled="disabled" id="outSum"/>
    <%--<textarea disabled="disabled" id="showusr"/>--%>
    <label id="showusr1"></label>
    <table id="grid"></table>
</div>
</body>
</html>
