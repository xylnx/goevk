export function logBuildDate() {
  if (import.meta.env.PROD) {
    console.log(
      `%cBuild date: ${BUILD_DATE}`,
      'background: #001524; color: #ff7d00; padding: 4px 8px; border-radius: 2px',
    );
  }
}
