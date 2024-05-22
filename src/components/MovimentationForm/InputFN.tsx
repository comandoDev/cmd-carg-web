"use client";

import * as Input from "@/components/Input";
import { X } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

interface InputNFProps {
  nfList: string[];
  setNfList: Dispatch<SetStateAction<string[]>>;
}

export function InputNF({ nfList, setNfList }: InputNFProps) {
  const [newNF, setNewNF] = useState("");

  const addNFtoList = (value: string) => {
    const sanitizedValue = value.replace(/[^0-9\s]/g, "");
    const lastWord = sanitizedValue[sanitizedValue.length - 1];

    if (lastWord === " " && sanitizedValue.trim()) {
      setNfList([value.trim(), ...nfList]);
      setNewNF("");
    } else {
      setNewNF(sanitizedValue);
    }
  };

  const removeNF = (index: number) => {
    const formattedValues = [...nfList];
    formattedValues.splice(index, 1);
    setNfList(formattedValues);
  };

  return (
    <div className="grid grid-cols-5 gap-1">
      <Input.Root label="Nova NF" className="col-span-2">
        <Input.Control
          placeholder="Nova NF"
          value={newNF}
          onChangeText={addNFtoList}
        />
      </Input.Root>
      <div className="flex col-span-3 gap-[3px] flex-wrap h-14 p-2 pt-0 bg-zinc-200 rounded-lg border border-zinc-300 overflow-auto">
        <label className="w-full sticky top-0 pt-2 bg-zinc-200 uppercase text-[10px] font-bold text-zinc-700">
          NF ({nfList.length})
        </label>
        {nfList?.map((value, index) => {
          return (
            <button
              key={index}
              type="button"
              className="hover:bg-red-400/50 hover:text-red-800 hover:border-red-400/40 border flex text-[10px] h-4 items-center gap-[3px] justify-center bg-violet-300 rounded-full px-1.5 text-violet-800 font-semibold"
            >
              {value}
              <X className="w-2.5 h-2.5" onClick={() => removeNF(index)} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
