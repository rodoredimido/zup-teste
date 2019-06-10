import { Pipe, PipeTransform } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

const STATES: any[] = [
  'acre',
  'alagoas',
  'amazonas',
  'bahía',
  'ceará' ,
  'distrito federal',
  'espírito santo',
  'goiás',
  'maranhão',
  'mato grosso',
  'mato grosso do sul',
  'minas gerais',
  'pará',
  'paraíba',
  'paraná',
  'pernambuco',
  'piauí',
  'río de janeiro',
  'rio grande do norte',
  'rio grande do sul',
  'rondônia',
  'roraima',
  'santa catarina',
  'são paulo',
  'sergipe',
  'Tocantins'
  ];

  const STATES_JS_NUM: {[key: number]: string}[] = [
   {0: 'Acre'},
   {1: 'Alagoas'},
   {2: 'Amazonas'},
   {3: 'Bahía'},
   {4: 'Ceará'} ,
   {5: 'Distrito Federal'},
   {6: 'Espírito Santo'},
   {7: 'Goiás'},
   {8: 'Maranhão'},
   {9: 'Mato Grosso'},
   {10: 'Mato Grosso do Sul'},
   {11: 'Minas Gerais'},
   {12: 'Pará'},
   {13: 'Paraíba'},
   {14: 'Paraná'},
   {15: 'Pernambuco'},
   {16: 'Piauí'},
   {17: 'Río de Janeiro'},
   {18: 'Rio Grande do Norte'},
   {19: 'Rio Grande do Sul'},
   {20: 'Rondônia'},
   {21: 'Roraima'},
   {22: 'Santa Catarina'},
   {23: 'São Paulo'},
   {24: 'Sergipe'},
   {25: 'Tocantins'}
  ];

  const STATES_JS_STR: {[key: string]: string} = { // sucses
     'acre'  : 'AC',
     'alagoas': 'AL',
     'amazonas' : 'AM',
     'bahía' : 'BA',
     'ceará' : 'CE' ,
     'distrito federal' : 'DF',
     'espírito santo' : 'ES',
     'goiás' : 'GO',
     'maranhão' : 'MA',
     'mato grosso' : 'MT',
     'mato grosso do sul' : 'MS',
     'minas gerais' : 'MG',
     'pará' : 'PA',
     'paraíba' : 'PB',
     'paraná': 'PR',
     'pernambuco' : 'PE',
     'piauí' : 'PI',
     'río de janeiro' : 'RJ',
     'rio grande do norte' : 'RN',
     'rio grande do sul' : 'RS',
     'rondônia' : 'RO',
     'roraima' : 'RR',
     'santa catarina' : 'SC',
     'são paulo' : 'SP',
     'sergipe' : 'SE',
     'tocantins' : 'TO'
  };

   const CAPITAIS_JS_STR: {[key: string]: string} = {// sucsess
     'río branco' : 'AC',
     'maceió' : 'AL',
     'manaos' : 'AM',
     'salvador' : 'BA',
     'fortaleza' : 'CE' ,
     'brasilia' : 'DF',
     'vitória' : 'ES',
     'goiânia' : 'GO',
     'são luís': 'MA',
     'cuiabá' : 'MT',
     'campo grande' : 'MS',
     'belo horizonte' : 'MG',
     'belém' : 'PA',
     'joão pessoa' : 'PB',
     'curitiba' : 'PR',
     'recife' : 'PE',
     'teresina' : 'PI',
     'río de janeiro' : 'RJ',
     'natal' : 'RN',
     'porto alegre' : 'RS',
     'porto velho' : 'RO',
     'boa vista' : 'RR',
     'florianópolis' : 'SC',
     'são paulo' : 'SP',
     'aracaju' : 'SE',
     'palmas' : 'TO'
   };
  const STATES_ABR_JS: any = {
   0 : 'AC',
   1 : 'AL',
   2 : 'AM',
   3 : 'BA',
   4 : 'CE',
   5 : 'DF',
   6 : 'ES',
   7 : 'GO',
   8 : 'MA',
   9 : 'MT',
   10 : 'MS',
   11 : 'MG',
   12 : 'PA',
   13 : 'PB',
   14 : 'PR',
   15 : 'PE',
   16 : 'PI',
   17 : 'RJ',
   18 : 'RN',
   19 : 'RS',
   20 : 'RO',
   21 : 'RR',
   22 : 'SC',
   23 : 'SP',
   24 : 'SE',
   25 : 'TO'
  };

  const CAPITAIS_JS: any = {
    0: 'Río Branco',
    1: 'Maceió',
    2: 'Manaos',
    3: 'Salvador',
    4: 'Fortaleza',
    5: 'Brasilia',
    6: 'Vitória',
    7: 'Goiânia',
    8: 'São Luís',
    9: 'Cuiabá',
    10: 'Campo Grande',
    11: 'Belo Horizonte',
    12: 'Belém',
    13: 'João Pessoa',
    14: 'Curitiba',
    15: 'Recife',
    16: 'Teresina',
    17: 'Río de Janeiro',
    18: 'Natal',
    19: 'Porto Alegre',
    20: 'Porto Velho',
    21: 'Boa Vista',
    22: 'Florianópolis',
    23: 'São Paulo',
    24: 'Aracaju',
    25: 'Palmas'
  };
  const STATES_AB: string[] = [
     'AC',
     'AL',
     'AM',
     'BA',
     'CE',
     'DF',
     'ES',
     'GO',
     'MA',
     'MT',
     'MS',
     'MG',
     'PA',
     'PB',
     'PR',
     'PE',
     'PI',
     'RJ',
     'RN',
     'RS',
     'RO',
     'RR',
     'SC',
     'SP',
     'SE',
     'TO'
  ];
  const STATES_CAPINTAL: string[] = [
    'Río Branco',
    'Maceió',
    'Manaos',
    'Salvador',
    'Fortaleza',
    'Brasilia',
    'Vitória',
    'Goiânia',
    'São Luís',
    'Cuiabá',
    'Campo Grande',
    'Belo Horizonte',
    'Belém',
    'João Pessoa',
    'Curitiba',
    'Recife',
    'Teresina',
    'Río de Janeiro',
    'Natal',
    'Porto Alegre',
    'Porto Velho',
    'Boa Vista',
    'Florianópolis',
    'São Paulo',
    'Aracaju',
    'Palmas'
  ];


@Pipe({
  name: 'stateBrasil'
})
export class StateBrasilPipe implements PipeTransform {


  transform(value: string): string {

    let state:  string = STATES_JS_STR[value.toLocaleLowerCase()];
    if ( !state ) {
        state = CAPITAIS_JS_STR[value.toLocaleLowerCase()];
    }

    return state;
  }



}
