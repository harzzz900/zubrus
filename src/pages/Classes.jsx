import { useSelector } from "react-redux";
import Landingmodel from "../components/model/Landingmodel";
import Class from "../components/home/Class";
import Zubroteka from "../components/home/Zubroteka";
import WorkshopPage from "./WorkshopPage";
export default function Classes() {
  const tab = useSelector((state) => state.tabData.tab);
  return (
    <div>
      <Landingmodel />
      {(tab === "Klasės" || tab === "classes") && <Class />}
      {(tab === "Zubroteka" || tab === "zubroteka") && <Zubroteka />}
      {(tab === "Dirbtuvės" || tab === "workshops") && <WorkshopPage />}
    </div>
  );
}
