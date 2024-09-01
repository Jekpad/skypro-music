"use client";

import Main from "@/components/Main/Main";

import { useAppSelector } from "@/store/store";
import { CustomCatalogType } from "@/types/customCatalog";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams<{ id: string }>();

  const customCatalogs = useAppSelector((store) => store.customCatalog.customCatalogs);
  const currentCatalog: CustomCatalogType | undefined = customCatalogs?.find((catalog) => {
    return catalog._id === parseInt(id);
  });

  return <Main title={currentCatalog?.name || "Подборка"} />;
}
