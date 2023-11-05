#! /usr/bin/python3

from random import random, randrange

def find_file_length(file):
    length = 0
    for _, _ in enumerate(file):
        length = length + 1
    file.seek(0)
    return length

def generate_word_query(word_file, file_len, num_of_words):
    selected_lines = []
    selected_words = ""
    current_line = 0

    for _ in range(num_of_words):
        selected_lines.append(randrange(0, file_len))

    selected_lines.sort()

    word_file.seek(0)
    for line_num in selected_lines:
        while current_line < line_num:
            word_file.readline()
            current_line = current_line + 1
        word = word_file.readline().rstrip()
        if '\'' in word:
            word = word.replace('\'', '')
        selected_words += f"{word} "
        current_line = current_line + 1

    return selected_words.rstrip()
