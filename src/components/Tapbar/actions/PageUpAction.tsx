import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
import { useCallback } from 'react';

export const PageUpAction = () => {
  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Button onClick={handleScrollToTop}>
      <Icon name='pageup' />
    </Button>
  );
};
