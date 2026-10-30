<template>
  <div class="output-field">
    <div
      v-html="formatted"
      class="output-field-formatted"
    ></div>
  </div>
</template>

<script>
import { diffChars } from 'diff';
import hljs from 'highlight.js/lib/core';
import css from 'highlight.js/lib/languages/css';
hljs.registerLanguage('css', css);

export default {
  name: 'OutputField',
  props: {
    fieldA: {
      type: String,
      default: ''
    },
    fieldB: {
      type: String,
      default: ''
    }
  },
  computed: {
    formatted: function () {
      const options = {
        language: 'css'
      };

      return diffChars(this.fieldA, this.fieldB)
        .map((token) => {
          let span = '<span>';
          if (token.added) {
            span = '<span class="output-added">';
          } else if (token.removed) {
            span = '<span class="output-removed">';
          }
          return span + hljs.highlight(token.value, options).value + '</span>';
        })
        .join('');
    }
  }
};
</script>

<style>
.output-field {
  overflow: auto;
  font-family: monospace;
}
.output-field-formatted {
  word-wrap: anywhere;
}
.output-added {
  background: var(--diff-added);
  border-top: 1px solid var(--diff-added-border);
}
.output-removed {
  background: var(--diff-removed);
  border-bottom: 1px solid var(--diff-removed-border);
}

.hljs {
  color: currentcolor;
  font-weight: bold;
}
.hljs-doctag,
.hljs-keyword,
.hljs-meta .hljs-keyword,
.hljs-template-tag,
.hljs-template-variable,
.hljs-type,
.hljs-variable.language_ {
  color: var(--hljs-keyframes);
}
.hljs-title,
.hljs-title.class_,
.hljs-title.class_.inherited__,
.hljs-title.function_ {
  color: var(--hljs-keyframes);
}
.hljs-number {
  color: var(--hljs-number);
}
.hljs-attr,
.hljs-attribute,
.hljs-literal,
.hljs-meta,
.hljs-operator,
.hljs-variable,
.hljs-selector-attr,
.hljs-selector-class,
.hljs-selector-id {
  color: var(--light-text);
}
.hljs-regexp,
.hljs-string,
.hljs-meta .hljs-string {
  color: var(--hljs-string);
}
.hljs-built_in,
.hljs-symbol {
  color: var(--hljs-symbol);
}
.hljs-comment,
.hljs-code,
.hljs-formula {
  color: var(--hljs-comment);
  font-style: italic;
}
.hljs-name,
.hljs-quote,
.hljs-selector-tag,
.hljs-selector-pseudo {
  color: var(--hljs-tag);
}
.hljs-subst {
}
.hljs-section {
  font-weight: bold;
}
.hljs-bullet {
}
.hljs-emphasis {
  font-style: italic;
}
.hljs-strong {
  font-weight: bold;
}
.hljs-addition {
}
.hljs-deletion {
}
.hljs-char.escape_,
.hljs-link,
.hljs-params,
.hljs-property,
.hljs-punctuation,
.hljs-tag {
}
</style>
