const BADGES = [
  {id:'b1', emo:'🔥', name:'Rantai 7 Hari', desc:'Belajar 7 hari beruntun', test:s=>s.streak>=7},
  {id:'b2', emo:'🎌', name:'Hafal 25 Kanji', desc:'Kuasai 25 kartu kanji', test:s=>s.mastered.length>=25},
  {id:'b3', emo:'💯', name:'Skor Sempurna', desc:'100% di satu paket latihan', test:s=>Object.values(s.packBest).some(v=>v>=100)},
  {id:'b4', emo:'👑', name:'Penakluk Tantangan', desc:'Selesaikan tantangan harian', test:s=>!!s.challengeDone},
  {id:'b5', emo:'📖', name:'Ahli Bunpou', desc:'Tandai 10 pola sudah hafal', test:s=>s.polaHafal.length>=10},
  {id:'b6', emo:'📚', name:'Kolektor Kata', desc:'Lihat 20 detail kata', test:s=>s.kataDilihat.length>=20},
];
