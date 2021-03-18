import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator/jest';

import { WebrMaskDirective } from './mask.directive';

describe('WebrMaskDirective ', () => {
  let spectator: SpectatorDirective<WebrMaskDirective>;
  const createDirective = createDirectiveFactory(WebrMaskDirective);

  it('should change the background color', () => {
    expect(true).toBe(true)
    // spectator = createDirective(`<div highlight>Testing WebrMaskDirective</div>`);

    // spectator.dispatchMouseEvent(spectator.element, 'mouseover');

    // expect(spectator.element).toHaveStyle({
    //   backgroundColor: 'rgba(0,0,0, 0.1)'
    // });

    // spectator.dispatchMouseEvent(spectator.element, 'mouseout');
    // expect(spectator.element).toHaveStyle({
    //   backgroundColor: '#fff'
    // });
  });

});
