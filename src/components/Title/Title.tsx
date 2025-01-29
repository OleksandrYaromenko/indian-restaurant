type Text = {
  text: string;
};
import scss from './Title.module.scss';

export default function Title({ text }: Text) {
  return <h3 className={scss.title}>{text}</h3>;
}
