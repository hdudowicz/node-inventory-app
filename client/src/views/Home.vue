<template>
  <b-container>
    <!-- <div>
      <hr />
      <div class="list-unstyled" v-for="item in items" :key="item._id">
        <li class="media">
          <img v-if="item.imageURL" class="mr-3" :src="item.imageURL" :alt="item.description" />
          <div class="media-body">
            <h4 class="mt-0 mb-1">{{item.title}}</h4>
            <h5 class="mt-0 mb-1">{{item.description}}</h5>
            {{item.stock}}
            <br />
            <small>{{item.price}}</small>
          </div>
        </li>
        <hr />
      </div>
    </div> -->

    <b-row>
      <b-col>
        <b-card v-for="item in items" :key="item._id"
          :title=item.title
          :img-src=item.imageURL
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>{{item.description}}</b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
 
<script>
const API_URL = "http://localhost:3000/items";

export default {
  name: "home",
  data: () => ({
    error: "",
    items: []
  }),

  mounted() {
    fetch(API_URL)
      .then(response => response.json())
      .then(result => {
        this.items = result;
      });
  },
  methods: {}
};
</script>
 
<style>
img {
  max-width: 300px;
  height: auto;
}
</style>