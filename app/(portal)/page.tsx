import CommunicationPanel from "../components/home/CommunicationPanel";
import Highlights from "../components/home/Highlights";
import Overview from "../components/home/Overview";
import RequestQueue from "../components/home/RequestQueue";

export default function Home() {
  return (
    <div className="space-y-8">
      <Overview />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-8">
          <RequestQueue />
        </div>
        <div className="col-span-12 space-y-6 xl:col-span-4">
          <Highlights />
          <CommunicationPanel />
        </div>
      </div>
    </div>
  );
}
