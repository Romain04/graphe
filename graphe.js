// graphe.js - 01.2020

/*
  Graphe Des Assos - Javascript.
  index.html's Javascript [v1]
  Developed by Romain Picard - Merlin/2019
*/

var form = document.getElementById('form'),
    fonctionnement = document.getElementById('fonctionnement'),
    credits = document.getElementById('credits'),
    elements = [form, fonctionnement, credits];

function switchTo(nbr)
{
  for(var i = 0; i<3; i++)
  {
    if(i != nbr)
    {
      elements[i].style.visibility = "hidden";
    }
  }
  elements[nbr].style.visibility = "visible";
  console.log(nbr);
}

function printNode(val)
{
  document.getElementById('nodeSize').innerHTML = val;
}

function printVertice(val)
{
  document.getElementById('verticeSize').innerHTML = val;
}
