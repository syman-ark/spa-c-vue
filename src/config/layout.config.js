import ContentDisplayArea from '../component/ContentDisplayArea';
import Navigator from '../component/Navigator';

export default {
  direction: 'row',
  items: [
    {
      component: Navigator
    },
    {
      weight: 1,
      style: {
        overflow: 'hidden',
      },
      component: ContentDisplayArea
    }
  ]
};
