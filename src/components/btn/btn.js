import './btn.scss';
import '../../index.scss';

function Btn(props) {
  const btnClass = `btn btn__${props.color} text--${props.text}`;
  return <button className={btnClass}>{props.children}</button>;
}

export default Btn;
