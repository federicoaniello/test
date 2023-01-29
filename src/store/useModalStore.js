import { defineStore } from "pinia";
import { computed, ref } from "vue";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
const useModalStore = defineStore("modal", () => {
  const modalData = ref(null);

  const resetModal = () => {
    modalData.value = null;
  };

  const sendModalData = (mD) => (modalData.value = mD);

  const getModalData = computed(() => modalData.value);
  return {
    resetModal,
    sendModalData,
    getModalData,
  };
});

export default useModalStore;
