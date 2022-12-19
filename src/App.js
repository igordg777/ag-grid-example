import logo from './logo.svg';
import './App.css';
import RangeExample from './components/RangeExample';
import Exel from './components/Exel'
import Button from './components/Button';

function App() {

  const Example = (e) => {
    console.log(e)
  }

  const users = [
    {
      name: 'Boris',
      city: 'Moscow',
      age: 15
    },
    {
      name: 'Аюр',
      city: 'Moscow',
      age: 32
    },
    {
      name: 'Алексей',
      city: 'Moscow',
      age: 27
    },
    {
      name: 'Александр',
      city: 'Kaluga',
      age: 33
    },
    {
      name: 'Карина',
      city: 'Moscow',
      age: 18
    },
    {
      name: 'Иван',
      city: 'Moscow',
      age: 57
    },
  ]

  const columnsForUsers = [
    { field: 'name', minWidth: 200 },
    { field: 'city', minWidth: 200 },
    { field: 'age', minWidth: 200 }
  ]

  const athletics = [
    {
      athlete: 'Сергей Иванов',
      age: 28,
      country: 'Россия',
      year: 2007,
      sport: "Бег"
    },
    {
      athlete: 'Борис Петров',
      age: 18,
      country: 'Россия',
      year: 2010,
      sport: "Плавание"
    },
    {
      athlete: 'Вячеслав Бутусов',
      age: 57,
      country: 'Россия',
      year: 2002,
      sport: "Фехтование"
    }
  ]

  const columnsForAtletics = [
    { field: 'athlete', minWidth: 200 },
    {
      field: 'age', minWidth: 200
    },
    {
      field: 'country', minWidth: 200,
    },
    {
      field: 'year', minWidth: 200
    },
    {
      field: 'sport', minWidth: 150,
      cellClassRules: {
        notInExcel: (params) => {
          return true;
        },
      },
    },
  ]

  return (
    <div className="App">
      {/* <RangeExample /> */}
      <Exel arr={athletics} columns={columnsForAtletics} />

      <Button textButton={'Кнопка 1'} />
      <Button textButton={'Кнопка 2'} />
      <Button textButton={'Кнопка 3'} action={Example} numberForAction={777} />
      <Button />
      <Button action={Example} numberForAction={21} />

    </div>
  );
}

export default App;
