"use server";

import { Documents, youtubeDocuments } from "@/constants/document-constants";

export async function createDocument(formData: FormData) {
  console.log(formData);

  const rawFormData:Documents = {
    id: '11',
    title: String(formData.get('title')) || "",
    description: String(formData.get('description')) || "",
    link: String(formData.get('link')) || "",
    //@ts-expect-error Type 'string' is not assignable to type '"link" | "youtube" | "x" | "note"'.
    type: String(formData.get('type')),
  };

  if(rawFormData.type === "youtube") {
    youtubeDocuments.push(rawFormData)
  }
}
