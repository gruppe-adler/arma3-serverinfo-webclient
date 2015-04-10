var paths = {
    man: 'm -0.01694915,-16.14195 c 2.40699995,0 4.68399995,0.542 6.73499995,1.488 l -6.73499995,-9.488 -6.73500005,9.488 c 2.051,-0.946 4.327,-1.488 6.73500005,-1.488 z M 12.875,0 C 12.875,7.110666 7.110666,12.875 0,12.875 -7.110666,12.875 -12.875,7.110666 -12.875,0 c 0,-7.110666 5.764334,-12.875 12.875,-12.875 7.110666,0 12.875,5.764334 12.875,12.875 z',
    at: 'm 35.195446,10.880559 -6.262136,8.854369 c 1.911612,-0.881709 4.017786,-1.398058 6.262136,-1.398058 2.243417,0 4.380583,0.516349 6.291262,1.398058 l -6.291262,-8.854369 z m 0,10.485437 c -6.627728,0 -12,5.372272 -12,12 0,6.627728 5.372272,12 12,12 6.627728,0 12,-5.372272 12,-12 0,-6.627728 -5.372272,-12 -12,-12 z m -0.05825,1.368932 7.747572,11.038835 -7.45631,-2.563107 7.45631,10.631068 -7.747572,-2.650485 -7.601942,2.650485 7.310679,-10.631068 -7.310679,2.563107 7.601942,-11.038835 z',
    engineer: 'm 0.01483051,-22.449268 -6.29126201,8.825243 c 1.9116116,-0.881709 4.0469127,-1.368932 6.29126201,-1.368932 2.24341769,0 4.35145639,0.487223 6.26213599,1.368932 l -6.26213599,-8.825243 z m 0,10.485437 c -6.62772801,0 -12.00000051,5.3722729 -12.00000051,12.00000093 0,6.62772827 5.3722725,11.99999907 12.00000051,11.99999907 C 6.6425588,12.036169 12.01483,6.6638982 12.01483,0.03616993 12.01483,-6.5915581 6.6425588,-11.963831 0.01483051,-11.963831 z m -8.41747561,5.5339816 c 3.1260582,0 5.7511456,2.2035729 6.3495145,5.1553398 l 4.1359224,0 c 0.5983689,-2.9517669 3.2234566,-5.1553398 6.3495145,-5.1553398 l 0,3 c -1.8985627,0 -3.4660194,1.5665243 -3.4660194,3.46601933 0,1.89949527 1.5674567,3.43689337 3.4660194,3.43689337 l 0,3.0291262 c -2.9638831,0 -5.471534,-2.0232233 -6.2330097,-4.7475728 l -4.368932,0 c -0.7605437,2.7243495 -3.2691262,4.7475728 -6.2330097,4.7475728 l 0,-3.0291262 c 1.8994951,0 3.4660194,-1.5373981 3.4660194,-3.43689337 0,-1.89949503 -1.5665243,-3.46601933 -3.4660194,-3.46601933 l 0,-3 z',
    explosive: 'm 35.014207,13.15353 -6.739258,9.488607 c 2.051,-0.946 4.331258,-1.47526 6.739258,-1.47526 2.407,0 4.65573,0.52926 6.70573,1.47526 l -6.70573,-9.488607 z m 0,11.265625 c -7.111,0 -12.875,5.764001 -12.875,12.875001 0,7.111 5.764,12.875 12.875,12.875 7.111001,0 12.875001,-5.764 12.875001,-12.875 0,-7.111 -5.764,-12.875001 -12.875001,-12.875001 z m 0,2.179362 9.589193,16.529623 -19.211914,0 9.622721,-16.529623 z',
    leader: 'm 0,-22.514302 -6.25,8.84375 c 1.911612,-0.881709 4.00565,-1.375 6.25,-1.375 2.243417,0 4.37057,0.493291 6.28125,1.375 L 0,-22.514302 z m 0,10.5 c -6.627728,0 -12,5.3732052 -12,12.00000115 0,6.62772785 5.372272,11.99999885 12,11.99999885 6.627728,0 12,-5.372271 12,-11.99999885 C 12,-6.6410968 6.627728,-12.014302 0,-12.014302 z m 4.9375,3.1250012 c 1.659961,0.921786 3.016646,2.308789 3.9375,3.96875 L -4.90625,8.8606992 C -6.566211,7.9398443 -7.921964,6.550978 -8.84375,4.8919492 L 4.9375,-8.8893008 z',
    medic: 'm -0.01138641,-22.478681 -6.29126209,8.854369 c 1.9116116,-0.881709 4.0469126,-1.398058 6.29126209,-1.398058 2.24341751,0 4.35145631,0.516349 6.26213591,1.398058 l -6.26213591,-8.854369 z m 0,10.485437 c -6.62772809,0 -11.99999959,5.3732037 -11.99999959,11.99999981 0,6.62772819 5.3722715,12.00000019 11.99999959,12.00000019 6.62772821,0 12.00000041,-5.372272 12.00000041,-12.00000019 0,-6.62679611 -5.3722722,-11.99999981 -12.00000041,-11.99999981 z m 0,1.864078 c 1.00939812,0 1.99083491,0.1619412 2.91262141,0.4368927 l 0,4.6601941 4.0485437,-2.330097 c 1.4148349,1.3365437 2.4212038,3.0815534 2.8834953,5.038835 L 5.7847301,0.00675581 9.833274,2.3368529 C 9.3709825,4.2950665 8.3664777,6.0410082 6.9497787,7.3756878 l -4.0485437,-2.330097 0,4.6601941 c -0.9208544,0.2758838 -1.90229129,0.4368931 -2.91262141,0.4368931 -1.01033009,0 -1.99269899,-0.1619413 -2.91262129,-0.4368931 l 0,-4.6601941 -4.0485437,2.330097 C -8.3892505,6.0391441 -9.3928232,4.2950665 -9.8560462,2.3368529 L -5.8075029,0.00675581 -9.8560462,-2.3233412 c 0.463223,-1.9582137 1.4695919,-3.7032234 2.8834948,-5.038835 l 4.0485437,2.330097 0,-4.6601941 c 0.9199223,-0.2749515 1.9022912,-0.4368927 2.91262129,-0.4368927 z',
    mg: 'm 0,-22.46875 -6.28125,8.84375 c 1.9116116,-0.881709 4.0369005,-1.40625 6.28125,-1.40625 2.2434174,0 4.3705704,0.524541 6.28125,1.40625 L 0,-22.46875 z M 0,-12 c -6.6277282,0 -12,5.3732038 -12,12 0,6.6277279 5.3722719,12 12,12 C 6.6277282,12 12,6.6277279 12,0 12,-6.6267962 6.6277281,-12 0,-12 z m -0.0625,2 7.75,11.03125 -5.625,-2.5625 0,11.46875 C 1.3905,10.077306 0.71300966,10.15625 0,10.15625 c -0.76240772,0 -1.5038762,-0.09062 -2.21875,-0.25 l 0,-11.4375 L -7.6875,1.03125 -0.0625,-10 z',
    officer: 'm 34.957935,10.274357 -6.739258,9.488607 c 2.051,-0.946 4.331258,-1.475261 6.739258,-1.475261 2.407,0 4.65573,0.529261 6.70573,1.475261 l -6.70573,-9.488607 z m 0,11.265625 c -7.111,0 -12.875,5.764 -12.875,12.875001 0,7.111 5.764,12.875 12.875,12.875 7.111,0 12.875001,-5.764 12.875001,-12.875 0,-7.111001 -5.764001,-12.875001 -12.875001,-12.875001 z m -5.968099,3.788737 5.968099,5.968099 5.968099,-5.968099 c 1.24,0.816 2.302165,1.878165 3.118165,3.118164 l -6.001628,5.9681 6.001628,5.968099 c -0.816,1.24 -1.878165,2.302164 -3.118165,3.118164 l -5.968099,-5.968099 -5.968099,5.968099 c -1.239,-0.816 -2.302164,-1.880164 -3.118164,-3.118164 l 5.968099,-5.968099 -5.968099,-5.9681 c 0.816,-1.238 1.879164,-2.302164 3.118164,-3.118164 z',
    recon: 'm 34.663594,6.7554503 -6.739258,9.4886077 c 2.051,-0.946 4.331258,-1.475261 6.739258,-1.475261 2.407,0 4.689258,0.529261 6.739258,1.475261 L 34.663594,6.7554503 z m 0,11.2656257 c -7.111,0 -12.875,5.765 -12.875,12.875001 0,7.111 5.764,12.875 12.875,12.875 7.111,0 12.875001,-5.764 12.875001,-12.875 0,-7.110001 -5.764001,-12.875001 -12.875001,-12.875001 z m 5.263998,3.352865 c 1.781,0.989 3.270138,2.477138 4.258138,4.258138 L 29.399597,40.418212 c -1.781,-0.987999 -3.269138,-2.478138 -4.258139,-4.258138 L 39.927592,21.373941 z',
    virtual: 'm 34.353008,8.6649727 -6.70573,9.4886063 c 2.051,-0.946001 4.29773,-1.475261 6.70573,-1.475261 2.407,0 4.689258,0.52926 6.739258,1.475261 L 34.353008,8.6649727 z m 0,11.2656243 c -7.11,0 -12.875001,5.765 -12.875001,12.875 0,7.111 5.765001,12.875001 12.875001,12.875001 7.111,0 12.875,-5.764001 12.875,-12.875001 0,-7.11 -5.764,-12.875 -12.875,-12.875 z m 0,2.011719 c 6.007,0 10.89681,4.857281 10.89681,10.863281 0,6.008 -4.88981,10.863282 -10.89681,10.863282 -6.007,0 -10.863282,-4.855282 -10.863282,-10.863282 0,-6.006 4.856282,-10.863281 10.863282,-10.863281 z',
    apc: 'm -7.9375,-33 -3.125,5 0,18.09375 9.5625,0 0,-3.5 3,0 0,3.5 9.5625,0 0,-18.09375 -3,-5 -16,0 z m 12.53125,9.15625 c 2.233,0 4.0625,1.79725 4.0625,4.03125 0,2.232 -1.8295,4.0625 -4.0625,4.0625 -2.234,0 -4.03125,-1.8305 -4.03125,-4.0625 0.001,-2.235 1.79725,-4.03125 4.03125,-4.03125 z m -18.53125,0.1875 0,10.125 1.75,0 0,-10.125 -1.75,0 z m 26.125,0 0,10.125 1.75,0 0,-10.125 -1.75,0 z M 4.59375,-22.125 c -1.2768824,0 -2.3125,1.035618 -2.3125,2.3125 0,1.276882 1.0356176,2.3125 2.3125,2.3125 1.2768824,0 2.3125,-1.035618 2.3125,-2.3125 0,-1.276882 -1.0356176,-2.3125 -2.3125,-2.3125 z m -5.09375,9.59375 0,9 C -2.238,-3.28925 -3.5625,-1.803 -3.5625,0 -3.5625,1.975 -1.973,3.5625 0,3.5625 1.975,3.5625 3.5625,1.974 3.5625,0 3.5625,-1.804 2.239,-3.28925 0.5,-3.53125 l 0,-9 -1,0 z m -10.5625,3.78125 0,8.75 0,0.34375 0,17.75 22.125,0 0,-17.75 0,-0.34375 0,-8.75 -2,1 -7.5625,0 0,2.34375 C 3.877,-4.74925 5.625,-2.585 5.625,0 5.625,3.107 3.106,5.625 0,5.625 -3.105,5.625 -5.625,3.107 -5.625,0 c 0,-2.585 1.749,-4.74925 4.125,-5.40625 l 0,-2.34375 -7.4375,0 -2.125,-1 z m -2.875,0.4375 0,10.09375 1.75,0 0,-10.09375 -1.75,0 z m 26.125,0 0,10.09375 1.75,0 0,-10.09375 -1.75,0 z m -26.125,13.46875 0,10.125 1.75,0 0,-10.125 -1.75,0 z m 26.125,0 0,10.125 1.75,0 0,-10.125 -1.75,0 z m -24,14.375 0.8125,2.9375 22,0 0.8125,-2.9375 -23.625,0 z',
    car_armed: 'm -0.05667375,-24.392215 -10.84375025,1 0,2.5 10.84375025,-1 11.03124975,1 0,-2.5 -11.03124975,-1 z m 0,3 -8.18749985,0.5625 0.125,10.9375005 6.6562498,0 0,-3.5000005 2.9999999,0 0,3.5000005 6.6562499,0 0.125,-10.9375005 -8.37499975,-0.5625 z m -8.71874985,0.6875 -3.1250004,0.3125 0,10.5000005 2.2499999,0 0.8750005,-10.8125005 z m 17.6249996,0 0.875,10.8125005 2.25,0 0,-10.5000005 -3.125,-0.3125 z m -9.31249975,8.1875 0,9.0000006 c -1.73900005,0.242 -3.06250005,1.72725 -3.06250005,3.53124989 0,1.97500011 1.5885,3.56250011 3.56250005,3.56250011 1.97399985,0 3.56249995,-1.5885 3.56249995,-3.56250011 0,-1.80399989 -1.3245001,-3.29024989 -3.06249995,-3.53124989 l 0,-9.0000006 -1,0 z m -16.53125025,3.7812506 0,2.84375 3.40625,0 0,-2.84375 -3.40625,0 z m 5.96875,0 0,8.74999989 0,0.34375004 0,17.74999947 22.125,0 0,-17.74999947 0,-0.34375004 0,-8.74999989 -2,1 -7.5624999,0 0,2.34375 c 2.3770001,0.657 4.1250001,2.82025 4.1250001,5.40624989 0,3.10700011 -2.519,5.62500011 -5.62499995,5.62500011 -3.10600005,0 -5.62500005,-2.518 -5.62500005,-5.62500011 0,-2.58499989 1.748,-4.74824989 4.125,-5.40624989 l 0,-2.34375 -7.4374998,0 -2.1250004,-1 z m 24.6875,0 0,2.84375 3.40625,0 0,-2.84375 -3.40625,0 z m -23.75,2.34375 0.9687504,0 0,6.12499993 -0.9687504,0 0,-6.12499993 z m 19.28125,0 0.96875,0 0,6.12499993 -0.96875,0 0,-6.12499993 z m -19.28125,7.75 0.9687504,0 0,6.125 -0.9687504,0 0,-6.125 z m 19.28125,0 0.96875,0 0,6.125 -0.96875,0 0,-6.125 z m -20.96875,18.1874994 0.8125,2.9375 22,0 0.8125,-2.9375 -23.625,0 z',
    car: 'm -0.125,-21.6875 -10.84375,1 0,2.5 10.84375,-1 11,1 0,-2.5 -11,-1 z m 0,3 -8.21875,0.5625 0.15625,10.9375 16.3125,0 0.125,-10.9375 -8.375,-0.5625 z m -8.75,0.65625 -3.09375,0.34375 0,10.5 2.25,0 0.84375,-10.84375 z M 8.78125,-18 9.625,-7.1875 l 2.25,0 0,-10.5 L 8.78125,-18 z m -25.84375,11.96875 0,2.84375 3.40625,0 0,-2.84375 -3.40625,0 z m 5.96875,0 0,8.75 0,0.34375 0,7.75 22.125,0 0,-7.75 0,-0.34375 0,-8.75 -2,1 -18,0 -2.125,-1 z m 24.6875,0 0,2.84375 3.40625,0 0,-2.84375 -3.40625,0 z m -25.5625,18.28125 0,6.5 3.09375,0.3125 -0.84375,-6.8125 -2.25,0 z m 3.78125,0 -0.15625,6.9375 L 0.0625,19.75 8.25,19.1875 8.125,12.25 l -16.3125,0 z m 17.8125,0 -0.84375,6.8125 3.09375,-0.3125 0,-6.5 -2.25,0 z m -20.59375,7 0,1.5 11.03125,1 10.8125,-1 0,-1.5 -10.8125,1 -11.03125,-1 z',
    helicopter: 'm 12.89234,10.436334 -3.6579995,-1.9120004 -1.859,-1.859 -0.896,-0.896 c 0.218,-0.589 0.422,-1.269 0.604,-2.091 h 10e-4 l 2.4379997,1 1.9999998,-6.1049999 -3.2849995,-5.0000001 c 0.008,-0.363 0.012,-0.729 0.014,-1.097 L 20.37534,-19.647667 l 6.991,-6.992 -1.587,-1.588 -15.347,15.348 -1.9119995,3.6580006 -0.278,0.278 c -0.221,-11.7970006 -3.825,-21.1780006 -8.23900002,-21.1780006 -4.41299998,0 -8.01699998,9.38 -8.23899998,21.1770006 L -19.65166,-20.361667 h -0.001 l -6.991,-6.99 -1.588,1.585 15.347,15.348 3.6580005,1.9120006 0.984,0.982 c 0.002,0.368 0.005,0.734 0.013,1.098 l -3.2850005,6.00000012 2.0000005,5.10499988 2.438,-1 h 10e-4 c 0.182,0.822 0.386,1.503 0.604,2.092 L -20.36566,19.663333 l -6.991,6.994 1.588,1.586 15.346,-15.346 1.9120005,-3.6579994 1.858,-1.859 0.609,-0.609 c 1.165,2.271 2.716,2.437 4.464,3.3570004 v 17.915999 l -6.667,4.668 v 3.322 l 8.26499998,-1 8.23500002,1 v -3.322 l -6.667,-4.668 V 10.128334 c 1.748,-0.9210004 3.3,-1.0870004 4.464,-3.3580004 L 19.65834,20.378333 l 6.993,6.992 1.587,-1.588 -15.346,-15.345999 z M 3.0273405,0.00933372 c 0,0.65199997 -0.211,1.25299988 -0.563,1.74699988 l -0.837,-0.83799994 c 0.151,-0.26999997 0.245,-0.57699994 0.245,-0.90899994 0,-0.332 -0.094,-0.63899995 -0.246,-0.90899995 l 0.838,-0.83800017 c 0.352,0.4940001 0.563,1.09400017 0.563,1.74700012 z M 1.1753404,-26.711667 c 1.8460001,0.791 3.3050001,2.408 3.7810001,5.756 H 1.1753404 v -5.756 z m -2.3439999,0 v 5.756 h -3.781 c 0.476,-3.348 1.936,-4.963 3.781,-5.756 z m 1.17199998,23.6970006 c 0.65199996,0 1.25300002,0.211 1.74700002,0.563 l -0.83700011,0.838 c -0.27099995,-0.152 -0.57799991,-0.246 -0.90999991,-0.246 -0.332,0 -0.639,0.094 -0.90900001,0.245 l -0.83699997,-0.837 c 0.494,-0.352 1.09399998,-0.563 1.74599998,-0.563 z M -3.0206595,0.00933372 c 0,-0.65199995 0.212,-1.25400002 0.563,-1.74800012 l 0.837,0.83800017 c -0.152,0.271 -0.246,0.57799995 -0.246,0.90999995 0,0.332 0.094,0.63999997 0.246,0.90999994 l -0.837,0.83799994 c -0.351,-0.495 -0.563,-1.09599991 -0.563,-1.74799988 z M 0.00334048,3.0343336 c -0.652,0 -1.25299998,-0.212 -1.74699998,-0.563 l 0.83699997,-0.837 c 0.27100001,0.152 0.57800001,0.246 0.91000001,0.246 0.333,0 0.64099996,-0.094 0.91099991,-0.247 l 0.83700011,0.837 c -0.494,0.352 -1.09500006,0.564 -1.74800002,0.564 z',
    helicopter_armed: 'm -0.41455865,-30.130519 c -4.22367705,0.561342 -7.62868805,9.727906 -7.84375005,21.1562504 l -11.4062503,-11.4062504 -7,-7 -1.59375,1.59375 15.375,15.34375 3.6562503,1.9062504 0.96875,1 c 0.002,0.368 0.02325,0.72975 0.03125,1.09375 l -5.4062503,2.84375 0,-3.59375 -3.25,0 0,5.34375 -2.25,1.18749995 0,-3.46874995 -3.25,0 0,14.0937495 3.25,0 0,-4.3749992 2.25,-0.375 0,1.71875 3.25,0 0,-2.21875 6.5312503,-1.0625 c 0.183,0.822 0.407,1.50475 0.625,2.09375 l -13.9062503,13.9062493 -7,6.96875 1.59375,1.59375 15.34375,-15.34375 1.9375003,-3.6562493 1.84375,-1.84375 0.59375,-0.625 c 1.165,2.271 2.72075,2.455 4.46875,3.3749993 l 0,17.90625 -6.65625,4.65625 0,3.3125 8.25000005,-1 8.25000005,1 0,-3.3125 -6.6562501,-4.65625 0,-17.90625 c 1.748,-0.9209993 3.3047501,-1.1039993 4.4687501,-3.3749993 l 13.5937496,13.6249993 7,6.96875 1.59375,-1.59375 -15.375,-15.34375 -3.6562496,-1.9062493 -1.84375,-1.84375 -0.90625,-0.90625 c 0.218,-0.589 0.443,-1.27175 0.625,-2.09375 l 6.5312496,1.0625 0,2.21875 3.25,0 0,-1.6875 2.25,0.34375 0,4.4062492 3.25,0 0,-14.1249995 -3.25,0 0,2.5 -2.25,-1 0,-4.5625 -3.25,0 0,3.125 -5.4062496,-2.375 c 0.008,-0.363 0.02925,-0.72575 0.03125,-1.09375 l 12.1249996,-12.1250004 7,-7 -1.59375,-1.59375 -15.34375,15.34375 -1.9062496,3.6562504 -0.28125,0.28125 c -0.221,-11.7970004 -3.836,-21.1562504 -8.25000005,-21.1562504 -0.137906,0 -0.270002,-0.01811 -0.40625,0 z m -0.78125005,3.40625 0,5.75 -3.75,0 c 0.476,-3.348 1.905,-4.957 3.75,-5.75 z m 2.375,0 c 1.846,0.791 3.2740001,2.402 3.7500001,5.75 l -3.7500001,0 0,-5.75 z m -16.4375003,15.5 -1.625,2.0937504 0,0.96875 3.25,0 0,-0.96875 -1.625,-2.0937504 z m 30.5,0 -1.625,2.0937504 0,0.96875 3.25,0 0,-0.96875 -1.625,-2.0937504 z m -36,3.0625004 -1.625,2.09375 0,0.96875 3.25,0 0,-0.96875 -1.625,-2.09375 z m 41.5,0 -1.625,2.09375 0,0.96875 3.25,0 0,-0.96875 -1.625,-2.09375 z m -20.74999965,5.125 c 0.65199999,0 1.25599995,0.2105 1.74999995,0.5625 l -0.84374996,0.84375 c -0.271,-0.152 -0.57424999,-0.25 -0.90624999,-0.25 -0.332,0 -0.63625,0.099 -0.90625,0.25 l -0.84375005,-0.84375 c 0.494,-0.352 1.09800005,-0.5625 1.75000005,-0.5625 z m -2.46875005,1.28125 0.84375,0.84374995 c -0.152,0.271 -0.25,0.57425 -0.25,0.90625 0,0.332 0.098,0.63625 0.25,0.90625027 l -0.84375,0.84375008 c -0.351,-0.495 -0.5625,-1.09800035 -0.5625,-1.75000035 0,-0.652 0.2115,-1.25599995 0.5625,-1.74999995 z m 4.9375,0 c 0.352,0.494 0.5625,1.09699995 0.5625,1.74999995 0,0.652 -0.2105,1.25600035 -0.5625,1.75000035 l -0.84375,-0.84375008 c 0.151,-0.27000027 0.25,-0.57425027 0.25,-0.90625027 0,-0.332 -0.098,-0.63625 -0.25,-0.90625 l 0.84375,-0.84374995 z m -3.37499995,3.3750003 c 0.271,0.152 0.57425,0.25 0.90625,0.25 0.333,0 0.63624999,-0.097 0.90624999,-0.25 l 0.84374996,0.8125 c -0.494,0.352 -1.09699996,0.5625 -1.74999995,0.5625 -0.652,0 -1.25600005,-0.2115 -1.75000005,-0.5625 l 0.84375005,-0.8125 z',
    motorcycle: 'm 33.401616,14.567135 c -0.349,0 -0.625,0.275 -0.625,0.625 l 0,5.875 c 0.659,-0.353 1.41975,-0.5625 2.21875,-0.5625 0.799,0 1.55875,0.2115 2.21875,0.5625 l 0,-5.875 c 0,-0.35 -0.277,-0.625 -0.625,-0.625 l -3.1875,0 z m -2,4.0625 c -0.349,0 -0.625,0.30725 -0.625,0.65625 l 0,4.375 c -0.94,0.125 -1.75475,0.28575 -2.46875,0.46875 l 0,-0.1875 c -3.1,0.777 -4.23725,1.90375 -4.40625,2.09375 -0.348,0.391 -0.3275,0.99475 0.0625,1.34375 0.39,0.348 0.99675,0.3275 1.34375,-0.0625 0.012,-0.012 0.79,-0.8075 3,-1.4375 l 0,-0.1875 c 0.685,-0.193 1.50475,-0.363 2.46875,-0.5 l 0,3.9375 c -0.342,1.083 -0.53125,2.33125 -0.53125,3.65625 0,2.356 0.4015,4.4325 1.4375,5.8125 l -4.09375,0 c -0.348,0 -0.625,0.30725 -0.625,0.65625 l 0,0.1875 c 0,0.349 0.277,0.65625 0.625,0.65625 l 3.1875,0 0,11.875 c 0,0.348 0.276,0.625 0.625,0.625 l 0.21875,0 c 0.349,0 0.625,-0.277 0.625,-0.625 l 0,-11.875 5.5,0 0,11.875 c 0,0.348 0.276,0.625 0.625,0.625 l 0.21875,0 c 0.349,0 0.625,-0.277 0.625,-0.625 l 0,-11.875 3.1875,0 c 0.349,0 0.625,-0.30725 0.625,-0.65625 l 0,-0.1875 c 0,-0.349 -0.276,-0.65625 -0.625,-0.65625 l -4.09375,0 c 1.037,-1.38 1.4375,-3.4575 1.4375,-5.8125 0,-1.326 -0.19025,-2.57425 -0.53125,-3.65625 l 0,-3.9375 c 0.965,0.138 1.78375,0.307 2.46875,0.5 l 0,0.21875 c 2.205,0.631 2.994,1.40125 3,1.40625 0.187,0.21 0.45875,0.3125 0.71875,0.3125 0.225,0 0.444,-0.09 0.625,-0.25 0.391,-0.348 0.4105,-0.95275 0.0625,-1.34375 -0.17,-0.19 -1.30725,-1.31675 -4.40625,-2.09375 l 0,0.1875 c -0.714,-0.184 -1.52775,-0.34275 -2.46875,-0.46875 l 0,-4.375 c 0,-0.349 -0.276,-0.65625 -0.625,-0.65625 l -0.21875,0 c -0.349,0 -0.625,0.30725 -0.625,0.65625 l 0,4.21875 c -0.217,-0.017 -0.4595,-0.01725 -0.6875,-0.03125 -0.225,-0.935 -1.0595,-1.625 -2.0625,-1.625 -1.005,0 -1.8375,0.69 -2.0625,1.625 -0.228,0.014 -0.4705,0.01425 -0.6875,0.03125 l 0,-4.21875 c 0,-0.349 -0.276,-0.65625 -0.625,-0.65625 l -0.21875,0 z m 1.71875,6.34375 c 0.116,0.218 0.2565,0.3975 0.4375,0.5625 -0.488,0.209 -0.9245,0.5305 -1.3125,0.9375 l 0,-1.46875 c 0.277,-0.024 0.578,-0.01525 0.875,-0.03125 z m 3.75,0 c 0.298,0.017 0.598,0.0083 0.875,0.03125 l 0,1.46875 c -0.389,-0.407 -0.8255,-0.7285 -1.3125,-0.9375 0.182,-0.165 0.3215,-0.3435 0.4375,-0.5625 z m -1.90625,3.1875 c 0.832,0 1.5,0.668 1.5,1.5 0,0.832 -0.669,1.5 -1.5,1.5 -0.832,0 -1.5,-0.668 -1.5,-1.5 0,-0.832 0.668,-1.5 1.5,-1.5 z m -1.90625,12.6875 c -0.097,0 -0.19625,0.0052 -0.28125,0.03125 l 0,7.53125 c 0,0.349 0.276,0.65625 0.625,0.65625 l 3.1875,0 c 0.348,0 0.625,-0.30725 0.625,-0.65625 l 0,-7.53125 c -0.086,-0.026 -0.18525,-0.03125 -0.28125,-0.03125 l -3.875,0 z m -0.28125,8.96875 0,5 c 0,0.349 0.276,0.625 0.625,0.625 l 3.1875,0 c 0.348,0 0.625,-0.276 0.625,-0.625 l 0,-5 -4.4375,0 z',
    plane: 'm 31.299,7.519 c 0,0 0.15,-0.107 0.15,-4.158 0,-4.05300003 -16.352,-7.602 -21.988,-16.035 0,-11.512 -4.498,-19.291 -8.87300003,-19.875 -0.186,-0.035 -0.373,-0.059 -0.563,-0.059 -0.008,0 -0.016,0.002 -0.02500000220339,0.002 C -0.00800003,-32.606 -0.01600003,-32.608 -0.02500003,-32.608 c -0.189,0 -0.375,0.023 -0.563,0.059 -4.37299987,0.584 -8.87099987,8.363 -8.87099987,19.875 C -15.098,-4.24 -31.449,-0.69200003 -31.449,3.361 c 0,4.051 0.152,4.158 0.152,4.158 L -8.1019999,1.206 c 1.186,5.346 3.494,18.352 3.494,18.352 L -11.276,24.226 v 3.322 l 0.051,-0.006 v 0.006 l 9.755,-0.869 v 5.93 h 2.938 v -5.93 l 9.756,0.869 v -0.006 l 0.051,0.006 V 24.226 L 4.609,19.558 c 0,0 2.307,-13.006 3.492,-18.352 L 31.299,7.519 z M 1.197,-29.173 c 1.822,0.801 3.26,2.414 3.73,5.73 l -3.73,-2 v -3.73 z m -2.394,0 v 3.73 l -3.7299999,2 c 0.472,-3.316 1.909,-4.929 3.7299999,-5.73 z m -5.8169999,14.027 c 0.441,-0.041 0.881,0.84 0.981,1.965 0.1,1.125 -0.175,2.07 -0.616,2.111 -0.443,0.039 -0.883,-0.842 -0.984,-1.967 -0.101,-1.125 0.176,-2.069 0.619,-2.109 z m 0.542,6.036 c 0.441,-0.039 0.881,0.84 0.981,1.965 0.102,1.127 -0.174,2.072 -0.615,2.111 -0.443,0.041 -0.884,-0.84 -0.984,-1.967 -0.101,-1.125 0.175,-2.068 0.618,-2.109 z m 0.572,6.365 c 0.441,-0.041 0.881,0.84 0.982,1.96499997 0.101,1.125 -0.174,2.07000003 -0.615,2.11100003 -0.443,0.039 -0.884,-0.84200003 -0.984,-1.96700003 -0.102,-1.12499997 0.173,-2.06999997 0.617,-2.10899997 z m 0.916,10.189 c -0.443,0.041 -0.883,-0.84 -0.984,-1.965 -0.101,-1.125 0.176,-2.07 0.619,-2.111 0.441,-0.039 0.881,0.842 0.981,1.967 0.1,1.125 -0.175,2.07 -0.616,2.109 z M 5.97,5.479 C 5.868,6.604 5.429,7.485 4.986,7.444 4.545,7.405 4.269,6.46 4.37,5.335 4.471,4.21 4.91,3.329 5.351,3.368 5.794,3.409 6.071,4.354 5.97,5.479 z M 6.519,-0.63600003 C 6.418,0.48899997 5.978,1.37 5.535,1.331 5.094,1.29 4.818,0.34499997 4.92,-0.78000003 5.022,-1.905 5.461,-2.786 5.902,-2.745 6.345,-2.706 6.62,-1.761 6.519,-0.63600003 z M 7.091,-7.001 C 6.99,-5.874 6.55,-4.993 6.107,-5.034 5.666,-5.073 5.39,-6.018 5.492,-7.145 5.593,-8.27 6.032,-9.149 6.473,-9.11 c 0.443,0.041 0.719,0.984 0.618,2.109 z m 0.543,-6.035 c -0.102,1.125 -0.541,2.006 -0.984,1.967 -0.441,-0.041 -0.717,-0.986 -0.616,-2.111 0.101,-1.125 0.54,-2.006 0.981,-1.965 0.443,0.039 0.72,0.984 0.619,2.109 z',
    plane_armed: 'm 0.03567452,-33.370576 c -0.003,0 -1.55549992,2.02975 -3.56249992,5.59375 1.134,-0.25 2.30325,-0.40625 3.53124992,-0.40625 1.29300008,0 2.56400008,0.1615 3.75000008,0.4375 -2.002,-3.592 -3.63075008,-5.625 -3.71875008,-5.625 z m 0.0625,6.71875 c -1.93549992,-0.01025 -3.87324992,0.14775 -4.53124992,0.46875 -2.449,5.146 -5,15.60175 -5,24.3437509 l -1.9062506,3.0625 -3,0 0,4.75 -2.249999,3.5625 0,-1.25 -3.25,0 0,6.4062491 -1.5625,2.5 0.125,9.15625 10.156249,-11.03125 0.03125,0 0,-0.03125 3.0312506,-3.25 c 1.186,5.346 3.5,8.34375 3.5,8.34375 l -5.6875006,6.65625 0,3.34375 0.0625,0 8.7500006,-2.5625 0,5.625 2.9375,0 0,-5.625 8.7500004,2.5625 0.0625,0 0,-3.34375 -5.6875004,-6.65625 c 0,0 2.3150005,-2.99775 3.5000005,-8.34375 l 3.0312499,3.25 0,0.03125 0.03125,0 10.15625,11.03125 0.125,-9.15625 -1.5625,-2.5 0,-6.4062491 -3.25,0 0,1.25 -2.25,-3.5625 0,-4.75 -2.96875,0 -1.9374995,-3.0625 c 0,-8.7070009 -2.4690004,-19.1362509 -4.8750009,-24.2812509 -0.672,-0.341 -2.59575,-0.521 -4.53125008,-0.53125 z m -0.0625,1.65625 c 1.48800008,0 2.72675008,2.7395 3.09375008,6.4375 l -3.12500008,-1 -3.06249992,1 c 0.363,-3.698 1.60175,-6.4375 3.09374992,-6.4375 z m -0.03125,7.625 3.25000008,1 c 0,4.768 -1.44375,5.84375 -3.21875008,5.84375 -1.77499992,0 -3.21874992,-1.07675 -3.21874992,-5.84375 l 3.18749992,-1 z m -12.71875052,14.5625009 -1.625,2.09374994 0,0.96875 3.25,0 0,-0.96875 -1.625,-2.09374994 z m 25.500001,0 -1.625,2.09374994 0,0.96875 3.25,0 0,-0.96875 -1.625,-2.09374994 z m -31,7.0625 -1.625,2.09375 0,0.96875 3.25,0 0,-0.96875 -1.625,-2.09375 z m 36.5,0 -1.625,2.09375 0,0.96875 3.25,0 0,-0.96875 -1.625,-2.09375 z',
    quad: 'm 0.14830501,-14.051907 c -3.95200001,0 -4.84375001,6.8437502 -4.84375001,6.8437502 l 2.46875,0 c 0.469,-1.176 1.35,-2 2.37500001,-2 1.02499999,0 1.90599999,0.824 2.37499999,2 l 2.46875,0 c 0,0 -0.89175,-6.8437502 -4.84374999,-6.8437502 z m -8.90625001,2.34375 c -0.553,0 -1.0000002,0.447 -1.0000002,1 l 0,7.625 c 0,0.553 0.4470002,1 1.0000002,1 l 1.0937501,0 c -0.154,0.418 -0.23325,0.81225 -0.28125,1.15625003 l -2.9062501,0 0,2.84374997 3.4062501,0 0,-0.99999997 c 0.094,0.025 0.17925,0.015 0.28125,0 0.411,-0.056 0.71225,-0.43375 0.65625,-0.84375 -0.002,-0.013 -0.1305,-1.14825003 0.5624999,-2.28125003 0.229,-0.129 0.39775,-0.33375 0.46875,-0.59375 0.253,-0.271 0.537,-0.5409998 0.875,-0.7499998 l 0,1.0624998 c 0,0.542 0.43175,0.984 0.96875,1 -0.631,1.30300003 -0.96875,2.96025 -0.96875,4.7812501 0,0.249 0.02125,0.443 0.03125,0.625 l -2.6874999,0 c -0.349,0 -0.625,0.276 -0.625,0.625 l 0,0.21875 c 0,0.349 0.276,0.625 0.625,0.625 l 2.6562499,0 0,7.5312499 c 0,0.553 0.448,1 1,1 l 1.53125,0 0,2.03125 c 0,0.349 0.276,0.625 0.625,0.625 l 3.1875,0 c 0.348,0 0.625,-0.276 0.625,-0.625 l 0,-2.03125 1.53125,0 c 0.553,0 1,-0.447 1,-1 l 0,-7.5312499 2.65625,0 c 0.349,0 0.625,-0.276 0.625,-0.625 l 0,-0.21875 c 0,-0.349 -0.276,-0.625 -0.625,-0.625 l -2.6875,0 c 0.01,-0.182 0.03125,-0.376 0.03125,-0.625 0,-1.8210001 -0.33775,-3.50950007 -0.96875,-4.8125001 0.538,-0.016 0.96875,-0.42675 0.96875,-0.96875 l 0,-1.0624998 c 0.338,0.209 0.622,0.4487498 0.875,0.7187498 0.071,0.26 0.23875,0.495 0.46875,0.625 0.692,1.125 0.5685,2.23025003 0.5625,2.28125003 -0.056,0.411 0.24525,0.78875 0.65625,0.84375 0.035,0.005 0.05875,0.03125 0.09375,0.03125 0.067,0 0.1245,-0.0445 0.1875,-0.0625 l 0,1.03124997 3.40625,0 0,-2.84374997 -2.90625,0 C 8.194055,-1.271907 8.113805,-1.665157 7.960805,-2.083157 l 1.09375,0 c 0.553,0 1,-0.447 1,-1 l 0,-7.625 c 0,-0.553 -0.447,-1 -1,-1 l -2.34375,0 c -0.553,0 -1,0.447 -1,1 l 0,5.9375002 c -0.936,-0.587 -2.08275,-0.9995 -3.46875,-1.1875 -0.197,-0.973 -1.06275,-1.6875 -2.09374999,-1.6875 -1.03100001,0 -1.89675001,0.7145 -2.09375001,1.6875 -1.387,0.188 -2.53375,0.6005 -3.46875,1.1875 l 0,-5.9375002 c 0,-0.553 -0.447,-1 -0.9999999,-1 l -2.3437501,0 z m 8.87500001,10.375 c 0.832,0 1.49999999,0.66800003 1.49999999,1.50000003 0,0.832 -0.66899999,1.49999997 -1.49999999,1.49999997 -0.83200001,0 -1.50000001,-0.66799997 -1.50000001,-1.49999997 0,-0.832 0.668,-1.50000003 1.50000001,-1.50000003 z M -8.757945,6.1980931 c -0.552,0 -1.0000002,0.447 -1.0000002,1 l 0,7.6562499 c 0,0.553 0.4480002,1 1.0000002,1 l 2.3437501,0 c 0.5519999,0 0.9999999,-0.447 0.9999999,-1 l 0,-7.6562499 c 0,-0.553 -0.448,-1 -0.9999999,-1 l -2.3437501,0 z m 15.46875,0 c -0.553,0 -1,0.447 -1,1 l 0,7.6562499 c 0,0.553 0.447,1 1,1 l 2.34375,0 c 0.553,0 1,-0.447 1,-1 l 0,-7.6562499 c 0,-0.553 -0.447,-1 -1,-1 l -2.34375,0 z',
    ship: 'm -0.26906786,-33.258474 c -2.31900004,0 -13.75000014,13.07125 -13.75000014,42.7812493 0,3.4790007 4.6562501,25.2187507 4.6562501,25.2187507 l 16.6874997,0 c 0,0 5.6562502,-19.76975 5.6562502,-25.2187507 0.001,-29.9509993 -10.9309999,-42.7812493 -13.24999986,-42.7812493 z m -8.28125004,32.6562494 7.28125,0 0,4.25 -5.90625,0 -0.90625,7.7812496 -1.46875,0 1,-12.0312496 z m 8.78125004,0 7.28124966,0 1,12.0312496 -1.4687497,0 -0.90625,-7.7812496 -5.90624996,0 0,-4.25 z m -9.78125004,13.9687506 1,0 0,4.84375 -1,-4.84375 z m 2.09375,0 1.40625,0 0,9.6875 -1.40625,0 0,-9.6875 z m 2.46875,0 1.4375,0 0,9.6875 -1.4375,0 0,-9.6875 z m 2.5,0 1.4375,0 0,9.6875 -1.4375,0 0,-9.6875 z m 2.50000004,0 1.43749996,0 0,9.6875 -1.43749996,0 0,-9.6875 z m 2.49999996,0 1.4375,0 0,9.6875 -1.4375,0 0,-9.6875 z m 2.5,0 1.40625,0 0,9.6875 -1.40625,0 0,-9.6875 z m 2.4999997,0 1,0 -1,4.84375 0,-4.84375 z m -12.5937497,14.46875 c 1.15,0 2.0625,0.89 2.0625,2 0,1.108 -0.9115,2.03125 -2.0625,2.03125 -1.149,0 -2.09375,-0.92325 -2.09375,-2.03125 0,-1.109 0.94475,-2 2.09375,-2 z m 9.125,0 c 1.148,0 2.09375,0.89 2.09375,2 0,1.108 -0.94475,2.03125 -2.09375,2.03125 -1.15,0 -2.0625,-0.92325 -2.0625,-2.03125 0,-1.109 0.9125,-2 2.0625,-2 z m -9.125,0.84375 c -0.673787,0 -1.25,0.506763 -1.25,1.15625 0,0.649487 0.576213,1.1875 1.25,1.1875 0.673787,0 1.21875,-0.538013 1.21875,-1.1875 0,-0.649487 -0.544963,-1.15625 -1.21875,-1.15625 z m 9.125,0 c -0.67434,0 -1.21875,0.506763 -1.21875,1.15625 0,0.649487 0.54441,1.1875 1.21875,1.1875 0.67434,0 1.25,-0.538013 1.25,-1.1875 0,-0.649487 -0.57566,-1.15625 -1.25,-1.15625 z',
    ship_armed: 'm 0.3291121,-33.920887 c -2.318,0 -13.7500001,13.07125 -13.7500001,42.7812488 0,3.4790012 4.6562501,25.2187512 4.6562501,25.2187512 l 16.6875,0 c 0,0 5.6562499,-19.76975 5.6562499,-25.2187512 0,-29.9519988 -10.9309999,-42.7812488 -13.2499999,-42.7812488 z m -1.75,5.90625 3,0 0,8 c 2.377,0.657 4.125,2.81925 4.125,5.40625 0,3.105 -2.519,5.624999 -5.625,5.624999 -3.105,10e-4 -5.625,-2.519999 -5.625,-5.624999 0,-2.587 1.749,-4.74925 4.125,-5.40625 l 0,-8 z m 1.00000008,0.875 0,9 c -1.73800008,0.241 -3.06250008,1.72625 -3.06250008,3.53125 0,1.973 1.5895,3.5625 3.5625,3.5625 1.975,0 3.5625,-1.5905 3.5625,-3.5625 0,-1.806 -1.3235,-3.29025 -3.0625,-3.53125 l 0,-9 -0.99999992,0 z m -7.53125008,25.8749991 7.28125008,0 0,4.2499997 -5.90625008,0 -0.90625,7.7812512 -1.46875,0 1,-12.0312509 z m 8.78125003,0 7.28124997,0 1,12.0312509 -1.46875,0 -0.90625,-7.7812512 -5.90624997,0 0,-4.2499997 z m -9.78125003,13.9687509 1,0 0,4.84375 -1,-4.84375 z m 2.09375,0 1.40625,0 0,9.6875 -1.40625,0 0,-9.6875 z m 2.46875,0 1.4375,0 0,9.6875 -1.4375,0 0,-9.6875 z m 2.5,0 1.43750008,0 0,9.6875 -1.43750008,0 0,-9.6875 z m 2.5,0 1.4375,0 0,9.6875 -1.4375,0 0,-9.6875 z m 2.5,0 1.4375,0 0,9.6875 -1.4375,0 0,-9.6875 z m 2.5,0 1.4375,0 0,9.6875 -1.4375,0 0,-9.6875 z m 2.5,0 1,0 -1,4.84375 0,-4.84375 z m -12.59375,14.46875 c 1.15,0 2.0625,0.89 2.0625,2 0,1.108 -0.9125,2.03125 -2.0625,2.03125 -1.149,0 -2.09375,-0.92325 -2.09375,-2.03125 0,-1.109 0.94475,-2 2.09375,-2 z m 9.125,0 c 1.149,0 2.09375,0.89 2.09375,2 0,1.108 -0.94375,2.03125 -2.09375,2.03125 -1.15,0 -2.0625,-0.92325 -2.0625,-2.03125 0,-1.109 0.9125,-2 2.0625,-2 z',
    tank: 'm -2.09375,-32.263361 0,7.15625 1,0 0,18.1249991 -5.8125,0 -5.59375,5.65625 0,10.3749998 2.7812503,7.1562511 19.4374997,0 2.78125,-7.1562511 0,-10.3749998 -5.59375,-5.65625 -5.8125,0 0,-18.1249991 1,0 0,-7.15625 -4.1875,0 z m -6.0625,5.15625 -8.6875,2 0,55.28125 6.65625,0 2.78125,2.0625 14.8125,0 2.78125,-2.0625 6.65625,0 0,-55.28125 -8.6875,-2 0,18.9374995 6,6.0937495 0,11.5937499 -3.21875,8.3125011 -2.78125,0 0,11.40625 -16.3125,0 0,-11.40625 -2.78125,0 -3.21875,-8.3125011 0,-11.5937499 6,-6.0937495 0,-18.9374995 z m 1.75,3 0,15.1562495 4.3125,0 0,-15.1562495 -4.3125,0 z m 8.5,0 0,15.1562495 4.5625,0 0,-15.1562495 -4.5625,0 z M 3.8125,3.7678881 c 2.659,0 4.8125,2.1535 4.8125,4.8124998 0,2.6580001 -2.1535,4.8125011 -4.8125,4.8125011 -2.659,0 -4.81249996,-2.154501 -4.81249996,-4.8125011 0,-2.6579998 2.15349996,-4.8124998 4.81249996,-4.8124998 z m -10.46875,14.3125009 0,9.65625 13.3125,0 0,-9.65625 -13.3125,0 z',
    truck: 'm -0.09374998,-32.1875 -10.84375102,1 0,2.5 10.84375102,-1 11.03124798,1 0,-2.5 -11.03124798,-1 z m 0,3 -8.18749992,0.53125 0.125,10.96875 16.3124991,0 0.125,-10.9375 -8.37499918,-0.5625 z m -8.71874992,0.65625 -3.1250011,0.34375 0,10.5 2.2500011,0 0.875,-10.84375 z m 17.6249991,0 0.875,10.84375 2.2499988,0 0,-10.5 -3.1249988,-0.34375 z m -25.8437512,12 0,2.84375 3.406251,0 0,-2.84375 -3.406251,0 z m 5.968751,0 0,9.0937499 22.124999,0 0,-9.0937499 -1.9999988,1 -17.9999991,0 -2.1250011,-1 z m 24.687499,0 0,2.84375 3.40625,0 0,-2.84375 -3.40625,0 z m -26.124999,10.7187499 c -0.55,0 -1,0.449 -1,1 l 0,36.0312501 c 0,0.551 0.45,0.96875 1,0.96875 l 24.999999,0 c 0.551,0 1,-0.41775 1,-0.96875 l 0,-36.0312501 c 0,-0.551 -0.449,-1 -1,-1 l -24.999999,0 z m 1,8.125 22.999999,0 0,1.75 -22.999999,0 0,-1.75 z m 0,10.0000001 22.999999,0 0,1.75 -22.999999,0 0,-1.75 z m 0,10 22.999999,0 0,1.75 -22.999999,0 0,-1.75 z',
    unknown: 'm -2.7003441,10.063824 4.7578125,0 0,5.953125 -4.7578125,0 0,-5.953125 m 4.6171875,-3.4453128 -4.4765625,0 0,-3.609375 c -9.3e-6,-1.5781104 0.2187405,-2.87498412 0.65625,-3.890625 0.4374896,-1.0156071 1.35936369,-2.1952934 2.76562501,-3.5390625 L 2.9715309,-6.5064888 c 0.8906093,-0.8281016 1.5312336,-1.6093509 1.921875,-2.34375 0.4062329,-0.7343494 0.6093576,-1.4843482 0.609375,-2.2500002 -1.74e-5,-1.390596 -0.5156418,-2.515595 -1.546875,-3.375 -1.0156398,-0.859343 -2.3672009,-1.289031 -4.05468749,-1.289062 -1.23438551,3.1e-5 -2.55469671,0.273469 -3.96093751,0.820312 -1.3906314,0.546906 -2.8437549,1.34378 -4.359375,2.390625 l 0,-4.40625 c 1.4687451,-0.890591 2.9531186,-1.554653 4.453125,-1.992187 1.5156156,-0.437465 3.07811404,-0.656215 4.68750001,-0.65625 2.87498459,3.5e-5 5.17966969,0.757847 6.91406249,2.273437 1.7499788,1.515657 2.6249776,3.515655 2.6249996,6 -2.2e-5,1.187526 -0.2812714,2.3203377 -0.8437496,3.3984377 -0.5625207,1.0625229 -1.5468947,2.2656467 -2.953125,3.609375 l -2.0625,2.015625 C 3.6668279,-1.5767837 3.1433909,-0.99865928 2.8309059,-0.5768013 2.5340165,-0.17053511 2.3230792,0.22790199 2.1980934,0.6185112 2.1043294,0.94665127 2.034017,1.3450884 1.9871559,1.8138237 1.9402671,2.2825874 1.9168296,2.9232118 1.9168434,3.7356987 l 0,2.8828125'
};

_.extend(paths, {
    iconManAT: paths.at,
    iconMan: paths.man,
    iconManOfficer: paths.officer,
    iconManLeader: paths.leader,
    iconManMedic: paths.medic,
    iconManMG: paths.mg,
    iconManExplosive: paths.explosive,
    "\\A3\\Soft_F_Gamma\\Offroad_01\\Data\\UI\\map_offroad_armed_CA.paa": paths.car_armed,
    "\\A3\\soft_f\\MRAP_02\\Data\\UI\\map_MRAP_02_CA.paa": paths.car_armed,
	"\\A3\\Air_F_Beta\\Heli_Attack_01\\Data\\UI\\Map_Heli_Attack_01_CA.paa": paths.helicopter_armed

});

var iconToPath = function (icon) {
	var path = paths[icon];

	if (path) {
		return path;
	}

	icon = icon.toLowerCase();
	if (icon.indexOf('heli') !== -1) {
		return paths.helicopter;
	}
	if (icon.indexOf('\\truck') !== -1) {
		return paths.truck;
	}
	if (icon.indexOf('_van_') !== -1) {
		return paths.car;
	}

	console.log('FIXME unknown icon: ' + icon);
	return paths.unknown;
};
