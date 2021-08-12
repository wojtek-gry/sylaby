// declare var require: any

import {fileList, File} from "./files";
import {An, Answer, Qu} from "./mai/mai.component";


export class QuestionGenerator {
  title = 'my-app';

  nextQuestion() {
    let files = fileList.slice();
    let {letter, an} = this.getCorrect(files);

    let files2 = this.removeItem(files, letter);
    let option2 = this.getIncorrectAnswer(files2);
    let option3 = this.getIncorrectAnswer(files2);

    var options = this.shuffle([an, option2, option3]);
    let qu = new Qu(0, letter.imageName, options);

    return qu;
  }

  private getCorrect(files: File[]) {
    return this.extracted(files, true);
  }

  private getIncorrectAnswer(files: File[]): Answer {
    return this.extracted(files, false).an;
  }

  private extracted(files: File[], isCorrect: boolean) {
    let letter = this.answerLetter(files);
    let answerImage = this.answerImage(letter.images);
    let an = new An(0, answerImage, isCorrect);
    return {letter, an};
  }


  private answerLetter(files: File[]) {
    var ktora = this.losuj(files);
    let letter = files[ktora];
    return letter;
  }

  private answerImage(images: string[]) {
    let imageNames = images;
    let answerImage = imageNames[this.losuj(imageNames)];
    return answerImage;
  }

  private losuj<T>(arr: Array<T>) {
    let min = 0;
    let max = arr.length -1;
    var number = Math.random() * (max - min) + min;
    console.log(number);
    return Math.round(number);
  }

  private removeItem<T>(arr: Array<T>, value: T): Array<T> {
    const index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  private shuffle<T>(array: Array<T>) {
    var currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

}
