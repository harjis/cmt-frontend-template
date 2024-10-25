import css from "./RemoteApp.module.css";

type Props = {
  name: string;
};
export function RemoteApp(props: Props) {
  return <div className={css.container}>I'm CMT {props.name}</div>;
}
