import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
import { useCallback } from 'react';

export const ShareAction = () => {
  const handleShare = useCallback(async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          url: window.location.href
        });
      } else {
        navigator.clipboard.writeText(window.location.href);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Button onClick={handleShare}>
      <Icon name='share' />
    </Button>
  );
};
