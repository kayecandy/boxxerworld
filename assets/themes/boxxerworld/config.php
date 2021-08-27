<?php 


const BOXXERWORLD_DIR = __DIR__;
const BOXXERWORLD_URL = 'assets/themes/boxxerworld'; 

const CONFIG = [
    'controls'  => [
        [
            'id'        => 'styles',
            'title'     => 'Styles',
            'icon'      => 'assets/icons/control-styles.svg',
            'active'    => true
        ],
        [
            'id'        => 'name',
            'title'     => 'Add Name',
            'icon'      => 'assets/icons/control-text.svg'
        ],
        [
            'id'        => 'graphic',
            'title'     => 'Graphic',
            'icon'      => 'assets/icons/control-graphic.svg'
        ],
        [
            'id'        => 'flag',
            'title'     => 'Flag',
            'icon'      => 'assets/icons/control-flag.svg'
        ],
        [
            'id'        => 'tassels',
            'title'     => 'Tassels',
            'icon'      => 'assets/icons/control-tassels.svg'
        ],
        [
            'id'        => 'crystals',
            'title'     => 'Crystals',
            'icon'      => 'assets/icons/control-crystals.svg'
        ]
    ],
    'controls-top'      => [
        [
            'id'        => 'save',
            'title'     => 'Save',
            'icon'      => 'assets/icons/top-save.svg'
        ],
        [
            'id'        => 'fit',
            'title'     => 'Fit',
            'icon'      => 'assets/icons/top-fit.svg'
        ],
        [
            'id'        => 'share',
            'title'     => 'Share',
            'icon'      => 'assets/icons/top-share.svg'
        ],
        [
            'id'        => '360',
            'title'     => '360º',
            'icon'      => 'assets/icons/top-360.svg'
        ],
        [
            'id'        => 'list',
            'title'     => 'List',
            'icon'      => 'assets/icons/top-list.svg'
        ]
    ],
    'leg-cuts'          => [
        'title'         => 'Choose Leg Cut',
        'choices'       => [
            [
                'id'    => 'side-slit',
                'img'   => 'assets/icons/leg_cut-side_slit.svg',
                'title' => 'Side Slit'
            ],
            [
                'id'    => 'curve-leg',
                'img'   => 'assets/icons/leg_cut-curve_leg.svg',
                'title' => 'Curve Leg'

            ],
            [
                'id'    => 'wave-leg',
                'img'   => 'assets/icons/leg_cut-wave_leg.svg',
                'title' => 'Wave Leg'

            ]
        ] 
    ],
    'sizes'             => [
        'title'         => 'Choose your size',
        'choices'       => [
            [
                'id'    => 'standard',
                'title' => 'Standard',
                'img'   => 'assets/icons/size-standard.svg'
            ],
            [
                'id'    => 'retro',
                'title' => 'Retro',
                'img'   => 'assets/icons/size-retro.svg'
            ]
        ]
    ]
];

?>