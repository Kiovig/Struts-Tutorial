<!DOCTYPE html PUBLIC 
	"-//W3C//DTD XHTML 1.1 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	
<%@taglib prefix="s" uri="/struts-tags" %>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Index</title>
	<script src="js/jquery-1.12.4.min.js" type="application/javascript"></script>
    <script src="js/main.js" type="application/javascript"></script>
	<s:head />
</head>
<body>
	<s:form action="helloWorld">
		<s:textfield label="What is your name?" name="name" />
		<s:textfield label="What is the date?" name="dateNow" />
		<s:submit />
	</s:form>
    <div>
        <label for="inputA">Enter A:</label>
        <input type="text" id="inputA"/>
        <label for="inputB">Enter B:</label>
        <input type="text" id="inputB"/>
        <button type="button" id="sumButton">Click for the sum</button>
        <input type="text" disabled="disabled" id="outputC"/>
    </div>
</body>
</html>
	