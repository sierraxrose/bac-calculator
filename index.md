
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>BAC Calculator</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="calculator.js"></script>
</head>
<body>

<!--Title For The Page -->
<h2>BAC Calculator</h2>

<!--Text Boxes For Amount Of Alcohol Consumed -->
<form id="form1">
    <fieldset>
        <legend>Drinks Consumed</legend>
        <label for="beer">Number of Beers Consumed</label>
            <input type="number" id="beer" name="beer" value="0" required>
        <br>
        <br>
        <label for="wine">Glasses of Wine Consumed</label>
            <input type="number" id="wine" name="wine" value="0" required>
        <br>
        <br>
        <label for="shot">Number of Shots Consumed</label>
            <input type="number" id="shot" name="shot" value="0" required>
        <br>
        <br>
    </fieldset>
</form>

<!-- Text Boxes To Determine Weight & Hours Since 1st Drink -->
<form id="form2">
    <fieldset>
        <legend>Your Weight & Time Passed</legend>
        <label for="weight">Your Weight In Pounds</label>
            <input type="number" id="weight" name="weight" value="0" required>
        <br>
        <br>
        <label for="hours">Hours Since Your First Drink</label>
            <input type="number" id="hours" name="hours" value="0" required>

    </fieldset>
</form>

<br>
<br>
<!-- Button To Collect & Show Data -->

<input type="submit" id="submit" name="submit" value="Calculate My BAC">

<br>

<p id="result"></p>

</body>
</html>
