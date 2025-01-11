"use client";
import { Pergunta } from "@/data/ListaExameConsciencia";
import { UseFormReturn, FieldValues } from "react-hook-form";
import { useState } from "react";

interface Props {
  perguntas: Pergunta[];
  mandamentoId: number;
  methods: UseFormReturn<FieldValues, any, undefined>;
}

export const Perguntas = ({ perguntas, mandamentoId, methods }: Props) => {
  return <div></div>;
};
