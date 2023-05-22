import { getFeaturedEvents } from "@/dummy-data"
import EventList from "@/components/events/event-list";


export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <EventList items={featuredEvents} />
    </div>
  )
}
