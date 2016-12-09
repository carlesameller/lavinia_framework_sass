#!/bin/bash

echo "[INFO] -------------------------------------------------------------"
echo "[INFO] INSTALLING PLUGINS"
echo "[INFO] -------------------------------------------------------------"

echo "[INFO] Installing ANIMATIONS(daneden/animate.css)"
npm install animate.css

echo "[INFO] Installing MODAL(VodkaBears/Remodal)"
npm install remodal

echo "[INFO] Installing SLIDER(kenwheeler/slick)"
npm install slick-carousel

echo "[INFO] Installing CIRCULAR PROGRESSBAR (aterrien/jQuery-Knob)"
npm install aterrien/jQuery-Knob

echo "[INFO] Installing CUSTOM SCROLLBARS (malihu/malihu-custom-scrollbar-plugin)"
npm install malihu-custom-scrollbar-plugin

echo "[INFO] Installing CUSTOM SELECTS (select2/select2)"
npm install select2/select2

echo "[INFO] Installing RANGESLIDER (IonDen/ion.rangeSlider)"
npm install ion-rangeslider

echo "[INFO] Installing TOOLTIPS (iamceege/tooltipster)"
npm install iamceege/tooltipster

echo "[INFO] Installing TRIGGER IN VIEWPORT (silvestreh/onScreen)"
npm install onscreen

echo "[INFO] Installing MASONRY (desandro/masonry)"
npm install masonry-layout

echo "[INFO] Installing MATERIALIZECSS (Dogfalo/materialize)"
npm install Dogfalo/materialize

echo "[INFO] -------------------------------------------------------------"
echo "[INFO] MOVE & RENAME files from node_modules/ -> scss/			  "
echo "[INFO] -------------------------------------------------------------"
echo "[INFO] USE:														  "
echo "[INFO] Uncomment vendors from cam.scss						  	  "
echo "[INFO] Uncomment vendors from gruntfile.js in uglify task			  "
echo "[INFO] -------------------------------------------------------------"
grunt copy
grunt