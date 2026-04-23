PAGES.statusLights = {
    title: "Status Lights",
    desc: "Status indicator charts for all models",
    section: "Guides",
    body: /*html*/ `
<div class="page-layout">
<div class="contents">
  <h1>Contents</h1>
  <ul>
    <li><a href="#elo-lights">ELO</a></li>
    <li><a href="#excel-lights">Excelerator</a></li>
    <li><a href="#reliag-lights">OPP</a></li>
    <li><a href="#rhine-lights">Rhine</a></li>
    <li><a href="#wm-lights">Wall Mount</a></li>
    <li><a href="#ngx-lights">NGX</a></li>
    <li><a href="#stb-lights">Safe-T-Beam</a></li>
  </ul>
</div>
<div class="body">
<h2 id="elo-lights">ELO</h2>

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
      <td class="elo-leds"><span class="sl sl-long sl-off"></span><span class="sl sl-off"></span></td>
      <td>Normal operation.</td>
      <td>None required.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-red"></span><span class="sl sl-red"></span></td>
      <td>Limits not set properly.</td>
      <td>Reprogram limits.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-red sl-flash"></span><span class="sl sl-red sl-flash"></span></td>
      <td>Circuit board error.</td>
      <td>Unplug unit, wait 5 seconds, plug in. If issue remains, replace board.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-off"></span><span class="sl sl-blue sl-flash"></span></td>
      <td>Remote not programmed.</td>
      <td>Program remote.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-off"></span><span class="sl sl-purple sl-flash"></span></td>
      <td>Remote not programmed.</td>
      <td>Program remote.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-off"></span><span class="sl sl-red sl-flash"></span></td>
      <td>Safe-T-Beam issue.</td>
      <td>Troubleshoot sensors.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-red sl-flash"></span><span class="sl sl-off"></span></td>
      <td>Door contact in UP or DOWN travel.</td>
      <td>Remove obstruction. If fine, check motor, encoder, installation.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-red"></span><span class="sl sl-off"></span></td>
      <td>Thermal cutout.</td>
      <td>Do not unplug unit. Wait until LED clears before operating.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-purple"></span><span class="sl sl-purple"></span></td>
      <td>Component error.</td>
      <td>Check encoder.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-blue sl-flash"></span><span class="sl sl-off"></span></td>
      <td>Door will not open.</td>
      <td>Check vacation lock.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-purple sl-flash"></span><span class="sl sl-purple sl-flash"></span></td>
      <td>Radio receiver error.</td>
      <td>Unplug unit, wait 5 seconds, plug in. If issue remains, replace board.</td>
    </tr>
    <tr>
      <th colspan=3>Battery Backup</th>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-green"></span><span class="sl sl-green"></span></td>
      <td>Charged</td>
      <td>None required.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-green sl-flash"></span><span class="sl sl-green sl-flash"></span></td>
      <td>Discharging</td>
      <td>Power is out. Battery in use.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-yellow sl-flash"></span><span class="sl sl-yellow sl-flash"></span></td>
      <td>Charging</td>
      <td>None required.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-flash-rty"></span><span class="sl sl-flash-rty"></span></td>
      <td>Dead Battery</td>
      <td>Allow to charge 48 hours. If charging fails, replace battery.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-white"></span><span class="sl sl-white"></span></td>
      <td>Battery Backup in Operation</td>
      <td>Courtesy light while in battery backup mode. Light will turn off after 4 minutes.</td>
    </tr>
  </tbody>
</table>

<h2 id="excel-lights">Excelerator</h2>

<table class="elo-table">
  <thead>
    <tr>
      <th>LED</th>
      <th>Possible Problem</th>
      <th>Solution</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="elo-leds"><span class="sl sl-green sl-flash"></span> <small>×1</small></td>
      <td>Motor Drive Board interrupt.</td>
      <td>Reset opener — unplug, wait 5 seconds, plug in, activate from wall console.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-green sl-flash-2"></span> <small>×2</small></td>
      <td>Controller Board interrupt.</td>
      <td>Reset opener. Check ribbon cable on motor board insertion.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-green sl-flash-3"></span> <small>×3</small></td>
      <td>Opener overheated or over-cycled.</td>
      <td>Do not unplug. Wait 10 minutes for internal clock to restore cycles.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-green sl-flash-4"></span> <small>×4</small></td>
      <td>Force settings incorrect.</td>
      <td>Check force settings. Check door condition.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-green sl-flash"></span> <small>×5</small></td>
      <td>Safe-T-Beam malfunction.</td>
      <td>Check Safe-T-Beam self-diagnostic system. Ensure installed and operational.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-green sl-flash"></span> <small>×6</small></td>
      <td>Wall console does not work.</td>
      <td>Check wall console wiring for shorts, tight staples, pinched wires.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-green sl-flash"></span> <small>×7</small></td>
      <td>Limit switches not working.</td>
      <td>Check limit switch wire connections. Check for shorted or pinched wires.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-green sl-flash"></span> <small>×8</small></td>
      <td>Wall console locked.</td>
      <td>Vacation locking switch is in "Lock" mode. Unlock switch.</td>
    </tr>
  </tbody>
</table>

<h2 id="reliag-lights">OPP</h2>

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
      <td>Check power supply. Contact trained door system technician.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-red"></span><span class="sl sl-red"></span></td>
      <td>Limits not set properly.</td>
      <td>Re-program limits.</td>
    </tr>
    <tr>
      <td class="elo-leds" rowspan="2"><span class="sl sl-long sl-red sl-flash"></span><span class="sl sl-red sl-flash"></span></td>
      <td>Program error.</td>
      <td>Unplug unit, wait 5 seconds, plug in.</td>
    </tr>
    <tr>
      <td>Component failure.</td>
      <td>Contact trained door system technician.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-off"></span><span class="sl sl-blue sl-flash"></span></td>
      <td>Remote not programmed.</td>
      <td>Program remote.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-off"></span><span class="sl sl-purple sl-flash"></span></td>
      <td>Remote not programmed.</td>
      <td>Program remote.</td>
    </tr>
    <tr>
      <td class="elo-leds" rowspan="2"><span class="sl sl-long sl-off"></span><span class="sl sl-red sl-flash"></span></td>
      <td>Safe-T-Beam physical obstruction.</td>
      <td>Remove obstruction, recheck unit.</td>
    </tr>
    <tr>
      <td>Safe-T-Beam signal interference.</td>
      <td>Check alignment of Safe-T-Beam pair.</td>
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
      <td>Contact trained door system technician.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-blue sl-flash"></span><span class="sl sl-off"></span></td>
      <td>Door will not open.</td>
      <td>Check Sure-Lock. Sure-Lock should be OFF for normal operation.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-purple sl-flash"></span><span class="sl sl-purple sl-flash"></span></td>
      <td>Radio receiver error.</td>
      <td>Unplug unit, wait 5 seconds, plug in. If problem persists, contact technician.</td>
    </tr>
  </tbody>
</table>

<h2 id="rhine-lights">Rhine</h2>

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
      <td class="elo-leds"><span class="sl sl-off"></span></td>
      <td>Normal operation.</td>
      <td>None required.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-red"></span></td>
      <td>Programming incomplete.</td>
      <td>Complete programming.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-red sl-flash"></span> <small>×1</small></td>
      <td>Transmitter has not learned.</td>
      <td>Program remote.</td>
    </tr>
    <tr>
      <td class="elo-leds" rowspan="4"><span class="sl sl-green sl-flash"></span> <small>×1</small></td>
      <td>Programming incomplete.</td>
      <td>Set DOWN LIMIT programming.</td>
    </tr>
    <tr>
      <td>Safe-T-Beam detects obstruction going down.</td>
      <td>Check for obstruction, remove.</td>
    </tr>
    <tr>
      <td>Door obstruction going down.</td>
      <td>Check for obstruction, remove. Check door spring.</td>
    </tr>
    <tr>
      <td>Door obstruction going up.</td>
      <td>Contact The Genie Company at 1-800-35-GENIE.</td>
    </tr>
    <tr>
      <td class="elo-leds" rowspan="4"><span class="sl sl-green sl-flash-2"></span> <small>×2</small></td>
      <td>Programming incomplete.</td>
      <td>Set UP LIMIT programming.</td>
    </tr>
    <tr>
      <td>Wire to power head or connection at power head is bad.</td>
      <td>Check power head wiring, check connections. Replace or repair.</td>
    </tr>
    <tr>
      <td>Safe-T-Beam out of alignment.</td>
      <td>Check Safe-T-Beam alignment.</td>
    </tr>
    <tr>
      <td>Continuous obstruction of Safe-T-Beam sensor.</td>
      <td>Check for obstruction.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-green sl-flash-3"></span> <small>×3</small></td>
      <td>Limits set backwards.</td>
      <td>Clear limits and reprogram.</td>
    </tr>
    <tr>
      <td class="elo-leds" rowspan="2"><span class="sl sl-green sl-flash-4"></span> <small>×4</small></td>
      <td>Wall console wire short.</td>
      <td>Check wall console and wiring. Staples can cut insulation; repair or replace.</td>
    </tr>
    <tr>
      <td>Wall console wires reversed in power head connector.</td>
      <td>Reverse wire placement in power head connector.</td>
    </tr>
    <tr>
      <td class="elo-leds" rowspan="3"><span class="sl sl-green sl-flash"></span> <small>×5</small></td>
      <td>Chain/belt is too tight.</td>
      <td>Adjust chain/belt tension.</td>
    </tr>
    <tr>
      <td>Control system failure.</td>
      <td>Contact Genie authorized dealer for service.</td>
    </tr>
    <tr>
      <td>Thermal protector activated.</td>
      <td>Wait until thermal protector cools and resets. Pattern remains until next opener activation.</td>
    </tr>
  </tbody>
</table>

<h2 id="wm-lights">Wall Mount</h2>

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
      <td>Check power supply. Contact trained door system technician.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-red"></span><span class="sl sl-red"></span></td>
      <td>Limits not set properly.</td>
      <td>Re-program limits.</td>
    </tr>
    <tr>
      <td class="elo-leds" rowspan="2"><span class="sl sl-long sl-red sl-flash"></span><span class="sl sl-red sl-flash"></span></td>
      <td>Program error.</td>
      <td>Unplug unit, wait 5 seconds, plug in.</td>
    </tr>
    <tr>
      <td>Component failure.</td>
      <td>Contact trained door system technician.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-off"></span><span class="sl sl-blue sl-flash"></span></td>
      <td>Remote not programmed.</td>
      <td>Program remote.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-off"></span><span class="sl sl-purple sl-flash"></span></td>
      <td>Remote not programmed.</td>
      <td>Program remote.</td>
    </tr>
    <tr>
      <td class="elo-leds" rowspan="3"><span class="sl sl-long sl-off"></span><span class="sl sl-red sl-flash"></span></td>
      <td>Safe-T-Beam physical obstruction.</td>
      <td>Remove obstruction, recheck unit.</td>
    </tr>
    <tr>
      <td>Safe-T-Beam signal interference.</td>
      <td>Check alignment of Safe-T-Beam pair.</td>
    </tr>
    <tr>
      <td>Interlock open.</td>
      <td>Check for missing wire from interlock terminal. Inspect interlock.</td>
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
      <td>Contact trained door system technician.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-blue sl-flash"></span><span class="sl sl-off"></span></td>
      <td>Door will not open.</td>
      <td>Check Sure-Lock. Sure-Lock should be OFF for normal operation.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-purple sl-flash"></span><span class="sl sl-purple sl-flash"></span></td>
      <td>Radio receiver error.</td>
      <td>Unplug unit, wait 5 seconds, plug in. If problem persists, contact technician.</td>
    </tr>
    <tr>
      <th colspan=3>Battery Backup</th>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-green"></span><span class="sl sl-green"></span></td>
      <td>Charged</td>
      <td>None required.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-green sl-flash"></span><span class="sl sl-green sl-flash"></span></td>
      <td>Discharging</td>
      <td>Power is out. Battery in use.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-yellow sl-flash"></span><span class="sl sl-yellow sl-flash"></span></td>
      <td>Charging</td>
      <td>None required.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-flash-rty"></span><span class="sl sl-flash-rty"></span></td>
      <td>Dead Battery</td>
      <td>Replace battery.</td>
    </tr>
  </tbody>
</table>

<h2 id="ngx-lights">NGX</h2>

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
      <td>Check power supply. Contact trained door system professional.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-red"></span><span class="sl sl-red"></span></td>
      <td>Limits not set properly.</td>
      <td>Re-program limits.</td>
    </tr>
    <tr>
      <td class="elo-leds" rowspan="2"><span class="sl sl-long sl-red sl-flash"></span><span class="sl sl-red sl-flash"></span></td>
      <td>Program error.</td>
      <td>Unplug unit, wait 5 seconds, plug in.</td>
    </tr>
    <tr>
      <td>Component failure.</td>
      <td>Contact trained door system technician.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-off"></span><span class="sl sl-blue sl-flash"></span></td>
      <td>Remote not programmed.</td>
      <td>Program remote.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-off"></span><span class="sl sl-purple sl-flash"></span></td>
      <td>Remote not programmed.</td>
      <td>Program remote.</td>
    </tr>
    <tr>
      <td class="elo-leds" rowspan="2"><span class="sl sl-long sl-off"></span><span class="sl sl-red sl-flash"></span></td>
      <td>Safe-T-Beam physical obstruction.</td>
      <td>Remove obstruction, recheck unit.</td>
    </tr>
    <tr>
      <td>Safe-T-Beam signal interference.</td>
      <td>Check alignment of Safe-T-Beam pair.</td>
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
      <td>Contact trained door system technician.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-blue sl-flash"></span><span class="sl sl-off"></span></td>
      <td>Door will not open.</td>
      <td>Check Sure-Lock. Sure-Lock should be OFF for normal operation.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-long sl-purple sl-flash"></span><span class="sl sl-purple sl-flash"></span></td>
      <td>Radio receiver error.</td>
      <td>Unplug unit, wait 5 seconds, plug in. If problem persists, contact technician.</td>
    </tr>
  </tbody>
</table>

<h2 id="stb-lights">Safe-T-Beam</h2>

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
      <td class="elo-leds"><span class="sl sl-red"></span><span class="sl sl-green"></span></td>
      <td>Normal operation.</td>
      <td>None required.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-off"></span><span class="sl sl-off"></span></td>
      <td>Power head not powered; wiring from power head bad.</td>
      <td>Check breakers, fuses, plugs. Check wiring for obvious shorts.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-off"></span><span class="sl sl-green"></span></td>
      <td>Wiring to source missing or bad; power interrupted.</td>
      <td>Check wiring. Remove power and reapply.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-red sl-flash-2"></span><span class="sl sl-green"></span></td>
      <td>Beam not aligned; beam obstructed; sensor defective.</td>
      <td>Check source/sensor alignment. Check for obstruction. Contact customer service.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-red sl-flash-2"></span><span class="sl sl-off"></span></td>
      <td>Wire to sensor missing or bad; sensor defective.</td>
      <td>Check wiring. Contact customer service.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-red sl-flash-3"></span><span class="sl sl-green"></span></td>
      <td>Sensor receiving interference.</td>
      <td>Determine source of interference. Check for sunlight or nearby opener. Contact customer service.</td>
    </tr>
    <tr>
      <td class="elo-leds"><span class="sl sl-red sl-flash-4"></span><span class="sl sl-green"></span></td>
      <td>Source not sending pulses; source defective.</td>
      <td>Contact customer service.</td>
    </tr>
  </tbody>
</table>

</div>
    `
};
