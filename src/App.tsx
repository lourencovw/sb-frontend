import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import { Fragment, useState } from 'react';
import './App.css';
import { IDataPeople, IDataSuggestion, IPerson } from './App.model';
import Person from './components/Person/Person';
import api from './services/api';

function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>('');
  const [alreadyStarted, setAlreadyStarted] = useState(false)
  const [data, setData] = useState<IDataPeople>({ people: [], isFetching: false})
  const [autocomplete, setAutocomplete] = useState<IDataSuggestion>({ suggestion: '', isFetching: false })



  const fetchPeople = async (searchQuery: string) => {
    setAlreadyStarted(true)
    try {
      setData(prevState => ({ ...prevState, isFetching: true }));
      const response = await api.get<IPerson[]>('', { params: { searchQuery } });
      setData({ people: response.data, isFetching: false});
    } catch (e) {
      setData(prevState => ({ ...prevState, isFetching: false }));
    }
  };

  const fetchSuggestion = async (searchQuery: string) => {
    try {
      setAutocomplete(prevState => ({ ...prevState, isFetching: true }));
      const response = await api.get<string>('/suggestions', { params: { searchQuery } });
      setAutocomplete({ suggestion: response.data, isFetching: false });
    } catch (e) {
      setAutocomplete(prevState => ({ ...prevState, isFetching: false }));
    }

  };

  return (
    <div className="App">
      <Autocomplete
        id="asynchronous"
        sx={{ width: 300 }}
        open={open && !!value?.length }
        onOpen={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            const target = event.target as HTMLTextAreaElement;

            if (target.value) {
              fetchPeople(target.value)
            }
            setOpen(false)
          }
        }}
        onClose={(event) => {
          const target = event.target as HTMLElement;
          if (target.innerText) {
            fetchPeople(target.innerText)
          }
          setOpen(false)
        }}
        inputValue={value || ''}
        onInputChange={(event, newInputValue) => {
          setValue(newInputValue);
        }}
        isOptionEqualToValue={(option, value) => option === value}
        getOptionLabel={(option) => option.toString()}
        options={[autocomplete.suggestion]}
        loading={autocomplete.isFetching}
        renderInput={(params) => (
          <TextField
            onChange={(event) => fetchSuggestion(event.target.value)}
            {...params}
            label="Search"
            data-testid="search-input"
            InputProps={{
              ...params.InputProps, endAdornment: (
                <Fragment>
                  {autocomplete.isFetching ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </Fragment>
              ),
            }}
          />
        )}
      />
      {((!data.people.length || !data.people) && alreadyStarted) && <h1>No results, please review your search or try a different one</h1>}
      {data?.people.map(person => <Person key={person._id} {...person} />)}
    </div>
  );
}

export default App;
