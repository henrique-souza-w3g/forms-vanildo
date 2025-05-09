// types.ts
export type Vendedor = { nome: string; cpf: string; emailVendedor: string; motivoVenda: string; dtVenda: string; dtEnvio: string };
export type Empresa = { cnpj: string; vidas: string; vigencia: string; razaoSocial: string; endereco: string; numeroCasa: string; bairro: string; cidade: string; telefoneResponsavel: string; responsavel: string; /*...*/ };
export type Plano = { operadora: string; plano: string; acomodacao: string; valorPlano: string; valorTaxa: string; valorParcela: string; pgtoParcela: string };
export type Beneficiario = { nome: string; cpf: string; rg: string; dataNascimento: string; estadoCivil: string; altura: string; peso: string; doenca: string; endereco: string; numero: string; celular: string; /*...*/ };
