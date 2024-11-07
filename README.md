<h1>Ritunar Æfing</h1>
Þetta verkefni er einfaldur leikur fyrir fingraskrift, búinn til með HTML, CSS og JavaScript, sem notar Keyboard API.

<h2>Yfirlit</h2>
Leikurinn birtir "random" orð á skjánum, og notandinn þarf að skrifa orðin rétt í textareitinn. Notandinn fær stig fyrir hvert rétt skrifað orð. Leikurinn endurnýjar orðin sjálfkrafa og birtir nýtt orð eftir hvert rétt svar. Til er endurstillingarhnappur sem núllstillir stigin og byrjar leikinn upp á nýtt.

<h2>Uppsetning VITE</h2>
Fyrst þarð að búa til VITE project <br>
<code>npm create vite@latest</code> <br>
<br>
Það þarf að fara í gegnum uppsetningu VITE sem segir sig sjálft.

Keyra þarf svo:

<code>npm install</code> <br>
<code>npm run dev</code>


<h2>Hvernig API-ið er notað</h2>
Verkefnið notar <b>Keyboard API</b> með tveimur meginhlutverkum:

1. Keyboard layout mapping
2. Keyboard locking
   
<h3>Keyboard layout mapping</h3>
Notað er <code>getLayoutMap()</code> frá <code>navigator.keyboard</code> til að sækja <b>KeyboardLayoutMap</b>. Þessi kortlagning gerir forritinu kleift að skilja hvaða stafir eru tengdir ákveðnum líkamlegum lyklum á lyklaborðinu, miðað við núverandi tungumálastillingu og lyklaborðsuppsetningu notanda.

Kóðinn sem sýnir þetta:<br> 

<code>let keyboardLayoutMap;
if (navigator.keyboard) {
  try {
    keyboardLayoutMap = await navigator.keyboard.getLayoutMap();
    console.log("Keyboard Layout Map sótt.");
  } catch (error) {
    console.error("Mistókst að sækja lyklaborðskortlagningu:", error);
  }
}</code> <br>
Í input event listernum er notast við <code>keyboardLayoutMap.get(event.inputType);</code> til að fá stafinn sem samsvarar ákveðnum lykli, sem er prentað út til viðmiðunar. Þetta er sérstaklega gagnlegt til að fylgjast með réttu inntaki á mismunandi lyklaborðsstillingum.

<h3>Keyboard locking</h3>
Til að gera leikinn samfelldari og koma í veg fyrir að sérstakir lyklar trufli skrifin er <code>navigator.keyboard.lock()</code> notað til að læsa ákveðnum lyklum, eins og "Tab" og "Escape". Þetta tryggir að leikurinn heldur áfram á textareitnum og kemur í veg fyrir að þessir lyklar framkvæmi sjálfgefin skipanir í vafranum.

Kóði sem sýnir læsingu lyklanna:

<code>if (navigator.keyboard && navigator.keyboard.lock) {
  try {
    await navigator.keyboard.lock(["Tab", "Escape"]);
    console.log("Tab og Escape lyklar læstir til að koma í veg fyrir truflanir.");
  } catch (error) {
    console.error("Mistókst að læsa lyklum:", error);
  }
}</code> <br>

<h2>Hvernig á að keyra leikinn</h2>
1. Klónaðu verkefnið af GitHub eða nota bara vefsíðuna á Netlify.<br>
2. Setja upp Vite til að keyra þróunarþjóninn:<br>
  <code>npm install</code><br>
  <code>npm run dev</code>


<h2>Niðurstöður</h2>
Þetta verkefni var gert til að sýna notkun á JavaScript og Keyboard API í einföldum stafa leik.
