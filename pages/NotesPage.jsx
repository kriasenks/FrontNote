import React, { useEffect, useState } from "react";
import { Box, VStack, HStack, Heading, Flex, Button } from "@chakra-ui/react";
import CreateNoteForm from "../components/CreateNoteForm";
import Note from "../components/Note";
import Filters from "../components/Filters";
import { createNote, fetchNotes } from "../services/note.js";
import { logout } from "../services/auth.js";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function NotesPage() {
    const [notes, setNotes] = useState([]);
    const [filter, setFilter] = useState({
        search: "",
        sortItem: "date",
        sortOrder: "desc",
    });
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = () => {
            let token = Cookies.get("jwt");
            var IsAuthenticated = false

            token != null ? IsAuthenticated = true : IsAuthenticated = false;

            IsAuthenticated ? navigate("/notes") : navigate("/login");
        };

        checkAuth();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            let fetchedNotes = await fetchNotes(filter);
            setNotes(fetchedNotes);
        };

        fetchData();
    }, [filter]);

    const onCreate = async (note) => {
        await createNote(note);
        let fetchedNotes = await fetchNotes(filter);
        setNotes(fetchedNotes);
    };

    const handleClick = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.log("Ошибка при выходе из системы: ", error);
            throw error;
        }
    };

    return (
        <Flex
            p={8}
            minH="100vh"
            justifyContent="center"
            alignItems="flex-start"
            bg="gray.50"
        >
            <HStack
                w="full"
                maxW="1200px"
                alignItems="flex-start"
                spacing={12}
                bg="white"
                p={6}
                borderRadius="md"
                boxShadow="lg"
            >
                <VStack spacing={6} w="1/3">
                    <Heading size="lg">Создание заметки</Heading>
                    <CreateNoteForm onCreate={onCreate} />
                    <Heading size="lg">Фильтры</Heading>
                    <Filters filter={filter} setFilter={setFilter} />
                    <Button type="button" onClick={handleClick}>Выйти</Button>
                </VStack>
                <VStack spacing={5} w="2/3">
                    <Heading size="lg">Заметки</Heading>
                    {notes.map((n) => (
                        <Box
                            key={n.id}
                            w="full"
                            p={4}
                            bg="gray.100"
                            borderRadius="md"
                            boxShadow="md"
                        >
                            <Note
                                title={n.title}
                                description={n.description}
                                createdAt={n.createdAt}
                            />
                        </Box>
                    ))}
                </VStack>
            </HStack>
        </Flex>
    );
}