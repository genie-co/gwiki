"""
Cleans 'Copy of DEALER LIST 2019.csv' in place.

Rules:
  - Strip leading/trailing whitespace from all cells
  - Collapse multiple internal spaces in Dealer Name (col 0)
  - Phone (col 5): if contains ' - <note>' pattern, move note to COMMENTS
  - Fax (col 6): 'same/verbal/e-mail/no fax' → '' and note appended to COMMENTS
                 'none/NONE/n/a' → '' (no note, self-explanatory)
  - Email (col 7): 'none/NONE' → ''
  - COMMENTS (col 10): existing text preserved; extracted notes are appended

No data is deleted — just moved into the right column.
"""
import csv, re, os

CSV_PATH = os.path.join(os.path.dirname(__file__), "Copy of DEALER LIST 2019.csv")

FAX_BLANK = {"none", "n/a", "no fax", ""}
FAX_NOTE  = {"same": "Fax same as phone", "verbal": "Fax: verbal only", "e-mail": "Fax: email only"}
EMAIL_BLANK = {"none", "n/a"}

def append_note(existing, note):
    existing = existing.strip()
    note = note.strip()
    if not note:
        return existing
    if existing:
        return existing + "; " + note
    return note

with open(CSV_PATH, newline="", encoding="cp1252") as f:
    rows = list(csv.reader(f))

header = rows[0]
data   = rows[1:]

changed = 0
for row in data:
    # Pad to at least 11 cols (through COMMENTS)
    while len(row) < 11:
        row.append("")

    orig = row[:]

    # 0 Dealer name — collapse whitespace
    row[0] = re.sub(r"[ \t]+", " ", row[0].strip())

    # 1–4 strip whitespace
    for i in [1, 2, 3, 4]:
        row[i] = row[i].strip()

    # 5 Phone — strip; if ' - <text>' pattern, extract note
    phone = row[5].strip()
    if " - " in phone:
        parts = phone.split(" - ", 1)
        phone_part = parts[0].strip()
        note_part  = parts[1].strip()
        row[5] = phone_part
        row[10] = append_note(row[10], f"Phone note: {note_part}")
    else:
        row[5] = phone

    # 6 Fax
    fax = row[6].strip()
    fax_lower = fax.lower()
    if fax_lower in FAX_BLANK:
        row[6] = ""
    elif fax_lower in FAX_NOTE:
        row[10] = append_note(row[10], FAX_NOTE[fax_lower])
        row[6] = ""
    else:
        row[6] = fax  # real fax number — keep as-is

    # 7 Email
    if row[7].strip().lower() in EMAIL_BLANK:
        row[7] = ""
    else:
        row[7] = row[7].strip()

    # 8–9 strip
    for i in [8, 9]:
        row[i] = row[i].strip()

    # 10 COMMENTS strip
    row[10] = row[10].strip()

    if row[:11] != orig[:11]:
        changed += 1

with open(CSV_PATH, "w", newline="", encoding="cp1252") as f:
    writer = csv.writer(f)
    writer.writerow(header)
    writer.writerows(data)

print(f"Done — {changed} rows changed, CSV saved.")
