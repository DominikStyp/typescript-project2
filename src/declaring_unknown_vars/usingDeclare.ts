// here we define the global scope variables and make sure
// that TypeScript knows the xyz variable on Window
// and global SOME_GLOBAL
declare global {
  var SOME_GLOBAL: string;

  interface Window {
    xyz: string;
  }
}

function something() {
  console.log(SOME_GLOBAL);
  console.log(window.xyz);
  // if you don't you'll get an error like below
  // console.log(window.aaa);
}

// this needs to be added due to .ts(2669) error
// https://stackoverflow.com/questions/57132428/augmentations-for-the-global-scope-can-only-be-directly-nested-in-external-modul
export {};
