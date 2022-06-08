const settings: Readonly<{ debug: boolean; showErrors: boolean }> = {
  debug: true,
  showErrors: true
};
// error: cannot assign to 'debug' because its readonly
// settings.debug = false;
