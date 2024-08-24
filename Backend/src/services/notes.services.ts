import test from './test.json'

const data = test;

export const getNotes = () => data;

export const createNote = (id: number, title: string, description: string, date: string):Object => {
    const note = {
        id,
        title,
        description,
        date
    }

    data.push(note);
    return note;
}