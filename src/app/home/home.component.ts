import { Component, HostListener } from '@angular/core';
import { WordsService } from '../services/words.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  keyPressCount: number = 0;
  word: string = '';
  matchedLetters: Set<string> = new Set();
  guessedLetters: Set<string> = new Set();
  hasLost: boolean = false;
  hasWon: boolean = false;

  constructor(private wordsService: WordsService) {}

  ngOnInit(){
    this.word = this.wordsService.getWord();
  }
  
  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent){
    const key = event.key.toLowerCase();
    if (this.hasLost || this.hasWon) {
      if (key === 'enter') {
        this.restartGame();
      }
      return; // Ignore all other keys after loss or win
    }
    if(this.word.includes(key)){
      this.matchedLetters.add(key);
    }
    else if(!this.guessedLetters.has(key)){
        this.keyPressCount++;
        this.guessedLetters.add(key);
    }
    if(this.keyPressCount >= 10){
      this.hasLost = true;
    }

    const uniqueLettersInWord = new Set(this.word.split(''));
    const isWin = [...uniqueLettersInWord].every(letter =>
      this.matchedLetters.has(letter)
    );
    if (isWin) {
      this.hasWon = true;
    }
    
  }
  restartGame() {
    this.keyPressCount = 0;
    this.word = this.wordsService.getWord();
    this.matchedLetters.clear();
    this.guessedLetters.clear();
    this.hasLost = false;
    this.hasWon = false;
  }
  isLetterMatched(letter: string): boolean {
    return this.matchedLetters.has(letter);
  }

  get currentWordLetters(): string[] {
    return this.word.split('');
  }
}
