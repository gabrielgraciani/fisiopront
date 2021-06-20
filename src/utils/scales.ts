import { IScale } from '../domains/Scale';

export const scales: IScale[] = [
  {
    id: '1',
    name: 'Índice de Barthel',
    activities: [
      {
        id: '1-1',
        question: 'Alimentação',
        key: 'alimentation',
        options: [
          { id: '1-1-1', option: 'Incapacitado', value: 0 },
          {
            id: '1-1-2',
            option:
              'Preicsa de ajuda para cortar, passar manteiga, etc, ou dieta modificada',
            value: 5,
          },
          { id: '1-1-3', option: 'Independente', value: 10 },
        ],
      },
      {
        id: '1-2',
        question: 'Banho',
        key: 'bath',
        options: [
          { id: '1-2-1', option: 'Dependente', value: 0 },
          { id: '1-2-2', option: 'Independente (ou no chuveiro)', value: 5 },
        ],
      },
      {
        id: '1-3',
        question: 'Atividades rotineiras',
        key: 'routine',
        options: [
          {
            id: '1-3-1',
            option: 'Precisa de ajuda com a higiene pessoal',
            value: 0,
          },
          {
            id: '1-3-2',
            option: 'Independente rosto/cabelo/dentes/barbear',
            value: 5,
          },
        ],
      },
      {
        id: '1-4',
        question: 'Vestir-se',
        key: 'dressUp',
        options: [
          { id: '1-4-1', option: 'Dependente', value: 0 },
          {
            id: '1-4-2',
            option: 'Precisa de ajuda mas consegue fazer uma parte sozinho',
            value: 5,
          },
          { id: '1-4-3', option: 'Independente', value: 10 },
        ],
      },
      {
        id: '1-5',
        question: 'Intestino',
        key: 'intestine',
        options: [
          {
            id: '1-5-1',
            option: 'Incontinente (necessidade de enemas)',
            value: 0,
          },
          { id: '1-5-2', option: 'Acidente ocasional', value: 5 },
          { id: '1-5-3', option: 'Continente', value: 10 },
        ],
      },
      {
        id: '1-6',
        question: 'Sistema urinário',
        key: 'urinary',
        options: [
          {
            id: '1-6-1',
            option: 'Incontinente, ou cateterizado e incapaz de manejo',
            value: 0,
          },
          { id: '1-6-2', option: 'Acidente ocasional', value: 5 },
          { id: '1-6-3', option: 'Continente', value: 10 },
        ],
      },
    ],
  },
];
