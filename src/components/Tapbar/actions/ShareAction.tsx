import styles from '../Tapbar.module.css';
import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
import { COPY_SUCCESS_MESSAGE } from '@constants/common';
import { classNames } from '@utils/classNames';
import { copyToClipboard } from '@utils/copyToClipboard';
import { useCallback } from 'react';
import toast, { ToastPosition } from 'react-simple-toasts';

const TOAST_DURATION = 2000;
const TOAST_POSITION: ToastPosition = 'top-center';

export const ShareAction = () => {
  const handleShare = useCallback(async () => {
    if (typeof navigator !== 'undefined' && typeof navigator.share !== 'undefined') {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href
        });
      } catch (err: unknown) {
        console.error(err);
      }
    } else {
      try {
        copyToClipboard(window.location.href);
        toast(COPY_SUCCESS_MESSAGE, {
          position: TOAST_POSITION,
          duration: TOAST_DURATION,
          className: classNames(styles.toast, styles.toastSuccess)
        });
      } catch (err) {
        toast((err as Error).message, {
          position: TOAST_POSITION,
          duration: TOAST_DURATION,
          className: classNames(styles.toast, styles.toastError)
        });
      }
    }
  }, []);

  return (
    <Button onClick={handleShare}>
      <Icon name='share' />
    </Button>
  );
};
