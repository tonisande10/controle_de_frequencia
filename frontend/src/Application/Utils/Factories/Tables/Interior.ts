export function FactoryInterior(
  posto: string,
  nome_coordenador: string,
  telefone_posto: string,
  telefone_secundario: string,
  visualizar: any
) {
  return {
    posto,
    nome_coordenador,
    telefone_posto,
    telefone_secundario,
    visualizar,
  };
}
