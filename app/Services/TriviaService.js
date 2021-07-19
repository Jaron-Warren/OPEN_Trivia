import { ProxyState } from "../AppState.js";
import Question from "../Models/Question.js";
import { api } from "./AxiosService.js"

class TriviaService {
  // addQuestion() {
  //   ProxyState.questions = [...ProxyState.questions, new Question()]
  // }

  async nextQuestions() {
    console.log("Next Questions!")
    const res = await api.get()
    console.log(res.data.results)
    let questions = res.data.results.map(q => new Question(q))
    ProxyState.questions = questions
  }
}

export const triviaService = new TriviaService();

