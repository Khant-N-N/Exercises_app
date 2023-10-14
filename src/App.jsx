import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Context from "./context/Context";
import useFetchData from "./hooks/useFetchData";
import { requests } from "./request";
import { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import { CiDumbbell } from "react-icons/ci";
import { useRef } from "react";
import SearchPage from "./pages/SearchPage";
import AOS from "aos";
import "aos/dist/aos.css";
const ExerciseDetailPage = lazy(() => import("./pages/ExerciseDetailPage"));
const ExercisesPage = lazy(() => import("./pages/ExercisesPage"));

function App() {
  const { data, loading } = useFetchData(requests.requestExercises, "1000");
  const [searchItems, setSearchItems] = useState([]);
  const [isType, setIsType] = useState(false);
  const searchRef = useRef();
  const [bodyPart, setBodyPart] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [target, setTarget] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setBodyPart([...new Set(data?.map((item) => item.bodyPart))]);
    setEquipment([...new Set(data?.map((item) => item.equipment))]);
    setTarget([...new Set(data?.map((item) => item.target))]);
  }, [data]);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleKeyUp = (e) => {
    setIsType(true);
    if (e.key === "Enter") {
      setSearchItems(
        data?.filter(
          (item) =>
            item.bodyPart
              .toLowerCase()
              .includes(searchRef.current.value.toLowerCase()) ||
            item.target
              .toLowerCase()
              .includes(searchRef.current.value.toLowerCase()) ||
            item.equipment
              .toLowerCase()
              .includes(searchRef.current.value.toLowerCase())
        )
      );
      navigate("/searchItems");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <>
      <Context.Provider
        value={{
          isType,
          setIsType,
          data,
          loading,
          target,
          equipment,
          bodyPart,
          searchRef,
          searchItems,
          handleKeyUp,
        }}
      >
        <Navbar />
        <Suspense
          fallback={
            <div className="flex justify-center h-[400px] items-center">
              <CiDumbbell className="animate-spin text-[1.7rem]" />
            </div>
          }
        >
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route
              path="/exerciseDetail/:id"
              element={<ExerciseDetailPage />}
            />
            <Route path="/exercises" element={<ExercisesPage />} />
            <Route path="/searchItems" element={<SearchPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
