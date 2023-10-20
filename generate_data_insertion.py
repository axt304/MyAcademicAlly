#! /usr/bin/python3

from handle_args import *
from generate_data import *
import argparse

seq = 1

def main(args):
    file_handlers = []
    file_lens = []
    for count, file_name in enumerate(args.file):
        if file_name == 'z':
            file_handlers.append('integer')
            file_lens.append(args.num[count])
            continue
        elif file_name == 'r':
            file_handlers.append('real')
            file_lens.append(args.num[count])
            continue
        elif file_name == 'd':
            file_handlers.append('date')
            file_lens.append(0)
            continue
        elif file_name == 'b':
            file_handlers.append('boolean')
            file_lens.append(0)
            continue
        elif file_name == 's':
            file_handlers.append('sequential')
            file_lens.append(0)
            continue
        fh = None
        for i in range(count):
            if file_name == args.file[i]:
                fh = file_handlers[i]
                break
        if fh == None:
            fh = open(file_name, 'r')
        file_handlers.append(fh)
        file_lens.append(find_file_length(fh))

    header = f'INSERT INTO {args.table_name} ('
    for column_name in args.columns[:-1]:
        header += f'\"{column_name}\", '
    header += f'\"{args.columns[-1]}\") VALUES'

    print(header)

    for _ in range(args.rows - 1):
        print('(', end='')

        for i in range(len(args.columns) - 1):
            print(f'{generate_column(file_handlers[i], file_lens[i], args.num[i])}, ', end='')
        print(f'{generate_column(file_handlers[-1], file_lens[-1], args.num[-1])}),\n', end='')

    print('(', end='')
    for i in range(len(args.columns) - 1):
        print(f'{generate_column(file_handlers[i], file_lens[i], args.num[i])}, ', end='')
    print(f'{generate_column(file_handlers[-1], file_lens[-1], args.num[-1])});\n', end='')

    for fh in file_handlers:
        try:
            fh.close()
        except:
            continue
    return 0

def generate_column(fh, fl, n):
    global seq
    ret = ''
    if fh == 'integer':
        ret = f'\'{randrange(1, fl + 1)}\''
    elif fh == 'real':
        ret = f'\'{random() * fl}\''
    elif fh == 'date':
        ret = f'\'{randrange(1970, 2020)}-{randrange(1, 13)}-{randrange(1, 28)}\''
    elif fh == 'boolean':
        ret = f'\'{randrange(0, 2)}\''
    elif fh == 'sequential':
        ret = f'\'{seq}\''
        seq = seq + 1
    else:
        ret = f'\'{generate_word_query(fh, fl, n)}\''
    return ret

if __name__ == '__main__':
    args = handle_args()
    main(args)
