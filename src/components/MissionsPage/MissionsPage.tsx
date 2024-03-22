import { MissionCard } from "..";
import "./MissionsPage.scss";

export default function MissionsPage() {
  return(
    <div className="missions-page">
      <div className="container missions-page__container">
        <MissionCard />
      </div>
    </div>
  )
}
