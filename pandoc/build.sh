#!/usr/bin/env bash
# Usage: bash pandoc/build.sh "docs/My Doc.docx"
# Requires: pandoc

set -e

NAV_ITEMS=(acScrew ngx accessories eloOpp chainGlide pmxLegacy rhine)
NAV_LABELS=("AC/DC Screw" "NGX" "Accessories" "ELO/OPP" "ChainGlide" "PMX/Legacy" "Rhine")

INPUT="${1//\\//}"   # normalize backslashes
if [[ -z "$INPUT" ]]; then
  echo "Usage: bash pandoc/build.sh \"path/to/doc.docx\""
  exit 1
fi

# --- output path ---
DOCNAME="$(basename "$INPUT" .docx)"
DEFAULT_OUT="docs/${DOCNAME}.html"
read -rp "Output HTML [${DEFAULT_OUT}]: " OUTPUT
OUTPUT="${OUTPUT:-$DEFAULT_OUT}"
OUTPUT="${OUTPUT//\\//}"

# --- title ---
read -rp "Page title: " TITLE

# --- tags ---
echo "Tags (comma-separated, or leave blank):"
read -rp "> " TAG_INPUT
TAG_FLAGS=()
if [[ -n "$TAG_INPUT" ]]; then
  IFS=',' read -ra TAGS <<< "$TAG_INPUT"
  for t in "${TAGS[@]}"; do
    t="${t## }"; t="${t%% }"
    TAG_FLAGS+=(--metadata "tags=${t}")
  done
fi

# --- active nav ---
echo ""
echo "Active nav item (leave blank to skip):"
for i in "${!NAV_ITEMS[@]}"; do
  printf "  %d) %s\n" "$((i+1))" "${NAV_LABELS[$i]}"
done
read -rp "> " NAV_CHOICE
NAV_FLAG=()
if [[ -n "$NAV_CHOICE" && "$NAV_CHOICE" =~ ^[0-9]+$ ]]; then
  IDX=$((NAV_CHOICE - 1))
  if [[ $IDX -ge 0 && $IDX -lt ${#NAV_ITEMS[@]} ]]; then
    NAV_FLAG=(--variable "active-${NAV_ITEMS[$IDX]}=true")
  fi
fi

# --- run pandoc ---
OUT_DIR="$(dirname "$OUTPUT")"
mkdir -p "$OUT_DIR"

pandoc "$INPUT" \
  -d pandoc/training.yaml \
  --extract-media "$OUT_DIR" \
  --metadata "title=${TITLE}" \
  "${TAG_FLAGS[@]}" \
  "${NAV_FLAG[@]}" \
  -o "$OUTPUT"

PREFIX="${OUT_DIR}/"
sed -i "s|src=\"${PREFIX}media/|src=\"media/|g" "$OUTPUT"

echo ""
echo "Built: $OUTPUT"
