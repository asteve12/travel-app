import { Header, StatsCard, TripCard } from "components";
import { useLoaderData } from "react-router";
import { getUser } from "~/appwrite/auth";
import { user, dashBoardStats, allTrips } from "~/constants";
import type { Route } from "./+types/dashboard";

export const clientLoader = async () => await getUser();

const Dashboard = ({ loaderData }: Route.ComponentProps) => {
  const user = loaderData as User | null;
  return (
    <main className="dashboard wrapper">
      <Header title={`${user?.name}`} description="Welcome to your dashboard" />
      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard
            headerTitle="Total Users"
            total={dashBoardStats.totalUsers}
            currentMonthCount={dashBoardStats.usersJoined.currentMonth}
            lastMonthCount={dashBoardStats.usersJoined.lastMonth}
          />
          <StatsCard
            headerTitle="Total Trips"
            total={dashBoardStats.totalTrips}
            currentMonthCount={dashBoardStats.tripSCreated.currentMonth}
            lastMonthCount={dashBoardStats.tripSCreated.lastMonth}
          />
          <StatsCard
            headerTitle="Active Users"
            total={dashBoardStats.userRole.total}
            currentMonthCount={dashBoardStats.userRole.currentMonth}
            lastMonthCount={dashBoardStats.userRole.lastMonth}
          />
        </div>
      </section>

      <section className="container">
        <h1 className="text-xl font-semibold text-dark-100">Created Trips</h1>

        <div className="trip-grid">
          {allTrips.map((trip) => (
            <TripCard
              key={trip.id}
              id={trip.id.toString()}
              name={trip.name!}
              imageUrl={trip.imageUrls[0]}
              location={trip.itinerary?.[0]?.location ?? ""}
              tags={trip.tags}
              price={trip.estimatedPrice!}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
