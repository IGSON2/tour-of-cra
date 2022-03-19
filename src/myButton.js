import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Btn({ ifClick, text }) {
  return (
    <button onClick={ifClick} className={styles.Btn}>
      {text}
    </button>
  );
}

//prop-Types 지정 (같은 방식)
Btn.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Btn;

//외부로 공개하려면 작성해 주어야 함.
//'default' Arg는 '해당 모듈엔 개체가 하나만 있다'는 사실을 명시한다.
//때문에 import시 {}중괄호 없이 모듈을 가져올 수 있게 된다.
