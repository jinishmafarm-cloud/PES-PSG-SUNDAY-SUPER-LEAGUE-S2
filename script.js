<script>
/* =========================================================
   FIXTURE RESULT ENTRY
   =========================================================
   Enter goals here:

   hg = Home Team Goals
   ag = Away Team Goals

   Example:
   hg: 3, ag: 1
   means Home Team won 3-1.

   If match is not played:
   hg: null, ag: null
========================================================= */

const fixtures = [

    // 1
    { id: 1, home: "nirmal", away: "edwin", hg: 2, ag: 3 },

    // 2
    { id: 2, home: "edwin", away: "nirmal", hg: null, ag: null },

    // 3
    { id: 3, home: "nirmal", away: "dino", hg: null, ag: null },

    // 4
    { id: 4, home: "dino", away: "nirmal", hg: null, ag: null },

    // 5
    { id: 5, home: "nirmal", away: "amal", hg: null, ag: null },

    // 6
    { id: 6, home: "amal", away: "nirmal", hg: null, ag: null },

    // 7
    { id: 7, home: "nirmal", away: "aman", hg: null, ag: null },

    // 8
    { id: 8, home: "aman", away: "nirmal", hg: null, ag: null },

    // 9
    { id: 9, home: "nirmal", away: "prince", hg: null, ag: null },

    // 10
    { id: 10, home: "prince", away: "nirmal", hg: null, ag: null },

    // 11
    { id: 11, home: "nirmal", away: "thala", hg: null, ag: null },

    // 12
    { id: 12, home: "thala", away: "nirmal", hg: null, ag: null },

    // 13
    { id: 13, home: "nirmal", away: "jinish", hg: null, ag: null },

    // 14
    { id: 14, home: "jinish", away: "nirmal", hg: null, ag: null },

    // 15
    { id: 15, home: "nirmal", away: "alen", hg: null, ag: null },

    // 16
    { id: 16, home: "alen", away: "nirmal", hg: null, ag: null },

    // 17
    { id: 17, home: "nirmal", away: "anil", hg: null, ag: null },

    // 18
    { id: 18, home: "anil", away: "nirmal", hg: null, ag: null },


    // BAYER MUNICH
    { id: 19, home: "edwin", away: "dino", hg: null, ag: null },
    { id: 20, home: "dino", away: "edwin", hg: null, ag: null },

    { id: 21, home: "edwin", away: "amal", hg: null, ag: null },
    { id: 22, home: "amal", away: "edwin", hg: null, ag: null },

    { id: 23, home: "edwin", away: "aman", hg: null, ag: null },
    { id: 24, home: "aman", away: "edwin", hg: null, ag: null },

    { id: 25, home: "edwin", away: "prince", hg: null, ag: null },
    { id: 26, home: "prince", away: "edwin", hg: null, ag: null },

    { id: 27, home: "edwin", away: "thala", hg: null, ag: null },
    { id: 28, home: "thala", away: "edwin", hg: null, ag: null },

    { id: 29, home: "edwin", away: "jinish", hg: null, ag: null },
    { id: 30, home: "jinish", away: "edwin", hg: null, ag: null },

    { id: 31, home: "edwin", away: "alen", hg: null, ag: null },
    { id: 32, home: "alen", away: "edwin", hg: null, ag: null },

    { id: 33, home: "edwin", away: "anil", hg: null, ag: null },
    { id: 34, home: "anil", away: "edwin", hg: null, ag: null },


    // REAL MADRID
    { id: 35, home: "dino", away: "amal", hg: null, ag: null },
    { id: 36, home: "amal", away: "dino", hg: null, ag: null },

    { id: 37, home: "dino", away: "aman", hg: null, ag: null },
    { id: 38, home: "aman", away: "dino", hg: null, ag: null },

    { id: 39, home: "dino", away: "prince", hg: null, ag: null },
    { id: 40, home: "prince", away: "dino", hg: null, ag: null },

    { id: 41, home: "dino", away: "thala", hg: null, ag: null },
    { id: 42, home: "thala", away: "dino", hg: null, ag: null },

    { id: 43, home: "dino", away: "jinish", hg: null, ag: null },
    { id: 44, home: "jinish", away: "dino", hg: null, ag: null },

    { id: 45, home: "dino", away: "alen", hg: null, ag: null },
    { id: 46, home: "alen", away: "dino", hg: null, ag: null },

    { id: 47, home: "dino", away: "anil", hg: null, ag: null },
    { id: 48, home: "anil", away: "dino", hg: null, ag: null },


    // PSG
    { id: 49, home: "amal", away: "aman", hg: null, ag: null },
    { id: 50, home: "aman", away: "amal", hg: null, ag: null },

    { id: 51, home: "amal", away: "prince", hg: null, ag: null },
    { id: 52, home: "prince", away: "amal", hg: null, ag: null },

    { id: 53, home: "amal", away: "thala", hg: null, ag: null },
    { id: 54, home: "thala", away: "amal", hg: null, ag: null },

    { id: 55, home: "amal", away: "jinish", hg: null, ag: null },
    { id: 56, home: "jinish", away: "amal", hg: null, ag: null },

    { id: 57, home: "amal", away: "alen", hg: null, ag: null },
    { id: 58, home: "alen", away: "amal", hg: null, ag: null },

    { id: 59, home: "amal", away: "anil", hg: null, ag: null },
    { id: 60, home: "anil", away: "amal", hg: null, ag: null },


    // MONACO
    { id: 61, home: "aman", away: "prince", hg: null, ag: null },
    { id: 62, home: "prince", away: "aman", hg: null, ag: null },

    { id: 63, home: "aman", away: "thala", hg: null, ag: null },
    { id: 64, home: "thala", away: "aman", hg: null, ag: null },

    { id: 65, home: "aman", away: "jinish", hg: null, ag: null },
    { id: 66, home: "jinish", away: "aman", hg: null, ag: null },

    { id: 67, home: "aman", away: "alen", hg: null, ag: null },
    { id: 68, home: "alen", away: "aman", hg: null, ag: null },

    { id: 69, home: "aman", away: "anil", hg: null, ag: null },
    { id: 70, home: "anil", away: "aman", hg: null, ag: null },


    // BVB
    { id: 71, home: "prince", away: "thala", hg: null, ag: null },
    { id: 72, home: "thala", away: "prince", hg: null, ag: null },

    { id: 73, home: "prince", away: "jinish", hg: null, ag: null },
    { id: 74, home: "jinish", away: "prince", hg: null, ag: null },

    { id: 75, home: "prince", away: "alen", hg: null, ag: null },
    { id: 76, home: "alen", away: "prince", hg: null, ag: null },

    { id: 77, home: "prince", away: "anil", hg: null, ag: null },
    { id: 78, home: "anil", away: "prince", hg: null, ag: null },


    // INTER MILAN
    { id: 79, home: "thala", away: "jinish", hg: null, ag: null },
    { id: 80, home: "jinish", away: "thala", hg: null, ag: null },

    { id: 81, home: "thala", away: "alen", hg: null, ag: null },
    { id: 82, home: "alen", away: "thala", hg: null, ag: null },

    { id: 83, home: "thala", away: "anil", hg: null, ag: null },
    { id: 84, home: "anil", away: "thala", hg: null, ag: null },


    // MANCHESTER UNITED
    { id: 85, home: "jinish", away: "alen", hg: null, ag: null },
    { id: 86, home: "alen", away: "jinish", hg: null, ag: null },

    { id: 87, home: "jinish", away: "anil", hg: null, ag: null },
    { id: 88, home: "anil", away: "jinish", hg: null, ag: null },


    // BRAZIL vs NORWAY
    { id: 89, home: "alen", away: "anil", hg: null, ag: null },
    { id: 90, home: "anil", away: "alen", hg: null, ag: null }

];
</script>
