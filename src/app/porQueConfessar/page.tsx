import TituloPage from "@/components/tituloPage";
import "@/app/globals.css";

export default function PorQueConfessar() {
  return (
    <div className="mb-5">
      <div>
        <TituloPage titulo="Por que confessar?" />
      </div>
      <div className="flex flex-col items-center gap-6 px-6   text-gray-800">
        <div className=" sm:max-w-4xl bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <div className=" text-sm sm:text-lg text-center  mx-auto mb-10 bg-amber-950/20 rounded-lg p-5">
            <p className=" text-sm sm:text-lg leading-relaxed">
              O sacramento da confissão, também conhecido como Reconciliação ou
              Penitência, é um dos sete sacramentos da Igreja Católica
              Apostólica Romana. Ele foi instituído por Jesus Cristo para a
              remissão dos pecados e a reconciliação do fiel com Deus e com a
              comunidade. Como ensinado na Bíblia, Cristo deu aos apóstolos e
              seus sucessores a autoridade de perdoar pecados em Seu nome: "A
              quem perdoardes os pecados, ser-lhes-ão perdoados; a quem os
              retiverdes, ser-lhes-ão retidos" (João 20, 23).
            </p>
          </div>

          <h2 className="text-xl font-semibold mt-6">
            A importância de confessar
          </h2>
          <p className="text-sm sm:text-lg leading-relaxed mt-4">
            Confessar nossos pecados nos ajuda a reconhecer nossas fraquezas e a
            buscar a conversão. Este sacramento é um ato de humildade, onde nos
            apresentamos diante de Deus e, por meio do sacerdote, pedimos o
            perdão de nossas faltas. Ele nos ajuda a:
          </p>
          <ul className="list-disc list-inside mt-4 text-sm sm:text-lg leading-relaxed">
            <li>Receber a graça santificante e o perdão de Deus.</li>
            <li>Fortalecer nossa luta contra o pecado e as tentações.</li>
            <li>Reconciliar-nos com a Igreja e com aqueles que ofendemos.</li>
            <li>
              Promover a paz interior e a verdadeira liberdade espiritual.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">Fundamento teológico</h2>
          <p className="text-sm sm:text-lg leading-relaxed mt-4">
            A confissão é sustentada pelo princípio de que Deus deseja que todos
            sejam salvos e cheguem ao conhecimento da verdade (1 Timóteo 2, 4).
            Ele nos chama à santidade e oferece os sacramentos como um caminho
            de graça. Ao confessarmos nossos pecados, renovamos nossa fé no
            poder misericordioso de Deus e participamos da obra redentora de
            Cristo.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            Por que confessar-se com um sacerdote?
          </h2>
          <p className="text-sm sm:text-lg leading-relaxed mt-4">
            O sacerdote age na pessoa de Cristo (in persona Christi) e é o
            instrumento pelo qual Deus concede o perdão. A confissão sacramental
            nos lembra que nossos pecados não afetam apenas nossa relação com
            Deus, mas também com os outros. O sacramento nos reconcilia com a
            comunidade e nos encoraja a viver a caridade cristã.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            Como se preparar para a confissão?
          </h2>
          <p className="text-sm sm:text-lg leading-relaxed mt-4">
            Para uma confissão válida e frutuosa, é importante realizar um exame
            de consciência sincero, arrepender-se verdadeiramente dos pecados,
            confessar os pecados mortais e veniais ao sacerdote e cumprir a
            penitência prescrita. Este processo nos coloca em comunhão com Deus
            e fortalece nosso compromisso com uma vida de santidade.
          </p>

          <h2 className="text-xl font-semibold mt-6">O chamado à santidade</h2>
          <p className="text-sm sm:text-lg leading-relaxed mt-4">
            A confissão nos convida a abraçar o chamado à santidade. Por meio
            deste sacramento, renovamos nosso compromisso de seguir Cristo,
            reconhecendo que somos peregrinos em busca da perfeição divina. A
            confissão nos lembra da beleza da misericórdia de Deus, que sempre
            nos acolhe de braços abertos, como o Pai da parábola do filho
            pródigo (Lucas 15, 11-32).
          </p>

          <p className="text-sm sm:text-lg leading-relaxed mt-4">
            Confessar-se não é apenas uma obrigação, mas um privilégio que nos
            aproxima de Deus e nos dá força para viver plenamente como
            discípulos de Cristo.
          </p>
        </div>
      </div>
    </div>
  );
}
