#! /usr/bin/python3

import argparse
from random import randrange

def handle_args():
    arg_parser = argparse.ArgumentParser()

    # Required Arguments
    arg_parser.add_argument("table_name", help="Name of the table to generate insert queries for.")
    arg_parser.add_argument("columns", help="Name of column(s) to insert the generated data into.", nargs='+')
    #arg_parser.add_argument("-c", "--column", help="Name of column(s) to insert data into", action="append", required=True)

    # Optional Arguments
    arg_parser.add_argument("-r", "--rows", help="Number of data rows to generate.", type=int, default=50)
    arg_parser.add_argument("-f", "--file", help="Path to a word file to read from, 'd' for generating a random number, or 'b' for a boolean.", default=["/usr/share/dict/words"], nargs='+')
    arg_parser.add_argument("-n", "--num", help="Number of words to generate at once, for one query.", type=int, default=[10], nargs='+')
    #arg_parser.add_argument("-o", "--output", help="Output file of generated sql statements.", default="generated_data.sql")

    return sanity_check_args(arg_parser.parse_args())

def sanity_check_args(args):
    if len(args.columns) < len(args.num) or len(args.columns) < len(args.file):
        quit()

    if len(args.columns) > len(args.num):
        num_i = args.num[-1]
        for i in range(len(args.columns) - len(args.num)):
            args.num.append(num_i)

    if len(args.columns) > len(args.file):
        file_i = args.file[-1]
        for i in range(len(args.columns) - len(args.file)):
            args.file.append(file_i)

    return args
