'use strict';

const katexIn = document.getElementById('katex_in');
const katexOut = document.getElementById('katex_out');
const katexBtn = document.getElementById('katex_btn');
const loadKatexBtn = document.getElementById('katex_load_btn');


async function addKatex() {
    const katex = await import('https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.mjs');

    katexIn.addEventListener('click', () => {
        katex.render(katexIn.value, katexOut, {
            throwOnError: true
        });
    });
    loadKatexBtn.disabled = true;
    katexBtn.disabled = false;
}

loadKatexBtn.addEventListener('click', addKatex);
