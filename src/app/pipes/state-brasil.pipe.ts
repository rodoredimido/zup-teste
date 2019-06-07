import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stateBrasil'
})
export class StateBrasilPipe implements PipeTransform {
  
  STATES: string[] = [
  'Acre',
  'Alagoas',
  'Amazonas',
  'Bahía',
  'Ceará' ,
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Río de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins'
  ];
  
  STATES_AB: string[]= [
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
  
  STATES_CAPINTAL: string[] = [
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
  transform(value: string, args?: any): any {
    console.log(value);
    let idx: number = this.STATES.findIndex( ( state: string ) => state.toLocaleLowerCase() ==  value.toLocaleLowerCase())
     if(idx == -1){
      idx = this.STATES_CAPINTAL.findIndex( ( state: string ) => state.toLocaleLowerCase() ==  value.toLocaleLowerCase())
     }
    return this.STATES_AB[idx];
  }

}

