<template>
    <div>
        <notifications animation-type="velocity" classes="my-notification" group="app" position="bottom right">
            <template slot="body" slot-scope="{ item, close }">
                <div class="my-notification" :class="item.type">
                    <div class="d-flex justify-start align-center">
                        <v-icon v-if="item.type === 'success'" color="white" left small>mdi-check-bold</v-icon>
                        <v-icon v-if="item.type === 'error'" color="white" left small>mdi-alert-octagon</v-icon>
                        <v-icon v-if="item.type === 'warning'" color="white" left small>mdi-alert</v-icon>
                        <v-icon v-if="item.type === 'info'" color="white" left small>mdi-lightbulb-on</v-icon>
                        <span class="font-weight-medium text-overline">{{item.title}}</span>
                        <v-spacer></v-spacer>
                        <v-btn icon x-small @click="close">
                            <v-icon color="white" x-small>mdi-close</v-icon>
                        </v-btn>
                    </div>
                    <div class="text-caption" v-html="item.text"/>
                </div>
            </template>
        </notifications>
    </div>
</template>

<script>
export default {
  name: "NotificationAlert",
}
</script>

<style lang="scss">
    .my-notification {
        color: white;
        background: #696d69;
        border-left: 5px solid #f8faf9;
        margin: 0 5px 5px;
        padding: 10px;

        &.success {
            background: #83d83d !important;
            border-left-color: #42A85F !important;
        }
        &.warning {
            background: #ffb648 !important;
            border-left-color: #f48a06 !important;
        }
        &.error {
            background: #e26a62 !important;
            border-left-color: #8d180f !important;
        } 
        &.info {
            background: #9d9d9d !important;
            border-left-color: #2a3b4d !important;
        } 
    }
</style>