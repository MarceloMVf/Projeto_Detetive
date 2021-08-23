console.log("Você será interrogado para esclarecer sua participação no assassinato de Agosto. \nVocê deve responder aos questionamentos de forma objetiva, usando apenas Sim ou Não.\n")

let QNT = 0;

let Q01 = prompt("Você ligou para Agosto em 17/03?")
let Q1 = Q01.toLowerCase()
let Q02 = prompt ("Você esteve no local do crime no dia 17/03?")
let Q2 = Q02.toLowerCase()
let Q03 = prompt ("Você mora perto de onde morava Agosto?")
let Q3 = Q03.toLowerCase()
let Q04 = prompt ("Você devia algo para Agosto?")
let Q4 = Q04.toLowerCase()
let Q05 = prompt ("Você já trabalhou no mesmo local que Agosto?")
let Q5 = Q05.toLowerCase()

if (Q1 == "sim") {
  QNT ++;
} 
if (Q2 == "sim") {
  QNT ++;
} 
if (Q3 == "sim") {
  QNT ++;
} 
if (Q4 == "sim") {
  QNT ++;
} 
if (Q5 == "sim") {
  QNT ++;
} 

if (QNT == 2){
  console.log("Relatório do interrogatório: Pessoa suspeita do crime.")
} else if (QNT == 3) {
  console.log("Relatório do interrogatório: Pessoa cúmplice do crime.")
  } else if (QNT == 4) {
  console.log("Relatório do interrogatório: Pessoa cúmplice do crime.")
  }else if (QNT == 5){
  console.log("Relatório do interrogatório: Pessoa é a assassina de Agosto.")
  } else {
  console.log("Relatório do interrogatório: Pessoa inocente do crime.")}
  console.log(QNT)
