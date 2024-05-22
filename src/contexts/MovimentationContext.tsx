"use client";

import {
  ITonHandle,
  ITonHandlePayload,
  ITonHandleResponse,
} from "@/@types/movimentation";
import { api } from "@/lib/axios";
import { storage } from "@/utils/localStorage";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

interface IPagination {
  currentPage: number;
  totalPages: number;
}

interface IGetMovimentationsParams {
  page?: number;
  searchByNf?: string;
}

interface MovimentationContextType {
  pagination: IPagination;
  movimentations: ITonHandle[];
  getMovimentations: (params?: IGetMovimentationsParams) => Promise<void>;
  createMovimentation: (payload: ITonHandlePayload) => Promise<void>;
  isLoadingTable: boolean;
}

const MovimentationContext = createContext({} as MovimentationContextType);

export function MovimentationProvider({ children }: { children: ReactNode }) {
  const router = useRouter();

  const [isLoadingTable, setIsLoadingTable] = useState(false);
  const [movimentations, setMovimentations] = useState<ITonHandle[]>(
    [] as ITonHandle[]
  );
  const [pagination, setPagination] = useState<IPagination>({
    currentPage: 1,
    totalPages: 0,
  });

  const getMovimentations = async (p?: IGetMovimentationsParams) => {
    setIsLoadingTable(true);

    const token = storage.getToken() as string;
    await api
      .get<ITonHandleResponse>(
        `/auth/ton-handle?enable=true${p?.page ? `&page=${p?.page}` : ""}${p?.searchByNf ? `&search=${p.searchByNf}` : ""}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const currentRecords = response.data.data.records;

        const formattedDocs = currentRecords.docs.map((doc) => {
          const date = new Date(doc.date).toLocaleDateString("pt-br", {
            timeZone: "UTC",
          });

          return {
            ...doc,
            date,
          };
        });

        setMovimentations([...formattedDocs]);

        setPagination({
          currentPage: p?.page || 1,
          totalPages: Math.ceil(currentRecords.totalDocs / 10),
        });
      })
      .catch((err) => {
        const message = err.response.data.message;

        if (message === "jwt expired") {
          router.replace("/login");
          toast.error("Seu acesso expirou, realize o login novamente");
        } else {
          toast.error("Não foi possível carregar os dados");
        }
      })
      .finally(() => {
        setIsLoadingTable(false);
      });
  };

  const createMovimentation = async (payload: ITonHandlePayload) => {
    console.log(payload);
  };

  return (
    <MovimentationContext.Provider
      value={{
        movimentations,
        getMovimentations,
        createMovimentation,
        pagination,
        isLoadingTable,
      }}
    >
      {children}
    </MovimentationContext.Provider>
  );
}

export const useMovimentation = () => useContext(MovimentationContext);
