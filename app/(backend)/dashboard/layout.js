import DashNav from "@/app/components/DashNav";
import "../../globals.css";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <DashNav></DashNav>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
