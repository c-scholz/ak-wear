<template>
    <div>
        <div v-if="isTaglist" class='taglist'>
            <div class="input-group">
                <div class="input-group-prepend">
                    <div class="input-group-text">{{ label }}</div>
                </div>
                <input class="form-control" type="text" :name="name" :placeholder="placeholder" v-on:keydown.enter="addItem">
            </div>
            <div class="taglistContainer">
                <div class="tag" v-for="(item, index) in items" :key="index">
                    <div class="taglistName noPadding">
                        {{ item }}
                    </div>
                    <div class="taglistButtons">
                        <font-awesome-icon class="taglistButton" :icon="['fas', 'times']" v-on:click="removeItem(index)" />
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isItemlist" class="itemlist">
            <input class="form-control inputAbstand" type="text" :name="name" :placeholder="placeholder" v-on:keydown.enter="addItem">
            <draggable v-model="items" handle=".itemlistButton.drag" :disabled="!isDraggable" class="itemContainer">
                <div class="row" v-for="(item, index) in items" :key="index">
                    <div v-if="isDraggable" class="itemlistButtons col-3 col-sm-2">
                        <font-awesome-icon class="itemlistButton drag" :icon="['fas', 'arrows-alt']" />
                    </div>
                    <div class="itemlistName noPadding" 
                        :class="{'col-6': isDraggable, 'col-sm-8':isDraggable, 'col-9': !isDraggable, 'col-sm-10':!isDraggable }" 
                        type="text">
                        {{ item }}
                    </div>
                    <div class="itemlistButtons col-3 col-sm-2 justify-content-end">
                        <font-awesome-icon class="itemlistButton" :icon="['fas', 'times']" v-on:click="removeItem(index)" />
                    </div>
                </div>
            </draggable>
        </div>
    </div>
</template>

<script>
import draggable from 'vuedraggable'

const types = {
    TAGLIST: 'taglist',
    ITEMLIST: 'itemlist',
    ITEMLIST_DRAGGABLE: 'itemlistDraggable'
}

export default {
    model: {
        prop: 'parentItems',
    },
    props: {
        name: {
            type: String,
            required: true,
        },
        parentItems: {
            type: Array,
            required: true,
        },
        maxEntries: {
            type: Number,
            default: 20,
        },
        preset: {
            type: Array,
            default: () => ['Item 1'],
        },
        placeholder: {
            type: String,
            default: 'Name, Name, ..',
        },
        label: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: types.TAGLIST,
            validator: value => {
                if(value === "") {
                    console.warn(`Cannot pass empty type. Only types ${Object.values(types).map((type, index) => '"' + type + '"' + (index < Object.values(types).length ? '' : ', '))} allowed.`)
                    return false
                }
                if(!Object.values(types).includes(value)) {
                    console.warn(`Type "${value}" not supported. Only types ${Object.values(types).map((type, index) => '"' + type + '"' + (index < Object.values(types).length ? '' : ', '))} allowed.`)
                    return false
                }
                return true
            }
        }
    },
    components: {
        draggable
    },
    data() {
        return {
            items: []
        }
    },
    computed: {
        isDraggable: function() {
            return this.type === types.ITEMLIST_DRAGGABLE
        },
        isItemlist: function() {
            return [
                types.ITEMLIST, 
                types.ITEMLIST_DRAGGABLE
            ].indexOf(this.type) !== -1 
        },
        isTaglist: function() {
            return [
                types.TAGLIST, 
            ].indexOf(this.type) !== -1 
        }
    },
    watch: {
        items: function(items) {
            this.$emit('input', items)
        }
    },
    methods: {
        addItem(event) {
            event.preventDefault();

            var item = event.target.value;

            if(item.length > 0) {
                if(this.items.length >= this.maxEntries) {
                    this.$emit('warning', `Der ausgewählten Liste können maximal ${ this.maxEntries } Elemente hinzugefügt werden!`);
                    return;
                }
                this.items.push(item);
                event.target.value = '';
            }

            this.$emit('input', this.items);
        }, 
        removeItem(index) {
            this.items.splice(index, 1);

            this.$emit('input', this.items);
        },
    },
    created: function() {
        this.items = this.$props.preset;
    }
}
</script>

<style lang="scss" scoped>
.itemContainer {
    font-family: 'Muli Light', sans-serif;
    margin-top: 15px;
}

.itemContainer > div {
    border-bottom: 1px solid #e6e6e6;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    list-style: none;
    padding-bottom: 7px;
    margin-bottom: 10px;
}

.itemlistButtons {
    display: flex;
    align-items: center;
}

.itemContainer div .itemlistButton:active,
.itemContainer div .itemlistButton:focus,
.itemContainer div .itemlistButton:hover {
    background: #1a1a1a;
    color: #fff;
    border: 2px solid transparent;
    transition: all 0.25s;
}

.itemContainer div .itemlistButton {
    color: #1a1a1a;
    height: 25px;
    width: 25px;
    border: 2px solid #1a1a1a;
    border-radius: 5px;
    padding: 4px;
}

.itemlistButtons:first-child {
    padding-left: 0;
}

.itemlistButtons:last-child {
    padding-right: 0;
}

.itemlistButtons:first-child .itemlistButton {
    cursor: move;
}

.itemlistButtons:last-child .itemlistButton {
    cursor: pointer;
}

.form-control {
    border: 2px solid #f2f2f2;
    border-left: 0;
    border-bottom-right-radius: 0;
}
.taglistContainer {
    border: 2px solid #f2f2f2;
    border-top: 0;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 2.5px;
}

.tag { 
    display: inline-flex;
    font-family: "Muli Light", sans-serif;
    font-size: 13px;
    color: #fff;
    background-color: #1A1A1A;
    border: 1px solid #1A1A1A;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 5px;
}

.taglistName {
    margin-right: 5px;
}

.taglistButton {
    position: relative;
    font-size: 12px;
    align-items: center;
    cursor: pointer;
}

.linear-stop1 { stop-color:#ffae27; }
.linear-stop2 { stop-color: #d93548; }
.taglistButton:focus path, .taglistButton:hover path { fill: url(#linear); }
</style>