<script setup>
const emits = defineEmits(['close']);
const close = () => {
    emits('close');
}
</script>

<template>
    <Teleport to="body">
            <Transition name="modal-fade">
            <div class="modal-backdrop">
                <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
                    <header id="modalheader" @click="close">
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
                                <h1>dummy text</h1>
                                <h3 class="mb-5">dummy text</h3>
                                <div class="prices">
                                    <span class="old-price">oldPrice</span>
                                    <div class="mb-5 d-flex justify-content-start align-items-center">
                                        <span class="actual-price">price</span>
                                        <span class="discount">discount</span>
                                    </div>
                                </div>
                                <button class="add-to-cart">Add To Cart</button>

                            </slot>
                        </div>
                    </section>
                </div>
            </div>
        </Transition>
        </Teleport>
</template>

<style lang="scss">
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

#modalheader {
    background-color: #eeeeee;
    position: absolute;
    right: 0;
    padding: 35px;
    z-index: 5;

    img {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 20px;
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

    .discount {
        background-color: red;
        color: white;
        border-radius: 5px;
        font-size: 0.8rem;
        padding: 2px 5px;
        height: 23px;


    }

    .old-price {
        text-decoration: line-through;
        color: gainsboro;
        font-weight: 200;
    }

    .actual-price {
        font-size: 22px;
        font-weight: 600;
        margin-right: 8px;
    }
}

.modal-header,
.info {
    margin-top: 5%;
    position: relative;

    h1 {
        font-weight: 400;
        font-size: 32px;
    }

    h3 {
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
    justify-content: space-evenly;

    .img {
        min-width: 600px;
        min-height: 600px;
        position: relative;

        >img {
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            max-width: 600px;
        }
    }
}

.add-to-cart {
    background-color: #ff4040;
    padding: 14px 35px;
    display: flex;
    gap: 10px;
    color: white;
    border-radius: 4px;
    border: none;
    align-items: center;
    width: 100%;
    justify-content: center;

    &::before {
        content: url('/svg/shopping-cart.svg');
        width: 18px;
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
