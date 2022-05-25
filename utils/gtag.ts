
function getWindow() {
  return window as unknown as {
    gtag?: (event: string, message: string, data: any) => void;
  };
}

export const GTAG_ID = 'G-J01SGVQS7N';

// log the pageview with their URL
export const pageview = (url) => {
  const w = getWindow();
  if (w.gtag) {
    getWindow().gtag('config', GTAG_ID, {
      page_path: url,
    });
  }
  console.log('gtag', !!w.gtag, 'pageview', url);
}

// log specific events happening.
export const event = ({ action, params }) => {
  const w = getWindow();
  if (w.gtag) {
    getWindow().gtag('event', action, params);
  }
  console.log('gtag', !!w.gtag, 'event', action, params);
}
