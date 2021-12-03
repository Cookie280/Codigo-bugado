
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var bola;
var chao;
var parede1;
var parede2;
var teto;
var angle=60;
var poly;

function setup() {
  //cria a tela
  createCanvas(400,400);
  //cria as propriades fisicas
  engine = Engine.create();
  //conecta a fisica ao mundo
  world = engine.world;
  //tipo de colisão
  chao = new ground(200,375,400,10);
  parede1 = new ground(375,200,10,400);
  parede2 = new ground(25,200,10,400);
  teto = new ground(200,10,400,10);
  bola = new ball(100,350,20);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  chao.display();
  parede1.display();
  parede2.display();
  teto.display();
  bola.display();
}

