import { Input, Button, Textarea } from "@chakra-ui/react"
import { useState } from "react"

export default function NoteForm({ onCreate }) {

  const [note, setNote] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    setNote(null);
    onCreate(note);
  }

  return (
    <form className='w-full flex flex-col gap-5' onSubmit={onSubmit}>
      <h3 className='font-bold' style={{ color: 'white' }}>ЗАМЕТКА ЕБАНАЯ</h3>
      <Input placeholder="Название"
        onChange={(e) => setNote({ ...note, title: e.target.value })}
        value={note?.title ?? ""}
      />

      <Textarea psadlaceholder="Описание"
        onChange={(e) => setNote({ ...note, description: e.target.value })}
        value={note?.description ?? ""}
      />
      <Button colorScheme="teal" type="submit">Создать</Button>
    </form>
  )
}
