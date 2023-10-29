function skulk(ninja)
{
    return performAction(ninja,"skulking");
}

var performAction = function (person,action)
{
    return person + " - " + action;
}

var rule = dimyo => performAction(dimyo,"ruling");

skulk("Hattori");

rule("Oda Nobunaga");