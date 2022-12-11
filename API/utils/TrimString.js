exports.trimSelector = (selector) => {
    word = selector.replace(/\n/g, "");
    return word
}

exports.removePsudoSelectors = (selector) => {
    const ignoredPseudos = [
        /* link */
        ':link',
        ':visited',
        /* user action */
        ':hover',
        ':active',
        ':focus',
        ':focus-within',
        /* UI element states */
        ':enabled',
        ':disabled',
        ':checked',
        ':indeterminate',
        /* form validation */
        ':required',
        ':invalid',
        ':valid',
        /* pseudo elements */
        '::first-line',
        '::first-letter',
        '::selection',
        '::before',
        '::after',
        /* pseudo classes */
        ':target',
        /* CSS2 pseudo elements */
        ':before',
        ':after',
        '::?-(?:moz|ms|webkit|o)-[a-z0-9-]+',
    ]
    // let joined = ignoredPseudos.join('|')

    // return selector.replace(/joined/g, "")
    let toRemove = /:link|:visited|:hover|:active|:focus-visible|:focus-within|:focus|:enabled|:disabled|:checked|:indeterminate|:required|:invalid|:valid|::first-line|::first-letter|::selection|::before|::after|:target|:before|:after|::?-(?:moz|ms|webkit|o)-[a-z0-9-]+/g;
    return selector.replace(toRemove, '');
}
// console.log(this.removePsudoSelectors("button:focus:not(:focus-visible)"))