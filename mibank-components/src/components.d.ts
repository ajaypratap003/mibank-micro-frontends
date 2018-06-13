/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface MiHeading {
      'first': string;
      'last': string;
    }
  }

  interface HTMLMiHeadingElement extends StencilComponents.MiHeading, HTMLStencilElement {}

  var HTMLMiHeadingElement: {
    prototype: HTMLMiHeadingElement;
    new (): HTMLMiHeadingElement;
  };
  interface HTMLElementTagNameMap {
    'mi-heading': HTMLMiHeadingElement;
  }
  interface ElementTagNameMap {
    'mi-heading': HTMLMiHeadingElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'mi-heading': JSXElements.MiHeadingAttributes;
    }
  }
  namespace JSXElements {
    export interface MiHeadingAttributes extends HTMLAttributes {
      'first'?: string;
      'last'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MiNavigation {
      'first': string;
      'last': string;
    }
  }

  interface HTMLMiNavigationElement extends StencilComponents.MiNavigation, HTMLStencilElement {}

  var HTMLMiNavigationElement: {
    prototype: HTMLMiNavigationElement;
    new (): HTMLMiNavigationElement;
  };
  interface HTMLElementTagNameMap {
    'mi-navigation': HTMLMiNavigationElement;
  }
  interface ElementTagNameMap {
    'mi-navigation': HTMLMiNavigationElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'mi-navigation': JSXElements.MiNavigationAttributes;
    }
  }
  namespace JSXElements {
    export interface MiNavigationAttributes extends HTMLAttributes {
      'first'?: string;
      'last'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MiPieGraph {
      'first': string;
      'last': string;
    }
  }

  interface HTMLMiPieGraphElement extends StencilComponents.MiPieGraph, HTMLStencilElement {}

  var HTMLMiPieGraphElement: {
    prototype: HTMLMiPieGraphElement;
    new (): HTMLMiPieGraphElement;
  };
  interface HTMLElementTagNameMap {
    'mi-pie-graph': HTMLMiPieGraphElement;
  }
  interface ElementTagNameMap {
    'mi-pie-graph': HTMLMiPieGraphElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'mi-pie-graph': JSXElements.MiPieGraphAttributes;
    }
  }
  namespace JSXElements {
    export interface MiPieGraphAttributes extends HTMLAttributes {
      'first'?: string;
      'last'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MiSection {
      'first': string;
      'last': string;
    }
  }

  interface HTMLMiSectionElement extends StencilComponents.MiSection, HTMLStencilElement {}

  var HTMLMiSectionElement: {
    prototype: HTMLMiSectionElement;
    new (): HTMLMiSectionElement;
  };
  interface HTMLElementTagNameMap {
    'mi-section': HTMLMiSectionElement;
  }
  interface ElementTagNameMap {
    'mi-section': HTMLMiSectionElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'mi-section': JSXElements.MiSectionAttributes;
    }
  }
  namespace JSXElements {
    export interface MiSectionAttributes extends HTMLAttributes {
      'first'?: string;
      'last'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MiTable {
      'first': string;
      'last': string;
    }
  }

  interface HTMLMiTableElement extends StencilComponents.MiTable, HTMLStencilElement {}

  var HTMLMiTableElement: {
    prototype: HTMLMiTableElement;
    new (): HTMLMiTableElement;
  };
  interface HTMLElementTagNameMap {
    'mi-table': HTMLMiTableElement;
  }
  interface ElementTagNameMap {
    'mi-table': HTMLMiTableElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'mi-table': JSXElements.MiTableAttributes;
    }
  }
  namespace JSXElements {
    export interface MiTableAttributes extends HTMLAttributes {
      'first'?: string;
      'last'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;