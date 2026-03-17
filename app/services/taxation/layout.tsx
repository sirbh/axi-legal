// app/services/taxation/layout.tsx

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { ReactNode } from "react";

export default function TaxationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="container mx-auto p-6">

      <h1 className="text-3xl font-extrabold mb-8 text-center text-[#0a1931]">
        Taxation & Compliance
      </h1>

      <Tabs defaultValue="return" className="mb-8">

        <TabsList className="flex justify-center">

          <Link href="/services/taxation/return/filing">
            <TabsTrigger value="return">
              Return Filing
            </TabsTrigger>
          </Link>

          <Link href="/services/taxation/gst-filing/registration">
            <TabsTrigger value="gst">
              GST Services
            </TabsTrigger>
          </Link>

        </TabsList>

      </Tabs>

      {/* Page Content */}
      {children}

    </div>
  );
}