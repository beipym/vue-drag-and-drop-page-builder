import { vueFetch } from 'use-lightweight-fetch';

// get images
const {
  handleData: handleGetComponents,
  fetchedData: fetchedComponents,
  isError: isErrorComponents,
  error: errorComponents,
  errors: errorsComponents,
  isLoading: isLoadingComponents,
  isSuccess: isSuccessComponents,
} = vueFetch();

export default {
  namespaced: true,

  // state
  state: {
    menuPreview: false,
    menuRight: true,
    textAreaVueModel: null,
    nextSibling: null,
    parentElement: null,
    restoredElement: null,
    currentClasses: [],
    fontVerticalPadding: null,
    fontHorizontalPadding: null,
    fontVerticalMargin: null,
    fontHorizontalMargin: null,
    fontStyle: null,
    fontFamily: null,
    fontWeight: null,
    fontBase: null,
    fontDesktop: null,
    fontTablet: null,
    fontMobile: null,
    enabledCustomColorBG: null,
    backgroundColorCustom: null,
    backgroundColor: null,
    component: null,
    components: [],
    currentImagePreview: null,
    currentClickedImage: null,
    fetchedComponents: [],
  },

  // getters
  getters: {
    getMenuPreview(state) {
      return state.menuPreview;
    },
    getMenuRight(state) {
      return state.menuRight;
    },
    getTextAreaVueModel(state) {
      return state.textAreaVueModel;
    },
    getNextSibling(state) {
      return state.nextSibling;
    },
    getParentElement(state) {
      return state.parentElement;
    },
    getRestoredElement(state) {
      return state.restoredElement;
    },
    getCurrentClasses(state) {
      return state.currentClasses;
    },
    getFontStyle(state) {
      return state.fontStyle;
    },
    getFontVerticalPadding(state) {
      return state.fontVerticalPadding;
    },
    getFontHorizontalPadding(state) {
      return state.fontHorizontalPadding;
    },
    getFontVerticalMargin(state) {
      return state.fontVerticalMargin;
    },
    getFontHorizontalMargin(state) {
      return state.fontHorizontalMargin;
    },
    getFontFamily(state) {
      return state.fontFamily;
    },
    getFontWeight(state) {
      return state.fontWeight;
    },
    getFontBase(state) {
      return state.fontBase;
    },
    getFontDesktop(state) {
      return state.fontDesktop;
    },
    getFontTablet(state) {
      return state.fontTablet;
    },
    getFontMobile(state) {
      return state.fontMobile;
    },
    getBackgroundColor(state) {
      return state.backgroundColor;
    },
    getEnabledCustomColorBG(state) {
      return state.enabledCustomColorBG;
    },
    getBackgroundColorCustom(state) {
      return state.backgroundColorCustom;
    },
    getComponent(state) {
      return state.component;
    },
    // current element
    getComponents(state) {
      return state.components;
    },
    getCurrentClickedImage(state) {
      return state.currentClickedImage;
    },

    //
    // current image
    getCurrentImagePreview(state) {
      // create a new HTML div
      let currentImage = document.createElement('div');
      // set the new HTML div equal to state and current element
      currentImage.innerHTML = state.component?.outerHTML;

      // check now if the new HTML contains any images
      if (currentImage.getElementsByTagName('img').length === 0) {
        // return null since there is zero image
        return null;
      }
      // return true if current element contains exactly one image
      if (currentImage.getElementsByTagName('img').length === 1) {
        currentImage = currentImage.getElementsByTagName('img')[0].src;
        // return clicked image
        return currentImage;
      }
      if (currentImage.getElementsByTagName('img').length > 1) {
        // return null since there is more than one image
        return null;
      }
    },
    getFetchedComponents(state) {
      return state.fetchedComponents;
    },
  },

  mutations: {
    setMenuPreview(state, payload) {
      state.menuPreview = payload;
    },
    setMenuRight(state, payload) {
      state.menuRight = payload;
    },
    setTextAreaVueModel(state, payload) {
      state.textAreaVueModel = payload;
    },
    setNextSibling(state, payload) {
      state.nextSibling = payload;
    },
    setParentElement(state, payload) {
      state.parentElement = payload;
    },
    setRestoredElement(state, payload) {
      state.restoredElement = payload;
    },
    setClass(state, payload) {
      state.currentClasses = [...state.currentClasses, payload];
    },
    removeClass(state, payload) {
      state.currentClasses = state.currentClasses.filter(
        (cls) => cls !== payload
      );
    },
    setCurrentClasses(state, payload) {
      state.currentClasses = Array.from(payload);
    },
    setFontVerticalPadding(state, payload) {
      state.fontVerticalPadding = payload;
    },
    setFontHorizontalPadding(state, payload) {
      state.fontHorizontalPadding = payload;
    },
    setFontVerticalMargin(state, payload) {
      state.fontVerticalMargin = payload;
    },
    setFontHorizontalMargin(state, payload) {
      state.fontHorizontalMargin = payload;
    },
    setFontStyle(state, payload) {
      state.fontStyle = payload;
    },
    setFontFamily(state, payload) {
      state.fontFamily = payload;
    },
    setFontWeight(state, payload) {
      state.fontWeight = payload;
    },
    setFontBase(state, payload) {
      state.fontBase = payload;
    },
    setFontDesktop(state, payload) {
      state.fontDesktop = payload;
    },
    setFontTablet(state, payload) {
      state.fontTablet = payload;
    },
    setFontMobile(state, payload) {
      state.fontMobile = payload;
    },
    setBackgroundColor(state, payload) {
      state.backgroundColor = payload;
    },
    setBackgroundColorCustom(state, payload) {
      state.backgroundColorCustom = payload;
    },
    setEnabledCustomColorBG(state, payload) {
      state.enabledCustomColorBG = payload;
    },
    setComponent(state, payload) {
      state.component = {};
      state.component = payload;
    },
    setComponents(state, payload) {
      state.components = {};
      state.components = payload;
    },

    setCurrentClickedImage(state, payload) {
      state.currentClickedImage = payload;
    },

    setCurrentImagePreview(state, payload) {
      // set clicked element (which is the image & select the image src) to equal payload
      // payload source is the new image src
      state.component.src = payload;
      // set currebt image
      state.currentImagePreview = payload;
    },
    setCurrentLayoutPreview(state, payload) {
      localStorage.setItem('preview', payload);
    },
    setFetchedComponents(state, payload) {
      state.fetchedComponents = payload;
    },
  },

  // actions
  actions: {
    // load products
    loadComponents(context, payload) {
      handleGetComponents(
        '/components.json',
        {},
        {
          additionalCallTime: 300,
          abortTimeoutTime: 8000,
        }
      );

      // context & send to mutation
      context.commit('setFetchedComponents', {
        fetchedData: fetchedComponents,
        isError: isErrorComponents,
        error: errorComponents,
        errors: errorsComponents,
        isLoading: isLoadingComponents,
        isSuccess: isSuccessComponents,
      });
    },
  },
};
