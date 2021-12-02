function calPercent()
{
    var name1 = document.getElementById("username1").value;
    var name2 = document.getElementById("username2").value;
    if (name1.length != 0 || name2.length != 0)
    {
        document.getElementById("lovevalue").value = ("Please insert name");
        var num = Math.random() * 100;
        num = Math.floor(num);
        document.getElementById("lovevalue").value = (num + "% love");
    }
    else 
    {
        document.getElementById("lovevalue").value = ("Please insert name");
    }
}

function clearIt() 
{

    document.getElementById("username1").value = ('');
    document.getElementById("username2").value = ('');
    document.getElementById("lovevalue").value = ('');
}