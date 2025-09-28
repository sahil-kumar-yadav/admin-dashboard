import "./globals.css";
import Sidebar from "@/components/common/Sidebar";


export const metadata = {
  title: "Dashboard",
  description: "Admin dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
          {/* BG */}
          <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
            <div className="absolute inset-0 backdrop-blur-sm" />
          </div>

          <Sidebar />
          <div className="flex-1 relative z-10 overflow-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
