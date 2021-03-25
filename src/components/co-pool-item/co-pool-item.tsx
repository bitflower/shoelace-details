import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'co-pool-item',
  styleUrl: 'co-pool-item.css',
  shadow: true,
})
export class CoPoolItem {
  render() {
    return (
      <Host>
        <p>co-pool-item</p>
        <img src="https://unsplash.com/photos/KOID4ns1Ii4/download?force=true&w=640" />
      </Host>
    );
  }
}
