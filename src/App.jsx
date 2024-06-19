import { Select, Input} from '@chakra-ui/react'
import NoteForm from '../components/NoteForm'
import NoteModel from '../components/NoteModel'
import Filters from '../components/Filter'
import { useEffect, useState } from 'react'
import { createNote, fetchNotes } from '../services/note'

function App() {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState({
    search: "",
    sortItem: "date",
    sortOrder: "desc"
  });

  useEffect(() => {
    const fetchNotesAsync = async () => {
      let notes = await fetchNotes(filter);
      setNotes(notes);
    };

    fetchNotesAsync();
  }, [filter])

  const onCreate = async (note) => {
    await createNote(note);
    let notes = await fetchNotes(filter);
    setNotes(notes);
  }

  return (
    <section className='p-8 flex flex-row justify-start items-start gap-12'>
      <div className='flex flex-col w-1/3 gap-10'>
        <NoteForm onCreate={onCreate}/>
        <Filters filter={filter} setFilter={setFilter}/>
      </div>
        <ul className='flex flex-col gap-5 w-1/2'>
        {notes.map(n => (
          <li key={n.id}>
            <NoteModel 
              title={n.title} 
              description={n.description} 
              createdAt={n.createdAt}
            />
          </li>
        ))}
          
        </ul>
    </section>
  )
}

export default App