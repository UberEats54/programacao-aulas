const tagDia = document.querySelector("#tagDia");
const tagMateria = document.querySelector("#tagMateria");
const tagProfessor = document.querySelector("#tagProfessor");
const tagLocal = document.querySelector("#tagLocal");
const tagHorario = document.querySelector("#tagHorario");
const date = new Date();

const dias = ["Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado", "Domingo"];
const materias = ["Cálculo I", "Fundamentos Matemáticos", "ATP", "G.A / ICC", "Lógica Matématica", "---", "---"];
const professores = ["Renato sainha", "Nelson", "Orlando", "Sara / Professor indefinido", "Renato sainha", "---", "---"];
const locais = ["Anfiteatro I", "Lab Didático II", "Lab Didático I", "Anfiteatro I / Bloco G", "Anfiteatro I", "---", "---"]
const horarios = ["14h", "8h", "14h", "14h / 19h", "14h", "---", "---"];

let d = date.getDay() - 1;
tagDia.textContent = dias[d];
tagMateria.textContent = materias[d];
tagProfessor.textContent = professores[d];
tagLocal.textContent = locais[d];
tagHorario.textContent = horarios[d];