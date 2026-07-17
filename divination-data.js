const DivinationDatabase = {
  // ==========================================
  // 1. FULL TAROT CARD ARCANUM REFERENCE
  // ==========================================
  tarot: {
    "the-fool": {
      name: "The Fool",
      upright: "New beginnings, potential, spontaneous action, faith in the universe, innocence.",
      reversed: "Recklessness, risk-taking, consideration delays, naivety, holding back."
    },
    "the-magician": {
      name: "The Magician",
      upright: "Manifestation, willpower, desire, resourcefulness, skill mastery.",
      reversed: "Manipulation, illusions, wasted latent talent, misdirected intentions."
    },
    "the-high-priestess": {
      name: "The High Priestess",
      upright: "Intuition, sacred knowledge, divine feminine, subconscious insights.",
      reversed: "Secret motives, ignoring inner guidance, surface-level focus."
    },
    "the-empress": {
      name: "The Empress",
      upright: "Abundance, creativity, nature, fertility, domestic comfort.",
      reversed: "Creative blocks, dependence on others, smothering behavior."
    },
    "the-emperor": {
      name: "The Emperor",
      upright: "Authority, structure, solid foundation, protection, logical rule.",
      reversed: "Tyranny, rigidity, loss of control, overbearing boundaries."
    },
    "the-hierophant": {
      name: "The Hierophant",
      upright: "Tradition, spiritual wisdom, orthodoxy, institutional alignment.",
      reversed: "Rebellion, unorthodox paths, breaking conventions, rigid dogma."
    },
    "the-lovers": {
      name: "The Lovers",
      upright: "Harmony, relationships, deep choices, core values alignment.",
      reversed: "Disharmony, misalignment of values, avoidance of tough choices."
    },
    "the-chariot": {
      name: "The Chariot",
      upright: "Direction, control, victory, overcoming obstacles through sheer will.",
      reversed: "Lack of direction, running out of control, internal aggression blocks."
    },
    "strength": {
      name: "Strength",
      upright: "Fortitude, inner courage, quiet endurance, compassion, influence.",
      reversed: "Self-doubt, raw emotion outbursts, weakness, inadequacy."
    },
    "the-hermit": {
      name: "The Hermit",
      upright: "Soul-searching, inner reflection, spiritual mentorship, isolation.",
      reversed: "Loneliness, withdrawal baggage, pariah behavior, rejecting wisdom."
    },
    "the-wheel-of-fortune": {
      name: "The Wheel of Fortune",
      upright: "Good luck, destiny cycles, turning points, unseen synchronized forces.",
      reversed: "Bad luck, breaking cyclic habits, resisting change, external friction."
    },
    "justice": {
      name: "Justice",
      upright: "Fairness, cosmic truth, causal accountability, systemic balance.",
      reversed: "Unfairness, lack of accountability, dishonesty, legal complications."
    },
    "the-hanged-man": {
      name: "The Hanged Man",
      upright: "Sacrifice, new perspectives, pausing time, enlightened surrender.",
      reversed: "Stagnation, martyr complexes, useless delays, wasting dynamic time."
    },
    "death": {
      name: "Death",
      upright: "Metamorphosis, absolute closure, purging dead roots, natural evolution.",
      reversed: "Resisting change, stagnant loops, clinging to dead weight."
    },
    "temperance": {
      name: "Temperance",
      upright: "Alchemy, patience, middle path moderation, harmonious blending.",
      reversed: "Imbalance, excess, conflicting goals, chaotic combinations."
    },
    "the-devil": {
      name: "The Devil",
      upright: "Shadow self, material attachments, addiction, illusion of restriction.",
      reversed: "Detachment, breaking structural chains, shadow work confrontation."
    },
    "the-tower": {
      name: "The Tower",
      upright: "Sudden upheaval, broken foundations, revelation, unexpected truth sparks.",
      reversed: "Avoiding critical disasters, delayed cleanup, fear of structural change."
    },
    "the-star": {
      name: "The Star",
      upright: "Hope, serenity, spiritual rejuvenation, cosmic guidance, healing.",
      reversed: "Despair, lost faith, dynamic creative blockages, discouragement."
    },
    "the-moon": {
      name: "The Moon",
      upright: "Illusion, deep anxiety, hidden cyclical mechanics, vivid dreams.",
      reversed: "Release of deep fears, clarity dawning, unmasking structural illusions."
    },
    "the-sun": {
      name: "The Sun",
      upright: "Radiant success, vitality, pure joy, truth illuminated, confidence.",
      reversed: "Temporary clouds, ego blocks, minor vitality depletion."
    },
    "judgement": {
      name: "Judgement",
      upright: "Absolution, deep calling, self-evaluation, significant choices.",
      reversed: "Self-doubt, inner critic noise, ignoring a major calling."
    },
    "the-world": {
      name: "The World",
      upright: "Fulfillment, cycle completion, integration, absolute achievement.",
      reversed: "Shortcuts, incomplete cycles, seeking closure elsewhere."
    }
    // Minor Arcana files can follow this structural format as needed
  },

  // ==========================================
  // 2. RUNES (ELDER FUTHARK ALPHABET)
  // ==========================================
  runes: {
    "fehu": {
      name: "Fehu (F)",
      upright: "Wealth, abundance, liquid finances, dynamic material power.",
      reversed: "Financial loss, greed, creative blockages, material struggle."
    },
    "uruz": {
      name: "Uruz (U)",
      upright: "Vitality, raw physical strength, untamed potential, courage.",
      reversed: "Weakness, misdirected force, poor health, missed momentum."
    },
    "thurisaz": {
      name: "Thurisaz (Th)",
      upright: "Defense, catalyst forces, breaking barriers, dynamic thresholds.",
      reversed: "Vulnerability, compulsion, malicious blocks, poor timing."
    },
    "ansuz": {
      name: "Ansuz (A)",
      upright: "Divine inspiration, message signs, insight, voice articulation.",
      reversed: "Miscommunication, delusion, manipulation by elders, bad advice."
    },
    "raidho": {
      name: "Raidho (R)",
      upright: "Journey, cyclical rhythms, physical movement, evolution.",
      reversed: "Stagnation, crisis, broken transportation, path delays."
    },
    "kenaz": {
      name: "Kenaz (K)",
      upright: "Torchlight, revelation, intellectual warmth, technical skill.",
      reversed: "Extinguished vision, artistic blocks, clarity fading, illness."
    },
    "gebo": {
      name: "Gebo (G)",
      upright: "Gifts, balanced partnerships, fair exchanges, spiritual bonds.",
      reversed: "Gebo cannot be inverted. (Always balanced cosmic flow)"
    },
    "wunjo": {
      name: "Wunjo (W)",
      upright: "Joy, shared harmony, material satisfaction, success realization.",
      reversed: "Sorrow, alienation, delayed celebrations, internal friction."
    },
    "hagalaz": {
      name: "Hagalaz (H)",
      upright: "Disruptive hail, natural crisis, breakdown forcing growth.",
      reversed: "Hagalaz cannot be inverted. (Absolute elemental force)"
    },
    "nauthiz": {
      name: "Nauthiz (N)",
      upright: "Necessity, delay causes, internal resistance, survival drive.",
      reversed: "Frustration, desperate choices, uncalculated dependency loops."
    },
    "isa": {
      name: "Isa (I)",
      upright: "Glacial freeze, total stillness, processing delays, consolidation.",
      reversed: "Isa cannot be inverted. (Perfect crystalline structure)"
    },
    "jera": {
      name: "Jera (J)",
      upright: "Abundant harvest, karmic rewards, patient time cycles, prosperity.",
      reversed: "Jera cannot be inverted. (The wheel always turns fully)"
    },
    "eihwaz": {
      name: "Eihwaz (Y)",
      upright: "Yggdrasil trunk, endurance, structural resilience, spiritual protection.",
      reversed: "Eihwaz cannot be inverted. (Infinite cosmic center)"
    },
    "perthro": {
      name: "Perthro (P)",
      upright: "Dice cup, mystery, occult secrets, luck dynamics, matrix probabilities.",
      reversed: "Exposed secrets, disappointment, stagnation of chance patterns."
    },
    "algiz": {
      name: "Algiz (Z)",
      upright: "Divine ward, spiritual sanctuary, protective boundaries, higher self connection.",
      reversed: "Vulnerability, hidden ambush vectors, ignoring immediate guidance."
    },
    "sowilo": {
      name: "Sowilo (S)",
      upright: "Solar flame, absolute breakthrough victory, vitality, core power.",
      reversed: "Sowilo cannot be inverted. (Pure divine light)"
    },
    "tiwaz": {
      name: "Tiwaz (T)",
      upright: "Warrior spirit, focus, justice, discipline, necessary sacrifice.",
      reversed: "Lost drive, surrender, broken commitment lines, tactical failures."
    },
    "berkano": {
      name: "Berkano (B)",
      upright: "Birth, botanical growth, sanctuary nesting, complete rejuvenation.",
      reversed: "Stunted growth, family friction, delays in projects starting."
    },
    "ehwaz": {
      name: "Ehwaz (E)",
      upright: "The horse, trusted partnerships, synchronization, momentum shifts.",
      reversed: "Betrayal vectors, mechanical blockages, unexpected structural friction."
    },
    "mannaz": {
      name: "Mannaz (M)",
      upright: "The collective, self-awareness, social intelligence, humanity.",
      reversed: "Isolation, manipulation from shadows, political alienation."
    },
    "laguz": {
      name: "Laguz (L)",
      upright: "Deep ocean waters, flowing emotion, psychic depths, astral dreams.",
      reversed: "Emotional swamp loops, paranoia, blocked instinct signals."
    },
    "ingwaz": {
      name: "Ingwaz (Ng)",
      upright: "Latent seed energy, safe incubation, inner potential ready to burst.",
      reversed: "Ingwaz cannot be inverted. (The potential remains absolute)"
    },
    "dagaz": {
      name: "Dagaz (D)",
      upright: "Daybreak illumination, cosmic balance, profound quantum shifts.",
      reversed: "Dagaz cannot be inverted. (Daylight is absolute definition)"
    },
    "othala": {
      name: "Othala (O)",
      upright: "Ancestral inheritance, physical property, permanent home roots.",
      reversed: "Family baggage loops, dispossession, loss of safety foundations."
    }
  },

  // ==========================================
  // 3. ZODIAC ALIGNMENTS
  // ==========================================
  zodiac: {
    "aries": { name: "Aries", element: "Fire", traits: "Initiating, bold, courageous, competitive, protective." },
    "taurus": { name: "Taurus", element: "Earth", traits: "Grounding, deliberate, artistic, loyal, persistent." },
    "gemini": { name: "Gemini", element: "Air", traits: "Intellectual, adaptive, witty, dualistic nature, curious." },
    "cancer": { name: "Cancer", element: "Water", traits: "Nurturing, intuitive, protective sanctuary builders, deep emotion." },
    "leo": { name: "Leo", element: "Fire", traits: "Radiant, expressive, proud, protective, deeply creative." },
    "virgo": { name: "Virgo", element: "Earth", traits: "Analytical, methodical, dedicated craftspeople, health-focused." },
    "libra": { name: "Libra", element: "Air", traits: "Harmonious, tactical peacemakers, justice-oriented, social." },
    "scorpio": { name: "Scorpio", element: "Water", traits: "Transformative, investigative, intense, master of alchemy." },
    "sagittarius": { name: "Sagittarius", element: "Fire", traits: "Philosophical, freedom-seeking, expansive visionaries." },
    "capricorn": { name: "Capricorn", element: "Earth", traits: "Disciplined, systematic architectural builders, patient status focus." },
    "aquarius": { name: "Aquarius", element: "Air", traits: "Innovative, independent global networkers, unconventional visionaries." },
    "pisces": { name: "Pisces", element: "Water", traits: "Mystical, deeply artistic, empathetic dreamers, fluid anchors." }
  },

  // ==========================================
  // 4. BIRTHSTONES (MODERN & MYSTICAL DUAL ARCHETYPES)
  // ==========================================
  birthstones: {
    1:  { month: "January",   modern: "Garnet",     mystical: "Emerald (Ancient Guardian Stone)", properties: "Constancy, dynamic structural grounding, vital protection." },
    2:  { month: "February",  modern: "Amethyst",   mystical: "Bloodstone (Traditional Alchemic Altar)", properties: "Absolute clarity, clearing emotional loops, spiritual temperance." },
    3:  { month: "March",     modern: "Aquamarine", mystical: "Jade (Traditional Eastern Prosperity)", properties: "Fluid communication lines, pure clear vision, courage." },
    4:  { month: "April",     modern: "Diamond",    mystical: "Opal (Mystical Reflection Matrix)", properties: "Indestructible intent, amplifying divine light frequencies." },
    5:  { month: "May",       modern: "Emerald",    mystical: "Sapphire (Ancient Celestial Vault)", properties: "Abundant growth, heart center alignment, clear foresight." },
    6:  { month: "June",      modern: "Pearl",      mystical: "Agate (Ancient Protection Stone)", properties: "Pure transformation integration, cyclical lunar sync." },
    7:  { month: "July",      modern: "Ruby",       mystical: "Ruby (Universal Agreement)", properties: "Primal fire passion, deep sovereign leadership, life force power." },
    8:  { month: "August",    modern: "Peridot",    mystical: "Diamond (Ancient Victory Focus)", properties: "Shielding clearing grids, joyous heart expression, manifestation." },
    9:  { month: "September", modern: "Sapphire",   mystical: "Chrysolite (Mystical Guard)", properties: "Higher mental focus, structural cosmic order, absolute truth." },
    10: { month: "October",   modern: "Opal",       mystical: "Aquamarine (Traditional Fluid Balance)", properties: "Astral dream amplification, dynamic multidimensional vision." },
    11: { month: "November",  modern: "Topaz",      mystical: "Pearl (Mystical Sovereignty Stone)", properties: "Sovereign personal power focus, warmth, continuous abundance." },
    12: { month: "December",  modern: "Turquoise",  mystical: "Ruby (Traditional Deep Winter Fire)", properties: "Master communication channels, global astral protection, deep peace." }
  }
};