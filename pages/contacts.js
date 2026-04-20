PAGES.contacts = {
    title: "Contacts",
    desc: "Commonly needed phone numbers, addresses, and websites",
    section: "Reference",
    tags: ["contacts"],
    body: /*html*/ `
    <style>
      .contacts-table td { text-align: left; }
      .contacts-table td:nth-child(2),
      .contacts-table td:nth-child(4),
      .contacts-table td:last-child { text-align: right; font-family: Consolas, monospace; }
      .contacts-table-6col td:nth-child(2), .contacts-table-6col td:nth-child(4) { padding-right: 2rem; }
      .contacts-table-6col tr:hover td { background: var(--bg); }
      .contacts-table-6col td:empty { border: none; background: var(--bg) !important; }
      .contacts-table tr:has(td:nth-child(1):hover) td:nth-child(1),
      .contacts-table tr:has(td:nth-child(1):hover) td:nth-child(2),
      .contacts-table tr:has(td:nth-child(2):hover) td:nth-child(1),
      .contacts-table tr:has(td:nth-child(2):hover) td:nth-child(2) { background: rgba(128,128,128,0.15); }
      .contacts-table-6col tr:has(td:nth-child(3):hover) td:nth-child(3),
      .contacts-table-6col tr:has(td:nth-child(3):hover) td:nth-child(4),
      .contacts-table-6col tr:has(td:nth-child(4):hover) td:nth-child(3),
      .contacts-table-6col tr:has(td:nth-child(4):hover) td:nth-child(4) { background: rgba(128,128,128,0.15); }
      .contacts-table-6col tr:has(td:nth-child(5):hover) td:nth-child(5),
      .contacts-table-6col tr:has(td:nth-child(5):hover) td:nth-child(6),
      .contacts-table-6col tr:has(td:nth-child(6):hover) td:nth-child(5),
      .contacts-table-6col tr:has(td:nth-child(6):hover) td:nth-child(6) { background: rgba(128,128,128,0.15); }
    </style>
    <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div style="display: flex; gap: 1rem; align-items: flex-start; justify-content: center;">
    <table border="0" class="contacts-table" style="width: auto; table-layout: auto;">
            <colgroup>
              <col style="min-width: 210px; text-align: left;">
              <col style="width: 145px;">
            </colgroup>
        <tr><th colspan="2">Consumer</th></tr>
<tr><td>James Bush</td><td>1432</td></tr>
<tr><td>Molly Rodgers</td><td>1434</td></tr>
<tr><td>Samuel Heskett</td><td>1420</td></tr>
<tr><td>Miriam Miller</td><td>1438</td></tr>
<tr><td>Jadzia Eddy</td><td>1411</td></tr>
<tr><td>Gail Keller</td><td>1484</td></tr>
<tr><td>Michael Rose</td><td>1435</td></tr>
<tr><td>Jeffrey Schaefer</td><td>1428</td></tr>
<tr><td>Olivia Shiver</td><td>1471</td></tr>
<tr><td>Crystal Young</td><td>1445</td></tr>
</table>
 <table border="0" class="contacts-table" style="width: auto; table-layout: auto;">
            <colgroup>
              <col style="min-width: 210px; text-align: left;">
              <col style="width: 145px;">
            </colgroup>
<tr><th colspan="2">Dealer</th></tr>
<tr><td>Sunny Zickefoose</td><td>1499</td></tr>
<tr><td>Nicole Hartman</td><td>1473</td></tr>
<tr><td>Claudia Cruz</td><td>1442</td></tr>
<tr><td>Courtney Fry</td><td>1463</td></tr>
<tr><td>Frances Sullivan</td><td>1447</td></tr>
<tr><td>Patricia Wood</td><td>1406</td></tr>
</table>
 <table border="0" class="contacts-table" style="width: auto; table-layout: auto;">
            <colgroup>
              <col style="min-width: 210px; text-align: left;">
              <col style="width: 145px;">
            </colgroup>
<tr><th colspan="2">Technical</th></tr>
<tr><td>Ronald Mong</td><td>1431</td></tr>
<tr><td>Florence Diodati</td><td>1437</td></tr>
<tr><td>Tammy Sexton</td><td>1441</td></tr>
<tr><td>Garrett Howell</td><td>1455</td></tr>
<tr><td>Christy Link</td><td>1439</td></tr>
<tr><td>Leslie Miller</td><td>1472</td></tr>
<tr><td>Kayla Keim</td><td>8388</td></tr>
<tr><td>Nate Crine</td><td>1464</td></tr>
<tr><td>Garry Keppel</td><td>1451</td></tr>
<tr><td>Amanda Lockewood</td><td>1452</td></tr>
<tr><td>John Salley</td><td>1454</td></tr>
</table>
    </div>
    <div style="display: flex; gap: 1rem; align-items: flex-start; justify-content: center;">
    <table border="0" class="contacts-table" style="width: auto; table-layout: auto;">
            <colgroup>
              <col style="min-width: 210px; text-align: left;">
              <col style="width: 145px;">
            </colgroup>
            <tr><th colspan="2">Internal</th></tr>
            <tr>
                <td>Consumer line</td>
                <td>(800) 354-3643</td>
            </tr>
            <tr>
                <td>Dealer line</td>
                <td>(800) 843-4084 #2</td>
            </tr>
            <tr>
                <td>Resi tech</td>
                <td>(800) 843-4084 #3</td>
            </tr>
            <tr>
                <td>Commercial tech</td>
                <td>(800) 843-4084 #4</td>
            </tr>
            <tr>
                <td><b>Aladdin Connect</b></td>
                <td><b>(866) 599-4995</b></td>
            </tr>
            <tr>
                <td>Lewisville</td>
                <td>(800) 275-3290</td>
            </tr>
            <tr>
                <td>OHD Anywhere</td>
                <td>(888) 901-2750</td>
            </tr>
            <tr>
                <td>Wayne Dalton CS</td>
                <td>(800) 827-3667</td>
            </tr>
            <tr>
                <td>Wayne Dalton CS (direct)</td>
                <td>(800) 764-1457</td>
            </tr>
            <tr>
                <td>F&I: Emilee Cooper</td>
                <td>(927) 829-3967</td>
            </tr>
            <tr class="fi-group">
                <td rowspan="3" class="fi-label">F&I</td>
                <td>(800) 784-0624</td>
            </tr>
            <tr class="fi-group">
                <td>(800) 784-6964</td>
            </tr>
            <tr class="fi-group">
                <td>(855) 471-4231</td>
            </tr>
        </table>
    <table border="0" class="contacts-table contacts-table-6col" style="width: auto; table-layout: auto;">
            <colgroup>
              <col style="min-width: 210px;"><col style="width: 145px;">
              <col style="min-width: 210px;"><col style="width: 145px;">
              <col style="min-width: 210px;"><col style="width: 145px;">
            </colgroup>
            <tr><th colspan="6">External</th></tr>
            <tr><td>Amazon Customer Service</td><td>(888) 280-4331</td><td>Hearing Genie</td><td>(844) 469-3277</td><td>Refill Genie</td><td>(929) 274-3052</td></tr>
            <tr><td>Cat Genie</td><td>(888) 735-3927</td><td>Hearth and Home Tech</td><td>(800) 669-4328</td><td>Raynor Manufacturing</td><td>(815) 288-1431</td></tr>
            <tr><td><b>Chamberlain</b></td><td><b>(800) 323-2276</b></td><td><b>Homelink</b></td><td><b>(800) 355-3515</b></td><td>Skylink Technologies</td><td>(800) 304-1187</td></tr>
            <tr><td>Clopay Door Products</td><td>(800) 225-6729</td><td>Linear</td><td>(800) 543-4283</td><td>Vee Industries</td><td>(800) 327-3332</td></tr>
            <tr><td><b>Liftmaster</b></td><td><b>(800) 528-9131</b></td><td>Marantec</td><td>(888) 622-2489</td><td>Windsor Door Corp</td><td>(501) 562-1872</td></tr>
            <tr><td>DD Bioscience</td><td>(800) 286-1313</td><td>Martin Door Manufacturing</td><td>(801) 973-9310</td><td>Wyze Camera</td><td>(206) 339-9646</td></tr>
            <tr><td>Delden Manufacturing</td><td>(314) 225-5356</td><td>McKenney Electronics</td><td>(800) 275-6187</td><td>UPS Standard</td><td>(800) 742-5877</td></tr>
            <tr><td>Geeni Door Camera</td><td>(888) 232-3143</td><td>Mighty Mule</td><td>(800) 543-4283</td><td></td><td></td></tr>
            <tr><td>Genie Lifts</td><td>(800) 536-1800</td><td>Multi-Sales (reseller)</td><td>(800) 421-3575</td><td></td><td></td></tr>
            <tr><td>Guardian</td><td>(972) 449-0484</td><td>Norm's Roter Service</td><td>(301) 874-5885</td><td></td><td></td></tr>
            <tr><td>Grainger</td><td>(216) 398-1880</td><td>Nortek</td><td>(800) 333-1717</td><td></td><td></td></tr>
            <tr><td>Ink Genie</td><td>(973) 531-6288</td><td>Phillips/Norelco</td><td>(800) 243-7884</td><td></td><td></td></tr>
            <tr><td>John Greene Corp</td><td>(800) 323-3674</td><td>Playtex</td><td>(800) 843-6430</td><td></td><td></td></tr>
        </table>
    </div>
    </div>
    `,
};
