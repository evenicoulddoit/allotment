import type { PlantCard } from './types'

/** Wedding flowers, first third: bulbs, corms, stocks and sweet peas. */
export const WEDDING_A: PlantCard[] = [
  {
    id: 'tulips',
    group: 'wedding',
    name: 'Tulips',
    title:
      "Tulips: 'Light up the Shade' ×40, 'Shells on the Beach' ×20, 'Mount Tacoma' ×25, 'Beachberry' ×10",
    verdict: 'ok',
    verdictNote: 'with early pull + cold store',
    rows: {
      glance:
        'On track with early pull and cold store. Bulb. Perennial in theory, but you pull the bulb with the stem, so treat as annual.',
      sow: 'Batch 1 (half of each variety, about 48 bulbs): 29 Oct to 20 Nov, pointed end up, in planter T, 10–15 cm deep (the planter is 25 cm deep; use 15–20 cm only in open ground). Batch 2 (the rest, about 47): 3–10 January, same depth, in the other half of planter T. Store batch 2 at 5–9 °C in a lidded tin until then. Cold soil lowers the risk of tulip fire.',
      potup:
        'Not applicable (direct sown, or module or bought plant straight to its final place).',
      pinch: 'Not applicable.',
      plantout:
        'Plant in final position, planter T: 105 bulbs (95 plus 10 insurance) at about 8 × 10 cm, with your 10 alliums between them. In open ground use a bed with sharp drainage (add 3 cm grit around bulbs on clay).',
      support:
        "None. Late doubles ('Mount Tacoma', 'Beachberry') have heavy heads: one layer of netting at 30 cm if the site is windy.",
      protect:
        'Mesh base and sides on planter T, and a mesh lid pegged flat over the bed from planting until shoots reach 10 cm (Part 5). Slug patrol in March. Burn or bin any plant with grey mould spots.',
      pair: 'Daffodils and alliums as a rodent-proof border. Ranunculus in the next rows.',
      avoid:
        'Soil where tulips grew in the last 3 years (tulip fire). Wet, shaded ground.',
      backup:
        'Your half-now, half-January split. The 10 extra bulbs in planter T are the insurance. If both batches lose more than 20%, buy potted tulips in April for filler.',
      harvestWhen:
        'Batch 1 about 9–16 May. Batch 2 about 20–23 May. Pull when buds are fully coloured but still closed and firm. If a warm spell arrives, pull early. Late doubles can wait until 20 May.',
      harvestHow:
        'Pull the whole plant with the bulb: this gives the longest stem. Trim off the bulb. No water. Wrap 10–20 stems tightly in newspaper, tie, store in the fridge at 2–4 °C (away from fruit and veg), upright if you can. On 29–30 May re-cut 2 cm and stand in cold water for 12–24 hours in a tight bunch. Your note says 18–20 hours, which is fine.',
      stems:
        'One per bulb. About 90 from 105 bulbs (95 plus 10 insurance; range 70–100) after rodents and rot.',
    },
  },
  {
    id: 'ranunculus',
    group: 'wedding',
    name: 'Ranunculus',
    title:
      "Ranunculus: 'Butterfly' ×3, 'Amandine Pastel Pink' ×25, pink ×50, R. asiaticus ×1",
    verdict: 'ok',
    verdictNote: 'both batches',
    rows: {
      glance: 'On track. Corm. Tender perennial: lift or treat as annual.',
      sow: 'Batch 1 (about 40): soak corms in cool water for 3–4 hours only (longer rots them), then plant claws-down 3 cm deep in trays or pots of gritty compost (pot up 1–8 November), in the cold frame. Batch 2 (about 39): same method, late February. Keep just moist.',
      potup:
        '1–8 November (batch 1) and 20–28 February (batch 2): corms into trays straight to planter R.',
      pinch: 'Not applicable.',
      plantout:
        'Batch 1: 15–25 March. Batch 2: 1–10 April, after hardening off. Planted at 13 cm, closer than the usual 15–20 cm because they are cut heavily; a 3 cm planting depth suits 25 cm planters. Free-draining, pH 6–7.',
      support: 'None.',
      protect:
        'Slug patrol. Mice and voles take corms: mesh base in planter R. Fleece in frosts.',
      pair: 'Chives at both ends of planter R, thyme at the corners. Marigolds once the first corms finish.',
      avoid: 'Wet, heavy soil. Soaking corms for more than 4 hours.',
      backup:
        'The second batch is the back-up. Buy in extra corms if batch 1 fails.',
      harvestWhen:
        "From about 25 April. Cut at the 'marshmallow' stage: the bud is soft when squeezed and colour is showing.",
      harvestHow:
        'Re-cut every day. Stand in cool water for 6–12 hours. Store 5–7 days in water in the fridge.',
      stems:
        '3–5 per plant on the day (10–20 across the season). About 300 from 79 corms (range 200–450).',
    },
  },
  {
    id: 'allium',
    group: 'wedding',
    name: 'Allium',
    title: 'Allium (variety not stated)',
    verdict: 'ok',
    verdictNote: 'if a late variety',
    rows: {
      glance: 'On track if a late-flowering variety. Bulb. Perennial.',
      sow: '29 Oct to mid-Nov, 10–15 cm deep (3× bulb height), pointed end up. You have 10 bulbs: all in planter T between the tulips (buy more only if you want a ground ring; daffodils already ring the planters).',
      potup:
        'Not applicable (direct sown, or module or bought plant straight to its final place).',
      pinch: 'Not applicable.',
      plantout:
        'Final position. About 20 cm apart (planter T holds 105 tulips and 10 alliums), full sun, free-draining.',
      support: 'None for stems under 90 cm. Tall ones: link stakes with string.',
      protect:
        'Rodent-proof (toxic to them). Fleece or fine mesh in Oct–Nov and Mar–Apr against allium leaf miner.',
      pair: 'Tulips, daffodils, geum. Carrots in a nearby bed.',
      avoid:
        'Peas, beans and sweet peas (folk wisdom, mild effect). Soil where onions had white rot.',
      backup:
        'If bulbs fail, buy potted alliums in April or use thistle-like Eryngium if you can source it.',
      harvestWhen:
        'About 20 May to 10 Jun, when half to three-quarters open.',
      harvestHow:
        'Cut at the base. Rinse stems and re-cut to reduce the oniony smell. Condition in cool water. Seedheads dry for later.',
      stems: 'One per bulb. About 9 from 10 bulbs.',
    },
  },
  {
    id: 'stocks',
    group: 'wedding',
    name: 'Stocks',
    title: "Stocks: 'Antique Rose', 'Champagne', 'White' (suggest 15 plants each)",
    verdict: 'ok',
    verdictNote: 'sow now + Feb back-up',
    rows: {
      glance:
        'On track with Feb back-up. Half-hardy annual, brassica family. Not perennial.',
      sow: 'Batch 1: 29 Oct–5 Nov. Surface-sow in 24-cell trays, barely cover, cold frame, germinates in 7–14 days. Batch 2: mid to late Feb, same method, on a windowsill or in the frame.',
      potup:
        'Not applicable (direct sown, or module or bought plant straight to its final place).',
      pinch: 'Do not pinch single-stem column types.',
      plantout:
        'Batch 1: mid-March. Batch 2: mid-April. 20–25 cm apart, firm and limey soil (pH 6.5–7.5), full sun.',
      support: 'One layer of netting at 30–40 cm.',
      protect:
        'Fine mesh against flea beetle and pigeons. Slug patrol. Clubroot risk: grow in a brassica-family block (Part 4).',
      pair: 'Nigella, orlaya, marigold (hoverflies). Ranunculus.',
      avoid:
        'Tomatoes and strawberries (folk wisdom). Soil that grew brassicas in the last 3–4 years.',
      backup: 'Batch 2 in February. If both fail, buy plugs in April.',
      harvestWhen:
        'About 1 May to 10 Jun, when one-third to half of the spike is open.',
      harvestHow:
        'Cut at ground level, strip all leaves, change water daily (stems smell). Vase 7–10 days.',
      stems: 'About 1.5 per plant. About 65 from 45 plants (range 45–90).',
    },
  },
  {
    id: 'sweet-peas-muse',
    group: 'wedding',
    name: 'Sweet peas, Muse / Fire & Ice / High Scent',
    title:
      "Sweet peas ×40: 'Muse', 'Fire & Ice', 'High Scent' (together with 'Spring Sunshine' ×34 below, 74 sown in all; 48 go on the plot)",
    verdict: 'ok',
    rows: {
      glance: 'On track. Hardy annual, legume. Not perennial.',
      sow: 'Now (29 Oct–10 Nov): 1 seed per root trainer, 2.5 cm deep, in the cold frame under mesh. Soak overnight to speed germination. Germinates in 10–14 days. All 74 sweet peas are sown now: there is no January sowing. The extra plants cover failures and go to your garden.',
      potup:
        'Not applicable (direct sown, or module or bought plant straight to its final place).',
      pinch:
        'At 2–3 pairs of true leaves (about 10 cm, in Dec–Jan), pinch above the pair. Choose 2–3 strong shoots per plant.',
      plantout:
        'Harden off 15–24 March, plant out 25 March–5 April into planter S2: the best 24 plants. The other 16 go to your garden. One plant per cane, a cane every 15 cm, so each plant has room (Part 4). Sun, pH 6.5–7. A 25 cm planter is deep enough for sweet peas.',
      support:
        'Planter S2 (1.8 m long) takes two rows of 2.4 m canes, 45 cm apart, 12 canes a row (24 canes), with string or netting. Grow each plant as a single-stem cordon: tie in weekly, remove tendrils and side shoots.',
      protect:
        'Mesh base on S2 (or 6 mm mesh collars in a trench if the planters are not yet bought). Slug patrol. Fleece in late frost. Aphids: squirt off.',
      pair: 'Nigella, cornflower and orlaya below the rows. Marigold or thyme at the ends.',
      avoid:
        'Onions, garlic, chives within a metre (folk wisdom). S2 is at the north end, away from bed 5.',
      backup:
        'Plug plants in March as a rescue. If germination is poor, a January sowing flowers 2–3 weeks later.',
      harvestWhen:
        'From about 10 May to mid-July. Cut when the lowest 2–3 flowers are open.',
      harvestHow:
        'Cut long stems, pick every 2–3 days so plants keep producing, cool water at once. Store 2–3 days in a cool room, away from fruit.',
      stems:
        '3–5 per plant. About 96 from the 24 plants on the plot (range 60–144). The 16 plants in your garden are a bonus.',
    },
  },
  {
    id: 'sweet-peas-spring',
    group: 'wedding',
    name: 'Sweet peas, Spring Sunshine',
    title: "Sweet peas ×34: 'Spring Sunshine' (24 on the plot, 10 for your garden)",
    verdict: 'ok',
    verdictNote: 'may start slightly earlier',
    rows: {
      glance:
        'On track. Hardy annual, legume. Assumed to be seed. An early-flowering series (one supplier lists "very early flowering", April to June, for the mix; the UK supplier gives no flowering date).',
      sow: 'Same as the other sweet peas: 29 Oct–10 Nov, 1 seed per root trainer, 2.5 cm deep, in the frame under mesh. Suppliers give 14–21 days to germinate. Check the packet for sowing advice.',
      potup: 'Not applicable (root trainer to planter).',
      pinch: 'At 2–3 pairs of true leaves (Dec–Jan).',
      plantout:
        'Harden off 15–24 March, plant out 25 March–5 April into planter S1: the best 24 plants, one per cane every 15 cm. The other 10 go to your garden.',
      support: 'As the other sweet peas.',
      protect: 'As the other sweet peas.',
      pair: 'Nigella, cornflower and orlaya below the rows.',
      avoid: 'Onions, garlic and chives (within a metre).',
      backup:
        'If they are not seed but plants, plant them out at the same time and skip the sowing.',
      harvestWhen:
        'May be a little earlier than the other sweet peas. Plan from about 10 May to mid-July. Cut when the lowest 2–3 flowers are open.',
      harvestHow: 'As the other sweet peas.',
      stems:
        '3–5 per plant. About 96 from the 24 plants on the plot (range 60–144). Combined with the first card: about 192 from 48 plants on the plot (range 120–288), plus your garden.',
    },
  },
]
