export default class Question {
    constructor({ category, difficulty, question, correct_answer, incorrect_answers }) {
        this.category = category
        this.difficulty = difficulty
        this.question = question
        this.correctAnswer = correct_answer
        this.incorrectAnswers = incorrect_answers
    }

    get Template() {
        console.log(this.incorrectAnswers)
        let random = Math.floor(Math.random() * 3)
        let answers = this.incorrectAnswers.splice(random, 0, this.correctAnswer)
        console.log(answers)
        return `
        <div class="col-4 bg-light qcard border">
                <h4>${this.category}, ${this.difficulty}</h4>
                <div class="mb-3">${this.question}</div>
                <ul>
                    ${this.Answers}
                </ul>
            </div>
        `
    }

    get Answers() {
        let template = ''
        this.incorrectAnswers.forEach(i => template += `<li onclick="">${i}</li>`)
        return template
    }
}
