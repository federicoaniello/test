<script setup>
const emits = defineEmits(['close']);
const close = () => {
    emits('close');
}
</script>

<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
                <header @click="close">
                    <img :src="'/svg/close.svg'" alt="">
                </header>
                <section class="modal-body" id="modalDescription">
                    <div class="img">
                        <slot name="image">
                            image placeholder
                        </slot>
                    </div>
                    <div class="info">
                        <slot name="info">
                            <h1>Officine Tamborino</h1>
                            <h3 class="mb-4">sottotitolo con braciola</h3>
                            <button class="add-to-cart">Add To Cart</button>
                            <div class="prices">
                                <span class="old-price">oldPrice</span>
                                <div class="d-flex justify-content-center">
                                    <span class="actual-price">price</span>
                                    <span class="discount">discount</span>
                                </div>
                            </div>
                        </slot>
                    </div>
                </section>
            </div>
        </div>
    </transition>
</template>

<style scoped lang="scss">
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}

header {
    background-color: #eeeeee;
    position: absolute;
    right: 0;
    padding: 35px;
    z-index: 5;

    img {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 30px;
        transform: translate(-50%, -50%);
    }
}

.modal {
    position: relative;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
}

.modal-header,
.info{
    h1{
        font-weight: 400;
        font-size: 26px;
    }
    h2{
        font-weight: 300;
        font-size: 20px;
    }
}



.modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
}

.modal-body {
    position: relative;
    padding: 20px 10px;
    display: flex;
    align-items: center;
}
.add-to-cart{
    background-color: red;
    padding: 30px;
    display: flex;
    gap: 5px;
    color: white;
    &::before{
        content: url('/svg/shopping-cart.svg');
    }
}

.modal-fade-enter,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity .5s ease;
}
</style>
