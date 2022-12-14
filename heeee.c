//how to write number palindrome ?          

int wordLength = strlen(StrWord);
for (int i=0;i<(wordLength/2);i++) {
    if (StrWord[i] != StrWord[wordLength-i-1]) {
        return 0;
    }
}

return 1;

