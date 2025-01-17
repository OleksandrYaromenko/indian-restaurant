import About from '../../components/About-us/about-us.tsx';
import Visit from '../../components/Visit/Visit.tsx';
import Welcome from '../../components/Welcome/Welcome.tsx';

export default function Home(): JSX.Element {
  return (
    <div>
      <Welcome />
      <About />
      <Visit />
    </div>
  );
}
