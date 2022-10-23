import Btn from '../btn/btn';
import './form.scss';
import PasswordError from './passwordError';
import PasswordGood from './passwordGood';
import useInput from '../../hooks/use-input';

const passwordLengthErrorMessage = 'Password must be at least 8 characters';
const passwordConfirmErrorMessage = 'Passwords do not match';

function Form() {
  const {
    inputValue: password,
    inputValueChanged: passwordChanged,
    inputIsValid: passwordIsValid,
    inputValueChangeHandler: passwordChangeHandler,
    reset: resetPassword,
  } = useInput((password) => {
    return password.length > 7;
  });

  const {
    inputValue: passwordConfirm,
    inputValueChanged: passwordConfirmChanged,
    inputIsValid: passwordConfirmIsValid,
    inputValueChangeHandler: passwordConfirmChangeHandler,
    reset: resetPasswordConfirm,
  } = useInput((passwordConfirm) => {
    return passwordConfirm === password;
  });

  const passwordErrorHandler = (errorMessage) => {
    if (passwordIsValid) return <PasswordGood />;

    if (password.length === 0) return <div></div>;

    return <PasswordError>{errorMessage}</PasswordError>;
  };

  const passwordConfirmErrorHandler = (errorMessage) => {
    if (!passwordIsValid) return;

    if (!passwordConfirmChanged) return;

    if (passwordChanged && passwordConfirm.length === 0) return;

    if (passwordConfirm.length === 0) return <div></div>;

    if (passwordConfirmIsValid) return <PasswordGood />;

    return <PasswordError>{errorMessage}</PasswordError>;
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!passwordConfirmIsValid) return;

    resetPassword();

    resetPasswordConfirm();

    return;
  };
  return (
    <div className='form__container'>
      <form onSubmit={formSubmissionHandler} className='form p_xs fl-gap-s'>
        <h1 className='text--white bg-pink form__header'>Create Account</h1>
        <div className='form__details fl-gap-s text--white mt_l mb_l'>
          <label htmlFor='first-name'>First Name</label>
          <input type='text' id='first-name' className='text-dark' required></input>
          <label htmlFor='last-name'>Last Name</label>
          <input type='text' id='last-name' className='text-dark' required></input>
          <label htmlFor='createPassword' className='mt_l'>
            Create password:
          </label>
          <input
            onChange={passwordChangeHandler}
            value={password}
            id='createPassword'
            type='password'
            className='text-dark'
            required
          ></input>
          {passwordErrorHandler(passwordLengthErrorMessage)}
          <label htmlFor='passwordConfirm'>Password confirm:</label>
          <input
            onChange={passwordConfirmChangeHandler}
            value={passwordConfirm}
            id='passwordConfirm'
            type='password'
            className='text-dark'
            required
            disabled={!passwordIsValid}
          ></input>
          {passwordConfirmErrorHandler(passwordConfirmErrorMessage)}
        </div>
        <Btn color={'green'} text={'white'}>
          Book Now
        </Btn>
      </form>
    </div>
  );
}

export default Form;
