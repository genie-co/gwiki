"""
Reads the (already cleaned) dealer CSV and writes pages/dealers-data.js.

Column indices extracted from CSV:
  0  = Dealer Name
  1  = State
  3  = Oracle/supplier ACCT #  (Account Number)
  4  = ZIP Code
  5  = Phone (labeled '863' in CSV header)
  6  = Fax
  7  = Email
  8  = Service Cost
  10 = Comments / Notes

Output per row: [name, state, acct, zip, phone, fax, email, cost, notes]
"""
import csv
import json
import os

CSV_PATH = os.path.join(os.path.dirname(__file__), "Copy of DEALER LIST 2019.csv")
OUT_PATH = os.path.join(os.path.dirname(__file__), "pages", "dealers-data.js")

COLS = [0, 1, 3, 4, 5, 6, 7, 8, 10]

rows = []
with open(CSV_PATH, newline="", encoding="cp1252") as f:
    reader = csv.reader(f)
    next(reader)  # skip header
    for row in reader:
        while len(row) < 11:
            row.append("")
        dealer_name = row[0].strip()
        if not dealer_name:
            continue
        extracted = [row[i].strip() for i in COLS]
        rows.append(extracted)

js = "const DEALER_DATA = " + json.dumps(rows, ensure_ascii=False) + ";\n"

with open(OUT_PATH, "w", encoding="utf-8") as f:
    f.write(js)

print(f"Done — wrote {len(rows)} dealers to {OUT_PATH}")
