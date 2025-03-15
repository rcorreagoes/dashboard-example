import { About, Menu, Settings } from 'leaf-dashboard';

export const ABOUT_MOCK: About = {
  date: '07-03-2025',
  type: [
    {
      typeName: 'Novas funções',
      contentType: [
        {
          title: 'About',
          description:
            'Informe aos usuários as novas funções e correções do sistem.',
        },
        {
          title: 'Table',
          description:
            'Crie tabelas de forma prática e rápida, sem precisar de muito código.',
        },
      ],
    },
    {
      typeName: 'Correções',
      contentType: [
        {
          title: 'Estilo',
          description: 'Ajuste de cores para modo noturno.',
        },
        {
          title: 'Spinner',
          description: 'Correção do spinner na tela principal.',
        },
      ],
    },
  ],
};

export const MENU_MOCK: Menu[] = [
  {
    icon: 'person',
    item: 'Clientes',
    children: [{ icon: 'account_circle', item: 'Cadastro' }],
  },
  {
    icon: 'assessment',
    item: 'Relatórios',
    children: [
      {
        icon: 'attach_money',
        item: 'Financeiro',
        children: [{ item: 'Acumulado' }, { item: 'Por período' }],
      },
      {
        icon: 'security',
        item: 'Segurança',
        children: [
          { icon: 'vpn_key', item: 'Acessos' },
          { icon: 'bug_report', item: 'Bugs' },
        ],
      },
    ],
  },
  {
    icon: 'security',
    item: 'Acessos',
    children: [
      { icon: 'person', item: 'Usuários' },
      { icon: 'featured_play_list', item: 'Log de acessos' },
    ],
  },
  {
    icon: 'insert_emoticon',
    item: 'Exemplos',
    children: [
      { item: 'Button', route: 'button' },
      { icon: 'input', item: 'Input', route: 'input' },
      { icon: '', item: 'Line chart', route: 'chart' },
      { icon: '', item: 'Table', route: 'table' },
    ],
  },
];

export const SETTINGS_MOCK: Settings[] = [
  {
    icon: 'info',
    label: 'Sobre',
    click: 'about',
  },
  {
    icon: '',
    label: 'about',
    click: '',
  },
];
