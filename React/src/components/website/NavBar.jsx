import { Link } from "react-router-dom";

import styles from './NavBar.module.css';
import PropType from 'prop-types'
export default function NavBar({ className }) {
  return (
    <div className={"NavBar " + styles.NavBar + className}>

      <div className={styles.NavBar__Logo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 22 23" fill="none">
          <path d="M20.8795 0H1.1219C0.502293 0 0 0.502293 0 1.1219V10.5297C0 11.1493 0.502293 11.6516 1.1219 11.6516H5.17558V20.8795C5.17522 21.1769 5.29311 21.4623 5.50329 21.6727C5.71347 21.8831 5.99869 22.0014 6.29611 22.0014H15.7039C16.3235 22.0014 16.8258 21.4991 16.8258 20.8795V11.6557H20.8795C21.1769 11.6557 21.4621 11.5375 21.6723 11.327C21.8825 11.1166 22.0004 10.8312 22 10.5338V1.1219C22.0004 0.824482 21.8825 0.539118 21.6723 0.328681C21.4621 0.118244 21.1769 0 20.8795 0ZM1.30042 1.30179H10.3498V10.3512H1.30042V1.30179ZM15.5254 20.701H6.476V11.6557H15.5254V20.701ZM20.6996 10.3512H11.6502V1.30179H20.6996V10.3512Z" fill="#2D3748" />
          <path d="M7.44831 7.32455C7.70457 7.56505 8.10548 7.55869 8.35399 7.31018C8.60249 7.06167 8.60885 6.66077 8.36835 6.40451L6.2907 4.32686C6.03594 4.07448 5.62542 4.07448 5.37066 4.32686L3.28752 6.40451C3.11436 6.56701 3.04345 6.81092 3.10248 7.04093C3.16151 7.27094 3.34112 7.45055 3.57114 7.50959C3.80115 7.56862 4.04506 7.4977 4.20756 7.32455L5.82519 5.70692L7.44831 7.32455Z" fill="#2D3748" />
          <path d="M14.5573 7.32455L16.1749 5.70692L17.7925 7.32455C18.0488 7.56505 18.4497 7.55869 18.6982 7.31018C18.9467 7.06167 18.9531 6.66077 18.7126 6.40451L16.6349 4.32686C16.3801 4.07448 15.9696 4.07448 15.7149 4.32686L13.6372 6.40451C13.3967 6.66077 13.4031 7.06167 13.6516 7.31018C13.9001 7.55869 14.301 7.56505 14.5573 7.32455Z" fill="#2D3748" />
          <path d="M9.38176 14.6767C9.12514 14.4366 8.72423 14.4435 8.47609 14.6924C8.22795 14.9413 8.22219 15.3422 8.46309 15.5981L10.5407 17.6744C10.6626 17.7966 10.8281 17.8654 11.0008 17.8654C11.1734 17.8654 11.3389 17.7966 11.4608 17.6744L13.5384 15.5981C13.703 15.4338 13.7674 15.1941 13.7074 14.9694C13.6474 14.7446 13.472 14.569 13.2474 14.5087C13.0228 14.4483 12.783 14.5123 12.6184 14.6767L11.0008 16.2957L9.38176 14.6767Z" fill="#2D3748" />
        </svg>
        <p className={styles.Logo__Title}>PURITY UI DASHBOARD</p>
      </div>

      <ul className={styles.NavBar__Pages}>
        <li>
          <Link className={styles.Pages__item}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12" fill="none">
                <g clipPath="url(#clip0_92_22)">
                  <path d="M9.97247 3.67541C9.98545 3.66784 9.99621 3.65701 10.0037 3.64398C10.0112 3.63096 10.0151 3.6162 10.0151 3.60118C10.0151 3.58616 10.0112 3.57141 10.0037 3.55838C9.99621 3.54536 9.98545 3.53452 9.97247 3.52695L6.69095 1.62043C6.48098 1.49873 6.2426 1.43463 5.99991 1.43463C5.75722 1.43463 5.51883 1.49873 5.30886 1.62043L2.02798 3.52695C2.01501 3.53452 2.00425 3.54536 1.99677 3.55838C1.98929 3.57141 1.98535 3.58616 1.98535 3.60118C1.98535 3.6162 1.98929 3.63096 1.99677 3.64398C2.00425 3.65701 2.01501 3.66784 2.02798 3.67541L5.95704 5.9867C5.97026 5.99448 5.98532 5.99859 6.00066 5.99859C6.016 5.99859 6.03105 5.99448 6.04427 5.9867L9.97247 3.67541Z" fill="#2D3748" />
                  <path d="M1.66016 4.25974C1.64705 4.25218 1.63218 4.24821 1.61705 4.24823C1.60192 4.24825 1.58706 4.25227 1.57398 4.25988C1.5609 4.26749 1.55006 4.27842 1.54256 4.29156C1.53505 4.3047 1.53115 4.31959 1.53125 4.33472V8.07064C1.53158 8.25068 1.57903 8.42749 1.66888 8.58349C1.75874 8.7395 1.88787 8.86926 2.04344 8.95988L5.52735 11.0488C5.5404 11.0563 5.55521 11.0603 5.57029 11.0603C5.58537 11.0603 5.60018 11.0564 5.61325 11.0488C5.62631 11.0413 5.63716 11.0305 5.64471 11.0174C5.65225 11.0044 5.65624 10.9895 5.65625 10.9745V6.64C5.65624 6.62493 5.65226 6.61013 5.64472 6.59708C5.63717 6.58403 5.62633 6.5732 5.61328 6.56566L1.66016 4.25974Z" fill="#2D3748" />
                  <path d="M6.34375 6.65509V10.9734C6.34377 10.9885 6.34775 11.0033 6.3553 11.0164C6.36285 11.0294 6.3737 11.0403 6.38676 11.0478C6.39982 11.0553 6.41463 11.0593 6.42971 11.0593C6.44479 11.0593 6.4596 11.0553 6.47266 11.0478L9.95635 8.95886C10.1118 8.86836 10.2409 8.73878 10.3308 8.58298C10.4206 8.42717 10.4682 8.25057 10.4687 8.0707V4.33478C10.4687 4.31972 10.4647 4.30494 10.4571 4.29192C10.4496 4.2789 10.4387 4.26809 10.4256 4.26058C10.4126 4.25308 10.3978 4.24913 10.3827 4.24915C10.3677 4.24916 10.3529 4.25313 10.3398 4.26066L6.38672 6.58097C6.3737 6.58849 6.36288 6.59929 6.35534 6.61229C6.3478 6.6253 6.3438 6.64006 6.34375 6.65509Z" fill="#2D3748" />
                </g>
                <defs>
                  <clipPath id="clip0_92_22">
                    <rect width="11" height="11" fill="#2D3748" transform="translate(0.5 0.74762)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={styles.Item__title}>
              DASHBOARD
            </div>
          </Link>
        </li>
        <li>
          <Link className={styles.Pages__item}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12" fill="none">
                <g clipPath="url(#clip0_92_42)">
                  <path d="M7.64658 2.1349C7.2285 1.68351 6.64455 1.43494 6.00002 1.43494C5.35205 1.43494 4.76617 1.68201 4.35002 2.1306C3.92936 2.58414 3.7244 3.20052 3.77252 3.86611C3.86791 5.17923 4.86715 6.24744 6.00002 6.24744C7.13289 6.24744 8.13041 5.17945 8.22731 3.86654C8.27607 3.20697 8.06982 2.59187 7.64658 2.1349Z" fill="#2D3748" />
                  <path d="M9.78137 11.0594H2.21887C2.11989 11.0607 2.02186 11.0399 1.93192 10.9986C1.84198 10.9572 1.76239 10.8963 1.69895 10.8203C1.5593 10.6534 1.50301 10.4254 1.54469 10.1949C1.72602 9.18902 2.29192 8.34404 3.18137 7.75085C3.97157 7.22427 4.97252 6.93445 6.00012 6.93445C7.02772 6.93445 8.02867 7.22449 8.81887 7.75085C9.70832 8.34382 10.2742 9.1888 10.4555 10.1947C10.4972 10.4252 10.4409 10.6532 10.3013 10.8201C10.2379 10.8961 10.1583 10.9571 10.0684 10.9985C9.97841 11.0399 9.88037 11.0607 9.78137 11.0594Z" fill="#2D3748" />
                </g>
                <defs>
                  <clipPath id="clip0_92_42">
                    <rect width="11" height="11" fill="#2D3748" transform="translate(0.5 0.74762)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={styles.Item__title}>
              PROFILE
            </div>
          </Link>
        </li>
        <li>
          <Link className={styles.Pages__item}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 11 12" fill="none">
                <path d="M5.5 1.77832C3.03596 1.77832 1.03125 3.78303 1.03125 6.24707C1.03125 8.71111 3.03596 10.7158 5.5 10.7158C7.96404 10.7158 9.96875 8.71111 9.96875 6.24707C9.96875 3.78303 7.96404 1.77832 5.5 1.77832ZM4.42105 4.28813C4.69326 3.99959 5.07633 3.84082 5.5 3.84082C5.92367 3.84082 6.3033 4.00066 6.57658 4.2907C6.85351 4.58461 6.98822 4.97949 6.95643 5.40402C6.89283 6.24707 6.23971 6.93457 5.5 6.93457C4.76029 6.93457 4.10588 6.24707 4.04357 5.40381C4.01199 4.97584 4.14648 4.57967 4.42105 4.28813ZM5.5 10.0283C4.99522 10.0287 4.49551 9.92762 4.0305 9.73121C3.5655 9.5348 3.14467 9.24702 2.79297 8.88492C2.9944 8.59767 3.25105 8.35343 3.54793 8.16648C4.09557 7.81543 4.78865 7.62207 5.5 7.62207C6.21135 7.62207 6.90443 7.81543 7.45143 8.16648C7.74855 8.35335 8.00543 8.59759 8.20703 8.88492C7.85536 9.24706 7.43454 9.53487 6.96953 9.73128C6.50451 9.92769 6.00479 10.0287 5.5 10.0283Z" fill="#2D3748" />
              </svg>
            </div>
            <div className={styles.Item__title}>
              SIGN UP
            </div>
          </Link>
        </li>
        <li>
          <Link className={styles.Pages__item}>
            <div className={styles.Item__icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12" fill="none">
                <path d="M5.18623 4.33953C5.18623 4.61883 5.18623 4.88953 5.27432 5.14304C4.34834 6.23015 1.90342 9.10261 1.67568 9.32175C1.63042 9.36236 1.59421 9.41205 1.56941 9.46757C1.54461 9.52309 1.53178 9.58321 1.53174 9.64402C1.53174 9.82664 1.64346 10.0028 1.73799 10.1016C1.87979 10.2499 2.48564 10.8106 2.59736 10.7032C2.92822 10.3809 2.99482 10.295 3.13018 10.1618C3.33428 9.96199 3.10869 9.55379 3.17959 9.38836C3.25049 9.22293 3.32568 9.1907 3.44814 9.16492C3.57061 9.13914 3.7876 9.22722 3.95732 9.22937C4.13564 9.23152 4.23232 9.15632 4.36553 9.03172C4.47295 8.93289 4.55029 8.8405 4.55244 8.69656C4.55674 8.5032 4.27744 8.24754 4.48584 8.04343C4.69424 7.83933 4.99502 8.17664 5.21631 8.15086C5.4376 8.12507 5.70615 7.81785 5.73408 7.68679C5.76201 7.55574 5.48271 7.21843 5.52568 7.02722C5.54072 6.96277 5.67178 6.81238 5.77061 6.79089C5.86943 6.76941 6.30771 6.93914 6.40654 6.91765C6.52685 6.89187 6.6665 6.76511 6.78037 6.69422C7.11338 6.83816 7.41631 6.89617 7.80518 6.89617C9.27685 6.89617 10.4692 5.7489 10.4692 4.33523C10.4692 2.92156 9.27685 1.77924 7.80518 1.77924C6.3335 1.77924 5.18623 2.92586 5.18623 4.33953ZM9.09424 3.84174C9.09424 3.97771 9.05392 4.11063 8.97837 4.22369C8.90283 4.33675 8.79546 4.42487 8.66983 4.4769C8.54421 4.52894 8.40597 4.54255 8.27261 4.51603C8.13925 4.4895 8.01675 4.42402 7.9206 4.32787C7.82445 4.23172 7.75898 4.10922 7.73245 3.97586C7.70592 3.8425 7.71954 3.70426 7.77157 3.57864C7.82361 3.45302 7.91172 3.34564 8.02478 3.2701C8.13784 3.19456 8.27076 3.15424 8.40674 3.15424C8.58907 3.15424 8.76394 3.22667 8.89287 3.3556C9.0218 3.48453 9.09424 3.6594 9.09424 3.84174Z" fill="#2D3748" />
              </svg>
            </div>
            <div className={styles.Item__title}>
              SIGN IN
            </div>
          </Link>
        </li>
      </ul>

      <a className={styles.NavBar__Button}>Free Download</a>

    </div>
  )
}
NavBar.propTypes = {
  className: PropType.string,
}