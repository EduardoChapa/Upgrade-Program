import { db } from "../firebase/firebase-config";

export async function loadNotes(uid) {
  const notesSnapshot = await db.collection(`${uid}/journal/notes`).get();
  const notes = [];

  notesSnapshot.forEach((note) => {
    notes.push({
      id: note.id,
      ...note.data()
    });
  });

  return notes;
}