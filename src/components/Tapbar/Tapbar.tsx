import styles from './Tapbar.module.css';
import { Action, actionsMap } from './tapbarMap';
import { useTapbarVisibility } from '@hooks/useTapbarVisibility';

type TapBarProps = {
  actions: Action[];
};

export const Tapbar = (props: TapBarProps) => {
  const { actions } = props;

  const { isVisible } = useTapbarVisibility();

  return (
    <nav className={`${styles.root} ${isVisible ? styles.visible : styles.hidden}`}>
      <ul className={styles.menu}>
        {actions.map((action, index) => (
          <li key={index}>{actionsMap[action]()}</li>
        ))}
      </ul>
    </nav>
  );
};
