import { ProxyState } from "../AppState.js";
import { triviaService } from "../Services/TriviaService.js"


function _draw() {
  let questions = ProxyState.questions
  let template = ''
  questions.forEach(q => template += q.Template)
  document.getElementById("questions").innerHTML = template
}

export default class TriviaController {
  constructor() {
    ProxyState.on("questions", _draw);
    _draw()
  }

  nextQuestions() {
    triviaService.nextQuestions()
  }

}
