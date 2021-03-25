import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  @State()
  protected selectedTab: 'page' | 'modules' = 'page';

  private onTabChanged = (e: CustomEvent<any>): void => {
    this.selectedTab = e.detail.value;
  };

  private renderPage() {
    return (
      <div
        class="page-content-edit"
        style={{
          display: this.selectedTab === 'page' ? 'block' : 'none',
        }}
      >
        SEITE
        {/* <co-view-content-edit-panel
          ref={(el) => (this.formPanel = el)}
          viewId={this.viewId}
          reorderDelete={this.isReorderDelete}
        />
        {this.renderPlus()} */}
      </div>
    );
  }

  private renderModules() {
    return this.selectedTab === 'modules' ? (
      <app-profile
      // onValueChange={this.onAtomSelected}
      />
    ) : null;
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-segment value={this.selectedTab} onIonChange={this.onTabChanged}>
        <ion-segment-button value="page">
          {/* <CoIcon name='ion-document-outline' /> */}
          <ion-label>Seite</ion-label>
        </ion-segment-button>
        <ion-segment-button value="modules">
          {/* <CoIcon name='ion-document-outline' /> */}
          <ion-label>Module</ion-label>
        </ion-segment-button>
      </ion-segment>,

      <div class={{ content: true }}>
        {this.renderPage()}
        {this.renderModules()}
      </div>,

      // <ion-content class="ion-padding">

      // </ion-content>,
    ];
  }
}
