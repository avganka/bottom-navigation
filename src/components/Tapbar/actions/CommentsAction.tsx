import styles from '../Tapbar.module.css';
import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
import { useState } from 'react';

export const CommentsAction = () => {
  const [comments, setComments] = useState(0);
  const handleComments = () => {
    setComments((prev) => prev + 1);
  };

  return (
    <Button className={styles.button} onClick={handleComments}>
      <Icon name='comments' />
      <p>{comments}</p>
    </Button>
  );
};
