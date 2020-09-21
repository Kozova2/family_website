'use strict';
import katex from 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.mjs';

const katexIn = document.getElementById('katex_in');
const katexOut = document.getElementById('katex_out');
const katexBtn = document.getElementById('katex_btn');

katexBtn.addEventListener('click', () => {
    katex.render(katexIn.value, katexOut, {
        throwOnError: true
    });
});
