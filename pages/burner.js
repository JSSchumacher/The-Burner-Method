import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { useState } from "react";

function Draggable({ id, children }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="px-4 py-2 bg-white shadow rounded cursor-grab"
    >
      {children}
    </div>
  );
}

function Burner({ id, children, onDrop }) {
  const { setNodeRef, isOver } = useDroppable({ id });
  return (
    <div
      ref={setNodeRef}
      className={`flex-1 h-40 rounded-xl border-2 ${
        isOver ? "border-red-500 bg-red-50" : "border-gray-300 bg-gray-100"
      } flex items-center justify-center`}
    >
      {children || <span className="text-gray-500">Drop here</span>}
    </div>
  );
}

export default function BurnerPage() {
  const [pots, setPots] = useState(["Project Alpha", "Project Beta", "Project Gamma"]);
  const [burners, setBurners] = useState({ burner1: null, burner2: null, burner3: null, burner4: null });

  const handleDragEnd = (event) => {
    const { over, active } = event;
    if (over) {
      setBurners({ ...burners, [over.id]: active.id });
      setPots(pots.filter((p) => p !== active.id));
    }
  };

  return (
    <main className="p-8 min-h-screen bg-gray-50 text-gray-900">
      <h1 className="text-3xl font-bold mb-6">🔥 The Burner System</h1>
      <DndContext onDragEnd={handleDragEnd}>
        {/* Pots (projects to drag) */}
        <div className="flex gap-4 mb-8">
          {pots.map((pot) => (
            <Draggable key={pot} id={pot}>
              {pot}
            </Draggable>
          ))}
        </div>

        {/* Burners Grid */}
        <div className="grid grid-cols-2 gap-6">
          {Object.keys(burners).map((burner) => (
            <Burner key={burner} id={burner}>
              {burners[burner]}
            </Burner>
          ))}
        </div>
      </DndContext>
    </main>
  );
}