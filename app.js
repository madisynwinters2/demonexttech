import LandingPageComponent from './components/landing-page-component.js';
import AboutPageComponent from './components/about-page-component.js';
import NavbarComponent from './components/navbar-component.js';
import CollectionPageComponent from './components/collection-page-component.js';
import ItemDetailPageComponent from './components/item-detail-page-component.js';

const routes = [
  {
    path: '/',
    component: LandingPageComponent,
  },
  {
    path: '/about',
    component: AboutPageComponent,
  },
  {
    path: '/items',
    component: CollectionPageComponent,
  },
  {
    path: '/items/:id',
    component: ItemDetailPageComponent,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp({
  setup() {
    const itemsStore = Vue.reactive({
      items: [],
      isLoading: true,
      error: '',
    });

    fetch('items.csv')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not load CSV data file.');
        }
        return response.text();
      })
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: ({ data, errors }) => {
            if (errors.length > 0) {
              itemsStore.error = 'There was a problem reading the CSV data.';
              itemsStore.items = [];
            } else {
              const getField = (row, ...keys) => {
                for (const k of keys) {
                  if (Object.prototype.hasOwnProperty.call(row, k) && row[k] != null) {
                    return String(row[k]).trim();
                  }
                }
                return '';
              };

              itemsStore.items = data.map((row, index) => {
                const rawImage = getField(row, 'image_url', 'image', 'image_url ', 'Image', 'IMAGE_URL');
                // normalize backslashes to forward slashes and trim commas/quotes
                let imageUrl = rawImage.replace(/\\+/g, '/').replace(/^,+|,+$/g, '').replace(/^"|"$/g, '').trim();
                // if image path uses a leading folder name with uppercase Assets, normalize to lowercase assets
                imageUrl = imageUrl.replace(/^Assets\//i, 'assets/');

                return {
                  id: String(getField(row, 'id', 'ID', 'Id') || index + 1).trim(),
                  name: String(getField(row, 'name', 'Name') || '').trim(),
                  description: String(getField(row, 'description', ' DESCRIPITION ', 'Description') || '').trim(),
                  category: String(getField(row, 'category', 'Category') || '').trim(),
                  imageUrl: imageUrl || '',
                  location: String(getField(row, 'location', 'Location') || '').trim(),
                };
              });
              itemsStore.error = '';
            }
            itemsStore.isLoading = false;
          },
          error: () => {
            itemsStore.error = 'There was a problem parsing CSV data.';
            itemsStore.items = [];
            itemsStore.isLoading = false;
          },
        });
      })
      .catch(() => {
        itemsStore.error = 'There was a problem loading data.';
        itemsStore.items = [];
        itemsStore.isLoading = false;
      });

    Vue.provide('itemsStore', itemsStore);

    return {};
  },
});

app.component('navbar-component', NavbarComponent);

app.use(router);
app.mount('#app');
