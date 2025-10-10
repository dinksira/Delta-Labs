// src/components/Landing_page/LeftSidebar.tsx
export default function LeftSidebar() {
  return (
    <aside className="w-64 bg-gray-50 border-r p-4 flex flex-col space-y-3 min-h-screen">
      <nav className="flex flex-col space-y-2">
        <a href="#" className="px-3 py-2 rounded hover:bg-gray-200 transition">Home</a>
        <a href="#" className="px-3 py-2 rounded hover:bg-gray-200 transition">Courses</a>
        <a href="#" className="px-3 py-2 rounded hover:bg-gray-200 transition">Labs</a>
        <a href="#" className="px-3 py-2 rounded hover:bg-gray-200 transition">Community</a>
        <a href="#" className="px-3 py-2 rounded hover:bg-gray-200 transition">Resources</a>
      </nav>
    </aside>
  );
}
