PAGES.statusLights = {
    title: "Status Lights",
    desc: "Status indicator charts for all models",
    section: "Guides",
    tags: ["troubleshooting", "programming", "issues", "indicator", "reference"],
    body: /*html*/`
<div class="page-layout">
<div class="contents">
  <h1>Contents</h1>
  <ul>
    <li>
      <a href=>Section</a>
      <ul>
        <li>Subsection</li>
        <li>Subsection</li>
      </ul>
    </li>
  </ul>
</div>
<div class="body">
<h1 id="elo-lights">ELO Powerhead LEDs</h1>

<table class="elo-table">
  <thead>
    <tr>
      <th>LEDs</th>
      <th>Possible Problem</th>
      <th>Solution</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="elo-leds" rowspan="2"><span class="sl sl-long sl-off"></span><span class="sl sl-off"></span></td>
      <td>Normal operation.</td>
      <td>None required.</td>
    </tr>
    <tr>
      <td>No response from unit.</td>
      <td>Check power supply. Contact a trained door system professional.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-red"></span><span class="sl sl-red"></span></td>
      <td>Limits NOT set properly.</td>
      <td>Re-program limits, see pages 8-9.</td>
    </tr>
    <tr>
      <td class="elo-leds" rowspan="2"><span class="sl sl-long sl-red sl-flash"></span><span class="sl sl-red sl-flash"></span></td>
      <td>Program error.</td>
      <td>Unplug unit, wait 5 seconds, plug in.</td>
    </tr>
    <tr>
      <td>Component failure.</td>
      <td>Contact a trained door system technician.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-off"></span><span class="sl sl-blue sl-flash"></span></td>
      <td>Remote NOT programmed.</td>
      <td>Program remote, see page 11.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-off"></span><span class="sl sl-purple sl-flash"></span></td>
      <td>Remote NOT programmed.</td>
      <td>Program remote, see page 11.</td>
    </tr>
    <tr>
      <td class="elo-leds" rowspan="2"><span class="sl sl-long sl-off"></span><span class="sl sl-red sl-flash"></span></td>
      <td>Safe-T-Beam® physical obstruction.</td>
      <td>Remote obstruction, recheck unit.</td>
    </tr>
    <tr>
      <td>Safe-T-Beam® signal interference.</td>
      <td>Check alignment of Safe-T-Beam® pair and nearest other Safe-T-Beam® pair, see page 16.</td>
    </tr>
    <tr>
      <td class="elo-leds" rowspan="2"><span class="sl sl-long sl-red sl-flash"></span><span class="sl sl-off"></span></td>
      <td>Door contact in UP or DOWN travel.</td>
      <td>Remove obstruction.</td>
    </tr>
    <tr>
      <td>Door component failure detected.</td>
      <td>Check door spring, track, rollers, hinges and fixtures.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-red"></span><span class="sl sl-off"></span></td>
      <td>Thermal cutout.</td>
      <td>DO NOT unplug unit. Wait until LED clears before operating.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-purple"></span><span class="sl sl-purple"></span></td>
      <td>Component error.</td>
      <td>Contact a trained door system technician.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-blue sl-flash"></span><span class="sl sl-off"></span></td>
      <td>Door will not open.</td>
      <td>Check Sure-Lock™. Sure-Lock™ should be OFF for normal operation (see page 6).</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-purple sl-flash"></span><span class="sl sl-purple sl-flash"></span></td>
      <td>Radio receiver error.</td>
      <td>Unplug the unit. Wait 5 seconds and plug the unit back in. If problems persist, contact a trained door system technician.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-green"></span><span class="sl sl-green"></span></td>
      <td>OK=Charged, Battery Backup</td>
      <td>None required.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-green sl-flash"></span><span class="sl sl-green sl-flash"></span></td>
      <td>Discharging, Battery Backup</td>
      <td>Power is out. Battery in use.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-yellow sl-flash"></span><span class="sl sl-yellow sl-flash"></span></td>
      <td>Charging, Battery Backup</td>
      <td>None required.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-flash-rty"></span><span class="sl sl-flash-rty"></span></td>
      <td>Dead Battery, Battery Backup</td>
      <td>Allow to charge 48 hours. If charging fails, replace battery.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-white"></span><span class="sl sl-white"></span></td>
      <td>Battery Backup in Operation</td>
      <td>No fault. Courtesy light while in battery backup mode. Light will turn off after 4 minutes.</td>
    </tr>
  </tbody>
</table>

</div>
    `
};
