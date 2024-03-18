import { Suspense } from "react";
import { fetchLatestInvoices, fetchRevenue } from "../lib/data"
import LatestInvoices from "../ui/dashboard/latest-invoices";
import RevenueChart from "../ui/dashboard/revenue-chart";
import { lusitana } from "../ui/fonts";
import { CardSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from "../ui/skeletons";
import CardWrapper from "../ui/dashboard/cards";

export default async function Page() {
    
    return (
        <main>
          <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            Dashboard
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
            {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
            {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
            {/* <Card
              title="Total Customers"
              value={numberOfCustomers}
              type="customers"
            /> */}
            <Suspense fallback={<CardSkeleton />}>
              <CardWrapper />
            </Suspense>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            <Suspense fallback={<RevenueChartSkeleton/>}>
                <RevenueChart />
            </Suspense>
            <Suspense fallback={<LatestInvoicesSkeleton/>}>
                <LatestInvoices />
            </Suspense>            
          </div>
        </main>
      );
}