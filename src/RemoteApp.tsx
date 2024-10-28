import css from "./RemoteApp.module.css";

type Props = {
  name: string;
};
function RemoteApp(props: Props) {
  return <div className={css.container}>I'm CMT {props.name}</div>;
}

// IMPORTANT! RemoteApp always needs to export default
export default RemoteApp;