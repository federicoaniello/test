<template>
    <section>
        <div class="main-title my-4 text-center">
            About <strong>Archiproducts</strong>
        </div>
        <div class="row">
            <div class="col-12 col-md-6">
                <article>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit dolorum laboriosam dolores
                    magni deserunt, corporis illum laudantium repudiandae quas obcaecati temporibus ullam, quisquam
                    praesentium unde voluptatibus quia voluptates sint enim.</article>
            </div>
            <div class="col-12 col-md-6">
                <article>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit dolorum laboriosam dolores
                    magni deserunt, corporis illum laudantium repudiandae quas obcaecati temporibus ullam, quisquam
                    praesentium unde voluptatibus quia voluptates sint enim.</article>
            </div>
        </div>
        <div class="subtitle my-3"><strong>Categories</strong></div>
        <div class="row">
            <div class="col-12 col-md-6">
                <ul>
                    <li>Arredo</li>
                    <li>Bagno</li>
                    <li>Cucina</li>
                    <li>Outdoor</li>
                    <li>Ufficio</li>
                    <div class="d-md-none">
                        <li>Illuminazione</li>
                        <li>Wellness</li>
                        <li>XXXX</li>
                        <li>DDDDD</li>
                        <li>DDDDDDD</li>
                    </div>
                </ul>
            </div>
            <div class="col-6 d-none d-md-block">
                <ul>
                    <li>Illuminazione</li>
                    <li>Wellness</li>
                    <li>XXXX</li>
                    <li>DDDDD</li>
                    <li>DDDDDDD</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.main-title{
    font-size: 32px;
    @media (max-width:767px) {
        font-size: 18px;
    }
}
section {
    margin: 50px 15%;
    @media (max-width:767px) {
        margin: 10px;
    }
    article {}
}
</style>