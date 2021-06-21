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
  {
    id: '2',
    name: 'Escala de Hacor',
    activities: [
      {
        id: '1-1',
        question: 'Frequência cardíaca',
        key: 'heartRate',
        options: [
          { id: '1-1-1', option: '≤ 120', value: 0 },
          {
            id: '1-1-2',
            option: '≥ 121',
            value: 5,
          },
        ],
      },
      {
        id: '1-2',
        question: 'pH',
        key: 'ph',
        options: [
          { id: '1-2-1', option: '≥	7.35', value: 0 },
          { id: '1-2-2', option: '7.30 - 7.34', value: 2 },
          { id: '1-2-3', option: '7.25 - 7.29', value: 3 },
          { id: '1-2-4', option: '< 7.25', value: 4 },
        ],
      },
      {
        id: '1-3',
        question: 'Glasgow',
        key: 'glasgow',
        options: [
          { id: '1-3-1', option: '15', value: 0 },
          { id: '1-3-2', option: '13 - 14', value: 2 },
          { id: '1-3-3', option: '11 - 12', value: 5 },
          { id: '1-3-4', option: '≥ 10', value: 10 },
        ],
      },
      {
        id: '1-4',
        question: 'Pa02/Fi02',
        key: 'pa02/fi02',
        options: [
          { id: '1-4-1', option: '≥ 201', value: 0 },
          { id: '1-4-2', option: '176 - 200', value: 2 },
          { id: '1-4-3', option: '151 - 175', value: 5 },
          { id: '1-4-4', option: '≤ 100', value: 10 },
        ],
      },
      {
        id: '1-5',
        question: 'Frequência respiratória',
        key: 'breathRate',
        options: [
          { id: '1-5-1', option: '≤ 30', value: 0 },
          { id: '1-5-2', option: '31 - 35', value: 1 },
          { id: '1-5-3', option: '36 - 40', value: 2 },
          { id: '1-5-3', option: '41 - 45', value: 3 },
          { id: '1-5-3', option: '≥	40', value: 4 },
        ],
      },
    ],
  },
  {
    id: '3',
    name: 'Mobility Scale',
    activities: [
      {
        id: '3-1',
        question: 'Escala de mobilidade em UTI',
        key: 'mobility',
        options: [
          { id: '3-1-1', option: 'Nada (deitado no leito)', value: 0 },
          {
            id: '3-1-2',
            option: 'Sentado no leito, exercícios no leito',
            value: 1,
          },
          {
            id: '3-1-3',
            option:
              'Transferido passivamente para a cadeira (sem ortostatismo)',
            value: 2,
          },
          { id: '3-1-4', option: 'Sentado a beira do leito', value: 3 },
          {
            id: '3-1-5',
            option: 'Transferência do leito para a cadeira',
            value: 4,
          },
          { id: '3-1-6', option: 'Ortostatismo', value: 5 },
          {
            id: '3-1-7',
            option: 'Marcha estacionária (á beira do leito)',
            value: 6,
          },
          {
            id: '3-1-8',
            option: 'Deambular com auxílio de 2 ou mais pessoas',
            value: 7,
          },
          {
            id: '3-1-9',
            option: 'Deambular com auxílio de 1 pessoa',
            value: 8,
          },
          {
            id: '3-1-10',
            option:
              'Deambulação independente com auxílio de um dispositivo de marcha',
            value: 9,
          },
          {
            id: '3-1-11',
            option:
              'Deambulação independente sem auxílio de um dispositivo de marcha',
            value: 10,
          },
        ],
      },
    ],
  },
];
