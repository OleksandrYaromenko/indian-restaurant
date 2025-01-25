import scss from './MyButton.module.scss';
type Style = {
  text: string;
  padding: string;
};
export default function MyButton({ text, padding }: Style): JSX.Element {
  return (
    <button className={scss.button} style={{ padding: padding }}>
      {text}
    </button>
  );
}
