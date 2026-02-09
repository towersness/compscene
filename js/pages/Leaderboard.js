import Spinner from '../components/Spinner.js';

export default {
  components: {
    Spinner,
  },
  data: () => ({
    loading: false,
  }),
  template: `
    <main class="page-leaderboard-container">
      <div class="page-leaderboard">
        <div class="ranks-container">
          <h2>The Ranks:</h2>
          <div class="ranks-list">
            <div class="rank-item">Best of the Best</div>
            <div class="rank-item">S+</div>
            <div class="rank-item">S</div>
            <div class="rank-item">S-</div>
            <div class="rank-item">A+</div>
            <div class="rank-item">A</div>
            <div class="rank-item">A-</div>
            <div class="rank-item">B+</div>
            <div class="rank-item">B</div>
            <div class="rank-item">B-</div>
            <div class="rank-item">C+</div>
          </div>
        </div>
      </div>
    </main>
  `,
  methods: {},
};