"use client";

import { useRef, useEffect, useState } from "react";
// import notes from "@/app/lib/placeholder-data";
import { createNote } from "@/app/lib/prisma";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import {
  PaperAirplaneIcon,
  PaperClipIcon,
  BellIcon,
  UserPlusIcon,
  PhotoIcon,
  EllipsisHorizontalIcon,
  ArrowPathIcon,
  ArrowUturnLeftIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import SkeletonLoader from "@/app/ui/skeleton";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { on } from "events";

interface Note {
  id: string;
  title?: string;
  content?: string;
  imageUrl?: string;
  createdAt: string;
}
// Define NoteCard as a standalone component
function NoteCard({ onClose }: { onClose: () => void }) {
  const [note, setNote] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data: session } = useSession();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageDialog = () => {
    fileInputRef.current?.click(); // Trigger the hidden input
  };
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const formData = new FormData();
      formData.append("file", selectedFile);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setImageUrl(data.secure_url);
      console.log("Image URL:", imageUrl);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("imageUrl", imageUrl);
    formData.append("userId", session!.user.id); // Assuming user ID is available in session
    setIsSubmitting(true);
    console.log("FormData entries:");
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    try {
      await createNote(formData);
      alert("Note created successfully!");
      setTitle("");
      setContent("");
      onClose(); // Close the NoteCard after submission
    } catch (error) {
      console.error("Error creating note:", error);
      alert("Failed to create note. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="lg:max-w-lg max-w-md media-width items-end md:max-w-lg  w-full mx-auto mb-4 p-2 bg-gray-900 text-white rounded-2xl shadow-md border border-gray-700"
    >
      {imageUrl && (
        <div className="w-full relative">
          <img src={imageUrl} alt="Uploaded" className="w-full rounded" />
          <div className="relative group ">
            <span className="bg-gray-800 p-1">
              <TrashIcon
                onClick={() => setImageUrl("")}
                className="h-5 w-5 cursor-pointer bottom-1 text-gray-40 absolute right-5"
              />{" "}
            </span>
            {/* Refresh Icon */}
          </div>
          {/* s */}
        </div>
      )}
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-transparent text-lg font-semibold outline-none w-full"
        />
        <div className="relative group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
            fill="none"
            className="size-5 cursor-pointer hover:text-gray-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 15-6 6M15 6l-1-1 2-2 5 5-2 2-1-1-4.5 4.5c1.5 1.5 1 4-.5 5.5l-8-8c1.5-1.5 4-2 5.5-.5z"
            ></path>
          </svg>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100">
            Pin
          </span>
        </div>
        {/* <MapPinIcon className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-200" /> */}
      </div>

      {/* Note Input */}
      <textarea
        className="w-full bg-transparent text-gray-300 outline-none resize-none"
        name="content"
        placeholder="Take a note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      {/* Action Icons */}
      <div className="flex justify-between flex-wrap items-center mt-4 text-gray-400">
        <div className="flex gap-7 media-space flex-wrap">
          <div className="relative group">
            <PaperClipIcon className="h-4 w-4 cursor-pointer hover:text-gray-200" />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100">
              Attach
            </span>
          </div>
          <div className="relative group">
            <BellIcon className="h-4 w-4 cursor-pointer hover:text-gray-200" />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100">
              Notify
            </span>
          </div>
          <div className="relative group">
            <UserPlusIcon className="h-4 w-4 cursor-pointer hover:text-gray-200" />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
              Add User
            </span>
          </div>
          <input
            ref={fileInputRef}
            name="fileInput"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="fileInput"
            type="file"
          />
          <div className="relative group">
            <PhotoIcon
              onClick={handleImageDialog}
              className="h-4 w-4 cursor-pointer hover:text-gray-200"
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100">
              Photo
            </span>
          </div>
          <div className="relative group">
            <EllipsisHorizontalIcon className="h-4 w-4 cursor-pointer hover:text-gray-200" />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100">
              More
            </span>
          </div>
          <div className="relative group">
            <ArrowUturnLeftIcon className="h-4 w-4 cursor-pointer hover:text-gray-200" />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100">
              Undo
            </span>
          </div>
          {/* <div className="relative group">
            <ArrowPathIcon className="h-4 w-4 cursor-pointer hover:text-gray-200" />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100">
              Refresh
            </span>
          </div> */}
          <button className="relative group" type="submit">
            <PaperAirplaneIcon className="h-6 w-6 text-blue-400  cursor-pointer hover:text-blue-300" />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100">
              Send
            </span>
          </button>
        </div>

        <button
          onClick={onClose}
          className="text-blue-400 font-semibold hover:text-blue-300 cursor-pointer"
        >
          Close
        </button>
      </div>
    </form>
  );
}

// Main Page Component
export default function Page() {
  const [noteInput, setNoteInput] = useState("");
  const [showNoteCard, setShowNoteCard] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();
  console.log("frompage", showNoteCard);
  // const { data: session, status } = useSession();
  console.log("session", session);
  // console.log(session?.user?.email);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const res = await fetch("/api/notes");
        const data = await res.json();
        setNotes(data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchNotes();
  }, []);
  return (
    <div className="flex flex-col items-center  lg:items-center mt-9">
      <input
        type="text"
        placeholder="Take a note..."
        value={noteInput}
        onClick={() => setShowNoteCard(true)} // Show NoteCard on click
        onChange={(e) => setNoteInput(e.target.value)}
        className={`p-2 w-66 lg:w-96 text-white rounded border border-gray-300 mb-5 ${
          showNoteCard ? "hidden" : "block"
        } bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />

      {showNoteCard && (
        <NoteCard onClose={() => setShowNoteCard(false)} /> // Pass onClose handler
      )}
      <div className="columns-1 md:columns-2 lg:columns-5 media-coloumn">
        {notes.map((note, index) => (
          <div
            key={index}
            className="p-4 border text-white pt-9 border-gray-300 rounded-md side-nav md:w-48 lg:w-48 text-center break-inside-avoid mb-4 bg-gray-900"
          >
            <div>
              <h3 className="text-lg font-semibold">{note.title}</h3>
              <p className="text-sm text-gray-600">{note.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
