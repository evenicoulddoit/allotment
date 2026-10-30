import type { PlantCard } from './types'

/** Wedding flowers, second third: hardy annuals. */
export const WEDDING_B: PlantCard[] = [
  {
    id: 'larkspur',
    group: 'wedding',
    name: 'Larkspur',
    title: "Larkspur 'Pretty Pink' (suggest 30 plants)",
    verdict: 'warn',
    verdictNote: 'starts late May',
    rows: {
      glance:
        'Borderline: autumn-sown larkspur starts around late May. Hardy annual. Toxic. Not perennial.',
      sow: '29 Oct–15 Nov in cell trays, 5 mm deep, kept cool and dark (10–15 °C). Germinates in 2–3 weeks.',
      potup:
        'Not applicable (direct sown, or module or bought plant straight to its final place).',
      pinch:
        'Optional: pinch once at 15 cm in March for 4–6 stems per plant, though the main spike is smaller.',
      plantout: 'Mid-March, 20–25 cm apart. Sun, fertile soil.',
      support: 'Two layers of netting at 50 cm and 90 cm. Stems reach 90–120 cm.',
      protect: 'Slug patrol. Mesh against pigeons while small.',
      pair: 'Orlaya, nigella, cornflower, clarkia.',
      avoid: 'Salad beds (all parts are toxic). Wear gloves.',
      backup:
        'Spring sowing misses the wedding. Instead buy 20 plugs in March, and plant them behind the autumn batch.',
      harvestWhen: 'From about 25 May. Cut when one-third of the spike is open.',
      harvestHow:
        'Early morning, long stems, plunge in water. Keep away from fruit (flowers drop). Vase 5–7 days.',
      stems: '1–2 per plant at the start of flowering. About 60 from 30 plants (range 30–110).',
    },
  },
  {
    id: 'clarkia',
    group: 'wedding',
    name: 'Clarkia',
    title: "Clarkia 'May Blossom' (suggest 40 plants)",
    verdict: 'warn',
    verdictNote: 'starts late May',
    rows: {
      glance: 'Borderline: starts late May. Hardy annual. Not perennial.',
      sow: '29 Oct–15 Nov, surface-sow in modules, barely cover. Germinates in 10–15 days.',
      potup:
        'Not applicable (direct sown, or module or bought plant straight to its final place).',
      pinch: 'At 10–15 cm in March, pinch to 3 pairs of leaves for branching.',
      plantout:
        'Mid-March, 20 cm apart. Sun, poor to average soil (rich soil makes leaves, not flowers).',
      support: 'One layer of netting at 40 cm.',
      protect: 'Hardy to −5 °C. Slug patrol.',
      pair: 'Larkspur, nigella, cornflower.',
      avoid: 'Over-fed ground.',
      backup:
        'A February sowing in the frame flowers in June–July for later use. Buy plugs in April as a rescue.',
      harvestWhen:
        'About 25 May to mid-July, when the lower 3–4 flowers on a stem are open.',
      harvestHow: 'Strip leaves, re-cut, cool water. Vase 5–7 days.',
      stems: '2–4 per plant. About 120 from 40 plants (range 30–200).',
    },
  },
  {
    id: 'orlaya',
    group: 'wedding',
    name: 'Orlaya',
    title: 'Orlaya grandiflora (suggest 40 plants)',
    verdict: 'ok',
    rows: {
      glance: 'On track. Hardy annual, carrot family. Not perennial.',
      sow: '29 Oct–15 Nov in modules, 5 mm deep. Germinates in 2–3 weeks. Seed is spiny and clings, so sow carefully.',
      potup:
        'Not applicable (direct sown, or module or bought plant straight to its final place).',
      pinch: 'At 10 cm pinch the tip for branching.',
      plantout: 'Mid-March, 25 cm apart. Sun, free-draining.',
      support: 'One layer of netting at 40 cm.',
      protect: 'Hardy. Slug patrol. Mesh against pigeons.',
      pair: 'Larkspur, sweet peas, cornflower.',
      avoid: 'The carrot bed, as a precaution.',
      backup: 'February sowing in the frame.',
      harvestWhen: 'About 15 May to end of June, when half of the florets are open.',
      harvestHow: 'Cut long, strip lower leaves. Vase 5–7 days.',
      stems: '4–6 per plant. About 200 from 40 plants (range 100–320).',
    },
  },
  {
    id: 'nigella',
    group: 'wedding',
    name: 'Nigella',
    title: "Nigella 'Persian Jewels' (suggest 40 plants)",
    verdict: 'ok',
    rows: {
      glance: 'On track. Hardy annual, buttercup family. Not perennial.',
      sow: '29 Oct–15 Nov in deep root trainers (it hates root disturbance), 5 mm deep. Overflow: sow direct in the bed under mesh.',
      potup:
        'Not applicable (direct sown, or module or bought plant straight to its final place).',
      pinch: 'Optional at 10 cm for more branches.',
      plantout: 'Mid-March, 20 cm apart. Sun.',
      support: 'One layer of netting at 30 cm.',
      protect: 'Hardy. Slug patrol.',
      pair: 'Everything: it attracts hoverflies. Plant near brassicas and sweet peas.',
      avoid: 'Nothing specific.',
      backup: 'Sow direct in March for June flowers and seed pods.',
      harvestWhen:
        'About 15 May to July, when the first flower opens. Seedpods last for weeks.',
      harvestHow:
        'Cut long, re-cut, cool water. Vase 4–5 days for flowers, weeks for pods.',
      stems: '3 per plant. About 120 from 40 plants (range 60–200).',
    },
  },
  {
    id: 'cornflower',
    group: 'wedding',
    name: 'Cornflower',
    title: 'Cornflower (suggest 60 plants)',
    verdict: 'ok',
    rows: {
      glance:
        'Worth including: autumn-sown plants flower from mid-May. Hardy annual. Not perennial.',
      sow: '29 Oct–15 Nov, 3 seeds per module cell, 5 mm deep. Germinates in 7–10 days.',
      potup:
        'Not applicable (direct sown, or module or bought plant straight to its final place).',
      pinch: 'Yes. At 15 cm (3 pairs of leaves) pinch the tip for 4–6 stems per plant.',
      plantout: 'Mid-March, 20–25 cm apart. Sun, poor soil is fine.',
      support: 'One layer of netting at 40–50 cm.',
      protect: 'Hardy to −10 °C. Slug patrol. Mesh against pigeons while small.',
      pair: 'Poppies, larkspur, nigella, orlaya.',
      avoid: 'Nothing specific. Do not feed.',
      backup:
        'February sowing flowers in June, so not for the wedding but fine for later.',
      harvestWhen: 'From about 15 May to July, when half of the flower is open.',
      harvestHow: 'Strip lower leaves, cool water. Vase 5–7 days.',
      stems: '3–6 per plant. About 240 from 60 plants (range 120–400).',
    },
  },
  {
    id: 'poppy-bridal',
    group: 'wedding',
    name: 'Poppy, Bridal Silk',
    title: "Poppy 'Bridal Silk' (Papaver somniferum, suggest 30 plants)",
    verdict: 'warn',
    verdictNote: 'late May to June',
    rows: {
      glance: 'Borderline: late May to June. Hardy annual. Not perennial.',
      sow: '29 Oct–15 Nov. Sow into deep root trainers in the frame (one tray in the ledger), mixing seed with fine sand. It resents root disturbance, so handle the roots gently when planting out.',
      potup:
        'Not applicable (direct sown, or module or bought plant straight to its final place).',
      pinch: 'None.',
      plantout:
        'Harden off 5–14 March, plant out 15–25 March into bed 1 at 20–25 cm. Sun.',
      support: 'Netting at 60 cm.',
      protect: 'Mesh over the bed (mice eat the seed). Slug patrol.',
      pair: 'Nigella, cornflower, larkspur.',
      avoid: 'Fresh manure.',
      backup:
        'Sow more in modules in February. They flower in June, so they cover the days after 1 June but not 30 May.',
      harvestWhen:
        'When the bud begins to crack and shows colour, usually 25 May–30 Jun.',
      harvestHow:
        'Sear: dip 2–3 cm of the stem end in just-boiled water for 5–10 seconds, then plunge into cold water. Vase 2–4 days.',
      stems: 'About 1 per plant. About 30 from 30 plants (range 10–60).',
    },
  },
  {
    id: 'iceland-poppies',
    group: 'wedding',
    name: 'Iceland poppies',
    title: "Iceland poppies: 'Iceland Giant' and Colibri 'Dolce Vita'",
    verdict: 'gamble',
    verdictNote: 'mainly June on',
    rows: {
      glance:
        "Gamble for 30 May. Short-lived perennial, usually sown June–September to flower the following spring. Packets say April–June or May–July because that assumes the packet's sowing time; an end-October sowing gives small plants into winter, so flowering slips to June or later. Perennial (short-lived).",
      sow: 'Gamble: sow 29 Oct–15 Nov in modules, surface-sown with a vermiculite dusting, in the frame (in the ledger as part of the 1.5-tray gambles). Also sow on a windowsill in February if you want a second chance.',
      potup:
        'Not applicable (direct sown, or module or bought plant straight to its final place).',
      pinch: 'None.',
      plantout:
        'At 4–6 leaves, 15–31 March, 20 cm apart. Avoid root disturbance. Sun.',
      support: "None for 'Dolce Vita' (dwarf). Netting for 'Iceland Giant'.",
      protect: 'Slug patrol. Mesh against pigeons.',
      pair: 'Nigella, cornflower, poppies.',
      avoid: 'Wet winter soil.',
      backup:
        'Sow again in June–July 2027 for flowers from spring 2028. If the frame fills in March, these gambles are the first to go (Part 3).',
      harvestWhen:
        'Bud cracking, usually June onwards. Treat any 30 May flowers as a bonus.',
      harvestHow: 'Sear stem ends for 5–10 seconds in just-boiled water.',
      stems: '0–1 per plant. Do not count on them.',
    },
  },
  {
    id: 'scabiosa',
    group: 'wedding',
    name: 'Scabiosa',
    title: "Scabiosa 'Salmon Queen'",
    verdict: 'fail',
    verdictNote: 'flowers from June',
    rows: {
      glance:
        'Flowers from June (seed-to-flower about 90–110 days). Annual. Not perennial.',
      sow: 'Gamble: sow now in the frame. Main sowing mid-Feb to March at 15–18 °C on a windowsill, surface-sown.',
      potup:
        'Not applicable (direct sown, or module or bought plant straight to its final place).',
      pinch: 'At 15–20 cm pinch above 4–6 pairs for more stems.',
      plantout: 'Mid-April after hardening off. 30 cm apart. Sun.',
      support: 'One layer of netting at 60 cm.',
      protect: 'Slug patrol. Aphids.',
      pair: 'Nigella, cornflower, marigold.',
      avoid: 'Shade and wet clay.',
      backup:
        'Use the 31 May–1 Jun gap as a bonus: any flowers that open early go straight into the vase.',
      harvestWhen: 'When 1–2 flowers are open: June–September.',
      harvestHow: 'Long stems, cool water. Vase 7–8 days.',
      stems: 'Usually 0.',
    },
  },
]
