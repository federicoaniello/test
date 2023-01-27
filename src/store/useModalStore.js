import { defineStore } from 'pinia'
import { computed } from 'vue';

// You can name the return value of `defineStore()` anything you want, 
// but it's best to use the name of the store and surround it with `use` 
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useModalStore = defineStore('modal', () => {

    const modalData = ref([]);

    const resetModal = () => { modalData.value = []; }

    const sendModalData = modalData => modalData.value = modalData;

    const getModalData = computed(() => modalData.value)
    return {
        resetModal,
        sendModalData,
        getModalData,
        modalData
    }
})
