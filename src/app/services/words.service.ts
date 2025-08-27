import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordsService {
  private words: string[] = [
    'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'I',
    'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at'
  ];
  getWords(): string[]{
    return this.words;
  }

  getWord(): string{
    const index = Math.floor(Math.random() * this.words.length);
    return this.words[index];
  }
}
