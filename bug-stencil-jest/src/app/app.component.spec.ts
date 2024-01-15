import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { render, screen, waitFor } from '@testing-library/angular';

describe('AppComponent', () => {
  const setup = async (): Promise<{
    container: Element;
    fixture: ComponentFixture<AppComponent>;
  }> => {
    const { container, fixture } = await render(AppComponent, {
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    return { container, fixture };
  };

  it('should create', async () => {
    await setup();

    await waitFor(
      () => {
        expect(screen.getByText("Hello, World! I'm nicolas")).toBeInTheDocument();
      },
      { timeout: 10000 }
    );
    screen.logTestingPlaygroundURL();
  });
});
