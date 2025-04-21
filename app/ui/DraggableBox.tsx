

// interface NoteProps {
//     note: {
//         id: string;
//         title: string;
//         content: string;
//         imageUrl: string;
//     }
// }

// export function DraggableNote({note}: NoteProps) {
//     const [{ isDragging }, drag] = useDrag(() => ({
//         type: "NOTE",
//         item: { id: note.id },
//         collect: (monitor) => ({
//             isDragging: monitor.isDragging(),
//         })
//     }));

//     return (
//         <div
//         ref={(node) => drag(drop(node))}
//           className={`p-4 border text-white pt-9 border-gray-300 rounded-md side-nav md:w-48 lg:w-48 text-center break-inside-avoid mb-4 bg-gray-900 ${
//             isDragging ? "opacity-50" : "opacity-100"
//           }`}
//         >
//           <h3 className="text-lg font-semibold">{note.title}</h3>
//           <p className="text-sm text-gray-600">{note.content}</p>
//         </div>
//       );
// }