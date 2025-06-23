<script setup>

</script>

<template>
  <!--Rotating images-->
    <v-carousel>
  <v-carousel-item
    src="../../public/vadim-sherbakov-d6ebY-faOO0-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../../public/dom-fou-YRMWVcdyhmI-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../../public/joshua-hoehne-iggWDxHTAUQ-unsplash.jpg"
    cover
  ></v-carousel-item>

</v-carousel>

   <!--Latest from jitegemee-->
   <v-container>
     <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="Wonder trip"
        text="The heart of Cuba's capital is a living museum—cobbled streets lined with Baroque and neoclassical architecture, colorful plazas, vintage cars, buzzing cafés, and landmarks like the Cathedral of San Cristóbal and Castillo de la Real Fuerza."
        title="CUBA TRIP"
        color="orange"
      ></v-card>

      
    </v-col>

    <v-col cols="12" md="4">
      <v-card color="orange">
        <template v-slot:title>
          GRADUATION
        </template>

        <template v-slot:subtitle>
          Bring all the energy for your loved ones
        </template>

        <template v-slot:text>
          "Today, we celebrate not just the end of a chapter, but the beginning of a new journey. Through hard work, dedication, and countless lessons—inside and outside the classroom—we've grown, achieved, and overcome.
          </template>
      </v-card>

      
    </v-col>

    <v-col cols="12" md="4">
      <v-card color="orange">
        <v-card-item>
          <v-card-title>SPORTS</v-card-title>

          <v-card-subtitle>Game week</v-card-subtitle>
        </v-card-item>

        <v-card-text>
         Flamengo vs Chelsea

Mamelodi Sundowns vs Borussia Dortmund

Real Madrid vs Pachuca

Bayern Munich vs Boca Juniors.
 Liverpool youngster open to move
Quansah, the 22‑year‑old Liverpool defender, has reportedly signalled his openness 

        </v-card-text>
      </v-card>

      
    </v-col>
  </v-row>
   </v-container>


   <<!--Partners-->
   <v-container>
     <v-row>
      <v-col cols="12" md="">
        <v-img src="../../public/SU-Logo.png"></v-img> 
      </v-col>

      <v-col cols="12" md="">
        <v-img src="../../public/download.png"></v-img>
      </v-col>

      <v-col cols="12" md="">
        <v-img src="../../public/imageedit-1-34969553941725396009.png"></v-img>
      </v-col>

       <v-col cols="12" md="">
        <v-img src="../../public/logo-riara-e1655472443775.png"></v-img>
      </v-col> 

      <v-col cols="12" md="">
        <v-img src="../../public/tL_v571NdZ0.svg"></v-img>
      </v-col> 

       
      
     </v-row>
   </v-container>
</template>