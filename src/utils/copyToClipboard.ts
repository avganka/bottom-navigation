import { COPY_ERROR_MESSAGE } from '@constants/common';

export const copyToClipboard = async (text: string) => {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      const range = document.createRange();
      const selection = document.getSelection();
      const tempEl = document.createElement('span');

      tempEl.textContent = text;
      tempEl.ariaHidden = 'true';
      tempEl.style.all = 'unset';
      tempEl.style.position = 'fixed';
      tempEl.style.top = '0';
      tempEl.style.clip = 'rect(0, 0, 0, 0)';
      tempEl.style.whiteSpace = 'pre';
      tempEl.style.userSelect = 'text';

      document.body.appendChild(tempEl);
      range.selectNodeContents(tempEl);
      selection?.addRange(range);

      return document.execCommand('copy');
    }
  } catch (err) {
    console.error(err);
    throw new Error(COPY_ERROR_MESSAGE);
  }
};
