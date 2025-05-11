"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient({ log: ["query"] }); // Optional: Enable logging for debugging

export async function getNotes() {
  try {
    const notes = await prisma.note.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return notes;
  } catch (error) {
    console.error("Error fetching notes:", error);
  }
}

export async function getNoteById(id: string) {
  try {
    const note = await prisma.note.findUnique({
      where: { id },
    });
    return note;
  } catch (error) {
    console.log("Error fetching note by ID:", error);
  }
}

export async function createNote(formData: FormData) {
  try {
    console.log("Form Data:", formData.get("title"));
    console.log("Form Data:", formData.get("content"));
    console.log(formData.get("title"));
    const note = await prisma.note.create({
      data: {
        title: formData.get("title") as string,
        content: formData.get("content") as string,
        imageUrl: formData.get("imageUrl") as string,
        // isPinned: formData.get("isPinned") === "true",
        createdAt: new Date(),
        user: {
          connect: { id: formData.get("userId") as string },
        },
      },
    });
     revalidatePath("/z/home");
    return note;
  } catch (error) {
    console.log("Error creating note:", error);
  }
}

export async function searchNotes(query: string) {
  try {
    const notes = await prisma.note.findMany({
      where: {
        OR: [
          {
            title: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            content: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return notes;
  } catch (error) {
    console.log("Error searching notes:", error);
  }
}

export async function noteDeleted(noteId: string, isDeleted: boolean) {
  try {
    const note = await prisma.note.update({
      where: { id: noteId },
      data: { isDeleted },
    });
    return note;
  } catch (error) {
    console.log("Error deleting note:", error);
  }
}

export async function pinNote(noteId: string, isPinned: boolean) {
  try {
    const note = await prisma.note.update({
      where: { id: noteId },
      data: { isPinned },
    });
    return note;
  } catch (error) {
    console.log("Error pinning note:", error);
  }
}

export async function archiveNote(noteId: string, isArchived: boolean) {
  try {
    const note = await prisma.note.update({
      where: { id: noteId },
      data: { isArchived },
    });
    return note;
  } catch (error) {
    console.log("Error archiving note:", error);
  }
}

export async function createLabel(name: string) {
  try {
    const label = await prisma.label.create({
      data: {
        name,
      },
    });
    return label;
  } catch (error) {
    console.log("Error creating label:", error);
  }
}

export async function getAllLabels() {
  try {
    const labels = await prisma.label.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return labels;
  } catch (error) {
    console.error("Error fetching labels:", error);
  }
}

export async function deleteLabel(labelId: string) {
  try {
    await prisma.label.delete({
      where: { id: labelId },
    });
    console.log("Label deleted successfully");
  } catch (error) {
    console.error("Error deleting label:", error);
  }
}

export async function getPinnedNotes() {
  try {
    const pinnedNotes = await prisma.note.findMany({
      where: { isPinned: true },
      orderBy: { createdAt: "desc" },
    });
    return pinnedNotes;
  } catch (error) {
    console.error("Error fetching pinned notes:", error);
  }
}

export async function getArchivedNotes() {
  try {
    const archivedNotes = await prisma.note.findMany({
      where: { isArchived: true },
      orderBy: { createdAt: "desc" },
    });
    return archivedNotes;
  } catch (error) {
    console.error("Error fetching archived notes:", error);
  }
}
