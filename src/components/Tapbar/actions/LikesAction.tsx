import styles from '../Tapbar.module.css';
import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
import { useState } from 'react';

export const LikesAction = () => {
  const [likes, setLikes] = useState(0);
  const handleLikes = () => {
    setLikes((prev) => prev + 1);
  };

  return (
    <Button className={styles.button} onClick={handleLikes}>
      <Icon name='heart' />
      <p>{likes}</p>
    </Button>
  );
};
