<template>
    <q-page class="flex flex-center">
        <img alt="Quasar logo" src="../assets/logo.png" class="col-8">
        <h3 class="col-4">TEAM SEARCHER</h3>
        <div class="col-12 row">
            <div class="col-8">
                <q-card>
                    <q-list>
                        <q-item>

                        </q-item>
                    </q-list>
                </q-card>
            </div>
            <div class="col-3">
                <q-card>
                    <h6>Perfil</h6>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<style>
</style>

<script>
    import QList from "quasar-framework/src/components/list/QList";
    import QCard from "quasar-framework/src/components/card/QCard";

    export default {
        name: 'Dashboard',
        components: {QCard, QList}
    }
</script>
