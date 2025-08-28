import { LowerCasePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordsService {
  private words: string[] = [
    'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'I',
    'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at', 'football',
    'where', 'you', 'pipe', 'module', 'string', 'length', 'banana', 'formula', 
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  ];
  getWords(): string[]{
    return this.words;
  }

  getWord(): string{
    const index = Math.floor(Math.random() * this.words.length);
    return this.words[index].toLowerCase();
  }
}
