import scss from './Welcome.module.scss';
export default function Welcome(): JSX.Element {
  return (
    <div className={scss.welcome}>
      <div className={scss.container}>
        <p className={scss.paragraf}>Welcome to India Cafe </p>
        <h1 className={scss.title}>Discover new culinary</h1>
        <h2 className={scss.title}>flavors of India</h2>
        <button className={scss.button}>VIEW MENU</button>
      </div>
    </div>
  );
}
