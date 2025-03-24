
import React from "react";
import { Button } from "./ui/button";

const ArticleBody: React.FC = () => {
  return (
    <div className="text-base leading-relaxed animate-fade-up">
      <div className="mb-6">
        <img 
          src="/lovable-uploads/d224a900-cac8-4bb2-9465-eb0d69281e9f.png" 
          alt="Consignado CLT" 
          className="w-full rounded-md mb-4"
        />
      </div>
      
      <p className="mb-6">
        O governo <span className="text-g1-red">libera</span> nesta sexta-feira (21) a 
        plataforma para <span className="highlighted-text">os trabalhadores do 
        setor privado, celetistas, buscarem 
        empréstimo consignado (com desconto 
        em folha de pagamento)</span> utilizando 
        parte dos recursos do FGTS como 
        garantia.
      </p>

      <div className="my-6">
        <a 
          href="http://caixatem.online" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block w-full"
        >
          <Button 
            className="w-full bg-g1-red hover:bg-g1-red/90 font-bold py-3 text-white rounded"
          >
            SOLICITAR EMPRÉSTIMO
          </Button>
        </a>
      </div>

      <p className="mb-6">
        <span className="text-green-700 text-xl">💲</span>
        Nesta modalidade, <span className="highlighted-text">as parcelas são 
        quitadas com desconto no 
        contracheque, ou seja, no salário do 
        funcionário que pega um empréstimo 
        em uma instituição financeira.</span>
      </p>

      <p className="mb-6">
        <span className="text-amber-700 text-xl">🔍</span>
        Com o novo programa, <span className="highlighted-text">todos os 
        trabalhadores com carteira assinada 
        poderão contratar essa modalidade de 
        empréstimo, podendo usar até 10% do 
        saldo do Fundo de Garantia por Tempo 
        de Serviço (FGTS) como garantia</span> e, 
        também, 100% da multa rescisória na 
        demissão sem justa causa (que equivale a 
        40% do valor do saldo).
      </p>

      <h2 className="section-title">Qual a posição dos bancos</h2>
      <p className="mb-6">
        Procurada pelo <span className="font-bold">g1</span>, a Federação Brasileira 
        de Bancos (Febraban) informou que o 
        novo crédito consignado nasce como uma 
        boa alternativa ao trabalhador da iniciativa 
        privada, concebido com o objetivo de ser 
        um processo de contratação mais fluido e 
        que leva em conta muitos dos pontos que 
        impediam o crescimento da modalidade.
      </p>

      <p className="mb-6">
        A entidade acrescentou que a <span className="highlighted-text">garantia do 
        saldo do FGTS, bem como os recursos 
        da multa rescisória</span> que podem ser 
        oferecidos pelo trabalhador, <span className="highlighted-text">podem 
        auxiliar no estímulo à concessão do 
        crédito por parte das instituições 
        financeiras, mas que é "difícil saber em 
        qual montante"</span>.
      </p>

      <p className="mb-6">
        "À medida que os processos forem sendo 
        modernizados e exista maior 
        conhecimento dos trabalhadores em geral 
        em relação à modalidade, o produto deve 
        atingir os níveis normais de desempenho", 
        concluiu a Febraban.
      </p>

      <h2 className="section-title">De quanto será a redução nos juros?</h2>
      <p className="mb-6">
        Com as garantias do FGTS atreladas ao 
        consignado, <span className="highlighted-text">o governo prevê que a taxa 
        de juros caia cerca de 40%, quase pela 
        metade, na linha de crédito consignado.</span>
      </p>

      <p className="mb-6">
        Em dezembro do ano passado, a taxa 
        média de juros cobrada no consignado do 
        setor privado foi de 2,89% ao mês, 
        enquanto que a taxa média dos servidores 
        públicos ficou em 1,8% ao mês, e, dos 
        aposentados do INSS, em 1,66% ao mês.
      </p>

      <p className="mb-6">
        Na comparação com linhas de crédito 
        mais caras, como crédito direto ao 
        consumidor, cheque especial ou cartão de 
        crédito rotativo (a mais cara do mercado), 
        a redução será mais expressiva ainda.
      </p>

      <p className="back-to-index">Volte ao índice.</p>

      <h2 className="section-title">Como aderir?</h2>
      <p className="mb-6">
        <span className="highlighted-text">Os trabalhadores poderão acessar a 
        plataforma para analisar as ofertas de 
        empréstimos, comparando, por 
        exemplo, as taxas de juros.</span>
      </p>

      <p className="mb-6">
        O sistema entrará em operação pelos 
        bancos a partir desta sexta-feira. Quem já 
        tem um consignado ativo poderá migrar 
        para a nova linha a partir de 25 de abril.
      </p>

      <p className="mb-6">
        A portabilidade entre os bancos poderá 
        ser realizada a partir de 6 de junho.
      </p>

      <p className="back-to-index">Volte ao índice.</p>
    </div>
  );
};

export default ArticleBody;
