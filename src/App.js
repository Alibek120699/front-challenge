import { useEffect } from "react";
import { useStore } from "store";
import { Header, Container, Filters, Card } from "components";
import "./App.css";

function App() {
  const [vacancies, getVacancies, filterTags] = useStore((state) => [
    state.vacancies,
    state.getVacancies,
    state.filterTags,
  ]);

  const filterVacancies = (v) => {
    return (filterTags || []).every((t) => (v.tags || []).includes(t));
  };

  useEffect(() => {
    getVacancies();
  }, [getVacancies]);

  return (
    <div className="App">
      <Header />
      <Container>
        <Filters />
        {vacancies.filter(filterVacancies).map((c) => (
          <Card key={c.id} {...c} />
        ))}
      </Container>
    </div>
  );
}

export default App;
