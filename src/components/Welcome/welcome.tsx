import scss from './Welcome.module.scss';
export default function Welcome(): JSX.Element {
  return (
    <div className={scss.welcome}>
      <p>Welcome to India Cafe </p>
      <h1>Discover new culinary flavors of India</h1>
      <button>view menu</button>
    </div>
  );
}
