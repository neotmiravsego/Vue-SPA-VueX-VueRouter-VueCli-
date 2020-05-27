<template>
  <li class="container">
    <div class="list-trainers__item">
      <div class="card-trainer">
        <div class="trainer-photo__wrap">
          <img
            :src="trainers_data.avatar"
            alt="Статика"
            class="trainer-photo"
          />
        </div>
        <div class="wrap-inf__trainers">
          <p class="trainer-name ">
            {{ trainers_data.name.firstName }}
            <span class="second-name">{{ trainers_data.name.secondName }}</span>
          </p>
          <p class="trainer-age">Возраст: {{ trainers_data.age }}</p>

          <div class="location-informations">
            <p>Cтрана : {{ trainers_data.location.country }}</p>
            <p>Область : {{ trainers_data.location.region }}</p>
            <p>Город: {{ trainers_data.location.city }}</p>
            <p>Рэйтинг :{{ trainers_data.raiting }}</p>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    trainers_data: {
      type: Object,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
p {
  margin-bottom: 10px;
}
.container {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.list-trainers__item {
  padding: 5px 15px;
  .card-trainer {
    border-radius: 10px;
    background-color: #f2f5f7;
  }
}
.trainer-photo {
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  height: 197px;
  object-position: center;
  width: 100%;
  max-width: 300px;
}
.trainer-photo__wrap {
  height: 200px;
}
.wrap-inf__trainers {
  padding: 5px 10px 10px;
}
</style>
