const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")
button.addEventListener("click", add)
form.addEventListener("change", save)

/*eventos, no caso click e mudanças, sempre 2 argumentos*/

function add() {
  /* criamos a funçao do botao para funcionar*/
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  /*criando a data, tranformando em PT e o RECORTE, feito pelo SLICE*/
  const dayExists = nlwSetup.dayExists(today)

  /*biblioteca, verdadeiro se o dia existir e falso se nao, se o dia ja existir nao incluo novamente, caso contrario incluo*/
  if (dayExists) {
    alert("dia já incluso 🔴")
    return
    /*sempre q encontrar essa palavra ele para o codigo na hora*/
  }

  alert("Adicionado com sucesso 🟢")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
  /*dados da minha biblioteca, nao pode errar nome*/

}


const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
/*busca as informaçoes e converte em objeto, no caso colocamos objeto vazio para identificar existencia*/
nlwSetup.setData(data)
nlwSetup.load()

/*pós feito todo o procedimendo carregaremos as informaçoes*/
