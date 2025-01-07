import { useState } from "react";
import "../globals.css";

export default function ExameConciencia() {
  return (
    <div>
      <h1 className="text-center py-4 text-2xl">Exame de Conciência</h1>
      <div className="space-y-8  max-w-3xl mx-auto">
        <div className="border p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">
            1º Mandamento: Amar a Deus sobre todas as coisas
          </h2>
          <ul className="space-y-4 mt-4">
            <li className="flex flex-col space-y-2">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span>Fui negligente com minha fé ou oração diária?</span>
              </label>
              <textarea
                className="w-full p-2 border rounded"
                placeholder="Explique mais sobre isso..."
              ></textarea>
            </li>
            <li className="flex flex-col space-y-2">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span>Desrespeitei coisas sagradas ou blasfemei?</span>
              </label>
              <textarea
                className="w-full p-2 border rounded"
                placeholder="Explique mais sobre isso..."
              ></textarea>
            </li>
            <li className="flex flex-col space-y-2">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span>
                  Coloquei algo acima de Deus (trabalho, dinheiro, etc.)?
                </span>
              </label>
              <textarea
                className="w-full p-2 border rounded"
                placeholder="Explique mais sobre isso..."
              ></textarea>
            </li>
          </ul>
        </div>

        <div className="border p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">
            2º Mandamento: Não tomar Seu santo nome em vão
          </h2>
          <ul className="space-y-4 mt-4">
            <li className="flex flex-col space-y-2">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span>Usei o nome de Deus ou dos santos em vão?</span>
              </label>
              <textarea
                className="w-full p-2 border rounded"
                placeholder="Explique mais sobre isso..."
              ></textarea>
            </li>
            <li className="flex flex-col space-y-2">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span>Faltei com respeito ao que é sagrado?</span>
              </label>
              <textarea
                className="w-full p-2 border rounded"
                placeholder="Explique mais sobre isso..."
              ></textarea>
            </li>
          </ul>
        </div>

        <div className="border p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">
            3º Mandamento: Santificar os domingos e festas de guarda
          </h2>
          <ul className="space-y-4 mt-4">
            <li className="flex flex-col space-y-2">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span>
                  Faltei à missa ou negligenciei o descanso dominical?
                </span>
              </label>
              <textarea
                className="w-full p-2 border rounded"
                placeholder="Explique mais sobre isso..."
              ></textarea>
            </li>
            <li className="flex flex-col space-y-2">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span>
                  Trabalhei ou fiz outros compromissos desnecessários no
                  domingo?
                </span>
              </label>
              <textarea
                className="w-full p-2 border rounded"
                placeholder="Explique mais sobre isso..."
              ></textarea>
            </li>
          </ul>
        </div>

        <div className="border p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">4º Mandamento: Honrar pai e mãe</h2>
          <ul className="space-y-4 mt-4">
            <li className="flex flex-col space-y-2">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span>Faltei com respeito ou desobediência aos meus pais?</span>
              </label>
              <textarea
                className="w-full p-2 border rounded"
                placeholder="Explique mais sobre isso..."
              ></textarea>
            </li>
            <li className="flex flex-col space-y-2">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span>Fui negligente com meus familiares ou idosos?</span>
              </label>
              <textarea
                className="w-full p-2 border rounded"
                placeholder="Explique mais sobre isso..."
              ></textarea>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
