import { defineStore } from 'pinia';

export const usePanelsStore = defineStore('panelsStore', {
    state: () => ({
        clusters: [], // Initialize as an empty array
        total: {},
    }),

    actions: {
        async fillTotal() {
            try {
                const url = '  http://localhost:3000/total';
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.statusText}`);
                }

                const data = await response.json();

                this.total = data;
            } catch (error) {
                console.error('Error fetching car data:', error);
                // Handle the error appropriately, e.g., set a flag or display an error message
                throw error; // Rethrow the error to propagate it to the caller if needed
            }
        },
        async fillClusters() {
            try {
                const url = '  http://localhost:3000/cluster';
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.statusText}`);
                }

                const data = await response.json();

                this.clusters = data;
            } catch (error) {
                console.error('Error fetching car data:', error);
                // Handle the error appropriately, e.g., set a flag or display an error message
                throw error; // Rethrow the error to propagate it to the caller if needed
            }
        },
    },
});
