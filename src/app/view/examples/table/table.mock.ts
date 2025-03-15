import { Align, ButtonTypeStyle, TableFields, Types } from 'leaf-dashboard';

export const MOCK_TABLE_1 = [
  { id: 1, name: 'Maia', progress: '%', fruit: 'blueberry' },
  { id: 2, name: 'Asher', progress: '%', fruit: 'lychee' },
  { id: 3, name: 'Olivia', progress: '%', fruit: 'kiwi' },
  { id: 4, name: 'Atticus', progress: '%', fruit: 'mango' },
  { id: 5, name: 'Amelia', progress: '%', fruit: 'blueberry' },
  { id: 6, name: 'Jack', progress: '%', fruit: 'pomegranate' },
  { id: 7, name: 'Charlotte', progress: '%', fruit: 'mango' },
  { id: 8, name: 'Theodore', progress: '%', fruit: 'lychee' },
  { id: 9, name: 'Isla', progress: '%', fruit: 'pineapple' },
  { id: 10, name: 'Oliver', progress: '%', fruit: 'peach' },
  { id: 11, name: 'Isabella', progress: '%', fruit: 'blueberry' },
  { id: 12, name: 'Jasper', progress: '%', fruit: 'lychee' },
  { id: 13, name: 'Cora', progress: '%', fruit: 'peach' },
  { id: 14, name: 'Levi', progress: '%', fruit: 'lychee' },
  { id: 15, name: 'Violet', progress: '%', fruit: 'kiwi' },
  { id: 16, name: 'Arthur', progress: '%', fruit: 'blueberry' },
  { id: 17, name: 'Mia', progress: '%', fruit: 'lime' },
  { id: 18, name: 'Thomas', progress: '%', fruit: 'lychee' },
  { id: 19, name: 'Elizabeth', progress: '%', fruit: 'mango' },
];

export const MOCK_FIELDS: TableFields[] = [
  {
    field: 'id',
    header: 'ID',
    align: Align.LEFT,
    type: Types.TEXT,
    width: '10%',
  },
  {
    field: 'name',
    header: 'Nome',
    align: Align.LEFT,
    type: Types.TEXT,
    width: '40%',
  },
  {
    field: 'progress',
    header: 'Progresso',
    align: Align.LEFT,
    type: Types.TEXT,
    width: '15%',
  },
  {
    field: 'fruit',
    header: 'Fruta',
    align: Align.LEFT,
    type: Types.TEXT,
    width: '15%',
  },
  {
    field: 'icon',
    header: '',
    align: Align.RIGHT,
    type: Types.ICON,
    width: '10%',
    IconValues: [
      {
        icon: 'more_vert',
        eventOnClick: 'alert',
        tooltip: 'Update',
        lightColor: '#415f91',
        darkColor: '#aac7ff',
      },
      {
        icon: 'bug_report',
        eventOnClick: '',
        tooltip: 'Update',
        lightColor: '#ba1a1a',
        darkColor: '#ffb4ab',
      },
    ],
  },
  {
    field: 'button',
    header: '',
    align: Align.RIGHT,
    type: Types.BUTTON,
    width: '10%',
    buttonValues: [
      {
        label: 'Testes',
        buttonType: ButtonTypeStyle.MatRaisedButton,
        eventOnClick: 'alert',
        tooltip: 'Update',
      },
    ],
  },
];
