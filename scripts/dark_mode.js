hexo.extend.injector.register('head_end', () => {
  return `
  <style>
  
    .kira-background {
        filter: brightness(0.5) !important;
    }
  </style>
  `;
});