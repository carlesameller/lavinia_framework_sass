@ECHO OFF

echo "[INFO] -------------------------------------------------------------"
echo "[INFO] INSTALLING PLUGINS"
echo "[INFO] -------------------------------------------------------------"

echo "[INFO] Installing ANIMATIONS(daneden/animate.css)"
call npm install animate.css

echo "[INFO] Installing MODAL(VodkaBears/Remodal)"
call npm install remodal

echo "[INFO] Installing SLIDER(kenwheeler/slick)"
call npm install slick-carousel

echo "[INFO] Installing CIRCULAR PROGRESSBAR (aterrien/jQuery-Knob)"
call npm install aterrien/jQuery-Knob

echo "[INFO] Installing CUSTOM SCROLLBARS (malihu/malihu-custom-scrollbar-plugin)"
call npm install malihu-custom-scrollbar-plugin

echo "[INFO] Installing CUSTOM SELECTS (select2/select2)"
call npm install select2/select2

echo "[INFO] Installing RANGESLIDER (IonDen/ion.rangeSlider)"
call npm install ion-rangeslider

echo "[INFO] Installing TOOLTIPS (iamceege/tooltipster)"
call npm install iamceege/tooltipster

echo "[INFO] Installing TRIGGER IN VIEWPORT (silvestreh/onScreen)"
call npm install onscreen

echo "[INFO] Installing MASONRY (desandro/masonry)"
call npm install masonry-layout

echo "[INFO] Installing MATERIALIZECSS (Dogfalo/materialize)"
call npm install Dogfalo/materialize

echo "[INFO] -------------------------------------------------------------"
echo "[INFO] MOVE & RENAME files from node_modules/ -> scss/			  "
echo "[INFO] -------------------------------------------------------------"
echo "[INFO] USE:														  "
echo "[INFO] Uncomment vendors from cam.scss						  	  "
echo "[INFO] Uncomment vendors from gruntfile.js in uglify task			  "
echo "[INFO] -------------------------------------------------------------"
call grunt copy
call grunt