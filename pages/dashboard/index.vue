<template>
  <v-container class="align-self-start">
    <v-row>
      <v-col cols="12">
        <div class="headline">Dashboard</div>
        <div class="subtitle">Welcome to article dashboard</div>
      </v-col>
      <v-col cols="8">
        <v-row>
          <v-col cols="3">
            <v-card class="text-center">
              <v-card-text class="justify-center">
                <v-avatar class="" size="60" color="primary">
                  <v-icon color="white">mdi-account-group-outline</v-icon>
                </v-avatar>
              </v-card-text>
              <v-card-subtitle class="justify-center py-0">
                Guests
              </v-card-subtitle>
              <v-card-title class="justify-center pt-0"> 2530 </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card class="text-center">
              <v-card-text class="justify-center">
                <v-avatar class="" size="60" color="primary">
                  <v-icon color="white">mdi-card-text-outline</v-icon>
                </v-avatar>
              </v-card-text>
              <v-card-subtitle class="justify-center py-0">
                Articles
              </v-card-subtitle>
              <v-card-title class="justify-center pt-0"> 1011 </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card class="text-center">
              <v-card-text class="justify-center">
                <v-avatar class="" size="60" color="primary">
                  <v-icon color="white">mdi-shape-outline</v-icon>
                </v-avatar>
              </v-card-text>
              <v-card-subtitle class="justify-center py-0">
                Genres
              </v-card-subtitle>
              <v-card-title class="justify-center pt-0"> 10 </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card class="text-center">
              <v-card-text class="justify-center">
                <v-avatar class="" size="60" color="primary">
                  <v-icon color="white">mdi-card-text-outline</v-icon>
                </v-avatar>
              </v-card-text>
              <v-card-subtitle class="justify-center py-0">
                Articles
              </v-card-subtitle>
              <v-card-title class="justify-center pt-0"> 1011 </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card>
              <v-card-subtitle>Top 10 viewed articles</v-card-subtitle>
              <v-data-table
                :headers="topArticleTable.headers"
                :items="topArticleTable.items"
                hide-default-footer
              >
              </v-data-table>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <v-list three-line class="elevation-1">
          <v-subheader> Feedback </v-subheader>
          <v-list-item
            v-for="(feedback, index) in feedbacks"
            :key="'feedback' + index"
          >
            <v-list-item-avatar>
              <v-img :src="feedback.img" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ feedback.name }}</v-list-item-title>
              <v-list-item-subtitle>
                {{ feedback.feedback }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      feedbacks: [
        {
          img: 'https://assets.profiles.hallyulife.com/shin-yuna-itzy-yuna-not-shy-photo.jpg',
          name: 'Yuna',
          feedback:
            'Sandra Adams — Do you have Paris recommendations? Have you ever been?',
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqtBg8M10dPs-cBLxbxSo3rw6YlR6rUQ4n6Xs1KSK-2dUPJmrklIysrOenGS02ssKXnxQ&usqp=CAU',
          name: 'Winter',
          feedback:
            "to Alex, Scott, Jennifer — Wish I could come, but I'm out of town this weekend.",
        },
        {
          img: 'https://image.kpopmap.com/2021/06/aespa-karina.jpg',
          name: 'Karina',
          feedback:
            "Ali Connors — I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        {
          img: 'https://en.kepoper.com/wp-content/uploads/2021/01/twice-mina-profile-1-wm.jpg',
          name: 'Mina',
          feedback:
            "Ali Connors — I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        {
          img: 'https://pbs.twimg.com/media/EhE0DWlU8AIjeoa.jpg',
          name: 'Yeji',
          feedback:
            "Ali Connors — I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
      ],
      topArticleTable: {
        headers: [
          { text: 'No.', value: 'no', sortable: false },
          { text: 'Title', value: 'title', sortable: false },
          { text: 'Genre', value: 'genre', sortable: false },
          { text: 'Views', value: 'views', sortable: false },
        ],
        items: [
          {
            no: 1,
            title: 'Top 10 games for mobile',
            genre: 'Entertainment',
            views: '9K',
          },
          {
            no: 2,
            title: 'Top 5 new technologies',
            genre: 'Technology',
            views: '8K',
          },
          {
            no: 3,
            title: 'Design Trend in 2021',
            genre: 'Design',
            views: '7K',
          },
          {
            no: 4,
            title: 'Nintendo Switch OLED release date',
            genre: 'Entertainment',
            views: '5K',
          },
        ],
      },
    };
  },
};
</script>
