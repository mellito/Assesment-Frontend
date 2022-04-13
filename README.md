# Assesment-Frontend

proyect from makit real to create a simple page

## 1 ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?

R/

1. Spring Planning : se asignan las tareas y el tiempo de duracion del spring
2. Daily Scrum: es donde se presenta en lo que se trabajo el dia anterior y dificultades si se tienen, es una reunion corta
3. Spring Review: en esta reunion se revisa el incremento realizado al proyecto
4. Retrospectiva: mejoras que se pueden realizar para el siguiente spring

## 2 ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.

R/ es un boceto que representa de forma sencilla la estructura de una pagina web, se puede utilizar Balsamiq Mockups para crear wireframes

## 3 Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.

R/ var y lest son variables que puedes declarar y cambiar sus contenido mientras que const no permite cambiar su contenido una vez declarada y inizializada

var ejemplo
var saludar = "hey, hola";
var tiempos = 4;

    if (tiempos > 3) {
        var saludar = "dice Hola tambien";
    }

    console.log(saludar) //  "dice Hola tambien"

la diferencia entre var y let es el scope mientras que var si se declara dentro de un bloque puede ser llamada fuera de este pero con let no pasa esto,

let saludar = "dice Hola";
let tiempos = 4;

if (tiempos > 3) {
let hola = "dice Hola tambien";
console.log(hola);// "dice Hola tambien"
}
console.log(hola) // hola is not defined

## 4 ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?

R/ git checkout -b rama-1 ,git branch rama-1,

## 5 Explicar la diferencia entre git merge y git rebase.

R/ el rebase unifica las rama perdiendo el historial de commit y el merge no

## 6 ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?

R/ un Pull Request solicita un cambio en la rama que estan en github, mientras que un git pull trae los cambios que tengan la rama

## 7 ¿Qué es el Virtual DOM?

R/ es un arbol virtual que se crea a partir del dom esto ayuda a cuando se ejecute un cambio se renderize de forma mas optima

## 8 Dado el siguiente codePen, el cual solo tiene un HTML, por medio de css llegar a esta respuesta. Imagen. (Para mostrar los servicios debes usar CSS Flexbox o CSS Grid).

.c-section{
width:70%;
margin: 0 auto;

}

.c-section .c-section\_\_title{
display:grid;
place-content:center;
height:80px;
background-color:black;  
 color:white;
box-shadow: -1px -11px 0px -1px #828282;
}

.c-section .c-services{
list-style:none;
display:grid;
place-content:center;
grid-template-columns: repeat(2, 1fr);
gap:20px;
padding: 30px 0

}

.c-section .c-services .c-services\_\_item{
heigth:150px;
padding:10px;
background-color:rgb(248, 248, 248);
}

.c-section .c-services .c-services\_\_tem:hover{
box-shadow: 0px 9px 8px -4px #828282;
}

.c-section .c-services .c-services\_\_item h3{
padding-left: 40px;
word-spacing:5px;
}

.c-section .c-services .c-services\_\_item p{
line-height:30px
}
