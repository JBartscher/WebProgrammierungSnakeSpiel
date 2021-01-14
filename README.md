<img src="./assets/Images/Schlangenzunge.svg" alt="logo" height="100px">
 "MySnakeGame  Logo"

![alt text](https://github.com/JBartscher/WebProgrammierungSnakeSpiel/blob/master/Assets/Images/Schlangenzunge.svg?raw=true)

![Image](../blob/master/Assets/Images/Snakehead.png?raw=true)
![Image](../assets/Images)

# WebProgrammierungSnakeSpiel

WebProgrammierungSnakeSpiel

## Repository Aufbau

Dieses Repository ist wie folgt aufgebaut:

```
project-root
│   README.md           <-- dieses Dokument
|
│   main.html           <-- HTML Seiten
|   canvas.html         <-|
|   credits.html        <-|
|   highscore.html      <-|   
|   options.html        <-|
|      
|   SnakeGame.uml       <-- Klassendiagramm der Applikation
|   UML_Snakegame.pdf   <-|   
│
└───SnakeGame
│   │   Game.js <-- Hauptklasse
│   │   main.js <-- Applikations Eintrittspunkt
│   │
│   └───src <-- Spiel src. Code
│       └───GameEntities
│           │   ...
│       └───Sound
│           │   ...
│       └───lib
│           │   ...
│   
└───assets <-- alle verwendeten Assets
│   └───Fonts
│   └───Images
│   └───Sounds
│   
└───js <-- js für Browserinteraktion 
│   │   gamesound.js
│   │   highscore.js
│   │   options.js
│
└───css <-- Stylesheets
    │   ...
```

## Entscheidungen

* Der Quellcode für das eigentlich Spiel liegt getrennt von anderem JS-Code in einem eigenen Verzeichnis um direkte
  Zugriffe auf HTML Seiten, das *document* oder *window* Object zu kapseln.
* Die css transitions wurden __nicht__ selbst entwickelt sondern mithilfe der Webseite http://animista.net generiert da
  es sich um keine libary handelt und nur dem polish dient.
* Mit dem Tag der Abgabe habe ich dieses Repository auf *public* umgestellt. Dies hat den Vorteil das, falls etwas in
  der gezippten Version nicht funktionieren sollte, auf dieses Repository zurückgegriffen werden kann. Außerdem
  funktionieren dann die verlinkten Logos in dieser Datei und diese Readme Datei ist einfacher zu lesen.
* Die Sprites für das Spiel wurden von mir handgezeichnet bevor der visuelle Stil im Rahmen der ersten ESA feststand.
  Die Sprites passen nicht mehr 100% zum spartanischen/cleanen Stil des Spieles. Durch den entstandenen Aufwand wäre es
  Die Sprites passen nicht mehr 100% zum spartanischen/cleanen Stil des Spieles. Durch den entstandenen Aufwand wäre es
  allerdings schade die Sprites wegzuschmeißen, daher verbleiben sie im Spiel.
  