# WHATIF INSURANCE — Redesign Cinematic & Fotografic

**Ce se întâmplă dacă…? Descoperă ce se poate întâmpla. Află ce te poate proteja.**

Platformă interactivă dedicată riscurilor cotidiene, transformată vizual într-o experiență cinematică, editorială și local-first, cu imagini fotografice reale de impact.

---

## 1. Noua Paletă de Brand Aprobată

| Cod Hex | Semnificație Vizuală |
|---|---|
| `#06141B` | Fundal principal, navy profund cinematic |
| `#11212D` | Suprafețe secundare, navigație și secțiuni stratificate |
| `#253745` | Carduri, panouri și suprafețe elevate |
| `#4A5C6A` | Elemente secundare, delimitări și adâncime restrânsă |
| `#9BA8AB` | Tipografie atenuată, subtitluri și iconografie fină |
| `#CCDDCF` | Text principal luminos, evidențieri și contrast plăcut |
| `#2A2A2A` | Suprafețe neutre întunecate |
| `#C0C0C0` | Accente metalice de argint, linii fine și detalii premium |
| `#E10600` | Accent controlat pentru risc financiar și avertizare |

---

## 2. Inventar de Imagini Fotografice Reale (Public Assets)

Toate scenariile dispun de fotografii reale dedicate, optimizate local în `public/images/`:

- **Hero Showroom**: `public/images/hero/hero-villa.jpg` (Vilă arhitecturală de lux la amurg sub furtună)
- **Casă — Țeavă spartă**: `public/images/scenarios/pipe-burst.jpg` (Parchet stratificat inundat și nișă sanitară spartă)
- **Casă — Daune vecini**: `public/images/scenarios/neighbor-flood.jpg` (Apă infiltrată prin tavan peste comodă de lemn)
- **Casă — Furt locuință**: `public/images/scenarios/burglary.jpg` (Ușă cu yală forțată mecanic prin efracție)
- **Casă — Furtună acoperiș**: `public/images/scenarios/storm-roof.jpg` (Acoperiș rezidențial avariat de vânt extrem)
- **Auto — Tamponare în trafic**: `public/images/scenarios/car-crash.jpg` (Coliziune urbană față-spate cu stop spart)
- **Auto — Grindină**: `public/images/scenarios/hail-damage.jpg` (Caroserie și parbriz lovite de grindină mare)
- **Auto — Apă la motor**: `public/images/scenarios/water-engine.jpg` (Mașină surprinsă în pasaj inundat de viitură)
- **Călătorii — Urgență medicală**: `public/images/scenarios/travel-medical.jpg` (Cameră spitalicească modernă peste hotare)
- **Business — Atac cibernetic**: `public/images/scenarios/cyber-attack.jpg` (Ecrane cu avertisment ransomware în sediu office)
- **Animale — Daune mobilier**: `public/images/scenarios/pet-damage.jpg` (Câine în living lângă mobilier degradat)
- **Răspundere — Cădere balcon**: `public/images/scenarios/balcony-fall.jpg` (Fațadă de bloc cu balcoane și incident)
- **Bunuri — Supratensiune**: `public/images/scenarios/power-surge.jpg` (Descărcare electrică / rețea afectată de trăsnet)

---

## 3. Comenzi Locale de Rulare

```bash
# Director proiect
cd "/Users/cristianvaduva/Projects/WHATIF INSURANCE"

# Pornire server local
npm run dev -- -p 3005

# Sau pornire versiune de producție
npm run build && npm run start -- -p 3005
```

Accesează aplicația în browser: [http://localhost:3005](http://localhost:3005)
