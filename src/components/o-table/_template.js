import html from 'nanohtml';
import classnames from 'classnames';

import expandData from './js/expand-data';

export default ({
  caption,
  captionAlign,
  captionSide,
  headings,
  items,
  footers,
  classes,
}, childrenFragment) => {
  const { rows: headingsRows, props: headingsAttrs } = expandData(headings);
  const { rows: itemsRows, props: itemsAttrs } = expandData(items);
  const { rows: footersRows, props: footersAttrs } = expandData(footers);

  return html`
    <table class="o-table ${classes}">
      ${childrenFragment}
  
      ${caption && html`<caption class="o-table__caption ${classnames({
        [`u-align-${captionAlign}`]: captionAlign,
        [`o-table__caption--${captionSide}`]: captionSide,
      })}">${caption}</caption>`}
      
      ${Array.isArray(headingsRows) && html`
        <thead class="o-table__head" ${headingsAttrs}>
          ${headingsRows.map(({ cells, ...rowAttrs }) => html`
            <tr class="o-table__row o-table__row--head" ${rowAttrs}>
              ${Array.isArray(cells) && cells.map(({ text, ...attrs }) => html`
                <th class="o-table__cell o-table__cell--head ${classnames({
                  [`u-align-${attrs.align}`]: attrs.align,
                  [`o-table__cell--sort o-table__cell--sort-${attrs.sort}`]: attrs.sort,
                  'o-table__cell--sort-active': attrs.sortActive,
                })}" ${attrs}>${text}</th>
              `)}
            </tr>
          `)}
        </thead>
      `}

      ${Array.isArray(footersRows) && html`
        <tfoot class="o-table__foot" ${footersAttrs}>
          ${footersRows.map(({ cells, ...rowAttrs }) => html`
            <tr class="o-table__row o-table__row--foot" ${rowAttrs}>
              ${Array.isArray(cells) && cells.map(({ text, ...attrs }) => html`
                <td class="o-table__cell o-table__cell--foot ${classnames({
                  [`u-align-${attrs.align}`]: attrs.align,
                })}" ${attrs}>${text}</td>
              `)}
            </tr>
          `)}
        </tfoot>
      `}
  
      ${Array.isArray(itemsRows) && html`
        <tbody class="o-table__body" ${itemsAttrs}>
          ${itemsRows.map(({ cells, ...rowAttrs }) => html`
            <tr class="o-table__row  ${classnames({
              'o-table__row--action': rowAttrs.action,
            })}" ${rowAttrs}>
              ${Array.isArray(cells) && cells.map(({ text, ...attrs }) => html`
                <td class="o-table__cell ${classnames({
                  'o-table__cell--action': attrs.action,
                  'o-table__cell--strong': attrs.strong,
                  'o-table__cell--bold': attrs.bold,
                  [`u-align-${attrs.align}`]: attrs.align,
                  [`o-table__cell--state-${attrs.state}`]: attrs.state,
                })}" ${attrs}>${text}</td>
              `)}
            </tr>
          `)}
        </tbody>
      `}
    </table>
  `;
};
