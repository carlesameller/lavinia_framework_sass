@ECHO OFF

echo "                                                             .iLG00GL1,"
echo "                                                          ,G000000000000G:"
echo "                                                 .      ,000001.     iG0000,"
echo "                                               ;000Gt1f0000G.          .G000:"
echo "                     t00t.                      ;00000000C,              G00C"
echo "                     t0000G:                        ..                   f000"
echo "                 :tL00000000C                                           .000L"
echo "               f0000000000000G                    :1fLLLt;.            ,0000,"
echo "             f0000000000000000:               iG00000000000000f;,..,iL0000G."
echo "           100001  G00000000001            ;00000000000000000000000000000:"
echo "          t000000000000000000001        .L000000000000000000000000000Gi"
echo "          .G000000000000000000000G1;:iL000000000000000000000000000:"
echo "            ,C0000000000000000000000000000000000000000000000000000C"
echo "                  .t00000000000000000000000000000000000000000000000"
echo "                    ;0000000000000000000000000000000000000000000000"
echo "                    ;0000000000000000000000000000000000000000000000,"
echo "                    ;00000000000000000000000000000000000000000000001"
echo "                    ;00000000000000000000000000000000000000000000000."
echo "                    ;00000000000000000000000000Gi10000000000000000000:"
echo "                    f00000000000000000000000t.    .G000000000000000000001"
echo "                   t00000000000000000000G;          10000000000000000000t"
echo "                 ,G0000000G000000000Li               .G00000000t,L000000t"
echo "                f0000000i  t00000001                   t0000000t   f0000t"
echo "              :000000C.     L0000001                    ,000000t   .0000t"
echo "         .;: L00000i         C000001                     t000001   .0000t"
echo "        C0000000L.           .G00001                    ,00000;     C000;"
echo "                             .i00001               .;;.f0000i"
echo "                            f0000001              C00000001"



echo "[INFO]"
echo "[INFO] -------------------------------------------------------------"
echo "[INFO] Installing vendors and dependencies (via NPM) ..."
echo "[INFO]"

call npm install

echo "[INFO]"
echo "[INFO] -------------------------------------------------------------"
echo "[INFO] Installing vendors and dependencies for -TWIG- (via COMPOSER) ..."
echo "[INFO]"

call composer install

echo "[INFO]"
echo "[INFO] -------------------------------------------------------------"
echo "[INFO] Installing SASS for (via RUBY) ..."
echo "[INFO]"

call gem install sass

echo "[INFO]"
echo "[INFO] -------------------------------------------------------------"
echo "[INFO] RUNNING GRUNT ..."
echo "[INFO]"

call grunt copy
call grunt uglify
call grunt