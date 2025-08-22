import { create } from 'zustand'
import axios from 'axios';

export const ObjectsStore = create((set) => ({
    objects: [],
    loading: false,
    error: false,
    
    objectsFetch: async () => {
        set({ loading: true, error: false });
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            set({ objects: response.data, loading: false})
        }catch (e) {
            set({ error: true, loading: false })
        }
    }
}))

